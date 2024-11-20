"use client";
import { CustomBtn } from "@/app/common/components/customBtn";
import { onClickStyle } from "@/app/common/style/styles";
import Image from "next/image";
import { useState } from "react";
import { SignInModal } from "./signInModal";
import { ConfirmDeleteModal } from "@/app/common/components/confirmDeleteModal";

const charges = [
  { signs: 3, charges: "$10" },
  { signs: 10, charges: "$30" },
  { signs: 5, charges: "$50" },
];

export const ChargesCard = () => {
  const [data] = useState(charges);
  const [isOpen, setOpen] = useState(false);
  const [confirmDelete,setConfrimDelete] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-[#FFFFFF] shadow lg:h-[525px]">
        <div className="px-4 py-5 sm:px-6">
          <div className="mx-auto p-4 md:p-6 border border-[#00000040] rounded-2xl shadow">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg text-[#344767]">
                Sign Charges
              </span>
              <CustomBtn
                label="Add Sign Charges"
                onClick={open}
                className="bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] gap-x-2 w-auto rounded-lg border py-2 px-4"
              />
            </div>

            <div className="w-full overflow-x-auto mt-4">
              <table className="w-full min-w-[640px]">
                <thead className="bg-[#EEF5F5]">
                  <tr className="text-left text-[#000637] text-xs sm:text-sm leading-normal whitespace-nowrap">
                    <th className="py-3 px-2 sm:px-4">No of Signs</th>
                    <th className="py-3 px-2 sm:px-4">Charges</th>
                    <th className="py-3 px-2 sm:px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#EEF5F5] text-[#000637] whitespace-nowrap"
                    >
                      <td className="py-3 px-2 sm:px-4 font-semibold">
                        {item.signs}
                      </td>
                      <td className="py-3 px-2 sm:px-4 font-semibold">
                        {item.charges}
                      </td>
                      <td className="py-3 px-2 sm:px-4 flex items-center space-x-2">
                        <Image
                          onClick={()=>setConfrimDelete(true)}
                          alt="delete"
                          src="/delete-svgrepo-com.svg"
                          quality={100}
                          height={20}
                          width={20}
                          className={onClickStyle}
                        />
                        <Image
                          alt="edit"
                          src="/edit-tb.svg"
                          quality={100}
                          height={20}
                          width={20}
                          className={onClickStyle}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <SignInModal open={isOpen} onClose={close} />
      <ConfirmDeleteModal open={confirmDelete} onClose={()=>setConfrimDelete(false)}/>
    </>
  );
};
