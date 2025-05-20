import { X } from "lucide-react";
import { useEffect, useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    pro_code: "",
    brand: "",
    category: "",
    sizes: [],
    desc: "",
    features: [],
    color: "",
    images: [
      {
        url: "https://picsum.photos/200?random=1",
      },
      {
        url: "https://picsum.photos/200?random=2",
      },
    ],
  });

  const [featuresText, setFeaturesText] = useState("");

  useEffect(() => {
    setFeaturesText(productData.features.join(", "));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        url: URL.createObjectURL(file),
        file: file,
      };
      setProductData((prev) => ({
        ...prev,
        images: [...prev.images, newImage],
      }));
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setProductData((prev) => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);

    // Nếu có file mới => xử lý upload tại đây
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Chỉnh sửa sản phẩm
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Tên sản phẩm
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Mã sản phẩm
            </label>
            <input
              type="text"
              name="pro_code"
              value={productData.pro_code}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Thương hiệu
            </label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-gray-700">
              Phân loại
            </label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-3"
              required
            />
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Màu sơn
          </label>
          <input
            type="text"
            name="color"
            value={productData.color}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl p-3"
            required
          />
        </div>

        {/* Sizes */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Dung tích (Cách nhau bằng dấu phẩy)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-xl p-3"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Mô tả
          </label>
          <textarea
            name="desc"
            value={productData.desc}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-xl p-3"
            required
          />
        </div>

        {/* Features */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Đặc trưng (Cách nhau bằng dấu phẩy)
          </label>
          <textarea
            name="features"
            value={featuresText}
            onChange={(e) => {
              setFeaturesText(e.target.value);
              setProductData({
                ...productData,
                features: e.target.value.split(",").map((f) => f.trim()),
              });
            }}
            className="w-full border border-gray-300 rounded-xl p-3"
            rows={2}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">
            Tải ảnh lên
          </label>
          <label className="inline-block cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition duration-200 shadow-md">
            Chọn ảnh
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </label>

          <div className="flex gap-4 mt-4 flex-wrap">
            {productData.images.map((image, index) => (
              <div
                key={index}
                className="relative w-24 h-24 rounded-lg shadow-md"
              >
                <img
                  src={image.url}
                  alt={`Ảnh sản phẩm ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full size-6 flex items-center justify-center hover:bg-red-600"
                  title="Xoá ảnh"
                >
                  <X className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-green-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-green-700 transition duration-200"
          >
            Cập nhật sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;
