import React from 'react'
import {
  HeartIcon,
  StarIcon,
  PlusIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

// Import images
import product1 from '../assets/444.png'
import product2 from '../assets/456.png'
import product3 from '../assets/461.png'
import product4 from '../assets/466.png'
import product5 from '../assets/34.png'
import product6 from '../assets/35.png'
import product7 from '../assets/40.png'

const bestSellers = [
  {
    id: 1,
    name: '100 Percent Apple Juice – 64 fl oz Bottle',
    discount: '75%',
    organic: true,
    timer: '84 06 57 08',
    rating: 5,
    reviews: 3,
    price: 0.5,
    originalPrice: 1.99,
    image: product1
  },
  {
    id: 2,
    name: 'Simply Orange Pulp Free Juice – 52 fl oz',
    discount: '41%',
    organic: false,
    timer: '68 06 57 08',
    rating: 4,
    reviews: 2,
    price: 2.45,
    originalPrice: 4.13,
    image: product2
  },
  {
    id: 3,
    name: 'Vitaminwater zero sugar squeezed electrolyte',
    discount: '45%',
    organic: false,
    timer: '77 06 57 08',
    rating: 4,
    reviews: 3,
    price: 1.99,
    originalPrice: 3.6,
    image: product3
  },
  {
    id: 4,
    name: 'Real Plant-Powered Protein Shake – Double Chocolate',
    discount: '17%',
    organic: false,
    timer: '76 06 57 08',
    rating: 3,
    reviews: 3,
    price: 14.89,
    originalPrice: 17.89,
    image: product4
  },
  {
    id: 5,
    name: 'Absolut Grapefruit Paloma Sparkling Vodka Cocktail – 4pk_355ml',
    discount: '31%',
    organic: false,
    timer: '86 06 57 08',
    rating: 5,
    reviews: 3,
    price: 6.99,
    originalPrice: 9.99,
    featured: true,
    description: 'Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent.',
    stockCount: 38,
    image: product5
  },
  {
    id: 6,
    name: 'Great Value Rising Crust Pizza, Cheese, 27.4 oz',
    discount: '14%',
    organic: false,
    timer: '88 06 57 08',
    rating: 4,
    reviews: 2,
    price: 12.89,
    originalPrice: 14.89,
    image: product6
  },
  {
    id: 7,
    name: 'Sample New Product – 1 unit',
    discount: '22%',
    organic: false,
    timer: '90 06 57 08',
    rating: 4,
    reviews: 1,
    price: 2.99,
    originalPrice: 3.80,
    image: product7
  },
]

// Divide best sellers into left stack, featured center, and right stack
const others = bestSellers.filter(p => !p.featured)
const leftProducts = others.slice(0, 3)
const featuredProduct = bestSellers.find(p => p.featured)
const rightProducts = others.slice(3)

// Add static positions for grid placement so Tailwind JIT picks them up
const leftPositions = ['md:row-start-1', 'md:row-start-2', 'md:row-start-3']
const rightPositions = ['md:row-start-1', 'md:row-start-2', 'md:row-start-3']

function BestSellersSection() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">BEST SELLERS</h2>
            <p className="text-sm text-gray-500">Dont miss this opportunity at a special discount just for this week.</p>
          </div>
          <button className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
            View All <ArrowRightIcon className="w-4 h-4 ml-1" />
          </button>
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-6">
          {leftProducts.map((product, idx) => (
            <div 
              key={product.id} 
              data-product-id={product.id}
              className={`product-card relative bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col p-4 md:col-start-1 ${leftPositions[idx]} cursor-pointer`}
            >
              {/* Discount badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{product.discount}</span>
              {/* Wishlist heart */}
              <button 
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                onClick={(e) => e.stopPropagation()}
              >
                <HeartIcon className="w-5 h-5" />
              </button>
              {/* Image */}
              <div className="h-32 bg-gray-100 flex items-center justify-center mb-2">
                <img src={product.image} alt={product.name} className="object-contain h-full w-full p-2" />
              </div>
              {/* Organic tag */}{product.organic && <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">ORGANIC</span>}
              {/* Timer */}<div className="text-xs text-gray-600 mb-2">{product.timer} <span className="ml-1">Remains until the end of the offer</span></div>
              {/* Rating */}<div className="flex items-center mb-2">{Array.from({ length: product.rating }).map((_, idx) => (<StarIcon key={idx} className="w-4 h-4 text-yellow-400" />))}<span className="ml-2 text-xs text-gray-600">({product.reviews})</span></div>
              {/* Price */}<div className="flex items-baseline space-x-2 mb-2"><span className="text-red-500 font-bold text-lg">${product.price.toFixed(2)}</span><span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span></div>
              {/* Add to cart */}
              <button 
                className="mt-auto inline-flex items-center text-purple-700 hover:text-purple-900"
                onClick={(e) => e.stopPropagation()}
              >
                Add to cart <PlusIcon className="w-5 h-5 ml-1" />
              </button>
            </div>
          ))}
          {featuredProduct && (
            <div 
              key={featuredProduct.id} 
              data-product-id={featuredProduct.id}
              className="product-card featured relative bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col p-6 md:col-start-2 md:row-start-1 md:row-span-3 cursor-pointer"
            >
              {/* Discount badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{featuredProduct.discount}</span>
              {/* Wishlist heart */}
              <button 
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                onClick={(e) => e.stopPropagation()}
              >
                <HeartIcon className="w-5 h-5" />
              </button>
              {/* Image */}
              <div className="h-48 bg-gray-100 flex items-center justify-center mb-4">
                <img src={featuredProduct.image} alt={featuredProduct.name} className="object-contain h-full w-full p-2" />
              </div>
              {/* Rating */}
              <div className="flex items-center mb-2">{Array.from({ length: featuredProduct.rating }).map((_, idx) => (<StarIcon key={idx} className="w-5 h-5 text-yellow-400" />))}<span className="ml-2 text-xs text-gray-600">({featuredProduct.reviews})</span></div>
              {/* Title */}<h3 className="text-lg font-semibold text-gray-800 mb-2">{featuredProduct.name}</h3>
              {/* Price */}<div className="flex items-baseline space-x-2 mb-4"><span className="text-red-500 font-bold text-2xl">${featuredProduct.price.toFixed(2)}</span><span className="text-gray-400 line-through text-sm">${featuredProduct.originalPrice.toFixed(2)}</span></div>
              {/* Description */}<p className="text-sm text-gray-600 mb-4 flex-1">{featuredProduct.description}</p>
              {/* Stock bar */}
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500" style={{ width: `${featuredProduct.stockCount}%` }} />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">This product is about to run out</span>
                <span className="text-sm text-gray-800 mt-1 block">available only: {featuredProduct.stockCount}</span>
              </div>
              {/* Add to cart */}
              <button 
                className="mt-auto bg-green-500 text-white px-4 py-3 rounded-md font-medium hover:bg-green-600 inline-flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <ShoppingCartIcon className="w-5 h-5 mr-2" /> Add to cart
              </button>
            </div>
          )}
          {rightProducts.map((product, idx) => (
            <div 
              key={product.id} 
              data-product-id={product.id}
              className={`product-card relative bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col p-4 md:col-start-3 ${rightPositions[idx]} cursor-pointer`}
            >
              {/* Discount badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{product.discount}</span>
              {/* Wishlist heart */}
              <button 
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                onClick={(e) => e.stopPropagation()}
              >
                <HeartIcon className="w-5 h-5" />
              </button>
              {/* Image */}
              <div className="h-32 bg-gray-100 flex items-center justify-center mb-2">
                <img src={product.image} alt={product.name} className="object-contain h-full w-full p-2" />
              </div>
              {/* Organic tag */}{product.organic && <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">ORGANIC</span>}
              {/* Timer */}<div className="text-xs text-gray-600 mb-2">{product.timer} <span className="ml-1">Remains until the end of the offer</span></div>
              {/* Rating */}<div className="flex items-center mb-2">{Array.from({ length: product.rating }).map((_, idx) => (<StarIcon key={idx} className="w-4 h-4 text-yellow-400" />))}<span className="ml-2 text-xs text-gray-600">({product.reviews})</span></div>
              {/* Price */}<div className="flex items-baseline space-x-2 mb-2"><span className="text-red-500 font-bold text-lg">${product.price.toFixed(2)}</span><span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span></div>
              {/* Add to cart */}
              <button 
                className="mt-auto inline-flex items-center text-purple-700 hover:text-purple-900"
                onClick={(e) => e.stopPropagation()}
              >
                Add to cart <PlusIcon className="w-5 h-5 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellersSection 