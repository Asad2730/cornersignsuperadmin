import { CustomInput } from "@/app/common/components/customInput";
import DashboardLayout from "../dashboardLayout";
import { OrdersTable } from "./component/ordertable";
import { CustomDdl } from "@/app/common/components/customDdl";

export default function Orders() {
  return (
    <DashboardLayout title="All orders" optionalTitle="orders">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
          <span className="text-[#000637] font-bold text-xl md:text-2xl">
            Orders
          </span>
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-4 sm:space-y-0 items-start sm:items-center">
            <div className="hidden lg:flex lg:w-[30%]"/>
            <div className="w-full lg:w-[35%]">
            <CustomDdl placeHolder="Status" iconSize={15} items={['Reached','Picked','Delivered','Accepted',
              'Retrieved','Completed','Signs Returned','Pending']}/>  
            </div>
            <div className="w-full lg:w-[35%]">
              <CustomInput
                placeHolder="Type here..."
                type="search"
                leadingIcon="/search.svg"
              />
            </div>
          </div>
        </div>
        <OrdersTable />
      </div>
    </DashboardLayout>
  );
}
