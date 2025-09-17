"use server";

import { ChartAreaInteractive } from "@/src/components/dashboard/chart-area-interactive";
import {
  SectionCards,
} from "@/src/app/(portal)/_components/section-cards";
import { SiteHeader } from "@/src/components/dashboard/site-header";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Footer } from "@/src/components/footer";
import { ChartRadialStacked } from "../radial-chart-stacked";
import { ChartPieDonut } from "../pie-chart-donut";
import { getDashboardsStats } from "@/src/actions/dashboards-actions";

export default async function DashboardPage() {

  const stats = await getDashboardsStats();

  return (
    <main className="h-full flex flex-1 flex-col p-1">
      <SiteHeader />
      <ScrollArea className="h-[94dvh] p-2">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards stats={stats} />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div className="flex flex-col lg:flex-row px-4 lg:px-6 gap-4">
                <ChartRadialStacked />
                <ChartPieDonut />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </ScrollArea>
    </main>
  );
}
