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
  userId: number;
};

export type SignUpEmailApiRequestType = {
  code: string;
  userId: number;
};

export type LoginApiResponseType = {
  accessToken: string;
  refreshToken: string;
  email: string;
  _id: number;
};

export type LoginApiRequestType = {
  email: string;
  password: string;
  redirectMethod?: () => void;
};

export type UpdatePasswordApiRequestType = {
  userId: number;
  oldPassword: string;
  newPassword: string;
};
