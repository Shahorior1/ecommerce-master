import React from 'react'

// Import icons for categories
import icon1 from '../assets/list02.png'
import icon2 from '../assets/list05.png'
import icon3 from '../assets/list08.png'
import icon4 from '../assets/list11.png'
import icon5 from '../assets/list14.png'
import icon6 from '../assets/list17.png'
import icon7 from '../assets/list20.png'
import icon8 from '../assets/list23.png'
import icon9 from '../assets/list26.png'

const categories = [
  { name: 'Fruits & Vegetables', icon: icon1 },
  { name: 'Baby & Pregnancy', icon: icon2 },
  { name: 'Beverages', icon: icon3 },
  { name: 'Meats & Seafood', icon: icon4 },
  { name: 'Biscuits & Snacks', icon: icon5 },
  { name: 'Breads & Bakery', icon: icon6 },
  { name: 'Breakfast & Dairy', icon: icon7 },
  { name: 'Frozen Foods', icon: icon8 },
  { name: 'Grocery & Staples', icon: icon9 },
]

function CategorySection() {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-indigo-900 mb-2">Shop By Category</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Browse our wide selection of high-quality products organized by category</p>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mb-6">
          <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full mr-2"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full mr-2"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        </div>
        
        {/* Category items */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 border-2 border-transparent group-hover:border-indigo-200">
                <div className="h-14 w-14 bg-indigo-50 rounded-full flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
                  <img src={category.icon} alt={category.name} className="h-10 w-10 object-contain" />
                </div>
              </div>
              <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">{category.name}</span>
              <div className="h-1 w-0 bg-indigo-600 rounded-full mt-1.5 group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection 