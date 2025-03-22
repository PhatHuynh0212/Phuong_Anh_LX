import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Products/GenderCollectionSection";
import NewArrivals from "../Components/Products/NewArrivals";
import ProductDetails from "../Components/Products/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Product Details */}
      <h2 className="text-3xl text-center font-bold mb-4">Chi tiết mua hàng</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;
