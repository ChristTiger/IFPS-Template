
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Target, Eye, ShieldCheck, Award, BookOpen, Car } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <section className="bg-ifps-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-title mb-4">À Propos de l'IFPS</h1>
          <p className="text-xl opacity-90">Expertise, Rigueur, et Réussite professionnelle.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-bold mb-8">Notre Histoire</h2>
               <div className="space-y-6 text-ifps-gray text-lg leading-relaxed">
                 <p>
                   Fondé à Douala, l'Institut de Formation Professionnelle "Le Succès" est né d'une volonté ferme de combler le déficit de compétences techniques dans le secteur industriel et paramédical au Cameroun.
                 </p>
                 <p>
                   Au fil des années, nous avons consolidé notre réputation grâce à un encadrement rigoureux et une approche pédagogique axée sur la pratique (80% pratique, 20% théorie).
                 </p>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <img src="https://picsum.photos/seed/about1/400/500" alt="IFPS Building" className="rounded-ifps h-full object-cover" />
               <div className="space-y-4">
                 <img src="https://picsum.photos/seed/about2/400/300" alt="Workshop" className="rounded-ifps h-[180px] w-full object-cover" />
                 <img src="https://picsum.photos/seed/about3/400/300" alt="Students" className="rounded-ifps h-[180px] w-full object-cover" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-ifps-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-ifps shadow-md border-l-8 border-ifps-blue">
               <Target className="w-12 h-12 text-ifps-blue mb-6" />
               <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
               <p className="text-ifps-gray leading-relaxed">
                 Offrir des formations professionnelles de haute qualité, accessibles et adaptées aux exigences du marché de l'emploi pour garantir l'insertion socio-professionnelle immédiate de nos étudiants.
               </p>
            </div>
            <div className="bg-white p-12 rounded-ifps shadow-md border-l-8 border-ifps-yellow">
               <Eye className="w-12 h-12 text-ifps-yellow mb-6" />
               <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
               <p className="text-ifps-gray leading-relaxed">
                 Devenir la référence nationale en formation technique et paramédicale en Afrique centrale, en projetant une image moderne, professionnelle et innovante de l'enseignement technique.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ifps-dark text-white p-12 rounded-ifps shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
               <div className="mb-8 md:mb-0">
                 <div className="flex items-center space-x-3 mb-6">
                   <ShieldCheck className="text-ifps-blue w-10 h-10" />
                   <h2 className="text-3xl font-bold">Accréditations Officielles</h2>
                 </div>
                 <p className="text-ifps-gray text-xl mb-4 max-w-xl">
                   Établissement agréé par l'État du Cameroun sous le numéro :
                 </p>
                 <div className="bg-gray-800 border border-gray-700 p-4 rounded-ifps font-mono text-ifps-yellow text-lg">
                   {COMPANY_INFO.decree}
                 </div>
               </div>
               <div className="text-center bg-white p-8 rounded-ifps text-ifps-dark">
                 <Award className="w-16 h-16 text-ifps-yellow mx-auto mb-4" />
                 <p className="font-bold text-lg mb-2">Diplômes d'État</p>
                 <div className="flex space-x-2 justify-center">
                   <span className="bg-ifps-light px-3 py-1 rounded font-bold">AQP</span>
                   <span className="bg-ifps-light px-3 py-1 rounded font-bold">CQP</span>
                   <span className="bg-ifps-light px-3 py-1 rounded font-bold">DQP</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Courses */}
      <section className="py-20 bg-ifps-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Formations Complémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-ifps shadow-md flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-ifps-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Cours de Langues</h3>
              <p className="text-ifps-gray">Maîtrisez l'anglais professionnel pour élargir vos horizons de carrière.</p>
            </div>
            <div className="bg-white p-8 rounded-ifps shadow-md flex flex-col items-center">
              <Car className="w-12 h-12 text-ifps-yellow mb-4" />
              <h3 className="text-xl font-bold mb-2">Auto-école</h3>
              <p className="text-ifps-gray">Apprentissage complet : Code de la route + Conduite pratique (Permis B & C).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
