"use client";
import Image from "next/image";
import { Images } from "@/public/Images/images";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { robotoSlab } from "@/app/Components/Fonts/Font";
import { RegalIcons } from "@/public/Icons/Icons";
const InputComponent = ({
  placing,
  label,
}: {
  placing: string;
  label?: string;
}) => (
  <div>
    <label style={{ display: "block", marginBottom: 12, fontWeight: 600 }}>
      {label}
    </label>
    <Input height={14} placeholder={placing} />
  </div>
);
const SelectComponent = ({
  options,
  placing,
  label,
}: {
  options: string[];
  placing: string;
  label?: string;
}) => (
  <div>
    <label style={{ display: "block", marginBottom: 12, fontWeight: 600 }}>
      {label}
    </label>
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
    <label style={{ display: "block", marginBottom: 12, fontWeight: 600 }}>
      {label}
    </label>
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
                    Upload your <span className=" text-[#BE1011]">Product</span>
                  </Text>
                </div>
                <div className=" mt-[20px] pb-[20px]">
                  <Text>
                    Please kindly input necessary details about the product
                  </Text>
                </div>
              </div>
              <div className=" grid gap-y-[20px]">
                <InputComponent label="Product name" placing="Name" />
                <InputComponent label="Product price" placing="Price" />
                {/* <InputComponent label="Phone number" placing="Phone Number" /> */}
                <SelectComponent
                  label="Upload product status"
                  placing="Status"
                  options={["In-stock", "Out of stock"]}
                />
                <div>
                  <FileUploadComponent label="Upload Product Image" />

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
