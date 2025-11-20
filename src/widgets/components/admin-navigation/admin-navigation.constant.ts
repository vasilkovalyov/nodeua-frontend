import { AppRoutes } from "@/src/shared/routes";
import { AdminNavigationLinkType } from "@/src/shared/types/admin-navigation-link";

export const ADMIN_NAVIGATION: AdminNavigationLinkType[] = [
  {
    icon: "HomeOutlinedIcon",
    nameTranslationKey: "page_name_home",
    path: AppRoutes.admin
  },
  {
    icon: "HubIcon",
    nameTranslationKey: "nodes",
    path: AppRoutes.adminNodes
  },
  {
    icon: "Person2Icon",
    nameTranslationKey: "users",
    path: AppRoutes.adminUsers
  },
  {
    icon: "InventoryIcon",
    nameTranslationKey: "buyed_nodes",
    path: AppRoutes.adminBuyedNodes
  }
];
