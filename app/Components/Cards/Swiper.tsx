"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { robotoSerif } from "@/app/Components/Fonts/Font";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { RegalIcons } from "@/public/Icons/Icons";

type ImageCarouselProps = {
  name: string;
  feedback: string;
};

type CarouselTypes = {
  data: ImageCarouselProps[];
};

export default function CardCarousel({ data }: CarouselTypes) {
  return (
    <div>
      <div className="relative lg:grid hidden w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides
          loop
          initialSlide={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          className="w-full h-[300px]"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="group">
              <div
                className="
          h-full rounded-lg p-[20px] px-5
          bg-white transition-all duration-300
          group-[.swiper-slide-active]:bg-[#FFF1F0]
          group-[.swiper-slide-active]:text-[#BE1011]
        "
              >
                <div>
                  <Image alt="" src={RegalIcons.semiColon} />
                </div>
                <div className={`${robotoSerif.className}`}>
                  <Text className={`pt-[20px] font-bold text-[20px]`}>
                    {item.name}
                  </Text>
                </div>

                <Text className="pt-[20px]">{item.feedback}</Text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Navigation Buttons */}
        <div className="flex justify-center gap-[80px] mt-20">
          <button
            style={{
              backgroundColor: "white",
            }}
            className="swiper-prev w-10 h-10 rounded-lg 
                     bg-white text-black shadow-md 
                     flex items-center justify-center 
                      hover:bg-gray-100 transition"
          >
            <Text className=" text-[30px]">‹</Text>
          </button>

          <button
            style={{
              backgroundColor: "white",
            }}
            className="swiper-next w-10 h-10 rounded-lg 
                     bg-white text-black shadow-md 
                     flex items-center justify-center 
                     text-[28px] hover:bg-gray-100 transition"
          >
            <Text className=" text-[30px]">›</Text>
          </button>
        </div>
      </div>
      <div className="relative w-full lg:hidden grid">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides
          loop
          initialSlide={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          className="w-full h-[300px]"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="group">
              <div
                className="
          h-full rounded-lg p-[20px] px-5
          bg-white transition-all duration-300
          group-[.swiper-slide-active]:bg-[#FFF1F0]
          group-[.swiper-slide-active]:text-[#BE1011]
        "
              >
                <div>
                  <Image alt="" src={RegalIcons.semiColon} />
                </div>
                <div className={`${robotoSerif.className}`}>
                  <Text className={`pt-[20px] font-bold text-[20px]`}>
                    {item.name}
                  </Text>
                </div>

                <Text className="pt-[20px]">{item.feedback}</Text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Navigation Buttons */}
        <div className="flex justify-center lg:gap-[80px] gap-[60px] lg:mt-20 mt-[20px]">
          <button
            style={{
              backgroundColor: "white",
            }}
            className="swiper-prev w-10 h-10 rounded-lg 
                     bg-white text-black shadow-md 
                     flex items-center justify-center 
                      hover:bg-gray-100 transition"
          >
            <Text className=" text-[30px]">‹</Text>
          </button>

          <button
            style={{
              backgroundColor: "white",
            }}
            className="swiper-next w-10 h-10 rounded-lg 
                     bg-white text-black shadow-md 
                     flex items-center justify-center 
                     text-[28px] hover:bg-gray-100 transition"
          >
            <Text className=" text-[30px]">›</Text>
          </button>
        </div>
      </div>
    </div>
  );
}
