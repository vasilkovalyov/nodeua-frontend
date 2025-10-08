import { AppRoutes } from "../routes";
import { NavigationLinkType } from "../types/navigation-link";

export const navigationList: NavigationLinkType[] = [
  {
    icon: "HomeOutlinedIcon",
    nameTranslationKey: "page_name_home",
    path: AppRoutes.home,
    isPublic: true
  },
  {
    icon: "NewspaperOutlinedIcon",
    nameTranslationKey: "page_name_posts",
    path: AppRoutes.posts,
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
    path: AppRoutes.cart,
    isPublic: false
  },
  {
    icon: "ViewInArOutlinedIcon",
    nameTranslationKey: "page_name_active_nodes",
    path: AppRoutes.activeNodes,
    isPublic: false
  }
];
