
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

const FeaturedProducts = () => {
  // Get first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our handpicked selection of trending and popular items that our customers love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
