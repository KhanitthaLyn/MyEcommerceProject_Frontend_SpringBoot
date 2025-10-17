import { bannerImageOne, bannerImageThree, bannerImageTwo } from "./constant";
import { FaHome, FaShoppingCart, FaBoxOpen, FaThList, FaStore } from "react-icons/fa";

export const bannerLists = [
  {
    id: 1,
    image: bannerImageOne,
    title: "Camera",
    subtitle: "Relax",
    description: "Use for keeping your memory",
  },
  {
    id: 2,
    image: bannerImageTwo,
    title: "Cosmetic",
    subtitle: "Make up your face",
    description: "Make your face beautiful",
  },
  {
    id: 3,
    image: bannerImageThree,
    title: "Milk",
    subtitle: "Drink",
    description: "Drink for your health",
  },
]; 

export const adminNavigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: FaHome,
    current: true,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: FaShoppingCart,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: FaBoxOpen,
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: FaThList,
  },
  {
    name: "Sellers",
    href: "/admin/sellers",
    icon: FaStore,
  },
];

export const sellerNavigation = [
  {
    name: "Orders",
    href: "/admin/orders",
    icon: FaShoppingCart,
    current: true,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: FaBoxOpen,
  },
];
