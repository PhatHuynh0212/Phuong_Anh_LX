import { ListFilter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterSidebarHA from "../Components/Products/FilterSidebarHA";
import FilterSidebarJT from "../Components/Products/FilterSidebarJT";
// import SortOption from "./SortOption";
import ProductGrid from "../Components/Products/ProductGrid";
import FilterSidebarNP from "../Components/Products/FilterSidebarNP";
import FilterSidebarTHM from "../Components/Products/FilterSidebarTHM";

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get("brand");

  let SidebarComponent;

  switch (brand) {
    case "hai-au":
      SidebarComponent = FilterSidebarHA;
      break;
    case "jotun":
      SidebarComponent = FilterSidebarJT;
      break;
    case "nippon":
      SidebarComponent = FilterSidebarNP;
      break;
    case "the-he-moi":
      SidebarComponent = FilterSidebarTHM;
      break;
    default:
      SidebarComponent = null;
  }

  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // Close sidebar when click outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add event for click
    document.addEventListener("mousedown", handleClickOutside);
    // Clean event
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
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

      setProducts(fetchProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border-t border-b p-2 flex justify-center items-center"
      >
        <ListFilter className="mr-2" /> Lọc sản phẩm
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-60 bg-white border-r overflow-y-auto overflow-x-hidden transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        {SidebarComponent && <SidebarComponent />}
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl font-semibold uppercase mb-4">Các sản phẩm</h2>

        {/* Sort option */}
        {/* <SortOption /> */}

        {/* Product grid */}
        <ProductGrid products={products} height={"210vh"} />
      </div>
    </div>
  );
};

export default CollectionPage;
