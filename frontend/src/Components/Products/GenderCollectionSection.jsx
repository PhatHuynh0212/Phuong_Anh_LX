import { Link } from "react-router-dom";
import haiau from "../../assets/haiau.png";
import jotun from "../../assets/jotun.jpg";
import nippon from "../../assets/nippon.png";
import thehemoi from "../../assets/thehemoi.png";
import inter from "../../assets/international.jpg";

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
  {
    title: "Sơn International",
    img: inter,
    href: "/collections/all?brand=the-he-moi",
  },
];

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 bg-gray-50">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold uppercase text-center text-gray-800 mb-12 tracking-wide">
          Các dòng sơn chính
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            {
              title: "Sơn Hải Âu",
              desc: "Dòng sơn công nghiệp uy tín, chuyên dụng cho tàu biển và kết cấu thép, với độ bám dính và độ bền cao.",
            },
            {
              title: "Sơn Jotun",
              desc: "Lựa chọn hàng đầu cho nội – ngoại thất, nổi bật với khả năng chống ẩm mốc và giữ màu lâu dài.",
            },
            {
              title: "Sơn Nippon",
              desc: "Thương hiệu Nhật Bản với công nghệ tiên tiến, thân thiện với môi trường và an toàn cho sức khỏe.",
            },
            {
              title: "Sơn Thế Hệ Mới",
              desc: "Dòng sơn mới mẻ, hiện đại với giá thành hợp lý, phù hợp cho tàu biển và các công trình dân dụng.",
            },
            {
              title: "Sơn International",
              desc: "Thương hiệu thuộc bộ phận Sơn bảo vệ & Hàng hải của AkzoNobel – giải pháp sơn hiện đại, bền bỉ cho tàu biển.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-6 justify-center place-items-center">
          {collections.map(({ title, img, href }, index) => (
            <div
              key={title}
              className={`col-span-1 flex justify-center ${
                index == 0 ? "lg:col-span-2 lg:justify-center" : ""
              } ${index == 1 ? "lg:col-span-2 lg:justify-center" : ""} ${
                index == 2 ? "lg:col-span-2 lg:justify-center" : ""
              } ${index >= 3 ? "lg:col-span-3 lg:justify-center" : ""}`}
            >
              <Link
                to={href}
                className="relative block w-full max-w-sm overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-yellow-300 transition">
                    {title}
                  </h3>
                  <span className="inline-block mt-1 text-sm text-white underline opacity-80 group-hover:opacity-100">
                    Xem thêm →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
