import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

interface DialogFormProps {
  buttonText: React.ReactNode;
  title: string;
  description: string;
  form: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onButtonClick?: () => void;
}

export function DialogForm({
  buttonText,
  title,
  description,
  form,
  isOpen,
  onOpenChange,
  onButtonClick,
}: DialogFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">{form}</div>
      </DialogContent>
    </Dialog>
  );
}
