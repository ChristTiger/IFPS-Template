
import React from 'react';
import { PARAMEDICAL_COURSES } from '../constants';
import { Heart, Stethoscope, Clock, ShieldCheck, GraduationCap } from 'lucide-react';

const ParamedicalTraining: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-ifps-red py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-title mb-6">Formations Paramédicales</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Formez-vous aux métiers de la santé et de l'assistance pour une carrière humaine et indispensable.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ifps-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-ifps shadow-md">
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2 text-ifps-red">
                  <Stethoscope className="w-8 h-8" />
                  <span>Métiers de la Santé (7 filières)</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PARAMEDICAL_COURSES.map((course) => (
                    <div key={course} className="flex items-center space-x-3 p-4 bg-ifps-light rounded-ifps hover:bg-ifps-red hover:text-white transition-colors group">
                      <Heart className="text-ifps-red group-hover:text-white w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 rounded-ifps shadow-md">
                <h3 className="text-2xl font-bold mb-8">Détails du programme</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex space-x-4">
                    <Clock className="w-12 h-12 text-ifps-red flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Durée de formation</h4>
                      <p className="text-ifps-gray">1 an (12 mois) incluant stage pratique obligatoire en milieu hospitalier ou officine.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <ShieldCheck className="w-12 h-12 text-ifps-red flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Diplôme délivré</h4>
                      <p className="text-ifps-gray">AQP, CQP ou DQP selon la filière et le niveau d'entrée initial de l'étudiant.</p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <GraduationCap className="w-12 h-12 text-ifps-red flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Niveau requis</h4>
                      <p className="text-ifps-gray">BEPC, CAP, PROB, BAC et plus pour les filières spécialisées.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-ifps-red text-white p-8 rounded-ifps shadow-xl">
                <h3 className="text-xl font-bold mb-6">Opportunités de carrière</h3>
                <p className="mb-6 opacity-90 leading-relaxed">
                  Nos diplômés travaillent dans les hôpitaux publics, cliniques privées, centres de santé, pharmacies et cabinets médicaux.
                </p>
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-ifps font-bold">Assistance médicale</div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-ifps font-bold">Vente en pharmacie</div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-ifps font-bold">Maintenance de labo</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-ifps shadow-md">
                <h3 className="text-xl font-bold mb-4">Stage Pratique</h3>
                <p className="text-ifps-gray leading-relaxed italic">
                  "L'IFPS s'assure de l'insertion en stage de ses étudiants via des partenariats avec des structures sanitaires de référence à Douala."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParamedicalTraining;
