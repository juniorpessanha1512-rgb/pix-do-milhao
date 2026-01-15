/**
 * Home Page - Pix do Milhão Clone
 * Design: Réplica fiel da página principal com foco em mobile
 */

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import AlertTicker from "@/components/AlertTicker";
import BenefitsSection from "@/components/BenefitsSection";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import PromoBanners from "@/components/PromoBanners";
import RaffleCard from "@/components/RaffleCard";
import WinnersSection from "@/components/WinnersSection";

// Dados dos sorteios baseados no site original
const raffles = [
  {
    id: "1",
    title: "Quarta sem Limites",
    subtitle: "Quartou com R$ 100 mil esperando por você 🤩",
    edition: 11,
    date: "14/01",
    time: "21:00",
    daysUntil: "4 horas",
    pricePerTicket: 0.50,
    imageUrl: "/images/sorteio_quarta_100mil.png",
    iconUrl: "/images/icon_quarta.png",
    quantityOptions: [10, 150, 250],
    popularOption: 150,
    defaultQuantity: 10,
  },
  {
    id: "2",
    title: "Quinta Top",
    subtitle: "Toda Quinta R$ 40 mil esperando por você 🤩",
    edition: 12,
    date: "15/01",
    time: "21:00",
    daysUntil: "1 dia",
    pricePerTicket: 0.20,
    imageUrl: "/images/sorteio_quinta_40mil.png",
    iconUrl: "/images/icon_quinta.png",
    quantityOptions: [50, 100, 200],
    popularOption: 100,
    defaultQuantity: 50,
  },
  {
    id: "3",
    title: "Super Sábado",
    subtitle: "Todo sábado R$ 40 mil para transformar sua semana 🌟",
    edition: 14,
    date: "17/01",
    time: "21:00",
    daysUntil: "3 dias",
    pricePerTicket: 0.20,
    imageUrl: "/images/sorteio_sabado_40mil.png",
    iconUrl: "/images/icon_sabado.png",
    quantityOptions: [50, 100, 200],
    popularOption: 100,
    defaultQuantity: 50,
  },
  {
    id: "4",
    title: "Segunda dos Sonhos",
    subtitle: "Sua semana começa com R$ 100 mil esperando por você 🤩",
    edition: 15,
    date: "19/01",
    time: "21:00",
    daysUntil: "5 dias",
    pricePerTicket: 0.50,
    imageUrl: "/images/sorteio_segunda_100mil.png",
    iconUrl: "/images/icon_segunda.png",
    quantityOptions: [20, 100, 200],
    popularOption: 100,
    defaultQuantity: 20,
  },
  {
    id: "5",
    title: "Terça Premiada",
    subtitle: "Toda terça R$ 40 mil para transformar sua semana 🌟",
    edition: 16,
    date: "20/01",
    time: "21:00",
    daysUntil: "6 dias",
    pricePerTicket: 0.20,
    imageUrl: "/images/sorteio_terca_40mil.png",
    iconUrl: "/images/icon_terca.png",
    quantityOptions: [50, 100, 200],
    popularOption: 100,
    defaultQuantity: 50,
  },
];

export default function Home() {
  const handleAddAllToCart = () => {
    toast.success("Todos os sorteios adicionados ao carrinho!", {
      description: "5 sorteios foram adicionados",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <AlertTicker />

      <main className="flex-1">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Raffles Grid */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {raffles.map((raffle) => (
                <RaffleCard key={raffle.id} {...raffle} />
              ))}
            </div>

            {/* Add All to Cart Button - Mobile Optimized */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-yellow-600 font-black text-lg mb-1">
                    Adicione todos ao carrinho!
                  </h3>
                  <p className="text-gray-400 text-xs font-bold leading-relaxed max-w-md">
                    Não perca tempo selecionando um por um, adicione diretamente todos os sorteios ao seu carrinho de uma só vez!
                  </p>
                </div>
                <button
                  onClick={handleAddAllToCart}
                  className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-white flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-black text-sm transition-all shadow-lg shadow-yellow-100 active:scale-95"
                >
                  <ShoppingCart size={20} strokeWidth={2.5} />
                  Adicionar todos ao carrinho
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <WinnersSection />

        {/* Promo Banners */}
        <PromoBanners />

        {/* Benefits Section */}
        <BenefitsSection />
      </main>

      <Footer />
    </div>
  );
}
