import { getDialogByName, getAllDialogsSelector } from "@/app/store/slices/dialog/dialog.selectors";
import { closeDialogByName, openDialog, closeAllDialogs } from "@/app/store/slices/dialog/dialog.slice";
import { DialogItem, DialogNames, PayloadDialogProps } from "@/app/store/slices/dialog/dialog.type";
import { useAppDispatch, useAppSelector } from "@/app/store/store";

type UseDialogProps = {
  allDialogs: DialogItem[];
  onOpenDialog: (props: PayloadDialogProps) => void;
  onCloseDialogByName: (name: DialogNames) => void;
  getOptionsFromDialog: (name: DialogNames) => any;
  getPropsFromDialog: (name: DialogNames) => any;
  closeDialogs: () => any;
};

export default function useDialog(): UseDialogProps {
  const dispatch = useAppDispatch();

  const allDialogs = useAppSelector(getAllDialogsSelector);

  function onOpenDialog(props: PayloadDialogProps): void {
    dispatch(openDialog(props));
  }

  function onCloseDialogByName(name: DialogNames): void {
    dispatch(closeDialogByName({ dialogName: name }));
  }

  function getOptionsFromDialog(name: DialogNames): any {
    return getDialogByName(allDialogs, name).options;
  }

  function getPropsFromDialog(name: DialogNames): any {
    return getDialogByName(allDialogs, name).dialogProps;
  }

  function closeDialogs(): void {
    if (allDialogs.length) {
      dispatch(closeAllDialogs());
    }
  }

  return {
    allDialogs,
    onOpenDialog,
    onCloseDialogByName,
    getOptionsFromDialog,
    getPropsFromDialog,
    closeDialogs
  };
}
