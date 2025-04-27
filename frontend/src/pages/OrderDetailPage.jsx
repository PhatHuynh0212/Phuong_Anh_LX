import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { convertPrice } from "../utils";
import { CheckCircle, Truck } from "lucide-react";

const OrderDetailPage = () => {
  const { id } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);

  useEffect(() => {
    const mockOrderDetail = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "Trả sau",
      shippingMethod: "Nhanh",
      shippingAddress: {
        address: "86 Trieu Thi Trinh, Binh Khanh",
        city: "Long Xuyên",
      },
      orderItems: [
        {
          productId: "1",
          name: "Sơn Hải Âu",
          price: 150000,
          quantity: 1,
          image: "https://picsum.photos/200?random=1",
        },
        {
          productId: "2",
          name: "Sơn Jotun",
          price: 150000,
          quantity: 2,
          image: "https://picsum.photos/200?random=2",
        },
        {
          productId: "1",
          name: "Sơn Nippon",
          price: 150000,
          quantity: 3,
          image: "https://picsum.photos/200?random=3",
        },
      ],
    };

    setOrderDetail(mockOrderDetail);
  }, [id]);

  if (!orderDetail) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-gray-500">Đang tải đơn hàng…</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Chi Tiết Đơn Hàng</h2>

      {/* Card chính */}
      <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200 overflow-hidden">
        {/* Order Info */}
        <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Mã đơn: #{orderDetail._id}
            </h3>
            <p className="mt-1 text-gray-500">
              {new Date(orderDetail.createdAt).toLocaleDateString("vi-VN")}
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <span
              className={`flex items-center space-x-1 px-4 py-1 rounded-full text-sm font-medium ${
                orderDetail.isPaid
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {orderDetail.isPaid ? (
                <CheckCircle size={16} />
              ) : (
                <Truck size={16} />
              )}
              <span>{orderDetail.isPaid ? "Đã xác nhận" : "Chờ xác nhận"}</span>
            </span>
            <span
              className={`flex items-center space-x-1 px-4 py-1 rounded-full text-sm font-medium ${
                orderDetail.isDelivered
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              <Truck size={16} />
              <span>{orderDetail.isDelivered ? "Đã giao" : "Đang giao"}</span>
            </span>
          </div>
        </div>

        {/* Thông tin Thanh toán & Giao hàng */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Thanh Toán
            </h4>
            <p className="text-gray-600">
              <span className="font-medium">Phương thức:</span>{" "}
              {orderDetail.paymentMethod}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Trạng thái:</span>{" "}
              {orderDetail.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">
              Giao Hàng
            </h4>
            <p className="text-gray-600">
              <span className="font-medium">Phương thức:</span>{" "}
              {orderDetail.shippingMethod}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Địa chỉ:</span>{" "}
              {orderDetail.shippingAddress.address},{" "}
              {orderDetail.shippingAddress.city}
            </p>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="p-6 overflow-x-auto">
          <h4 className="text-lg font-medium text-gray-800 mb-4">Sản phẩm</h4>
          <table className="min-w-full table-auto divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {["Sản phẩm", "Giá", "SL"].map((th) => (
                  <th
                    key={th}
                    className="px-4 py-2 text-left text-sm font-medium text-gray-600"
                  >
                    {th}
                  </th>
                ))}
                <th className="px-4 py-2 text-center font-medium text-gray-600">
                  Tổng
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {orderDetail.orderItems.map((item) => (
                <tr
                  key={item.productId}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <Link
                      to={`/product/${item.productId}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {convertPrice(item.price)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.quantity}
                  </td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">
                    {convertPrice(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer link */}
        <div className="p-6 text-right">
          <Link
            to="/my-orders"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            ← Quay về Đơn hàng của tôi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
