export const AppRoutes = {
  home: "/",
  login: "/auth/login",
  registration: "/auth/registration",
  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",
  userSingleNode: "/node",
  userCart: "/cart",
  userPosts: "/posts",
  userActiveNodes: "/active-nodes",
  anyRoute: "*",
  notFound: "/404",
  serverNotWorking: "/500",
  admin: "/admin",
  adminNodes: "/admin/nodes",
  adminUsers: "/admin/users",
  adminBuyedNodes: "/admin/buyed-nodes",
  adminCreateNode: "/admin/create-node"
} as const;

export const ROLE_PRIVATE_ROUTES: string[] = [AppRoutes.userCart, AppRoutes.userActiveNodes, AppRoutes.admin];

export const FORBIDDEN_ROUTES_FOR_ADMIN: string[] = [
  AppRoutes.userSingleNode,
  AppRoutes.userCart,
  AppRoutes.userPosts,
  AppRoutes.userActiveNodes
];

export const FORBIDDEN_ROUTES_FOR_USER: string[] = [AppRoutes.admin, AppRoutes.adminNodes];
