
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/lib/data';

const CategoriesPage = () => {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Categories</h1>
      <p className="text-gray-600 mb-8">Browse our collection by category and find exactly what you're looking for.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link 
            to={`/category/${category.id}`} 
            key={category.id} 
            className="group block"
          >
            <div className="relative rounded-lg overflow-hidden aspect-square mb-4">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold px-4 py-2 border-2 border-white">
                  {category.name}
                </h3>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
            <p className="text-gray-600">View all {category.name.toLowerCase()} products</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
