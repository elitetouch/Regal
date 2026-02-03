import React from "react";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import { Images } from "@/public/Images/images";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
const HowItWorksData = [
  {
    title: "Complete the Request Form",
    body: "we know your home is more than just a place to live, that is why we are committed to providing the best home loan",
    sectionImage: Images.RequestForm,
    eclipse: Images.redEclipse,
  },
  {
    title: "Select for Services",
    body: "Select your service (redesigning, donate or exchange) kindly upload a video or photo of your outfit preferable while wearing it",
    sectionImage: Images.SelectService,
    eclipse: Images.blueEclipse,
  },
  {
    title: "Request for Consultation",
    body: "Request for Consultation with us @regalinheirs.store@gmail.com OR  whatsapp 234 813 234 5885",
    sectionImage: Images.selectEmail,
    eclipse: Images.skyblueEclipse,
  },
  {
    title: "Our team",
    body: "Our team will contact you to discuss vision,timeline and pricing.",
    sectionImage: Images.Contact,
    eclipse: Images.lightredEclipse,
  },
  {
    title: "Walk in to our studio",
    body: "Bring in your item to our studio or dispatch them to us and would handle the rest ",
    sectionImage: Images.WalkIn,
    eclipse: Images.greenEclipse,
  },
];
function HowItWorks() {
  return (
    <div>
      <HomepageHeader
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        How it works
      </HomepageHeader>
      <div className=" mt-[60px] grid lg:grid-cols-2  gap-y-[40px]  w-11/12 m-auto">
        <div className=" w-11/12 grid m-auto">
          <Image alt="" src={Images.HowItWorks} />
        </div>
        <div className=" grid lg:gap-y-[30px] gap-y-[50px] lg:w-full w-11/12 ml-auto">
          {HowItWorksData?.map((item, index) => (
            <div key={index}>
              {(index + 1) % 2 != 0 ? (
                <div
                  // className=" flex items-center"
                  className={`gap-x-[30px] lg:grid-cols-2 gap-y-[60px] grid item-center ${
                    (index + 1) % 2 === 0 ? "grid-col-reverse" : ""
                  }`}
                >
                  <div className=" relative">
                    <div className=" absolute ">
                      <div className="flex">
                        <div>
                          <Text className=" font-extrabold text-5xl">
                            0{index + 1}
                          </Text>
                        </div>
                        <div>
                          <Image alt="" src={item.sectionImage} />
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <Image src={item.eclipse} alt="" />
                    </div>
                  </div>
                  <div className="pl-[]">
                    <div className={` font-bold ${robotoSlab.className}`}>
                      <Text className=" font-bold text-[20px]">
                        {item.title}
                      </Text>
                    </div>
                    <Text className=" lg:pt-[20px] pt-[10px] leading-7">
                      {item.body}
                    </Text>
                  </div>
                </div>
              ) : (
                <div
                  // className=" flex items-center"
                  className={`gap-x-[30px] lg:grid-cols-2 lg:gap-y-[60px] gap-y-[5px] lg:grid flex flex-col-reverse item-center  ${
                    (index + 1) % 2 === 0 ? "grid-col-reverse" : ""
                  }`}
                >
                  <div className="pl-[]">
                    <div className={` font-bold ${robotoSlab.className}`}>
                      <Text className=" font-bold text-[20px]">
                        {item.title}
                      </Text>
                    </div>
                    <Text className=" lg:pt-[20px] pt-[10px] leading-7">
                      {item.body}
                    </Text>
                  </div>
                  <div className=" relative">
                    <div className=" absolute ">
                      <div className="flex">
                        <div>
                          <Text className=" font-extrabold text-5xl">
                            0{index + 1}
                          </Text>
                        </div>
                        <div>
                          <Image alt="" src={item.sectionImage} />
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <Image src={item.eclipse} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
