const eventos = [
  {
    emoji: "🙌🏽",
    dia: "Domingo",
    horario: "9h30",
    titulo: "Escola Bíblica Dominical",
    descricao:
      "Estudo sistemático das Escrituras para todas as idades. Venha crescer no conhecimento da Palavra de Deus.",
  },
  {
    emoji: "✝️",
    dia: "Domingo",
    horario: "18h00",
    titulo: "Culto Solene",
    descricao:
      "Adoração coletiva centrada na pregação expositiva da Bíblia. Aberto para toda a família e visitantes.",
  },
  {
    emoji: "🙏🏽",
    dia: "Quinta-feira",
    horario: "19h30",
    titulo: "Reunião de Oração e Doutrina",
    descricao:
      "Momento de oração intercessória e aprofundamento doutrinário. Um encontro para fortalecer a fé e a comunhão.",
  },
];

export default function Eventos() {
  return (
    <section id="eventos" className="py-24 bg-verde-escuro">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-verde-claro uppercase tracking-widest text-xs font-bold">
            Programação
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Nossa Rotina
          </h2>
          <div className="w-16 h-1 bg-verde-claro mx-auto rounded-full" />
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            🌱 Uma igreja centrada no Evangelho — reunida regularmente para adorar, orar e crescer juntos.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-5 max-w-3xl mx-auto">
          {eventos.map((e, i) => (
            <div
              key={i}
              className="flex gap-6 items-start p-6 rounded-3xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all"
            >
              {/* Ícone + dia */}
              <div className="flex-shrink-0 text-center bg-white/10 rounded-2xl px-4 py-3 min-w-[80px]">
                <div className="text-2xl mb-1">{e.emoji}</div>
                <div className="text-white font-black text-xs leading-tight">{e.dia}</div>
                <div className="text-verde-claro text-xs font-bold mt-1">{e.horario}</div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg leading-tight">{e.titulo}</h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">{e.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contato"
            className="inline-block bg-white text-verde-escuro font-bold px-8 py-4 rounded-full text-sm hover:bg-verde-suave transition-colors shadow-lg"
          >
            Quero visitar a Igreja
          </a>
        </div>
      </div>
    </section>
  );
}
