"use client";
import { SectionCards } from "@/src/app/(portal)/_components/section-cards";
import { SiteHeader } from "@/src/components/dashboard/site-header";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { DialogForm } from "@/src/components/dialog-form";
import RideForm from "../../../components/forms/post-edit-ride/post-edit-ride";
import { BadgePlus } from "lucide-react";
import { DataTable } from "../../../components/data-table";
import { columns, Gasto } from "./_components/columns";
import { mockupStats } from "../_components/page/dashboardPage";

export default function Page() {
  const gastos: Gasto[] = [
    {
      id: 1,
      partida: "Centro",
      destino: "Rodoviária",
      distancia: 8.2,
      descricao: "Corrida curta até a rodoviária",
      categoria: "Corrida",
      valor: 25.0,
      pagamento: "Pix",
      observacoes: "Cliente pagou rápido",
      data: "2025-09-01",
    },
    {
      id: 2,
      partida: "Aeroporto",
      destino: "Hotel Plaza",
      distancia: 15.5,
      descricao: "Corrida aeroporto-hotel",
      categoria: "Corrida",
      valor: 70.0,
      pagamento: "Cartão",
      observacoes:
        "Cliente estrangeiro, muito educado, passou o numero pra eu ligar pra ele e tudo mais",
      data: "2025-09-02",
    },
    {
      id: 3,
      descricao: "Almoço durante o trabalho",
      categoria: "Alimentação",
      valor: 28.5,
      pagamento: "Dinheiro",
      data: "2025-09-02",
    },
    {
      id: 4,
      descricao: "Abastecimento gasolina",
      categoria: "Combustível",
      valor: 200.0,
      pagamento: "Pix",
      observacoes: "Tanque cheio",
      data: "2025-09-03",
    },
    {
      id: 5,
      partida: "Shopping",
      destino: "Bairro Novo",
      distancia: 12.3,
      descricao: "Corrida longa",
      categoria: "Corrida",
      valor: 55.0,
      pagamento: "Dinheiro",
      data: "2025-09-03",
    },
    {
      id: 6,
      descricao: "Troca de óleo",
      categoria: "Manutenção",
      valor: 180.0,
      pagamento: "Cartão",
      observacoes: "Troca a cada 10.000 km",
      data: "2025-09-04",
    },
    {
      id: 7,
      partida: "Hospital",
      destino: "Centro",
      distancia: 6.7,
      descricao: "Corrida médica",
      categoria: "Corrida",
      valor: 30.0,
      pagamento: "Pix",
      data: "2025-09-05",
    },
    {
      id: 8,
      descricao: "Lanche rápido",
      categoria: "Alimentação",
      valor: 15.0,
      pagamento: "Dinheiro",
      data: "2025-09-05",
    },
    {
      id: 9,
      descricao: "Lavagem do carro",
      categoria: "Manutenção",
      valor: 40.0,
      pagamento: "Pix",
      data: "2025-09-06",
    },
    {
      id: 10,
      partida: "Estação Norte",
      destino: "Universidade",
      distancia: 10.0,
      descricao: "Corrida de estudante",
      categoria: "Corrida",
      valor: 45.0,
      pagamento: "Cartão",
      observacoes: "Cliente pediu recibo",
      data: "2025-09-07",
    },
    {
      id: 11,
      partida: "Parque",
      destino: "Museu",
      distancia: 5.4,
      descricao: "Passeio cultural",
      categoria: "Corrida",
      valor: 30.0,
      pagamento: "Dinheiro",
      observacoes: "Cliente muito interessado em arte",
      data: "2025-09-08",
    },
  ];

  const TableButtons = () => {
    return (
      <DialogForm
        form={<RideForm />}
        title="Registrar Corrida"
        description="Preencha os dados da corrida"
        buttonText={
          <>
            <BadgePlus />
            Registrar nova corrida
          </>
        }
      />
    );
  };

  return (
    <section className="h-full flex flex-1 flex-col p-1">
      <SiteHeader />
      <ScrollArea className="h-[94dvh] p-2">
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards stats={mockupStats} />
              <div className="px-4 lg:px-6"></div>
            </div>
            <div className="px-4 lg:px-6">
              <DataTable
                otherButtons={TableButtons}
                data={gastos}
                columns={columns}
              />
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
