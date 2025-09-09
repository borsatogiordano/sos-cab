"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconCar,
  IconCurrencyDollar,
  IconDotsVertical,
  IconGripVertical,
} from "@tabler/icons-react";
import { useSortable } from "@dnd-kit/sortable";
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export type Gasto = {
  id: number;
  partida?: string;
  destino?: string;
  distancia?: number;
  descricao?: string;
  categoria?: string;
  valor: number;
  pagamento: "Dinheiro" | "Cartão" | "Pix";
  observacoes?: string;
  data: string;
};

function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({ id });

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent"
    >
      <IconGripVertical className="text-muted-foreground size-3" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  );
}

function ValueCell({ value }: { value: number }) {
  return (
    <div className="text-left font-medium text-destructive">
      -
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)}
    </div>
  );
}

function ObservacaoCell({ observacoes }: { observacoes?: string }) {
  if (!observacoes) {
    return <span className="text-sm text-muted-foreground">—</span>;
  }

  const hasLongText = observacoes.length > 30;

  if (!hasLongText) {
    return (
      <span className="text-sm text-muted-foreground">
        {observacoes}
      </span>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-muted-foreground hover:text-foreground cursor-pointer underline-offset-4 hover:underline text-left">
          {observacoes.slice(0, 30)}...
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Observações Completas</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm whitespace-pre-wrap max-h-96 overflow-y-auto">
          {observacoes}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export const columns: ColumnDef<Gasto>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        {/* <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        /> */}
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        {/* <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        /> */}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        <IconCurrencyDollar className="mr-1 size-3" />
        Gasto
      </Badge>
    ),
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
    cell: ({ row }) => {
      const item = row.original;
      return (
        <div className="flex flex-col">
          <span className="font-medium">{item.descricao}</span>
          <span className="text-sm text-muted-foreground">
            {item.categoria}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "valor",
    header: () => <div className="text-left">Valor</div>,
    cell: ({ row }) => <ValueCell value={row.original.valor} />,
  },
  {
    accessorKey: "pagamento",
    header: "Pagamento",
    cell: ({ row }) => (
      <Badge variant="secondary" className="text-xs">
        {row.original.pagamento}
      </Badge>
    ),
  },
  {
    accessorKey: "details",
    header: "Detalhes",
    cell: ({ row }) => (
      <ObservacaoCell observacoes={row.original.observacoes} />
    ),
  },
  {
    accessorKey: "hora",
    header: "Hora",
    cell: ({ row }) => {
      const date = new Date(row.original.data);
      return (
        <div className="text-sm text-muted-foreground">
          {date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "data",
    header: "Data",
    cell: ({ row }) => {
      const date = new Date(row.original.data);
      return (
        <div className="text-sm font-medium">
          {date.toLocaleDateString("pt-BR")}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem>Duplicar</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];


