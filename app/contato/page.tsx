import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contato e Localização | Igreja Presbiteriana do Jardim",
  description:
    "Entre em contato conosco, encontre nossa localização em Campina Grande - PB e confira nossos canais oficiais de comunicação.",
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader
        badge="Fale Conosco"
        title="Contato & Localização"
        subtitle="Venha nos fazer uma visita ou envie uma mensagem para a nossa equipe pastoral e administrativa."
      />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
