import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { convertPrice } from "../utils";

const checkout = {
  _id: "123123",
  createAt: new Date(),
  checkoutItems: [
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
  shippingAddress: {
    address: "86 Trieu Thi Trinh, Binh Khanh",
    city: "Long Xuyen",
  },
};

const OrderSuccessPage = () => {
  const estimateDelivery = (createAt) => {
    const orderDate = new Date(createAt);
    orderDate.setDate(orderDate.getDate() + 4);
    return orderDate.toLocaleDateString("vi-VN");
  };

  const totalAmount = checkout.checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <header className="text-center space-y-2">
        <CheckCircle className="mx-auto text-emerald-500" size={48} />
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 uppercase">
          Đặt hàng thành công!
        </h1>
        <p className="text-gray-600">
          Cảm ơn bạn đã tin tưởng và mua sắm tại Phương Anh Long Xuyên
        </p>
      </header>

      {/* Card chính */}
      <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200 overflow-hidden">
        {/* Order Info */}
        <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Mã đơn: {checkout._id}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Ngày tạo:{" "}
              {new Date(checkout.createAt).toLocaleDateString("vi-VN")}
            </p>
          </div>
          <div className="mt-4 sm:mt-0 text-right">
            <p className="text-sm text-gray-500">Dự kiến giao hàng</p>
            <p className="text-lg font-medium text-emerald-600">
              {estimateDelivery(checkout.createAt)}
            </p>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="p-6 space-y-4">
          {checkout.checkoutItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.color} | {item.size}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">
                  {convertPrice(item.price)}
                </p>
                <p className="text-sm text-gray-500">x{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Delivery */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Phương thức thanh toán
            </h4>
            <p className="text-gray-600">Trả sau</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-1">
              Địa chỉ giao hàng
            </h4>
            <p className="text-gray-600">{checkout.shippingAddress.address}</p>
            <p className="text-gray-600">{checkout.shippingAddress.city}</p>
          </div>
        </div>

        {/* Tổng tiền và link */}
        <div className="p-6 flex flex-col-reverse md:flex-row justify-between items-center">
          <Link
            to="/collections/all?brand=hai-au"
            className="mt-4 md:mt-0 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Tiếp tục mua sắm
          </Link>
          <div className="text-right">
            <p className="text-sm text-gray-500">Tổng đơn hàng</p>
            <p className="text-2xl font-bold text-gray-800">
              {convertPrice(totalAmount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
