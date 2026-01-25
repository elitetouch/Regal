import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import Hero from "@/app/Components/Hero/Hero";
import { RegalCollection } from "../HomePage/HomeComponents/HomeSecondSection";
import secondSectionBg from "../../../public/secondSectionBg.svg";
import RegalHairsShop from "./component/RegalHairsShop";
function Page() {
  return (
    <>
      <div
        className="   bg-cover bg-center bg-no-repeat pb-[50px]"
        style={{
          backgroundImage: `url(${secondSectionBg.src})`,
          backgroundColor: "#FFFAF696",
          // minHeight: "90vh",
        }}
      >
        <div>
          <Navbar />
        </div>
        <div className=" lg:pt-[60px] pt-[10px]">
          <Hero />
        </div>
        <div className=" lg:mt-[60px] mt-[30px] w-11/12  m-auto">
          <RegalCollection bestSelling />
        </div>
      </div>
      <div className=" mt-[60px]">
        <RegalHairsShop />
      </div>
    </>
  );
}

export default Page;
