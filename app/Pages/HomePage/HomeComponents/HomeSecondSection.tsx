"use client";
import { Button } from "@chakra-ui/react";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import secondSectionBg from "../../../../public/secondSectionBg.svg";
import { Text } from "@chakra-ui/react";
import SubHeader from "@/app/Components/Texts/SubHeader";
import HomeCard from "@/app/Components/Cards/HomeCard";
import { HomeCardData } from "@/app/Components/Data/HomeCardData";
import Image from "next/image";
import { RegalIcons } from "@/public/Icons/Icons";
import Refitted from "./Refitted";
import { Routes } from "@/app/Components/RouteFunctions";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
export const RegalCollection = ({
  bestSelling,
  seeAll,
}: {
  bestSelling?: boolean;
  seeAll?: boolean;
}) => {
  const router = useRouter();
  return (
    <div className="">
      {/* <Text>Heeeyyyyyy</Text> */}
      <div>
        <HomepageHeader
          style={{
            textAlign: "center",
          }}
        >
          {bestSelling ? "Best Selling" : " Regal Collection"}
        </HomepageHeader>

        <SubHeader
          children={
            bestSelling
              ? "Get in on the trend with our curated selection of best-selling styles."
              : "For women who are crowned in Royalty"
          }
          style={{
            color: "#5B2A2E",
            textAlign: "center",
            // marginTop : 10
          }}
        />
      </div>
      {!seeAll && (
        <div className=" lg:grid  lg:pt-[40px] pt-[30px] w-11/12 lg:w-11/12 m-auto ">
          <div className="relative w-full lg:grid hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={3}
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
              {HomeCardData?.map((item, index) => (
                <SwiperSlide key={index} className="group pb-[70px]">
                  <div key={index} className=" grid w-full justify-center ">
                    <HomeCard
                      imagez={item.clotheImage}
                      rating={item.rating}
                      prices={item.price}
                      cardHeader={item.clotheName}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="relative w-full lg:hidden grid">
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
              {HomeCardData?.map((item, index) => (
                <SwiperSlide key={index} className="group pb-[70px]">
                  <div key={index} className=" grid w-full justify-center ">
                    <HomeCard
                      imagez={item.clotheImage}
                      rating={item.rating}
                      prices={item.price}
                      cardHeader={item.clotheName}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
      {seeAll && (
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-y-[20px] gap-x-[50px]  lg:pt-[40px] pt-[30px] w-10/12 lg:w-11/12 m-auto ">
          {HomeCardData?.map((item, index) => (
            <div key={index} className="group pb-[30px]">
              <div key={index} className=" grid w-full justify-center ">
                <HomeCard
                  imagez={item.clotheImage}
                  rating={item.rating}
                  prices={item.price}
                  cardHeader={item.clotheName}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {!seeAll && (
        <div className=" grid justify-center mt-[50px]">
          <Button
            onClick={() => router.push(Routes.SeeAll)}
            bg=" transparent"
            border="2px solid #5B2A2E"
            h="50px"
            w="150px"
          >
            <div className=" flex items-center gap-x-[10px]">
              <Text className=" text-[18px]" color="#5B2A2E">
                See all
              </Text>
              <Image alt="" src={RegalIcons.rightArrow} />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

function HomeSecondSection() {
  return (
    <div className="grid gap-y-[60px] ">
      <div
        className="   bg-cover bg-center bg-no-repeat pb-[50px] pt-[60px]"
        style={{
          backgroundImage: `url(${secondSectionBg.src})`,
          backgroundColor: "#FFFAF696",
          // minHeight: "90vh",
        }}
      >
        <div className=" ">
          <RegalCollection />
        </div>
      </div>
      <div>
        <div className="">
          <Refitted />
        </div>
      </div>
    </div>
  );
}

export default HomeSecondSection;
