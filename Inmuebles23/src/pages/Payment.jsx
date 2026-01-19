import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Payment() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = 'El nombre es obligatorio';
    if (!lastName.trim()) newErrors.lastName = 'El apellido es obligatorio';
    if (!email.trim()) newErrors.email = 'El email es obligatorio';
    if (!phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
    if (!cardNumber.trim())
      newErrors.cardNumber = 'El número de tarjeta es obligatorio';
    if (!expiry.trim())
      newErrors.expiry = 'La fecha de expiración es obligatoria';
    if (!cvv.trim()) newErrors.cvv = 'El CVV es obligatorio';
    if (!address.trim())
      newErrors.address = 'La dirección de envío es obligatoria';
    if (!acceptTerms)
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('');

    if (!validate()) return;

    setSuccessMessage(
      'Compra realizada con éxito. Pronto recibirás la confirmación en tu correo.',
    );
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6"
        onSubmit={handleSubmit}
        aria-label="Formulario de compra"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">
          Finalizar compra
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Ingresa tus datos para completar la compra de tu inmueble.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={
                errors.firstName ? 'firstName-error' : undefined
              }
            />
            {errors.firstName ? (
              <p id="firstName-error" className="text-sm text-red-600">
                {errors.firstName}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            />
            {errors.lastName ? (
              <p id="lastName-error" className="text-sm text-red-600">
                {errors.lastName}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="text-sm text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardNumber">Número de tarjeta</Label>
          <Input
            id="cardNumber"
            inputMode="numeric"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            aria-invalid={Boolean(errors.cardNumber)}
            aria-describedby={
              errors.cardNumber ? 'cardNumber-error' : undefined
            }
          />
          {errors.cardNumber ? (
            <p id="cardNumber-error" className="text-sm text-red-600">
              {errors.cardNumber}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Fecha de expiración (MM/AA)</Label>
            <Input
              id="expiry"
              placeholder="08/29"
              value={expiry}
              onChange={(event) => setExpiry(event.target.value)}
              aria-invalid={Boolean(errors.expiry)}
              aria-describedby={errors.expiry ? 'expiry-error' : undefined}
            />
            {errors.expiry ? (
              <p id="expiry-error" className="text-sm text-red-600">
                {errors.expiry}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="password"
              inputMode="numeric"
              value={cvv}
              onChange={(event) => setCvv(event.target.value)}
              aria-invalid={Boolean(errors.cvv)}
              aria-describedby={errors.cvv ? 'cvv-error' : undefined}
            />
            {errors.cvv ? (
              <p id="cvv-error" className="text-sm text-red-600">
                {errors.cvv}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Dirección de envío</Label>
          <Input
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? 'address-error' : undefined}
          />
          {errors.address ? (
            <p id="address-error" className="text-sm text-red-600">
              {errors.address}
            </p>
          ) : null}
        </div>

        <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            checked={acceptTerms}
            onChange={(event) => setAcceptTerms(event.target.checked)}
            className="mt-1 h-4 w-4"
            aria-invalid={Boolean(errors.acceptTerms)}
            aria-describedby={errors.acceptTerms ? 'terms-error' : undefined}
          />
          <Label htmlFor="terms" className="text-sm text-gray-700">
            Acepto los términos y condiciones de la compra.
          </Label>
        </div>
        {errors.acceptTerms ? (
          <p id="terms-error" className="text-sm text-red-600">
            {errors.acceptTerms}
          </p>
        ) : null}

        {successMessage ? (
          <p className="text-sm text-green-600 text-center">{successMessage}</p>
        ) : null}

        <Button
          type="submit"
          className="w-full bg-[#ff385c] hover:bg-[#e0314f] text-white rounded-full py-6 text-lg"
        >
          Comprar
        </Button>
      </form>
    </div>
  );
}
