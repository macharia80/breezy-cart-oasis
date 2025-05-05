
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import CategoryList from '@/components/CategoryList';
import FeaturedProducts from '@/components/FeaturedProducts';

const Index = () => {
  return (
    <div>
      <HeroBanner />
      <CategoryList />
      <FeaturedProducts />
      
      {/* Newsletter Section */}
      <section className="py-12 bg-emerald-50">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest updates, promotions, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
