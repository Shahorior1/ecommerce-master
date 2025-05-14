import React, { useState, useEffect } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Logo from '../assets/Logo.png';

function Footer() {
  // Countdown timer setup
  const [countdown, setCountdown] = useState({
    days: 47,
    hours: 6,
    minutes: 57,
    seconds: 8
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
                clearInterval(timer);
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-white text-gray-700">
      {/* Newsletter Section */}
      <div className="bg-purple-700 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Join our newsletter for exclusive offers</h2>
            <p className="text-purple-100">Sign up to receive updates on new arrivals, special offers, and seasonal discounts.</p>
          </div>
          <div>
            <form className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 px-6 py-3 bg-red-500 text-white font-medium rounded-r-md hover:bg-red-600 transition duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
            <p className="text-xs text-purple-200 mt-2">
              By subscribing you agree to our <a href="#" className="underline hover:text-white">Terms & Conditions</a> and <a href="#" className="underline hover:text-white">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-200">
        {/* Column 1 */}
        <div>
          <div className="flex items-center mb-6">
            <img src={Logo} alt="JinStore" className="h-10 mr-2" />
          </div>
          <p className="text-gray-600 mb-6">Your one-stop destination for fresh, quality groceries delivered to your doorstep.</p>
          <div className="flex items-start mb-4">
            <PhoneIcon className="w-5 h-5 flex-shrink-0 mr-3 text-purple-600" />
            <div>
              <p className="text-sm text-gray-500">Customer Support</p>
              <p className="text-base font-bold text-purple-900">1-800-JINSTORE</p>
            </div>
          </div>
          <div className="flex items-start">
            <EnvelopeIcon className="w-5 h-5 flex-shrink-0 mr-3 text-purple-600" />
            <div>
              <p className="text-sm text-gray-500">Email Us</p>
              <p className="text-base font-bold text-purple-900">support@jinstore.com</p>
            </div>
          </div>
        </div>
        
        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold text-purple-900 mb-6">Shop</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-purple-600 transition-colors">Today's Deals</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Trending Products</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Popular Categories</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Gift Cards</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Become a Vendor</a></li>
          </ul>
        </div>
        
        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold text-purple-900 mb-6">Customer Service</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-purple-600 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Track Your Order</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Shipping Information</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">FAQ</a></li>
          </ul>
        </div>
        
        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold text-purple-900 mb-6">About Us</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><a href="#" className="hover:text-purple-600 transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Press Center</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-purple-600 transition-colors">Affiliate Program</a></li>
          </ul>
        </div>
        
        {/* Column 5 */}
        <div>
          <h3 className="text-lg font-bold text-purple-900 mb-6">Download Our App</h3>
          <p className="text-gray-600 mb-4">Shop on the go with our mobile app for even more exclusive deals.</p>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.9 5c-.9.7-1.7 1.2-2.6 1.6-.8-.9-1.9-1.6-3.2-1.6-2.4 0-4.3 2-4.3 4.3 0 .3 0 .7.1 1-3.6-.2-6.8-2-8.9-4.8-.4.7-.6 1.5-.6 2.3 0 1.5.8 2.8 1.9 3.6-.7 0-1.4-.2-2-.6v.1c0 2.1 1.5 3.8 3.4 4.2-.4.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.6 1.7 2.2 3 4.1 3-1.5 1.2-3.4 1.9-5.5 1.9-.4 0-.7 0-1.1-.1 2 1.3 4.3 2 6.8 2 8.1 0 12.6-6.8 12.6-12.6v-.6c.9-.6 1.6-1.4 2.2-2.3-.8.4-1.7.6-2.6.7 1-.6 1.7-1.5 2-2.6-.9.5-1.9.9-2.9 1.1z"/></svg>
              Google Play
            </a>
            <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.1 12.5c0-2.3 1.2-3.6 2.9-4.5-1.1-1.6-2.8-2.4-4.8-2.4-2-.1-4 1.2-5 1.2-1 0-2.6-1.2-4.2-1.2C3.5 5.6 1 7.9 1 12.3c0 1.5.3 3 .8 4.4.7 2.1 3.3 7.3 5.9 7.2 1.4 0 2.4-1 4.1-1 1.7 0 2.5 1 4.2 1 2.7-.1 5-5.1 5.7-7.2-3.7-1.3-4.6-6.2-4.6-6.6zM13.4 4.9c1.1-1.4 1.9-3.1 1.6-5-1.6.1-3.4 1.1-4.5 2.5-.9 1.1-1.8 2.9-1.5 4.8 1.7.1 3.3-.9 4.4-2.3z"/></svg>
              App Store
            </a>
          </div>
          
          <h3 className="text-lg font-bold text-purple-900 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 transition-colors">
              <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 transition-colors">
              <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z"/></svg>
            </a>
            <a href="#" className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 transition-colors">
              <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666z"/></svg>
            </a>
            <a href="#" className="bg-purple-100 p-2 rounded-full hover:bg-purple-200 transition-colors">
              <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Timer Section */}
      <div className="bg-purple-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-4 md:mb-0 flex items-center">
              <ClockIcon className="w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold">Limited Time Offer!</h3>
            </div>
            <div className="text-white">
              <p className="mb-2 font-medium">Special discount ends in:</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <div className="bg-white text-purple-900 rounded-lg p-3 w-16 text-center">
                  <div className="text-2xl font-bold">{countdown.days.toString().padStart(2, '0')}</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="bg-white text-purple-900 rounded-lg p-3 w-16 text-center">
                  <div className="text-2xl font-bold">{countdown.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="bg-white text-purple-900 rounded-lg p-3 w-16 text-center">
                  <div className="text-2xl font-bold">{countdown.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs">Minutes</div>
                </div>
                <div className="bg-white text-purple-900 rounded-lg p-3 w-16 text-center">
                  <div className="text-2xl font-bold">{countdown.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs">Seconds</div>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => window.location.hash = 'shop'}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-200"></div>
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">© 2024 JinStore. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-x-6 mt-4 md:mt-0">
          <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Terms</a>
          <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Privacy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Cookies</a>
          <a href="#" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 