import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UseFormReturn } from "react-hook-form";

interface DialogFormProps {
  buttonText: React.ReactNode;
  title: string;
  description: string;
  form: React.ReactNode;
}

export function DialogForm({
  buttonText,
  title,
  description,
  form,
}: DialogFormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">{form}</div>
      </DialogContent>
    </Dialog>
  );
}
