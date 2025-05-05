
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="container py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your Space <br />
              <span className="text-emerald-600">With Elegance</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our curated collection of sustainable home decor and furniture that blends style, comfort, and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg">
                  Browse Categories
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-in hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Modern living room with stylish furniture" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-medium text-emerald-600">Summer Collection</p>
              <p className="text-sm text-gray-600">Up to 30% off</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 rounded-l-full transform translate-x-1/3 opacity-60 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-100 rounded-full transform -translate-x-1/2 translate-y-1/2 opacity-60"></div>
    </div>
  );
};

export default HeroBanner;
