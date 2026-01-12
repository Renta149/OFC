
import React from 'react';

const AuthorSection: React.FC = () => {
  return (
    <section className="bg-[#8ab4b8] py-16 px-6 rounded-[3rem] my-12 border border-[#74a1a5] shadow-2xl text-white">
      <div className="max-w-5xl mx-auto">
        {/* Layout Principal: Imagem e Texto */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Coluna da Imagem */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              {/* Círculo decorativo de fundo fixo sem interação de hover */}
              <div className="absolute inset-0 bg-[#74a1a5] rounded-full scale-110 -rotate-6 transition-all opacity-50"></div>
              
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
                <img 
                  src="https://i.imgur.com/VxUlr8X.png" 
                  alt="Freira Rosangela Aparecida Almeida" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-2 -right-2 bg-[#002147] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-20 border-4 border-white">
                <i className="fa-solid fa-hands-praying text-lg"></i>
              </div>
            </div>
          </div>

          {/* Coluna de Texto */}
          <div className="w-full md:w-2/3 text-left">
            <span className="text-white font-bold uppercase tracking-widest text-xs mb-2 block">
              Conheça a idealizadora
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight">
              Sobre a Autora
            </h2>
            <div className="h-1.5 w-16 bg-white mb-6 rounded-full shadow-sm"></div>
            
            <h3 className="text-xl font-bold text-white mb-1">
              Freira Rosangela Aparecida Almeida
            </h3>
            <div className="inline-block px-3 py-1 bg-white/20 text-white rounded-lg text-xs font-bold mb-4 border border-white/20">
              Autora do Devocional 365 dias com Maria
            </div>

            <div className="space-y-3 text-black leading-relaxed text-base font-bold">
              <p>
                Freira e autora católica, Rosangela Aparecida Almeida dedica sua missão à evangelização por meio da espiritualidade mariana e da oração diária.
              </p>
              <p>
                Idealizadora do <span className="font-black underline decoration-black/40 underline-offset-4">Devocional 365 dias com Maria</span>, conduz fiéis a uma caminhada contínua de fé, confiança e entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
