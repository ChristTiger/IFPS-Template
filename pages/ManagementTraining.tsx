
import React from 'react';
import { MANAGEMENT_COURSES, IT_COURSES } from '../constants';
import { Briefcase, Laptop, Smartphone, LineChart, Code, Monitor } from 'lucide-react';

const ManagementTraining: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-ifps-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-title mb-6">Gestion & Informatique</h1>
          <p className="text-xl max-w-3xl opacity-90">
            Maîtrisez les outils de demain pour devenir un expert en administration, gestion d'entreprise ou technologies de l'information.
          </p>
        </div>
      </section>

      <section className="py-20 bg-ifps-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Management Column */}
            <div className="bg-white p-8 rounded-ifps shadow-md border-t-8 border-ifps-blue">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-ifps-blue p-3 rounded-ifps text-white">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold">Filières Gestion</h2>
              </div>
              <div className="space-y-3">
                {MANAGEMENT_COURSES.map((course) => (
                  <div key={course} className="flex items-center space-x-3 p-3 bg-ifps-light rounded-ifps hover:bg-ifps-blue hover:text-white transition-all cursor-default group">
                    <LineChart className="w-5 h-5 text-ifps-blue group-hover:text-white" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Column */}
            <div className="bg-white p-8 rounded-ifps shadow-md border-t-8 border-ifps-yellow">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-ifps-yellow p-3 rounded-ifps text-white">
                  <Laptop className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold">Filières Informatique</h2>
              </div>
              <div className="space-y-3">
                {IT_COURSES.map((course) => (
                  <div key={course} className="flex items-center space-x-3 p-3 bg-ifps-light rounded-ifps hover:bg-ifps-yellow hover:text-white transition-all cursor-default group">
                    <Code className="w-5 h-5 text-ifps-yellow group-hover:text-white" />
                    <span className="font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 bg-ifps-dark text-white p-12 rounded-ifps text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <Monitor className="w-32 h-32" />
             </div>
             <h3 className="text-3xl font-bold mb-6">Expertise Digitale & Management</h3>
             <p className="text-xl text-ifps-gray max-w-3xl mx-auto mb-8">
               Nous offrons également des formations transversales en Marketing Digital et Management de projets pour booster votre employabilité.
             </p>
             <button className="bg-ifps-yellow px-10 py-4 rounded-ifps font-bold text-lg hover:scale-105 transition-transform">
               Consulter le catalogue complet
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementTraining;
