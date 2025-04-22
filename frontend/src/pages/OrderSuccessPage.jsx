import { convertPrice } from "../utils";

const checkout = {
  _id: "123123",
  createAt: new Date(),
  checkoutItems: [
    {
      productId: 1,
      name: "Jotun",
      size: "Lớn",
      color: "Đỏ",
      quantity: 1,
      price: 100000,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Hải Âu",
      size: "Nhỏ",
      color: "Xanh",
      quantity: 3,
      price: 150000,
      image: "https://picsum.photos/200?random=2",
    },
  ],
  shippingAddress: {
    address: "86 Trieu Thi Trinh, Binh Khanh",
    city: "Long Xuyen",
  },
};

const OrderSuccessPage = () => {
  const estimateDelivery = (createAt) => {
    const orderDate = new Date(createAt);
    orderDate.setDate(orderDate.getDate() + 4);
    return orderDate.toLocaleDateString("vi-VN");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8 uppercase">
        Đặt hàng thành công!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order id and date */}
            <div>
              <h2 className="text-xl font-semibold">Mã đơn: {checkout._id}</h2>
              <p className="text-gray-500">
                Ngày tạo:{" "}
                {new Date(checkout.createAt).toLocaleDateString("vi-VN")}
              </p>
            </div>

            {/* Estimate delivery */}
            <div>
              <p className="text-emerald-700 text-sm">Dự kiến giao hàng:</p>
              <p className="text-emerald-700 text-sm text-right">
                {estimateDelivery(checkout.createAt)}
              </p>
            </div>
          </div>

          {/* Order */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt="san pham"
                  className="size-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">{convertPrice(item.price)}</p>
                  <p className="text-sm text-gray-500">
                    Số lượng: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment & Delivery */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment */}
            <div>
              <h4 className="text-lg font-semibold mb-2">
                Phương thức thanh toán
              </h4>
              <p className="text-gray-600">Trả sau</p>
            </div>

            {/* Delivery */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Địa chỉ:</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">{checkout.shippingAddress.city}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSuccessPage;
