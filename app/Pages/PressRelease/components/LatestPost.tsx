import React from "react";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import SubHeader from "@/app/Components/Texts/SubHeader";
import { Text } from "@chakra-ui/react";
import { Images } from "@/public/Images/images";
import PressReleaseCard from "./PressReleaseCard";
import { Button } from "@chakra-ui/react";
import { RegalIcons } from "@/public/Icons/Icons";
import Image from "next/image";
const latestPostData = [
  {
    image: Images.upcycled,
    title: "Upcycled Pieces Every Woman Should Own in 2025",
    date: "nov 26, 2025 ",
    name: "by Afonrinwo Eniola",
  },
  {
    image: Images.theBest,
    title: "The best foundation you can find on sale",
    date: "nov 26, 2025 ",
    name: " by Afonrinwo Eniola",
  },
  {
    image: Images.someGreat,
    title: "Some great products for blasting fashion",
    date: "nov 26, 2025 ",
    name: "by Afonrinwo Eniola",
  },
];
const popularPostData = [
  {
    image: Images.why,
    title: "Why Upcycling Is the Future of Fashion",
    date: "nov 26, 2025",
    name: "by Afonrinwo Eniola",
  },
  {
    image: Images.theBeauty,
    title: "The Beauty of African Fabrics: Stories Behind the Print",
    date: "nov 26, 2025",
    name: "by Afonrinwo Eniola ",
  },
  {
    image: Images.theStory,
    title: "The Story Behind My Favorite Upcycled Piece",
    date: "nov 26, 2025",
    name: "by Afonrinwo Eniola ",
  },
];
function LatestPost() {
  return (
    <div>
      <div className=" lg:mt-[60px] mt-[40px] w-11/12 m-auto">
        <HomepageHeader
          style={{
            textAlign: "center",
          }}
        >
          Press Release
        </HomepageHeader>

        <SubHeader
          children={
            "Get in on the trend with our curated selection of best-selling styles."
          }
          style={{
            color: "#5B2A2E",
            textAlign: "center",
            // marginTop : 10
          }}
        />
      </div>
      <div className=" w-10/12 m-auto mt-[50px]">
        <Text className=" font-semibold lg:text-xl text-lg">LATEST POSTS</Text>
        <div className=" mt-[30px] grid lg:grid-cols-3 gap-x-[40px] gap-y-[40px]">
          {latestPostData?.map((item, index) => (
            <div key={index}>
              <PressReleaseCard
                image={item.image}
                title={item.title}
                date={item.date}
                name={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-10/12 m-auto mt-[40px] pb-[40px]">
        <Text className=" font-semibold lg:text-xl text-lg">POPULAR POSTS</Text>
        <div className=" mt-[30px] grid lg:grid-cols-3 gap-x-[40px] gap-y-[40px]">
          {popularPostData?.map((item, index) => (
            <div key={index}>
              <PressReleaseCard
                image={item.image}
                title={item.title}
                date={item.date}
                name={item.name}
              />
            </div>
          ))}
        </div>
        <div className=" grid justify-center mt-[100px]">
          <Button
            marginLeft={10}
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
      </div>
    </div>
  );
}

export default LatestPost;
