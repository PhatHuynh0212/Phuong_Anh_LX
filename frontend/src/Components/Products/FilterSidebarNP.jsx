import { PaintBucket, X } from "lucide-react";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toParamFormat } from "../../utils";
import ReactDOM from "react-dom";

const productFilters = [
  {
    category: "Sơn trang trí",
    types: ["Sơn nội thất", "Sơn ngoại thất"],
  },
  {
    category: "Sơn dân dụng",
    types: ["Sơn lót", "Sơn phủ", "Sơn vạch đường"],
  },
  {
    category: "Sơn và chất phủ công nghiệp",
    types: ["Sơn lót", "Sơn giữa", "Sơn phủ", "Sơn chịu nhiệt"],
  },
];
const FilterSidebarNP = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const brand = searchParams.get("brand") || "nippon";
  const selectedCategory = searchParams.get("category") || "";
  const selectedType = searchParams.get("type") || "";

  const timeoutRef = useRef(null);

  const updateParams = (params) => {
    // Clear timeout cũ
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Đặt timeout mới
    timeoutRef.current = setTimeout(() => {
      setSearchParams(params);
    }, 200);
  };

  const handleCategoryClick = (category) => {
    updateParams({
      brand,
      category: toParamFormat(category),
    });
  };

  const handleTypeClick = (category, type) => {
    updateParams({
      brand,
      category: toParamFormat(category),
      type: toParamFormat(type),
    });
  };

  // Modal Content
  const modalContent = (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Overlay: bấm vào đây để đóng modal */}
        <div
          className="absolute inset-0 bg-black opacity-60 transition duration-300"
          onClick={toggleModal}
        ></div>
        {/* Nội dung Modal */}
        <div className="relative bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-[500px] transform transition-all duration-300">
          {/* Nút đóng modal */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleModal}
          >
            <X size={24} />
          </button>
          {/* Nội dung modal */}
          {/* Phần lựa chọn bảng màu */}
          <div className="border-gray-200 pr-4">
            <h3 className="font-semibold text-lg mb-4 uppercase text-gray-800">
              Chọn bảng màu
            </h3>
            <div className="space-y-2">
              <a
                href="https://nipponpaint.com.vn/vi/ma-mau-son/lustrous-pinks-reds"
                target="_blank"
                className={`block cursor-pointer px-3 py-2 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-600`}
              >
                Mã màu sơn
              </a>
              <a
                href="https://nipponpaint.com.vn/vi/mau-phoi-mau-nha"
                target="_blank"
                className={`block cursor-pointer px-3 py-2 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-600`}
              >
                Mẫu phối màu nhà
              </a>
              <a
                href="https://nipponpaint.com.vn/vi/mau-sac-phong-thuy"
                target="_blank"
                className={`block cursor-pointer px-3 py-2 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-600`}
              >
                Màu sắc phong thủy
              </a>
              <a
                href="https://nipponpaint.com.vn/vi/xu-huong-mau-sac"
                target="_blank"
                className={`block cursor-pointer px-3 py-2 rounded transition duration-200 hover:bg-blue-100 hover:text-blue-600`}
              >
                Xu hướng màu sắc
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 border-r w-60 bg-white shadow-sm">
      <h2 className="font-bold text-xl text-orange-600 mb-6 flex items-center justify-center space-x-2">
        <PaintBucket size={24} />
        <span>Nippon</span>
      </h2>

      {/* Color Table */}
      <div className="mb-6">
        <div className="font-semibold text-gray-700 mb-2 text-lg">Bảng màu</div>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-lg transition-colors hover:bg-red-600 focus:outline-none"
          onClick={toggleModal}
        >
          Xem bảng màu
        </button>
      </div>

      <div>
        <div className="font-semibold text-gray-700 mb-2 text-lg">Danh mục</div>
        {productFilters.map((cat) => {
          const isCategorySelected =
            toParamFormat(cat.category) === selectedCategory && !selectedType;
          return (
            <div key={cat.category} className="mb-4">
              <div
                className={`font-semibold cursor-pointer transition-colors ${
                  isCategorySelected
                    ? "text-blue-700 border-l-4 border-blue-700 pl-2"
                    : "text-gray-800 hover:text-blue-600"
                }`}
                onClick={() => handleCategoryClick(cat.category)}
              >
                {cat.category}
              </div>
              <ul className="pl-4 mt-1 space-y-1">
                {cat.types.map((type) => {
                  const isTypeSelected =
                    toParamFormat(cat.category) === selectedCategory &&
                    toParamFormat(type) === selectedType;
                  return (
                    <li
                      key={type}
                      onClick={() => handleTypeClick(cat.category, type)}
                      className={`cursor-pointer text-sm transition-colors ${
                        isTypeSelected
                          ? "text-blue-600 font-medium pl-2 border-l-2 border-blue-600"
                          : "text-gray-600 hover:text-blue-500 pl-2"
                      }`}
                    >
                      {type}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Model */}
      {isModalOpen && ReactDOM.createPortal(modalContent, document.body)}
    </div>
  );
};

export default FilterSidebarNP;
