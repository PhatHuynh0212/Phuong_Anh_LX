import { Facebook, Instagram, Youtube } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-pa-red text-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.facebook.com/phuonganhlx"
            target="_blank"
            className="hover:text-gray-300"
          >
            <Facebook className="size-5" />
          </a>
          <a
            href="https://www.instagram.com/phuonganhlongxuyen/"
            target="_blank"
            className="hover:text-gray-300"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href="https://www.youtube.com/@phuonganhlongxuyen"
            target="_blank"
            className="hover:text-gray-300"
          >
            <Youtube className="size-5" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>Tư vấn - Giao hàng trên toàn quốc</span>
        </div>
        <div className="hidden md:flex text-sm flex-col">
          <a href="tel:+84946464672" className="hover:text-gray-300">
            0946 46 46 72
          </a>
          <a href="tel:+84855833833" className="hover:text-gray-300">
            0855 833 833
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
