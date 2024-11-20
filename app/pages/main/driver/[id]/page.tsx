"use client";
import Image from "next/image";
import DashboardLayout from "../../dashboardLayout";
import { onClickStyle } from "@/app/common/style/styles";
import { useRouter } from "next/navigation";
import { dashboard_navigation } from "@/app/common/navigation/main";

export default function DriverDetail() {
  const router = useRouter();
  const editnavigate = dashboard_navigation.Drivers.subRoutes.edit
    ? dashboard_navigation.Drivers.subRoutes.edit
    : "";

  return (
    <DashboardLayout title="Jhon Doe" optionalTitle="Driver">
      <div className="flex flex-col space-y-2 lg:space-y-6">
        <span className="font-bold text-[#000637] text-3xl">
          Driver&apos;sDetails
        </span>
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
                <div className="flex justify-between items-center ">
                  <div className={`flex flex-row space-x-2`}>
                    <Image
                      alt="p"
                      src="/profile.jpeg"
                      quality={100}
                      height={80}
                      width={80}
                      className="rounded-full"
                    />
                    <div className="flex flex-col  justify-center">
                      <span className="text-[#000637] font-bold text-3xl ">
                        Jhon Doe
                      </span>
                      <span className="text-[#5E99A0] font-bold text-lg">
                        ID-001
                      </span>
                    </div>
                  </div>

                  <Image
                    onClick={() => router.push(editnavigate)}
                    alt="edit"
                    src="/Group 54046.svg"
                    height={50}
                    width={50}
                    className={`${onClickStyle}`}
                  />
                </div>

                <div className="flex justify-between mt-2 md:mt-12">
                  <div className="flex flex-col space-y-2 md:space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 ">
                      <span className="text-[#67748E]">Email:</span>
                      <span className="text-[#252F40]">Jhon@gmail.com</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <span className="text-[#67748E]">Phone Number:</span>
                      <span className="text-[#252F40]">123456789</span>
                    </div>
                  </div>

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
            </section>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
