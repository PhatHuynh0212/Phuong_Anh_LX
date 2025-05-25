import { convertPrice } from "../../utils";

function OrderManagement() {
  const orders = [
    {
      _id: 123123,
      user: {
        name: "Phat Huynh",
      },
      totalPrice: 120000,
      status: "Đang xử lý",
    },
  ];

  const handleStatusChange = (orderId, status) => {
    console.log({ id: orderId, status });
  };

  const handleTotalPriceChange = () => {
    const input = window.prompt("Vui lòng nhập số tiền:");
    if (input !== null) {
      const amount = parseFloat(input);
      if (isNaN(amount) || amount <= 0) {
        alert("Vui lòng nhập một số hợp lệ lớn hơn 0.");
      } else {
        console.log("Số tiền đã nhập:", amount);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        📦 Quản lý đơn hàng
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-4 text-left">Mã đơn</th>
              <th className="px-6 py-4 text-left">Khách hàng</th>
              <th className="px-6 py-4 text-left">Tổng tiền</th>
              <th className="px-6 py-4 text-left">Trạng thái</th>
              <th className="px-6 py-4 text-left">Chức năng</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="px-6 py-4">{order.user.name}</td>
                  <td className="px-6 py-4">
                    {convertPrice(order.totalPrice)}
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="w-full rounded-lg border-gray-300 bg-white p-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="Processing">Đang xử lý</option>
                      <option value="Shipped">Đang giao</option>
                      <option value="Delivered">Đã giao</option>
                      <option value="Cancelled">Hủy đơn</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-green-500 hover:bg-green-600 text-white font-medium px-3 py-2 rounded-xl shadow"
                    >
                      Đã&nbsp;giao
                    </button>
                    <button
                      onClick={handleTotalPriceChange}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-2 rounded-xl shadow"
                    >
                      Nhập&nbsp;tiền
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  Không có đơn hàng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManagement;
