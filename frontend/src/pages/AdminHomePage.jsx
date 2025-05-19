import { Link } from "react-router-dom";
import { convertPrice } from "../utils";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 12311,
      user: { name: "Phat Huynh" },
      totalPrice: 220000,
      status: "Đang chờ",
    },
    {
      _id: 123132,
      user: { name: "Van Thien" },
      totalPrice: 450000,
      status: "Đã giao",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Trang Quản Trị</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-medium text-gray-600">Doanh thu</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {convertPrice(1000000)}
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-medium text-gray-600">Tổng đơn hàng</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
          <Link
            to="/admin/orders"
            className="inline-block mt-3 text-sm text-blue-500 hover:underline"
          >
            Quản lý đơn hàng →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-lg font-medium text-gray-600">Tổng sản phẩm</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">542</p>
          <Link
            to="/admin/products"
            className="inline-block mt-3 text-sm text-blue-500 hover:underline"
          >
            Quản lý sản phẩm →
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Đơn hàng gần đây
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-xs uppercase text-gray-600">
              <tr>
                <th className="px-4 py-3">Mã đơn</th>
                <th className="px-4 py-3">Người dùng</th>
                <th className="px-4 py-3">Tổng tiền</th>
                <th className="px-4 py-3">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-t hover:bg-gray-50 transition cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium">{order._id}</td>
                    <td className="px-6 py-4">{order.user.name}</td>
                    <td className="px-6 py-4">
                      {convertPrice(order.totalPrice)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          order.status === "Đã giao"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    Không có đơn hàng nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
