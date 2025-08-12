import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User login:", { account, password });
  };

  return (
    <div className="flex w-full justify-center items-center p-8 md:p-12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
      >
        <div className="flex justify-center mb-6">
          <h2 className="text-xl font-medium">Phương Anh LX</h2>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Xin chào! 👋</h2>
        <p className="text-center mb-6 text-sm sm:text-base">
          Nhập tài khoản và mật khẩu để đăng nhập
        </p>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Email / Sđt *
          </label>
          <input
            type="text"
            value={account}
            placeholder="Nhập email hoặc sđt..."
            onChange={(e) => {
              setAccount(e.target.value);
            }}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold mb-2">Mật khẩu *</label>
          <input
            type={showPass ? "text" : "password"}
            value={password}
            placeholder="Nhập mật khẩu..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full p-2 border rounded"
          />
          <button
            type="button"
            className="absolute inset-y-0 top-7 right-0 pr-4 flex items-center"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <EyeOff className="size-5 text-base-content/50" />
            ) : (
              <Eye className="size-5 text-base-content/50" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800"
        >
          Đăng nhập
        </button>
        <p className="mt-6 text-center text-sm">
          Bạn chưa có tài khoản?{" "}
          <Link to="/register" className="text-blue-500 py-2">
            Đăng ký
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
