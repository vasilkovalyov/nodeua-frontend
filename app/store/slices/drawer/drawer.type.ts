export type DrawerNames = "CREATE_COURSE_DRAWER" | "NOTIFICATIONS_DRAWER" | "BASE_NAVIGATION_DRAWER";

export type PayloadDialogProps = {
  dialogName: DrawerNames;
  props?: DrawerProps;
};

export type DrawerProps = {
  direction?: "left" | "right";
};
