"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";

interface ObservationsDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  content: string;
  title?: string;
}

export function ObservationsDialog({
  isOpen,
  onOpenChange,
  content,
  title = "Observações Completas",
}: ObservationsDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm whitespace-pre-wrap max-h-96 overflow-y-auto p-4 bg-muted/30 rounded-md border">
          {content}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
