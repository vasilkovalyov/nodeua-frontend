"use client";

import {
  getDrawerNameSelector,
  isDrawerOpenedSelector,
  getDrawerProps
} from "@/app/store/slices/drawer/drawer.selectors";
import { closeDrawer, openDrawer } from "@/app/store/slices/drawer/drawer.slice";
import { DrawerNames, DrawerProps } from "@/app/store/slices/drawer/drawer.type";
import { useAppDispatch, useAppSelector } from "@/app/store/store";

type UseDrawerProps = {
  activeDrawerName: DrawerNames | null;
  isDrawerOpened: boolean;
  drawerProps: DrawerProps;
  isOpenDrawer: (name: DrawerNames) => boolean;
  onOpenDrawer: (name: DrawerNames, props?: DrawerProps) => void;
  onCloseDrawer: () => void;
};

export default function useDrawer(): UseDrawerProps {
  const drawerName = useAppSelector(getDrawerNameSelector);
  const isDrawerOpened = useAppSelector(isDrawerOpenedSelector);
  const drawerProps = useAppSelector(getDrawerProps);

  const dispatch = useAppDispatch();

  function isOpenDrawer(name: DrawerNames): boolean {
    return isDrawerOpened && drawerName === name;
  }

  function onOpenDrawer(name: DrawerNames, props?: DrawerProps): void {
    dispatch(openDrawer({ dialogName: name, props }));
  }

  function onCloseDrawer(): void {
    if (drawerName) {
      dispatch(closeDrawer());
    }
  }

  return {
    isDrawerOpened,
    activeDrawerName: drawerName,
    drawerProps,
    onOpenDrawer,
    isOpenDrawer,
    onCloseDrawer
  };
}
