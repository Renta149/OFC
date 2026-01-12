
import React from 'react';
import BonusCard from './BonusCard';

const BONUSES = [
  {
    title: "Exército de São Miguel",
    description: "Consagre-se a São Miguel e fortaleça sua vida espiritual com orações e proteção diária.",
    value: "R$ 67",
    imageUrl: "https://i.imgur.com/yRDy88d.png"
  },
  {
    title: "Guia do Santo Rosário e Terço da Misericórdia",
    description: "Aprenda a rezar com profundidade e fé essas duas orações poderosas da Igreja.",
    value: "R$ 47",
    imageUrl: "https://i.imgur.com/X0X97HJ.png"
  },
  {
    title: "Novena da Fé e Confiança em Deus",
    description: "Uma novena simples e eficaz para renovar sua confiança em Deus em qualquer momento.",
    value: "R$ 37",
    imageUrl: "https://i.imgur.com/yxPZM6w.png"
  }
];

const BonusSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <span className="bg-yellow-400/20 text-yellow-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
          Exclusivo para Hoje
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Receba 3 Bônus Incríveis GRÁTIS!
        </h2>
        <p className="text-lg md:text-xl text-white/80 font-normal max-w-2xl mx-auto">
          Ao garantir sua edição hoje, você leva esses materiais extras para transformar seus devocionais
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {BONUSES.map((bonus, idx) => (
          <BonusCard key={idx} {...bonus} />
        ))}
      </div>

      {/* Resumo do Valor dos Bônus */}
      <div className="max-w-2xl mx-auto bg-[#8ab4b8] rounded-[2rem] p-6 md:p-8 shadow-2xl border border-[#74a1a5] text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-2">
          <span className="text-lg md:text-2xl font-bold text-white uppercase tracking-tight">
            Valor Total dos Bônus:
          </span>
          <span className="text-xl md:text-3xl font-bold text-[#f43f5e] line-through decoration-2">
            R$ 151,00
          </span>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <i className="fa-solid fa-arrow-right text-[#2dd461] text-2xl md:text-3xl hidden md:block"></i>
          <h4 className="text-3xl md:text-5xl font-black text-[#2dd461] uppercase tracking-tighter flex items-center gap-3">
            GRÁTIS HOJE!
            <span className="text-2xl md:text-4xl">🎁</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;