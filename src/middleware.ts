import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match solo rutas internacionalizadas
  matcher: ['/', '/(es|en)/:path*']
};
