import React from 'react';
import OfferBox from './components/OfferBox';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import SalesNotification from './components/SalesNotification';
import BonusSection from './components/BonusSection';
import TestimonialsSection from './components/TestimonialsSection';
import AuthorSection from './components/AuthorSection';
import { FEATURES } from './constants';

const App: React.FC = () => {
  const scrollToOffers = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent');
    }
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toLocaleDateString('pt-BR');
  };

  const MONTH_COVERS = [
    { name: 'Janeiro', url: 'https://i.imgur.com/904DX13.png' },
    { name: 'Fevereiro', url: 'https://i.imgur.com/TFzi1Ib.png' },
    { name: 'Março', url: 'https://i.imgur.com/UL1iCSa.png' },
    { name: 'Abril', url: 'https://i.imgur.com/kFmApLJ.png' },
    { name: 'Maio', url: 'https://i.imgur.com/2FpTgkF.png' },
    { name: 'Junho', url: 'https://i.imgur.com/XdwPlX2.png' },
    { name: 'Julho', url: 'https://i.imgur.com/A9qM5oB.png' },
  ];

  const marqueeItems = [...MONTH_COVERS, ...MONTH_COVERS];

  return (
    <div className="min-h-screen text-white overflow-x-hidden selection:bg-yellow-400 selection:text-blue-900 bg-[#002147]">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_#003366_0%,_#002147_100%)] -z-10 opacity-50"></div>

      <div className="bg-red-600 text-white text-center py-3 px-2 font-black text-lg sm:text-2xl md:text-4xl shadow-xl relative z-50 whitespace-nowrap overflow-hidden flex items-center justify-center gap-3 uppercase">
        <span>
          oferta válida somente hoje: <span className="underline underline-offset-4 decoration-white/40">{getCurrentDate()}</span>
        </span>
      </div>

      <header className="px-6 pt-12 pb-0 text-center mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
            <span className="text-yellow-300">365 dias com maria</span> Devocional diário - Edição 2026
          </h1>
          <h2 className="text-lg md:text-2xl font-normal opacity-80 leading-relaxed mb-12 max-w-3xl mx-auto">
            Um devocional diário com inspirações, meditações e orações para <span className="text-yellow-300 font-bold">aprofundar sua espiritualidade mariana</span> e <span className="text-yellow-300 font-bold">fortalecer sua caminhada com Cristo</span>
          </h2>
        </div>

        {/* ELEMENTO LCP - PRIORIDADE MÁXIMA */}
        <div className="relative flex justify-center pt-4 mb-16 w-full max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-blue-500/20 blur-[150px] rounded-full scale-110 animate-pulse"></div>
          <img 
            src="https://i.imgur.com/qcPpwX6.png" 
            alt="Devocional 365 Dias com Maria Bundle" 
            className="w-full h-auto relative z-10 drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
            width="1200"
            height="800"
            fetchpriority="high"
            loading="eager"
            decoding="sync"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-10 px-4">
            <button 
              onClick={scrollToOffers}
              className="w-full md:max-w-md bg-[#2dd461] hover:bg-[#28c055] text-white font-bold text-lg md:text-xl py-5 rounded-2xl shadow-[0_10px_40px_rgba(45,212,97,0.3)] transition-all animate-pulse-button uppercase tracking-tighter"
            >
              GARANTIR MINHA EDIÇÃO 2026
            </button>
          </div>
        </div>
      </header>

      <section className="px-6 pt-10 pb-8 max-w-6xl mx-auto text-center">
        <div className="h-1.5 w-24 bg-yellow-400 mx-auto mb-6 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.3)]"></div>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-14 tracking-tighter leading-none">
          Veja o que você vai receber:
        </h3>
        
        <div className="relative w-full overflow-hidden mb-8 py-6">
          <div className="animate-marquee gap-8 flex items-center">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="w-56 md:w-80 flex-shrink-0">
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/10 group bg-black/20">
                  <img 
                    src={item.url} 
                    alt={`Capa de ${item.name}`}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="568"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TestimonialsSection />
      </section>

      <section className="px-6 py-24 bg-[#001835] relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 tracking-tight italic">
            O que você encontrará nesta jornada...
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 transition-colors">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <i className="fa-solid fa-check text-white text-lg"></i>
                  </div>
                </div>
                <h4 className="font-bold text-2xl mb-4 leading-tight">{feature.title}</h4>
                <p className="text-white/80 leading-relaxed text-lg font-normal">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ofertas" className="px-6 pt-24 pb-0">
        <div className="max-w-6xl mx-auto text-center">
          <BonusSection />
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Escolha seu plano para 2026</h2>
            <p className="text-lg opacity-70 italic font-normal">Receba acesso imediate e comece sua jornada de fé</p>
          </div>
          <OfferBox />
          <div className="mt-12 mb-12 flex flex-col items-center gap-6 opacity-40">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Pagamento Seguro & Criptografado</p>
            <div className="flex gap-4">
              <i className="fa-brands fa-cc-visa text-2xl"></i>
              <i className="fa-brands fa-cc-mastercard text-2xl"></i>
              <i className="fa-solid fa-barcode text-2xl"></i>
              <i className="fa-solid fa-pix text-2xl"></i>
            </div>
          </div>
          <GuaranteeSection />
          <AuthorSection />
          <FAQSection />
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#000d1a] text-center text-white/30 text-xs border-t border-white/5">
        <p className="text-lg text-white/60 mb-4 font-bold">"A minha alma engrandece ao Senhor"</p>
        <p className="font-normal">&copy; 2026 Devocional 365 Dias com Maria. Todos os direitos reservados.</p>
      </footer>
      <SalesNotification />
    </div>
  );
};

export default App;