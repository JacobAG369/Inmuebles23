import { Link } from '@tanstack/react-router';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PropertyCard({ id, title, price, image }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-none h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-bold text-gray-800 line-clamp-1">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-gray-600 font-semibold">{price}</p>
      </CardContent>
      <CardFooter className="p-4">
        <Link to="/inmueble/$id" params={{ id: String(id) }} className="w-full">
          <Button className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full">
            Ver detalles
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
