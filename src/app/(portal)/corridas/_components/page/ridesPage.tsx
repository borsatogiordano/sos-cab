"use client";

import { useState } from "react";
import { SectionCards } from "@/src/app/(portal)/_components/section-cards";
import { SiteHeader } from "@/src/components/dashboard/site-header";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { DialogForm } from "@/src/components/dialog-form";
import RideForm from "@/src/components/forms/post-edit-ride/post-edit-ride";
import { BadgePlus } from "lucide-react";
import { mockupStats } from "../../../_components/page/dashboardPage";
import { DataTable } from "@/src/components/data-table";
import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Badge } from "@/src/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { ColumnDef } from "@tanstack/react-table";
import {
  IconDotsVertical,
  IconGripVertical,
  IconCar,
  IconRoute,
} from "@tabler/icons-react";
import { ObservationsDialog } from "@/src/components/dialog-observations";

// Tipo para Corridas
export type Ride = {
  id: number;
  partida: string;
  destino: string;
  distancia: number;
  valor: number;
  pagamento: "Dinheiro" | "Cartão" | "Pix";
  observacoes?: string;
  data: string;
  hora: string;
};

const mockedRides: Ride[] = [
  {
    id: 1,
    partida: "Centro",
    destino: "Rodoviária",
    distancia: 8.2,
    valor: 25.0,
    pagamento: "Pix",
    observacoes: "Cliente pagou rápido",
    data: "2025-09-01",
    hora: "08:30",
  },
  {
    id: 2,
    partida: "Aeroporto",
    destino: "Hotel Plaza",
    distancia: 15.5,
    valor: 70.0,
    pagamento: "Cartão",
    observacoes:
      "Cliente estrangeiro, muito educado, passou o numero pra eu ligar pra ele e tudo mais",
    data: "2025-09-02",
    hora: "14:20",
  },
  {
    id: 3,
    partida: "Shopping Center",
    destino: "Bairro Novo",
    distancia: 12.3,
    valor: 55.0,
    pagamento: "Dinheiro",
    observacoes: "Trânsito pesado, corrida demorou mais que o normal",
    data: "2025-09-03",
    hora: "16:45",
  },
  {
    id: 4,
    partida: "Hospital",
    destino: "Centro",
    distancia: 6.7,
    valor: 30.0,
    pagamento: "Pix",
    data: "2025-09-05",
    hora: "10:15",
  },
  {
    id: 5,
    partida: "Estação Norte",
    destino: "Universidade",
    distancia: 10.0,
    valor: 45.0,
    pagamento: "Cartão",
    observacoes: "Cliente pediu recibo",
    data: "2025-09-07",
    hora: "07:30",
  },
  {
    id: 6,
    partida: "Parque Central",
    destino: "Museu de Arte",
    distancia: 5.4,
    valor: 30.0,
    pagamento: "Dinheiro",
    observacoes: "Cliente muito interessado em arte",
    data: "2025-09-08",
    hora: "15:20",
  },
  {
    id: 7,
    partida: "Zona Sul",
    destino: "Centro Comercial",
    distancia: 18.7,
    valor: 85.0,
    pagamento: "Pix",
    observacoes: "Corrida longa, cliente dormiu no trajeto",
    data: "2025-09-10",
    hora: "22:10",
  },
  {
    id: 8,
    partida: "Estação Central",
    destino: "Bairro Jardins",
    distancia: 9.3,
    valor: 42.0,
    pagamento: "Cartão",
    data: "2025-09-11",
    hora: "11:45",
  },
  {
    id: 9,
    partida: "Mercado Municipal",
    destino: "Residencial Alfa",
    distancia: 7.8,
    valor: 28.0,
    pagamento: "Pix",
    observacoes: "Cliente carregava muitas sacolas",
    data: "2025-09-12",
    hora: "09:10",
  },
  {
    id: 10,
    partida: "Bairro Verde",
    destino: "Clínica São Lucas",
    distancia: 5.1,
    valor: 22.0,
    pagamento: "Dinheiro",
    data: "2025-09-13",
    hora: "08:00",
  },
  {
    id: 11,
    partida: "Rodoviária",
    destino: "Faculdade Federal",
    distancia: 11.4,
    valor: 50.0,
    pagamento: "Cartão",
    observacoes: "Estudante com muitas malas",
    data: "2025-09-14",
    hora: "13:40",
  },
  {
    id: 12,
    partida: "Centro",
    destino: "Bairro Horizonte",
    distancia: 14.6,
    valor: 62.0,
    pagamento: "Pix",
    data: "2025-09-15",
    hora: "19:25",
  },
  {
    id: 13,
    partida: "Hotel Plaza",
    destino: "Aeroporto",
    distancia: 15.5,
    valor: 70.0,
    pagamento: "Cartão",
    observacoes: "Cliente pediu música clássica no trajeto",
    data: "2025-09-16",
    hora: "06:10",
  },
  {
    id: 14,
    partida: "Bairro Novo",
    destino: "Shopping Center",
    distancia: 12.3,
    valor: 54.0,
    pagamento: "Pix",
    data: "2025-09-17",
    hora: "15:00",
  },
  {
    id: 15,
    partida: "Residencial Alfa",
    destino: "Mercado Municipal",
    distancia: 7.7,
    valor: 27.0,
    pagamento: "Dinheiro",
    observacoes: "Corrida curta mas com muito trânsito",
    data: "2025-09-18",
    hora: "18:50",
  },
  {
    id: 16,
    partida: "Bairro Jardins",
    destino: "Estação Central",
    distancia: 9.3,
    valor: 42.0,
    pagamento: "Pix",
    data: "2025-09-19",
    hora: "20:30",
  },
  {
    id: 17,
    partida: "Universidade",
    destino: "Biblioteca Municipal",
    distancia: 6.0,
    valor: 25.0,
    pagamento: "Cartão",
    observacoes: "Cliente ficou estudando no carro",
    data: "2025-09-20",
    hora: "10:05",
  },
  {
    id: 18,
    partida: "Clínica São Lucas",
    destino: "Bairro Verde",
    distancia: 5.0,
    valor: 21.0,
    pagamento: "Dinheiro",
    data: "2025-09-21",
    hora: "09:20",
  },
  {
    id: 19,
    partida: "Estação Norte",
    destino: "Parque Central",
    distancia: 8.5,
    valor: 36.0,
    pagamento: "Pix",
    data: "2025-09-22",
    hora: "16:45",
  },
  {
    id: 20,
    partida: "Biblioteca Municipal",
    destino: "Rodoviária",
    distancia: 10.1,
    valor: 40.0,
    pagamento: "Cartão",
    observacoes: "Cliente pediu silêncio no trajeto",
    data: "2025-09-23",
    hora: "07:55",
  },
];

