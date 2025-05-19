import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const UserManagement = () => {
  const users = [
    {
      _id: 12311,
      name: "Phat Huynh",
      email: "phat@gmail.com",
      role: "admin",
      point: 22,
    },
    {
      _id: 12312,
      name: "Van Thien",
      email: "thien@gmail.com",
      role: "customer",
      point: 12,
    },
  ];

  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    point: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
      point: 0,
    });
  };

  const handleRoleChange = (userId, newRole) => {
    console.log({ id: userId, role: newRole });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Xác nhận xóa người dùng.")) {
      console.log("Đã xóa người dùng có id: ", userId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Quản lý người dùng
      </h2>

      {/* Form thêm người dùng */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Thêm người dùng
        </h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">Tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Tài khoản (Email)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Mật khẩu</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 mt-6 pr-4 flex items-center"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <Eye className="size-5 text-base-content/50" />
              ) : (
                <EyeOff className="size-5 text-base-content/50" />
              )}
            </button>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phân quyền
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="customer">Khách hàng</option>
              <option value="admin">Quản lý</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
            >
              Thêm người dùng
            </button>
          </div>
        </form>
      </div>

      {/* Danh sách người dùng */}
      <div className="bg-white shadow-md rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">Tên</th>
              <th className="px-6 py-4 text-left">Tài khoản</th>
              <th className="px-6 py-4 text-left">Điểm</th>
              <th className="px-6 py-4 text-left">Quyền</th>
              <th className="px-6 py-4 text-left">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.point}</td>
                <td className="px-6 py-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="border rounded px-3 py-1 bg-white"
                  >
                    <option value="customer">Khách hàng</option>
                    <option value="admin">Quản lý</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
