// import { NextRequest, NextResponse } from 'next/server'

// export const config = {
//   matcher: ['/', '/index'],
// }

// export default function proxy(req: NextRequest) {
//   const basicAuth = req.headers.get('authorization')
//   const url = req.nextUrl

//   if (basicAuth) {
//     const authValue = basicAuth.split(' ')[1]
//     const [user, pwd] = atob(authValue).split(':')

//     if (user === 'sakaiY__' && pwd === 'porto_s_11') {
//       return NextResponse.next()
//     }
//   }
//   url.pathname = './app/auth'

//   return NextResponse.rewrite(url)
// }


// import { updateSession } from "@/lib/supabase/proxy";
// import { type NextRequest } from "next/server";

// export async function proxy(request: NextRequest) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };
