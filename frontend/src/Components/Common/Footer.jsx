import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t pt-12 pb-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Bản tin</h3>
          <p className="text-gray-500 mb-4">
            Hãy trở thành người đầu tiên biết về các sản phẩm mới và ưu đãi trực
            tuyến.
          </p>
          <p className="text-sm font-medium text-gray-600 mb-6">
            Đăng ký để mua sản phẩm và tư vấn.
          </p>

          {/* Newsletter form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Nhập email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            ></input>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Đăng&nbsp;ký
            </button>
          </form>
        </div>

        {/* Store links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Cửa hàng</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Hải Âu
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Jotun
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Nippon
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Thế Hệ Mới
              </Link>
            </li>
          </ul>
        </div>

        {/* Support links */}
        <div>
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Liên hệ chúng tôi
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-500 transition-colors">
                  Địa chỉ
                </Link>
              </li>
            </ul>
            {/* Google Map embed */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1153649995917!2d105.41323327467775!3d10.412411289715063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a72b7ddeec14d%3A0x3de9a95be70cf03a!2zQ8O0bmcgdHkgVE5ISCBQaMawxqFuZyBBbmggTG9uZyBYdXnDqm4!5e0!3m2!1svi!2s!4v1742551543886!5m2!1svi!2s"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Mạng xã hội</h3>
          <div className="flex items-center space-x-4 mb-5">
            <a
              href="https://www.facebook.com/phuonganhlx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="/sm_icon/facebook.png"
                alt="facebook"
                className="size-7"
              />
            </a>
            <a
              href="https://www.instagram.com/phuonganhlongxuyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="/sm_icon/instagram.png"
                alt="instagram"
                className="size-8"
              />
            </a>
            <a
              href="https://www.tiktok.com/@phuonganhlongxuyen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="/sm_icon/tik-tok.png"
                alt="tik-tok"
                className="size-6"
              />
            </a>
            <a
              href="https://www.youtube.com/@phuonganhlongxuyen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="/sm_icon/youtube.png"
                alt="youtube"
                className="size-8"
              />
            </a>
          </div>
          <div className="flex items-center space-x-5 mb-5">
            <a
              href="https://twitter.com/phuonganh_lx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="/sm_icon/twitter.png"
                alt="twitter"
                className="size-6"
              />
            </a>
            <a
              href="https://www.pinterest.com/phuonganhlongxuyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="/sm_icon/pinterest.png"
                alt="pinterest"
                className="size-7"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/phuonganhlongxuyen/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <img
                src="/sm_icon/linkedin.png"
                alt="linkedin"
                className="size-7"
              />
            </a>
          </div>
          <h3 className="text-lg text-gray-800 mb-2">Liên hệ</h3>
          <div className="flex flex-col justify-center gap-2 text-sm">
            <p>
              <Phone className="size-4 inline-block mr-2" />
              0946-46-46-72
            </p>
            <p>
              <Phone className="size-4 inline-block mr-2" />
              0855-833-833
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container mx-auto mt-12 pt-6 px-4 lg:px-0 border-t border-gray-200">
        <p className="text-gray-500 text-sm text-center tracking-tighter">
          Copyright 2025 © Phương Anh Long Xuyên
        </p>
      </div>
    </footer>
  );
};

export default Footer;
