
import React from 'react';
import { Settings, HeartPulse, Laptop, GraduationCap } from 'lucide-react';
import { TrainingCategory, TrainingItem } from './types';

export const COMPANY_INFO = {
  name: 'Institut de Formation Professionnelle "Le Succès"',
  acronym: 'IFPS',
  address: 'Douala, Marché Dakar (Maeture) - Cameroun',
  phones: ['+237 679 40 98 53', '+237 656 08 14 67'],
  whatsapp: '+237679409853',
  email: 'contact@ifpslesucces.com',
  decree: 'Arrêté N°006550/MINEFOP/SG/DFOP/DSGSF/CSACD/CBACN',
  nextIntake: '05 Janvier 2026',
};

export const TRAINING_CATEGORIES: TrainingCategory[] = [
  {
    id: 'technical',
    title: 'Formations Techniques',
    path: '/formations-techniques',
    description: 'Conduite d\'engins lourds et métiers techniques de pointe.',
    color: 'ifps-yellow',
    image: 'https://picsum.photos/seed/tech/800/600',
  },
  {
    id: 'paramedical',
    title: 'Formations Paramédicales',
    path: '/formations-paramedicales',
    description: 'Soins, assistance médicale et gestion pharmaceutique.',
    color: 'ifps-red',
    image: 'https://picsum.photos/seed/medical/800/600',
  },
  {
    id: 'management-it',
    title: 'Gestion & Informatique',
    path: '/formations-gestion-informatique',
    description: 'Expertise administrative et transformation digitale.',
    color: 'ifps-blue',
    image: 'https://picsum.photos/seed/business/800/600',
  },
];

export const TECHNICAL_COURSES: string[] = [
  'Pelle excavatrice',
  'Bulldozer',
  'Pelle chargeuse',
  'Reach steaker',
  'Tractopelle',
  'Grues',
  'Niveleuse',
  'Compacteur',
];

export const PARAMEDICAL_COURSES: string[] = [
  'Auxiliaire de vie',
  'Délégué médical',
  'Soins infirmiers',
  'Aide chimiste biologistes',
  'Assistance en cabinet médical',
  'Technicien de laboratoire',
  'Vendeurs en pharmacie',
];

export const MANAGEMENT_COURSES: string[] = [
  'Secrétariat bureautique / comptable',
  'Assistant de direction',
  'Comptabilité et gestion',
  'Douane et transit',
  'Logistique et transport',
  'Management des projets',
  'Gestion des stocks',
  'Ressources humaines',
];

export const IT_COURSES: string[] = [
  'Maintenance informatique',
  'Réseaux informatique',
  'Marketing digital',
  'Infographie 2D/3D',
  'Montage audio-visuel',
  'Développement Logiciel',
  'Webmaster',
  'Architecture 3D',
];

export const KEY_FIGURES = [
  { value: '25+', label: 'Formations professionnelles', icon: <GraduationCap className="w-8 h-8" /> },
  { value: '3', label: 'Grands domaines d\'expertise', icon: <Settings className="w-8 h-8" /> },
  { value: '100%', label: 'Diplômes reconnus (AQP, CQP, DQP)', icon: <HeartPulse className="w-8 h-8" /> },
  { value: '2', label: 'Formations complémentaires', icon: <Laptop className="w-8 h-8" /> },
];
