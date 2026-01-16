import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from '@tanstack/react-router';
import { apiFetch } from '@/lib/api';
import { setToken } from '@/lib/auth';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await apiFetch('/register', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });
      setToken(data.access_token);
      navigate({ to: '/' });
    } catch (err) {
      setError(err?.message || 'No se pudo registrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Crear cuenta</h2>

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Nombre completo"
            required
            className="py-6"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            type="email"
            placeholder="Correo electrónico"
            required
            className="py-6"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            required
            className="py-6"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar contraseña"
            required
            className="py-6"
            value={passwordConfirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />

          {error ? (
            <p className="text-sm text-red-600 text-center">{error}</p>
          ) : null}

          <Button
            className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full py-6 text-lg"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Creando cuenta...' : 'Registrarme'}
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            ¿Ya tienes cuenta?{' '}
            <Link
              to="/login"
              className="text-[#ff385c] font-semibold hover:underline"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
