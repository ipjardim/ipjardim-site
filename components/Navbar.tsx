"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoColorida from "@/public/logos/logo-colorida.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Quem Somos" },
  { href: "/cultos", label: "Cultos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <Image
            src={logoColorida}
            alt="Igreja Presbiteriana do Jardim"
            width={44}
            height={44}
            className="object-contain"
          />
          <span
            className={`font-bold text-sm leading-tight hidden sm:block transition-colors ${
              scrolled ? "text-verde-escuro" : "text-white"
            }`}
          >
            Igreja Presbiteriana<br />
            <span className="text-verde-medio">do Jardim</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-verde-medio ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="bg-verde-primario text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-verde-escuro transition-colors"
          >
            Visitar a Igreja
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-verde-escuro" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 font-semibold text-sm py-2 border-b border-gray-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contato"
            onClick={() => setMenuOpen(false)}
            className="block bg-verde-primario text-white text-sm font-bold px-5 py-2 rounded-full text-center mt-2"
          >
            Visitar a Igreja
          </Link>
        </div>
      )}
    </header>
  );
}
