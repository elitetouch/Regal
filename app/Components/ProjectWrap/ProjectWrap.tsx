"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
type ProjectWrapProps = {
  children: React.ReactNode;
};

function ProjectWrap({ children }: ProjectWrapProps) {
  return (
    <ChakraProvider>
      {children}
      <div className=" mt-[100px]">
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default ProjectWrap;
