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

export { categories, cities };
