import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import bodyBg from "../../../public/secondSectionBg.svg";
import PressHero from "@/app/Components/Hero/PressHero";
import LatestPost from "./components/LatestPost";
import TopVideos from "./components/TopVideos";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
export const NewsletterSubscription = () => (
  <div className=" grid grid-cols-2 items-center w-9/12 m-auto mt-[100px] mb-[100px]">
    <div className={`${robotoSlab.className} grid justify-center`}>
      <Text className=" text-3xl text-[#BE1011] ">
        Subscribe our newsletter
      </Text>
    </div>
    <div
      className=" 
          
        "
    >
      <div
        style={{
          border: "1px solid #CBCBCB",
        }}
        className=" lg:w-[487px] border rounded-lg mt-[10px] flex items-center "
      >
        <Input
          border={"none"}
          className=" flex-1 h-full"
          placeholder="Your e-mail address here"
          color={"#838383"}
          _focus={{
            border: "none",
          }}
          fontSize={12}
        />
        <Button
          backgroundColor={"#BE1011"}
          color={"white"}
          height={50}
          width={115}
          fontSize={12}
        >
          SUBSCRIBE
        </Button>
      </div>
    </div>
  </div>
);
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
        <div>
          <PressHero />
        </div>
        <div>
          <LatestPost />
        </div>
      </div>
      <div className=" lg:mt-[60px] mt-[40px]">
        <TopVideos />
      </div>
      <div className=" lg:grid hidden">
        <NewsletterSubscription />
      </div>
    </div>
  );
}

export default Page;
