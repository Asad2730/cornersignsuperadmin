import DashboardLayout from "../../dashboardLayout";
import { GuideCard } from "../components/guideCard";
import { SettingNavigation } from "../components/settingsNav";

export default function Guide() {
  return (
    <DashboardLayout title="Settings">
      <div className="flex flex-col space-y-2 lg:space-y-4">
        <SettingNavigation />
         <GuideCard/>
      </div>
    </DashboardLayout>
  );
}
