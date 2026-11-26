import Image from "next/image";
import Link from "next/link";
import logoBranco from "@/public/logos/logo-branco.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Logo e descrição */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 inline-flex">
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
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Uma comunidade fundada na Palavra de Deus, comprometida com o Evangelho
              e o serviço ao próximo. Campina Grande — PB.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-bold text-verde-claro text-sm uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-verde-claro transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-verde-claro transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/cultos" className="hover:text-verde-claro transition-colors">
                  Cultos e Horários
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-verde-claro transition-colors">
                  Contato e Localização
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato & E-mails Oficiais */}
          <div>
            <h4 className="font-bold text-verde-claro text-sm uppercase tracking-widest mb-4">
              E-mails & Contato
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <p className="text-xs uppercase font-bold text-gray-300">E-mail Institucional:</p>
                <a
                  href="mailto:administracao@ipjardim.com.br"
                  className="text-verde-claro hover:underline break-all"
                >
                  administracao@ipjardim.com.br
                </a>
              </li>
              <li>
                <p className="text-xs uppercase font-bold text-gray-300">Secretaria / Geral:</p>
                <a
                  href="mailto:igrejapresbiterianajardim@gmail.com"
                  className="hover:text-verde-claro transition-colors break-all"
                >
                  igrejapresbiterianajardim@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs uppercase font-bold text-gray-300">Telefone / WhatsApp:</p>
                <a
                  href="https://wa.me/5583993330203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-verde-claro transition-colors"
                >
                  (83) 99333-0203
                </a>
              </li>
            </ul>
          </div>

          {/* Horários e Redes */}
          <div>
            <h4 className="font-bold text-verde-claro text-sm uppercase tracking-widest mb-4">
              Cultos
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>Domingo — 9h30 (EBD) e 18h00 (Culto Solene)</li>
              <li>Quinta-feira — 19h30 (Oração e Doutrina)</li>
            </ul>
            <div className="flex gap-3">
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

        {/* Dados da Organização / Transparência */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-medium text-gray-300">
              IGREJA PRESBITERIANA DO JARDIM • CNPJ: 46.141.797/0001-48
            </p>
            <p>
              Av. Jorn. Assis Chateaubriand, 1322 — Liberdade, Campina Grande - PB • CEP: 58414-060
            </p>
            <p className="text-gray-500">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
          <p className="text-center md:text-right text-gray-500">
            Desenvolvido com ❤️ para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  );
}
