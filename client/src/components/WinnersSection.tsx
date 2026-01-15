/**
 * WinnersSection Component - Pix do Milhão Clone
 * Design: Réplica fiel da seção de ganhadores original com foco em mobile
 */

import { ChevronRight, Play } from "lucide-react";

// Ganhadores do "Raspou. Achou. É pix!"
const scratchWinners = [
  { name: "Cleane", state: "SE", prize: "20 MIL REAIS" },
  { name: "Nataniel", state: "RS", prize: "100 MIL REAIS" },
  { name: "Maria", state: "SP", prize: "10 MIL REAIS" },
  { name: "Ciclaytison", state: "PE", prize: "10 MIL REAIS" },
  { name: "Anderson", state: "SP", prize: "5 MIL REAIS" },
  { name: "Adriely", state: "MS", prize: "5 MIL REAIS" },
];

// Grandes ganhadores
const bigWinners = [
  { name: "Felipe P. F. B.", city: "", prize: "R$ 40.000,00", label: "Valor líquido" },
  { name: "Felipe L. S.", city: "Canoas/RS", prize: "R$ 100.000,00", label: "Valor líquido" },
  { name: "Wanderlan S. S.", city: "Araraquara/SP", prize: "R$ 2.000.000,00", label: "" },
];

export default function WinnersSection() {
  return (
    <div className="space-y-8 py-8 bg-white">
      {/* Raspou. Achou. É pix! */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xl font-black text-gray-900 leading-tight">
                Raspou. Achou. É pix!
              </h2>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">
                Confira os ganhadores do Raspou. Achou. É pix!
              </p>
            </div>
            <button className="text-gray-400 font-black flex items-center gap-1 text-[10px] uppercase tracking-widest">
              ver mais <ChevronRight size={14} />
            </button>
          </div>

          {/* Horizontal scroll of winners */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-3">
              {scratchWinners.map((winner, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 min-w-[140px] shadow-lg border border-gray-700/50"
                >
                  <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">
                    {winner.name}/{winner.state}
                  </p>
                  <p className="text-white font-black text-sm leading-tight">
                    {winner.prize}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confira quem mudou de vida */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xl font-black text-gray-900 leading-tight">
                Confira quem mudou de vida
              </h2>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">
                Conheça os mais recentes ganhadores
              </p>
            </div>
            <button className="text-gray-400 font-black flex items-center gap-1 text-[10px] uppercase tracking-widest">
              ver mais <ChevronRight size={14} />
            </button>
          </div>

          {/* Winners grid */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4">
              {bigWinners.map((winner, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden min-w-[200px] shadow-xl border border-gray-700/50"
                >
                  {/* Video placeholder with play button */}
                  <div className="relative h-32 bg-gray-900 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/winner_bg.png')] bg-cover opacity-30"></div>
                    <button className="relative z-10 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 hover:scale-110 transition-transform">
                      <Play size={24} className="text-white fill-white" />
                    </button>
                  </div>
                  
                  {/* Winner info */}
                  <div className="p-4">
                    <p className="text-white font-black text-base mb-0.5">{winner.prize}</p>
                    {winner.label && (
                      <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-2">{winner.label}</p>
                    )}
                    <div className="pt-2 border-t border-white/5">
                      <p className="text-white font-bold text-xs">{winner.name}</p>
                      {winner.city && (
                        <p className="text-gray-500 font-medium text-[10px]">{winner.city}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
