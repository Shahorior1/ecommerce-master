import React from 'react';
import { 
  UserGroupIcon, 
  HeartIcon, 
  LightBulbIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

// Team member images - replace with actual images
import founder from '../assets/413.png';
import teamMember1 from '../assets/420.png';
import teamMember2 from '../assets/424.png';
import teamMember3 from '../assets/432.png';

// About page image
import aboutImage from '../assets/banner.png';
import storeFront from '../assets/banner-18.jpg.png';

const teamMembers = [
  {
    id: 1,
    name: 'Jin Park',
    role: 'Founder & CEO',
    bio: 'Jin founded JinStore in 2015 with a vision to make quality groceries accessible to everyone.',
    image: founder
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Operations Manager',
    bio: 'Sarah oversees our supply chain and ensures we deliver the freshest products possible.',
    image: teamMember1
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Product Specialist',
    bio: 'Michael curates our product selection and finds the best items from around the world.',
    image: teamMember2
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Customer Experience',
    bio: 'Priya makes sure every customer interaction with JinStore is exceptional.',
    image: teamMember3
  }
];

const values = [
  {
    id: 1,
    title: 'Quality First',
    description: 'We never compromise on the quality of our products. Every item is carefully selected and quality-checked.',
    icon: <ShieldCheckIcon className="w-10 h-10 text-indigo-600" />
  },
  {
    id: 2,
    title: 'Customer Satisfaction',
    description: 'Our customers are at the heart of everything we do. We strive to exceed expectations with every order.',
    icon: <HeartIcon className="w-10 h-10 text-indigo-600" />
  },
  {
    id: 3,
    title: 'Innovation',
    description: 'We continuously innovate our processes and services to provide the best shopping experience possible.',
    icon: <LightBulbIcon className="w-10 h-10 text-indigo-600" />
  },
  {
    id: 4,
    title: 'Community',
    description: 'We believe in giving back to the communities we serve through sustainable practices and local partnerships.',
    icon: <UserGroupIcon className="w-10 h-10 text-indigo-600" />
  }
];

function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96 flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${aboutImage})` 
        }}
      >
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About JinStore</h1>
          <p className="text-xl max-w-2xl">We're on a mission to revolutionize the way people shop for groceries, making quality food accessible to everyone.</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-indigo-600 font-medium">Our Journey</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 text-gray-800">The JinStore Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, JinStore began as a small corner shop with a simple idea: make quality groceries accessible, affordable, and convenient. Our founder, Jin Park, recognized that busy professionals and families needed a better way to shop for essentials without compromising on quality.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a neighborhood store quickly grew into a beloved community fixture. In 2018, we launched our online platform to reach more customers, and by 2020, we expanded our delivery services nationwide.
            </p>
            <p className="text-gray-600">
              Today, JinStore serves thousands of customers daily, offering everything from fresh produce and premium meats to specialty international foods and household essentials. Despite our growth, we remain committed to our founding principles: quality, convenience, and exceptional service.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={storeFront} 
              alt="JinStore location" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">What We Stand For</span>
            <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from selecting products to serving our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <div key={value.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium">The People Behind JinStore</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team works tirelessly to bring you the best shopping experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Journey</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team and customers to be part of our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#careers" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition duration-300">
              Careers at JinStore
            </a>
            <a href="#contact" className="bg-indigo-500 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-400 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 