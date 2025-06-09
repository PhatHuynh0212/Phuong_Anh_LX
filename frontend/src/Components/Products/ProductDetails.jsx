import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductGrid from "./ProductGrid";
//import { convertPrice } from "../../utils";

const selectedProduct = {
  name: "Sơn Epoxy Hải Âu",
  price: 130000,
  originalPrice: 150000,
  description:
    "Sơn Epoxy được sản xuất trên cơ sở nhựa Epoxy, bột màu, dung môi hữu cơ, các phụ gia đặc biệt và chất đóng rắn.",
  brand: "Hải Âu",
  material: "Epoxy",
  size: ["1 lít", "5 lít", "20 lít"],
  colors: ["Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/200/300?random=1",
      altText: "Sơn Hải Âu",
    },
    {
      url: "https://picsum.photos/200/300?random=2",
      altText: "Sơn Hải Âu",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=3",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=4",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=5",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=6",
      },
    ],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Vui lòng chọn thể tích sản phẩm.");
      return;
    }

    setIsButtonDisable(true);

    setTimeout(() => {
      toast.success("Đã thêm vào giỏ hàng!");
      setIsButtonDisable(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row ">
          {/* Left thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`size-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main product"
                className="w-[80%] lg:w-[70%] mx-auto md:mx-0 h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Mobile thumbnail */}
          <div className="md:hidden flex overscroll-x-auto space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`size-16 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700 mb-2">Màu: Xám trắng</p>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 mb-2">Thể tích:</p>
              <div className="flex gap-2">
                {selectedProduct.size.map((size) => (
                  <button
                    key={size}
                    className={`px-2 py-2 rounded border transition-colors duration-200 ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-2">Số lượng:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => handleQuantityChange("minus")}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300 transition-colors duration-200"
                  onClick={() => handleQuantityChange("plus")}
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisable}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 transition-transform duration-200 ${
                isButtonDisable
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-black/85 active:scale-95"
              }`}
            >
              {isButtonDisable ? "Đang thêm..." : "THÊM VÀO GIỎ"}
            </button>

            {/* Hotline Box */}
            <div className="mt-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-4 rounded-lg text-center transform hover:scale-105 transition-transform duration-200 shadow-sm">
              <p className="text-blue-800 font-medium">
                Liên hệ hotline:{" "}
                <span className="underline">0946 46 46 72</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-semibold mb-4">
            Các sản phẩm liên quan
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
