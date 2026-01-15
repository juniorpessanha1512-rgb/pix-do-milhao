/**
 * AlertTicker Component - Pix do Milhão Clone
 * Design: Réplica fiel do banner de alerta animado com fundo azul e padrão tracejado
 */

export default function AlertTicker() {
  const message = "🚨 ATENÇÃO! - HOJE TEM R$ 100 MIL REAIS! - HOJE TEM R$ 100 MIL REAIS NO PIX! ";
  
  return (
    <div className="bg-[#0066CC] py-2.5 overflow-hidden border-b-4 border-dashed border-yellow-300 relative">
      <div className="animate-ticker whitespace-nowrap flex items-center">
        {/* Duplicamos o conteúdo para criar o efeito de loop infinito */}
        {[...Array(15)].map((_, i) => (
          <span key={i} className="text-white font-black text-xs md:text-sm mx-4 tracking-wide uppercase">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
