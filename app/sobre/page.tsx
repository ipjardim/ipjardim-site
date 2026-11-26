import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Quem Somos | Igreja Presbiteriana do Jardim",
  description:
    "Conheça a história, visão, pilares doutrinários e os dados institucionais da Igreja Presbiteriana do Jardim em Campina Grande - PB.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader
        badge="Nossa Identidade"
        title="Quem Nós Somos"
        subtitle="Uma igreja cristã, reformada e presbiteriana, comprometida com a sã doutrina e a proclamação do Evangelho."
      />
      <Sobre />

      {/* Seção Extra de Transparência e Liderança */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
              Transparência Institucional
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-verde-escuro mt-2">
              Dados da Organização
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Informações oficiais registradas da entidade religiosa
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-4 text-sm text-gray-700">
            <div className="grid md:grid-cols-2 gap-4 pb-4 border-b border-gray-100">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">Razão Social</p>
                <p className="font-semibold text-gray-900 mt-1">IGREJA PRESBITERIANA DO JARDIM</p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">CNPJ</p>
                <p className="font-semibold text-gray-900 mt-1">46.141.797/0001-48</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pb-4 border-b border-gray-100">
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">Endereço Sede</p>
                <p className="mt-1">
                  Av. Jorn. Assis Chateaubriand, 1322<br />
                  Bairro Liberdade — Campina Grande, PB<br />
                  CEP: 58414-060
                </p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-400">Contatos Oficiais</p>
                <p className="mt-1">
                  <span className="font-medium text-gray-900">E-mail Institucional:</span>{" "}
                  <a href="mailto:administracao@ipjardim.com.br" className="text-verde-primario underline">
                    administracao@ipjardim.com.br
                  </a>
                  <br />
                  <span className="font-medium text-gray-900">Secretaria:</span>{" "}
                  <a href="mailto:igrejapresbiterianajardim@gmail.com" className="text-verde-primario hover:underline">
                    igrejapresbiterianajardim@gmail.com
                  </a>
                  <br />
                  <span className="font-medium text-gray-900">Telefone:</span> (83) 99333-0203
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-gray-500 leading-relaxed">
              A Igreja Presbiteriana do Jardim é uma organização religiosa sem fins lucrativos devidamente registrada nos órgãos competentes, filiada à Igreja Presbiteriana do Brasil (IPB), dedicada à adoração a Deus, evangelização, assistência fraterna e ensino bíblico.
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
