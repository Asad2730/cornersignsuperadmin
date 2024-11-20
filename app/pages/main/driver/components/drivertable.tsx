"use client";
import { CustomBtn } from "@/app/common/components/customBtn";
import { onClickStyle } from "@/app/common/style/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { drivers } from "../temp/driversList";
import { dashboard_navigation } from "@/app/common/navigation/main";
import { ConfirmDeleteModal } from "@/app/common/components/confirmDeleteModal";


export const DriversTable = () => {
  const router = useRouter();
  const [data] = useState(drivers);
  const [open,setOpen] = useState(false)
  const onOpen = () =>setOpen(true)
  const onClose = () => setOpen(false)

  const navigate = (id:string) => router.push(dashboard_navigation.Drivers.subRoutes.detail(id))
  
  const editnavigate = dashboard_navigation.Drivers.subRoutes.edit?dashboard_navigation.Drivers.subRoutes.edit:''

  return (
   <>
     <div className="overflow-hidden rounded-lg bg-[#FFFFFF] shadow">
      <div className="px-4 py-5 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full overflow-x-auto mt-4">
          {data.length > 0 ? (
            <table className="w-full min-w-[640px]">
              <thead className="bg-[#EEF5F5]">
                <tr className="text-left text-[#000637] text-xs sm:text-sm leading-normal whitespace-nowrap">
                  <th className="py-3 px-2 sm:px-4">ID</th>
                  <th className="py-3 px-2 sm:px-4">Driver Name</th>
                  <th className="py-3 px-2 sm:px-4">Email</th>
                  <th className="py-3 px-2 sm:px-4">Phone Number</th>
                  <th className="py-3 px-2 sm:px-4">SSN</th>
                  <th className="py-3 px-2 sm:px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#EEF5F5] text-[#000637] whitespace-nowrap"
                  >
                    <td className="py-3 px-2 sm:px-4">{item.id}</td>
                    <td className="py-3 px-2 sm:px-4">
                      <div className="flex items-center">
                        <Image
                          alt="pic"
                          src={item.uri}
                          height={30}
                          width={30}
                          quality={100}
                          className="rounded-full"
                        />
                        <span className="ml-3">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 sm:px-4">{item.email}</td>
                    <td className="py-3 px-2 sm:px-4">{item.phone}</td>
                    <td className="py-3 px-2 sm:px-4">{item.ssn}</td>
                    <td className="py-3 px-2 sm:px-4 flex space-x-1">
                      <Image
                        onClick={onOpen}
                        alt="delete"
                        src="/delete-svgrepo-com.svg"
                        quality={100}
                        height={20}
                        width={20}
                        className={`${onClickStyle}`}
                      />
                      <Image
                        onClick={()=>navigate(item.id)}
                        alt="eye"
                        src="/eye-tb.svg"
                        quality={100}
                        height={20}
                        width={20}
                        className={`${onClickStyle}`}
                      />
                      <Image
                        onClick={()=>router.push(editnavigate)}
                        alt="edit"
                        src="/edit-tb.svg"
                        quality={100}
                        height={20}
                        width={20}
                        className={`${onClickStyle}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center h-60 sm:h-80 md:h-96">
              <Image
                alt="no jobs"
                src="/Group 35287.svg"
                height={100}
                width={100}
                quality={100}
              />
              <p className="text-[#212B36] font-semibold mt-4 text-center">
                There are no Jobs yet
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <nav className="inline-flex space-x-2">
            <CustomBtn
              label="1"
              className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
            />
            <CustomBtn
              label="2"
              className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
            />
            <CustomBtn
              label="3"
              className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
            />
            <CustomBtn
              label="4"
              className="px-2 py-1 rounded-full bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] text-xs sm:text-sm hover:bg-[#4D8A91]"
            />
          </nav>
        </div>
      </div>
    </div>

    <ConfirmDeleteModal open={open} onClose={onClose}/>
   </>
  );
};
