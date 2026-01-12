
import React from 'react';

const TrustBadges: React.FC = () => {
  const badges = [
    { icon: 'fa-shield-check', title: 'Compra', subtitle: 'Segura' },
    { icon: 'fa-trophy', title: 'Satisfação', subtitle: 'Garantida' },
    { icon: 'fa-lock', title: 'Privacidade', subtitle: 'Protegida' },
  ];

  return (
    <div className="flex flex-row justify-center items-center gap-6 md:gap-12 py-4 text-white/90 w-full">
      {badges.map((badge, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <i className={`fa-solid ${badge.icon} text-3xl md:text-4xl text-white`}></i>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-sm md:text-lg font-bold tracking-tight">{badge.title}</span>
            <span className="text-sm md:text-lg font-bold tracking-tight">{badge.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
