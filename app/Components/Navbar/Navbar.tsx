"use client";
import { RegalIcons } from "@/public/Icons/Icons";
import Image from "next/image";
import { Button, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Routes } from "../RouteFunctions";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import MobileSideNav from "./MobileSideNav/MobileSideNav";
import bodyBg from "../../../public/secondSectionBg.svg";
export const NavbarComponent = () => {
  const router = useRouter();
  return (
    <div className=" lg:flex items-center justify-center grid gap-y-[40px] gap-x-[20px] w-11/12 m-auto mt-[40px] lg:mt-[20px]">
      <div className="">
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
          onClick={() => router.push(Routes.RefittedByRegal)}
        >
          <Text className={`text-[16px] text-[#5B2A2E99] `}>
            REFITTED BY REGAL
          </Text>
        </Button>
      </div>
    </div>
  );
};

function Navbar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toogleSideMenu, setToogleSideMenu] = useState(false);
  const toogleFunc = () => {
    setToogleSideMenu(!toogleSideMenu);
    //  toogleMobile()
  };
  return (
    <div className="">
      <div className=" lg:block hidden">
        <div
          style={{
            backgroundImage: `url(${bodyBg.src})`, // Note: Use .src for Next.js Image imports
            backgroundColor: "#FFFAF696",
            zIndex: 10,
          }}
          className=" bg-cover bg-center lg:pt-[20px] pt-[10px] bg-no-repeat top-0 fixed left-0 bg-white right-0"
        >
          <div className="  w-11/12 m-auto lg:pt-[10px] lg:pb-[10px] pt-[60px] pb-[60px] grid grid-cols-3 justify-between items-center">
            <div className="">
              <div>
                <IconButton
                  icon={
                    <Image
                      src={RegalIcons.redSeach}
                      alt=""
                      width={30}
                      height={30}
                    />
                  }
                  backgroundColor={"transparent"}
                  aria-label=""
                />
              </div>
            </div>
            <div className=" grid w-full justify-center">
              <Image src={RegalIcons.regalLogo} alt="" />
            </div>
            <div className=" flex items-center gap-x-[60px] justify-end">
              <div>
                <IconButton
                  icon={
                    <Image
                      src={RegalIcons.redCart}
                      alt=""
                      //  width={30} height={30}
                    />
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
                      // width={30}
                      // height={30}
                    />
                  }
                  backgroundColor={"transparent"}
                  aria-label=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-[100px]">
          <NavbarComponent />
        </div>
      </div>
      <div className=" lg:hidden">
        <MobileNavbar onOpen={onOpen} />
        <MobileSideNav onClose={onClose} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Navbar;
