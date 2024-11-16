import React, { useState, useEffect } from 'react';
import { Grid, List, Search } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio?: number;
  categoria: string;
  imagen: string;
  stock: number;
}

const Productos = () => {
  const [vistaGrilla, setVistaGrilla] = useState(false);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas');

  useEffect(() => {
    // Aquí conectarías con tu base de datos
    // Ejemplo de estructura para la consulta:
    // const fetchProductos = async () => {
    //   const response = await fetch('/api/productos');
    //   const data = await response.json();
    //   setProductos(data);
    // };
    // fetchProductos();

    // Por ahora usamos datos de ejemplo
    setProductos([
      {
        id: 1,
        nombre: "Manzanas Rojas",
        descripcion: "Manzanas frescas de temporada",
        precio: 2.99,
        categoria: "frutas",
        imagen: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
        stock: 100
      },
      // Añade más productos aquí
    ]);
  }, []);

  const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriaSeleccionada === 'todas' || producto.categoria === categoriaSeleccionada)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Nuestros Productos</h1>
          
          <div className="flex items-center gap-4">
            {/* Buscador */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            {/* Selector de vista */}
            <div className="flex gap-2 bg-white rounded-lg p-1 border">
              <button
                onClick={() => setVistaGrilla(false)}
                className={`p-2 rounded ${!vistaGrilla ? 'bg-yellow-500 text-white' : 'text-gray-600'}`}
              >
                <List size={20} />
              </button>
              <button
                onClick={() => setVistaGrilla(true)}
                className={`p-2 rounded ${vistaGrilla ? 'bg-yellow-500 text-white' : 'text-gray-600'}`}
              >
                <Grid size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Lista de productos */}
        <div className={vistaGrilla ? "grid grid-cols-1 md:grid-cols-3 gap-6" : "space-y-4"}>
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                vistaGrilla ? '' : 'flex'
              }`}
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className={`object-cover ${
                  vistaGrilla ? 'w-full h-48' : 'w-48 h-48'
                }`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                {producto.precio && (
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      €{producto.precio.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;