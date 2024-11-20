import DashboardLayout from "../dashboardLayout";
import { CustomChart } from "./component/chart";
import { Orders } from "./component/orders";
import { WelcomeCard } from "./component/welcome";

export default function Home() {
  return (
    <DashboardLayout title="Home">
      <div className="flex flex-col lg:overflow-hidden ">
        <WelcomeCard />
        <Orders />
        <CustomChart />
      </div>
    </DashboardLayout>
  );
}
