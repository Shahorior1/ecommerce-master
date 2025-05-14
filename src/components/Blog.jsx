import React, { useState } from 'react';
import { CalendarIcon, UserIcon, ArrowLongRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Import all blog images from assets
import summerFruits from '../assets/357.png'; // Seasonal fruits
import pantryRecipes from '../assets/353.png'; // Pantry recipes
import sustainableKitchen from '../assets/365.png'; // Sustainable kitchen
import farmersMarket from '../assets/384.png'; // Farmers market
import organicVegetables from '../assets/396.png'; // Organic vegetables
import kitchenGadgets from '../assets/408.png'; // Kitchen gadgets
import foodImage1 from '../assets/33.png';
import foodImage2 from '../assets/34.png';
import foodImage3 from '../assets/35.png';
import foodImage4 from '../assets/39.png';
import foodImage5 from '../assets/40.png';
import foodImage6 from '../assets/404.png';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog posts data with local images
  const blogPosts = [
    {
      id: 1,
      title: "Seasonal Fruits to Add to Your Summer Shopping List",
      excerpt: "Discover the best seasonal fruits that are not only delicious but packed with essential nutrients for the summer months.",
      image: summerFruits,
      date: "May 15, 2023",
      author: "Emma Johnson",
      category: "Health Tips",
      tags: ["summer", "seasonal", "fruits", "nutrition"]
    },
    {
      id: 2,
      title: "10 Quick and Easy Recipes Using Pantry Staples",
      excerpt: "When you're low on fresh ingredients, these easy recipes using common pantry staples will save your mealtime.",
      image: pantryRecipes,
      date: "April 28, 2023",
      author: "Michael Chen",
      category: "Recipes",
      tags: ["recipes", "pantry", "quick meals", "easy cooking"]
    },
    {
      id: 3,
      title: "How to Create a Sustainable Kitchen: Reduce Food Waste",
      excerpt: "Simple but effective strategies to minimize food waste in your kitchen and contribute to a more sustainable lifestyle.",
      image: sustainableKitchen,
      date: "April 10, 2023",
      author: "Sophia Williams",
      category: "Sustainability",
      tags: ["sustainability", "food waste", "green living", "eco-friendly"]
    },
    {
      id: 4,
      title: "The Benefits of Shopping at Local Farmers Markets",
      excerpt: "Why supporting local farmers markets can benefit your health, community, and the environment.",
      image: farmersMarket,
      date: "March 22, 2023",
      author: "David Rodriguez",
      category: "Community",
      tags: ["local", "farmers market", "community", "fresh produce"]
    },
    {
      id: 5,
      title: "Guide to Choosing the Best Organic Vegetables",
      excerpt: "Learn how to select the freshest and most nutritious organic vegetables for your family's meals.",
      image: organicVegetables,
      date: "March 5, 2023",
      author: "Emma Johnson",
      category: "Organic Living",
      tags: ["organic", "vegetables", "shopping guide", "health"]
    },
    {
      id: 6,
      title: "Essential Kitchen Gadgets That Save Time and Money",
      excerpt: "These innovative kitchen tools will streamline your cooking process and help you become more efficient in the kitchen.",
      image: kitchenGadgets,
      date: "February 17, 2023",
      author: "Michael Chen",
      category: "Kitchen Tips",
      tags: ["gadgets", "kitchen tools", "time-saving", "cooking"]
    },
    {
      id: 7,
      title: "Healthy Breakfast Ideas for Busy Mornings",
      excerpt: "Start your day right with these quick and nutritious breakfast options that will keep you energized all morning.",
      image: foodImage1,
      date: "January 25, 2023",
      author: "Emily Parker",
      category: "Health Tips",
      tags: ["breakfast", "healthy eating", "quick meals", "nutrition"]
    },
    {
      id: 8,
      title: "Vegan Comfort Food Recipes for Winter",
      excerpt: "Enjoy hearty and satisfying plant-based versions of classic comfort foods perfect for cold winter days.",
      image: foodImage2,
      date: "January 10, 2023",
      author: "Mark Williams",
      category: "Recipes",
      tags: ["vegan", "comfort food", "winter recipes", "plant-based"]
    },
    {
      id: 9,
      title: "How to Organize Your Kitchen for Maximum Efficiency",
      excerpt: "Transform your kitchen into a well-organized space that makes cooking easier and more enjoyable.",
      image: foodImage3,
      date: "December 12, 2022",
      author: "Sophia Williams",
      category: "Kitchen Tips",
      tags: ["organization", "kitchen design", "storage solutions", "efficiency"]
    },
    {
      id: 10,
      title: "Superfoods to Boost Your Immune System",
      excerpt: "Incorporate these nutrient-rich foods into your diet to support your body's natural defenses.",
      image: foodImage4,
      date: "November 28, 2022",
      author: "David Rodriguez",
      category: "Health Tips",
      tags: ["superfoods", "immune system", "nutrition", "health"]
    },
    {
      id: 11,
      title: "International Cuisines to Try at Home",
      excerpt: "Explore global flavors with these approachable recipes from different culinary traditions.",
      image: foodImage5,
      date: "November 15, 2022",
      author: "Michael Chen",
      category: "Recipes",
      tags: ["international", "cuisine", "recipes", "cooking"]
    },
    {
      id: 12,
      title: "Sustainable Food Packaging Alternatives",
      excerpt: "Reduce your environmental impact with these eco-friendly food storage and packaging options.",
      image: foodImage6,
      date: "October 30, 2022",
      author: "Emma Johnson",
      category: "Sustainability",
      tags: ["eco-friendly", "sustainable", "packaging", "zero waste"]
    }
  ];

  // Popular categories
  const categories = [
    { name: "Recipes", count: 24 },
    { name: "Health Tips", count: 18 },
    { name: "Sustainability", count: 12 },
    { name: "Organic Living", count: 15 },
    { name: "Kitchen Tips", count: 20 },
    { name: "Community", count: 8 }
  ];

  // Recent posts for sidebar
  const recentPosts = blogPosts.slice(0, 3);

  // Popular tags
  const tags = [
    "recipes", "organic", "seasonal", "healthy", "vegetables", 
    "fruits", "kitchen", "cooking", "sustainability", "local"
  ];

  // Filter posts based on search query
  const filteredPosts = searchQuery 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : blogPosts;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover recipes, tips, and insights on healthy eating, sustainable living, and making the most of your grocery shopping.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Blog Grid */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Blog Content */}
            <div className="lg:w-2/3">
              {/* Search Bar */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full py-3 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <MagnifyingGlassIcon className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                </div>
              </div>

              {/* Blog Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded mr-3">{post.category}</span>
                        <div className="flex items-center mr-4">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <a href={`#blog/${post.id}`} className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors">
                        Read More
                        <ArrowLongRightIcon className="h-5 w-5 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center">
                  <a href="#" className="px-4 py-2 mx-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">Previous</a>
                  <a href="#" className="px-4 py-2 mx-1 rounded-md bg-purple-600 text-white">1</a>
                  <a href="#" className="px-4 py-2 mx-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">2</a>
                  <a href="#" className="px-4 py-2 mx-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">3</a>
                  <a href="#" className="px-4 py-2 mx-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">Next</a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-0">
                      <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">{category.name}</a>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors line-clamp-2">
                          <a href={`#blog/${post.id}`}>{post.title}</a>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Subscribe */}
              <div className="bg-purple-700 p-6 rounded-lg shadow-sm text-white">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4 text-purple-100">Get the latest articles, recipes and tips delivered straight to your inbox.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 rounded-md bg-purple-600 border border-purple-500 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-white text-purple-700 font-medium py-3 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog; 