
import React from 'react';

const GuaranteeSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center bg-[#8ab4b8] rounded-[3rem] shadow-2xl mt-12 mb-12 border border-[#74a1a5]">
      <div className="flex flex-col items-center">
        {/* Imagem da Garantia */}
        <div className="mb-6 relative">
          <img 
            src="https://i.ibb.co/84M2hHVD/garantia-selo.png" 
            alt="Selo de Garantia 7 Dias" 
            className="w-32 md:w-56 h-auto drop-shadow-2xl transition-all duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== 'https://i.ibb.co/84M2hHVD/garantia-selo.png') {
                 target.src = 'https://i.ibb.co/vxgnNLDT/garantia-7-dias.png';
              }
            }}
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Garantia Incondicional de 7 Dias
        </h2>

        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-bold">
          Se você não ficar 100% satisfeito com o material, nós devolvemos todo o seu dinheiro. <span className="font-black text-black underline decoration-black/30">O risco é todo nosso!</span>
        </p>
        
        <div className="mt-8 flex items-center gap-2 text-white font-bold text-sm uppercase tracking-[0.2em]">
           <i className="fa-solid fa-check-double text-white"></i>
           <span>Satisfação ou Reembolso</span>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
