import React from 'react';
import { Phone, Mail, Instagram, Twitter, MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Contacto</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de la Compañía */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-600 mb-6">
              El Ahorro es tu supermercado de confianza desde 1970. Nos dedicamos a ofrecer productos de la más alta calidad a precios competitivos, siempre pensando en el bienestar de nuestros clientes y la comunidad.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-500" />
                <span>contacto@elahorro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-500" />
                <span>Times Square, Manhattan, NY</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-yellow-500" />
                <span>Lun-Dom: 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
          
          {/* Redes Sociales */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Síguenos en Redes Sociales</h2>
            
            <div className="space-y-6">
              <a 
                href="https://instagram.com/instagram" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
              >
                <Instagram size={24} />
                <div>
                  <p className="font-semibold">Síguenos en Instagram</p>
                  <p className="text-sm">@instagram</p>
                </div>
              </a>
              
              <a 
                href="https://twitter.com/x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-black text-white hover:bg-gray-900 transition-colors"
              >
                <Twitter size={24} />
                <div>
                  <p className="font-semibold">Síguenos en X</p>
                  <p className="text-sm">@x</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4">¿Por qué seguirnos?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ofertas exclusivas para seguidores</li>
                <li>• Novedades y lanzamientos</li>
                <li>• Recetas y consejos</li>
                <li>• Eventos especiales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;