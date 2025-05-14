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

function Beverages() {
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
  
  // Sample beverage products data with additional images
  const products = [
    {
      id: 1,
      name: "Organic Green Tea",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Tea",
      brand: "Pure Leaf",
      rating: 4.8,
      description: "Premium organic green tea with antioxidant properties. 50 tea bags per pack.",
      tags: ["organic", "healthy", "caffeine"]
    },
    {
      id: 2,
      name: "Cold Brew Coffee",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1580933073521-dc49ac0d4e1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1538587888044-79f13ddd7e49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Coffee",
      brand: "Java Delight",
      rating: 4.7,
      description: "Smooth and rich cold brew coffee concentrate. Just add water or milk.",
      tags: ["coffee", "caffeine", "cold brew"]
    },
    {
      id: 3,
      name: "Berry Smoothie Mix",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1553530666-ba11a90a0875?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Smoothies",
      brand: "Blend Master",
      rating: 4.5,
      description: "Mixed berry smoothie powder. Rich in vitamins and antioxidants.",
      tags: ["berries", "smoothie", "quick"]
    },
    {
      id: 4,
      name: "Sparkling Water Variety Pack",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1560508601-7701e4b45939?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Water",
      brand: "Bubble Pop",
      rating: 4.6,
      description: "12-pack of flavored sparkling water: lime, berry, citrus, and original.",
      tags: ["sparkling", "zero-calorie", "refreshing"]
    },
    {
      id: 5,
      name: "Coconut Water",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1536591375667-779441e82fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1605060226444-1fe9583b1e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618414466256-4b62f39b5b30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Natural Drinks",
      brand: "Tropical Bliss",
      rating: 4.9,
      description: "100% pure coconut water. No added sugar or preservatives.",
      tags: ["coconut", "natural", "hydration"]
    },
    {
      id: 6,
      name: "Herbal Tea Collection",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Tea",
      brand: "Herbal Haven",
      rating: 4.7,
      description: "Collection of 6 different herbal teas: chamomile, mint, lavender, rooibos, lemongrass, and ginger.",
      tags: ["herbal", "caffeine-free", "relaxation"]
    },
    {
      id: 7,
      name: "Fresh Orange Juice",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1622597467836-f3e6707e1df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Juices",
      brand: "Morning Fresh",
      rating: 4.8,
      description: "Freshly squeezed orange juice. Rich in vitamin C. No added sugar.",
      tags: ["fresh", "vitamin C", "breakfast"]
    },
    {
      id: 8,
      name: "Protein Shake Mix",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1594761055090-1685afba30e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1622292804972-0bfe84b82f8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579722821273-0f6c1a44d548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Protein Drinks",
      brand: "Muscle Plus",
      rating: 4.4,
      description: "Chocolate flavored protein shake mix. 20g protein per serving.",
      tags: ["protein", "fitness", "meal replacement"]
    },
    {
      id: 9,
      name: "Kombucha Starter Kit",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1595983639075-0462e48ff9fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1595983012429-9a3d62d2c359?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576666300263-609f1fc8aff7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Fermented Drinks",
      brand: "Ferment Life",
      rating: 4.6,
      description: "Everything you need to brew your own probiotic-rich kombucha at home.",
      tags: ["kombucha", "diy", "probiotic"]
    },
    {
      id: 10,
      name: "Chai Tea Concentrate",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1531968899893-4afca6e085fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1594515797268-e5ef151e3635?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Tea",
      brand: "Spice Master",
      rating: 4.9,
      description: "Concentrated chai tea blend. Just add milk for a perfect cup of chai.",
      tags: ["chai", "spicy", "concentrate"]
    },
    {
      id: 11,
      name: "Lemonade Syrup",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1621263764144-63607097ac6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1498604636225-6b87e515fbaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Syrups",
      brand: "Sweet Citrus",
      rating: 4.3,
      description: "Concentrated lemonade syrup. Makes up to 12 glasses of fresh lemonade.",
      tags: ["lemon", "summer", "refreshing"]
    },
    {
      id: 12,
      name: "Hot Chocolate Mix",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550304881-79e30801ae9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ],
      category: "Hot Drinks",
      brand: "Cocoa Wonder",
      rating: 4.7,
      description: "Rich and creamy hot chocolate mix with mini marshmallows.",
      tags: ["chocolate", "winter", "comfort"]
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
  
  // Add a min-price and max-price variables to be used in the price range inputs
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
        <div className="bg-purple-700 text-white rounded-xl p-8 mb-8 bg-opacity-90 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Beverages" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">Beverages</h1>
            <p className="text-lg max-w-3xl">
              Explore our wide selection of refreshing beverages, from organic teas and coffees to fresh juices and smoothies. 
              Discover premium drinks for every occasion, taste, and dietary preference.
            </p>
          </div>
        </div>
        
        {/* Control Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center text-gray-700 hover:text-purple-600 transition-colors mr-4"
            >
              <FunnelIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter</span>
            </button>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setView('grid')}
                className={`p-2 rounded ${view === 'grid' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}
              >
                <Squares2X2Icon className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setView('list')}
                className={`p-2 rounded ${view === 'list' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}
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
                className="appearance-none bg-gray-100 rounded-lg py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                  className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
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
                  className="w-full accent-purple-600"
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
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
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
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
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
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
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
            {/* Mobile filter visibility toggle */}
            <div className="md:hidden mb-4">
              {filterOpen && (
                <button 
                  onClick={() => setFilterOpen(false)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium flex items-center"
                >
                  <XMarkIcon className="h-4 w-4 mr-1" />
                  Close Filters
                </button>
              )}
            </div>
            
            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={resetFilters}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium"
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
                          <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded mb-2">{product.category}</span>
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
                        <div className="text-purple-700 font-bold">${product.price.toFixed(2)}</div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
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
                              <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded mb-2">{product.category}</span>
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
                            <div className="text-purple-700 font-bold">${product.price.toFixed(2)}</div>
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
                            className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
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
    </div>
  );
}

export default Beverages; 