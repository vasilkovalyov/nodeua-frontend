import { AppRoutes } from "@/src/shared/routes";
import { NavigationLinkType } from "@/src/shared/types/navigation-link";

export const USER_NAVIGATION: NavigationLinkType[] = [
  {
    icon: "HomeOutlinedIcon",
    nameTranslationKey: "page_name_home",
    path: AppRoutes.home,
    isPublic: true
  },
  {
    icon: "GroupOutlinedIcon",
    nameTranslationKey: "page_name_support",
    path: "https://t.me/nodesua",
    target: "_blank",
    isPublic: true
  },
  {
    icon: "ShoppingCartOutlinedIcon",
    nameTranslationKey: "page_name_cart",
    path: AppRoutes.userCart,
    isPublic: false
  },
  {
    icon: "ViewInArOutlinedIcon",
    nameTranslationKey: "page_name_active_nodes",
    path: AppRoutes.userActiveNodes,
    isPublic: false
  }
];
