import HeroCarousel from '@/components/home/HeroCarousel';
import PropertyCard from '@/components/property/PropertyCard';
import { properties } from '@/lib/data';

export default function Home() {
  const featuredProperties = properties.filter((p) => p.type === 'featured');

  return (
    <div className="flex flex-col gap-8 pb-10">
      <HeroCarousel />

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Encuentra tu espacio ideal</h2>
        <p className="text-gray-600 mb-8">
          Compra o renta inmuebles de forma segura
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              price={property.price}
              image={property.images[0]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
