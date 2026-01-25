import React from "react";
import Image from "next/image";
import CardHeaderText from "../Texts/CardHeaderText";
import { Text } from "@chakra-ui/react";
import { RegalIcons } from "@/public/Icons/Icons";
import { Button } from "@chakra-ui/react";
type HomeCardType = {
  imagez: any;
  rating: string;
  prices: string | number;
  cardHeader: string;
};
function HomeCard({ imagez, rating, prices, cardHeader }: HomeCardType) {
  const phoneNumber = "+2348132345885"; // ✅ replace with your number with country code
  const message = `Hi, I'm interested in ${cardHeader}. Price: ${prices},.`;

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div>
      <div className=" relative">
        <Image src={imagez} alt="" className=" lg:h-[106px]" />
        <div className=" absolute bottom-0 w-full">
          <a href={waLink} target="_blank" rel="noopener noreferrer">
            <Button backgroundColor={"#BE1011"} height={65} width={"full"}>
              <Text className=" text-white">Buy</Text>
            </Button>
          </a>
        </div>
      </div>
      <div>
        <CardHeaderText
          style={{
            color: "#5B2A2E",
            textAlign: "center",
          }}
          children={cardHeader}
        />
        <div className=" grid grid-cols-2 mt-[5px] w-6/12 m-auto">
          <div className=" text-center border-r border">
            <Text className=" text-center text-[#5B2A2E]">{prices}</Text>
          </div>
          <div className=" flex items-center gap-x-[10px] justify-center ">
            <Text className="  text-[#5B2A2E]">{rating}</Text>
            <Image src={RegalIcons.ratingStars} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
