type User = {
  id: string;
  email: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  role?: "seller" | "buyer" | "admin";
  isVerified?: boolean;
  isAuthenticated?: boolean;
};
interface Vendor {
  user: User;
}
interface City {
  city: string;
}
type Product = {
  id: string;
  image: string;
  status: "new" | "used";
  name: string;
  description: string;
  city: City;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  Vendor: Vendor;
};
type Products = Product[];
export type { User, Products, City, Vendor, Product };
