import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";

export default function CheckoutRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleNext = () => {
    // Salvar temporariamente no localStorage para usar no pagamento se necessário
    localStorage.setItem("checkout_name", formData.name);
    localStorage.setItem("checkout_email", formData.email);
    
    // Recuperar parâmetros da URL para manter o contexto do carrinho
    const params = new URLSearchParams(window.location.search);
    window.location.href = `/checkout/cart?${params.toString()}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">É sua primeira vez por aqui!</h1>
            <p className="text-gray-600">Você ainda não tem uma conta conosco. Vamos fazer o seu cadastro?</p>
            <p className="text-sm text-gray-400">Página 1 de 2</p>
          </div>

          <div className="space-y-8 max-w-3xl">
            {/* Nome */}
            <div className="space-y-3">
              <Label htmlFor="name" className="text-lg font-medium">Nome *</Label>
              <Input 
                id="name"
                placeholder=""
                className="h-14 text-lg border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <p className="text-xs text-gray-400">Seu nome completo</p>
            </div>

            {/* Nome Social */}
            <div className="flex items-center space-x-3">
              <Checkbox id="social-name" className="w-6 h-6 border-gray-300 data-[state=checked]:bg-yellow-400 data-[state=checked]:border-yellow-400" />
              <Label htmlFor="social-name" className="text-gray-600 font-normal">Usar Nome Social</Label>
            </div>

            {/* Telefone */}
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-lg font-medium">Telefone ou WhatsApp *</Label>
              <Input 
                id="phone"
                placeholder=""
                className="h-14 text-lg border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <p className="text-xs text-gray-400">Seu número de telefone ou WhatsApp</p>
            </div>

            {/* E-mail */}
            <div className="space-y-3">
              <Label htmlFor="email" className="text-lg font-medium">E-mail *</Label>
              <Input 
                id="email"
                type="email"
                placeholder=""
                className="h-14 text-lg border-gray-200 focus:border-yellow-400 focus:ring-yellow-400"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <p className="text-xs text-gray-400">Seu endereço de e-mail</p>
            </div>

            {/* Botão Próximo */}
            <div className="flex justify-end pt-4">
              <Button 
                onClick={handleNext}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-6 px-8 rounded-md flex items-center gap-2"
              >
                Próximo
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
