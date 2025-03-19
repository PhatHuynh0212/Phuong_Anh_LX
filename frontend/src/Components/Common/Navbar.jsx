import { AlignJustify, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleCartDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left logo */}
        <div>
          <Link to="#" className="text-2xl font-medium">
            Phuong Anh
          </Link>
        </div>

        {/* Center Navigation Link */}
        <div className="hidden md:flex space-x-6 items-center justify-between">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Hải Âu
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Jotun
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Nippon
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Thế Hệ Mới
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
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
            <AlignJustify className="size-6 text-gray-700 hover:text-black" />
          </button>
        </div>
      </nav>
      {/* Cart Drawer */}
      <CartDrawer openDrawer={openDrawer} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;
