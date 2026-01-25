"use client";
import React from "react";
import HomepageHeader from "@/app/Components/Headers/HomepageHeader";
import SubHeader from "@/app/Components/Texts/SubHeader";
import { Images } from "@/public/Images/images";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import HomeCardTwo from "@/app/Components/Cards/HomeCardTwo";
import { HomeCardTwoData } from "@/app/Components/Data/HomeCardData";
import { Button } from "@chakra-ui/react";
import { RegalIcons } from "@/public/Icons/Icons";
import { useRouter } from "next/navigation";
import { Routes } from "@/app/Components/RouteFunctions";
import Link from "next/link";
const RefittedData = [
  {
    oldOutfit: Images.textured,
    newOutfit: Images.NewOutfitOne,
  },
  {
    oldOutfit: Images.textured,
    newOutfit: Images.NewOutfitTwo,
  },
  {
    oldOutfit: Images.textured,
    newOutfit: Images.NewOutfitThree,
  },
];
function Refitted({ getInTouchRouting }: { getInTouchRouting?: boolean }) {
  const router = useRouter();
  return (
    <div>
      <div>
        <HomepageHeader
          style={{
            textAlign: "center",
          }}
        >
          Refitted by Regal
        </HomepageHeader>

        <SubHeader
          children={"We believe that clothes can tell a better story"}
          style={{
            color: "#5B2A2E",
            textAlign: "center",
            // marginTop : 10
          }}
        />
      </div>
      <div className="lg:w-11/12 m-auto w-10/12 lg:mt-[60px] mt-[30px] grid gap-y-[40px]">
        {RefittedData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-x-[20px]"
          >
            <div className=" col-span-2 ">
              <div className=" grid w-full justify-end">
                <div className=" w-fit">
                  <div className=" flex">
                    <div className=" ">
                      <Image
                        src={item.oldOutfit}
                        alt="Old Outfit"
                        //className="object-cover "
                      />
                      <Text className=" font-semibold text-center pt-[10px]">
                        Old Outfit
                      </Text>
                    </div>
                    <div className=" lg:mt-[150px] mt-[100px] ">
                      <Image
                        src={Images.curvyArrow}
                        alt="Old Outfit"
                        // className="object-cover"
                        className=" w-[200px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-span-1">
              <div>
                <Image
                  src={item.newOutfit}
                  alt="New Outfit"
                  // className="object-cover"
                />
                <Text className="font-semibold text-center pt-[10px] ">
                  New Outfit
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className=" grid lg:grid-cols-3 gap-x-[20px] gap-y-[40px] pt-[140px] w-10/12 lg:w-11/12 m-auto">
          {HomeCardTwoData?.map((item, index) => (
            <div key={index} className=" grid justify-center">
              <HomeCardTwo
                key={index}
                imagez={item.cardImage}
                cardHeader={item.cardTitle}
                subText={item.cardSubTitle}
              />
            </div>
          ))}
        </div>
        <div className=" grid justify-center">
          {getInTouchRouting ? (
            <Button
              bg=" transparent"
              border="2px solid #5B2A2E"
              h="50px"
              w="200px"
              marginTop={16}
              onClick={() => router.push(Routes.GetInTouch)}
            >
              <div className=" flex items-center gap-x-[10px]">
                <Text className=" text-[18px]" color="#5B2A2E">
                  Request service
                </Text>
                <Image alt="" src={RegalIcons.rightArrow} />
              </div>
            </Button>
          ) : (
            <Button
              bg=" transparent"
              border="2px solid #5B2A2E"
              h="50px"
              w="200px"
              marginTop={16}
              //onClick={() => router.push(Routes.GetInTouch)}
            >
              <Link href="/#get-in-touch" scroll>
                <div className=" flex items-center gap-x-[10px]">
                  <Text className=" text-[18px]" color="#5B2A2E">
                    Request service
                  </Text>
                  <Image alt="" src={RegalIcons.rightArrow} />
                </div>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Refitted;
