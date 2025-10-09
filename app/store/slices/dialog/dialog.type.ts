export type DialogState = {
  stack: DialogItem[];
  dialogSize: DialogSize;
};

export type DialogNames = "TOP_UP_BALANCE_DIALOG";

export type PayloadDialogProps = {
  dialogName: DialogNames;
  dialogProps?: object;
  options?: any;
  dialogSize?: DialogSize;
};

export type DialogItem = {
  dialogName: DialogNames;
  dialogProps?: object;
  options?: any;
};

export type DialogSize = "default" | "large" | "extra-large" | "fullscreen";
