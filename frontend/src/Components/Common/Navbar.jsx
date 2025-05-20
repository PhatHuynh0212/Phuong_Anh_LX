import { AlignRight, ShoppingCart, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [navOpenDrawer, setNavOpenDrawer] = useState(false);

  const toggleCartDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const toggleNavDrawer = () => {
    setNavOpenDrawer(!navOpenDrawer);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 sm:px-4 py-2">
        {/* Left logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            <img
              src="/logo/palx_logo_transparent.png"
              alt="PA logo"
              className="h-[50px] w-[70px] sm:h-[65px] sm:w-[90px] object-cover"
            />
          </Link>
        </div>

        {/* Center Navigation Link */}
        <div className="hidden md:flex space-x-6 items-center justify-between">
          <Link
            to="/collections/all?brand=hai-au"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Hải Âu
          </Link>
          <Link
            to="/collections/all?brand=jotun"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Jotun
          </Link>
          <Link
            to="/collections/all?brand=nippon"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Nippon
          </Link>
          <Link
            to="/collections/all?brand=the-he-moi"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Thế Hệ Mới
          </Link>
          <Link
            to="/collections/all?brand=san-pham-khac"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Sản Phẩm Khác
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="block bg-black px-2 text-sm text-white rounded"
          >
            Admin
          </Link>
          <Link to="profile">
            <User className="size-6 text-gray-700 hover:text-black" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <ShoppingCart className="size-6 text-gray-700 hover:text-black" />
            <span className="absolute -top-3 bg-pa-red text-white text-xs px-2 py-1 rounded-full">
              2
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button className="md:hidden">
            <AlignRight
              onClick={toggleNavDrawer}
              className="size-6 text-gray-700 hover:text-black"
            />
          </button>
        </div>
      </nav>
      {/* Cart Drawer */}
      <CartDrawer openDrawer={openDrawer} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navOpenDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <X className="size-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Danh sách</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Hải Âu
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Jotun
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Nippon
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Thế Hệ Mới
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
