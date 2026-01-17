import React from "react";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import SubHeader from "@/app/Components/Texts/SubHeader";
import secondSectionBg from "../../../../public/secondSectionBg.svg";
import FaqCard from "./FaqCard";
import { Text } from "@chakra-ui/react";
import { RegalIcons } from "@/public/Icons/Icons";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
const faqData = [
  {
    question: "Are your clothes sustainable and ethically produced?",
    answer:
      "We make use of carefully sourced fabrics and materials. We also support local artisans by employing them to be a key part of production this act aligns with the SDG 8 (Decent Work and Economic Growth) ",
  },
  {
    question: "Where are you located?",
    answer: "Lagos, Nigeria",
  },
  {
    question: " Do you do delivery worldwide?",
    answer: " Yes, we deliver worldwide via DHL",
  },
  {
    question: "Do you accept custom orders?",
    answer:
      " We make use of carefully sourced fabrics and materials. We also support local artisans by employing them to be a key part of production this act aligns with the SDG 8 (Decent Work and Economic Growth) ",
  },
  {
    question: "How long will my order take to ship?",
    answer: "3 Days",
  },
];

function FAQs() {
  return (
    <div>
      <div
        className="   bg-cover bg-center bg-no-repeat pb-[50px] lg:pt-[60px] pt-[40px]"
        style={{
          backgroundImage: `url(${secondSectionBg.src})`,
          backgroundColor: "#FFFAF696",
          // minHeight: "90vh",
        }}
      >
        <div className=" bg-[#7E3D3E12] lg:w-10/12 w-11/12 m-auto lg:pt-[40px] pt-[20px] rounded-lg pb-[50px]">
          <div>
            <div>
              <HomepageHeader
                style={{
                  textAlign: "center",
                }}
              >
                FAQs
              </HomepageHeader>

              <SubHeader
                children={"You’ve questions? We listen, we provide answers."}
                style={{
                  color: "#5B2A2E",
                  textAlign: "center",
                  marginTop: 10,
                }}
              />
            </div>
          </div>
          <div className=" grid gap-y-[20px] mt-[40px] pb-[60px] rounded-lg">
            {faqData.map((item, index) => (
              <div key={index}>
                <FaqCard question={item.question} answer={item.answer} />
              </div>
            ))}
          </div>
          <div className=" bg-[#FFF3F3A1] lg:w-7/12 w-11/12 m-auto rounded-lg pt-[30px] pb-[30px]">
            <div className=" lg:flex items-center gap-x-[20px] w-11/12 m-auto justify-between">
              <div className=" text-[#2E2E27] text-center lg:text-left">
                <Text className=" font-bold text-[18px]">
                  Still have questions?
                </Text>
                <Text className=" pt-[15px] text-[16px]">
                  Can’t find the answer you’re looking for? Please get in touch
                  with our team.
                </Text>
              </div>
              <div className="  text-center lg:text-left lg:mt-0 mt-[20px]">
                <Button
                  bg="#5B2A2E"
                  border="2px solid ##5B2A2E"
                  h="50px"
                  w="190px"
                >
                  <div className=" flex items-center gap-x-[20px]">
                    <Text className=" text-[16px]" color="white">
                      Get in touch
                    </Text>
                    <Image alt="" src={RegalIcons.whiteArrow} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
