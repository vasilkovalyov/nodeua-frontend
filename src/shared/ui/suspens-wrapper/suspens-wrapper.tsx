import { ReactElement, ReactNode, Suspense } from "react";

import PageLoader from "../page-loader/page-loader";

const SuspenseWrapper = ({
  children,
  loaderComponent
}: {
  children: ReactNode;
  loaderComponent?: ReactNode;
}): ReactElement => {
  return <Suspense fallback={loaderComponent || <PageLoader />}>{children}</Suspense>;
};

export default SuspenseWrapper;
