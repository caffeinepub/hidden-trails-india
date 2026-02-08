import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import MobileBottomNav from './components/MobileBottomNav';
import RouteTransition from './components/RouteTransition';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import BudgetPage from './pages/BudgetPage';
import CommunityPage from './pages/CommunityPage';
import ResourcesPage from './pages/ResourcesPage';
import TravelTipsPage from './pages/TravelTipsPage';
import BudgetPlanningPage from './pages/BudgetPlanningPage';
import SafetyGuidePage from './pages/SafetyGuidePage';

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <RouteTransition>
          <Outlet />
        </RouteTransition>
      </main>
      <SiteFooter />
      <MobileBottomNav />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const destinationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/destinations',
  component: DestinationsPage,
});

const destinationDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/destinations/$slug',
  component: DestinationDetailPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: BlogPostPage,
});

const budgetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/budget',
  component: BudgetPage,
});

const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/community',
  component: CommunityPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesPage,
});

const travelTipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/travel-tips',
  component: TravelTipsPage,
});

const budgetPlanningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/budget-planning',
  component: BudgetPlanningPage,
});

const safetyGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/safety-guide',
  component: SafetyGuidePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  destinationsRoute,
  destinationDetailRoute,
  blogRoute,
  blogPostRoute,
  budgetRoute,
  communityRoute,
  resourcesRoute,
  travelTipsRoute,
  budgetPlanningRoute,
  safetyGuideRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
