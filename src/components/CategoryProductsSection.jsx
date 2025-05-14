import React, { useState, useEffect } from 'react'
import {
  HeartIcon,
  StarIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'
import ProductFilter from './ProductFilter'
import { useCart } from '../CartContext'

// Import images
import promo1 from '../assets/banner-17.jpg.png'
import promo2 from '../assets/banner-18.jpg.png'
import product1 from '../assets/413.png'
import product2 from '../assets/420.png'
import product3 from '../assets/424.png'
import product4 from '../assets/432.png'
import product5 from '../assets/436.png'
import product6 from '../assets/440.png'

const promotions = [
  {
    id: 1,
    title: 'Make your grocery shopping easy with us',
    subtitle: 'Feed your family the best',
    image: promo1
  },
  {
    id: 2,
    title: 'Get your everyday needs here with us',
    subtitle: 'A different kind of grocery store',
    image: promo2
  },
]

const products = [
  {
    id: 1,
    discount: '11%',
    title: 'Great Value Rising Crust Frozen Pizza, Supreme',
    isColdSale: true,
    timer: '87 06 57 08',
    rating: 4,
    reviews: 3,
    price: 8.99,
    originalPrice: 9.99,
    image: product1,
    category: 'frozen',
    color: 'red',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 2,
    discount: '13%',
    title: 'Simple Kitchen FD Sliced Strawberries – 1.08lb',
    isColdSale: false,
    reviews: 3,
    timer: '68 06 57 08',
    rating: 3,
    price: 21.90,
    originalPrice: 24.90,
    image: product2,
    category: 'fruits',
    color: 'red',
    brand: 'organic',
    inStock: true
  },
  {
    id: 3,
    discount: '26%',
    title: 'Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza – ...',
    isColdSale: true,
    timer: '08 06 57 08',
    rating: 3,
    reviews: 3,
    price: 14.99,
    originalPrice: 19.99,
    image: product3,
    category: 'frozen',
    color: 'red',
    brand: 'fresh',
    inStock: false
  },
  {
    id: 4,
    discount: '8%',
    title: 'Oscar Mayer Ham & Swiss Melt Scrambler – 3oz',
    isColdSale: false,
    timer: '77 06 57 08',
    rating: 4,
    reviews: 3,
    price: 11.90,
    originalPrice: 12.90,
    image: product4,
    category: 'meals',
    color: 'yellow',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 5,
    discount: '16%',
    title: 'Large Garden Spinach & Herb Wrap Tortillas – 15oz, 6ct',
    isColdSale: false,
    timer: '86 06 57 08',
    rating: 4,
    reviews: 3,
    price: 27.90,
    originalPrice: 32.90,
    image: product5,
    category: 'grocery',
    color: 'green',
    brand: 'organic',
    inStock: true
  },
  {
    id: 6,
    discount: '14%',
    title: 'Great Value Rising Crust Pizza, Cheese, 27.4 oz',
    isColdSale: false,
    timer: '88 06 57 08',
    rating: 3,
    reviews: 2,
    price: 12.89,
    originalPrice: 14.89,
    image: product6,
    category: 'frozen',
    color: 'yellow',
    brand: 'organic',
    inStock: false
  },
]

function CategoryProductsSection() {
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    price: [0, 30],
    categories: [],
    colors: [],
    brands: [],
    inStock: false,
    onSale: false
  });
  const { addToCart } = useCart();

  useEffect(() => {
    // Apply filters to products
    let filtered = [...products];

    // Filter by price
    if (filters.price) {
      filtered = filtered.filter(product => 
        product.price >= filters.price[0] && 
        product.price <= filters.price[1]
      );
    }

    // Filter by categories
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Filter by colors
    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        filters.colors.includes(product.color)
      );
    }

    // Filter by brands
    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter(product => 
        filters.brands.includes(product.brand)
      );
    }

    // Filter by stock status
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Filter by sale status
    if (filters.onSale) {
      filtered = filtered.filter(product => 
        product.originalPrice > product.price
      );
    }

    setFilteredProducts(filtered);
  }, [filters]);

  const handleFilterChange = (filter) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter.type]: filter.value
    }));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Featured Products</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-2"></div>
            <span className="text-sm text-gray-600">Discover our popular items available until the end of March</span>
          </div>
          <button 
            onClick={() => window.location.hash = 'shop'}
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            View All <ArrowRightIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
        
        {/* Promotion banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {promotions.map((promo) => (
            <div key={promo.id} className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-8 flex-1">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">Weekly Special</span>
                <h3 className="mt-4 text-2xl font-bold text-indigo-900">{promo.title}</h3>
                <p className="mt-2 text-gray-600">{promo.subtitle}</p>
                <button 
                  onClick={() => window.location.hash = 'shop'}
                  className="mt-6 inline-flex items-center bg-white text-indigo-600 px-5 py-2 rounded-full shadow hover:shadow-md hover:bg-indigo-50 transition-all duration-300"
                >
                  Shop Now <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="h-56 md:h-auto bg-gray-200 flex items-center justify-center flex-1 overflow-hidden">
                <img src={promo.image} alt={promo.title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Filter Toggle Button (Mobile) */}
        <div className="md:hidden mb-4">
          <button 
            onClick={toggleFilters}
            className="w-full flex items-center justify-center bg-indigo-100 text-indigo-700 py-3 rounded-md font-medium"
          >
            <FunnelIcon className="w-4 h-4 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Main content with filters */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter sidebar */}
          <div className={`md:w-1/4 lg:w-1/5 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <ProductFilter onFilterChange={handleFilterChange} />
          </div>
          
          {/* Product grid */}
          <div className="md:w-3/4 lg:w-4/5">
            {filteredProducts.length === 0 ? (
              <div className="bg-indigo-50 rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium text-indigo-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    data-product-id={product.id}
                    className="product-card group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full cursor-pointer"
                  >
                    <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {product.discount}
                    </span>
                    <button 
                      className="absolute top-2 right-2 z-10 text-gray-400 hover:text-red-500 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent navigation when clicking the heart icon
                      }}
                    >
                      <HeartIcon className="w-5 h-5" />
                    </button>
                    <div className="relative h-36 bg-indigo-50 flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="object-contain h-full w-full p-2 group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      {product.isColdSale && (
                        <div className="mb-2">
                          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">FLASH SALE</span>
                        </div>
                      )}
                      <div className="flex items-center mb-1">
                        {Array.from({ length: product.rating }).map((_, idx) => (
                          <StarIcon key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      {product.isColdSale && (
                        <div className="text-xs text-gray-500 mb-2">
                          <span className="font-medium">{product.timer}</span> <span className="ml-1 text-gray-400">remaining</span>
                        </div>
                      )}
                      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 flex-grow">
                        {product.title}
                      </h3>
                      <div className="flex items-baseline space-x-2 mb-2">
                        <span className="text-indigo-600 font-bold text-lg">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-gray-400 line-through text-sm">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <button 
                        className="mt-auto w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent navigation when clicking the add to cart button
                          addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.image
                          }, 1);
                        }}
                      >
                        <ShoppingCartIcon className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryProductsSection 