import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { onClickStyle } from "@/app/common/style/styles";
import { CustomInput } from "@/app/common/components/customInput";
import { CustomBtn } from "@/app/common/components/customBtn";

interface ISignInModal {
  open: boolean;
  onClose: () => void;
}

const iconSize = 15;

export const SignInModal = ({ open, onClose }: ISignInModal) => {
 

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75"
        aria-hidden="true"
      ></div>
      <DialogPanel className="bg-[#FFFF] rounded-2xl shadow-xl w-full max-w-sm md:max-w-md p-4 mx-2 sm:p-6 sm:mx-4 relative">
        
    
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#000637] font-bold text-lg">
            Add Sign Charges
          </span>
          <div
            onClick={onClose}
            className={`focus:outline-none ${onClickStyle}`}
          >
            <Image
              alt="close"
              src="/close-svgrepo-com.svg"
              quality={100}
              height={iconSize}
              width={iconSize}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-3 mb-3">
          <div className="flex flex-col  rounded-md p-4 mb-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="grid grid-cols-1 gap-2">
                <span className="text-[#2F2E2E] font-semibold text-sm">
                 No of signs
                </span>
                <CustomInput placeHolder="enter no" type="number" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <span className="text-[#2F2E2E] font-semibold text-sm">
                  Charges
                </span>
                <CustomInput placeHolder="enter charges"  />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-3">
            <CustomBtn
              onClick={onClose}
              label="Add"
              className="w-full sm:w-auto lg:w-1/4 bg-[#368089] text-white rounded-lg py-2"
            />
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
