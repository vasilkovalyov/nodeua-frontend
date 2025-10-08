import { FC } from "react";

import { Snackbar } from "@/src/shared/ui";
import useSnackbar from "@/src/shared/hooks/use-snackbar";

const RootSnackbar: FC = () => {
  const { isOpened, props, closeAlert } = useSnackbar();

  return <Snackbar open={isOpened} {...props} onClose={closeAlert} />;
};

export default RootSnackbar;
