import { FC, ReactNode } from "react";

import RootDialog from "../../dialogs/root-dialog/root-dialog";
import RootDrawer from "../../drawers/root-drawer/root-drawer";
import RootSnackbar from "../../snackbar/snackbar";
import { Subscribe } from "@/src/shared/ui";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Subscribe />
      {children}
      <RootDialog />
      <RootDrawer />
      <RootSnackbar />
    </>
  );
};

export default RootLayout;
