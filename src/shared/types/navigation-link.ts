import { HTMLAttributeAnchorTarget } from "react";

export type NavigationLinkType = {
  path: string;
  nameTranslationKey: string;
  icon: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  isPublic: boolean;
};
