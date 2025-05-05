
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ImageOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/data';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden border border-gray-200 h-full flex flex-col">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden group">
        <AspectRatio ratio={1 / 1} className="bg-gray-100">
          {!imageError ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <ImageOff className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </AspectRatio>
        <div className="absolute top-2 right-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        {/* Price and Add to Cart */}
        <div className="mt-auto flex items-center justify-between">
          <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
