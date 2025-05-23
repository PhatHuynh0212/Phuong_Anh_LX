import { AlignJustify } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen">
      {/* Sidebar desktop */}
      <div className="hidden md:block w-64 bg-gray-900 text-white fixed top-0 left-0 h-full z-30">
        <AdminSidebar />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Slide-in sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-900 text-white h-full z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AdminSidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 md:ml-64 h-full">
        {/* Mobile header */}
        <div className="md:hidden flex p-4 bg-gray-900 text-white z-10">
          <button onClick={toggleSidebar}>
            <AlignJustify />
          </button>
          <h1 className="ml-4 text-xl font-medium">Quản lý hệ thống</h1>
        </div>

        {/* Outlet content */}
        <div className="flex-1 overflow-auto p-2 sm:p-6 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
