"use client";
import { CustomBtn } from "@/app/common/components/customBtn";
import { CustomInput } from "@/app/common/components/customInput";
import { onClickStyle, underline } from "@/app/common/style/styles";
import Image from "next/image";
import { useState } from "react";

const size = 15;

export const GuideCard = () => {
    const [selectedOption, setSelectedOption] = useState(true);
    const updateRadio = () => setSelectedOption(!selectedOption);

  return (
    <div className="overflow-hidden rounded-lg bg-[#FFFFFF] shadow">
      <div className="px-3 py-4 sm:px-5 md:px-6">
        <div className="flex flex-col space-y-2 border border-[#00000040] rounded-2xl p-3 sm:p-4 md:p-5">
          <span className="text-[#000637] font-bold text-md sm:text-lg">Guide</span>
          {underline}

          <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
            <span className="text-[#344767] text-sm sm:text-base">Upload Tutorial For</span>
            <div className="flex flex-row space-x-3">
              <div className={`flex flex-row justify-center items-center space-x-1`}>
                <Image
                 onClick={updateRadio}
                  alt="radio"
                  src={`${selectedOption?'/radio-button-checked-svgrepo-com.svg':'/radio-button-unchecked-svgrepo-com.svg'}`}
                  height={size}
                  width={size}
                  quality={100}
                  className={onClickStyle}
                />
                <span className="text-[#707070] text-xs sm:text-sm">Agents</span>
              </div>

              <div className={`flex flex-row  justify-center items-center space-x-1`}>
                <Image
                  onClick={updateRadio}
                  alt="radio"
                  src={`${!selectedOption?'/radio-button-checked-svgrepo-com.svg':'/radio-button-unchecked-svgrepo-com.svg'}`}
                  height={size}
                  width={size}
                  quality={100}
                  className={onClickStyle}
                />
                <span className="text-[#707070] text-xs sm:text-sm">Drivers</span>
              </div>
            </div>
          </div>
          {underline}

          <div className="grid grid-cols-1 gap-1">
            <span className="text-[#344767] text-sm sm:text-base">Guide Title</span>
            <CustomInput placeHolder="Guide 1" />
          </div>

          <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-[#F8FBFF] mt-2">
            <div className="flex flex-col items-center justify-center pt-3 pb-4 sm:pt-5 sm:pb-6">
              <Image
                alt="upload"
                src="/upload.svg"
                quality={100}
                height={40}
                width={40}
                className="sm:h-12 sm:w-12"
              />
              <p className="mb-2 text-xs sm:text-sm text-[#000637]">
                <span className="font-semibold">Upload Files</span>
              </p>
            </div>
            <input type="file" className="hidden" />
          </label>

          <div className="relative w-full rounded-2xl overflow-hidden mt-2" style={{ aspectRatio: '16/9' }}>
            <Image
              alt="video preview"
              src="/vid.png"
              quality={100}
              fill
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-1 gap-1 mt-2">
            <span className="text-[#000637] text-sm sm:text-base">Lorem ipsum dolor sit amet</span>
            <span className="text-[#999999] text-xs">Lorem ipsum dolor sit amet</span>
          </div>
        </div>

        <div className="flex justify-end mt-2 sm:mt-4 lg:mt-6">
          <CustomBtn
            label="Add"
            className="bg-[#368089] text-white rounded-lg py-2 px-4 lg:px-8 text-sm"
          />
        </div>
      </div>
    </div>
  );
};
