/**
 * PromoBanners Component - Pix do Milhão Clone
 * Design: Réplica fiel dos banners promocionais
 */

export default function PromoBanners() {
  return (
    <div className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4">
          {/* App Download Banner */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/app_banner.png"
              alt="Baixe agora o nosso aplicativo"
              className="w-full h-auto"
            />
          </div>

          {/* VIP Group Banner */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/vip_banner.png"
              alt="Entre para o nosso grupo VIP"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
