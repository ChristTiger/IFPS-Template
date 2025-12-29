
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users, Briefcase, GraduationCap } from 'lucide-react';
import { TRAINING_CATEGORIES, KEY_FIGURES, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/ifps-hero/1920/1080" 
            alt="IFPS Background" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold font-title mb-6 leading-tight">
              Construisez votre <span className="text-ifps-yellow">Avenir Professionnel</span> dès Aujourd'hui
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              L'Institut de Formation Professionnelle "Le Succès" forme les leaders techniques et paramédicaux de demain à Douala.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="bg-ifps-yellow hover:bg-opacity-90 text-white px-8 py-4 rounded-ifps font-bold text-lg text-center transition-all flex items-center justify-center space-x-2"
              >
                <span>S'inscrire maintenant</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/a-propos" 
                className="bg-white hover:bg-ifps-light text-ifps-dark px-8 py-4 rounded-ifps font-bold text-lg text-center transition-all"
              >
                Découvrir l'institut
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-ifps-blue bg-opacity-10 text-ifps-blue rounded-full font-bold text-sm uppercase mb-6 tracking-widest">
                Qui sommes-nous ?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Un établissement reconnu pour son excellence</h2>
              <div className="space-y-4 text-ifps-gray text-lg leading-relaxed">
                <p>
                  L'Institut de Formation Professionnelle "Le Succès" (IFPS) est un établissement reconnu par le Ministère de l'Emploi et de la Formation Professionnelle du Cameroun.
                </p>
                <p>
                  Depuis sa création, l'IFPS forme des centaines de jeunes aux métiers techniques, paramédicaux et de gestion, répondant aux besoins croissants du marché de l'emploi local et international.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Certifications Officielles', 'Formations Pratiques', 'Experts Formateurs', 'Insertion Professionnelle'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-ifps-blue w-6 h-6" />
                    <span className="font-semibold text-ifps-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/students/800/600" 
                alt="Nos Étudiants" 
                className="rounded-ifps shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-ifps-yellow p-8 rounded-ifps shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-white font-medium">Formations Certifiantes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-ifps-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Domaines de Formation</h2>
            <p className="text-ifps-gray text-lg">Choisissez votre voie parmi nos trois pôles d'expertise majeurs conçus pour votre réussite.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRAINING_CATEGORIES.map((cat) => (
              <Link 
                key={cat.id} 
                to={cat.path}
                className="group bg-white rounded-ifps overflow-hidden shadow-lg transition-all hover:shadow-2xl transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute top-4 left-4 px-4 py-2 bg-${cat.color} text-white font-bold rounded-ifps shadow-lg`}>
                    {cat.title}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                  <p className="text-ifps-gray mb-6">{cat.description}</p>
                  <div className={`flex items-center space-x-2 font-bold text-${cat.color}`}>
                    <span>Voir les formations</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="py-20 bg-ifps-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {KEY_FIGURES.map((item, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="inline-block p-4 bg-white bg-opacity-20 rounded-full mb-2">
                  {item.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold">{item.value}</div>
                <div className="text-ifps-light opacity-90 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">La vie au campus</h2>
          <p className="text-ifps-gray">Un environnement moderne et propice à l'apprentissage.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src={`https://picsum.photos/seed/gallery-${i}/400/400`} 
                alt={`Campus ${i}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ifps-yellow text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Prêt à lancer votre carrière ?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Les inscriptions sont ouvertes pour la rentrée du {COMPANY_INFO.nextIntake}. Réservez votre place dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact" 
              className="bg-white text-ifps-yellow px-10 py-5 rounded-ifps font-bold text-xl hover:shadow-xl transition-all"
            >
              Je m'inscris
            </Link>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`} 
              className="flex items-center space-x-2 bg-ifps-blue px-10 py-5 rounded-ifps font-bold text-xl hover:shadow-xl transition-all"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
