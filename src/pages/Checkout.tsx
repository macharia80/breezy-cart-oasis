
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { products } from '@/lib/data';

const Checkout = () => {
  const [step, setStep] = useState(1);
  
  // For demo purposes, let's start with some items in cart
  const cartItems = [
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
  ];
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
  const total = subtotal + tax + shipping;

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link to="/cart" className="text-emerald-600 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to cart
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className={`flex items-center ${step >= 1 ? 'text-emerald-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300'}`}>
              1
            </div>
            <span className="ml-2 font-medium">Shipping</span>
          </div>
          <div className={`w-12 h-1 mx-2 ${step >= 2 ? 'bg-emerald-600' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-emerald-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300'}`}>
              2
            </div>
            <span className="ml-2 font-medium">Payment</span>
          </div>
          <div className={`w-12 h-1 mx-2 ${step >= 3 ? 'bg-emerald-600' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-emerald-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-emerald-600 bg-emerald-50' : 'border-gray-300'}`}>
              3
            </div>
            <span className="ml-2 font-medium">Confirm</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Steps */}
        <div className="lg:col-span-2">
          {step === 1 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium mb-6">Shipping Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" className="mt-1" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" className="mt-1" placeholder="Doe" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" className="mt-1" type="email" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" className="mt-1" placeholder="123 Main St" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                  <Input id="address2" className="mt-1" placeholder="Apt 4B" />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" className="mt-1" placeholder="San Francisco" />
                </div>
                <div>
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" className="mt-1" placeholder="California" />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP / Postal Code</Label>
                  <Input id="zip" className="mt-1" placeholder="94103" />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" className="mt-1" placeholder="United States" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" className="mt-1" type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>
              
              <div className="flex items-center mt-6">
                <Checkbox id="sameAsBilling" />
                <label 
                  htmlFor="sameAsBilling"
                  className="ml-2 text-sm text-gray-600"
                >
                  Billing address is the same as shipping address
                </label>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => setStep(2)}
                >
                  Continue to Payment
                </Button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium mb-6">Payment Method</h2>
              
              <RadioGroup defaultValue="card" className="mb-6">
                <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-4 mb-4">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex-grow">Credit / Debit Card</Label>
                  <div className="flex space-x-2">
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 border border-gray-200 rounded-md p-4 mb-4">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
              </RadioGroup>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" className="mt-1" placeholder="1234 5678 9012 3456" />
                </div>
                <div>
                  <Label htmlFor="expDate">Expiration Date</Label>
                  <Input id="expDate" className="mt-1" placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" className="mt-1" placeholder="123" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="nameOnCard">Name on Card</Label>
                  <Input id="nameOnCard" className="mt-1" placeholder="John Doe" />
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  Back to Shipping
                </Button>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => setStep(3)}
                >
                  Review Order
                </Button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium mb-6">Review Your Order</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Shipping Address</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p>John Doe</p>
                  <p>123 Main St</p>
                  <p>San Francisco, CA 94103</p>
                  <p>United States</p>
                  <p>john@example.com</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Payment Method</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p>Credit Card ending in 3456</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Order Items</h3>
                <div className="bg-gray-50 p-4 rounded-md divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="py-3 flex justify-between">
                      <div className="flex">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-16 w-16 rounded-md object-cover"
                        />
                        <div className="ml-3">
                          <p className="font-medium">{item.product.name}</p>
                          <p className="text-gray-600">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => setStep(2)}
                >
                  Back to Payment
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Place Order
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            {/* Order Items */}
            <div className="max-h-64 overflow-y-auto mb-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex py-2 border-b border-gray-200 last:border-0">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
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
            
            {/* Promo Code */}
            <div className="mt-6">
              <Label htmlFor="promo" className="font-medium">Promo Code</Label>
              <div className="flex mt-1">
                <Input id="promo" className="mr-2" placeholder="Enter code" />
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
