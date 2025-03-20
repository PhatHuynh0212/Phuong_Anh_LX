import { X } from "lucide-react";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ openDrawer, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[28rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        openDrawer ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <X className="size-6 text-gray-600" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Giỏ hàng của bạn</h2>
        {/* Component Cart Content Items */}
        <CartContents />
      </div>

      {/* Checkout Button */}
      <div className="sticky p-4 bg-white bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
