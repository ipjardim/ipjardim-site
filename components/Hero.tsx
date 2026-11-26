import Image from "next/image";
import logoBranco from "@/public/logos/logo-branco.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-verde-escuro via-verde-primario to-verde-medio" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="flex justify-center mb-8">
          <Image
            src={logoBranco}
            alt="IPJardim"
            width={120}
            height={120}
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <p className="text-verde-claro uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Bem-vindo à
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 drop-shadow-lg">
          Igreja Presbiteriana
          <br />
          <span className="text-white opacity-90">do Jardim</span>
        </h1>

        <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Uma comunidade de fé, amor e esperança.
          <br />
          Fundada na Palavra de Deus, comprometida com o Evangelho de Cristo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/cultos"
            className="bg-white text-verde-escuro font-bold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-verde-suave transition-all shadow-lg hover:shadow-xl"
          >
            Nossos Cultos
          </a>
          <a
            href="/sobre"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide hover:bg-white/10 transition-all"
          >
            Conheça a Igreja
          </a>
        </div>
      </div>

      {/* Scroll indicator - fixado na base da seção */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none hidden md:block">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
