export const AppRoutes = {
  home: "/",
  login: "/auth/login",
  registration: "/auth/registration",
  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",
  singleNode: "/node",
  cart: "/cart",
  posts: "/posts",
  activeNodes: "/active-nodes",
  anyRoute: "*",
  notFound: "/404"
} as const;

export const ROLE_PRIVATE_ROUTES: string[] = [AppRoutes.cart, AppRoutes.activeNodes];
