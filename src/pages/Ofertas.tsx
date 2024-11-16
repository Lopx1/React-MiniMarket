import React from 'react';
import { Tag } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Oferta {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  precioAntes?: string;
  precioAhora?: string;
  descuento?: string;
  validoHasta?: string;
}

const ofertas: Oferta[] = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80",
    titulo: "Pack Frutas Variadas",
    descripcion: "Manzanas, peras y plátanos de primera calidad",
    precioAntes: "5.99",
    precioAhora: "3.99",
    descuento: "33%",
    validoHasta: "31/03/2024"
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80",
    titulo: "Carne de Res Premium",
    descripcion: "Cortes selectos de primera calidad",
    precioAntes: "12.99",
    precioAhora: "9.99",
    descuento: "23%",
    validoHasta: "31/03/2024"
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80",
    titulo: "Salmón Fresco",
    descripcion: "Salmón noruego de alta calidad"
  }
];

const Ofertas = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Tag className="w-8 h-8 text-yellow-500" />
              <h1 className="text-4xl font-bold">Ofertas Especiales</h1>
            </div>
            <p className="text-gray-600 text-lg">¡No te pierdas nuestras increíbles ofertas de la semana!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ofertas.map((oferta) => (
              <div key={oferta.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={oferta.imagen} 
                    alt={oferta.titulo}
                    className="w-full h-48 object-cover"
                  />
                  {oferta.descuento && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                      -{oferta.descuento}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{oferta.titulo}</h3>
                  <p className="text-gray-600 mb-4">{oferta.descripcion}</p>
                  
                  {oferta.precioAntes && oferta.precioAhora && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 line-through">€{oferta.precioAntes}</span>
                        <span className="text-2xl font-bold text-green-600">€{oferta.precioAhora}</span>
                      </div>
                      {oferta.validoHasta && (
                        <div className="text-sm text-gray-500">
                          Válido hasta: {oferta.validoHasta}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ofertas;