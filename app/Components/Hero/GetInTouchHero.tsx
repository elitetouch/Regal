import HeroBg from "../../../public/getInTouchBg.jpg";
import { Text } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
function GetInTouchHero() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat lg:h-[80vh] h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${HeroBg.src})`, // Note: Use .src for Next.js Image imports
          backgroundColor: "#FFFAF696",
        }}
      >
        <div className=" lg:w-9/12 w-11/12 m-auto">
          <div className={`${robotoSlab.className}`}>
            <Text className=" text-center text-white font-regular lg:text-6xl text-4xl leading-12 lg:leading-16">
              Get in Touch
            </Text>
          </div>
          <div className=" w-7/12 m-auto">
            <Text className="text-white text-center text-[18px] pt-[20px]">
              We would love to hear from you.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouchHero;
