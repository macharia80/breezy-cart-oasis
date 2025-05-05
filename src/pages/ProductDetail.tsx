
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/lib/data';
import { Star, ShoppingCart, Heart, Share2, TruckIcon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find current product
  const product = products.find(p => p.id === Number(id));
  
  // Get related products (same category, exclude current)
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products" className="text-emerald-600 hover:underline flex items-center justify-center">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to all products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link to="/products" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to all products
        </Link>
      </div>
      
      {/* Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-2">
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">({product.reviews} reviews)</span>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-md"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 h-10 border-t border-b border-gray-300 text-center"
              />
              <button 
                className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-6">
              <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Heart className="h-5 w-5 mr-2" /> Save to Wishlist
            </Button>
          </div>
          
          {/* Shipping Info */}
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <TruckIcon className="h-4 w-4 mr-2" />
            <span>Free shipping on orders over $50</span>
          </div>
          
          {/* Social Share */}
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-4">Share:</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full border-b border-gray-200 mb-6">
            <TabsTrigger value="description" className="text-base">Description</TabsTrigger>
            <TabsTrigger value="specifications" className="text-base">Specifications</TabsTrigger>
            <TabsTrigger value="reviews" className="text-base">Reviews ({product.reviews})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-gray-600">
            <p className="mb-4">{product.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, 
              nisl nunc euismod nisl, eu tincidunt nisl nisl eu tincidunt consectetur. Sed euismod, urna eu tincidunt 
              consectetur, nisl nunc euismod nisl, eu tincidunt nisl nisl eu tincidunt consectetur.
            </p>
          </TabsContent>
          <TabsContent value="specifications">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium">Material</span>: Premium quality
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium">Dimensions</span>: 20" x 30" x 15"
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium">Weight</span>: 5 lbs
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium">Color</span>: As shown
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium">Care Instructions</span>: Wipe clean with damp cloth
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-medium">Origin</span>: Imported
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 border-b border-gray-200 pb-6">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium">JD</span>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-medium text-gray-900">John Doe</h4>
                    <span className="mx-2">•</span>
                    <span className="text-gray-500 text-sm">2 days ago</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Great product! Exactly as described and arrived quickly. Would definitely purchase again.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 border-b border-gray-200 pb-6">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-medium">JS</span>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h4 className="font-medium text-gray-900">Jane Smith</h4>
                    <span className="mx-2">•</span>
                    <span className="text-gray-500 text-sm">1 week ago</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Very nice quality and looks great in my living room. I'm very happy with this purchase.
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">Load More Reviews</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
