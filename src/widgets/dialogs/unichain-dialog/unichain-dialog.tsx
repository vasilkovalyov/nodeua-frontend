import { FC } from "react";
import { useTranslations } from "next-intl";

import useDialog from "@/src/shared/hooks/use-dialog";
import { CopyClipboard, MenuToggler } from "@/src/widgets/components";

import { Box, Button, Paper, Stack, Typography } from "@mui/material";

import "./unichain-dialog.scss";

const UnichainDialog: FC = () => {
  const t = useTranslations();
  const { onCloseDialogByName, getPropsFromDialog } = useDialog();
  const props = getPropsFromDialog("UNICHAIN_DIALOG");

  function onCloseDialog(): void {
    onCloseDialogByName("UNICHAIN_DIALOG");
  }

  return (
    <>
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
      <Stack gap="20px">
        <Typography variant="h6" paddingInlineEnd="30px">
          {t("modal_node_key_title")}
        </Typography>
        <Paper elevation={4}>
          <Box p="20px">
            <Typography
              variant="body2"
              sx={{
                wordBreak: "break-word",
                overflow: "hidden"
              }}
            >
              {props.keyNode}
            </Typography>
          </Box>
        </Paper>
        <Stack justifyContent="end" direction="row" gap="10px">
          <CopyClipboard value={props.keyNode} />
          <Button variant="contained" size="small" onClick={onCloseDialog}>
            {t("cancel_button_text")}
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default UnichainDialog;
