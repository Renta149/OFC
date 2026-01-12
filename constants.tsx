
import React from 'react';
import { FeatureItem, BenefitItem } from './types';

export const COLORS = {
  primary: '#001a3d',
  secondary: '#003366',
  accent: '#facc15',
  success: '#22c55e',
  bonusBg: '#8ab4b8',
};

export const FEATURES: FeatureItem[] = [
  {
    title: "Reflexões diárias",
    description: "inspiradas na vida e virtudes de Maria que te guiarão ao encontro com Deus",
  },
  {
    title: "Orações poderosas",
    description: "que te ajudarão a fortalecer sua fé e confiança em Deus",
  },
  {
    title: "Desafios práticos",
    description: "que incentivam a aplicação dos ensinamentos de Maria em sua vida cotidiana, fazendo com que sua caminhada com Cristo se torne mais profunda",
  },
  {
    title: "Passagens bíblicas",
    description: "que te conectam à Palavra de Deus, trazendo luz e sabedoria para os momentos de dúvida e incerteza",
  },
];

export const BASIC_BENEFITS: BenefitItem[] = [
  { text: "Devocional Digital 365 Dias (Jan a Dez 2026)", checked: true },
  { text: "Acesso Vitalício", checked: true },
  { text: "Garantia de 7 dias", checked: true },
  { text: "Bônus: Exército de São Miguel", strikethrough: true },
  { text: "Bônus: Guia do Rosário e Misericórdia", strikethrough: true },
  { text: "Bônus: Novena da Fé e Confiança", strikethrough: true },
];

export const PREMIUM_BENEFITS: BenefitItem[] = [
  { text: "Devocional Digital 365 Dias (Jan a Dez 2026)", checked: true },
  { text: "Plano de leitura biblico anual", checked: true },
  { text: "Acesso Vitalício", checked: true },
  { text: "Garantia de 30 dias", checked: true },
  { text: "🎁 Bônus: Exército de São Miguel", checked: true },
  { text: "🎁 Bônus: Guia do Rosário e Misericórdia", checked: true },
  { text: "🎁 Bônus: Novena da Fé e Confiança", checked: true },
];
