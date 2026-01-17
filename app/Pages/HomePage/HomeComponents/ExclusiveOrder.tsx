"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Images } from "@/public/Images/images";
import { robotoSlab } from "@/app/Components/Fonts/Font";
import { Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Routes } from "@/app/Components/RouteFunctions";
const ExclusiveComponent = () => (
  <div className="pt-[20px] w-7/12 m-auto">
    <Image alt="" src={Images.exclusive} />
    <div className="absolute left-0 bottom-10">
      <Image alt="" src={Images.des} />
    </div>
  </div>
);
function ExclusiveOrder() {
  const router = useRouter();

  // 🎯 Set your countdown target date here
  const targetDate = new Date("2026-01-15T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-[#FFF1F0] lg:w-11/12 m-auto relative">
      <div className="grid lg:grid-cols-2 items-center lg:pt-0 pt-[20px]">
        <div className=" lg:grid hidden">
          <ExclusiveComponent />
        </div>

        <div className="lg:w-9/12 w-10/12 m-auto lg:text-left text-center lg:m-0 text-[#5B2A2E]">
          <div className={robotoSlab.className}>
            <Text className="font-bold text-[35px]">Exclusive offer</Text>
          </div>

          <Text className="pt-[10px] leading-8">
            Unlock the ultimate style upgrade with our exclusive offer. Enjoy
            savings of up to 40% off on our latest New Arrivals.
          </Text>

          {/* ⏳ Countdown */}
          <div className="flex items-center gap-x-[20px] pt-[20px]">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white h-[100px] w-[100px] grid items-center justify-center rounded-lg"
              >
                <div
                  className={`font-bold text-center ${robotoSlab.className}`}
                >
                  <Text className="text-[25px]">
                    {String(item.value).padStart(2, "0")}
                  </Text>
                  <Text>{item.label}</Text>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-[40px]">
            <Button
              bg="#5B2A2E"
              border="1px solid #BE1011"
              h="60px"
              w="200px"
              onClick={() => router.push(Routes.Shop)}
            >
              <Text className="text-[18px] font-normal" color="white">
                BUY NOW
              </Text>
            </Button>
          </div>
        </div>
        <div className=" lg:hidden grid  m-auto">
          <ExclusiveComponent />
        </div>
      </div>
    </div>
  );
}

export default ExclusiveOrder;
