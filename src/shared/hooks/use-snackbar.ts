"use client";
import { useDispatch } from "react-redux";

import { closeSnackbar, defaultSnackbarProps, openSnackbar } from "@/app/store/slices/snackbar/snackbar.slice";
import { useAppSelector } from "@/app/store/store";
import { SnackbarPropsType } from "../ui/snackbar/snackbar.type";

type UseSnackbarProps = {
  isOpened: boolean;
  props: SnackbarPropsType;
  showSnackbar: (props: SnackbarPropsType) => void;
  closeAlert: () => void;
};

const useSnackbar = (): UseSnackbarProps => {
  const dispatch = useDispatch();
  const notificaitonProps = useAppSelector((state) => state.snackbar);

  function showSnackbar(props: SnackbarPropsType): void {
    dispatch(openSnackbar(props));
  }

  function closeAlert(): void {
    dispatch(closeSnackbar());
  }

  return {
    isOpened: notificaitonProps.isOpened,
    props: notificaitonProps.snackbarProps || defaultSnackbarProps,
    showSnackbar,
    closeAlert
  };
};

export default useSnackbar;
