import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Ofertas from './pages/Ofertas.tsx';
import Productos from './pages/Productos.tsx';
import Ubicacion from './pages/Ubicacion.tsx';
import Contacto from './pages/Contacto.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Router basename="/React-MiniMarket">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  </StrictMode>
);