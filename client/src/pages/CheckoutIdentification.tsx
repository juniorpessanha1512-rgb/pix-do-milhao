import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutIdentification() {
  const [cpf, setCpf] = useState("");
  const [cartParams, setCartParams] = useState("");

  useEffect(() => {
    // Capturar os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const quantity = params.get("quantity");
    const price = params.get("price");
    const product = params.get("product");
    
    if (quantity && price && product) {
      setCartParams(`quantity=${quantity}&price=${price}&product=${encodeURIComponent(product)}`);
    }
  }, []);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      // Formatação simples de CPF
      if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
      } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
      }
      setCpf(value);
    }
  };

  const handleContinue = () => {
    if (cpf.replace(/\D/g, "").length === 11) {
      // Salvar CPF no localStorage para uso posterior
      localStorage.setItem("checkout_cpf", cpf.replace(/\D/g, ""));
      
      // Navegar para a página de cadastro intermediária
      window.location.href = `/checkout/registration?${cartParams}`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center w-full max-w-2xl">
            <div className="flex flex-col items-center relative flex-1">
              <div className="w-full h-10 border-2 border-gray-900 rounded-full flex items-center px-4 bg-white">
                <span className="font-bold text-sm">1. Identificação</span>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">2</div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">3</div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">4</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Olá, boas vindas!</h1>
          <p className="text-gray-600 mb-8">Identifique-se usando seu CPF</p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">CPF</label>
              <Input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={handleCpfChange}
                className="h-14 text-lg border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
              />
              <p className="text-xs text-gray-400 mt-2">Insira o número do seu CPF</p>
            </div>

            <Button
              onClick={handleContinue}
              disabled={cpf.replace(/\D/g, "").length !== 11}
              className="w-full h-14 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold text-lg rounded-md transition-colors"
            >
              Continuar
            </Button>

            <p className="text-center text-[10px] text-gray-400 mt-8">
              Este site é protegido por serviços de verificação de segurança.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
