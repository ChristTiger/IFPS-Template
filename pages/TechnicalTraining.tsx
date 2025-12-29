
import React from 'react';
import { TECHNICAL_COURSES } from '../constants';
import { CheckCircle, Truck, Info, Calendar, GraduationCap } from 'lucide-react';

const TechnicalTraining: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-ifps-yellow py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-title mb-6">Formations Techniques</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Devenez un expert certifié dans la conduite d'engins lourds et les métiers techniques du bâtiment et des travaux publics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ifps-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-ifps shadow-md">
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Truck className="text-ifps-yellow w-8 h-8" />
                  <span>Conduite d'engins (8 spécialités)</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {TECHNICAL_COURSES.map((course) => (
                    <div key={course} className="flex items-center space-x-3 p-4 bg-ifps-light rounded-ifps hover:bg-ifps-yellow hover:text-white transition-colors group">
                      <CheckCircle className="text-ifps-yellow group-hover:text-white w-5 h-5 flex-shrink-0" />
                      <span className="font-semibold">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-ifps shadow-md border-t-4 border-ifps-yellow text-center">
                  <Calendar className="w-10 h-10 text-ifps-yellow mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Durée</h3>
                  <p className="text-ifps-gray">Formation accélérée ou standard selon le profil</p>
                </div>
                <div className="bg-white p-6 rounded-ifps shadow-md border-t-4 border-ifps-yellow text-center">
                  <GraduationCap className="w-10 h-10 text-ifps-yellow mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Certification</h3>
                  <p className="text-ifps-gray">Diplôme reconnu (CQP/DQP) pour insertion directe</p>
                </div>
                <div className="bg-white p-6 rounded-ifps shadow-md border-t-4 border-ifps-yellow text-center">
                  <Info className="w-10 h-10 text-ifps-yellow mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Près-requis</h3>
                  <p className="text-ifps-gray">Niveau minimum BEPC ou équivalent souhaité</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-ifps-dark text-white p-8 rounded-ifps shadow-xl">
                <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Modalités d'inscription</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="text-ifps-yellow w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Copie de la CNI ou Acte de Naissance</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="text-ifps-yellow w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Dernier diplôme ou certificat de scolarité</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="text-ifps-yellow w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>02 Photos 4x4</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="text-ifps-yellow w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Frais d'inscription : Contactez-nous</span>
                  </li>
                </ul>
                <button className="w-full mt-8 bg-ifps-yellow py-4 rounded-ifps font-bold hover:bg-opacity-90 transition-all">
                  Télécharger la fiche
                </button>
              </div>

              <div className="bg-white p-8 rounded-ifps shadow-md">
                <h3 className="text-xl font-bold mb-4">Pourquoi ce pôle ?</h3>
                <p className="text-ifps-gray leading-relaxed">
                  Le secteur du BTP au Cameroun est en pleine expansion. La maîtrise d'engins lourds est l'une des compétences les plus recherchées sur les grands chantiers d'infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalTraining;
