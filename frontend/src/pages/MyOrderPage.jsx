import { useEffect, useState } from "react";
import { convertPrice } from "../utils";

const MyOrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching order
    setTimeout(() => {
      const mockOrder = [
        {
          _id: "12345",
          createAt: new Date(),
          shippingAddress: {
            city: "Long Xuyen",
            country: "Vietnam",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100000,
          isPaid: true,
        },
        {
          _id: "32147",
          createAt: new Date(),
          shippingAddress: {
            city: "Ho Chi Minh",
            country: "Vietnam",
          },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 250000,
          isPaid: false,
        },
      ];

      setOrders(mockOrder);
    }, 1000);
  }, []);

  return (
    <div className="max-w-7xl mx-auto sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Đơn hàng của tôi</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              {/* <th className="px-4 py-2 sm:py-3">Ảnh</th> */}
              <th className="px-4 py-2 sm:py-3">ID đơn</th>
              <th className="px-4 py-2 sm:py-3">Thời gian tạo</th>
              <th className="px-4 py-2 sm:py-3">Địa chỉ</th>
              <th className="px-4 py-2 sm:py-3">Sản phẩm</th>
              <th className="px-4 py-2 sm:py-3">Giá</th>
              <th className="px-4 py-2 sm:py-3">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  {/* <td className="px-2 py-2 sm:px-4 sx:py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="size-10 sm:size-12 objet-cover rounded-lg"
                    />
                  </td> */}
                  <td className="px-2 py-2 sm:px-4 sx:py-4 text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sx:py-4">
                    {new Date(order.createAt).toLocaleDateString()}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sx:py-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sx:py-4">
                    {order.orderItems.length}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sx:py-4">
                    {convertPrice(order.totalPrice)}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sx:py-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  Bạn chưa có đơn hàng nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
