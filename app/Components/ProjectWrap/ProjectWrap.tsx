"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProjectWrapProps = {
  children: React.ReactNode;
};

function ProjectWrap({ children }: ProjectWrapProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        {children}
        <div className=" mt-[100px]">
          <Footer />
        </div>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default ProjectWrap;
