"use server";

import { getDashboardsStats } from "@/src/actions/dashboards-actions";
import DashboardPage from "./_components/page/dashboardPage";

export default async function Page() {
  return <DashboardPage />;
}
