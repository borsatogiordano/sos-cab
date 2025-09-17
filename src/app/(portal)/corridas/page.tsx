"use server";

import { getDashboardsStats } from "@/src/actions/dashboards-actions";
import { RidesPage } from "./_components/page/RidesPage";



export default async function Page() {
  const stats = await getDashboardsStats();
  return <RidesPage {...stats} />;
}
  