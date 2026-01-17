import React from "react";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import SubHeader from "@/app/Components/Texts/SubHeader";
import Image from "next/image";
import { Images } from "@/public/Images/images";
import { RegalIcons } from "@/public/Icons/Icons";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
const regalShopImages = [
  Images.regalOne,
  Images.regalTwo,
  Images.regalThree,
  Images.regalFour,
  Images.regalFive,
  Images.regalSix,
];
function RegalHairsShop() {
  return (
    <div>
      <div className=" lg:w-full w-11/12 m-auto ">
        <HomepageHeader
          style={{
            textAlign: "center",
          }}
        >
          {"Regal in Heirs"}
        </HomepageHeader>

        <SubHeader
          children={
            "We believe clothes can tell a better story, one of rebirth, pride, and sustainability"
          }
          style={{
            color: "#5B2A2E",
            textAlign: "center",
            // marginTop : 10
          }}
        />
      </div>
      <div className=" grid lg:grid-cols-2 w-10/12 m-auto lg:mt-[40px] mt-[30px] gap-y-[40px] gap-x-[20px] items-center">
        {regalShopImages?.map((item: any, index: number) => (
          <div key={index} className=" grid justify-center">
            <Image alt="" src={item} />
          </div>
        ))}
      </div>
      <div className=" grid justify-center mt-[60px]">
        <Button bg=" transparent" border="2px solid #5B2A2E" h="50px" w="150px">
          <div className=" flex items-center gap-x-[10px]">
            <Text className=" text-[18px]" color="#5B2A2E">
              See all
            </Text>
            <Image alt="" src={RegalIcons.rightArrow} />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default RegalHairsShop;
