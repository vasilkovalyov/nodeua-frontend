import { FC } from "react";

import { Box, Drawer } from "@mui/material";

import drawers from "../index";

import useDrawer from "@/src/shared/hooks/use-drawer";
import { SuspenseWrapper } from "@/src/shared/ui";

import "./root-drawer.scss";

const RootDrawer: FC = () => {
  const { activeDrawerName, isDrawerOpened, drawerProps, onCloseDrawer } = useDrawer();

  return (
    <Drawer anchor={drawerProps.direction} open={isDrawerOpened} onClose={onCloseDrawer} className="drawer">
      <Box>
        <SuspenseWrapper>
          {Object.keys(drawers).map((key) => {
            if (key === activeDrawerName) {
              const Component = drawers[key as keyof typeof drawers];
              return <Component key={key} />;
            }
            return null;
          })}
        </SuspenseWrapper>
      </Box>
    </Drawer>
  );
};

export default RootDrawer;
