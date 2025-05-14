import React from 'react'
import banner from '../assets/banner.png'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

function HeroBanner() {
  // Function to navigate to shop page
  const navigateToShop = () => {
    window.location.hash = 'shop';
  };

  return (
    <section
      className="relative px-4 overflow-hidden bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${banner})`,
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-white">
          <span className="inline-block bg-yellow-400 text-indigo-900 text-xs px-3 py-1 rounded-full font-semibold animate-pulse">Limited Time Offer</span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Fresh Quality Products at Your Doorstep
          </h1>
          <p className="mt-6 text-lg text-gray-100 max-w-xl">
            Shop from our wide selection of organic produce, premium meats, and gourmet items with fast delivery and exclusive discounts.
          </p>
          <div className="mt-8 flex items-center flex-wrap gap-4">
            <button 
              onClick={navigateToShop}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
            >
              <ShoppingBagIcon className="w-5 h-5 mr-2" />
              Shop Now
            </button>
            <div className="ml-2 bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <span className="text-red-400 text-2xl font-bold mr-2">$21.67</span>
              <span className="text-gray-300 line-through">$26.67</span>
              <p className="text-sm text-gray-200 mt-1">Don't miss this limited time offer.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
      <div className="absolute -bottom-6 -right-24 w-64 h-64 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
    </section>
  )
}

export default HeroBanner 