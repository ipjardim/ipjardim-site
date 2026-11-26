import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 bg-gradient-to-br from-verde-escuro via-verde-primario to-verde-medio text-white overflow-hidden">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {badge && (
          <span className="text-verde-claro uppercase tracking-[0.25em] text-xs font-bold inline-block mb-3">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-black drop-shadow-sm mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/70">
          <Link href="/" className="hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <span className="text-white font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
}
