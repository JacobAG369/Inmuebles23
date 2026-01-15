import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );

  const slides = [
    {
      img: '/imagenes/baner/inmueble1.jpg',
      title: 'Encuentra tu nuevo hogar',
      desc: 'Compra y renta de inmuebles seguros',
    },
    {
      img: '/imagenes/baner/inmueble2.jpg',
      title: 'Inmuebles verificados',
      desc: 'Confianza en cada operación',
    },
    {
      img: '/imagenes/baner/inmueble3.jpg',
      title: 'Tu espacio ideal',
      desc: 'Vive como quieres',
    },
    {
      img: '/imagenes/baner/inmueble4.jpg',
      title: 'Más opciones para ti',
      desc: 'Compra o renta fácil',
    },
  ];

  return (
    <div className="w-full relative group">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-[300px] md:h-[500px]"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[300px] md:h-[500px] ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full w-full pl-0">
              <div className="h-full w-full relative">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-[10%] md:bottom-[30%] left-[5%] md:left-[8%] text-white bg-black/45 p-4 md:p-8 rounded-xl max-w-[90%] md:max-w-lg">
                  <h2 className="text-xl md:text-4xl font-bold mb-1 md:mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-xl">{slide.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
