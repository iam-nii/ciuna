import {
  Car,
  House,
  Briefcase,
  Paintbrush,
  Shirt,
  Sofa,
  Smartphone,
  Gamepad2,
  Cat,
} from "lucide-react";
import { Products } from "./types";

const categories = [
  {
    name: "Transport",
    icon: Car,
    color: "text-green-600",
  },
  {
    name: "Real Estate",
    icon: House,
    color: "text-blue-600",
  },
  {
    name: "Jobs",
    icon: Briefcase,
    color: "text-purple-600",
  },
  {
    name: "Services",
    icon: Paintbrush,
    color: "text-amber-600",
  },
  {
    name: "Personal Items",
    icon: Shirt,
    color: "text-red-600",
  },
  {
    name: "Home & Garden",
    icon: Sofa,
    color: "text-green-600",
  },
  {
    name: "Electronics",
    icon: Smartphone,
    color: "text-blue-600",
  },
  {
    name: "Hobbies & Recreation",
    icon: Gamepad2,
    color: "text-yellow-600",
  },
  {
    name: "Animals",
    icon: Cat,
    color: "text-orange-600",
  },
];

const cities = ["Moscow", "St. Petersburg", "Kyiv", "Lviv", "Odesa"];

const products: Products = [
  {
    id: "i9e8h928h",
    image: "",
    status: "new",
    name: "Russian Language Books Set",
    description: "Product Desctiption ",
    city: { city: "Moscow" },
    createdAt: new Date("1/15/2024"),
    updatedAt: new Date("1/15/2024"),
    price: 120000,
    Vendor: {
      user: {
        id: "1",
        email: "test@test.com",
        firstName: "John",
        lastName: "Smith",
        isVerified: true,
      },
    },
  },
  {
    id: "i9e8h928h",
    image: "",
    status: "used",
    name: "IKEA HEMNES Dresser - White",
    description: "Product Desctiption ",
    city: { city: "Moscow" },
    createdAt: new Date("1/15/2024"),
    updatedAt: new Date("1/15/2024"),
    price: 120000,
    Vendor: {
      user: {
        id: "1",
        email: "test@test.com",
        firstName: "John",
        lastName: "Smith",
        isVerified: false,
      },
    },
  },
  {
    id: "i9e8h928h",
    image: "",
    status: "used",
    name: "Gaming Chair - Black",
    description: "Product Desctiption ",
    city: { city: "Moscow" },
    createdAt: new Date("1/15/2024"),
    updatedAt: new Date("1/15/2024"),
    price: 120000,
    Vendor: {
      user: {
        id: "1",
        email: "test@test.com",
        firstName: "John",
        lastName: "Smith",
        isVerified: true,
      },
    },
  },
  {
    id: "i9e8h928h",
    image: "",
    status: "used",
    name: "Samsung S22 Ultra",
    description: "Product Desctiption ",
    city: { city: "Moscow" },
    createdAt: new Date("1/15/2024"),
    updatedAt: new Date("1/15/2024"),
    price: 120000,
    Vendor: {
      user: {
        id: "1",
        email: "test@test.com",
        firstName: "John",
        lastName: "Smith",
        isVerified: true,
      },
    },
  },
  {
    id: "i9e8h928h",
    image: "",
    status: "used",
    name: "Designer Winter Coat - Size M",
    description: "Product Desctiption ",
    city: { city: "Moscow" },
    createdAt: new Date("1/15/2024"),
    updatedAt: new Date("1/15/2024"),
    price: 120000,
    Vendor: {
      user: {
        id: "1",
        email: "test@test.com",
        firstName: "John",
        lastName: "Smith",
        isVerified: false,
      },
    },
  },
  {
    id: "i9e8h928h",
    image: "",
    status: "used",
    name: "Vintage Style Desk - Walnut",
    description: "Product Desctiption ",
    city: { city: "Moscow" },
    createdAt: new Date("1/15/2024"),
    updatedAt: new Date("1/15/2024"),
    price: 120000,
    Vendor: {
      user: {
        id: "1",
        email: "test@test.com",
        firstName: "John",
        lastName: "Smith",
        isVerified: true,
      },
    },
  },
  {
    id: "i9e8h928h",
    image: "",
    status: "used",
    name: "MacBook Pro 13 inch",
    description: "Product Desctiption ",
    city: { city: "Moscow" },
    createdAt: new Date("1/15/2024"),
    updatedAt: new Date("1/15/2024"),
    price: 120000,
    Vendor: {
      user: {
        id: "1",
        email: "test@test.com",
        firstName: "John",
        lastName: "Smith",
        isVerified: true,
      },
    },
  },
];

export { categories, cities, products };
