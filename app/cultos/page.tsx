import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Cultos from "@/components/Cultos";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cultos e Horários | Igreja Presbiteriana do Jardim",
  description:
    "Confira os dias e horários dos cultos, Escola Bíblica Dominical (EBD) e reuniões de oração da IP Jardim em Campina Grande - PB.",
};

export default function CultosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader
        badge="Nossas Reuniões"
        title="Cultos e Horários"
        subtitle="Adoração a Deus, oração comunitária e ensino sistemático das Escrituras Sagradas."
      />
      <Cultos />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
