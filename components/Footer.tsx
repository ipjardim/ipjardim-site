import Image from "next/image";
import logoBranco from "@/public/logos/logo-branco.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logoBranco}
                alt="IPJardim"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <p className="font-black text-sm text-white leading-tight">
                  Igreja Presbiteriana
                </p>
                <p className="text-verde-claro font-black text-sm">do Jardim</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Uma comunidade fundada na Palavra de Deus, comprometida com o Evangelho
              e o serviço ao próximo. Campina Grande — PB.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-bold text-verde-claro text-sm uppercase tracking-widest mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Sobre", "Cultos", "Eventos", "Contato"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace("é", "e")}`}
                    className="hover:text-verde-claro transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-bold text-verde-claro text-sm uppercase tracking-widest mb-4">
              Cultos
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Domingo — 9h30 (EBD) e 18h00 (Culto Solene)</li>
              <li>Quinta-feira — 19h30 (Oração e Doutrina)</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[
                { icon: "📸", label: "Instagram", url: "https://www.instagram.com/ipbjardim" },
                { icon: "▶️", label: "YouTube", url: "https://www.youtube.com/@IgrejaPresbiterianadoJardim" },
                { icon: "🎵", label: "Spotify", url: "https://open.spotify.com/show/2LoAAsOihJsiqHrINHELsy?si=WUpiEjveRhKVOHZkSRUo-g&utm_source=copy-link" },
                { icon: "💬", label: "WhatsApp", url: "https://wa.me/5583993330203" },
              ].map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={r.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-verde-primario transition-colors text-sm"
                >
                  {r.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center md:text-left">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} Igreja Presbiteriana do Jardim. Todos os direitos reservados.
            </p>
            <p className="text-gray-400">
              IGREJA PRESBITERIANA DO JARDIM • CNPJ: 46.141.797/0001-48
            </p>
          </div>
          <p className="text-center md:text-right">
            Desenvolvido com ❤️ para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  );
}
