import Hero from "../Components/Layout/Hero";
import FeatureCollection from "../Components/Products/FeatureCollection";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";
import ProductGrid from "../Components/Products/ProductGrid";

const placeholderProducts = [
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
  {
    _id: 1,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=7",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=8",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=9",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 1",
    price: 100000,
    image: [
      {
        url: "https://picsum.photos/200/300?random=10",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Product Details */}
      <h2 className="text-3xl text-center font-bold mb-4">CHI TIẾT MUA HÀNG</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          CÁC SẢN PHẨM KHÁC
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeatureCollection />
    </div>
  );
};

export default Home;
