import { FC, ReactNode } from "react";

import useAuth from "@/app/hooks/use-auth";

type AuthContainerProps = {
  auth: ReactNode;
  notAuth?: ReactNode;
  loader?: ReactNode;
};

const AuthContainer: FC<AuthContainerProps> = ({ auth, notAuth, loader }) => {
  const { isAuth, isAppLoading } = useAuth();

  if (loader) {
    return <>{isAppLoading ? loader : <>{isAuth ? auth : notAuth}</>}</>;
  }

  return <>{!isAppLoading && <>{isAuth ? auth : notAuth}</>}</>;
};

export default AuthContainer;
