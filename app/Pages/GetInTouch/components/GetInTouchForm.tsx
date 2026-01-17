"use client";
import Image from "next/image";
import { Images } from "@/public/Images/images";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
import { RegalIcons } from "@/public/Icons/Icons";
const InputComponent = ({ placing }: { placing: string }) => (
  <div>
    <Input height={14} placeholder={placing} />
  </div>
);
const SelectComponent = ({
  options,
  placing,
}: {
  options: string[];
  placing: string;
}) => (
  <div>
    <Select height={14} placeholder={placing}>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  </div>
);
type FileUploadProps = {
  label?: string;
  accept?: string;
  onFileSelect?: (file: File | null) => void;
};

const FileUploadComponent = ({
  label,
  accept,
  onFileSelect,
}: FileUploadProps) => (
  <div>
    <label style={{ display: "block", marginBottom: 4 }}>{label}</label>
    <Input
      height={14}
      type="file"
      // accept={accept}
      placeholder="Upload Image"
      onChange={(e) => {
        const file = e.target.files?.[0] ?? null;
        onFileSelect?.(file);
      }}
    />
  </div>
);

function GetInTouchForm() {
  return (
    <div className="">
      <div className=" grid lg:grid-cols-7 grid-cols-10 lg:gap-x-[40px] gap-x-[5px] lg:w-10/12 w-11/12  m-auto mt-[60px] bg-white rounded-lg relative shadow-lg">
        <div className=" lg:col-span-5 col-span-9  w-full">
          <div className=" lg:w-10/12 w-11/12  lg:pt-[80px] pt-[40px] pb-[40px] lg:pb-[80px] lg:pl-[20px] m-auto ">
            <div className=" lg:w-10/12 w-11/12 m-auto lg:m-0 ">
              <div>
                <div className={`${robotoSlab.className}`}>
                  <Text className=" text-5xl text-[#5B2A2E] font-extrabold">
                    Get in <span className=" text-[#BE1011]">Touch</span>
                  </Text>
                </div>
                <div className=" mt-[20px] pb-[20px]">
                  <Text>
                    If you have any query or any type of suggestion, you can
                    contact us here. We would love to hear from you.
                  </Text>
                </div>
              </div>
              <div className=" grid gap-y-[20px]">
                <InputComponent placing="Name" />
                <InputComponent placing="Email" />
                <InputComponent placing="Phone Number" />
                <SelectComponent
                  placing="How did you find us?"
                  options={["Friends", "Family", "Workplace"]}
                />
                <SelectComponent
                  placing="Request services"
                  options={["Redesign Outfit", "Donate your old outfit"]}
                />
                <div>
                  <FileUploadComponent />
                  <Text className=" text-[14px] pt-[5px]">
                    kindly upload photo of your outfit preferable while wearing
                    it
                  </Text>
                  <Text className=" text-[14px] pt-[5px] text-[#BE1011]">
                    Must not exceed 10mb file size
                  </Text>
                </div>
              </div>
              <div className=" pt-[30px]">
                <Button
                  bg=" #BE1011"
                  border="1px solid #BE1011"
                  h="60px"
                  w="200px"
                >
                  <Text className=" text-[18px]" color="white">
                    SEND
                  </Text>
                </Button>
              </div>
              <div className=" flex items-center flex-wrap gap-x-[50px] gap-y-[20px] mt-[40px]">
                <div className=" flex items-center lg:gap-x-[15px] gap-x-[12px]">
                  <div>
                    <Image src={RegalIcons.phoningIcon} alt="" />
                  </div>
                  <div>
                    <Text className=" text-[#5B2A2E] font-semibold">PHONE</Text>
                    <Text className=" text-[#BE1011] mt-[10px] text-[12px] lg:text-[16px]">
                      +234 813 234 5885
                    </Text>
                  </div>
                </div>
                <div className=" flex items-center lg:gap-x-[15px] gap-x-[12px]">
                  <div>
                    <Image src={RegalIcons.mailingIcon} alt="" />
                  </div>
                  <div>
                    <Text className=" text-[#5B2A2E] font-semibold">EMAIL</Text>
                    <Text className=" text-[#BE1011] mt-[10px] text-[14px] lg:text-[16px]">
                      regalinheirs.store@gmail.com
                    </Text>
                  </div>
                </div>
                <div className=" flex items-center lg:gap-x-[15px] gap-x-[12px]">
                  <div>
                    <Image src={RegalIcons.locatingIcon} alt="" />
                  </div>
                  <div>
                    <Text className=" text-[#5B2A2E] font-semibold">
                      Visit Us
                    </Text>
                    <Text className=" text-[#BE1011] mt-[10px] text-[14px] lg:text-[16px]">
                      Ibadan close, Agbaoku estate  Opebi Lagos
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-2 col-span-1 bg-[#5B2A2E] rounded-r-lg"></div>
        <div className=" absolute right-9 h-[200px] top-2/12 lg:grid hidden">
          <Image alt="" src={Images.map} height={550} />
        </div>
      </div>
    </div>
  );
}

export default GetInTouchForm;
