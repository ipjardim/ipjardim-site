import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const pilares = [
    {
      icon: "📜",
      titulo: "Confissão Centrada no Evangelho",
      resumo: "Fé histórica, confessional e vinculada à tradição reformada presbiteriana.",
    },
    {
      icon: "⛪",
      titulo: "Culto Bíblico Expositivo",
      resumo: "Adoração que conduz o povo pela história da redenção e fidelidade bíblica.",
    },
    {
      icon: "🤝",
      titulo: "Comunidade e Discipulado",
      resumo: "Uma família de fé marcada pelo cuidado mútuo, oração e serviço à cidade.",
    },
    {
      icon: "🌍",
      titulo: "Missão e Engajamento",
      resumo: "Esperança para as nações, defesa da verdade e proclamação do Reino de Deus.",
    },
  ];

  const cultos = [
    {
      dia: "Domingo",
      horarios: ["9h30 — Escola Bíblica Dominical (EBD)", "18h00 — Culto Solene"],
      destaque: "Culto Principal",
    },
    {
      dia: "Quinta-feira",
      horarios: ["19h30 — Reunião de Oração e Doutrina"],
      destaque: "Oração e Estudo",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />

      {/* Seção Resumida: Quem Somos */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
              Identidade & Propósito
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-verde-escuro mt-2 mb-4">
              Quem Nós Somos
            </h2>
            <div className="w-16 h-1 bg-verde-medio mx-auto rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
              Somos uma igreja <strong className="text-verde-primario font-bold">cristã, reformada e presbiteriana</strong> em Campina Grande - PB, comprometida com a fidelidade bíblica e o serviço ao próximo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {pilares.map((p) => (
              <div
                key={p.titulo}
                className="p-6 rounded-2xl bg-verde-suave/60 border border-verde-claro/20 text-center hover:border-verde-medio transition-all duration-300"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-verde-escuro text-base mb-2">{p.titulo}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{p.resumo}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 bg-verde-primario text-white font-bold px-8 py-3.5 rounded-full hover:bg-verde-escuro transition-colors text-sm shadow-sm"
            >
              Conheça nossa história e dados institucionais →
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Resumida: Nossos Cultos */}
      <section className="py-20 bg-verde-suave">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
              Programação Regular
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-verde-escuro mt-2 mb-4">
              Cultos e Horários
            </h2>
            <div className="w-16 h-1 bg-verde-medio mx-auto rounded-full mb-4" />
            <p className="text-gray-600 text-sm md:text-base">
              Venha adorar a Deus conosco e crescer no conhecimento da Sua Palavra.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {cultos.map((c) => (
              <div
                key={c.dia}
                className="bg-white rounded-3xl p-8 shadow-sm border border-verde-claro/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-verde-escuro">{c.dia}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider bg-verde-suave text-verde-primario px-3 py-1 rounded-full">
                      {c.destaque}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {c.horarios.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-verde-medio" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-400">Auditório Principal • Entrada franca</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/cultos"
              className="inline-flex items-center gap-2 bg-verde-escuro text-white font-bold px-8 py-3.5 rounded-full hover:bg-verde-primario transition-colors text-sm shadow-sm"
            >
              Ver detalhes de todos os cultos e reuniões →
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Resumida: Chamada para Visita e Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-verde-escuro via-verde-primario to-verde-medio rounded-3xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
            <span className="text-verde-claro uppercase tracking-widest text-xs font-bold inline-block mb-3">
              Portas Abertas
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Venha nos Fazer uma Visita
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Será uma alegria receber você e sua família. Estamos localizados na Av. Jorn. Assis Chateaubriand, 1322 — Bairro Liberdade, Campina Grande - PB.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="bg-white text-verde-escuro font-bold px-8 py-3.5 rounded-full hover:bg-verde-suave transition-colors text-sm shadow-md"
              >
                Fale Conosco e Como Chegar
              </Link>
              <a
                href="https://wa.me/5583993330203"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                Conversar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
