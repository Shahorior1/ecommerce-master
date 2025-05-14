import React, { useState } from 'react';
import { HeartIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

function WishlistAdd() {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'Organic Honeycrisp Apples',
      price: 6.99,
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
      inStock: true,
      category: 'Fruits & Vegetables'
    },
    {
      id: 2,
      title: 'Premium Ground Coffee',
      price: 12.50,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e',
      inStock: true,
      category: 'Beverages'
    },
    {
      id: 3,
      title: 'Organic Raw Honey',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      inStock: true,
      category: 'Pantry'
    },
    {
      id: 4,
      title: 'Artisan Sourdough Bread',
      price: 5.25,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c',
      inStock: false,
      category: 'Bakery'
    },
    {
      id: 5,
      title: 'Aged Parmesan Cheese',
      price: 14.99,
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862',
      inStock: true,
      category: 'Dairy'
    }
  ]);

  // Filter options
  const [sortOption, setSortOption] = useState('date');
  const [filterCategory, setFilterCategory] = useState('all');

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  // Get filtered and sorted items
  const filteredItems = wishlistItems
    .filter(item => filterCategory === 'all' || item.category === filterCategory)
    .sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'name') return a.title.localeCompare(b.title);
      return 0; // default: date added (we'd normally use a timestamp)
    });

  // Get unique categories for filter
  const categories = ['all', ...new Set(wishlistItems.map(item => item.category))];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <HeartSolidIcon className="h-8 w-8 text-red-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Wishlist Add</h1>
        </div>
        
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <HeartIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-medium text-gray-800 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Browse our products and add items to your wishlist</p>
            <button 
              onClick={() => window.location.hash = 'shop'}
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-gray-600">
                    {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} in your wishlist
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div>
                    <label htmlFor="category-filter" className="text-sm text-gray-600 mr-2">Filter by:</label>
                    <select 
                      id="category-filter"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sort-option" className="text-sm text-gray-600 mr-2">Sort by:</label>
                    <select 
                      id="sort-option"
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="date">Date Added</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 bg-gray-100 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                          <button 
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Category: {item.category}</p>
                        <p className="text-xl font-bold text-purple-700">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <button 
                          className={`px-4 py-2 rounded-md flex items-center justify-center ${
                            item.inStock 
                              ? 'bg-purple-600 text-white hover:bg-purple-700' 
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={!item.inStock}
                        >
                          <ShoppingCartIcon className="h-5 w-5 mr-2" />
                          {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        {!item.inStock && (
                          <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50">
                            Notify Me When Available
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between">
              <button 
                onClick={() => window.location.hash = 'shop'}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300"
              >
                Continue Shopping
              </button>
              {wishlistItems.some(item => item.inStock) && (
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
                  Add All Available to Cart
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default WishlistAdd; 