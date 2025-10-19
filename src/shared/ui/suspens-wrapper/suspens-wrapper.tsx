import { ReactElement, ReactNode, Suspense } from "react";

import { CircularProgress, Stack } from "@mui/material";

const SuspenseWrapper = ({
  children,
  loaderComponent
}: {
  children: ReactNode;
  loaderComponent?: ReactNode;
}): ReactElement => {
  return (
    <Suspense
      fallback={
        loaderComponent || (
          <Stack minHeight="340px" justifyContent="center" alignItems="center" width="100%">
            <CircularProgress />
          </Stack>
        )
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
