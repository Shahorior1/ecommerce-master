import React, { useState } from 'react';
import { useCart } from '../CartContext';

const Checkout = () => {
  const { cartItems, getSubtotal, getTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('direct_bank');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'United States (US)',
    address: '',
    apartment: '',
    city: '',
    state: 'California',
    zipCode: '',
    phone: '',
    email: '',
    createAccount: false,
    shipDifferent: false,
    orderNotes: '',
    termsAccepted: false
  });
  const [formErrors, setFormErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getSubtotal();
  const flatRate = 15.00;
  const total = subtotal + flatRate;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['firstName', 'lastName', 'address', 'city', 'zipCode', 'phone', 'email'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
      }
    });
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.termsAccepted) {
      errors.termsAccepted = 'You must accept the terms and conditions';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate order processing
      setTimeout(() => {
        clearCart();
        setOrderPlaced(true);
        setIsProcessing(false);
      }, 1500);
    } else {
      // Scroll to the first error
      const firstError = document.querySelector('.error-message');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  if (orderPlaced) {
    return (
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-lg p-8 text-center shadow-sm my-8">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your order!</h2>
            <p className="text-gray-600 mb-6">
              Your order has been placed successfully. We've sent an order confirmation to {formData.email}.
            </p>
            <p className="text-gray-600 mb-6">
              Order number: <span className="font-semibold">ORD-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
            </p>
            <button 
              onClick={() => window.location.hash = ''}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Return to Shop
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Checkout</span>
        </div>
        
        {/* Coupon */}
        <div className="bg-gray-100 p-4 mb-8 rounded flex items-start">
          <div className="w-5 h-5 mr-2 mt-0.5">
            <input type="checkbox" className="w-4 h-4" />
          </div>
          <div>
            <span>Have a coupon? Click here to enter your code</span>
          </div>
        </div>

        {/* Cart minimum for free shipping */}
        <div className="border border-indigo-100 rounded-md p-4 mb-8 bg-indigo-50 flex items-center">
          <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>Add <span className="font-bold text-indigo-700">$299.11</span> to cart and get free shipping!</span>
        </div>

        {/* Show message if cart is empty */}
        {cartItems.length === 0 && !orderPlaced && (
          <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 rounded-md p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm">
                  Your cart is currently empty. <a href="#" onClick={() => window.location.hash = 'shop'} className="font-medium underline">Add some products</a> before checking out.
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          {/* Billing Details Section */}
          <div className="lg:w-2/3">
            <h2 className="text-xl font-bold mb-6">Billing details</h2>
            <div className="space-y-4">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  />
                  {formErrors.firstName && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full p-2 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  />
                  {formErrors.lastName && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.lastName}</p>}
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium mb-1">Company name (optional)</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1">Country / Region <span className="text-red-500">*</span></label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none bg-white"
                >
                  <option>United States (US)</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium mb-1">Street address <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="House number and street name" 
                  className={`w-full p-2 border ${formErrors.address ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-2`}
                />
                {formErrors.address && <p className="text-red-500 text-xs mt-1 mb-2 error-message">{formErrors.address}</p>}
                <input 
                  type="text" 
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, unit, etc. (optional)" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium mb-1">Town / City <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${formErrors.city ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                {formErrors.city && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.city}</p>}
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium mb-1">State <span className="text-red-500">*</span></label>
                <select 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none bg-white"
                >
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </div>

              {/* ZIP Code */}
              <div>
                <label className="block text-sm font-medium mb-1">ZIP Code <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${formErrors.zipCode ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                {formErrors.zipCode && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.zipCode}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">Phone <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                {formErrors.phone && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email address <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                />
                {formErrors.email && <p className="text-red-500 text-xs mt-1 error-message">{formErrors.email}</p>}
              </div>

              {/* Account creation option */}
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="create-account" 
                  name="createAccount"
                  checked={formData.createAccount}
                  onChange={handleInputChange}
                  className="mr-2" 
                />
                <label htmlFor="create-account" className="text-sm">Create an account?</label>
              </div>

              {/* Ship to different address option */}
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="ship-different" 
                  name="shipDifferent"
                  checked={formData.shipDifferent}
                  onChange={handleInputChange}
                  className="mr-2" 
                />
                <label htmlFor="ship-different" className="text-sm">Ship to a different address?</label>
              </div>

              {/* Order notes */}
              <div>
                <label className="block text-sm font-medium mb-1">Order notes (optional)</label>
                <textarea 
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  placeholder="Notes about your order, e.g. special notes for delivery." 
                  rows="4" 
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-md shadow p-6">
              <h2 className="text-lg font-bold mb-4">Your order</h2>
              
              {/* Product header */}
              <div className="flex justify-between pb-2 border-b">
                <span className="font-medium">Product</span>
                <span className="font-medium">Subtotal</span>
              </div>
              
              {/* Product list */}
              <div className="py-4 border-b">
                {cartItems.length > 0 ? (
                  cartItems.map(item => (
                    <div key={item.id} className="flex justify-between py-2">
                      <span>{item.title} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-between py-2">
                    <span>Marketside Fresh Organic Bananas, Bunch × 1</span>
                    <span>$0.89</span>
                  </div>
                )}
              </div>
              
              {/* Subtotal */}
              <div className="flex justify-between py-3 border-b">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {/* Shipping options */}
              <div className="py-3 border-b">
                <div className="flex justify-between mb-2">
                  <span>Flat rate: $15.00</span>
                  <div className="w-5 h-5 flex items-center justify-center border border-indigo-600 rounded-full">
                    <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Local pickup</span>
                  <div className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex justify-between py-3 mb-6">
                <span className="font-bold">Total</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              
              {/* Payment methods */}
              <div className="space-y-4 mb-6">
                {/* Direct bank transfer */}
                <div>
                  <div className="flex items-center mb-2">
                    <input 
                      type="radio" 
                      id="direct-bank" 
                      name="payment-method" 
                      checked={paymentMethod === 'direct_bank'} 
                      onChange={() => setPaymentMethod('direct_bank')}
                      className="mr-2"
                    />
                    <label htmlFor="direct-bank" className="font-medium">Direct Bank Transfer</label>
                  </div>
                  {paymentMethod === 'direct_bank' && (
                    <div className="pl-6 text-sm text-gray-600">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </div>
                  )}
                </div>
                
                {/* Check payments */}
                <div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="check-payment" 
                      name="payment-method" 
                      checked={paymentMethod === 'check'} 
                      onChange={() => setPaymentMethod('check')}
                      className="mr-2"
                    />
                    <label htmlFor="check-payment" className="font-medium">Check Payments</label>
                  </div>
                </div>
                
                {/* Cash on delivery */}
                <div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="cash-delivery" 
                      name="payment-method" 
                      checked={paymentMethod === 'cash'} 
                      onChange={() => setPaymentMethod('cash')}
                      className="mr-2"
                    />
                    <label htmlFor="cash-delivery" className="font-medium">Cash On Delivery</label>
                  </div>
                </div>
              </div>
              
              {/* Privacy notice */}
              <div className="text-sm text-gray-600 mb-4">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="text-indigo-600 hover:underline">privacy policy</a>.
              </div>
              
              {/* Terms acceptance */}
              <div className="flex items-start mb-6">
                <input 
                  type="checkbox" 
                  id="terms-agree" 
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleInputChange}
                  className={`mt-1 mr-2 ${formErrors.termsAccepted ? 'border-red-500' : ''}`} 
                />
                <label htmlFor="terms-agree" className="text-sm">
                  I have read and agree to the website <a href="#" className="text-indigo-600 hover:underline">terms and conditions</a> <span className="text-red-500">*</span>
                </label>
              </div>
              {formErrors.termsAccepted && <p className="text-red-500 text-xs mb-4 error-message">{formErrors.termsAccepted}</p>}
              
              {/* Place order button */}
              <button 
                type="submit"
                disabled={isProcessing}
                className={`w-full ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} text-white font-medium py-3 rounded transition duration-200 flex items-center justify-center`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Place order'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout; 