export function RidesPage() {
  const [editingItem, setEditingItem] = useState<Ride | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [observacoesDialog, setObservacoesDialog] = useState<{
    isOpen: boolean;
    content: string;
  }>({
    isOpen: false,
    content: "",
  });

  const handleEdit = (item: Ride) => {
    setEditingItem(item);
    setIsDialogOpen(true);
  };

  const handleCreateNew = () => {
    setEditingItem(null);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingItem(null);
  };

  const handleDelete = (item: Ride) => {
    console.log("Excluir:", item);
  };

  const showObservacoes = (observacoes: string) => {
    setObservacoesDialog({ isOpen: true, content: observacoes });
  };

  const DragHandle = ({ id }: { id: number }) => (
    <Button
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent"
    >
      <IconGripVertical className="text-muted-foreground size-3" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  );

  const ValueCell = ({ value }: { value: number }) => {
    return (
      <div className="text-left font-medium text-chart-2">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value)}
      </div>
    );
  };

  const ObservacaoCell = ({ observacoes }: { observacoes?: string }) => {
    if (!observacoes) {
      return <span className="text-sm text-muted-foreground">—</span>;
    }

    const hasLongText = observacoes.length > 50;

    if (!hasLongText) {
      return (
        <span className="text-sm text-muted-foreground">{observacoes}</span>
      );
    }

    return (
      <button
        className="text-sm text-muted-foreground hover:text-foreground cursor-pointer underline-offset-4 hover:underline text-left"
        onClick={() => showObservacoes(observacoes)}
      >
        {observacoes.slice(0, 50)}...
      </button>
    );
  };

  const columns: ColumnDef<Ride>[] = [
    {
      id: "id",
      header: "ID",
      cell: ({ row }) => <span className="font-medium">{row.original.id}</span>,
    },
    {
      accessorKey: "trajeto",
      header: "Trajeto",
      cell: ({ row }) => {
        const corrida = row.original;
        return (
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <IconRoute className="size-4 text-muted-foreground" />
              <span className="font-medium">{corrida.partida}</span>
            </div>
            <span className="text-sm text-muted-foreground ml-6">
              para {corrida.destino}
            </span>
          </div>
        );
      },
      enableHiding: false,
    },
    {
      accessorKey: "distancia",
      header: "Distância",
      cell: ({ row }) => {
        const distancia = row.original.distancia;
        return <div className="text-sm">{distancia.toFixed(1)} km</div>;
      },
    },
    {
      accessorKey: "valor",
      header: () => <div className="text-right">Valor</div>,
      cell: ({ row }) => (
        <div className="text-right">
          <ValueCell value={row.original.valor} />
        </div>
      ),
    },
    {
      accessorKey: "pagamento",
      header: "Pagamento",
      cell: ({ row }) => (
        <Badge variant="outline">{row.original.pagamento}</Badge>
      ),
    },
    {
      accessorKey: "observacoes",
      header: "Observações",
      cell: ({ row }) => (
        <ObservacaoCell observacoes={row.original.observacoes} />
      ),
    },
    {
      accessorKey: "hora",
      header: "Hora",
      cell: ({ row }) => {
        return (
          <div className="text-sm text-muted-foreground">
            {row.original.hora}
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
          <div className="text-sm">{date.toLocaleDateString("pt-BR")}</div>
        );
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const corrida = row.original;

        return (
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
              <DropdownMenuItem onClick={() => handleEdit(corrida)}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={() => handleDelete(corrida)}
              >
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const TableButtons = () => {
    return (
      <DialogForm
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        form={
          <RideForm
            initialData={
              editingItem
                ? {
                    partida: editingItem.partida,
                    destino: editingItem.destino,
                    valor: editingItem.valor,
                    distancia: editingItem.distancia,
                    pagamento: editingItem.pagamento.toLowerCase() as
                      | "dinheiro"
                      | "cartao"
                      | "pix",
                    observacoes: editingItem.observacoes || "",
                  }
                : undefined
            }
            formType={editingItem ? "put" : "post"}
            onSuccess={handleCloseDialog}
          />
        }
        title={editingItem ? "Editar Corrida" : "Registrar Corrida"}
        description={
          editingItem
            ? "Edite os dados da corrida"
            : "Preencha os dados da corrida"
        }
        buttonText={
          <>
            <BadgePlus />
            Registrar nova corrida
          </>
        }
        onButtonClick={handleCreateNew}
      />
    );
  };

  return (
    <section className="h-full flex flex-1 flex-col p-1">
      <SiteHeader />
      <ScrollArea className="h-[94dvh] p-2">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <SectionCards stats={mockupStats} />
            <div className="px-4 lg:px-6">
              <DataTable
                otherButtons={TableButtons}
                data={mockedRides}
                columns={columns}
                placeholder="Buscar por partida ou destino..."
              />
            </div>
          </div>
        </div>
      </ScrollArea>

      <ObservationsDialog
        isOpen={observacoesDialog.isOpen}
        onOpenChange={(open) =>
          setObservacoesDialog((prev) => ({ ...prev, isOpen: open }))
        }
        content={observacoesDialog.content}
      />
    </section>
  );
}
