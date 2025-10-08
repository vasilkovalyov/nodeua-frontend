"use client";

import { createContext, ReactNode, useMemo, memo, useEffect, ReactElement } from "react";

import { initializeApp } from "../api/initialize-app";
import { useAppSelector, useAppDispatch } from "../store/store";
import { getIsAppLoadingSelector } from "../store/slices/app-initialization/app-initialization.selectors";

import { selectUserState } from "../store/slices/user/user.selectors";

export type AuthContextType = {
  userId: number;
  email: string;
  isAuth: boolean;
  isAppLoading: boolean;
};

type AuthContextProps = {
  children?: ReactNode;
};

const initialState: AuthContextType = {
  userId: 0,
  email: "",
  isAuth: false,
  isAppLoading: false
};

export const AuthContext = createContext<AuthContextType>(initialState);

function AuthProvider({ children }: AuthContextProps): ReactElement {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserState);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isAppLoading = useAppSelector(getIsAppLoadingSelector);

  const values = useMemo(() => {
    const { email, userId } = user.profile;

    return {
      userId: userId,
      isAuth: isAuth,
      email: email,
      isAppLoading: isAppLoading
    };
  }, [isAuth, isAppLoading]);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  return (
    <AuthContext.Provider value={values}>
      <div id="root-layout-app">{children}</div>
    </AuthContext.Provider>
  );
}

const AuthProviderMemo = memo(AuthProvider);

export { AuthProviderMemo as AuthProvider };
