import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPinHouse, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Contacto</h2>
        <p className="text-gray-600">
          Estamos para ayudarte. Escríbenos o visítanos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-6">Envíanos un mensaje</h3>
          <form className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" placeholder="Tu nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="33 0000 0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                className="h-32"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full py-6 text-lg mt-4"
            >
              Enviar mensaje
            </Button>
          </form>
        </div>

        {/* Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg h-fit">
          <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
          <div className="space-y-4 text-gray-600 mb-6">
            <p className="flex items-center">
              <MapPinHouse className="mr-2" />
              Carretera Santa Cruz a San Isidro km. 4.5
              <br />
              Santa Cruz de las Flores
              <br />
              Tlajomulco de Zúñiga, Jal. México
            </p>
            <p className="flex items-center">
              <Phone className="mr-2" />
              +52 (33) 1598-8000 Ext. 1082
            </p>
            <p className="flex items-center">
              <Mail className="mr-2" />
              Info@utzmg.edu.mx
            </p>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Carretera%20Santa%20Cruz%20a%20San%20Isidro%20km%204.5%20Santa%20Cruz%20de%20las%20Flores%20Tlajomulco%20de%20Z%C3%BA%C3%B1iga%20Jalisco&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
