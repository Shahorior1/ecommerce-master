import React, { useState } from 'react';
import { 
  HeartIcon, 
  StarIcon, 
  ShoppingCartIcon,
  ShareIcon,
  ArrowsRightLeftIcon,
  MinusIcon,
  PlusIcon,
  EnvelopeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useCart } from '../CartContext';

// Import product images
import bananaMain from '../assets/34.png';
import bananaThumb1 from '../assets/34.png';
import bananaThumb2 from '../assets/35.png';
import bananaThumb3 from '../assets/40.png';

// Import related product images
import product1 from '../assets/list02.png';
import product2 from '../assets/456.png';
import product3 from '../assets/list17.png';
import product4 from '../assets/list20.png';
import product5 from '../assets/list23.png';

const relatedProducts = [
  {
    id: 1,
    name: 'Large Garden Spinach & Herb Wrap Tortillas – 15oz, 6ct',
    image: product1,
    rating: 3,
    reviews: 3,
    price: 27.90,
    originalPrice: 32.90,
    discount: '13%',
  },
  {
    id: 2,
    name: 'Peach - each',
    image: product2,
    rating: 3,
    reviews: 3,
    price: 0.75,
    originalPrice: 1.75,
    discount: '64%',
  },
  {
    id: 3,
    name: 'Yellow Potatoes Whole Fresh, 5lb Bag',
    image: product3,
    rating: 3,
    reviews: 3,
    price: 0.50,
    originalPrice: 1.99,
    discount: '75%',
  },
  {
    id: 4,
    name: 'Fresh Cauliflower, Each',
    image: product4,
    rating: 2,
    reviews: 2,
    price: 12.79,
    originalPrice: 14.79,
    discount: '14%',
  },
  {
    id: 5,
    name: 'Fresh Broccoli Crowns, Each',
    image: product5,
    rating: 3,
    reviews: 3,
    price: 11.54,
    originalPrice: 17.88,
    discount: '35%',
  }
];

