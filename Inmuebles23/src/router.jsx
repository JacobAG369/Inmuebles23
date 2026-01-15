import {
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Contact from './pages/Contact';
import Login from './pages/Login';
import PropertyDetail from './pages/PropertyDetail';

// Define root route
const rootRoute = createRootRoute({
  component: Layout,
});

// Define routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const buyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/comprar',
  component: Buy,
});

const rentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/rentar',
  component: Rent,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contactanos',
  component: Contact,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const propertyDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/inmueble/$id',
  component: PropertyDetail,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  buyRoute,
  rentRoute,
  contactRoute,
  loginRoute,
  propertyDetailRoute,
]);

// Create router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

export default router;
