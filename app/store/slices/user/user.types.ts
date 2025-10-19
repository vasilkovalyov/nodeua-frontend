import { UserType } from "@/app/entities/user";

export type UserState = {
  profile: UserType;
};

export type UserTopUpBalanceType = {
  userId: string;
  amount: number;
};
