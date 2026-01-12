
import React from 'react';

interface BonusCardProps {
  title: string;
  description: string;
  value: string;
  imageUrl: string;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, description, value, imageUrl }) => {
  return (
    <div className="bg-[#8ab4b8] rounded-3xl p-5 shadow-xl flex flex-col items-center text-center border border-[#74a1a5] h-full transition-all">
      {/* Imagem do Bônus */}
      <div className="w-full flex items-center justify-center mb-8 p-2">
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/20 p-2 border border-white/10">
          <img 
            src={imageUrl} 
            alt={title} 
            className="max-w-full h-auto object-contain block"
            style={{ maxHeight: '320px' }}
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-4 leading-tight">
        {title}
      </h3>

      <p className="text-sm font-bold text-white leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="flex flex-col items-center gap-2">
        <div className="bg-white/30 px-4 py-2 rounded-lg border border-white/20 shadow-sm">
          <span className="text-[#f43f5e] font-bold text-base line-through">
            Valor: {value}
          </span>
        </div>
        
        <div className="text-[#2dd461] font-black text-xl uppercase tracking-tighter">
          HOJE: GRÁTIS
        </div>
      </div>
    </div>
  );
};

export default BonusCard;