/**
 * HeroBanner Component - Pix do Milhão Clone
 * Design: Réplica fiel do banner principal com seletor de quantidade otimizado para mobile
 */

import { Info, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function HeroBanner() {
  const [quantity, setQuantity] = useState(10);
  const pricePerTicket = 1.99;
  const quantityOptions = [10, 150, 250];

  const handleQuantityChange = (newQty: number) => {
    if (newQty >= 1 && newQty <= 1000) {
      setQuantity(newQty);
    }
  };

  const handleBuy = () => {
    const price = (quantity * pricePerTicket).toFixed(2);
    const product = "Sexta do Milhão";
    window.location.href = `/checkout/identification?quantity=${quantity}&price=${price}&product=${encodeURIComponent(product)}`;
  };

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Header Title for Mobile (as seen in reference) */}
          <div className="lg:hidden mb-2">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                <span className="font-black text-xs">PDM</span>
              </div>
              <h2 className="font-black text-xl text-gray-900">Sexta do Milhão</h2>
            </div>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Sua chance de ser o novo milionário</p>
          </div>

          {/* Banner Image */}
          <div className="lg:flex-1 relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/banner_milhao.png"
              alt="Sexta do Milhão - 1 Milhão de Reais"
              className="w-full h-auto aspect-[16/9] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 py-3">
              <p className="text-white text-[8px] md:text-[10px] leading-tight opacity-70 font-medium">
                Sorteios lastreados por Títulos de Capitalização, da Modalidade Incentivo, 
                emitidos pela VIA Capitalização SA
              </p>
            </div>
          </div>

          {/* Quantity Selector Panel */}
          <div className="lg:w-[400px] bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            {/* Promo Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                  67% OFF
                </span>
                <Info size={16} className="text-gray-300" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                  🔥 POPULAR
                </span>
              </div>
            </div>

            {/* Quick Select Options */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {quantityOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setQuantity(opt)}
                  className={`py-3.5 rounded-xl font-black text-sm transition-all border-2 ${
                    quantity === opt
                      ? "bg-yellow-400 text-white border-yellow-400 shadow-lg shadow-yellow-100"
                      : "bg-gray-50 text-gray-400 border-gray-50 hover:border-gray-200"
                  }`}
                >
                  + {opt}
                </button>
              ))}
            </div>

            {/* Controls Row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm text-yellow-500"
                >
                  <Minus size={20} strokeWidth={3} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-14 text-center bg-transparent font-black text-xl text-gray-900 focus:outline-none"
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-lg shadow-sm text-white"
                >
                  <Plus size={20} strokeWidth={3} />
                </button>
              </div>

              {/* Buy Button */}
              <button
                onClick={handleBuy}
                className="flex-1 bg-[#28A745] hover:bg-[#1E7E34] text-white flex flex-col items-center justify-center h-14 rounded-xl font-black transition-all shadow-lg shadow-green-100 active:scale-95"
              >
                <span className="text-[10px] opacity-80 uppercase tracking-widest leading-none mb-1">Comprar</span>
                <span className="text-base leading-none">
                  R$ {(quantity * pricePerTicket).toFixed(2).replace('.', ',')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
