import React from "react";
import Image from "next/image";
import { Images } from "@/public/Images/images";
import { Text } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
function WhoWeAre() {
  return (
    <div className=" w-10/12 m-auto">
      <div className=" pt-[60px] grid lg:grid-cols-7 gap-x-[40px] ">
        <div className=" lg:col-span-3 grid lg:block justify-center w-full">
          <Image src={Images.WhoWeAre} alt="Who We Are" />
        </div>
        <div className=" lg:col-span-4">
          <div className=" mt-[30px] ">
            <div>
              <Text className=" text-[14px]">OUR STORY</Text>
              <div className={`${robotoSlab.className}`}>
                <Text className=" text-[#5B2A2E] font-bold text-4xl pt-[5px]">
                  Who we are.
                </Text>
              </div>
            </div>
            <div className=" lg:pt-[20px] pt-[10px]">
              <Text className=" text-[#5B2A2E] leading-8">
                <span className=" font-bold text-[#BE1011]">
                  Regal In Heirs
                </span>{" "}
                is a Nigerian based brand that targets the identity of African
                ready to wear clothing inspired by elegance, purpose and the
                bold individuality of today's women.
              </Text>
              <Text className=" text-[#5B2A2E] leading-8">
                Founded by a visionary and fashion-conscious woman,
                <span className=" font-bold text-[#BE1011]">
                  Afonrinwo Eniola
                </span>{" "}
                experienced firsthand the difficulty of finding clothing that
                was stylish, high-quality, modest, and tailored to fit the
                African woman body. Growing up among women, she observed the
                struggles many women faced in finding fashion that made them
                feel both confident and comfortable. She realized there was no
                need to travel to another continent to find outfits that define
                beauty —{" "}
                <span className=" font-bold text-[#BE1011]">
                  Our African prints and designs can be worn with pride.
                </span>
              </Text>
              <Text className=" text-[#5B2A2E] leading-8">
                Many women are struck between poor fit,limited variety or over
                priced imports and that limits not just choice but confidence
                and self-expression
              </Text>
              <Text className=" text-[#5B2A2E] leading-8">
                At{" "}
                <span className=" font-bold text-[#BE1011]">
                  Regal in heirs{" "}
                </span>
                we are closing that gap with beautifully tailored outfits with
                90% fit through our collections.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
