import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, Smartphone, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

export default function CheckoutPayment() {
  const [loading, setLoading] = useState(true);
  const [pixData, setPixData] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState("09/01 20:19");
  const [price, setPrice] = useState(19.90);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlPrice = parseFloat(params.get("price") || "19.90");
    setPrice(urlPrice);

    const createTransaction = async () => {
      try {
        const cpf = localStorage.getItem("checkout_cpf") || "00000000000";
        const name = localStorage.getItem("checkout_name") || "Cliente Pix";
        const email = localStorage.getItem("checkout_email") || "cliente@exemplo.com";

        const response = await axios.post("/api/create-transaction", {
          amount: urlPrice,
          cpf: cpf,
          name: name,
          email: email
        });
        
        setPixData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error creating transaction:", error);
        // Fallback para dados estáticos se a API falhar (para demonstração)
        setPixData({
          qr_code: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020101021226830014BR.GOV.BCB.PIX2",
          copy_paste: "00020101021226830014BR.GOV.BCB.PIX2"
        });
        setLoading(false);
      }
    };

    createTransaction();
  }, []);

  const handleCopyPix = () => {
    if (pixData?.copy_paste) {
      navigator.clipboard.writeText(pixData.copy_paste);
      toast.success("Código Pix copiado!");
    }
  };

  const formatPrice = (value: number) => {
    return value.toFixed(2).replace('.', ',');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-[#FFD700] rounded-t-lg p-4">
          <h1 className="text-xl font-black text-gray-900 uppercase">Pagamento</h1>
        </div>

        <div className="bg-white shadow-sm border-x border-b border-gray-100 p-6 space-y-8">
          {/* Info Header */}
          <div className="flex justify-between items-center text-xs border-b pb-4">
            <div>
              <p className="text-gray-400">Valor <span className="text-green-600 font-bold text-sm">R$ {formatPrice(price)}</span></p>
            </div>
            <div>
              <p className="text-gray-400">Pague até <span className="text-gray-900 font-bold">{timeLeft}</span></p>
            </div>
          </div>

          {/* Pix Logo and Instructions */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-8" />
              <p className="text-xs text-gray-500 max-w-[200px]">
                Copie o código Pix abaixo e cole no app do seu banco para finalizar a compra.
              </p>
            </div>

            {/* QR Code */}
            <div className="border-2 border-gray-100 p-4 rounded-lg">
              {loading ? (
                <div className="w-[200px] h-[200px] flex items-center justify-center">
                  <RefreshCw className="animate-spin text-yellow-500" />
                </div>
              ) : (
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixData?.qr_code || pixData?.copy_paste || "")}`} alt="QR Code Pix" className="w-[200px] h-[200px]" />
              )}
            </div>

            {/* Copy Paste Code */}
            <div className="w-full max-w-md">
              <div className="bg-gray-50 border border-gray-200 rounded p-3 text-[10px] font-mono break-all text-gray-500 mb-4">
                {pixData?.copy_paste || "Carregando código..."}
              </div>
              <Button 
                onClick={handleCopyPix}
                className="w-full bg-[#FFD700] hover:bg-[#FFC107] text-gray-900 font-bold py-6 rounded-lg flex items-center justify-center gap-2"
              >
                <Copy size={18} />
                Copiar código Pix
              </Button>
            </div>
          </div>

          {/* How to Pay */}
          <div className="space-y-4 pt-4">
            <h3 className="text-center font-bold text-gray-700">Como pagar?</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="bg-white p-2 rounded border border-gray-200">
                  <Smartphone size={20} className="text-blue-500" />
                </div>
                <p className="text-[11px] text-gray-600 leading-tight">
                  Clique no botão acima para <span className="font-bold">copiar o código Pix</span>, e logo em seguida abra o app do seu banco ou carteira digital de preferência.
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="bg-white p-2 rounded border border-gray-200">
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>
                <p className="text-[11px] text-gray-600 leading-tight">
                  Localize a função Pix, cole o código Pix no app e confirme o pagamento.
                </p>
              </div>
            </div>
          </div>

          {/* Change Method */}
          <Button variant="outline" className="w-full border-yellow-400 text-yellow-600 font-bold py-6 flex items-center justify-center gap-2">
            <RefreshCw size={18} />
            Mudar método de pagamento
          </Button>

          {/* Updates Section */}
          <div className="bg-[#FFD700] rounded-lg p-6 text-center space-y-4">
            <p className="text-white font-bold text-sm leading-tight">
              Que tal receber atualizações sobre seu pedido e nossas novidades?
            </p>
            <Button className="w-full bg-white hover:bg-gray-50 text-yellow-600 font-bold py-6 rounded-full shadow-sm">
              Quero receber atualizações
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
