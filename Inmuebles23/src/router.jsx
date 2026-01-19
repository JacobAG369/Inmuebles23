import {
  createRouter,
  createRootRoute,
  createRoute,
  redirect,
} from '@tanstack/react-router';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import PropertyDetail from './pages/PropertyDetail';
import Payment from './pages/Payment';
import { hasToken } from './lib/auth';

// Define root route
const rootRoute = createRootRoute({
  component: Layout,
});

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    if (!hasToken()) {
      throw redirect({ to: '/login' });
    }
  },
  component: Home,
});

const buyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/comprar',
  beforeLoad: () => {
    if (!hasToken()) {
      throw redirect({ to: '/login' });
    }
  },
  component: Buy,
});

const rentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rentar',
  beforeLoad: () => {
    if (!hasToken()) {
      throw redirect({ to: '/login' });
    }
  },
  component: Rent,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contactanos',
  beforeLoad: () => {
    if (!hasToken()) {
      throw redirect({ to: '/login' });
    }
  },
  component: Contact,
});

const paymentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pago',
  beforeLoad: () => {
    if (!hasToken()) {
      throw redirect({ to: '/login' });
    }
  },
  component: Payment,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  beforeLoad: () => {
    if (hasToken()) {
      throw redirect({ to: '/' });
    }
  },
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/registro',
  beforeLoad: () => {
    if (hasToken()) {
      throw redirect({ to: '/' });
    }
  },
  component: Register,
});

const propertyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/inmueble/$id',
  beforeLoad: () => {
    if (!hasToken()) {
      throw redirect({ to: '/login' });
    }
  },
  component: PropertyDetail,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-gray-600 mb-6">
        La página que buscas no existe o ha sido movida.
      </p>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[#ff385c] px-8 py-3 text-white text-lg font-semibold hover:bg-[#e0314f] transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  ),
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  buyRoute,
  rentRoute,
  contactRoute,
  loginRoute,
  registerRoute,
  propertyDetailRoute,
  paymentRoute,
  notFoundRoute,
]);

// Create router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

export default router;
