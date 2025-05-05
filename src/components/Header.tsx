
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-emerald-600">Emerald</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => 
              isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
            }
          >
            Shop
          </NavLink>
          <NavLink 
            to="/categories" 
            className={({ isActive }) => 
              isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
            }
          >
            Categories
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
            }
          >
            Contact
          </NavLink>
        </nav>
        
        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg md:hidden">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </NavLink>
              <NavLink 
                to="/categories" 
                className={({ isActive }) => 
                  isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "text-emerald-600 font-medium" : "text-gray-700 hover:text-emerald-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-emerald-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
