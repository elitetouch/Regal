import React from "react";
import Navbar from "@/app/Components/Navbar/Navbar";
import GetInTouchHero from "@/app/Components/Hero/GetInTouchHero";
import GetInTouchForm from "./components/GetInTouchForm";
import secondSectionBg from "../../../public/secondSectionBg.svg";
import { NewsletterSubscription } from "../PressRelease/page";
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
      <div>
        <Navbar />
      </div>
      <div className=" lg:mt-[40px]">
        <GetInTouchHero />
        <div className=" lg:-mt-80 -mt-50">
          <GetInTouchForm />
        </div>
        <div className=" pt-[80px] lg:grid hidden">
          <NewsletterSubscription />
        </div>
      </div>
    </div>
  );
}

export default Page;
