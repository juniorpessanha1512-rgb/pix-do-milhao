import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, ChevronUp } from "lucide-react";

export default function CheckoutCart() {
  const [timeLeft, setTimeLeft] = useState(286); // 4m 46s
  const [offerEnabled, setOfferEnabled] = useState(false);
  
  // Ler dados do carrinho da URL
  const [cartData, setCartData] = useState({
    quantity: 10,
    price: 19.90,
    product: "Sexta do Milhão"
  });

  useEffect(() => {
    // Carregar dados da URL
    const params = new URLSearchParams(window.location.search);
    const quantity = parseInt(params.get("quantity") || "10");
    const price = parseFloat(params.get("price") || "19.90");
    const product = params.get("product") || "Sexta do Milhão";
    
    setCartData({ quantity, price, product });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, "0")}s`;
  };

  const formatPrice = (value: number) => {
    return value.toFixed(2).replace('.', ',');
  };

  const handleGoToPayment = () => {
    // Calcular o total final
    const totalPrice = offerEnabled ? cartData.price + 19.99 : cartData.price;
    // Navegar para o pagamento com os parâmetros
    window.location.href = `/checkout/payment?quantity=${cartData.quantity}&price=${totalPrice.toFixed(2)}&product=${encodeURIComponent(cartData.product)}`;
  };

  // Calcular valores baseados na quantidade
  const points = cartData.quantity;
  const luckyNumbers = cartData.quantity;
  const instantGames = Math.max(1, Math.floor(cartData.quantity * 0.9));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center w-full max-w-4xl">
            <div className="flex items-center gap-2 mr-4">
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white"><Check size={16} /></div>
              <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white"><Check size={16} /></div>
            </div>
            <div className="flex-1 h-10 border-2 border-gray-900 rounded-full flex items-center px-4 bg-white">
              <span className="font-bold text-sm">3. Carrinho</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 ml-4">4</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Items and Offers */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Item */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <img src="/images/logo.png" alt="" className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg text-gray-900">{cartData.product} - R$ 1.000.000,00</h2>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Garanta agora o seu Pix do Milhão para acumular pontos e concorrer a R$ 1.000.000,00 no dia 16/01/2026.
                    E ainda pode ganhar centenas de prêmios que podem chegar até 20 mil na hora no Raspou, Achou, é Pix....
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold">
                    <span className="text-yellow-600 flex items-center gap-1">👑 {points} pontos</span>
                    <span className="text-gray-700 flex items-center gap-1">🎫 {luckyNumbers} números da sorte</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 text-[10px] h-6 px-2">
                  + detalhes
                </Button>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="border rounded-md p-3">
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Valor total</p>
                  <p className="font-bold text-lg">R$ {formatPrice(cartData.price)}</p>
                </div>
                <div className="border rounded-md p-3 flex items-center justify-center">
                  <p className="font-bold text-lg">{cartData.quantity}</p>
                </div>
              </div>
            </div>

            {/* Exclusive Offer */}
            <div className="bg-[#FFF9E6] rounded-lg border-2 border-yellow-400 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg font-bold text-xs">
                EXPIRA EM: {formatTime(timeLeft)}
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-yellow-600 text-sm uppercase italic">
                    OFERTA EXCLUSIVA! LEVE MAIS E PAGUE MENOS E CONCORRA A 1 MILHÃO
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Aumente suas chances agora com 25 chances + 9 Raspou, Achou é Pix!
                  </p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-red-600 font-bold flex items-center gap-1">
                        🔥 OFERTA POR TEMPO LIMITADO
                      </p>
                      <p className="font-bold text-gray-900 mt-1">
                        por apenas <span className="text-green-600 text-lg">R$ 19,99</span>
                      </p>
                    </div>
                    <Switch 
                      checked={offerEnabled}
                      onCheckedChange={setOfferEnabled}
                      className="data-[state=checked]:bg-green-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-4 flex items-center justify-between border-b">
                <div>
                  <h3 className="font-bold text-xs uppercase text-gray-900">Resumo</h3>
                  <p className="text-[10px] text-gray-500">da sua compra</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-gray-900 text-white rounded-full">
                  <ChevronUp size={16} />
                </Button>
              </div>
              
              <div className="p-4 space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Números da sorte</span>
                  <span className="font-bold">{luckyNumbers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pontos do Clube a receber</span>
                  <span className="font-bold">{points}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantidade de jogos instantâneos</span>
                  <span className="font-bold">{instantGames.toString().padStart(2, '0')}</span>
                </div>
              </div>
              
              <div className="bg-gray-900 text-white p-3 flex justify-between items-center mx-4 mb-4 rounded">
                <span className="text-xs font-bold">Total a pagar</span>
                <span className="font-bold">R$ {formatPrice(offerEnabled ? cartData.price + 19.99 : cartData.price)}</span>
              </div>
            </div>

            <Button 
              onClick={handleGoToPayment}
              className="w-full h-14 bg-[#28A745] hover:bg-[#1E7E34] text-white font-bold text-lg rounded-md flex items-center justify-center gap-2"
            >
              Ir para o pagamento
              <span className="text-xl">›</span>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
