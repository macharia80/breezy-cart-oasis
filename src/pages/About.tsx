
import React from 'react';

const About = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About Emerald</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Emerald is a premium home decor and furniture retailer dedicated to bringing style, quality, 
          and sustainability to your living spaces.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Our Story</h2>
        <p className="text-gray-700 mb-6">
          Founded in 2023, Emerald began with a simple vision: to create beautiful, functional, and 
          sustainable home furnishings that inspire and delight. What started as a small boutique has 
          grown into a beloved brand known for its commitment to quality craftsmanship and timeless design.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          We believe that everyone deserves a beautiful home that reflects their unique style and values. 
          Our mission is to provide thoughtfully designed products that enhance your living spaces while 
          respecting our planet and the people who make our products.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Sustainability Commitment</h2>
        <p className="text-gray-700 mb-6">
          At Emerald, sustainability isn't just a trend—it's a core value that guides every decision we make. 
          From sourcing responsibly harvested wood to using eco-friendly packaging, we're committed to 
          reducing our environmental footprint at every step of the journey.
        </p>
      </div>
    </div>
  );
};

export default About;
