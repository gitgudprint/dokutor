// src/app/api/trpc/[trpc]/route.ts
import { appRouter } from '@/server/index';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';

const handler = async (req: NextRequest) => {
  const response = await fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
  });
  
  return response;
};

export { handler as GET, handler as POST };