import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { adminOnlyRoutes, authRoutes, protectedRoutes, teamOnlyRoutes } from './lib/route'
import { getLoggedInUser } from './actions/auth'
 
export async function middleware(req: NextRequest) {
    const user = await getLoggedInUser()
    const {pathname} = req.nextUrl
    const isProtectedRoute = protectedRoutes.includes(pathname)
    const isAuthRoute = authRoutes.includes(pathname)
    const isAdminRoute = adminOnlyRoutes.includes(pathname)
    const isTeamRoute = teamOnlyRoutes.includes(pathname)

    if (!user && isProtectedRoute) return NextResponse.redirect(new URL("/signin",req.url))
    if (user && isAuthRoute) return NextResponse.redirect(new URL("/",req.url))
    if(isAdminRoute && !user?.labels.includes("ADMIN")) return NextResponse.rewrite(new URL("/not-found", req.url))
    if(isTeamRoute && !user?.labels.includes("TEAM")) return NextResponse.rewrite(new URL("/not-found", req.url))

    return 
}
 
export const config = {
    //Matcher Copied from clerk :)
    matcher: [ '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}