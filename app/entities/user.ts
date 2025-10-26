import { UserRole } from "@/src/shared/types/user-role";

export type UserType = {
  userId: string;
  email: string;
  balance: number;
  role?: UserRole;
};
