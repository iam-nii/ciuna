type User = {
  id: string;
  email: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  role: "seller" | "buyer" | "admin";
  isVerified: boolean;
  isAuthenticated: boolean;
};

export type { User };
