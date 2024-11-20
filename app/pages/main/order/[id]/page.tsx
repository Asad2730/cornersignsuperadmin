"use client";
import Image from "next/image";
import DashboardLayout from "../../dashboardLayout";
import { useMemo } from "react";
import {
  getStatusStyles,
  OrderGridCol_2,
  OrderHeader,
  OrderStatus,
} from "../component/helpers";
import { useParams } from "next/navigation";

export default function OrderDetail() {
  const { id } = useParams();
  const optionalParam = new URLSearchParams(window.location.search).get(
    "optionalParam"
  );

  const temp_signs = useMemo(() => {
    return Array.from({ length: 5 }, (_, index) => ({
      url: "/g966.svg",
      name: `Sign ${index + 1}`,
      address: "13 st New York",
    }));
  }, []);

  return (
    <DashboardLayout title="Order View" optionalTitle="Orders">
      <div className="flex flex-col space-y-2 lg:space-y-6">
        <span className="font-bold text-[#000637] text-3xl">Order Details</span>
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
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-[#5E99A0] font-bold text-xl">
                      {id}
                    </span>
                    <span
                      className={`${getStatusStyles(
                        optionalParam as OrderStatus
                      )}  font-semibold text-sm  px-4 
                      inline-flex items-center justify-center gap-2 rounded-2xl`}
                    >
                      {optionalParam}
                    </span>
                    <span className="text-[#8C8C8C] text-sm">Order ID</span>
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

                <OrderHeader title="Order Details" />
                <div className="grid grid-cols-1 gap-2 font-segoe">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 ">
                    <OrderGridCol_2 title="Order Name" value="Order 1" />
                    <OrderGridCol_2 title="No of Signs" value="6" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                    <OrderGridCol_2
                      title="Open House Address"
                      value="13th street NewYork"
                    />
                    <OrderGridCol_2 title="Pickup Address" value="Order 1" />
                    <OrderGridCol_2
                      title="Delivery Address"
                      value="13th street NewYork"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 font-segoe">
                  {temp_signs.map((i, index) => (
                    <div
                      key={index}
                      className="flex flex-col rounded-2xl items-center bg-[#FFFF] shadow border border-[#CAD3D5] space-y-2 mt-4 p-2"
                    >
                      <Image
                        src={i.url}
                        alt={i.name}
                        quality={100}
                        height={60}
                        width={60}
                        className="mt-2"
                      />
                      <span className="text-[#050505] text-sm font-bold">
                        {i.name}
                      </span>
                      <span className="text-[#97A9AC] text-sm">
                        {i.address}
                      </span>
                    </div>
                  ))}
                </div>

                <OrderHeader title="Open House Time Details" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-segoe">
                  <OrderGridCol_2 title="Date" value="10/30/2024" />
                  <OrderGridCol_2 title="time" value="12:27" />
                </div>

                <OrderHeader title="Sign Retrieval Details" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-segoe">
                  <OrderGridCol_2 title="Date" value="10/30/2024" />
                  <OrderGridCol_2 title="time" value="12:27" />
                </div>

                <OrderHeader title="Attachments" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-1/3 ">
                  <Image
                    alt="hose"
                    src="/bgImg.png"
                    quality={100}
                    height={100}
                    width={100}
                    className="rounded-2xl"
                  />
                  <Image
                    alt="hose"
                    src="/bgImg.png"
                    quality={100}
                    height={100}
                    width={100}
                    className="rounded-2xl"
                  />
                  <Image
                    alt="hose"
                    src="/bgImg.png"
                    quality={100}
                    height={100}
                    width={100}
                    className="rounded-2xl"
                  />
                </div>

                <OrderHeader title="Intrcutions" />
                <div className="text-[#252F40] mb-4 font-segoe">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum!
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
