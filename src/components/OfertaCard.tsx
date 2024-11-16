import React from 'react';

interface OfertaCardProps {
  imagen: string;
  titulo: string;
  precioAntes: string;
  precioAhora: string;
  descripcion: string;
}

const OfertaCard: React.FC<OfertaCardProps> = ({
  imagen,
  titulo,
  precioAntes,
  precioAhora,
  descripcion,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img 
        src={imagen} 
        alt={titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
        <p className="text-gray-600 mb-4">{descripcion}</p>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 line-through">€{precioAntes}</span>
          <span className="text-2xl font-bold text-green-600">€{precioAhora}</span>
        </div>
      </div>
    </div>
  );
};

export default OfertaCard;