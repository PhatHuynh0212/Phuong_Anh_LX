import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 123123,
      name: "Epoxy Hải Âu",
      name_type: "Epoxy",
      pro_code: "S-111",
    },
    {
      _id: 123111,
      name: "Sơn Lót Nippon",
      name_type: "Sơn lót",
      pro_code: "S-112",
    },
    {
      _id: 123222,
      name: "Sơn chống thấm Jotun",
      name_type: "Sơn PU",
      pro_code: "S-113",
    },
  ];

  const handleDelete = (productId) => {
    if (window.confirm("Xác nhận xóa sản phẩm.")) {
      console.log("Đã xóa sản phẩm có id: ", productId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Quản lý sản phẩm
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-[440px] w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 uppercase text-gray-600">
            <tr>
              <th className="px-6 py-4">Tên</th>
              <th className="px-6 py-4">Loại SP</th>
              <th className="px-6 py-4">Mã SP</th>
              <th className="px-6 py-4">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4">{product.name_type}</td>
                  <td className="px-6 py-4">{product.pro_code}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Link
                        to={`/admin/products/${product._id}/edit`}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded font-medium"
                      >
                        Chỉnh&nbsp;sửa
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded font-medium"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-gray-500 p-6 italic"
                >
                  Chưa có dữ liệu sản phẩm...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
