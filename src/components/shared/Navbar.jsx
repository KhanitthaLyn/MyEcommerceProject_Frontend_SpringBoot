import { Badge } from "@mui/material";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { cart } = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="sticky top-0 z-[9999] bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center text-2xl font-bold text-purple-800">
          <HiOutlineBuildingStorefront className="mr-2 text-3xl" />
          <span>E-Commerce Shopping</span>
        </Link>

        {/* Hamburger Mobile */}
        <div
          className="sm:hidden text-purple-800 text-2xl cursor-pointer"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>

        {/* Menu */}
        <ul
          className={`flex flex-col sm:flex-row sm:items-center sm:static absolute left-0 top-[70px] w-full sm:w-auto
          bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 sm:bg-none transition-all duration-300 overflow-hidden
          ${navbarOpen ? "h-auto pb-5 sm:pb-0" : "h-0 sm:h-auto"}`}
        >
          {/* Links */}
          {["/", "/products", "/about", "/contact"].map((route, i) => {
            const name = ["Home", "Products", "About", "Contact"][i];
            return (
              <li key={i} className="px-4 py-2">
                <Link
                  to={route}
                  className={`${
                    path === route
                      ? "text-purple-900 font-semibold"
                      : "text-purple-700 hover:text-purple-900 transition-colors duration-300"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}

          {/* Cart */}
          <li className="px-4 py-2">
            <Link
              to="/cart"
              className={`${path === "/cart" ? "text-purple-900 font-semibold" : "text-purple-700"}`}
            >
              <Badge
                badgeContent={cart?.length || 0}
                color="secondary"
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <FiShoppingCart size={20} className="text-purple-800" />
              </Badge>
            </Link>
          </li>

          {/* User / Login */}
          {user && user.id ? (
            <li className="px-4 py-2">
              <UserMenu />
            </li>
          ) : (
            <li className="px-4 py-2">
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-1.5
                  bg-purple-100 text-purple-800 font-semibold rounded-md shadow
                  hover:bg-purple-200 transition duration-300 ease-in-out"
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
