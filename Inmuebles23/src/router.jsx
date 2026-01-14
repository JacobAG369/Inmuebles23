import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

// Define routes
const rootRoute = createRootRoute({
  component: App,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create route tree
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

// Create router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

export default router