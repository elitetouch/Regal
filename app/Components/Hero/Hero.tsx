import React from "react";
import { Images } from "@/public/Images/images";
import Image from "next/image";
import HeroBg from "../../../public/Hero.jpg";
import { Text } from "@chakra-ui/react";
function Hero() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroBg.src})`, // Note: Use .src for Next.js Image imports
          backgroundColor: "#FFFAF696",
        }}
      >
        <div className=" lg:w-9/12 w-11/12 m-auto">
          <Text className=" text-center text-white font-regular lg:text-6xl text-3xl leading-11 lg:leading-16">
            Gracefully dressed like the African woman who wears her crown
            everyday, turning every outfit to a statement of royalty.
          </Text>
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

export default Hero;
