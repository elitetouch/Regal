import React from "react";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { RegalIcons } from "@/public/Icons/Icons";
import { robotoSlab } from "@/app/Components/Fonts/Font";
export type PressReleaseType = {
  image: string | any;
  title: string;
  date: string;
  name: string;
};
function PressReleaseCard({ image, title, date, name }: PressReleaseType) {
  return (
    <div className=" w-full">
      <Image src={image} alt="" className=" w-full" />

      <div className=" mt-[20px]">
        <Text className=" text-[#977A50] text-[18px] text-[16px]">FASHION</Text>
        <div className={`${robotoSlab.className} mt-[10px]`}>
          <Text className=" lg:text-3xl text-2xl">{title}</Text>
        </div>
      </div>
      <div>
        <div className=" flex items-center gap-x-[20px] mt-[10px] text-[#838383]">
          <div className=" flex items-center gap-x-[10px] ">
            <div
              style={{
                borderRight: "solid 1px black",
                height: "fit",
                paddingRight: 10,
              }}
            >
              <Text

              // className=" border border-r pr-5"
              >
                {date}
              </Text>
            </div>
            <div>
              <Text>By</Text>
            </div>
          </div>
          <div>
            <Image src={RegalIcons.pressIcon} alt="" />
          </div>
        </div>
        <Text className=" mt-[10px] font-semibold text-[#838383]">{name}</Text>
      </div>
    </div>
  );
}

export default PressReleaseCard;
