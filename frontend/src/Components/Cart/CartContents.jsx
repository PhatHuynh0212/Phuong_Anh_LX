import { Minus, Plus, Trash2 } from "lucide-react";

const CartContents = () => {
  const cartProducts = [
    {
      productID: 1,
      name: "Jotun",
      size: "Lớn",
      color: "Đỏ",
      quantity: 1,
      price: 100,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productID: 2,
      name: "Hải Âu",
      size: "Nhỏ",
      color: "Xanh",
      quantity: 3,
      price: 150,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="h-[128px] flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4"
            />
            <div>
              <h3 className="">{product.name}</h3>
              <p className="text-xs md:text-base text-gray-500">
                Kích cỡ: {product.size} | Màu: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-2 text-xl font-medium">
                  <Minus size={14} />
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-2 text-xl font-medium">
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col items-end justify-between">
            <button>
              <Trash2 className="size-6 mb-auto text-red-600" />
            </button>
            <p className="text-sm md:text-base">
              {product.price.toLocaleString() + "đ"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
