import React, { useState } from 'react';
import { ShoppingBasket, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <ShoppingBasket className="w-6 h-6 text-yellow-500" />
            <span className="font-bold text-xl">El Ahorro</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'}`}
            >
              Inicio
            </Link>
            <Link 
              to="/ofertas" 
              className={`transition-colors ${isActive('/ofertas') ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'}`}
            >
              Ofertas
            </Link>
            <Link 
              to="/productos" 
              className={`transition-colors ${isActive('/productos') ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'}`}
            >
              Productos
            </Link>
            <Link 
              to="/ubicacion" 
              className={`transition-colors ${isActive('/ubicacion') ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'}`}
            >
              Ubicación
            </Link>
            <Link 
              to="/contacto" 
              className={`transition-colors ${isActive('/contacto') ? 'text-yellow-500' : 'text-gray-700 hover:text-yellow-500'}`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/') 
                    ? 'text-yellow-500 bg-gray-50' 
                    : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/ofertas"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/ofertas') 
                    ? 'text-yellow-500 bg-gray-50' 
                    : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                }`}
              >
                Ofertas
              </Link>
              <Link
                to="/productos"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/productos') 
                    ? 'text-yellow-500 bg-gray-50' 
                    : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                }`}
              >
                Productos
              </Link>
              <Link
                to="/ubicacion"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/ubicacion') 
                    ? 'text-yellow-500 bg-gray-50' 
                    : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                }`}
              >
                Ubicación
              </Link>
              <Link
                to="/contacto"
                className={`block px-3 py-2 rounded-md ${
                  isActive('/contacto') 
                    ? 'text-yellow-500 bg-gray-50' 
                    : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-50'
                }`}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;