import { create } from "zustand";
import { User } from "@/lib/types";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}
// type User = {
//   id: string;
//   email: string;
//   name: string;
//   createdAt: Date;
//   updatedAt: Date;
//   role: "seller" | "buyer" | "admin";
//   isVerified: boolean;
//   isAuthenticated: boolean;
// };
const testUser: User = {
  id: "iamnii_0",
  email: "iamnii@gmail.com",
  firstName: "Iam",
  lastName: "Nii",
  role: "admin",
  isVerified: true,
  isAuthenticated: true,
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: testUser,
      token: null,
      login: (user: User, token: string) => set(() => ({ user, token })),
      logout: () => set(() => ({ user: null, token: null })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
