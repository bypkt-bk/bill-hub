export const prerender = false; // Disable static generation for this API route

import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../../server/trpc";

export const ALL = async ({ request }: { request: Request }) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
  });
};
