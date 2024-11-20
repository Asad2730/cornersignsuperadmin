import { CustomInput } from "@/app/common/components/customInput";
import DashboardLayout from "../dashboardLayout";
import { AgentsTable } from "./components/agentTable";


export default function Agent() {
  return (
    <DashboardLayout title="Agents">
      <div className="flex flex-col space-y-2 lg:space-y-4 h-full">
        <div className="flex justify-between md:space-x-0 space-x-4">
        <span className="text-[#1A1717] font-bold text-2xl">Agents</span>
        <CustomInput type="search" placeHolder="type here..." trailingIcon="/search.svg" iconSize={15}/>
        </div>
        <div className="flex-1 h-full">
           <AgentsTable/>
        </div>
      </div>
    </DashboardLayout>
  );
}
