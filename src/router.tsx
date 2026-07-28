import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // We reset scroll via Lenis on navigate — browser restoration fights it.
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
