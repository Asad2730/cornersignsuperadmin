"use client";
import { CustomBtn } from "@/app/common/components/customBtn";
import { dashboard_navigation } from "@/app/common/navigation/main";
import { onClickStyle } from "@/app/common/style/styles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sampleOrders, Order } from "../temp/orderList";
import { getStatusStyles, OrderStatus } from "./helpers";

export const OrdersTable = () => {
  const router = useRouter();
  const [orders, setOrders] = useState(sampleOrders);
  const [activeTab, setActiveTab] = useState(1);

  const shuffleOrders = (ordersArray: Order[]): Order[] =>
    ordersArray
      .map((order) => ({ order, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ order }) => order);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
    setOrders(shuffleOrders(sampleOrders));
  };

  const viewOrder = (id: string,status?:string) => {
    if(activeTab === 4){
      router.push(dashboard_navigation.Orders.subRoutes.detail(id,'COMPLETED'))
    }else{
      router.push(dashboard_navigation.Orders.subRoutes.detail(id,status))
    }
  };

  const ordersLenth: number =
    sampleOrders.length === 0 ? 0 : sampleOrders.length + 1;

  
  return (
    <div className="overflow-hidden rounded-lg bg-[#FFFFFF] shadow">
      <div className="px-4 py-5 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row">
          <span
            onClick={() => handleTabClick(1)}
            className={`py-2 px-4 font-semibold text-center sm:text-left cursor-pointer border-b-2 ${
              activeTab === 1
                ? "text-[#5E99A0] border-[#5E99A0]"
                : "text-[#252829] border-transparent"
            }`}
          >
            All Orders ({ordersLenth})
          </span>
          <span
            onClick={() => handleTabClick(2)}
            className={`py-2 px-4 font-semibold text-center sm:text-left cursor-pointer border-b-2 ${
              activeTab === 2
                ? "text-[#5E99A0] border-[#5E99A0]"
                : "text-[#252829] border-transparent"
            }`}
          >
            Placement Orders ({ordersLenth})
          </span>
          <span
            onClick={() => handleTabClick(3)}
            className={`py-2 px-4 font-semibold text-center sm:text-left cursor-pointer border-b-2 ${
              activeTab === 3
                ? "text-[#5E99A0] border-[#5E99A0]"
                : "text-[#252829] border-transparent"
            }`}
          >
            Retrieved Orders ({ordersLenth})
          </span>

          <span
            onClick={() => handleTabClick(4)}
            className={`py-2 px-4 font-semibold text-center sm:text-left cursor-pointer border-b-2 ${
              activeTab === 4
                ? "text-[#5E99A0] border-[#5E99A0]"
                : "text-[#252829] border-transparent"
            }`}
          >
            Completed Orders ({ordersLenth})
          </span>
        </div>

        <div className="w-full overflow-x-auto mt-4">
          {orders.length > 0 ? (
            <table className="w-full min-w-[640px]">
              <thead className="bg-[#EEF5F5]">
                <tr className="text-left text-[#000637] text-xs sm:text-sm leading-normal whitespace-nowrap">
                  <th className="py-3 px-2 sm:px-4">ID</th>
                  <th className="py-3 px-2 sm:px-4">No of Signs</th>
                  <th className="py-3 px-2 sm:px-4">Pickup Address</th>
                  <th className="py-3 px-2 sm:px-4">Return Address</th>
                  <th className="py-3 px-2 sm:px-4">Date</th>
                  <th className="py-3 px-2 sm:px-4">Time</th>
                  <th className="py-3 px-2 sm:px-4">Driver Name</th>
                  <th className="py-3 px-2 sm:px-4 text-center">
                    Compensation
                  </th>
                  <th className="py-3 px-2 sm:px-4">Status</th>
                  <th className="py-3 px-2 sm:px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#EEF5F5] text-[#000637] whitespace-nowrap"
                  >
                    <td className="py-3 px-2 sm:px-4">{order.id}</td>
                    <td className="py-3 px-2 sm:px-4">{order.signs}</td>
                    <td className="py-3 px-2 sm:px-4">{order.pickupAddress}</td>
                    <td className="py-3 px-2 sm:px-4">{order.returnAddress}</td>
                    <td className="py-3 px-2 sm:px-4">{order.date}</td>
                    <td className="py-3 px-2 sm:px-4">{order.time}</td>
                    <td className="py-3 px-2 sm:px-4">
                      <div className="flex items-center">
                        <Image
                          alt="pic"
                          src={order.driver_pic}
                          height={30}
                          width={30}
                          quality={100}
                          className="rounded-full"
                        />
                        <span className="ml-3">{order.driverName}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2 sm:px-4 text-center">
                      {order.compensation}
                    </td>
                    <td className="py-3 px-2 sm:px-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full 
                          ${activeTab === 4? getStatusStyles('COMPLETED'):getStatusStyles(order.status as OrderStatus)}`}
                      >
                        {activeTab === 4?'Completed':order.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 sm:px-4 flex space-x-1">
                      <Image
                        onClick={() => viewOrder(order.id,order.status)}
                        alt="eye"
                        src="/eye-tb.svg"
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
  );
};
