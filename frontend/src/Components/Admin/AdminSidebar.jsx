// import { Boxes, ClipboardList, LogOut, Store, Users } from "lucide-react";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const AdminSidebar = () => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     navigate("/");
//   };

//   return (
//     <div className="p-6">
//       <div className="mb-6 flex justify-center">
//         <Link to="/admin" className="text-2xl font-medium">
//           Phương Anh LX
//         </Link>
//       </div>

//       <h2 className="text-xl font-medium mb-6 text-center">Quản lý hệ thống</h2>

//       <nav className="flex flex-col space-y-2">
//         <NavLink
//           to="/admin/users"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-3"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-3"
//           }
//         >
//           <Users className="size-5" />
//           <span>Người dùng</span>
//         </NavLink>
//         <NavLink
//           to="/admin/products"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-3"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-3"
//           }
//         >
//           <Boxes className="size-5" />
//           <span>Sản phẩm</span>
//         </NavLink>
//         <NavLink
//           to="/admin/orders"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-3"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-3"
//           }
//         >
//           <ClipboardList className="size-5" />
//           <span>Đơn hàng</span>
//         </NavLink>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-3"
//               : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-3"
//           }
//         >
//           <Store className="size-5" />
//           <span>Cửa hàng</span>
//         </NavLink>
//       </nav>

//       {/* Logout button */}
//       <div className="mt-6">
//         <button
//           onClick={handleLogout}
//           className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
//         >
//           <LogOut />
//           <span>Đăng xuất</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSidebar;

import { Boxes, ClipboardList, LogOut, Store, Users } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-full bg-white border-r shadow-sm p-6 flex flex-col justify-between">
      {/* Logo + Title */}
      <div>
        <div className="mb-8 text-center">
          <Link
            to="/admin"
            className="text-2xl font-bold text-blue-600 tracking-tight"
          >
            Phương Anh LX
          </Link>
          <p className="text-sm text-gray-400 mt-1">Bảng điều khiển</p>
        </div>

        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `py-2.5 px-4 rounded-lg flex items-center space-x-3 transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            <Users className="size-5" />
            <span>Người dùng</span>
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `py-2.5 px-4 rounded-lg flex items-center space-x-3 transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            <Boxes className="size-5" />
            <span>Sản phẩm</span>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `py-2.5 px-4 rounded-lg flex items-center space-x-3 transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            <ClipboardList className="size-5" />
            <span>Đơn hàng</span>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-2.5 px-4 rounded-lg flex items-center space-x-3 transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`
            }
          >
            <Store className="size-5" />
            <span>Cửa hàng</span>
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div className="pt-6 border-t">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition"
        >
          <LogOut className="size-5" />
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
