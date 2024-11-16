import React from 'react';
import { Tag } from 'lucide-react';

interface Oferta {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  precioAntes: string;
  precioAhora: string;
  descuento: string;
  validoHasta: string;
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
    descripcion: "Salmón noruego de alta calidad",
    precioAntes: "15.99",
    precioAhora: "11.99",
    descuento: "25%",
    validoHasta: "31/03/2024"
  },
  {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80",
    titulo: "Productos Lácteos",
    descripcion: "Yogures, leche y quesos seleccionados",
    precioAntes: "8.99",
    precioAhora: "6.99",
    descuento: "22%",
    validoHasta: "31/03/2024"
  },
  {
    id: 5,
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
    titulo: "Verduras Frescas",
    descripcion: "Selección de verduras de temporada",
    precioAntes: "7.99",
    precioAhora: "5.99",
    descuento: "25%",
    validoHasta: "31/03/2024"
  },
  {
    id: 6,
    imagen: "https://images.unsplash.com/photo-1553787499-6f5f30700b9b?auto=format&fit=crop&q=80",
    titulo: "Pasta Premium",
    descripcion: "Variedad de pastas italianas",
    precioAntes: "4.99",
    precioAhora: "2.99",
    descuento: "40%",
    validoHasta: "31/03/2024"
  }
];

const OfertasDetalladas = () => {
  return (
    <div className="py-16 px-4 bg-gray-50" id="ofertas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Tag className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold">Ofertas Especiales</h2>
          </div>
          <p className="text-gray-600">¡No te pierdas nuestras increíbles ofertas de la semana!</p>
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
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
                  -{oferta.descuento}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{oferta.titulo}</h3>
                <p className="text-gray-600 mb-4">{oferta.descripcion}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through">€{oferta.precioAntes}</span>
                    <span className="text-2xl font-bold text-green-600">€{oferta.precioAhora}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Válido hasta: {oferta.validoHasta}
                  </div>
                </div>
                
                <button className="w-full bg-yellow-500 text-gray-900 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfertasDetalladas;