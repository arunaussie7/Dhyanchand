import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  useLocation,
  Link,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/use-reveal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <p className="mt-3 text-muted-foreground">This page doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please refresh the page.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gowda Farmer Ventures — From Farmland to Global Markets" },
      { name: "description", content: "Professional agricultural management and global export solutions for plantation owners, landowners, and producers." },
      { property: "og:title", content: "Gowda Farmer Ventures — From Farmland to Global Markets" },
      { property: "og:description", content: "Professional agricultural management and global export solutions for plantation owners, landowners, and producers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gowda Farmer Ventures — From Farmland to Global Markets" },
      { name: "twitter:description", content: "Professional agricultural management and global export solutions for plantation owners, landowners, and producers." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ba5b82a3-b1f7-4019-abb1-86a85526782a/id-preview-ac7b654b--85db6614-4189-4d67-9f7e-b25a057b30e4.lovable.app-1778946431157.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ba5b82a3-b1f7-4019-abb1-86a85526782a/id-preview-ac7b654b--85db6614-4189-4d67-9f7e-b25a057b30e4.lovable.app-1778946431157.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Shell />
    </QueryClientProvider>
  );
}

function Shell() {
  useReveal();
  const { pathname } = useLocation();
  const isTransitioning = useRouterState({
    select: (state) => state.isTransitioning || state.isLoading,
  });

  return (
    <div className="route-shell min-h-screen">
      <div className="fixed inset-x-0 top-0 z-[70] h-px bg-transparent">
        <div
          className={`nav-progress h-full bg-gradient-to-r from-gold via-accent to-primary ${
            isTransitioning ? "animate-route-line opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
      </div>
      <Navbar />
      <main className={`pt-20 ${isTransitioning ? "transition-opacity duration-300 opacity-[0.985]" : ""}`}>
        <Suspense fallback={<RouteLoadingFallback />}>
          <div key={pathname} className="route-transition">
            <Outlet />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function RouteLoadingFallback() {
  return (
    <div className="min-h-[70vh] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="premium-card animate-pulse rounded-[2rem] p-8 sm:p-12">
          <div className="h-4 w-32 rounded-full bg-secondary" />
          <div className="mt-6 h-14 max-w-2xl rounded-2xl bg-secondary" />
          <div className="mt-4 h-5 max-w-3xl rounded-full bg-secondary/80" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-64 rounded-[1.5rem] bg-secondary/85" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
