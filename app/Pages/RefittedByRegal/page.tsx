import React from "react";
import Refitted from "../HomePage/HomeComponents/Refitted";
import HowItWorks from "../HomePage/HomeComponents/HowItWorks";
import Navbar from "@/app/Components/Navbar/Navbar";
import secondSectionBg from "../../../public/secondSectionBg.svg";
function Page() {
  return (
    <div
      className="   bg-cover bg-center bg-no-repeat pb-[50px]"
      style={{
        backgroundImage: `url(${secondSectionBg.src})`,
        backgroundColor: "#FFFAF696",
        // minHeight: "90vh",
      }}
    >
      <Navbar />
      <div className=" lg:mt-[40px] mt-[20px]">
        <Refitted getInTouchRouting />
      </div>
      <div className=" mt-[80px]">
        <HowItWorks />
      </div>
    </div>
  );
}

export default Page;
