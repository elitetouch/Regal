"use client";
import { RegalIcons } from "@/public/Icons/Icons";
import Image from "next/image";
import { Button, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Routes } from "../RouteFunctions";

function MobileNavbar({ onOpen }: { onOpen: () => void }) {
  const router = useRouter();
  return (
    <div>
      <div className=" w-11/12 m-auto  pt-[2px] pb-[2px] flex justify-between items-center">
        <div className="">
          <div>
            <IconButton
              icon={
                <Image
                  src={RegalIcons.hambuggerIcon}
                  alt=""
                  width={18}
                  height={18}
                />
              }
              onClick={onOpen}
              backgroundColor={"transparent"}
              aria-label=""
            />
          </div>
        </div>
        <div className=" grid w-full justify-center">
          <Image src={RegalIcons.regalLogo} alt="" width={48} height={48} />
        </div>
        <div className=" flex items-center gap-x-[10px] justify-end">
          <div>
            <IconButton
              icon={
                <Image
                  src={RegalIcons.redSeach}
                  alt=""
                  width={18}
                  height={18}
                />
              }
              backgroundColor={"transparent"}
              aria-label=""
            />
          </div>
          <div>
            <IconButton
              icon={
                <Image src={RegalIcons.redCart} alt="" width={18} height={18} />
              }
              onClick={() => router.push(Routes.Shop)}
              backgroundColor={"transparent"}
              aria-label=""
            />
          </div>
          <div>
            <IconButton
              onClick={() => router.push(Routes.GetInTouch)}
              icon={
                <Image
                  src={RegalIcons.redProfile}
                  alt=""
                  width={18}
                  height={18}
                />
              }
              backgroundColor={"transparent"}
              aria-label=""
            />
          </div>
        </div>
      </div>
      {/* <div className=" flex items-center justify-center gap-x-[20px] w-11/12 m-auto mt-[20px]">
        <div>
          <Button
            backgroundColor={"transparent"}
            border="1px solid #5B2A2E99"
            h="60px"
            w="200px"
            onClick={() => router.push(Routes.Home)}
          >
            <Text className={`text-[16px] text-[#5B2A2E99] `}>REGAL HOME</Text>
          </Button>
        </div>
        <div>
          <Button
            backgroundColor={"transparent"}
            border="1px solid #5B2A2E99"
            h="60px"
            w="200px"
            onClick={() => router.push(Routes.Shop)}
          >
            <Text className={`text-[16px] text-[#5B2A2E99] `}>
              REGAL COLLECTIONS
            </Text>
          </Button>
        </div>
        <div>
          <Button
            backgroundColor={"transparent"}
            border="1px solid #5B2A2E99"
            h="60px"
            w="200px"
            onClick={() => router.push(Routes.AboutUs)}
          >
            <Text className={`text-[16px] text-[#5B2A2E99] `}>
              REFITTED BY REGAL
            </Text>
          </Button>
        </div>
      </div> */}
    </div>
  );
}

export default MobileNavbar;
