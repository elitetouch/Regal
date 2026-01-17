"use client";
import React from "react";
import { IconButton, Text } from "@chakra-ui/react";
import { RegalIcons } from "@/public/Icons/Icons";
import { useState } from "react";
import Image from "next/image";
type faqTypes = {
  question: string;
  answer: string;
};
function FaqCard({ question, answer }: faqTypes) {
  const [openFaq, setOpenFaq] = useState(false);
  const faqFunction = () => {
    setOpenFaq(!openFaq);
  };
  return (
    <div
      style={{
        border: "border 1px #F1F2F9",
      }}
      className=" bg-[white] shadow-lg rounded-xl lg:w-7/12 w-10/12 m-auto  "
    >
      <div className=" pt-[20px] pb-[10px] w-11/12 m-auto">
        <div className=" flex items-center justify-between gap-x-[20px]">
          <div>
            <Text className=" font-bold text-[#170F49]">{question}</Text>
          </div>
          <div>
            <IconButton
              icon={
                !openFaq ? (
                  <Image src={RegalIcons.faqClose} alt="" />
                ) : (
                  <Image src={RegalIcons.faqOpen} alt="" />
                )
              }
              backgroundColor={"transparent"}
              onClick={() => faqFunction()}
            />
          </div>
        </div>
        {openFaq && (
          <div className=" mt-[10px] pb-[10px] w-10/12">
            <Text className=" text-[#170F49] text-[16px]">{answer}</Text>
          </div>
        )}
      </div>
    </div>
  );
}

export default FaqCard;
