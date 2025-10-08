export const AppRoutes = {
  home: "/",
  login: "/login",
  singleNode: "/node",
  cart: "/cart",
  posts: "/posts",
  activeNodes: "/active-nodes",
  registration: "/registration",
  emailUpdate: "/email-update",
  forgotPassword: "/forgot-password",
  resetPassword: "reset-password",
  anyRoute: "*",
  notFound: "/404"
} as const;

export const ROLE_PRIVATE_ROUTES: string[] = ["/cart", "/active-nodes"];
