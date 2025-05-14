import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import CategorySection from './components/CategorySection'
import EditorPickSection from './components/EditorPickSection'
import CategoryProductsSection from './components/CategoryProductsSection'
import BestSellersSection from './components/BestSellersSection'
import PromoRow from './components/PromoRow'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import ShopAllProducts from './components/ShopAllProducts'
import Checkout from './components/Checkout'
import Contact from './components/Contact'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Beverages from './components/Beverages'
import FruitsVegetables from './components/FruitsVegetables'
import AboutUs from './pages/AboutUs'
import MyAccount from './components/MyAccount'
import WishlistAdd from './components/WishlistAdd'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [productId, setProductId] = useState(null);
  const [blogPostId, setBlogPostId] = useState(null);
  
  // Simple routing using URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash.startsWith('product/')) {
        const id = hash.split('/')[1];
        setProductId(id);
        setCurrentPage('product');
      } else if (hash.startsWith('blog/')) {
        const id = hash.split('/')[1];
        setBlogPostId(id);
        setCurrentPage('blogpost');
      } else if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Initial route
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set global navigation handlers on product cards
  useEffect(() => {
    // Make product cards clickable to navigate to product details
    const makeProductsClickable = () => {
      const productCards = document.querySelectorAll('.product-card');
      productCards.forEach(card => {
        card.addEventListener('click', (e) => {
          if (!e.target.closest('button')) { // Ignore clicks on buttons (like add to cart)
            const productId = card.dataset.productId || '1'; // Default to ID 1 if not set
            window.location.hash = `product/${productId}`;
          }
        });
      });
    };
    
    // Add class and data attributes to product cards
    const productElements = document.querySelectorAll('.group.relative.bg-white.border.border-gray-200.rounded-xl');
    productElements.forEach((el, index) => {
      el.classList.add('product-card');
      el.dataset.productId = index + 1;
      el.style.cursor = 'pointer';
    });
    
    makeProductsClickable();
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'product':
        return <ProductDetail productId={productId} />;
      case 'cart':
        return <Cart />;
      case 'shop':
        return <ShopAllProducts />;
      case 'checkout':
        return <Checkout />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'blogpost':
        return <BlogPost postId={blogPostId} />;
      case 'beverages':
        return <Beverages />;
      case 'fruits-vegetables':
        return <FruitsVegetables />;
      case 'about-us':
        return <AboutUs />;
      case 'my-account':
        return <MyAccount />;
      case 'wishlist-add':
        return <WishlistAdd />;
      default:
        return (
          <>
            <HeroBanner />
            <CategorySection />
            <EditorPickSection />
            <CategoryProductsSection />
            <BestSellersSection />
            <PromoRow />
            <NewsSection />
          </>
        );
    }
  };

  return (
    <>
      <Navbar />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App
