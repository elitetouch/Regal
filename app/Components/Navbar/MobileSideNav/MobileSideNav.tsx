"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { NavbarComponent } from "../Navbar";
const MobileBody = ({ toogleMobile }: { toogleMobile: () => void }) => {
  return (
    <div>
      <NavbarComponent />
    </div>
  );
};

function MobileSideNav({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  // const [mobileTog, setMobileRTog] = useState(false)
  const mobileTogFunc = () => {
    onClose();
  };
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent w="fit-content" maxW="80vw" p={0}>
        <DrawerBody p={0}>
          <MobileBody
            //mobileTog
            toogleMobile={() => mobileTogFunc()}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileSideNav;
