// All the routes that should not be accessible after log in.
const authRoutes = ['/signup','/sign-in']

// All the routes accesible to admin only.
const adminOnlyRoutes = ['/admin']

// All the routes accessible to team and admin.
const teamOnlyRoutes = ['/blogs/new']

// All the routes that requires authentication
const protectedRoutes = [...adminOnlyRoutes,...teamOnlyRoutes,"/events/webwiz3_0/register"]

export {authRoutes, adminOnlyRoutes, teamOnlyRoutes, protectedRoutes}