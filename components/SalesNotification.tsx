
import React, { useState, useEffect } from 'react';

interface NotificationData {
  name: string;
  city: string;
  state: string;
  plan: string;
  time: string;
}

const NAMES = [
  'Maria P.', 'Ana K.', 'Julia M.', 'Beatriz F.', 'Carla S.', 
  'Luciana R.', 'Tereza V.', 'Fernanda O.', 'Patrícia G.', 'Isabela D.',
  'Helena M.', 'Cristina B.', 'Sonia L.', 'Renata P.', 'Marta Q.'
];

const SalesNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<NotificationData | null>(null);
  const [userLocation, setUserLocation] = useState({ city: 'São Paulo', state: 'SP' });

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(location => {
        if (location.city && location.region_code) {
          setUserLocation({ city: location.city, state: location.region_code });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const isSameCity = Math.random() > 0.3;
      const minutes = Math.floor(Math.random() * 55) + 2;
      
      const notification: NotificationData = {
        name: randomName,
        city: isSameCity ? userLocation.city : 'Rio de Janeiro',
        state: isSameCity ? userLocation.state : 'RJ',
        plan: Math.random() > 0.4 ? 'Pacote Premium' : 'Plano Básico',
        time: `${minutes} min atrás`
      };

      setData(notification);
      setIsVisible(true);

      setTimeout(() => setIsVisible(false), 6000);
    };

    const firstTimeout = setTimeout(showRandomNotification, 4000);
    const interval = setInterval(showRandomNotification, 22000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [userLocation]);

  if (!data) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[100] transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white px-5 py-3 rounded-[1.2rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-[#e8f5e9] flex items-center gap-4 min-w-[260px]">
        
        {/* Ícone de Carrinho (Azul Claro) */}
        <div className="w-10 h-10 rounded-full bg-[#edf2ff] flex items-center justify-center shrink-0">
          <i className="fa-solid fa-shopping-cart text-[#4c6ef5] text-sm"></i>
        </div>

        {/* Conteúdo da Notificação */}
        <div className="flex flex-col">
          <h4 className="text-[13px] font-bold text-[#2e7d32] leading-tight">
            {data.name}
          </h4>
          
          <p className="text-[13px] font-bold text-slate-800 leading-tight">
            Comprou: <span className="font-bold">{data.plan}</span>
          </p>
          
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
            {data.city}, {data.state} - {data.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesNotification;
