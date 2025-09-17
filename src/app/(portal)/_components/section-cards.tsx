import {
  IconTrendingDown,
  IconTrendingUp,
  IconTrendingUp2,
} from "@tabler/icons-react";

import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export interface DashboardStats {
  netProfit: {
    value: number;
    percentage: number;
    trend: number;
  };
  totalEarnings: {
    value: number;
    percentage: number;
    trend: number;
  };
  totalExpenses: {
    value: number;
    percentage: number;
    trend: number;
  };
  totalRides: {
    value: number;
    percentage: number;
    trend: number;
  };
  period: {
    start: string;
    end: string;
    type: string;
  };
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const getTrendIcon = (trend: number) => {
  if (trend > 0) return IconTrendingUp;
  if (trend < 0) return IconTrendingDown;
  return IconTrendingUp2;
};

const getTrendColor = (percentage: number) => {
  return percentage < 0 ? "text-destructive" : "text-chart-2";
};

interface SectionCardsProps {
  stats: DashboardStats;
}

export function SectionCards({ stats }: SectionCardsProps) {
  const TrendIconNetProfit = getTrendIcon(stats.netProfit.trend);
  const TrendIconEarnings = getTrendIcon(stats.totalEarnings.trend);
  const TrendIconExpenses = getTrendIcon(stats.totalExpenses.trend);
  const TrendIconRides = getTrendIcon(stats.totalRides.trend);

  const periodText = "mês";

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-background grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card>
        <CardHeader>
          <CardDescription>Lucro Líquido</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(stats.netProfit.value)}
          </CardTitle>
          <CardAction>
            <Badge
              variant={"secondary"}
              className={`text-xs ${getTrendColor(stats.netProfit.percentage)}`}
            >
              <TrendIconNetProfit
                className={getTrendColor(stats.netProfit.percentage)}
              />
              {stats.netProfit.percentage > 0 ? "+" : ""}
              {stats.netProfit.percentage}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Lucro líquido do {periodText}
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Ganhos Totais</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(stats.totalEarnings.value)}
          </CardTitle>
          <CardAction>
            <Badge
              variant={"secondary"}
              className={`text-xs ${getTrendColor(
                stats.totalEarnings.percentage
              )}`}
            >
              <TrendIconEarnings
                className={getTrendColor(stats.totalEarnings.percentage)}
              />
              {stats.totalEarnings.percentage > 0 ? "+" : ""}
              {stats.totalEarnings.percentage}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Total recebido no {periodText}
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Gastos Totais</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(stats.totalExpenses.value)}
          </CardTitle>
          <CardAction>
            <Badge
              variant={"secondary"}
              className={`text-xs ${getTrendColor(
                stats.totalExpenses.percentage
              )}`}
            >
              <TrendIconExpenses
                className={getTrendColor(stats.totalExpenses.percentage)}
              />
              {stats.totalExpenses.percentage > 0 ? "+" : ""}
              {stats.totalExpenses.percentage}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Total gasto no {periodText}
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Total de Corridas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {stats.totalRides.value}
          </CardTitle>
          <CardAction>
            <Badge
              variant={"secondary"}
              className={`text-xs ${getTrendColor(
                stats.totalRides.percentage
              )}`}
            >
              <TrendIconRides
                className={getTrendColor(stats.totalRides.percentage)}
              />
              {stats.totalRides.percentage > 0 ? "+" : ""}
              {stats.totalRides.percentage}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">
            Corridas realizadas no {periodText}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
