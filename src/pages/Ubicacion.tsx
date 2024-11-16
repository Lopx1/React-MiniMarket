import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Navbar from '../components/Navbar';

const Ubicacion = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Reemplaza con tu API key
      version: "weekly"
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const timesSquare = { lat: 40.7580, lng: -73.9855 };
        
        const map = new google.maps.Map(mapRef.current, {
          center: timesSquare,
          zoom: 17,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        new google.maps.Marker({
          position: timesSquare,
          map: map,
          title: "El Ahorro Supermercado"
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Nuestra Ubicación</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* <div ref={mapRef} className="w-full h-[500px]"></div> */}
          <div className="h-[400px] rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1636.2508313093706!2d-56.16876262129221!3d-34.89385814524197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDUzJzM3LjkiUyA1NsKwMTAnMDMuNyJX!5e0!3m2!1ses!2suy!4v1731731493957!5m2!1ses!2suy" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">

            </iframe>
            </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">El Ahorro Supermercado</h2>
            <div className="space-y-2 text-gray-600">
              <p>Times Square</p>
              <p>Manhattan, New York, NY 10036</p>
              <p>Estados Unidos</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Horario de Atención:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Lunes a Viernes: 8:00 AM - 10:00 PM</li>
                <li>Sábados: 9:00 AM - 9:00 PM</li>
                <li>Domingos: 10:00 AM - 8:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;