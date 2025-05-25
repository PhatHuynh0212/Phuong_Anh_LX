import { AlignRight, ShoppingCart, User, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [navOpenDrawer, setNavOpenDrawer] = useState(false);

  const toggleCartDrawer = () => setOpenDrawer(!openDrawer);
  const toggleNavDrawer = () => setNavOpenDrawer(!navOpenDrawer);

  const links = [
    { to: "/collections/all?brand=hai-au", label: "Hải Âu" },
    { to: "/collections/all?brand=jotun", label: "Jotun" },
    { to: "/collections/all?brand=nippon", label: "Nippon" },
    { to: "/collections/all?brand=the-he-moi", label: "Thế Hệ Mới" },
    { to: "/collections/all?brand=international", label: "International" },
    { to: "/collections/all?brand=san-pham-khac", label: "Sản Phẩm Khác" },
  ];

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 sm:px-4 py-3 backdrop-blur-md bg-white/70 sticky top-0 z-40 transition-all duration-300">
        {/* Logo */}
        <Link
          to="/"
          className="transform hover:scale-105 transition-transform duration-200"
        >
          <img
            src="/logo/palx_logo_transparent.png"
            alt="PA logo"
            className="h-[50px] w-[70px] sm:h-[65px] sm:w-[90px] object-cover"
          />
        </Link>

        {/* Center Links */}
        <div className="hidden lg:flex space-x-8 items-center">
          {links.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className="relative text-sm font-medium uppercase px-1 py-2 transition-colors duration-200 group text-gray-700 hover:text-blue-600"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-200 group-hover:w-full group-hover:left-0" />
            </NavLink>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="bg-black text-white text-sm font-semibold px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200"
          >
            Admin
          </Link>
          <Link
            to="/profile"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <User className="w-6 h-6 text-gray-700 hover:text-black" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative transform hover:scale-110 transition-transform duration-200"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-black" />
            <span className="absolute -top-3 -right-2 bg-pa-red text-white text-xs px-2 py-1 rounded-full animate-pulse">
              2
            </span>
          </button>
          <SearchBar />
          <button
            onClick={toggleNavDrawer}
            className="lg:hidden transform hover:rotate-90 transition-transform duration-300"
          >
            <AlignRight className="w-6 h-6 text-gray-700 hover:text-black" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer openDrawer={openDrawer} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-2/3 sm:w-1/2 md:w-1/3 h-full bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          navOpenDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleNavDrawer}
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Danh sách</h2>
          <nav className="space-y-4 text-lg">
            <NavLink
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black hover:underline transition-colors duration-200"
            >
              Giới thiệu
            </NavLink>
            {links.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-black hover:underline transition-colors duration-200"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
