import React, { useState, useRef, useEffect } from 'react'
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MapPinIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import Logo from '../assets/Logo.png'
import { useCart } from '../CartContext'

function Navbar() {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { getCartItemsCount, cartItems, getSubtotal } = useCart();
  const cartDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const lastScrollY = useRef(0);
  
  const cartItemsCount = getCartItemsCount();
  const subtotal = getSubtotal();

  // Hide navbar when scrolling down, show when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // Always show navbar at the top of the page
        setIsVisible(true);
      } else {
        // Hide when scrolling down, show when scrolling up
        setIsVisible(currentScrollY < lastScrollY.current);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)) {
        setIsCartDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navigate to a specific page using hash routing
  const navigateTo = (page) => {
    window.location.hash = page;
    setIsCartDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Add top padding to body to account for fixed navbar
  useEffect(() => {
    // Calculate navbar height and set body padding
    const updateBodyPadding = () => {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      document.body.style.paddingTop = `${navbarHeight}px`;
      document.body.classList.add('has-navbar');
    };
    
    // Initial update
    updateBodyPadding();
    
    // Update on resize
    window.addEventListener('resize', updateBodyPadding);
    
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
      document.body.classList.remove('has-navbar');
    };
  }, []);

  // Countdown timer setup
  const [countdown, setCountdown] = useState({
    days: 47,
    hours: 6,
    minutes: 57,
    seconds: 8
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
                clearInterval(timer);
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-md bg-white w-full transition-transform duration-300 ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Promotional bar */}
      <div className="bg-purple-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-1 md:mb-0">FREE delivery & 40% Discount for next 3 orders!</div>
          <div className="text-center md:text-right text-xs sm:text-sm">
            Until the end of the sale: 
            <span className="font-semibold ml-2">
              {countdown.days.toString().padStart(2, '0')}d {countdown.hours.toString().padStart(2, '0')}h {countdown.minutes.toString().padStart(2, '0')}m {countdown.seconds.toString().padStart(2, '0')}s
            </span>
          </div>
        </div>
      </div>
      
      {/* Secondary navigation - hidden on mobile */}
      <div className="bg-white border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center py-2 text-sm text-gray-700">
          <div className="flex space-x-4">
            <a onClick={() => navigateTo('about-us')} className="hover:text-purple-700 cursor-pointer">About Us</a>
            <a onClick={() => navigateTo('my-account')} className="hover:text-purple-700 cursor-pointer">My account</a>
            <a onClick={() => navigateTo('wishlist-add')} className="hover:text-purple-700 cursor-pointer">Wishlist add</a>
          </div>
          <div>
            We deliver to you every day from <span className="text-purple-700 font-medium">7:00 to 23:00</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span>English</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </div>
            <div className="flex items-center">
              <span>USD</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </div>
            <a href="#" className="hover:text-purple-700">Order Tracking</a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white py-3 md:py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center" onClick={() => navigateTo('')} style={{ cursor: 'pointer' }}>
            <div className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100">
              <img src={Logo} alt="JinStore" className="h-8 md:h-10 w-auto object-contain" />
              <span className="ml-2 text-lg md:text-xl font-bold text-purple-700"></span>
            </div>
          </div>
          
          {/* Mobile menu toggle */}
          <button 
            className="md:hidden flex items-center px-2 py-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 
              <XMarkIcon className="h-6 w-6 text-gray-700" /> :
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            }
          </button>
          
          {/* Location - hidden on mobile */}
          <div className="hidden md:flex items-center ml-6 text-sm text-gray-600">
            <MapPinIcon className="w-5 h-5 mr-1" />
            <span>Deliver to</span>
            <span className="font-medium ml-1">all</span>
          </div>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-3xl mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, categories or brands..."
                className="w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-purple-700">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* User actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex items-center">
              <UserIcon className="w-6 h-6 text-gray-600" />
              <div className="ml-1 hidden md:block">
                <div className="text-xs text-gray-500">Sign in</div>
                <div className="text-sm font-medium">Account</div>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <button className="relative">
                <HeartIcon className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
            
            <div className="relative" ref={cartDropdownRef}>
              <button 
                className="relative"
                onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
              >
                <ShoppingCartIcon className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount || 5}
                </span>
              </button>
              
              {/* Cart dropdown */}
              {isCartDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-50">
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium text-lg mb-2">Shopping Cart</h3>
                    {cartItemsCount === 0 ? (
                      <p className="text-gray-500 text-sm">Your cart is empty</p>
                    ) : (
                      <>
                        <div className="max-h-60 overflow-y-auto">
                          {cartItems.slice(0, 3).map(item => (
                            <div key={item.id} className="flex items-center py-2 border-b border-gray-100">
                              <div className="h-12 w-12 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
                                <img src={item.image} alt={item.title} className="h-full w-full object-contain p-1" />
                              </div>
                              <div className="flex-1 pr-4">
                                <p className="text-gray-800 text-sm truncate">{item.title}</p>
                                <p className="text-gray-600 text-xs">{item.quantity} × ${item.price.toFixed(2)}</p>
                              </div>
                            </div>
                          ))}
                          {cartItems.length > 3 && (
                            <p className="text-sm text-center text-gray-500 mt-2">
                              ...and {cartItems.length - 3} more item(s)
                            </p>
                          )}
                        </div>
                        <div className="py-2 border-t border-gray-100">
                          <div className="flex justify-between text-sm font-medium">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="text-purple-600">${subtotal.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="pt-3 flex flex-col gap-2">
                          <button 
                            onClick={() => navigateTo('cart')}
                            className="bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition-colors text-sm w-full"
                          >
                            View Cart
                          </button>
                          <button 
                            onClick={() => navigateTo('checkout')}
                            className="bg-gray-800 text-white py-2 rounded-md font-medium hover:bg-gray-900 transition-colors text-sm w-full"
                          >
                            Checkout
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Primary navigation menu - desktop */}
      <div className="bg-white shadow-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8 py-3">
              <a onClick={() => navigateTo('')} className="text-gray-900 hover:text-purple-700 font-medium cursor-pointer">Home</a>
              <a onClick={() => navigateTo('shop')} className="text-gray-900 hover:text-purple-700 font-medium flex items-center cursor-pointer">
                Shop
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </a>
              <a onClick={() => navigateTo('fruits-vegetables')} className="text-gray-900 hover:text-purple-700 font-medium cursor-pointer">Fruits & Vegetables</a>
              <a onClick={() => navigateTo('beverages')} className="text-gray-900 hover:text-purple-700 font-medium cursor-pointer">Beverages</a>
              <a onClick={() => navigateTo('blog')} className="text-gray-900 hover:text-purple-700 font-medium cursor-pointer">Blog</a>
              <a onClick={() => navigateTo('contact')} className="text-gray-900 hover:text-purple-700 font-medium cursor-pointer">Contact</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-900 hover:text-purple-700 font-medium flex items-center">
                Trending Products
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                Almost Finished
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">SALE</span>
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[calc(var(--navbar-height,60px))] bg-gray-800 bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            ref={mobileMenuRef}
            className="h-full w-4/5 max-w-xs bg-white p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile menu header with logo */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div className="flex items-center px-2 py-1 bg-white rounded-lg border border-purple-100">
                <img src={Logo} alt="JinStore" className="h-6 w-auto object-contain" />
                <span className="ml-2 text-base font-bold text-purple-700">JinStore</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Mobile search */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full py-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="absolute right-0 top-0 h-full px-3 text-gray-500">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Mobile nav links */}
            <div className="space-y-4">
              <a onClick={() => navigateTo('')} className="block py-2 text-gray-900 font-medium border-b border-gray-100 cursor-pointer">Home</a>
              <a onClick={() => navigateTo('shop')} className="block py-2 text-gray-900 font-medium border-b border-gray-100 cursor-pointer">Shop</a>
              <a onClick={() => navigateTo('fruits-vegetables')} className="block py-2 text-gray-900 font-medium border-b border-gray-100 cursor-pointer">Fruits & Vegetables</a>
              <a onClick={() => navigateTo('beverages')} className="block py-2 text-gray-900 font-medium border-b border-gray-100 cursor-pointer">Beverages</a>
              <a onClick={() => navigateTo('blog')} className="block py-2 text-gray-900 font-medium border-b border-gray-100 cursor-pointer">Blog</a>
              <a onClick={() => navigateTo('contact')} className="block py-2 text-gray-900 font-medium border-b border-gray-100 cursor-pointer">Contact</a>
              <a href="#" className="block py-2 text-gray-900 font-medium border-b border-gray-100">Trending Products</a>
              <a href="#" className="block py-2 text-red-600 font-medium border-b border-gray-100 flex items-center">
                Almost Finished
                <span className="ml-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">SALE</span>
              </a>
            </div>
            
            {/* Additional mobile links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-4">
                <a onClick={() => navigateTo('about-us')} className="block py-2 text-gray-700 cursor-pointer">About Us</a>
                <a onClick={() => navigateTo('my-account')} className="block py-2 text-gray-700 cursor-pointer">My Account</a>
                <a onClick={() => navigateTo('wishlist-add')} className="block py-2 text-gray-700 cursor-pointer">Wishlist add</a>
                <a href="#" className="block py-2 text-gray-700">Order Tracking</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 