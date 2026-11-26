const cultos = [
  {
    dia: "Domingo",
    emoji: "🙌🏽",
    horarios: [
      {
        hora: "9h30",
        nome: "Escola Bíblica Dominical (EBD)",
        desc: "Estudo sistemático da Bíblia para todas as idades.",
        local: "Auditório Principal",
      },
      {
        hora: "18h00",
        nome: "Culto Solene",
        desc: "Adoração coletiva centrada na Palavra de Deus pregada.",
        local: "Auditório Principal",
      },
    ],
  },
  {
    dia: "Quinta-feira",
    emoji: "🙏🏽",
    horarios: [
      {
        hora: "19h30",
        nome: "Reunião de Oração e Doutrina",
        desc: "Momento de oração intercessória e aprofundamento doutrinário.",
        local: "Auditório Principal",
      },
    ],
  },
];

export default function Cultos() {
  return (
    <section id="cultos" className="py-24 bg-verde-suave">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
            Programação
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-verde-escuro mt-3 mb-5">
            Cultos e Horários
          </h2>
          <div className="w-16 h-1 bg-verde-medio mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-xl mx-auto leading-relaxed">
            Venha adorar a Deus conosco! Nossas reuniões são abertas para toda a família.
          </p>
        </div>

        {/* Cards de cultos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cultos.map((culto) => (
            <div
              key={culto.dia}
              className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Header do card */}
              <div className="bg-gradient-to-r from-verde-primario to-verde-medio p-6 flex items-center gap-3">
                <span className="text-3xl">{culto.emoji}</span>
                <h3 className="text-white font-black text-2xl">{culto.dia}</h3>
              </div>

              {/* Horários */}
              <div className="p-6 space-y-6">
                {culto.horarios.map((h) => (
                  <div key={h.hora} className="flex gap-4 items-start">
                    <div className="bg-verde-suave rounded-xl px-3 py-2 text-center flex-shrink-0 min-w-[64px]">
                      <span className="text-verde-escuro font-black text-sm block">
                        {h.hora}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm leading-tight">
                        {h.nome}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                        {h.desc}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">📍 {h.local}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bio tag */}
        <div className="mt-12 max-w-xl mx-auto bg-white rounded-2xl p-6 border border-verde-claro/20 text-center shadow-sm">
          <p className="text-verde-escuro font-semibold text-sm leading-relaxed">
            🌱 Uma igreja centrada no Evangelho
          </p>
          <p className="text-gray-500 text-xs mt-3 leading-relaxed">
            Dúvidas sobre os cultos?{" "}
            <a href="/contato" className="text-verde-primario font-semibold hover:underline">
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
