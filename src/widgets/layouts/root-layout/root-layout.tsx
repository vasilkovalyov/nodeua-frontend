import { FC, ReactNode } from "react";

import RootDialog from "../../dialogs/root-dialog/root-dialog";
import RootDrawer from "../../drawers/root-drawer/root-drawer";
import RootSnackbar from "../../snackbar/snackbar";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <RootDialog />
      <RootDrawer />
      <RootSnackbar />
    </>
  );
};

export default RootLayout;
