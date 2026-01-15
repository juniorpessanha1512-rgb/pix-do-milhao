/**
 * Header Component - Pix do Milhão Clone
 * Design: Réplica fiel do header original com cores corretas e responsividade mobile
 */

import { Menu, User, X, LayoutGrid, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const checkoutLink = "/checkout/identification?quantity=30&price=59.70&product=Sexta%20do%20Milh%C3%A3o";
  const navItems = [
    { label: "Início", href: checkoutLink },
    { label: "Resultados", href: checkoutLink },
    { label: "O Pix do Milhão", href: checkoutLink },
    { label: "Clube PDM", href: checkoutLink },
    { label: "Contato", href: checkoutLink },
  ];

  return (
    <header className="bg-[#FFD700] sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col leading-none">
              <span className="text-gray-900 font-black text-base tracking-tighter">PIX DO</span>
              <span className="text-gray-900 font-black text-base tracking-tighter">MILHÃO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-900 font-bold text-sm hover:text-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons & Login */}
          <div className="flex items-center gap-2">
            {/* Mobile Search & Grid Icons (as seen in reference) */}
            <div className="flex md:hidden items-center gap-1 mr-1">
              <button className="p-2 bg-gray-900/10 rounded-lg text-gray-900">
                <LayoutGrid size={20} />
              </button>
              <button className="p-2 bg-gray-900/10 rounded-lg text-gray-900">
                <Search size={20} />
              </button>
            </div>

            {/* Login Button */}
            <button className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-gray-800 text-white px-3 md:px-4 py-2 rounded-full font-bold text-xs md:text-sm transition-colors border-2 border-gray-900">
              <User size={16} className="hidden xs:block" />
              <span className="whitespace-nowrap">entre ou cadastre-se</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900 p-2 ml-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#FFD700] border-t border-gray-900/10 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-gray-900/5 transition-colors flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <span className="text-gray-400">→</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
