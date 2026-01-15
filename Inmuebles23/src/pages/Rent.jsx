import { properties } from '@/lib/data';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function Rent() {
  const rentProperties = properties.filter((p) => p.type === 'rent');

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Inmuebles en Renta</h2>
        <p className="text-gray-600">Encuentra la propiedad ideal para ti</p>
      </div>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {rentProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row min-h-[300px] border border-gray-100"
          >
            <div className="w-full md:w-5/12 relative h-64 md:h-auto">
              <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                Acabados de primera
              </span>
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 text-white text-2xl drop-shadow-md hover:scale-110 transition-transform">
                ♡
              </button>
            </div>
            <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {property.price}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-500 mb-4 flex items-center gap-1">
                  📍 {property.location}
                </p>
                <p className="text-gray-600 font-medium mb-4">
                  {property.details}
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <Link to="/pago" className="flex-1">
                  <Button className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full py-6 text-lg">
                    Rentar
                  </Button>
                </Link>
                <Link to="/contactanos" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full rounded-full py-6 text-lg border-gray-300"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
