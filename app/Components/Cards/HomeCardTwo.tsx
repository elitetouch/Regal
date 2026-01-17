import React from "react";
import Image from "next/image";
import CardHeaderText from "../Texts/CardHeaderText";
import { Text } from "@chakra-ui/react";
import { RegalIcons } from "@/public/Icons/Icons";
import { robotoSlab } from "@/app/Components/Fonts/Font";
type HomeCardType = {
  imagez: any;
  subText: string;
  cardHeader: string;
};
function HomeCardTwo({ imagez, subText, cardHeader }: HomeCardType) {
  return (
    <div>
      <div className=" grid justify-center">
        <Image src={imagez} alt="" />
      </div>
      <div>
        <div className={`${robotoSlab.className}`}>
          <CardHeaderText
            style={{
              color: "#5B2A2E",
              textAlign: "center",
              // marginTop : 10
            }}
            children={cardHeader}
          />
        </div>
        <div className=" mt-[5px] lg:w-9/12 w-11/12 m-auto">
          {/* <div className=" text-center border-r border">
            <Text className=" text-center text-[#5B2A2E]">{prices}</Text>
          </div> */}
          <div className=" flex items-center gap-x-[5px] justify-center ">
            <Text className="  text-[#5B2A2E] text-center leading-8">
              {subText}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardTwo;
