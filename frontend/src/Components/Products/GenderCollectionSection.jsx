import { Link } from "react-router-dom";
import haiau from "../../assets/haiau.png";
import jotun from "../../assets/jotun.jpg";
import nippon from "../../assets/nippon.png";
import thehemoi from "../../assets/thehemoi.png";

const collections = [
  {
    title: "Sơn Hải Âu",
    img: haiau,
    href: "/collections/all?brand=hai-au",
  },
  {
    title: "Sơn Jotun",
    img: jotun,
    href: "/collections/all?brand=jotun",
  },
  {
    title: "Sơn Nippon",
    img: nippon,
    href: "/collections/all?brand=nippon",
  },
  {
    title: "Sơn Thế Hệ Mới",
    img: thehemoi,
    href: "/collections/all?brand=the-he-moi",
  },
];

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 px-4 lg:px-0">
        <h2 className="text-4xl font-bold uppercase text-center text-gray-800 mb-10">
          Các dòng sơn chính
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Sơn Hải Âu</h3>
            <p className="text-gray-600">
              Dòng sơn công nghiệp uy tín, chuyên dụng cho tàu biển và kết cấu
              thép, với độ bám dính và độ bền cao.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Sơn Jotun</h3>
            <p className="text-gray-600">
              Lựa chọn hàng đầu cho nội – ngoại thất, nổi bật với khả năng chống
              ẩm mốc và giữ màu lâu dài.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Sơn Nippon</h3>
            <p className="text-gray-600">
              Thương hiệu Nhật Bản với công nghệ tiên tiến, thân thiện với môi
              trường và an toàn cho sức khỏe.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Sơn Thế Hệ Mới
            </h3>
            <p className="text-gray-600">
              Dòng sơn mới mẻ, hiện đại với giá thành hợp lý, phù hợp cho tàu
              biển và các công trình dân dụng.
            </p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map(({ title, img, href }) => (
          <Link
            key={title}
            to={href}
            className="relative block overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Image */}
            <img
              src={img}
              alt={title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
            {/* Text */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition">
                {title}
              </h3>
              <span className="inline-block mt-1 text-sm text-white underline opacity-80 group-hover:opacity-100">
                Xem thêm →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GenderCollectionSection;
