import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@tanstack/react-router';

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Correo electrónico"
            required
            className="py-6"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            required
            className="py-6"
          />

          <Button className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full py-6 text-lg">
            Entrar
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            ¿No tienes cuenta?{' '}
            <Link
              to="/"
              className="text-[#ff385c] font-semibold hover:underline"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
