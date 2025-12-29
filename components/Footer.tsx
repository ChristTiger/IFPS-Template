
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, GraduationCap, Facebook, Twitter, Linkedin } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ifps-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-ifps-blue p-2 rounded-lg">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-title">IFPS Le Succès</span>
            </Link>
            <p className="text-ifps-gray leading-relaxed">
              Expert en formation professionnelle reconnu par le Ministère de l'Emploi et de la Formation Professionnelle du Cameroun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-ifps-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-ifps-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-ifps-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-ifps-yellow pl-4">Liens Rapides</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-ifps-gray hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-ifps-gray hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/formations-techniques" className="text-ifps-gray hover:text-white transition-colors">Techniques</Link></li>
              <li><Link to="/formations-paramedicales" className="text-ifps-gray hover:text-white transition-colors">Paramédicales</Link></li>
              <li><Link to="/contact" className="text-ifps-gray hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-ifps-yellow pl-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ifps-blue flex-shrink-0 mt-1" />
                <span className="text-ifps-gray">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ifps-blue flex-shrink-0" />
                <span className="text-ifps-gray">{COMPANY_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ifps-blue flex-shrink-0" />
                <span className="text-ifps-gray">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-ifps-yellow pl-4">Accréditation</h3>
            <p className="text-sm text-ifps-gray mb-4">
              {COMPANY_INFO.decree}
            </p>
            <div className="bg-gray-800 p-4 rounded-ifps border border-gray-700">
              <p className="text-xs text-ifps-yellow font-bold uppercase mb-1">Prochaine Rentrée</p>
              <p className="text-lg font-bold">{COMPANY_INFO.nextIntake}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-ifps-gray">
          <p>© 2025 IFPS "Le Succès". Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
