import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  UserIcon, 
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeSolidIcon,
  ShoppingBagIcon as ShoppingBagSolidIcon,
  HeartIcon as HeartSolidIcon,
  UserIcon as UserSolidIcon,
} from '@heroicons/react/24/solid';
import { useCart } from '../CartContext';

function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const { getCartItemsCount } = useCart();
  
  const cartItemsCount = getCartItemsCount();
  
  useEffect(() => {
    // Never show the floating nav by setting isVisible to always be false
    const handleScroll = () => {
      setIsVisible(false); // Always hide the floating nav
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Update active tab based on current hash
    const hash = window.location.hash.replace('#', '');
    if (hash === '') {
      setActiveTab('home');
    } else if (hash === 'shop' || hash.startsWith('product/')) {
      setActiveTab('shop');
    } else if (hash === 'wishlist-add') {
      setActiveTab('wishlist');
    } else if (hash === 'my-account') {
      setActiveTab('account');
    } else {
      setActiveTab('');
    }
    
    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '') {
        setActiveTab('home');
      } else if (hash === 'shop' || hash.startsWith('product/')) {
        setActiveTab('shop');
      } else if (hash === 'wishlist-add') {
        setActiveTab('wishlist');
      } else if (hash === 'my-account') {
        setActiveTab('account');
      } else {
        setActiveTab('');
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Navigate to a specific page using hash routing
  const navigateTo = (page) => {
    window.location.hash = page;
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 mb-0 md:mb-8 flex justify-center px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <div className="bg-white rounded-t-xl md:rounded-full shadow-xl px-4 py-3 max-w-md w-full backdrop-blur-sm bg-opacity-95 border border-gray-100">
            {searchOpen ? (
              <div className="flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-2 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full mx-2 py-1 px-2 bg-transparent border-none focus:outline-none text-gray-800"
                  autoFocus
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <NavButton 
                  label="Home"
                  onClick={() => navigateTo('')}
                  isActive={activeTab === 'home'}
                  icon={<HomeIcon className="h-6 w-6" />}
                  activeIcon={<HomeSolidIcon className="h-6 w-6" />}
                />
                
                <NavButton 
                  label="Shop"
                  onClick={() => navigateTo('shop')}
                  isActive={activeTab === 'shop'}
                  icon={<ShoppingBagIcon className="h-6 w-6" />}
                  activeIcon={<ShoppingBagSolidIcon className="h-6 w-6" />}
                />
                
                <div className="relative flex flex-col items-center">
                  <button 
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
                  >
                    <MagnifyingGlassIcon className="h-6 w-6" />
                  </button>
                  <span className="text-xs mt-1">Search</span>
                </div>
                
                <NavButton 
                  label="Wishlist"
                  onClick={() => navigateTo('wishlist-add')}
                  isActive={activeTab === 'wishlist'}
                  icon={<HeartIcon className="h-6 w-6" />}
                  activeIcon={<HeartSolidIcon className="h-6 w-6" />}
                />
                
                <NavButton 
                  label="Account"
                  onClick={() => navigateTo('my-account')}
                  isActive={activeTab === 'account'} 
                  icon={<UserIcon className="h-6 w-6" />}
                  activeIcon={<UserSolidIcon className="h-6 w-6" />}
                  badge={cartItemsCount > 0 ? cartItemsCount : null}
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Helper component for nav buttons
function NavButton({ label, onClick, isActive, icon, activeIcon, badge = null }) {
  return (
    <div className="relative flex flex-col items-center">
      <button 
        onClick={onClick}
        className={`p-2 rounded-full ${
          isActive 
            ? 'bg-purple-100 text-purple-600' 
            : 'hover:bg-gray-100 text-gray-600 hover:text-purple-600'
        }`}
      >
        {isActive ? activeIcon : icon}
        
        {badge && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {badge > 9 ? '9+' : badge}
          </span>
        )}
      </button>
      <span className={`text-xs mt-1 ${isActive ? 'font-medium text-purple-600' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
}

export default FloatingNav; 