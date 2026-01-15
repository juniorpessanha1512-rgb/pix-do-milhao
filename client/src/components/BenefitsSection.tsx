/**
 * BenefitsSection Component - Pix do Milhão Clone
 * Design: Réplica fiel da seção de benefícios com foco em mobile
 */

import { ChevronRight } from "lucide-react";

interface Benefit {
  id: string;
  title: string;
  imageUrl: string;
  bgColor: string;
}

const benefits: Benefit[] = [
  { id: "1", title: "Experiências", imageUrl: "/images/beneficio_experiencias.jpg", bgColor: "bg-[#E31E24]" },
  { id: "2", title: "Gift Cards", imageUrl: "/images/beneficio_giftcards.png", bgColor: "bg-[#FFD700]" },
  { id: "3", title: "Loja", imageUrl: "/images/beneficio_loja.jpg", bgColor: "bg-[#1A1A1A]" },
];

export default function BenefitsSection() {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-xl font-black text-gray-900 leading-tight">
              Conheça nossos benefícios
            </h2>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">
              Vantagens exclusivas para você
            </p>
          </div>
          <button className="text-gray-400 font-black flex items-center gap-1 text-[10px] uppercase tracking-widest">
            ver mais <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={benefit.imageUrl} 
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-black text-white text-sm leading-tight mb-2">
                    {benefit.title}
                  </h3>
                  <button className="w-full bg-yellow-400 text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">
                    Ver produtos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
