import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// Define authentication routes that should be accessible only when logged out
const authRoutes = ['/auth/sign-in', '/auth/sign-up'];
// Define protected routes that require authentication
const protectedRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value;
  const { pathname } = request.nextUrl;

  // If user is logged in (has token) and tries to access auth routes
  if (token && authRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If user is not logged in and tries to access protected routes
  if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  // Allow all other routes
  return NextResponse.next();
}

// Configure which routes should be handled by this middleware
export const config = {
  matcher: [
    // Match all auth routes
    '/auth/:path*',
    // Match all dashboard routes
    '/dashboard/:path*',
    // Add more protected routes as needed
    '/dashboard',
  ],
};