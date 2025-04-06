import { Link } from "react-router-dom";
import feature from "../../assets/feature.jpg";

const FeatureCollection = () => {
  return (
    <section className="py-16 px-4 lg-px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* Left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Chào mừng đến với Phương Anh Long Xuyên
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-justify">
            Đại lý nước sơn Phương Anh – Long Xuyên. Được sáng lập bởi hai vợ
            chồng Huỳnh Văn Hiền và Nguyễn Thị Thủy Ngân – những người từng gắn
            bó với nghề đi sà lan, đại lý ra đời từ khát vọng vươn lên và làm
            chủ chính mình.
            <br />
            Từ kinh nghiệm thực tế và sự am hiểu đặc thù miền sông nước, Phương
            Anh chuyên cung cấp các dòng sơn nước và sơn công nghiệp chất lượng,
            phục vụ đa dạng nhu cầu xây dựng và sửa chữa.
            <br />
            Với uy tín, tận tâm và tinh thần không ngừng vươn lên, Phương Anh
            đang dần khẳng định vị trí là địa chỉ tin cậy cho người dân Long
            Xuyên và khu vực lân cận.
          </p>
          <Link
            to="collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Xem thêm
          </Link>
        </div>

        {/* Right content */}
        <div className="lg:w-1/2">
          <img
            src={feature}
            alt="CEO PALX"
            className="w-full h-full object-cover sm:rounded-tl-3xl sm:rounded-tr-3xl lg:sm:rounded-none lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureCollection;
