"use client";
import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Image from "next/image";
import RegalBackground from "../../../public/clearHeroImage.svg";
import HorizontalLine from "../../../public/HorizontalLine.svg";
import { RegalIcons } from "@/public/Icons/Icons";
import { rufina } from "@/app/Components/Fonts/Font";
import { robotoSlab } from "@/app/Components/Fonts/Font";
import { Button, Text } from "@chakra-ui/react";
import blurBg from "../../../public/blurBg.svg";
import RegalText from "../../../public/RegalText.svg";
import { IconButton } from "@chakra-ui/react";
import HomeSecondSection from "./HomeComponents/HomeSecondSection";
import ExclusiveOrder from "./HomeComponents/ExclusiveOrder";
import HowItWorks from "./HomeComponents/HowItWorks";
import Feedback from "./HomeComponents/Feedback";
import { useRouter } from "next/navigation";
import { Routes } from "@/app/Components/RouteFunctions";
import GetInTouchForm from "../GetInTouch/components/GetInTouchForm";
const HeroComponent = () => {
  const socialLinks = [
    {
      src: RegalIcons.facebookBox,
      url: "https://www.facebook.com/regalinheirs",
      alt: "Facebook",
    },
    {
      src: RegalIcons.twitterBox,
      url: "https://twitter.com/regalinheirs",
      alt: "Twitter",
    },
    {
      src: RegalIcons.youtubeBox,
      url: "https://www.youtube.com/@regalinheirs",
      alt: "YouTube",
    },
    {
      src: RegalIcons.instaBox,
      url: "https://www.instagram.com/regalinheirs",
      alt: "Instagram",
    },
  ];

  return (
    <div className="relative">
      <div className=" absolute left-1 lg:top-1 top-4">
        <div className=" grid justify-center">
          <div
            className={` leading-7 font-semibold text-center text-[22px] text-[#7E3D3E] ${rufina.className}`}
          >
            <Image src={RegalText} alt="" className=" w-[16px] lg:w-fit" />
          </div>
        </div>
        <div className=" grid justify-center lg:pt-[5px] pt-[2px]">
          <div className=" lg:h-[98px] h-[50px] w-[2px] bg-[#7E3D3E] ml-[2px]"></div>
          {/* <Image src={HorizontalLine} alt="" /> */}
        </div>
        <div className=" pt-[5px]">
          <div className=" flex-col">
            {socialLinks.map((social, index) => (
              <div key={index}>
                <IconButton
                  key={index}
                  aria-label={social.alt}
                  onClick={() => window.open(social.url, "_blank")}
                  icon={
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width={30} // width & height required for next/image
                      height={30}
                      className="lg:w-auto"
                    />
                  }
                  backgroundColor="transparent"
                  width="fit-content"
                  height="fit-content"
                />
              </div>
            ))}
          </div>
          <div className=" grid justify-center">
            <div className=" lg:h-[100px] h-[50px] w-[2px] bg-[#7E3D3E] ml-[2px] "></div>
          </div>
        </div>
      </div>
      <div className=" ">
        <Image src={RegalBackground} alt="" />
      </div>
    </div>
  );
};

export const HomeHero = () => {
  const router = useRouter();
  return (
    <div
      className="   bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${blurBg.src})`,
        backgroundColor: "#FFFAF696",
        // minHeight: "90vh",
      }}
    >
      <div className=" lg:pt-[20px] pt-[10px]">
        <Navbar />
      </div>
      <div className=" lg:w-11/12 m-auto grid lg:grid-cols-2 items-center pt-[10px] ">
        <div className=" lg:grid hidden">
          <HeroComponent />
        </div>
        <div className=" w-11/12 m-auto pt-[50px] lg:pt-0 ">
          <div className={`${robotoSlab.className} text-[#BE1011]`}>
            <Text className=" font-extrabold  lg:text-[40px] lg:pt-0 pt-[30px] text-center lg:text-left text-[25px]   ">
              REGAL IN HEIRS
            </Text>
            <Text className=" leading-10 pt-[15px]  text-center lg:text-left">
              African fashion can be both majestic and sustainable and we’re
              here to prove it. We redesign outdated clothing into fresh,
              stylish creations that empower women to embrace beauty with
              purpose.
            </Text>
          </div>
          <div className=" lg:mt-[30px] mt-[20px] grid lg:flex gap-x-[20px] gap-y-[40px] justify-center lg:justify-normal">
            <div>
              <Button
                bg="transparent"
                border="1px solid #BE1011"
                h="60px"
                w="200px"
                onClick={() => router.push(Routes.AboutUs)}
              >
                <Text className=" text-[18px]" color="#BE1011">
                  Our Story
                </Text>
              </Button>
            </div>
            <div>
              <Button
                bg=" #BE1011"
                border="1px solid #BE1011"
                h="60px"
                w="200px"
                onClick={() => router.push(Routes.Shop)}
              >
                <div className=" flex items-center gap-x-[10px]">
                  <Image alt="" src={RegalIcons.whiteCart} />
                  <Text className=" text-[18px]" color="white">
                    Explore Now
                  </Text>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className=" lg:hidden grid w-11/12 m-auto pt-[40px]">
          <HeroComponent />
        </div>
      </div>
    </div>
  );
};
function Homepage() {
  const router = useRouter();
  return (
    <div className="">
      <a href="zendit://" target="_blank" rel="noopener noreferrer">
        Test Deep Link
      </a>
      <HomeHero />
      <div>
        <HomeSecondSection />
      </div>
      <div className=" mt-[60px]">
        <ExclusiveOrder />
      </div>
      <div id="get-in-touch" className=" mt-[60px] ">
        <GetInTouchForm />
      </div>
      {/* <div className=" mt-[60px]">
        <HowItWorks />
      </div> */}

      <div className=" mt-[60px]">
        <Feedback />
      </div>
    </div>
  );
}

export default Homepage;
