
import React, { useState } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, ArrowUpDown, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Toggle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="text-gray-600">Browse our collection of high-quality products</p>
      </div>
      
      {/* Mobile Filters Button */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters {showFilters ? 'Hide' : 'Show'}
          <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-1/4`}>
          <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-24">
            <h2 className="text-lg font-medium mb-4">Filters</h2>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={[0, 500]}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
              />
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">${priceRange[0]}</span>
                <span className="text-gray-600">${priceRange[1]}</span>
              </div>
            </div>
            
            {/* Categories Filter */}
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox 
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <label 
                      htmlFor={`category-${category}`}
                      className="ml-2 text-sm text-gray-600 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Controls */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{sortedProducts.length} products</p>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md p-2 text-sm"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
              <ArrowUpDown className="h-4 w-4 text-gray-400 ml-2" />
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No products match your filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange([0, 500]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
