import { useParams } from '@tanstack/react-router';
import { properties } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function PropertyDetail() {
  const { id } = useParams({ from: '/inmueble/$id' });
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Inmueble no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-8 p-6 md:p-10">
        <div className="w-full md:w-1/2">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
          {/* Gallery could go here */}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {property.title}
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              <span className="font-bold">Dirección:</span> {property.location}
            </p>
            <p>
              <span className="font-bold">Precio:</span> {property.price}
            </p>
            <p>
              <span className="font-bold">Detalles:</span> {property.details}
            </p>
            <p>
              <span className="font-bold">Tipo:</span>{' '}
              {property.type === 'buy' ? 'Venta' : 'Renta'}
            </p>
            <p className="text-gray-600 mt-4">{property.description}</p>
          </div>

          <Button className="mt-8 bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full py-6 text-lg w-fit px-10">
            {property.type === 'buy' ? 'Comprar' : 'Rentar'}
          </Button>
        </div>
      </div>
    </div>
  );
}