// Define the product data (in a real app, this would come from an API or props)
const productData = {
  id: 101,
  title: 'Marketside Fresh Organic Bananas, Bunch',
  price: 0.89,
  originalPrice: 1.99,
  discount: '31%',
  rating: 5,
  reviews: 3,
  image: bananaMain,
  category: 'fruits',
  color: 'yellow',
  brand: 'organic',
  inStock: true
};

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(bananaMain);
  const { addToCart } = useCart();
  
  // Timer countdown
  const [hours, minutes, seconds] = ["01", "06", "50"];
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(productData, quantity);
    
    // Optional: Show success message
    alert(`${quantity} ${productData.title} added to cart!`);
  };
  
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">Shop</a>
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">Fruits & Vegetables</a>
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-indigo-600 transition-colors">Exotic Fruits & Veggies</a>
              <span className="mx-2">/</span>
              <span className="text-gray-500">Marketside Fresh Organic Bananas, Bunch</span>
            </div>
            <button 
              onClick={() => window.location.hash = ''}
              className="text-sm flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Products
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-2/5">
            <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden group relative">
              <img 
                src={selectedImage} 
                alt="Marketside Fresh Organic Bananas" 
                className="w-full h-auto object-contain transition-transform duration-300 p-4"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button 
                  className="bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 transition-colors"
                  onClick={(e) => {
                    // Open full-size image in new tab or show in lightbox
                    window.open(selectedImage, '_blank');
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setSelectedImage(bananaThumb1)}
                className={`border rounded-md overflow-hidden w-20 h-20 flex items-center justify-center transition-all duration-200 ${selectedImage === bananaThumb1 ? 'border-indigo-600 ring-2 ring-indigo-200' : 'border-gray-200 hover:border-indigo-300'}`}
              >
                <img src={bananaThumb1} alt="Banana view 1" className="w-full h-full object-contain p-1" />
              </button>
              <button 
                onClick={() => setSelectedImage(bananaThumb2)}
                className={`border rounded-md overflow-hidden w-20 h-20 flex items-center justify-center transition-all duration-200 ${selectedImage === bananaThumb2 ? 'border-indigo-600 ring-2 ring-indigo-200' : 'border-gray-200 hover:border-indigo-300'}`}
              >
                <img src={bananaThumb2} alt="Banana view 2" className="w-full h-full object-contain p-1" />
              </button>
              <button 
                onClick={() => setSelectedImage(bananaThumb3)}
                className={`border rounded-md overflow-hidden w-20 h-20 flex items-center justify-center transition-all duration-200 ${selectedImage === bananaThumb3 ? 'border-indigo-600 ring-2 ring-indigo-200' : 'border-gray-200 hover:border-indigo-300'}`}
              >
                <img src={bananaThumb3} alt="Banana view 3" className="w-full h-full object-contain p-1" />
              </button>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-3/5">
            <div className="mb-4">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  ORGANIC
                </span>
                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V5z" clipRule="evenodd" />
                  </svg>
                  SALE
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  BEST SELLER
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  NEW ARRIVAL
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketside Fresh Organic Bananas, Bunch</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3].map((star) => (
                    <StarIcon key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <StarIcon className="w-4 h-4 text-gray-300" />
                  <StarIcon className="w-4 h-4 text-gray-300" />
                </div>
                <span className="ml-2 text-sm text-gray-600">3.00</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-gray-600">2 Reviews</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-gray-600">SKU: B7RDGRJ0</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti
                  sociosqu ad litora torquent Vivamus adipiscing nisl ut dolor dignissim semper.
                </p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-2">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Freshness Guarantee</p>
                      <p className="text-sm text-gray-600">Direct farm sourced for ultimate freshness</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-2">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">100% Certified Organic</p>
                      <p className="text-sm text-gray-600">Pesticide-free and non-GMO verified</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-2">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Same Day Delivery</p>
                      <p className="text-sm text-gray-600">Order before 2pm for same day shipping</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full mr-2">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Secure Payment</p>
                      <p className="text-sm text-gray-600">Multiple payment options available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-baseline mb-6">
                <span className="text-red-600 font-bold text-3xl mr-2">$0.89</span>
                <span className="text-gray-500 line-through text-xl">$1.99</span>
                <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded font-medium">55% OFF</span>
              </div>
              
              <div className="mb-6">
                <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center">
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </button>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg mb-6">
                <div className="text-sm font-medium text-orange-800 mb-2">Special Offer:</div>
                <div className="flex items-center space-x-2 text-center">
                  <div className="bg-white rounded-md p-2 w-10">
                    <div className="text-lg font-bold text-orange-800">01</div>
                    <div className="text-xs text-gray-500">Hours</div>
                  </div>
                  <span className="text-orange-800 font-bold">:</span>
                  <div className="bg-white rounded-md p-2 w-10">
                    <div className="text-lg font-bold text-orange-800">06</div>
                    <div className="text-xs text-gray-500">Mins</div>
                  </div>
                  <span className="text-orange-800 font-bold">:</span>
                  <div className="bg-white rounded-md p-2 w-10">
                    <div className="text-lg font-bold text-orange-800">50</div>
                    <div className="text-xs text-gray-500">Secs</div>
                  </div>
                  <div className="ml-2 text-xs text-gray-600">
                    Remains until the end of the offer
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="border border-gray-300 rounded-md flex items-center mr-4">
                  <button 
                    className="p-2 text-gray-500 hover:text-indigo-600 focus:outline-none"
                    onClick={decreaseQuantity}
                  >
                    <MinusIcon className="w-5 h-5" />
                  </button>
                  <input 
                    type="text" 
                    value={quantity} 
                    readOnly
                    className="w-12 text-center border-none focus:outline-none text-gray-700"
                  />
                  <button 
                    className="p-2 text-gray-500 hover:text-indigo-600 focus:outline-none"
                    onClick={increaseQuantity}
                  >
                    <PlusIcon className="w-5 h-5" />
                  </button>
                </div>
                
                <button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition-colors mr-3 flex items-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingCartIcon className="w-5 h-5 mr-2" />
                  Add to cart
                </button>
                
                <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Buy Now
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <div className="flex items-start mb-3">
                    <div className="mr-3">
                      <ShoppingCartIcon className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Payment:</div>
                      <div className="text-sm text-gray-600">
                        Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, 5% discount in case of payment.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3">
                      <ShieldCheckIcon className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Warranty:</div>
                      <div className="text-sm text-gray-600">
                        The Consumer Protection Act does not provide for the return of this product of proper quality.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex border-t border-gray-200 pt-6 space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <HeartIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm">Add to wishlist</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <ShareIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm">Share this Product</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    <ArrowsRightLeftIcon className="w-5 h-5 mr-1" />
                    <span className="text-sm">Compare</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              <button 
                className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'description' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews (2)
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none mb-12">
            {activeTab === 'description' ? (
              <div>
                <p className="mb-4">
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem interdum et. Cras imperdiet est in nunc tristique lacinia. Suspendisse velt ex, aliquet vel ornare vel, dignissim a tortor.
                </p>
                <p>
                  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat euistor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultrices cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut et arcu. Morbi aliquam dignissim sit amet leo, nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold mb-4">Customer Reviews</h3>
                <div className="mb-6 border-b pb-6 border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <StarIcon className="w-4 h-4 text-gray-300" />
                      <StarIcon className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">John Doe</span>
                    <span className="ml-2 text-xs text-gray-500">June 15, 2023</span>
                  </div>
                  <p className="text-gray-600">Very fresh bananas, arrived in perfect condition and ripened nicely over a few days. Would buy again!</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <StarIcon className="w-4 h-4 text-gray-300" />
                      <StarIcon className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">Jane Smith</span>
                    <span className="ml-2 text-xs text-gray-500">May 22, 2023</span>
                  </div>
                  <p className="text-gray-600">Good quality organic bananas. They are a bit smaller than conventional ones but taste much better. Great for smoothies!</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {relatedProducts.map((product) => (
              <div 
                key={product.id} 
                data-product-id={product.id}
                className="product-card group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => {
                  window.location.hash = `product/${product.id}`;
                }}
              >
                <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {product.discount}
                </span>
                <button 
                  className="absolute top-2 right-2 z-10 text-gray-400 hover:text-red-500 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HeartIcon className="w-5 h-5" />
                </button>
                <div className="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="object-contain h-full w-full p-2 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center mb-1">
                    {Array.from({ length: product.rating }).map((_, idx) => (
                      <StarIcon key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    {Array.from({ length: 5 - product.rating }).map((_, idx) => (
                      <StarIcon key={idx} className="w-4 h-4 text-gray-300" />
                    ))}
                    <span className="ml-2 text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 flex-grow">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-indigo-600 font-bold text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <button 
                      className="mt-auto w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add product to cart
                        addToCart({
                          id: product.id,
                          title: product.name,
                          price: product.price,
                          image: product.image
                        }, 1);
                      }}
                    >
                      <ShoppingCartIcon className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                    <div className="ml-2 flex items-center">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 