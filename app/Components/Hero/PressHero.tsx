import React from "react";
import { Images } from "@/public/Images/images";
import Image from "next/image";
import HeroBg from "../../../public/Hero.jpg";
import { Text } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
function PressHero() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroBg.src})`, // Note: Use .src for Next.js Image imports
          backgroundColor: "#FFFAF696",
        }}
      >
        <div className=" w-9/12 m-auto">
          <div className={`${robotoSlab.className}`}>
            <Text className=" text-center text-white font-regular leading-11 text-4xl lg:text-6xl lg:leading-16">
              How to unlock creativity & make something useful?
            </Text>
          </div>
          <div className=" w-7/12 m-auto">
            <Text className="text-white text-center text-[16px] pt-[20px]">
              Our way: Exceptional quality. Ethical factories. Radical
              Transparency.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PressHero;
