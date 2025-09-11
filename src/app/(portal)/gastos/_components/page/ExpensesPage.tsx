"use client";

import { useState } from "react";
import { SectionCards } from "@/src/app/(portal)/_components/section-cards";
import { SiteHeader } from "@/src/components/dashboard/site-header";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { DialogForm } from "@/src/components/dialog-form";
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
import { ColumnDef } from "@tanstack/react-table";
import {
  IconDotsVertical,
  IconGripVertical,
  IconGasStation,
  IconCar,
  IconShield,
  IconFileText,
  IconToolsKitchen2,
  IconRoad,
  IconSpray,
  IconDots,
} from "@tabler/icons-react";
import { ObservationsDialog } from "@/src/components/dialog-observations";

// Tipo para Gastos
export type Gasto = {
  id: number;
  descricao: string;
  categoria:
    | "Combustível"
    | "Manutenção"
    | "Seguro"
    | "Documentação"
    | "Alimentação"
    | "Pedágio"
    | "Lavagem"
    | "Outros";
  valor: number;
  observacoes?: string;
  data: string;
  hora: string;
};

// Dados mockados de gastos
const mockedGastos: Gasto[] = [
  {
    id: 1,
    descricao: "Gasolina Comum",
    categoria: "Combustível",
    valor: 80.5,
    observacoes: "Posto Shell - Desconto no cartão",
    data: "2025-09-01",
    hora: "08:30",
  },
  {
    id: 2,
    descricao: "Troca de óleo",
    categoria: "Manutenção",
    valor: 120.0,
    observacoes: "Óleo sintético 5W30 - próxima troca em 10.000km",
    data: "2025-09-02",
    hora: "14:20",
  },
  {
    id: 3,
    descricao: "Almoço",
    categoria: "Alimentação",
    valor: 25.0,
    data: "2025-09-03",
    hora: "12:15",
  },
  {
    id: 4,
    descricao: "Pedágio Linha Amarela",
    categoria: "Pedágio",
    valor: 8.7,
    observacoes: "Corrida para aeroporto",
    data: "2025-09-03",
    hora: "16:45",
  },
  {
    id: 5,
    descricao: "Seguro DPVAT",
    categoria: "Seguro",
    valor: 150.0,
    observacoes: "Pagamento anual",
    data: "2025-09-04",
    hora: "10:00",
  },
  {
    id: 6,
    descricao: "Renovação CNH",
    categoria: "Documentação",
    valor: 220.45,
    observacoes: "Exames + taxa do Detran",
    data: "2025-09-05",
    hora: "09:30",
  },
  {
    id: 7,
    descricao: "Lavagem completa",
    categoria: "Lavagem",
    valor: 35.0,
    data: "2025-09-06",
    hora: "15:20",
  },
  {
    id: 8,
    descricao: "Etanol",
    categoria: "Combustível",
    valor: 60.0,
    observacoes: "Posto Ipiranga - Promoção",
    data: "2025-09-07",
    hora: "18:45",
  },
  {
    id: 9,
    descricao: "Pastilha de freio",
    categoria: "Manutenção",
    valor: 180.0,
    observacoes: "Freio dianteiro - peças originais",
    data: "2025-09-08",
    hora: "11:10",
  },
  {
    id: 10,
    descricao: "Lanche",
    categoria: "Alimentação",
    valor: 15.5,
    data: "2025-09-09",
    hora: "16:30",
  },
  {
    id: 11,
    descricao: "Multa por estacionamento",
    categoria: "Outros",
    valor: 88.0,
    observacoes: "Zona azul vencida - centro da cidade",
    data: "2025-09-10",
    hora: "14:00",
  },
  {
    id: 12,
    descricao: "Gasolina Aditivada",
    categoria: "Combustível",
    valor: 95.2,
    data: "2025-09-11",
    hora: "07:15",
  },
];

const getCategoryIcon = (categoria: string) => {
  switch (categoria) {
    case "Combustível":
      return <IconGasStation className="size-4" />;
    case "Manutenção":
      return <IconCar className="size-4" />;
    case "Seguro":
      return <IconShield className="size-4" />;
    case "Documentação":
      return <IconFileText className="size-4" />;
    case "Alimentação":
      return <IconToolsKitchen2 className="size-4" />;
    case "Pedágio":
      return <IconRoad className="size-4" />;
    case "Lavagem":
      return <IconSpray className="size-4" />;
    case "Outros":
      return <IconDots className="size-4" />;
    default:
      return <IconDots className="size-4" />;
  }
};

// Cores para cada categoria
const getCategoryColor = (categoria: string) => {
  switch (categoria) {
    case "Combustível":
      return "bg-red-500";
    case "Manutenção":
      return "bg-blue-500";
    case "Seguro":
      return "bg-green-500";
    case "Documentação":
      return "bg-purple-500";
    case "Alimentação":
      return "bg-orange-500";
    case "Pedágio":
      return "bg-yellow-500";
    case "Lavagem":
      return "bg-cyan-500";
    case "Outros":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

export function ExpensesPage() {
  const [editingItem, setEditingItem] = useState<Gasto | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [observacoesDialog, setObservacoesDialog] = useState<{
    isOpen: boolean;
    content: string;
  }>({
    isOpen: false,
    content: "",
  });

  const handleEdit = (item: Gasto) => {
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

  const handleDelete = (item: Gasto) => {
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
      <div className="text-left font-medium text-destructive">
        -
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

  const columns: ColumnDef<Gasto>[] = [
    {
      id: "id",
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => (
        <span className="font-medium text-muted-foreground">
          #{row.original.id}
        </span>
      ),
      size: 80,
    },
    {
      accessorKey: "descricao",
      header: "Descrição",
      cell: ({ row }) => {
        const gasto = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium">{gasto.descricao}</span>
            <div className="flex items-center gap-2 mt-1">
              {getCategoryIcon(gasto.categoria)}
              <span className="text-sm text-muted-foreground">
                {gasto.categoria}
              </span>
            </div>
          </div>
        );
      },
      enableHiding: false,
    },
    {
      accessorKey: "categoria",
      header: "Categoria",
      cell: ({ row }) => {
        const categoria = row.original.categoria;
        return (
          <Badge variant="outline" className="gap-1">
            {getCategoryIcon(categoria)}
            {categoria}
          </Badge>
        );
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
        const gasto = row.original;

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
              <DropdownMenuItem onClick={() => handleEdit(gasto)}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive focus:text-destructive"
                onClick={() => handleDelete(gasto)}
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
          //TODO- formulário de gasto
          <div>Formulário de Gasto aqui</div>
        }
        title={editingItem ? "Editar Gasto" : "Registrar Gasto"}
        description={
          editingItem ? "Edite os dados do gasto" : "Preencha os dados do gasto"
        }
        buttonText={
          <>
            <BadgePlus />
            Registrar novo gasto
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
        <div className="flex flex-1 flex-col mt-6">
          <div className="@container/main flex flex-1 flex-col gap-6">
            <SectionCards stats={mockupStats} />
            <div className="px-4 lg:px-6">
              <DataTable
                otherButtons={TableButtons}
                data={mockedGastos}
                columns={columns}
                placeholder="Buscar por descrição ou categoria..."
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
        title="Observações do Gasto"
      />
    </section>
  );
}
