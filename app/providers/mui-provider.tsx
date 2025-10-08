import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";

import getTheme from "@/src/shared/themes/theme";

type MuiProviderProps = {
  children: ReactNode;
};

function MuiProvider({ children }: MuiProviderProps): ReactElement {
  return <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>;
}

export default MuiProvider;
