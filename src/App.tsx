import React from 'react';
import { ShoppingBasket, Phone, MapPin, Clock, ChevronRight, Percent, Apple, Beef, Fish } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import OfertaCard from './components/OfertaCard';

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
          alt="Supermercado"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Supermercado El Ahorro</h1>
            <p className="text-xl mb-6">Los mejores precios para tu familia</p>
            <button 
              onClick={() => navigate('/ofertas')}
              className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2"
            >
              Ver Ofertas <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Categorías */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Apple className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Frutas y Verduras</h3>
            <p className="text-gray-600">Productos frescos todos los días</p>
          </div>
          <div className="bg-red-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Beef className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-semibold mb-2">Carnicería</h3>
            <p className="text-gray-600">La mejor calidad en carnes</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
            <Fish className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Pescadería</h3>
            <p className="text-gray-600">Pescado fresco del día</p>
          </div>
        </div>
      </div>

      {/* Ofertas Destacadas */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-12">
            <Percent className="text-yellow-500 w-8 h-8" />
            <h2 className="text-3xl font-bold text-center">Ofertas Destacadas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OfertaCard 
              imagen="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80"
              titulo="Frutas Frescas"
              precioAntes="5.99"
              precioAhora="3.99"
              descripcion="Manzanas, peras y plátanos"
            />
            <OfertaCard 
              imagen="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80"
              titulo="Carne de Res"
              precioAntes="12.99"
              precioAhora="9.99"
              descripcion="Cortes selectos por kilo"
            />
            <OfertaCard 
              imagen="https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80"
              titulo="Pescado Fresco"
              precioAntes="15.99"
              precioAhora="11.99"
              descripcion="Salmón fresco del día"
            />
          </div>
        </div>
      </div>

      {/* Información */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Horario</h3>
              <p className="text-gray-600">Lunes a Domingo: 8:00 - 22:00</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-10 h-10 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Contacto</h3>
              <p className="text-gray-600">+34 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-10 h-10 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Ubicación</h3>
              <p className="text-gray-600">Calle Principal 123, Madrid</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShoppingBasket className="w-6 h-6" />
            <span className="font-semibold">El Ahorro</span>
          </div>
          <p className="text-gray-400">© 2024 Supermercado El Ahorro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;