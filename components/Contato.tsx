export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-verde-escuro mt-3 mb-5">
            Contato e Localização
          </h2>
          <div className="w-16 h-1 bg-verde-medio mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h3 className="text-verde-escuro font-black text-xl mb-4">
                Venha nos Visitar
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Será uma alegria recebê-lo! Nossas portas estão sempre abertas.
                Venha como você é — há um lugar para você na nossa família.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  titulo: "Endereço",
                  texto:
                    "Av. Jorn. Assis Chateaubriand, 1322\nLiberdade — Campina Grande, PB\nCEP: 58414-060",
                },
                {
                  icon: "📞",
                  titulo: "Telefone / Secretaria",
                  texto: "(83) 99333-0203",
                },
                {
                  icon: "✉️",
                  titulo: "E-mails Oficiais",
                  texto:
                    "Institucional: administracao@ipjardim.com.br\nSecretaria / Geral: igrejapresbiterianajardim@gmail.com",
                },
                {
                  icon: "🕐",
                  titulo: "Cultos",
                  texto:
                    "Domingo: 9h30 (EBD) e 18h00 (Culto Solene)\nQuinta-feira: 19h30 (Oração e Doutrina)",
                },
              ].map((item) => (
                <div key={item.titulo} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-verde-suave rounded-2xl flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-verde-escuro text-sm">{item.titulo}</p>
                    <p className="text-gray-600 text-sm mt-0.5 whitespace-pre-line">
                      {item.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-bold text-verde-escuro mb-3">Redes Sociais</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    nome: "Instagram",
                    cor: "bg-pink-500",
                    url: "https://www.instagram.com/ipbjardim",
                  },
                  {
                    nome: "Spotify",
                    cor: "bg-[#1DB954]",
                    url: "https://open.spotify.com/show/2LoAAsOihJsiqHrINHELsy?si=WUpiEjveRhKVOHZkSRUo-g&utm_source=copy-link",
                  },
                  {
                    nome: "YouTube",
                    cor: "bg-red-500",
                    url: "https://www.youtube.com/@IgrejaPresbiterianadoJardim",
                  },
                  {
                    nome: "Linktree",
                    cor: "bg-verde-primario",
                    url: "https://linktr.ee/ipbjardim_",
                  },
                ].map((r) => (
                  <a
                    key={r.nome}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${r.cor} text-white text-xs font-bold px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}
                  >
                    {r.nome}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-verde-suave rounded-3xl p-8">
            <h3 className="text-verde-escuro font-black text-xl mb-6">
              Envie uma Mensagem
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-verde-escuro block mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-verde-claro/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-medio"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-verde-escuro block mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-verde-claro/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-medio"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-verde-escuro block mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-verde-claro/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-medio"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-verde-escuro block mb-2">
                  Assunto
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-verde-claro/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-medio text-gray-600">
                  <option>Quero visitar a igreja</option>
                  <option>Informações sobre cultos</option>
                  <option>Aconselhamento pastoral</option>
                  <option>Outro assunto</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-verde-escuro block mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Escreva sua mensagem..."
                  className="w-full px-4 py-3 rounded-xl border border-verde-claro/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-medio resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-verde-primario text-white font-bold py-4 rounded-xl hover:bg-verde-escuro transition-colors tracking-wide"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Mapa Google Maps embed */}
        <div className="mt-12 rounded-3xl overflow-hidden h-80 shadow-sm border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3!2d-35.9271!3d-7.2309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Jorn.+Assis+Chateaubriand%2C+1322+-+Liberdade%2C+Campina+Grande+-+PB!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Igreja Presbiteriana do Jardim"
          />
        </div>

        {/* Link direto para o Maps */}
        <div className="text-center mt-4">
          <a
            href="https://maps.app.goo.gl/swPf5AkrQmHJXmzG9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-verde-primario text-sm font-semibold hover:underline"
          >
            📍 Abrir no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
