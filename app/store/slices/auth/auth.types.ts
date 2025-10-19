export type AuthState = {
  isAuth: boolean;
  isLoading: boolean;
  errorMessage: string | null;
};

export type SignUpApiRequestType = {
  email: string;
  password: string;
};

export type SignUpApiResponseType = {
  userId: string;
};

export type SignUpEmailApiRequestType = {
  code: string;
  userId: string;
};

export type LoginApiResponseType = {
  accessToken: string;
  refreshToken: string;
  email: string;
  _id: string;
};

export type LoginApiRequestType = {
  email: string;
  password: string;
  redirectMethod?: () => void;
};

export type UpdatePasswordApiRequestType = {
  userId: string;
  oldPassword: string;
  newPassword: string;
};
