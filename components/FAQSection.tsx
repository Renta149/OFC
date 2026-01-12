import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "Como receberei o meu acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá todo material diretamente no seu whatsapp cadastrado na próxima página."
  },
  {
    question: "O material é físico ou digital?",
    answer: "Esta material é 100% digital, mas pode ser impresso em qualquer impressora. Permitindo que você o acesse pelo celular, tablet, computador ou até fisicamente onde estiver."
  },
  {
    question: "Preciso ter conhecimento avançado da Bíblia?",
    answer: "Não! O guia usa linguagem simples e acolhedora, sendo ideal tanto para iniciantes quanto para quem já possui uma caminhada de fé."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Você pode garantir sua edição via Pix com liberação imediata."
  },
  {
    question: "O pagamento é realmente seguro?",
    answer: "Sim, utilizamos uma plataforma de pagamentos criptografada e líder de mercado, garantindo total segurança para seus dados."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Dúvidas Frequentes
      </h2>
      <div className="space-y-4">
        {FAQ_DATA.map((item, idx) => (
          <div 
            key={idx} 
            className="border-b border-white/10 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full py-6 flex items-center justify-between text-left group transition-all"
            >
              <span className="text-lg font-bold text-white transition-colors pr-8">
                {item.question}
              </span>
              <i className={`fa-solid fa-chevron-down text-sm text-yellow-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}></i>
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-white/70 leading-relaxed font-normal">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;