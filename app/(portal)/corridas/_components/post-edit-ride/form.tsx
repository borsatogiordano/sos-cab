"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export interface RideFormProps {
  initialData?: {
    partida: string;
    destino: string;
    valor: number;
    distancia: number;
    pagamento: "dinheiro" | "cartao" | "pix";
    observacoes?: string;
  };
  formType?: "post" | "put";
}

const paymentOptions = [
  { value: "dinheiro", label: "Dinheiro" },
  { value: "cartao", label: "Cartão" },
  { value: "pix", label: "Pix" },
] as const;

const rideFormSchema = z.object({
  partida: z.string().min(1, "Local de partida é obrigatório"),
  destino: z.string().min(1, "Local de destino é obrigatório"),
  valor: z
    .number()
    .positive("Valor deve ser maior que 0")
    .min(0.01, "Valor mínimo é R$ 0,01"),
  distancia: z
    .number()
    .positive("Distância deve ser maior que 0")
    .min(0.1, "Distância mínima é 0,1 km"),
  pagamento: z.enum(["dinheiro", "cartao", "pix"]),
  observacoes: z.string().optional(),
});

type RideFormData = z.infer<typeof rideFormSchema>;

export default function RideForm({
  initialData,
  formType = "post",
}: RideFormProps) {
  const form = useForm<RideFormData>({
    resolver: zodResolver(rideFormSchema),
    defaultValues: {
      partida: initialData?.partida || "",
      destino: initialData?.destino || "",
      valor: initialData?.valor || 0,
      distancia: initialData?.distancia || 0,
      pagamento: initialData?.pagamento || "dinheiro",
      observacoes: initialData?.observacoes || "",
    },
  });

  const onSubmit = (data: RideFormData) => {
    console.log("Form submitted:", data);
    console.log("Form type:", formType);

    if (formType === "post") {
      console.log("Criando nova corrida...");
    } else {
      console.log("Editando corrida...");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="partida"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Local de Partida *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Centro, Rua das Flores, 123"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="destino"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Local de Destino *</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Aeroporto Internacional" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="valor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor da Corrida (R$) *</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0,00"
                  {...field}
                  onChange={(e) =>
                    field.onChange(parseFloat(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="distancia"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Distância (km) *</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="0,0"
                  {...field}
                  onChange={(e) =>
                    field.onChange(parseFloat(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pagamento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Forma de Pagamento *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma forma de pagamento" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {paymentOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="observacoes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Adicione observações sobre a corrida (opcional)"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {formType === "post" ? "Registrar Corrida" : "Atualizar Corrida"}
        </Button>
      </form>
    </Form>
  );
}
