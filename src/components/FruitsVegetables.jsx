import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import { 
  ChevronDownIcon, 
  FunnelIcon, 
  Squares2X2Icon, 
  ListBulletIcon,
  StarIcon,
  XMarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

function FruitsVegetables() {
  const { addToCart } = useCart();
  const [view, setView] = useState('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample fruits and vegetables products data
  const products = [
    {
      id: 1,
      name: "Organic Apples",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1620117654333-c125fef82817?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Fruits",
      brand: "Organic Farms",
      rating: 4.8,
      description: "Fresh organic apples. Rich in antioxidants and fiber. Available in pack of 6.",
      tags: ["organic", "fresh", "seasonal"]
    },
    {
      id: 2,
      name: "Fresh Broccoli",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Vegetables",
      brand: "Green Valley",
      rating: 4.6,
      description: "Farm-fresh broccoli. Packed with vitamins and nutrients. Perfect for stir-fries and salads.",
      tags: ["fresh", "green", "nutritious"]
    },
    {
      id: 3,
      name: "Organic Strawberries",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1587394157349-fada3187174a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Fruits",
      brand: "Berry Good",
      rating: 4.9,
      description: "Sweet, juicy organic strawberries. Locally grown and handpicked at peak ripeness.",
      tags: ["berries", "organic", "sweet"]
    },
    {
      id: 4,
      name: "Fresh Spinach",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591211243567-a6fe99b735ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Vegetables",
      brand: "Green Valley",
      rating: 4.7,
      description: "Fresh, washed and ready-to-eat baby spinach. Rich in iron and vitamins.",
      tags: ["leafy greens", "iron-rich", "salad"]
    },
    {
      id: 5,
      name: "Avocado",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590493590729-79af0544efea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Fruits",
      brand: "Tropical Delights",
      rating: 4.9,
      description: "Perfectly ripe avocados. Creamy texture and rich flavor. Great for guacamole or toast.",
      tags: ["healthy fats", "creamy", "superfood"]
    },
    {
      id: 6,
      name: "Bell Peppers Pack",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1563565375-f0d78019e83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1596364725060-7676b3930bd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513530774447-73de85f43d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Vegetables",
      brand: "Rainbow Farms",
      rating: 4.6,
      description: "Colorful mix of red, yellow, and green bell peppers. Sweet and crunchy. Packed with vitamin C.",
      tags: ["colorful", "vitamin-rich", "crunchy"]
    },
    {
      id: 7,
      name: "Organic Bananas",
      price: 3.29,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Fruits",
      brand: "Organic Farms",
      rating: 4.7,
      description: "Perfectly ripe organic bananas. Naturally sweet and energy-boosting. Bunch of 6-7.",
      tags: ["organic", "potassium-rich", "energy"]
    },
    {
      id: 8,
      name: "Fresh Carrots",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1614542688691-84f156d7f209?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Vegetables",
      brand: "Root Harvest",
      rating: 4.5,
      description: "Fresh, crisp carrots with tops. High in beta-carotene and fiber. Ideal for snacking or cooking.",
      tags: ["root vegetable", "crunchy", "vitamin A"]
    }
  ];
  
  // Extract unique categories and brands for filters
  const categories = [...new Set(products.map(product => product.category))];
  const brands = [...new Set(products.map(product => product.brand))];
  
  // Apply filters and sorting to products
  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesRating = product.rating >= selectedRating;
    
    return matchesPrice && matchesCategory && matchesBrand && matchesRating;
  });
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default: // 'popular'
        return b.rating - a.rating;
    }
  });
  
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };
  
  const resetFilters = () => {
    setPriceRange([0, 100]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRating(0);
  };
  
  const totalProducts = sortedProducts.length;
  
  // Min and max price variables
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));
  
  useEffect(() => {
    // Set initial price range based on product data
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);
  
  // Function to open image modal
  const openImageModal = (product, index = 0) => {
    setSelectedProduct(product);
    setCurrentImageIndex(index);
    setShowImageModal(true);
  };
  
  // Function to navigate between images in modal
  const navigateImage = (direction) => {
    if (!selectedProduct) return;
    
    const images = [selectedProduct.image, ...selectedProduct.additionalImages];
    let newIndex = currentImageIndex + direction;
    
    // Loop back to beginning or end
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="bg-gray-50 py-8 pt-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="bg-green-700 text-white rounded-xl p-8 mb-8 bg-opacity-90 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Fruits & Vegetables" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">Fruits & Vegetables</h1>
            <p className="text-lg max-w-3xl">
              Discover our handpicked selection of fresh, seasonal fruits and vegetables. 
              From organic produce to exotic varieties, we offer quality you can taste and nutrition you can trust.
            </p>
          </div>
        </div>
        
        {/* Control Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center text-gray-700 hover:text-green-600 transition-colors mr-4"
            >
              <FunnelIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter</span>
            </button>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setView('grid')}
                className={`p-2 rounded ${view === 'grid' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setView('list')}
                className={`p-2 rounded ${view === 'list' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <ListBulletIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-sm text-gray-500 mr-4">
              Showing <span className="font-medium">{totalProducts}</span> products
            </div>
            <div className="relative">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-gray-100 rounded-lg py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Panel */}
          <div className={`${filterOpen ? 'block' : 'hidden md:block'} md:w-1/4 lg:w-1/5`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button 
                  onClick={resetFilters} 
                  className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                >
                  Reset All
                </button>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-5/12">
                    <label className="text-xs text-gray-500 mb-1 block">Min</label>
                    <input 
                      type="number" 
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      min={minPrice}
                      max={priceRange[1]}
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                  <div className="text-gray-400">-</div>
                  <div className="w-5/12">
                    <label className="text-xs text-gray-500 mb-1 block">Max</label>
                    <input 
                      type="number" 
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      min={priceRange[0]}
                      max={maxPrice}
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min={minPrice} 
                  max={maxPrice} 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-green-600"
                />
              </div>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`category-${index}`} 
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`category-${index}`} className="ml-2 text-sm text-gray-700">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map((brand, index) => (
                    <div key={index} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`brand-${index}`} 
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`brand-${index}`} className="ml-2 text-sm text-gray-700">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Rating Filter */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input 
                        type="radio" 
                        id={`rating-${rating}`} 
                        name="rating"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 flex items-center">
                        {Array(5).fill(0).map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill={i < rating ? 'currentColor' : 'none'}
                          />
                        ))}
                        <span className="text-sm text-gray-700 ml-1">& Up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Products Grid/List */}
          <div className="md:w-3/4 lg:w-4/5">
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={resetFilters}
                  className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium"
                >
                  Reset Filters
                </button>
              </div>
            ) : view === 'grid' ? (
              // Grid View
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden cursor-pointer" onClick={() => openImageModal(product)}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {(product.additionalImages && product.additionalImages.length > 0) && (
                        <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1">
                          <span className="text-xs font-medium text-gray-700">+{product.additionalImages.length}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-2">{product.category}</span>
                          <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <StarIcon 
                                  key={i} 
                                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
                          </div>
                        </div>
                        <div className="text-green-700 font-bold">${product.price.toFixed(2)}</div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 h-48 md:h-auto cursor-pointer" onClick={() => openImageModal(product)}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        {(product.additionalImages && product.additionalImages.length > 0) && (
                          <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1">
                            <span className="text-xs font-medium text-gray-700">+{product.additionalImages.length}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:w-3/4 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-2">{product.category}</span>
                              <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                              <div className="flex items-center mb-2">
                                <div className="flex">
                                  {Array(5).fill(0).map((_, i) => (
                                    <StarIcon 
                                      key={i} 
                                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
                              </div>
                            </div>
                            <div className="text-green-700 font-bold">${product.price.toFixed(2)}</div>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.tags.map((tag, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Brand: <span className="font-medium">{product.brand}</span></span>
                          <button 
                            onClick={() => handleAddToCart(product)}
                            className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Image Gallery Modal */}
      {showImageModal && selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setShowImageModal(false)} 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 z-10"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <img 
                src={currentImageIndex === 0 
                  ? selectedProduct.image 
                  : selectedProduct.additionalImages[currentImageIndex - 1]} 
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
              
              <button 
                onClick={() => navigateImage(-1)} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
              
              <button 
                onClick={() => navigateImage(1)} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-4 mt-4">
              <h3 className="font-bold text-xl mb-2">{selectedProduct.name}</h3>
              <p className="text-gray-600">{selectedProduct.description}</p>
              <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
                <div 
                  className={`h-16 w-16 flex-shrink-0 rounded overflow-hidden border-2 ${currentImageIndex === 0 ? 'border-green-600' : 'border-transparent'}`}
                  onClick={() => setCurrentImageIndex(0)}
                >
                  <img 
                    src={selectedProduct.image} 
                    alt={`${selectedProduct.name} thumbnail`}
                    className="h-full w-full object-cover cursor-pointer"
                  />
                </div>
                {selectedProduct.additionalImages && selectedProduct.additionalImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className={`h-16 w-16 flex-shrink-0 rounded overflow-hidden border-2 ${currentImageIndex === idx + 1 ? 'border-green-600' : 'border-transparent'}`}
                    onClick={() => setCurrentImageIndex(idx + 1)}
                  >
                    <img 
                      src={img} 
                      alt={`${selectedProduct.name} thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FruitsVegetables; 