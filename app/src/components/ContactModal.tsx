import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import React from "react";

export default function ContactModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <ContactForm isModal={true} />
      </DialogContent>
    </Dialog>
  );
}
