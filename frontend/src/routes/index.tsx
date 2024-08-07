import { createRouter } from "@tanstack/react-router";
import { searchRoute } from "./search";
import { rootRoute } from "./root";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const routeTree = rootRoute.addChildren([searchRoute]);

export const router = createRouter({ routeTree });
