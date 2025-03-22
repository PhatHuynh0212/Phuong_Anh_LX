import { Link } from "react-router-dom";
import haiau from "../../assets/haiau.png";
import jotun from "../../assets/jotun.jpg";
import nippon from "../../assets/nippon.png";
import thehemoi from "../../assets/thehemoi.png";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 space-y-9 lg:px-0">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 uppercase">
          Các dòng sơn chính
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-2">
          Sơn Hải Âu – Dòng sơn công nghiệp uy tín, chuyên dụng cho tàu biển,
          kết cấu thép, với độ bám dính và độ bền cao.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-2">
          Sơn Jotun – Lựa chọn hàng đầu cho cả nội thất và ngoại thất, nổi bật
          với khả năng chống ẩm mốc và giữ màu lâu dài.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-2">
          Sơn Nippon – Thương hiệu sơn Nhật Bản với công nghệ tiên tiến, thân
          thiện với môi trường và an toàn cho sức khỏe.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-2">
          Sơn Thế Hệ Mới – Dòng sơn mới mẻ, hiện đại với giá thành hợp lý, phù
          hợp cho các công trình dân dụng và thương mại.
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Hai Au Collection */}
        <div className="relative flex-1 bg-cyan-200 overflow-hidden">
          <img
            src={haiau}
            alt="Hải âu"
            className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sơn Hải Âu
            </h2>
            <Link
              to="/collections/all?brand=haiau"
              className="text-gray-900 underline"
            >
              Xem thêm
            </Link>
          </div>
        </div>

        {/* Jotun Collection */}
        <div className="relative flex-1 overflow-hidden">
          <img
            src={jotun}
            alt="Jotun"
            className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sơn Jotun</h2>
            <Link
              to="/collections/all?brand=jotun"
              className="text-gray-900 underline"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Nippon Collection */}
        <div className="relative flex-1 bg-violet-200 overflow-hidden">
          <img
            src={nippon}
            alt="Nippon"
            className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sơn Nippon
            </h2>
            <Link
              to="/collections/all?brand=nippon"
              className="text-gray-900 underline"
            >
              Xem thêm
            </Link>
          </div>
        </div>

        {/* The He Moi Collection */}
        <div className="relative flex-1 bg-emerald-100 overflow-hidden">
          <img
            src={thehemoi}
            alt="Thế hệ mới"
            className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sơn Thế Hệ Mới
            </h2>
            <Link
              to="/collections/all?brand=thehemoi"
              className="text-gray-900 underline"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
