import DashboardLayout from "../../dashboardLayout";
import { ChargesCard } from "../components/chargesCard";
import { SettingNavigation } from "../components/settingsNav";

export default function Payment() {
  return (
    <DashboardLayout title="Settings">
      <div className="flex flex-col space-y-2 lg:space-y-4">
        <SettingNavigation />
        <ChargesCard/>
      </div>
    </DashboardLayout>
  );
}
