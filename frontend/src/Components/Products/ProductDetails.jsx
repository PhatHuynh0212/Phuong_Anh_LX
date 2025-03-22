const selectedProduct = {
  name: "Sơn Epoxy Hải Âu",
  price: 130000,
  originalPrice: 150000,
  description:
    "Sơn Epoxy được sản xuất trên cơ sở nhựa Epoxy, bột màu, dung môi hữu cơ, các phụ gia đặc biệt và chất đóng rắn.",
  brand: "Hải Âu",
  material: "Epoxy",
  size: ["Nhỏ", "Vừa", "Lớn"],
  colors: ["Black", "Red"],
  images: [
    {
      url: "../../assets/haiau.png",
      altText: "Sơn Hải Âu",
    },
    {
      url: "../../assets/haiau.png",
      altText: "Sơn Hải Âu",
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row ">
          {/* Left thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
