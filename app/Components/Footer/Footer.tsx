"use client";
import React from "react";
import footerBg from "../../../public/footerBg.svg";
import Image from "next/image";
import { Images } from "@/public/Images/images";
import { RegalIcons } from "@/public/Icons/Icons";
import { Button, IconButton, Input, Text } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
import { useRouter } from "next/navigation";
import { title } from "process";
import Link from "next/link";
//import imp from "../../Pages/AboutUs"
const shopData = [
  {
    title: "Shop",
    route: "/../../Pages/Shop",
  },
  {
    title: "Best selling",
    route: "/../../Pages/Shop",
  },
  {
    title: "Releases",
    route: "/../../Pages/PressRelease",
  },
];
const informationData = [
  {
    title: "Our Story",
    route: "/Pages/AboutUs#our-story",
  },
  {
    title: "FAQ",
    route: "/Pages/AboutUs#faq",
  },
  {
    title: "Size + Fit Guide",
    route: "/Pages/AboutUs#size-fit",
  },
  {
    title: "Get In Touch",
    route: "/Pages/GetInTouch#contact",
  },
];

function Footer() {
  const router = useRouter();
  return (
    <div
      className="   bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${footerBg.src})`,
        backgroundColor: "#FFFAF696",
        // minHeight: "90vh",
        color: "#BE1011",
      }}
    >
      <div className=" w-11/12 pl-[10px] pl-0 m-auto pt-[40px] pb-[40px]">
        <div className=" grid lg:grid-cols-6 gap-y-[10px]">
          <div className=" lg:col-span-2 lg:grid hidden">
            <Image alt="" src={RegalIcons.regalLogo} />
            <Text className=" pt-[20px] font-semibold">Connect with us</Text>
            <div
              style={{
                rowGap: 30,
                marginTop: 20,
              }}
            >
              <IconButton
                icon={<Image alt="" src={RegalIcons.fb} />}
                backgroundColor={"transparent"}
              />
              <IconButton
                icon={<Image alt="" src={RegalIcons.insta} />}
                backgroundColor={"transparent"}
                marginLeft={5}
              />
              <IconButton
                icon={<Image alt="" src={RegalIcons.twit} />}
                backgroundColor={"transparent"}
                marginLeft={5}
              />
              <IconButton
                icon={<Image alt="" src={RegalIcons.mail} />}
                backgroundColor={"transparent"}
                marginLeft={5}
              />
            </div>
          </div>
          <div className=" lg:flex gap-x-[20px] grid gap-y-[20px] justify-between lg:flex-1 lg:col-span-4">
            <div>
              <div className={`${robotoSlab.className}`}>
                <Text className=" lg:text-[20px] text-[18px] font-semibold">
                  SHOP
                </Text>
              </div>
              <div className=" flex flex-col w-fit mt-[10px] gap-y-[10px]">
                {shopData?.map((item, index) => (
                  <div key={index}>
                    <button onClick={() => router.push(item.route)}>
                      <Text>{item.title}</Text>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className={`${robotoSlab.className}`}>
                <Text className=" lg:text-[20px] text-[18px] font-semibold">
                  INFORMATION
                </Text>
              </div>
              <div className=" flex flex-col w-fit mt-[10px] gap-y-[10px]">
                {informationData?.map((item, index) => (
                  <div key={index}>
                    <Link key={item.title} href={item.route}>
                      <Text>{item.title}</Text>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className={`${robotoSlab.className}`}>
                <Text className=" lg:text-[20px] text-[18px] font-semibold">
                  CONTACT INFO
                </Text>
              </div>
              <div className=" flex flex-col w-fit mt-[10px] gap-y-[10px] ">
                <div className=" flex items-center gap-x-[10px]">
                  <Image alt="" src={RegalIcons?.redLocation} />
                  <Text>Ibadan close, Agbaoku estate, Opebi Lagos.</Text>
                </div>
                <div className=" flex items-center gap-x-[10px]">
                  <Image alt="" src={RegalIcons?.redPhoneCall} />
                  <Text> +234 813 234 5885</Text>
                </div>
                <div className=" flex items-center gap-x-[10px]">
                  <Image alt="" src={RegalIcons?.mailing} />
                  <Text> regalinheirs.store@gmail.com</Text>
                </div>
              </div>
            </div>
            <div className=" lg:col-span-2 lg:hidden grid">
              {/* <Image alt="" src={RegalIcons.regalLogo} /> */}
              <Text className=" pt-[20px] font-semibold">Connect with us</Text>
              <div
                style={{
                  rowGap: 30,
                  marginTop: 20,
                }}
              >
                <IconButton
                  icon={<Image alt="" src={RegalIcons.fb} />}
                  backgroundColor={"transparent"}
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/regalinheirs",
                      "_blank"
                    )
                  }
                  aria-label=""
                />
                <IconButton
                  icon={<Image alt="" src={RegalIcons.insta} />}
                  backgroundColor={"transparent"}
                  marginLeft={5}
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/regalinheirs",
                      "_blank"
                    )
                  }
                  aria-label=""
                />
                <IconButton
                  icon={<Image alt="" src={RegalIcons.twit} />}
                  backgroundColor={"transparent"}
                  marginLeft={5}
                  onClick={() =>
                    window.open("https://twitter.com/regalinheirs", "_blank")
                  }
                  aria-label=""
                />
                <IconButton
                  icon={<Image alt="" src={RegalIcons.mail} />}
                  backgroundColor={"transparent"}
                  marginLeft={5}
                  onClick={() =>
                    window.open("https://mail.com/regalinheirs", "_blank")
                  }
                  aria-label=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[40px]">
          <div className={`${robotoSlab.className}`}>
            <Text className=" lg:text-[20px] text-[18px] font-semibold">
              STAY UP TO DATE
            </Text>
          </div>
          <div
            style={{
              border: "1px solid #BE1011 ",
            }}
            className=" lg:w-[487px] w-full  border rounded-lg mt-[10px] flex items-center "
          >
            <Input
              border={"none"}
              className=" flex-1 h-full"
              placeholder="Enter your email"
              color={"#BE1011"}
              _focus={{
                border: "none",
              }}
            />
            <Button
              backgroundColor={"#BE1011"}
              color={"white"}
              height={50}
              width={115}
            >
              SUBMIT
            </Button>
          </div>
        </div>
        <div className=" mt-[40px]">
          <div className=" flex items-center gap-x-[40px]">
            <div className=" h-[2px] flex-1 bg-[#BE1011] rounded-l-full rounded-r-full"></div>
            <div className=" font-semibold flex items-center gap-x-[20px]">
              <div>
                <button
                  onClick={() => router.push("/../../Pages/TermsAndPrivacy")}
                >
                  <Text>Terms</Text>
                </button>
              </div>
              <div>
                <button
                  onClick={() => router.push("/../../Pages/TermsAndPrivacy")}
                >
                  <Text>Privacy</Text>
                </button>
              </div>
              <div>
                {/* <button
                  onClick={() => router.push("/../../Pages/TermsAndPrivacy")}
                >
                  <Text>Cookies</Text>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
