/**
 * RaffleCard Component - Pix do Milhão Clone
 * Design: Réplica fiel do card de sorteio original com foco em mobile
 */

import { Info, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface RaffleCardProps {
  id: string;
  title: string;
  subtitle: string;
  edition: number;
  date: string;
  time: string;
  daysUntil: string;
  pricePerTicket: number;
  imageUrl: string;
  iconUrl: string;
  quantityOptions: number[];
  popularOption: number;
  defaultQuantity?: number;
}

export default function RaffleCard({
  title,
  subtitle,
  edition,
  date,
  time,
  daysUntil,
  pricePerTicket,
  imageUrl,
  iconUrl,
  quantityOptions,
  popularOption,
  defaultQuantity,
}: RaffleCardProps) {
  const [quantity, setQuantity] = useState(defaultQuantity || popularOption);

  const handleQuantityChange = (newQty: number) => {
    if (newQty >= 1 && newQty <= 1000) {
      setQuantity(newQty);
    }
  };

  const handleBuy = () => {
    const price = (quantity * pricePerTicket).toFixed(2);
    window.location.href = `/checkout/identification?quantity=${quantity}&price=${price}&product=${encodeURIComponent(title)}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      {/* Title Header */}
      <div className="p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
          <img src={iconUrl} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-black text-lg text-gray-900 leading-tight">{title}</h3>
          <p className="text-xs text-gray-500 font-medium">{subtitle}</p>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative px-4">
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-cover aspect-[16/9]"
          />
        </div>
      </div>

      {/* Info & Controls */}
      <div className="p-4 space-y-4">
        {/* Date & Edition */}
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 pb-3">
          <div className="flex flex-col">
            <span>{date} - {time}</span>
            <span className="text-gray-300">Edição nº {edition.toString().padStart(3, '0')}</span>
          </div>
          <div className="text-right flex flex-col">
            <span className="text-green-500">Em {daysUntil}</span>
            <span className="text-gray-300">Ver Sorteio</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm text-yellow-500"
            >
              <Minus size={18} strokeWidth={3} />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              className="w-12 text-center bg-transparent font-black text-lg text-gray-900 focus:outline-none"
            />
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-lg shadow-sm text-white"
            >
              <Plus size={18} strokeWidth={3} />
            </button>
          </div>

          {/* Buy Button */}
          <button
            onClick={handleBuy}
            className="flex-1 bg-[#28A745] hover:bg-[#1E7E34] text-white flex items-center justify-center gap-2 h-12 rounded-xl font-black text-sm transition-all shadow-lg shadow-green-100 active:scale-95"
          >
            <ShoppingCart size={18} strokeWidth={2.5} />
            COMPRAR
          </button>
        </div>

        {/* Quick Select Options */}
        <div className="grid grid-cols-3 gap-2">
          {quantityOptions.slice(0, 3).map((opt) => (
            <button
              key={opt}
              onClick={() => setQuantity(opt)}
              className={`py-2.5 rounded-xl text-sm font-black transition-all border-2 ${
                quantity === opt
                  ? "bg-yellow-400 text-white border-yellow-400 shadow-md shadow-yellow-100"
                  : "bg-gray-50 text-gray-400 border-gray-50 hover:border-gray-200"
              }`}
            >
              + {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
