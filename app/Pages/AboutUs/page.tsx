import React from "react";
import Hero from "@/app/Components/Hero/Hero";
import Image from "next/image";
import { Images } from "@/public/Images/images";
import Navbar from "@/app/Components/Navbar/Navbar";
import bodyBg from "../../../public/secondSectionBg.svg";
import WhoWeAre from "./Components/WhoWeAre";
import HeroBg from "../../../public/Hero.jpg";
import { Text } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
import SizeAndFitTable from "./Components/SizeAndFitTable";
import FAQs from "./Components/FAQs";
function Page() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${bodyBg.src})`, // Note: Use .src for Next.js Image imports
          backgroundColor: "#FFFAF696",
        }}
      >
        <div className=" pt-[10px] lg:pb-[30px] pb-[10px]">
          <Navbar />
        </div>
        <Hero />
        <div id="our-story">
          <WhoWeAre />
        </div>
        <div className=" mt-[60px]">
          <div
            className="bg-cover bg-center bg-no-repeat h-[640px] w-10/12 m-auto "
            style={{
              backgroundImage: `url(${HeroBg.src})`, // Note: Use .src for Next.js Image imports
              backgroundColor: "#FFFAF696",
            }}
          ></div>
          <div className=" lg:w-10/12 m-auto w-11/12">
            <div className=" grid lg:grid-cols-2">
              <div className="  bg-[#E6DED8] grid items-center justify-center lg:mt-0 mt-[20px]">
                <div className=" w-10/12 m-auto pt-[20px] lg:pt-0 pb-[20px] lg:pb-0">
                  <div>
                    <Text className=" text-[14px]">OUR STORY</Text>
                    <div className={`${robotoSlab.className}`}>
                      <Text className=" text-[#BE1011] font-bold text-4xl mt-[20px]">
                        Designed to last.
                      </Text>
                    </div>
                  </div>
                  <div className="  mt-[20px]">
                    <Text className=" text-[#5B2A2E] leading-8">
                      At REGAL, we’re huge on longevity as much as we are on
                      trends. We want you to wear our pieces for years, even
                      decades, to come. That’s why we source the finest
                      materials and factories for our timeless products!
                    </Text>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={Images.designed}
                  alt=""
                  className=" flex-1 w-full"
                />
              </div>
            </div>
            <div className=" grid lg:grid-cols-2  mt-[20px] lg:mt-0">
              <div className=" w-full">
                <Image
                  src={Images.sustainability}
                  alt=""
                  className=" flex-1 w-full"
                />
              </div>
              <div className=" bg-[#E6DED8] grid items-center justify-center">
                <div className=" w-10/12 m-auto  pt-[20px] lg:pt-0  pb-[20px] lg:pb-0">
                  <div>
                    <Text className=" text-[14px]">OUR STORY</Text>
                    <div className={`${robotoSlab.className}`}>
                      <Text className=" text-[#BE1011] font-bold text-4xl mt-[20px]">
                        Sustainability
                      </Text>
                    </div>
                  </div>
                  <div className=" mt-[20px]">
                    <Text className=" text-[#5B2A2E] leading-8">
                      The fashion industry is one of the world’s biggest
                      contributors to waste, and in Nigeria, women often face
                      cluttered wardrobes, fast-changing trends, limited access
                      to affordable and sustainable options.
                    </Text>
                    <Text className=" text-[#5B2A2E] leading-8">
                      At Regal In Heirs, we champion sustainability in fashion,
                      with a focus on the realities and cultural identity of the
                      African woman.
                    </Text>
                    <Text className=" text-[#5B2A2E] leading-8">
                      Fashion with purpose. Our pieces are crafted from
                      eco-friendly materials, shaped by skilled artisans, and
                      designed to minimize waste. Each garment celebrates the
                      African woman, her culture, pride, and style while
                      honoring the planet.
                    </Text>
                    <Text className=" text-[#5B2A2E] leading-8">
                      We believe clothes can tell a better story, one of
                      rebirth, pride, and sustainability.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="size-fit" className="  lg:mt-[60px] mt-[40px]">
        <SizeAndFitTable />
      </div>
      <div id="faq" className=" lg:mt-[60px] mt-[40px]">
        <FAQs />
      </div>
    </div>
  );
}

export default Page;
