"use client";
import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import {
  DashboardStats,
  SectionCards,
} from "@/app/(portal)/_components/section-cards";
import { SiteHeader } from "@/components/dashboard/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Footer } from "@/components/footer";
import { ChartRadialStacked } from "../radial-chart-stacked";
import { ChartPieDonut } from "../pie-chart-donut";
import { useState } from "react";

export const mockupStats: DashboardStats = {
  netProfit: {
    value: 200.5,
    percentage: -10,
    trend: -1,
  },
  totalEarnings: {
    value: 400.78,
    percentage: 5,
    trend: 1,
  },
  totalExpenses: {
    value: 4000,
    percentage: 2,
    trend: 1,
  },
  totalRides: {
    value: 200,
    percentage: 8,
    trend: 1,
  },
  period: {
    start: "2024-01-01",
    end: "2024-01-31",
    type: "month",
  },
};

export default function DashboardPage() {
  const [loading, setLoading] = useState(false);
  
  return (
    <main className="h-full flex flex-1 flex-col p-1">
      <SiteHeader />
      <ScrollArea className="h-[94dvh] p-2">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards stats={mockupStats} />
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
