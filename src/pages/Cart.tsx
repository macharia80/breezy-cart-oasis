
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';

interface CartItem {
  product: typeof products[0];
  quantity: number;
}

const Cart = () => {
  // For demo purposes, let's start with some items in cart
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
  ]);
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;
  
  // Update quantity
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item
  const removeItem = (productId: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Cart Header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200">
              <div className="col-span-6">
                <span className="font-medium">Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Price</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium">Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-medium">Total</span>
              </div>
            </div>
            
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.product.id} className="p-4 sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center flex flex-wrap">
                  {/* Product */}
                  <div className="sm:col-span-6 flex mb-4 sm:mb-0">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-col">
                      <h3 className="text-base font-medium text-gray-900">
                        <Link to={`/product/${item.product.id}`} className="hover:text-emerald-600">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                      <button
                        type="button"
                        className="text-sm text-red-500 hover:text-red-700 flex items-center mt-2 sm:hidden"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="sm:col-span-2 text-center mb-4 sm:mb-0">
                    <span className="text-gray-900">${item.product.price.toFixed(2)}</span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="sm:col-span-2 flex justify-center mb-4 sm:mb-0">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center text-gray-600"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          if (!isNaN(val)) {
                            updateQuantity(item.product.id, val);
                          }
                        }}
                        className="w-10 h-8 text-center border-x border-gray-300"
                      />
                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center text-gray-600"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="sm:col-span-2 text-right">
                    <span className="text-gray-900 font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-red-500 ml-3 hidden sm:inline-flex"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Continue Shopping */}
          <div className="flex justify-between mt-6">
            <Link to="/products">
              <Button variant="outline">Continue Shopping</Button>
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white py-6">
                Checkout <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-xs text-gray-500 text-center">We accept:</p>
              <div className="flex justify-center space-x-2 mt-2">
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                <div className="h-6 w-10 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
