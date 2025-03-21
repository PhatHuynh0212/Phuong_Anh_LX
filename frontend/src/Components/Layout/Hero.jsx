import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hero1 from "../../assets/hero-1.jpg";
import hero2 from "../../assets/hero-2.jpg";
import hero3 from "../../assets/hero-3.jpg";
import hero4 from "../../assets/hero-4.jpg";
import hero5 from "../../assets/hero-5.jpg";
import hero6 from "../../assets/hero-6.jpg";
import hero7 from "../../assets/hero-7.jpg";
import hero8 from "../../assets/hero-8.jpg";

const slides = [
  { image: hero1 },
  { image: hero2 },
  { image: hero3 },
  { image: hero4 },
  {
    image: hero5,
    title: "Vận chuyển",
    subtitle: "Nhanh Chóng\nChuyên Nghiệp",
  },
  {
    image: hero6,
    title: "Dòng sơn",
    subtitle: "Sà Lan & Tàu Biển",
  },
  {
    image: hero7,
    title: "Dòng sơn",
    subtitle: "Tàu Ghe",
  },
  {
    image: hero8,
    title: "Dòng sơn",
    subtitle: "Xây dựng",
  },
];

const Hero = () => {
  // return (
  //   <section className="relative">
  //     <Swiper
  //       modules={[Autoplay, Pagination, Navigation]}
  //       loop={true}
  //       autoplay={{ delay: 5000, disableOnInteraction: false }}
  //       speed={600}
  //       pagination={{ clickable: true }}
  //       navigation
  //       className="w-full h-[400px] md:h-[580px]"
  //     >
  //       {slides.map((slide, index) => (
  //         <SwiperSlide key={index} className="relative">
  //           <img
  //             src={slide.image}
  //             alt={`Slide ${index + 1}`}
  //             className="w-full h-full object-cover"
  //             loading="lazy"
  //           />
  //           {/* Check desc */}
  //           {slide.title && slide.subtitle && (
  //             <div className="absolute bottom-10 left-20 bg-white/70 p-5 rounded-lg shadow-md max-w-[">
  //               <h3 className="text-blue-600 text-[35px] font-semibold">
  //                 {slide.title}
  //               </h3>
  //               <h2 className="text-blue-800 text-[50px] font-bold uppercase whitespace-pre-line">
  //                 {slide.subtitle}
  //               </h2>
  //             </div>
  //           )}
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </section>
  // );

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={600}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-[400px] md:h-[580px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Kiểm tra nếu có title và subtitle mới hiển thị box */}
            {slide.title && slide.subtitle && (
              <div className="absolute bottom-5 md:bottom-10 left-5 md:left-20 bg-white/70 p-3 md:p-5 rounded-lg shadow-md max-w-[90%] md:max-w-[530px]">
                <h3 className="text-blue-600 text-[18px] md:text-[35px] font-semibold">
                  {slide.title}
                </h3>
                <h2 className="text-blue-800 text-[25px] md:text-[45px] font-bold uppercase whitespace-pre-line">
                  {slide.subtitle}
                </h2>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
