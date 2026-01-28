import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected and public routes
const protectedRoutes = ['/courses', '/dashboard', '/profile', '/affiliate'];
const publicRoutes = ['/', '/sign-in', '/sign-up', '/api/webhooks', '/robots.txt', '/sitemap.xml'];

function isProtectedRoute(pathname: string): boolean {
  return protectedRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  );
}

function isPublicRoute(pathname: string): boolean {
  return publicRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes (except protected ones)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check for auth token in cookies
  // Note: Client-side auth uses localStorage, but we set a cookie for SSR checks
  const authToken = request.cookies.get('bimspeed_auth_token')?.value;

  // For protected routes, redirect to sign-in if not authenticated
  if (isProtectedRoute(pathname) && !authToken) {
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect_url', pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Protects all routes, including api/trpc routes
  matcher: [
    // Exclude static files and api health check
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for api and trpc routes
    "/(api|trpc)(.*)",
  ],
};
