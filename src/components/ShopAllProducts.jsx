import React, { useState, useEffect } from 'react';
import {
  HeartIcon,
  StarIcon,
  ShoppingCartIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ListBulletIcon,
  Squares2X2Icon
} from '@heroicons/react/24/outline';
import ProductFilter from './ProductFilter';
import { useCart } from '../CartContext';

// Import all product images
import product1 from '../assets/413.png';
import product2 from '../assets/420.png';
import product3 from '../assets/424.png';
import product4 from '../assets/432.png';
import product5 from '../assets/436.png';
import product6 from '../assets/440.png';
import product7 from '../assets/444.png';
import product8 from '../assets/456.png';
import product9 from '../assets/461.png';
import product10 from '../assets/466.png';
import product11 from '../assets/34.png';
import product12 from '../assets/35.png';
import product13 from '../assets/40.png';
import product14 from '../assets/list02.png';
import product15 from '../assets/list05.png';
import product16 from '../assets/list08.png';
import product17 from '../assets/list11.png';
import product18 from '../assets/list14.png';
import product19 from '../assets/list17.png';
import product20 from '../assets/list20.png';

// All products data
const allProducts = [
  {
    id: 1,
    title: 'Great Value Rising Crust Frozen Pizza, Supreme',
    discount: '11%',
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
    title: 'Simple Kitchen FD Sliced Strawberries – 1.08lb',
    discount: '13%',
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
    title: 'Red Baron Frozen Hand Tossed Ultimate Pepperoni Pizza',
    discount: '26%',
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
    title: 'Oscar Mayer Ham & Swiss Melt Scrambler – 3oz',
    discount: '8%',
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
    title: 'Large Garden Spinach & Herb Wrap Tortillas – 15oz, 6ct',
    discount: '16%',
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
    title: 'Great Value Rising Crust Pizza, Cheese, 27.4 oz',
    discount: '14%',
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
  {
    id: 7,
    title: '100 Percent Apple Juice – 64 fl oz Bottle',
    discount: '75%',
    organic: true,
    timer: '84 06 57 08',
    rating: 5,
    reviews: 3,
    price: 0.5,
    originalPrice: 1.99,
    image: product7,
    category: 'beverages',
    color: 'green',
    brand: 'organic',
    inStock: true
  },
  {
    id: 8,
    title: 'Simply Orange Pulp Free Juice – 52 fl oz',
    discount: '41%',
    organic: false,
    timer: '68 06 57 08',
    rating: 4,
    reviews: 2,
    price: 2.45,
    originalPrice: 4.13,
    image: product8,
    category: 'beverages',
    color: 'orange',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 9,
    title: 'Vitaminwater zero sugar squeezed electrolyte',
    discount: '45%',
    organic: false,
    timer: '77 06 57 08',
    rating: 4,
    reviews: 3,
    price: 1.99,
    originalPrice: 3.6,
    image: product9,
    category: 'beverages',
    color: 'orange',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 10,
    title: 'Real Plant-Powered Protein Shake – Double Chocolate',
    discount: '17%',
    organic: false,
    timer: '76 06 57 08',
    rating: 3,
    reviews: 3,
    price: 14.89,
    originalPrice: 17.89,
    image: product10,
    category: 'beverages',
    color: 'brown',
    brand: 'organic',
    inStock: true
  },
  {
    id: 11,
    title: 'Organic Bananas, Bunch',
    discount: '31%',
    organic: true,
    timer: '86 06 57 08',
    rating: 5,
    reviews: 3,
    price: 0.89,
    originalPrice: 1.99,
    image: product11,
    category: 'fruits',
    color: 'yellow',
    brand: 'organic',
    inStock: true
  },
  {
    id: 12,
    title: 'Fresh Green Apples, Each',
    discount: '25%',
    organic: true,
    timer: '88 06 57 08',
    rating: 4,
    reviews: 2,
    price: 0.75,
    originalPrice: 0.99,
    image: product12,
    category: 'fruits',
    color: 'green',
    brand: 'organic',
    inStock: true
  },
  {
    id: 13,
    title: 'Red Delicious Apples, 3 lb Bag',
    discount: '22%',
    organic: false,
    timer: '90 06 57 08',
    rating: 4,
    reviews: 1,
    price: 2.99,
    originalPrice: 3.80,
    image: product13,
    category: 'fruits',
    color: 'red',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 14,
    title: 'Organic Blueberries, 6 oz Package',
    discount: '13%',
    organic: true,
    rating: 5,
    reviews: 7,
    price: 3.99,
    originalPrice: 4.59,
    image: product14,
    category: 'fruits',
    color: 'blue',
    brand: 'organic',
    inStock: true
  },
  {
    id: 15,
    title: 'Carrots, 2 lb Bag',
    discount: '18%',
    organic: false,
    rating: 4,
    reviews: 5,
    price: 1.79,
    originalPrice: 2.19,
    image: product15,
    category: 'vegetables',
    color: 'orange',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 16,
    title: 'Red Bell Peppers, Each',
    discount: '20%',
    organic: false,
    rating: 4,
    reviews: 3,
    price: 1.29,
    originalPrice: 1.59,
    image: product16,
    category: 'vegetables',
    color: 'red',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 17,
    title: 'Fresh Avocados, 4 Count',
    discount: '22%',
    organic: true,
    rating: 5,
    reviews: 9,
    price: 4.99,
    originalPrice: 6.39,
    image: product17,
    category: 'vegetables',
    color: 'green',
    brand: 'organic',
    inStock: true
  },
  {
    id: 18,
    title: 'Seedless Watermelon, Each',
    discount: '15%',
    organic: false,
    rating: 4,
    reviews: 6,
    price: 5.99,
    originalPrice: 7.05,
    image: product18,
    category: 'fruits',
    color: 'green',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 19,
    title: 'Yellow Potatoes, 5 lb Bag',
    discount: '10%',
    organic: false,
    rating: 4,
    reviews: 4,
    price: 4.49,
    originalPrice: 4.99,
    image: product19,
    category: 'vegetables',
    color: 'yellow',
    brand: 'fresh',
    inStock: true
  },
  {
    id: 20,
    title: 'Fresh Cauliflower, Each',
    discount: '15%',
    organic: true,
    rating: 4,
    reviews: 3,
    price: 2.99,
    originalPrice: 3.49,
    image: product20,
    category: 'vegetables',
    color: 'white',
    brand: 'organic',
    inStock: true
  }
];

function ShopAllProducts() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    price: [0, 30],
    categories: [],
    colors: [],
    brands: [],
    inStock: false,
    onSale: false
  });
  const { addToCart } = useCart();
  
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Apply filters
  useEffect(() => {
    let filtered = [...allProducts];

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

    // Apply sorting
    if (sortOption === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'newest') {
      // In a real app, you would sort by date added
      filtered.sort((a, b) => b.id - a.id);
    }
    // 'featured' is the default, no sorting needed

    setFilteredProducts(filtered);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [filters, sortOption]);

  const handleFilterChange = (filter) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter.type]: filter.value
    }));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // In a real application, you might want to scroll to top after pagination
    window.scrollTo(0, 0);
  };

  // Helper function to add product to cart
  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent navigation when clicking the add to cart button
    addToCart(product, 1);
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header & Breadcrumbs */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Shop All Products</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Shop All Products</h1>
        </div>

        {/* Shop Banner */}
        <div className="relative overflow-hidden rounded-xl mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-8 text-white">
            <div className="max-w-2xl">
              <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-4 text-black">
                Save up to 50% off
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh Produce & Groceries
              </h2>
              <p className="text-indigo-100 mb-6">
                Discover our wide selection of fresh, high-quality products at unbeatable prices.
                From farm-fresh produce to pantry essentials, we've got everything you need.
              </p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                Explore Special Offers
              </button>
            </div>
          </div>
        </div>

        {/* Filter & Sort Controls (Mobile) */}
        <div className="md:hidden mb-6 flex flex-col gap-3">
          <button 
            onClick={toggleFilters}
            className="w-full flex items-center justify-center bg-white border border-gray-300 py-3 rounded-md font-medium text-gray-700"
          >
            <FunnelIcon className="w-4 h-4 mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          <div className="flex gap-2">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="flex-1 bg-white border border-gray-300 py-3 px-4 rounded-md text-gray-700 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Arrivals</option>
            </select>
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'text-indigo-600' : 'text-gray-400'}`}
              >
                <Squares2X2Icon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'text-indigo-600' : 'text-gray-400'}`}
              >
                <ListBulletIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main content with filters and products */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter sidebar */}
          <div className={`md:w-1/4 lg:w-1/5 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <ProductFilter onFilterChange={handleFilterChange} />
          </div>
          
          {/* Product grid */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Filter & Sort Controls (Desktop) */}
            <div className="hidden md:flex justify-between items-center mb-6 bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <span className="text-gray-600 text-sm mr-3">
                  Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <label htmlFor="sort-options" className="text-sm text-gray-600 mr-2">Sort by:</label>
                  <div className="relative">
                    <select
                      id="sort-options"
                      value={sortOption}
                      onChange={handleSortChange}
                      className="appearance-none bg-white border border-gray-300 py-2 pl-4 pr-10 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-400 hover:text-gray-500'} rounded-l-md`}
                  >
                    <Squares2X2Icon className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-400 hover:text-gray-500'} rounded-r-md`}
                  >
                    <ListBulletIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* No results message */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
                <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <FunnelIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria to find what you're looking for.</p>
                <button 
                  onClick={() => setFilters({
                    price: [0, 30],
                    categories: [],
                    colors: [],
                    brands: [],
                    inStock: false,
                    onSale: false
                  })}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                {/* Grid View */}
                {viewMode === 'grid' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentProducts.map((product) => (
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
                        <div className="relative h-44 bg-indigo-50 flex items-center justify-center overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.title} 
                            className="object-contain h-full w-full p-4 group-hover:scale-105 transition-transform duration-300" 
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
                          {product.timer && (
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
                            onClick={(e) => handleAddToCart(product, e)}
                          >
                            <ShoppingCartIcon className="w-4 h-4 mr-2" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* List View */}
                {viewMode === 'list' && (
                  <div className="space-y-4">
                    {currentProducts.map((product) => (
                      <div 
                        key={product.id} 
                        data-product-id={product.id}
                        className="product-card group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="relative md:w-1/4 bg-indigo-50 flex items-center justify-center overflow-hidden">
                            <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                              {product.discount}
                            </span>
                            <img 
                              src={product.image} 
                              alt={product.title} 
                              className="object-contain h-48 w-full p-4 group-hover:scale-105 transition-transform duration-300" 
                            />
                          </div>
                          <div className="p-4 md:p-6 flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                {product.organic && (
                                  <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium mb-2">ORGANIC</span>
                                )}
                                <h3 className="text-lg font-medium text-gray-800 mb-2">
                                  {product.title}
                                </h3>
                              </div>
                              <button 
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                <HeartIcon className="w-5 h-5" />
                              </button>
                            </div>
                            
                            <div className="flex items-center mb-4">
                              {Array.from({ length: product.rating }).map((_, idx) => (
                                <StarIcon key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                              <span className="ml-2 text-xs text-gray-600">({product.reviews} reviews)</span>
                            </div>
                            
                            <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                              Premium quality {product.title.toLowerCase()} - perfect for your healthy lifestyle. 
                              {product.organic ? ' 100% certified organic and pesticide-free.' : ''}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 items-center justify-between mt-auto">
                              <div className="flex items-baseline">
                                <span className="text-indigo-600 font-bold text-xl mr-2">
                                  ${product.price.toFixed(2)}
                                </span>
                                <span className="text-gray-400 line-through text-sm">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              </div>
                              
                              <button 
                                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                                onClick={(e) => handleAddToCart(product, e)}
                              >
                                <ShoppingCartIcon className="w-4 h-4 mr-2" />
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center">
                      <button 
                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 rounded-l-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                      >
                        Previous
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                        <button
                          key={number}
                          onClick={() => paginate(number)}
                          className={`px-4 py-2 border-t border-b ${currentPage === number ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 hover:bg-gray-50'} ${number === 1 ? 'border-l' : ''} ${number === totalPages ? 'border-r' : ''}`}
                        >
                          {number}
                        </button>
                      ))}
                      
                      <button 
                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 rounded-r-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAllProducts; 