import React from "react";
import { Text } from "@chakra-ui/react";
import ImageSlider from "@/app/Components/Cards/ImageSlider";
import { Images } from "@/public/Images/images";
const TopVideosData = [
  {
    image: Images.Beautifull,
    title: "Beautiful dress shown by top fashion models",
    body: "Vel non nibh vestibulum massa ullamcorper. Bibendum ultrices venenatis, id id sed mass commodo eros duis ut cras neque.",
  },
  {
    image: Images.Revolutionalize,
    title: "Revolutionize Your Wardrobe: The Wild Fashion Innovation...",
    body: "Hey there, fashion enthusiasts! Buckle up for a wild ride through the future of fashion that’s about to turn everything we know upside down",
  },
  {
    image: Images.Beautifull,
    title: "Beautiful dress shown by top fashion models",
    body: "Vel non nibh vestibulum massa ullamcorper. Bibendum ultrices venenatis, id id sed mass commodo eros duis ut cras neque.",
  },
];
function TopVideos() {
  return (
    <div className=" bg-[#5B2A2E]">
      <div className=" lg:pt-[50px] pt-[40px] w-10/12 m-auto pb-[40px]">
        <div>
          <Text className=" font-semibold lg:text-xl text-lg text-white">
            TOP VIDEOS
          </Text>
        </div>
        <div className=" mt-[40px]">
          <ImageSlider data={TopVideosData} />
        </div>
      </div>
    </div>
  );
}

export default TopVideos;
