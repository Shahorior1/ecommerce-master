import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

// Import images
import promo1 from '../assets/384.png'
import promo2 from '../assets/388.png'
import promo3 from '../assets/396.png'

const promos = [
  {
    id: 1,
    title: 'We provide you the best quality products',
    subtitle: 'A family place for grocery',
    image: promo1
  },
  {
    id: 2,
    title: 'We make your grocery shopping more exciting',
    subtitle: 'Shine the morning...',
    image: promo2
  },
  {
    id: 3,
    title: 'The one supermarket that saves your money',
    subtitle: 'Breakfast made better',
    image: promo3
  },
]

function PromoRow() {
  // Function to navigate to shop page
  const navigateToShop = () => {
    window.location.hash = 'shop';
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map(promo => (
          <div key={promo.id} className="bg-gray-100 rounded-lg overflow-hidden flex flex-col md:flex-row items-center p-6">
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs text-orange-600">Only This Week</span>
              <h3 className="mt-2 text-2xl font-semibold text-gray-800">{promo.title}</h3>
              <p className="mt-1 text-gray-600">{promo.subtitle}</p>
              <button 
                onClick={navigateToShop}
                className="mt-4 inline-flex items-center bg-white text-gray-800 px-4 py-2 rounded-full shadow hover:bg-gray-50"
              >
                Shop Now <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
              <div className="h-32 w-32 bg-gray-200 flex items-center justify-center rounded">
                <img src={promo.image} alt={promo.title} className="object-contain h-full w-full p-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PromoRow 