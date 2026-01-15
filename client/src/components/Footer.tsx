/**
 * Footer Component - Pix do Milhão Clone
 * Design: Réplica fiel do footer original com foco em mobile
 */

import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const footerLinks = [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Perguntas Frequentes", href: "/faq" },
    { label: "Jogo Responsável", href: "/jogo-responsavel" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Logo and Social */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-6">
            <div className="flex flex-col leading-none items-center">
              <span className="text-white font-black text-2xl tracking-tighter">PIX DO</span>
              <span className="text-white font-black text-2xl tracking-tighter">MILHÃO</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Legal Text */}
        <div className="text-gray-500 text-[10px] mb-8 leading-relaxed text-center md:text-left font-medium">
          <p>
            Sorteios lastreados por Títulos de Capitalização, da Modalidade Incentivo, 
            emitidos pela VIA Capitalização SA, inscritos no CNPJ sob nº 88.076.302/0001-94, 
            e aprovados pela SUSEP através do registro na SUSEP Sorteio nº 115414.675594/2025-89 
            e 15414.675595/2025-23. O valor das premiações aqui indicadas são líquidos, 
            já descontado o devido imposto de renda de 25%. O registro deste plano na SUSEP 
            não implica, por parte da Autarquia, incentivo ou recomendação a suas negociações.
          </p>
        </div>

        {/* ViaCap and Google Safe */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 py-6 border-t border-white/5">
          <div className="text-center md:text-left">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-3">Títulos emitidos por:</p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <img src="/images/viacap.png" alt="ViaCap" className="h-8 opacity-50 grayscale" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/google_safe.png" alt="Google Safe Browsing" className="h-10 opacity-30 grayscale" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-widest">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-500 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 mt-6 text-[9px] font-bold text-gray-600 uppercase tracking-widest">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span>Sac ViaCap - (51) 3303-3851</span>
              <span>Ouvidoria ViaCap - 0800 874 1505</span>
            </div>
            <span>PIX DO MILHÃO — 30.682.309/0001-70</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
