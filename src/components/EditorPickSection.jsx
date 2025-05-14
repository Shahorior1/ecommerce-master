import React from 'react'
import {
  PlusIcon,
  HeartIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

// Import images
import product1 from '../assets/39.png'
import product2 from '../assets/342.png'
import product3 from '../assets/349.png'
import product4 from '../assets/353.png'

const products = [
  {
    id: 1,
    name: '100 Percent Apple Juice – 64 fl oz Bottle',
    discount: 75,
    rating: 4,
    reviews: 3,
    price: 0.5,
    originalPrice: 1.99,
    image: product1
  },
  {
    id: 2,
    name: 'Great Value Rising Crust Frozen Pizza, Supreme',
    discount: 11,
    rating: 4,
    reviews: 2,
    price: 8.99,
    originalPrice: 9.99,
    image: product2
  },
  {
    id: 3,
    name: 'California Pizza Kitchen Margherita, Crispy Thin Crust',
    discount: 21,
    rating: 3,
    reviews: 3,
    price: 11.77,
    originalPrice: 14.77,
    image: product3
  },
  {
    id: 4,
    name: 'Cantaloupe Melon Fresh Organic Cut',
    discount: 59,
    rating: 4,
    reviews: 3,
    price: 1.25,
    originalPrice: 2.98,
    image: product4
  },
]

function EditorPickSection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Editor's Pick</h2>
            <p className="text-sm text-gray-500">New products with updated stocks.</p>
          </div>
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
            View All &rarr;
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white border rounded-lg overflow-hidden shadow-sm">
              {/* Discount badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {product.discount}%
              </span>
              {/* Wishlist heart */}
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <HeartIcon className="w-5 h-5" />
              </button>
              {/* Image */}
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="object-contain h-full w-full p-2" />
              </div>
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {Array.from({ length: product.rating }).map((_, idx) => (
                      <StarIcon key={idx} className="w-4 h-4 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  {/* Add to cart + */}
                  <button className="text-purple-700 hover:text-purple-900">
                    <PlusIcon className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-800 truncate">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-baseline space-x-2">
                  <span className="text-red-500 font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EditorPickSection 