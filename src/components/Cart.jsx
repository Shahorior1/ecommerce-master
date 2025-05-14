import React, { useState } from 'react';
import { XMarkIcon, ShoppingCartIcon, HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { GiftIcon } from '@heroicons/react/24/solid';
import { useCart } from '../CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    getSubtotal,
    getShippingCost,
    getTotal
  } = useCart();
  
  const [isLoading, setIsLoading] = useState(false);

  // Calculate values
  const subtotal = getSubtotal();
  const shipping = getShippingCost();
  const total = getTotal();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Cart</span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* Empty cart state */
          <div className="bg-white rounded-lg py-16 px-8 text-center shadow-sm my-8">
            <div className="flex justify-center mb-6">
              <GiftIcon className="h-24 w-24 text-gray-900" />
            </div>
            <h2 className="text-xl font-bold text-red-500 mb-6">YOUR CART IS CURRENTLY EMPTY.</h2>
            <a 
              href="#" 
              onClick={() => window.location.hash = ''}
              className="inline-block bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Return to shop
            </a>
          </div>
        ) : (
          /* Cart with items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {isLoading ? (
                    <div className="p-6 text-center">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
                      <p className="mt-2 text-gray-600">Loading your cart...</p>
                    </div>
                  ) : (
                    cartItems.map(item => (
                      <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                        {/* Product image */}
                        <div className="sm:w-24 sm:h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                        </div>
                        
                        {/* Product details */}
                        <div className="flex-1 sm:ml-6">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                            <button 
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <XMarkIcon className="h-5 w-5" />
                            </button>
                          </div>
                          
                          <div className="mt-1 text-sm text-gray-500">
                            <p>${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="mt-4 flex justify-between items-center">
                            {/* Quantity adjuster */}
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button 
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-2 text-gray-600 hover:text-indigo-600"
                              >
                                <MinusIcon className="h-4 w-4" />
                              </button>
                              <span className="px-4">{item.quantity}</span>
                              <button 
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-2 text-gray-600 hover:text-indigo-600"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </button>
                            </div>
                            
                            {/* Subtotal */}
                            <div className="font-medium text-gray-900">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="p-6 bg-gray-50 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a href="#" onClick={() => window.location.hash = 'shop'} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      Continue Shopping
                    </a>
                    <button 
                      onClick={handleClearCart}
                      className="text-gray-600 hover:text-red-500 text-sm font-medium flex items-center"
                    >
                      <XMarkIcon className="h-4 w-4 mr-1" />
                      Clear Cart
                    </button>
                  </div>
                  
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                    <HeartIcon className="h-4 w-4 mr-1" />
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
            
            {/* Order Summary - Takes up 1 column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-900 font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="text-gray-900 font-bold">Total</span>
                    <span className="text-indigo-600 font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50">
                  <button 
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md font-medium hover:bg-indigo-700 transition-colors"
                    onClick={() => window.location.hash = 'checkout'}
                  >
                    Proceed to Checkout
                  </button>
                  
                  <div className="mt-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                      <span className="ml-2 text-sm text-gray-600">I agree to the terms and conditions</span>
                    </label>
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <div className="flex space-x-3">
                      <img src="https://raw.githubusercontent.com/tailwindui/tailwindui-playground/main/public/img/visa.svg" alt="Visa" className="h-6" />
                      <img src="https://raw.githubusercontent.com/tailwindui/tailwindui-playground/main/public/img/mastercard.svg" alt="Mastercard" className="h-6" />
                      <img src="https://raw.githubusercontent.com/tailwindui/tailwindui-playground/main/public/img/paypal.svg" alt="PayPal" className="h-6" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Have a coupon?</h3>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button className="bg-gray-100 text-gray-800 rounded-r-md px-4 py-2 border border-gray-300 border-l-0 hover:bg-gray-200">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 