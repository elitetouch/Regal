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
import { robotoSlab } from "@/app/Components/Fonts/Font";
import { RegalIcons } from "@/public/Icons/Icons";
import { PressReleaseType } from "@/app/Pages/PressRelease/components/PressReleaseCard";
type ImageCarouselProps = {
  image: string;
  title: string;
  body: string;
};

type CarouselTypes = {
  data: ImageCarouselProps[];
};

export default function ImageSlider({ data }: CarouselTypes) {
  return (
    <div>
      <div className="relative w-full lg:grid hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          // centeredSlides
          loop
          initialSlide={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          className="w-full"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="group">
              <div className=" w-full text-white pb-[50px]">
                <Image src={item.image} alt="" className=" w-full" />

                <div className=" mt-[20px]">
                  <div className={`${robotoSlab.className} mt-[10px]`}>
                    <Text className=" text-3xl">{item.title}</Text>
                  </div>
                </div>
                <div className=" mt-[20px]">
                  <Text className=" text-[16px]">{item.body}</Text>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Navigation Buttons */}
        {/* <div className="flex justify-center gap-[80px] mt-20">
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
      </div> */}
      </div>
      <div className="relative w-full lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          // centeredSlides
          loop
          initialSlide={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          className="w-full"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="group">
              <div className=" w-full text-white pb-[50px]">
                <Image src={item.image} alt="" className=" w-full" />

                <div className=" mt-[20px]">
                  <div className={`${robotoSlab.className} mt-[10px]`}>
                    <Text className=" text-2xl lg:text-3xl">{item.title}</Text>
                  </div>
                </div>
                <div className=" mt-[20px]">
                  <Text className=" text-[16px]">{item.body}</Text>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Navigation Buttons */}
        {/* <div className="flex justify-center gap-[80px] mt-20">
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
      </div> */}
      </div>
    </div>
  );
}
