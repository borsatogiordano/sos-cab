"use client";
import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import { SectionCards } from "@/app/(portal)/_components/section-cards";
import { SiteHeader } from "@/components/dashboard/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import { DialogForm } from "@/components/dialog-form";
import RideForm from "./_components/post-edit-ride/form";
import { BadgePlus } from "lucide-react";
import { mockupStats } from "../page";

export default function Page() {
  const form = useForm();
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
              <DialogForm
                form={<RideForm />}
                title="Registrar Corrida"
                description="Preencha os dados da corrida"
                buttonText={
                  <>
                    <BadgePlus />
                    "Registrar nova corrida"
                  </>
                }
              />
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}
