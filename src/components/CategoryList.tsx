
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/lib/data';

const CategoryList = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection by category and find exactly what you're looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id} 
              className="group relative rounded-lg overflow-hidden"
            >
              <div className="aspect-square">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold px-4 py-2 border-2 border-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
