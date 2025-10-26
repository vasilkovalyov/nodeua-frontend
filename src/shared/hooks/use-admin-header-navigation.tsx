import { AppRoutes } from "../routes";
import { AdminNavigationLinkType } from "@/src/shared/types/admin-navigation-link";

export const adminNavigationList: AdminNavigationLinkType[] = [
  {
    icon: "HomeOutlinedIcon",
    nameTranslationKey: "page_name_home",
    path: AppRoutes.admin
  }
];
