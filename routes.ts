/**
 * An Array of routes that are accessible to the public
 * These routes do not requrie authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * An Array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * Prefix for API authentication routes
 * Routes that starts with this prefix are used for API auth purposes
 * @type {string}
 */
export const apiRoutePrefix = "/api/auth";

/**
 * The default redirect for default logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
