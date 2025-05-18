import { Link } from "react-router-dom";
import { convertPrice } from "../utils";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 12311,
      user: {
        name: "Phat Huynh",
      },
      totalPrice: 220000,
      status: "Đang chờ",
    },
    {
      _id: 123132,
      user: {
        name: "Van Thien",
      },
      totalPrice: 450000,
      status: "Đã giao",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">Quản lý hệ thống</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Doanh thu</h2>
          <p className="text-2xl">{convertPrice(1000000)}</p>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Tổng đơn hàng</h2>
          <p className="text-2xl">120</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Quản lý đơn hàng
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Tổng sản phẩm</h2>
          <p className="text-2xl">542</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            Quản lý sản phẩm
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Đơn hàng gần đây</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
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
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4">{convertPrice(order.totalPrice)}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
