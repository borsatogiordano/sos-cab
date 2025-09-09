import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import {
  DashboardStats,
  SectionCards,
} from "@/app/(portal)/_components/section-cards";
import { SiteHeader } from "@/components/dashboard/site-header";

import { ScrollArea } from "@/components/ui/scroll-area";

import { columns} from "./corridas/_components/columns";
import { DataTable } from "../../components/data-table";
import { Item } from "./_components/columns";

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

export default function Page() {
  const mockData: Item[] = [
    {
      id: 1,
      type: "corrida",
      partida: "Centro",
      destino: "Aeroporto",
      valor: 45.5,
      distancia: 15.2,
      pagamento: "Pix",
      observacoes: "Cliente frequente",
      data: "2024-01-15T08:30:00",
    },
    {
      id: 2,
      type: "gasto",
      descricao: "Combustível",
      categoria: "Manutenção",
      valor: 150.0,
      pagamento: "Cartão",
      observacoes: "Posto Shell",
      data: "2024-01-15T10:45:00",
    },
    {
      id: 3,
      type: "corrida",
      partida: "Shopping",
      destino: "Residência",
      valor: 25.0,
      distancia: 8.5,
      pagamento: "Dinheiro",
      data: "2024-01-16T14:20:00",
    },
    {
      id: 4,
      type: "gasto",
      descricao: "Lavagem do carro",
      categoria: "Limpeza",
      valor: 30.0,
      pagamento: "Pix",
      observacoes: "Lava-jato do centro",
      data: "2024-01-16T16:15:00",
    },
    {
      id: 5,
      type: "corrida",
      partida: "Residência",
      destino: "Trabalho",
      valor: 20.0,
      distancia: 7.0,
      pagamento: "Cartão",
      data: "2024-01-17T07:50:00",
    },
  ];

  const ridesBreadcrumbs = [
    { label: "SOS-Cab", href: "/" },
    { label: "Dashboard", href: "/", isCurrentPage: true },
  ];

  return (
    <section className="h-full flex flex-1 flex-col p-1">
      <SiteHeader />
      <ScrollArea className="h-[94dvh] p-2">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards stats={mockupStats} />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div className="px-4 lg:px-6">
                <DataTable columns={columns} data={mockData} />
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
