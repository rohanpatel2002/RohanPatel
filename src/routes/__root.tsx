import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Lenis from "lenis";

import appCss from "../styles.css?url";
import { Loader } from "@/components/Loader";
import { PageTransition } from "@/components/Motion";
import { jsonLdScript, pageSeo, personJsonLd } from "@/lib/seo";

const rootSeo = pageSeo({
  title: "Rohan Patel — Software Engineer | Full-Stack, DevOps & Applied AI",
  description:
    "Software Engineer building production systems from interface to infrastructure. Author of Hired by an Algorithm.",
  path: "/",
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
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
      ...rootSeo.meta,
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap",
      },
      ...rootSeo.links,
    ],
    scripts: [jsonLdScript(personJsonLd())],
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
      <body>{children}<Scripts /></body>
    </html>
  );
}

import { ContactModal } from "@/components/ContactModal";
import { useContactModal } from "@/hooks/use-contact-modal";
import { Toaster } from "sonner";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [loaded, setLoaded] = useState(false);
  const { isOpen, close } = useContactModal();
  const router = useRouter();

  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const lenisRef = useRef<Lenis | null>(null);

  const jumpTop = () => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Lenis drives smooth scroll; we use its own RAF loop (not framer's) to avoid
  // double-ticking. Framer's useScroll reads native scrollY directly — Lenis
  // patches window.scrollY so both stay in sync with zero jitter.
  useEffect(() => {
    if (!loaded) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [loaded]);

  // Reset scroll as soon as navigation starts — before the new page paints.
  useEffect(() => {
    if (!loaded) return;
    const unsub = router.subscribe("onBeforeNavigate", ({ pathChanged }) => {
      if (pathChanged) jumpTop();
    });
    return unsub;
  }, [router, loaded]);

  useLayoutEffect(() => {
    if (!loaded) return;
    jumpTop();
  }, [currentPath, loaded]);

  const handleLoaderComplete = () => setLoaded(true);

  return (
    <QueryClientProvider client={queryClient}>
      {!loaded && <Loader onComplete={handleLoaderComplete} />}
      <motion.div
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ pointerEvents: loaded ? "auto" : "none" }}
      >
        <PageTransition routeKey={currentPath}>
          <Outlet />
        </PageTransition>
      </motion.div>
      <ContactModal isOpen={isOpen} onClose={close} />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}

