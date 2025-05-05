
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowLeft } from 'lucide-react';

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the category
  const categoryId = parseInt(id || '0');
  const category = categories.find(cat => cat.id === categoryId);
  
  // Filter products by category
  const categoryProducts = products.filter(
    product => category && product.category === category.name
  );

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link to="/categories" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" /> All Categories
        </Link>
      </div>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{category?.name || 'Category Not Found'}</h1>
        <p className="text-gray-600">Browse our collection of {category?.name.toLowerCase() || ''} products</p>
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
