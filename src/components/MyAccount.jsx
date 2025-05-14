import React, { useState } from 'react';
import { UserIcon, ShoppingBagIcon, HeartIcon, CogIcon } from '@heroicons/react/24/outline';

function MyAccount() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 15, 2023',
    address: '123 Main Street, Anytown, ST 12345',
    phone: '(555) 123-4567'
  };

  // Mock orders data
  const orders = [
    { id: 'ORD-1234', date: 'May 10, 2023', total: 78.95, status: 'Delivered' },
    { id: 'ORD-5678', date: 'April 22, 2023', total: 46.20, status: 'Delivered' },
    { id: 'ORD-9012', date: 'March 15, 2023', total: 125.30, status: 'Delivered' }
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar navigation */}
          <div className="bg-white rounded-lg shadow-md p-4 h-fit">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center p-3 rounded-md ${activeTab === 'dashboard' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
              >
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Dashboard</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('orders')}
                className={`flex items-center p-3 rounded-md ${activeTab === 'orders' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
              >
                <ShoppingBagIcon className="h-5 w-5 mr-2" />
                <span>Orders</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('wishlist')}
                className={`flex items-center p-3 rounded-md ${activeTab === 'wishlist' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
              >
                <HeartIcon className="h-5 w-5 mr-2" />
                <span>Wishlist</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('settings')}
                className={`flex items-center p-3 rounded-md ${activeTab === 'settings' ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-100'}`}
              >
                <CogIcon className="h-5 w-5 mr-2" />
                <span>Account Settings</span>
              </button>
              
              <button className="mt-6 p-3 bg-red-100 text-red-700 rounded-md hover:bg-red-200">
                Sign Out
              </button>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-gray-700">
                    Hello <span className="font-medium">{user.name}</span>, welcome back to your account dashboard.
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Account Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="font-medium">{user.joinDate}</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Orders</h3>
                  {orders.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Order ID</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Total</th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.slice(0, 3).map(order => (
                            <tr key={order.id} className="border-b border-gray-200">
                              <td className="px-4 py-3 text-sm font-medium text-purple-700">{order.id}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">{order.date}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">${order.total.toFixed(2)}</td>
                              <td className="px-4 py-3 text-sm">
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                  {order.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500">You haven't placed any orders yet.</p>
                  )}
                </div>
              </div>
            )}
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Orders</h2>
                {orders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Order ID</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Total</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map(order => (
                          <tr key={order.id} className="border-b border-gray-200">
                            <td className="px-4 py-3 text-sm font-medium text-purple-700">{order.id}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{order.date}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">${order.total.toFixed(2)}</td>
                            <td className="px-4 py-3 text-sm">
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                {order.status}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <button className="text-purple-700 hover:text-purple-900">View Details</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500">You haven't placed any orders yet.</p>
                )}
              </div>
            )}
            
            {/* Wishlist Tab */}
            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Wishlist</h2>
                <p className="text-gray-500">Your wishlist is empty. Browse our products and add items to your wishlist.</p>
                <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
                  Browse Products
                </button>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Settings</h2>
                
                <form className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue={user.phone}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Address Information</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        defaultValue={user.address}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Password Change</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div></div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount; 