import { Link } from "react-router-dom";
//import { convertPrice } from "../../utils";

const ProductGrid = ({ products, height }) => {
  return (
    <div
      className={`${
        height ? `h-[${height}]` : ""
      } grid grid-cols-2 md:grid-cols-4 gap-6 overflow-y-auto`}
    >
      {products?.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-full h-70 mb-4">
              <img
                src={product.image[0].url}
                alt={product.image[0].altText || product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-sm md:text-base lg:text-lg mb-2">
              {product.name}
            </h3>
            {/* <p className="text-sm text-gray-500 font-medium tracking-tighter">
              {convertPrice(product.price)}
            </p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
