import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ratelimit } from './lib/ratelimit';

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
]);

async function ratelimitMiddleware(request: NextRequest) {
  const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';
  
  const { success, limit, reset, remaining } = await ratelimit.limit(
    `ratelimit_middleware_${ip}`
  );
  
  if (!success) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toString(),
      },
    });
  }
  
  return null;
}

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth().protect();
  }

  const ratelimitResponse = await ratelimitMiddleware(req);
  if (ratelimitResponse) return ratelimitResponse;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};