import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import React from "react";

export default function ContactModal({ children, category = "all" }: { children: React.ReactNode, category?: "services" | "industries" | "compliance" | "all" }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none bg-transparent shadow-none" showCloseButton={false}>
        <ContactForm isModal={true} category={category} />
      </DialogContent>
    </Dialog>
  );
}
