import Image from "next/image";
import { CustomBtn } from "@/app/common/components/customBtn";
import { onClickStyle } from "@/app/common/style/styles";
import { EditDetailtem } from "@/app/common/components/detailItems";
import DashboardLayout from "../../dashboardLayout";

export default function EditDriver() {
  return (
    <DashboardLayout title="Edit" optionalTitle="Driver/Jhon Doe">
      <div className="flex flex-col space-y-2 lg:space-y-6">
        <span className="font-bold text-[#000637] text-3xl">Edit Driver Details</span>
        <section className="relative overflow-hidden rounded-2xl bg-[#FFFFFF] shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="relative w-full h-36 md:h-48 rounded-2xl overflow-hidden">
              <Image
                src="/Bgg@2x.png"
                alt="bgg"
                quality={100}
                priority={true}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <section className="relative z-20 -mt-20 shadow-xl rounded-2xl bg-[#FFFFFF] border w-[90%] mx-auto">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center relative">
                  <div className={`${onClickStyle} relative`}>
                    <Image
                      alt="p"
                      src="/profile.jpeg"
                      quality={100}
                      height={80}
                      width={80}
                      className="rounded-full"
                    />

                    <Image
                      alt="c"
                      src="/Group 54119.svg"
                      quality={100}
                      height={50}
                      width={50}
                      className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 rounded-full"
                    />
                  </div>

                  <div className="absolute top-0 right-0 transform -translate-y-1/2">
                    <Image
                      alt="endlogo"
                      src="/Group 53853.svg"
                      quality={100}
                      height={100}
                      width={100}
                      className="hidden md:flex h-48 w-auto "
                    />
                  </div>
                </div>

                <div className="mt-4">
                <span className="font-bold text-[#050505] ">Basic Details</span>
                </div>

                <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-4 mt-4  ">
                  <EditDetailtem
                    label="Driver ID"
                    value="ID 001"
                    isReadOnly={true}
                    gap={1}
                  />
                  <EditDetailtem label="Driver Name" value="Jhon Doe" gap={1} />
                </div>
                 
                 
                <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-4 mt-4 md:mt-8 ">
                  <EditDetailtem label="Email" value="Jhon@gmail.com" gap={1} />
                  <EditDetailtem
                    label="Phone Number"
                    value="123456789"
                    gap={1}
                  />
                </div>

                <div className="flex justify-end mt-4 lg:mt-12">
                  <CustomBtn
                    label="Save Changes"
                    className="w-1/6 bg-[#5E99A0] text-[#FFFFFF] border-[#CCCCCC] gap-x-2  
                rounded-lg border  py-2.5"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
