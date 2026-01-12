
import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    name: "Maria Helena",
    city: "Belo Horizonte, MG",
    text: "Um verdadeiro bálsamo para as minhas manhãs. Sinto a presença da Virgem Maria em cada reflexão. Transformou minha rotina de oração!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "João Batista",
    city: "Santarém, PA",
    text: "O conteúdo é profundo e muito fácil de acompanhar. Os desafios práticos me ajudaram a ser um pai e esposo mais paciente e dedicado.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Tereza Souza",
    city: "Campinas, SP",
    text: "A edição 2026 está impecável. As artes são lindas e as meditações tocam no fundo da alma. Indico para todos da minha paróquia!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    name: "Maria Rita",
    city: "Porto Alegre, RS",
    text: "Uma experiência profunda e emocionante. Maria nos guia com ternura através deste devocional. Sinto minha fé renovada a cada dia.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    name: "Luciana Costa",
    city: "Salvador, BA",
    text: "Me sinto muito mais próxima de Deus. Maria nos ensina o caminho do silêncio e da escuta. Esse devocional foi um presente do céu.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 10000); // Troca a cada 10 segundos para facilitar a leitura
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
          Vidas transformadas pela devoção
        </h3>
        <p className="text-white/60 text-lg font-normal">
          Mais de 10.000 fiéis já caminham diariamente com a Mãe
        </p>
      </div>

      <div className="max-w-xl mx-auto relative group">
        {/* Container do Slide */}
        <div className="relative min-h-[320px] md:min-h-[280px] flex items-center justify-center">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                idx === activeIndex 
                ? 'opacity-100 translate-y-0 scale-100 z-10' 
                : 'opacity-0 translate-y-8 scale-95 -z-10'
              }`}
            >
              <div className="bg-[#0a2647] border border-white/10 p-8 rounded-[2.5rem] flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-full">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-full border-2 border-yellow-400 object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-[#0a2647] flex items-center justify-center">
                      <i className="fa-solid fa-check text-[10px] text-white"></i>
                    </div>
                  </div>
                  <div className="text-left flex-grow">
                    <h4 className="text-xl font-bold text-white leading-tight">{t.name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-bold">{t.city}</p>
                  </div>
                  <div className="flex gap-0.5 self-start pt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-yellow-400 text-xs"></i>
                    ))}
                  </div>
                </div>
                
                <p className="text-white/90 text-lg leading-relaxed italic font-normal text-left relative">
                  <span className="text-3xl text-yellow-400/20 absolute -top-4 -left-2 font-serif font-normal">"</span>
                  {t.text}
                  <span className="text-3xl text-yellow-400/20 absolute -bottom-4 right-0 font-serif font-normal">"</span>
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <i className="fa-solid fa-circle-check text-green-500 text-[10px]"></i>
                  </div>
                  <span className="text-xs text-white/40 font-bold uppercase tracking-[0.15em]">Comprador Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                ? 'w-10 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]' 
                : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
