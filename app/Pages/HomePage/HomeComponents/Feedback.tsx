import React from "react";
import FeedbackBg from "../../../../public/feedbackBg.svg";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import CardCarousel from "@/app/Components/Cards/Swiper";
import { RegalIcons } from "@/public/Icons/Icons";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
const feedbackData = [
  {
    name: "Halima Garba",
    feedback:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I am beyond satisfied!",
  },
  {
    name: "Adaeze Okoro",
    feedback:
      "I absolutely love the quality and style of the clothing I purchased from Regal. customer service was outstanding, and I received my order quickly. Highly recommended!",
  },
  {
    name: "Ayo Adesanya",
    feedback:
      "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
  },
  {
    name: "Ridwan James",
    feedback:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I am beyond satisfied!",
  },
  {
    name: "Louis Garcia",
    feedback:
      "I absolutely love the quality and style of the clothing I purchased from Regal. customer service was outstanding, and I received my order quickly. Highly recommended!",
  },
  {
    name: "Simba Troy",
    feedback:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I am beyond satisfied!",
  },
];
const secondFeedbackData = [
  {
    icon: RegalIcons.complimentary,
    title: "Complimentary Shipping",
    subTitle: "Enjoy free shipping on orders over N250,000.",
  },
  {
    icon: RegalIcons.conciously,
    title: "Consciously Crafted",
    subTitle: "Designed with you and the planet in mind.",
  },
  {
    icon: RegalIcons.Location,
    title: "Come Say Hi",
    subTitle: "We are located at Ibadan close, Agbaoku estate, Opebi Lagos.",
  },
];
export const FeedbackComponent = () => (
  <div className=" lg:pt-[80px] pt-[60px] grid lg:grid-cols-3 w-11/12 m-auto pb-[60px] gap-x-[50px] gap-y-[40px] items-center">
    {secondFeedbackData?.map((item, index) => (
      <div key={index}>
        <div className=" grid w-full justify-center">
          <Image alt="" src={item.icon} className=" m-auto" />
        </div>
        <Text className=" text-center text-[18px] font-semibold pt-[20px]">
          {item.title}
        </Text>
        <Text className=" text-center text-[16px] font-regular pt-[5px]">
          {item.subTitle}
        </Text>
      </div>
    ))}
  </div>
);
function Feedback() {
  return (
    <div
      className="   bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${FeedbackBg.src})`,
        backgroundColor: "#FFFAF696",
        // minHeight: "90vh",
      }}
    >
      <HomepageHeader
        style={{
          textAlign: "center",
          color: "#5B2A2E",
          paddingTop: 60,
        }}
      >
        Feedback Corner
      </HomepageHeader>

      <div className=" w-11/12 m-auto lg:pt-[60px] pt-[30px]">
        <CardCarousel data={feedbackData} />
      </div>
      <div>
        <FeedbackComponent />
      </div>
    </div>
  );
}

export default Feedback;
