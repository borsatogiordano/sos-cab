"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  { categoria: "combustivel", valor: 320.50, fill: "var(--color-combustivel)" },
  { categoria: "manutencao", valor: 180.00, fill: "var(--color-manutencao)" },
  { categoria: "alimentacao", valor: 125.30, fill: "var(--color-alimentacao)" },
  { categoria: "pedagio", valor: 95.20, fill: "var(--color-pedagio)" },
  { categoria: "seguro", valor: 85.00, fill: "var(--color-seguro)" },
  { categoria: "lavagem", valor: 60.00, fill: "var(--color-lavagem)" },
  { categoria: "documentacao", valor: 45.50, fill: "var(--color-documentacao)" },
  { categoria: "outros", valor: 35.80, fill: "var(--color-outros)" },
];

const chartConfig = {
  valor: {
    label: "Valor",
  },
  combustivel: {
    label: "Combustível",
    color: "var(--chart-1)",
  },
  manutencao: {
    label: "Manutenção",
    color: "var(--chart-2)",
  },
  alimentacao: {
    label: "Alimentação",
    color: "var(--chart-3)",
  },
  pedagio: {
    label: "Pedágio",
    color: "var(--chart-4)",
  },
  seguro: {
    label: "Seguro",
    color: "var(--chart-5)",
  },
  lavagem: {
    label: "Lavagem",
    color: "var(--chart-1)",
  },
  documentacao: {
    label: "Documentação",
    color: "var(--chart-2)",
  },
  outros: {
    label: "Outros",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartPieDonut() {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribuição de gastos</CardTitle>
        <CardDescription>Últimos 3 meses</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="valor"
              nameKey="categoria"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Gastos aumentaram 3.2% este mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Distribuição dos gastos por categoria nos últimos 3 meses
        </div>
      </CardFooter>
    </Card>
  );
}
