import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils";

const cart = {
  products: [
    {
      productId: 1,
      name: "Jotun",
      size: "Lớn",
      color: "Đỏ",
      quantity: 1,
      price: 100000,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Hải Âu",
      size: "Nhỏ",
      color: "Xanh",
      quantity: 3,
      price: 150000,
      image: "https://picsum.photos/200?random=2",
    },
  ],
  totalPrice: 250000,
};

const Checkout = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/order-success");
  };

  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Thanh toán</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Thông tin liên lạc</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <div className="mb-4 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700">Họ và tên</label>
              <input
                type="text"
                value={shippingAddress.name}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    name: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700">Địa chỉ</label>
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Thành phố</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.city,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Số điện thoại</label>
              <input
                type="tel"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.phone,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              onClick={handleOrder}
              className="w-full bg-black hover:bg-black/85 text-white py-3 rounded uppercase"
            >
              Đặt hàng
            </button>
          </div>
        </form>
      </div>

      {/* Right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Thông tin đơn hàng</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt="product"
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Thể tích: {product.size}</p>
                  <p className="text-gray-500">Màu: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">{convertPrice(product.price)}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Tổng đơn hàng</p>
          <p>{convertPrice(cart.totalPrice)}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Phí vận chuyển</p>
          <p>Thanh toán sau (Nếu có)</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p className="font-semibold">Tổng chi phí</p>
          <p className="font-semibold">{convertPrice(cart.totalPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
