import React from "react";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import secondSectionBg from "../../../../public/secondSectionBg.svg";
import Image from "next/image";
import { Images } from "@/public/Images/images";
function SizeAndFitTable() {
  return (
    <div
      className="   bg-cover bg-center bg-no-repeat pb-[50px] pt-[60px]"
      style={{
        backgroundImage: `url(${secondSectionBg.src})`,
        backgroundColor: "#7E3D3E12",
        // minHeight: "90vh",
      }}
    >
      <HomepageHeader
        style={{
          textAlign: "center",
        }}
      >
        Size + fit Guide
      </HomepageHeader>
      <div className=" mt-[40px] grid justify-center gap-y-[40px] w-10/12 m-auto">
        <Image src={Images.sizeTable} alt="" />
        <Image src={Images.lengthTable} alt="" />
      </div>
    </div>
  );
}

export default SizeAndFitTable;
