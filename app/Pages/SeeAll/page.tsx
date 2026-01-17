import React from "react";
import { HomeHero } from "../HomePage/Homepage";
import { RegalCollection } from "../HomePage/HomeComponents/HomeSecondSection";
import secondSectionBg from "../../../public/secondSectionBg.svg";
import { FeedbackComponent } from "../HomePage/HomeComponents/Feedback";
function Page() {
  return (
    <div>
      <HomeHero />
      <div
        className="   bg-cover bg-center bg-no-repeat pb-[50px] pt-[60px]"
        style={{
          backgroundImage: `url(${secondSectionBg.src})`,
          backgroundColor: "#FFFAF696",
          // minHeight: "90vh",
        }}
      >
        <RegalCollection seeAll />
        <div className=" mt-[40px]">
          <FeedbackComponent />
        </div>
      </div>
    </div>
  );
}

export default Page;
