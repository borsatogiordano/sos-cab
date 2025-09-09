import {
  IconTrendingDown,
  IconTrendingUp,
  IconTrendingUp2,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card>
        <CardHeader>
          <CardDescription>Lucro Líquido</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <CardAction>
            <Badge variant="secondary">
              <IconTrendingUp />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Lucro liquído do mês</div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Ganhos Totais</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$ 5.200,00
          </CardTitle>
          <CardAction>
            <Badge variant="secondary">
              <IconTrendingUp />
              +12%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Total recebido no mês</div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Gastos Totais</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            R$ 2.150,00
          </CardTitle>
          <CardAction>
            <Badge variant="secondary">
              <IconTrendingDown />
              +8%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Total gasto no mês</div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Total de Corridas</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            47
          </CardTitle>
          <CardAction>
            <Badge variant="secondary">
              <IconTrendingUp2 />
              +5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground">Corridas realizadas no mês</div>
        </CardFooter>
      </Card>
    </div>
  );
}
