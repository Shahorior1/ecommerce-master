import React from 'react';

// Import images
import news1 from '../assets/400.png';
import news2 from '../assets/404.png';
import news3 from '../assets/408.png';
import news4 from '../assets/357.png';

const newsItems = [
  {
    id: 1,
    category: 'Uncategorized',
    image: news1,
    title: 'How grocers are approaching delivery as the market evolves',
    summary: 'Bilmålvakt treskade i nibel den mobilismbruk deren jyn nönning osk heterosttik i rel ultran. Fålåss',
    author: 'sinan',
    date: '3 Nov 2023',
  },
  {
    id: 2,
    category: 'Uncategorized',
    image: news2,
    title: 'The Friday Checkout: Food insecurity keeps retailers off balance',
    summary: 'Bilmålvakt treskade i nibel den mobilismbruk deren jyn nönning osk heterosttik i rel ultran. Fålåss',
    author: 'sinan',
    date: '3 Nov 2023',
  },
  {
    id: 3,
    category: 'Uncategorized',
    image: news3,
    title: 'Consumer want grocer to use AI to help them save money Dunnhumby',
    summary: 'Bilmålvakt treskade i nibel den mobilismbruk deren jyn nönning osk heterosttik i rel ultran. Fålåss',
    author: 'sinan',
    date: '3 Nov 2023',
  },
  {
    id: 4,
    category: 'Uncategorized',
    image: news4,
    title: 'Order up! How grocers are replicating the restaurant experience in retail',
    summary: 'Bilmålvakt treskade i nibel den mobilismbruk deren jyn nönning osk heterosttik i rel ultran. Fålåss',
    author: 'sinan',
    date: '3 Nov 2023',
  },
];

function NewsSection() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Our News</h2>
            <p className="text-sm text-gray-500">Some of the new posts this week</p>
          </div>
          <button className="text-sm font-medium text-purple-700 hover:text-purple-900">
            View All
          </button>
        </div>
        {/* News grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map(item => (
            <div key={item.id} className="relative bg-white border rounded-lg overflow-hidden shadow-sm">
              <span className="absolute top-2 left-2 inline-block bg-purple-100 text-purple-700 text-xs font-semibold uppercase px-2 py-1 rounded">
                {item.category}
              </span>
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.summary}</p>
                <div className="text-xs text-gray-500">
                  by <span className="font-medium text-gray-700">{item.author}</span> · {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection; 