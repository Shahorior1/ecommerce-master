import React, { useState } from 'react';

function ProductFilter({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState([0, 30]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(false);

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([0, value]);
    
    if (onFilterChange) {
      onFilterChange({ type: 'price', value: [0, value] });
    }
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(cat => cat !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(updatedCategories);
    
    if (onFilterChange) {
      onFilterChange({ type: 'categories', value: updatedCategories });
    }
  };

  const handleColorChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter(c => c !== color)
      : [...selectedColors, color];
    
    setSelectedColors(updatedColors);
    
    if (onFilterChange) {
      onFilterChange({ type: 'colors', value: updatedColors });
    }
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand];
    
    setSelectedBrands(updatedBrands);
    
    if (onFilterChange) {
      onFilterChange({ type: 'brands', value: updatedBrands });
    }
  };

  const handleStockChange = (e) => {
    setInStock(e.target.checked);
    
    if (onFilterChange) {
      onFilterChange({ type: 'inStock', value: e.target.checked });
    }
  };

  const handleSaleChange = (e) => {
    setOnSale(e.target.checked);
    
    if (onFilterChange) {
      onFilterChange({ type: 'onSale', value: e.target.checked });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      {/* Widget Title */}
      <div className="border-b pb-3 mb-4">
        <h3 className="font-semibold text-indigo-900">Widget price filter</h3>
      </div>

      {/* Price Range Slider */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">Min price</span>
          <span className="text-sm text-gray-600">Max price</span>
        </div>
        <input
          type="range"
          min="0"
          max="30"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2">
          <span className="text-sm font-medium text-indigo-900">${priceRange[0]}</span>
          <span className="text-sm font-medium text-indigo-900">${priceRange[1]}</span>
        </div>
        
        <div className="mt-4 flex items-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
            Filter
          </button>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mb-6">
        <h4 className="font-semibold text-indigo-900 mb-3">Product Categories</h4>
        <ul className="space-y-2">
          {[
            { id: 'fruits', name: 'Fruits & Vegetables' },
            { id: 'baby', name: 'Baby & Pregnancy' },
            { id: 'beverages', name: 'Beverages' },
            { id: 'meals', name: 'Meals & Seafood' },
            { id: 'snacks', name: 'Snacks & Treats' },
            { id: 'sweets', name: 'Sweets & Bakery' },
            { id: 'frozen', name: 'Frozen Foods' },
            { id: 'grocery', name: 'Grocery & Staples' },
          ].map((category) => (
            <li key={category.id} className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <span className="ml-2 text-sm">{category.name}</span>
              </label>
              <span className="text-xs text-gray-500">({Math.floor(Math.random() * 10) + 1})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Filter by Color */}
      <div className="mb-6">
        <h4 className="font-semibold text-indigo-900 mb-3">Filter by Color</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={selectedColors.includes('green')}
                onChange={() => handleColorChange('green')}
              />
              <span className="ml-2 text-sm flex items-center">
                <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                Green
              </span>
            </label>
            <span className="text-xs text-gray-500 ml-auto">(7)</span>
          </li>
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={selectedColors.includes('red')}
                onChange={() => handleColorChange('red')}
              />
              <span className="ml-2 text-sm flex items-center">
                <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                Red
              </span>
            </label>
            <span className="text-xs text-gray-500 ml-auto">(5)</span>
          </li>
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={selectedColors.includes('yellow')}
                onChange={() => handleColorChange('yellow')}
              />
              <span className="ml-2 text-sm flex items-center">
                <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                Yellow
              </span>
            </label>
            <span className="text-xs text-gray-500 ml-auto">(3)</span>
          </li>
        </ul>
      </div>

      {/* Filter by Brands */}
      <div className="mb-6">
        <h4 className="font-semibold text-indigo-900 mb-3">Filter by Brands</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={selectedBrands.includes('fresh')}
                onChange={() => handleBrandChange('fresh')}
              />
              <span className="ml-2 text-sm">Fresh</span>
            </label>
            <span className="text-xs text-gray-500 ml-auto">(3)</span>
          </li>
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={selectedBrands.includes('organic')}
                onChange={() => handleBrandChange('organic')}
              />
              <span className="ml-2 text-sm">Organic</span>
            </label>
            <span className="text-xs text-gray-500 ml-auto">(5)</span>
          </li>
        </ul>
      </div>

      {/* Product Status */}
      <div>
        <h4 className="font-semibold text-indigo-900 mb-3">Product Status</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={inStock}
                onChange={handleStockChange}
              />
              <span className="ml-2 text-sm">In Stock</span>
            </label>
            <span className="text-xs text-gray-500 ml-auto">(12)</span>
          </li>
          <li className="flex items-center">
            <label className="flex items-center cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                checked={onSale}
                onChange={handleSaleChange}
              />
              <span className="ml-2 text-sm">On Sale</span>
            </label>
            <span className="text-xs text-gray-500 ml-auto">(8)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductFilter; 