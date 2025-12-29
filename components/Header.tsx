
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  const formationLinks = [
    { name: 'Techniques', path: '/formations-techniques' },
    { name: 'Paramédicales', path: '/formations-paramedicales' },
    { name: 'Gestion & IT', path: '/formations-gestion-informatique' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-ifps-blue p-2 rounded-lg">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <div>
              <span className="block text-2xl font-bold text-ifps-blue font-title leading-tight">IFPS</span>
              <span className="block text-xs font-semibold text-ifps-yellow uppercase tracking-wider">Le Succès</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-ifps-blue ${isActive('/') ? 'text-ifps-blue' : 'text-ifps-dark'}`}
            >
              Accueil
            </Link>
            
            {/* Desktop Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-ifps-blue ${location.pathname.includes('formations') ? 'text-ifps-blue' : 'text-ifps-dark'}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span>Formations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={`absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-ifps overflow-hidden transform transition-all duration-200 origin-top-left ${isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {formationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-6 py-4 text-sm text-ifps-dark hover:bg-ifps-light hover:text-ifps-blue transition-colors border-b border-gray-100 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/a-propos" 
              className={`font-medium transition-colors hover:text-ifps-blue ${isActive('/a-propos') ? 'text-ifps-blue' : 'text-ifps-dark'}`}
            >
              À propos
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-ifps-blue ${isActive('/contact') ? 'text-ifps-blue' : 'text-ifps-dark'}`}
            >
              Contact
            </Link>

            <Link 
              to="/contact" 
              className="bg-ifps-yellow text-white px-6 py-3 rounded-ifps font-bold hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg"
            >
              S'inscrire
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-ifps-dark focus:outline-none"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white">
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-4 text-lg font-medium border-b border-gray-50"
          >
            Accueil
          </Link>
          <div className="py-2 border-b border-gray-50">
            <p className="px-3 text-sm font-bold text-ifps-gray uppercase tracking-widest mb-2">Nos Formations</p>
            {formationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-base text-ifps-dark hover:text-ifps-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link 
            to="/a-propos" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-4 text-lg font-medium border-b border-gray-50"
          >
            À propos
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-4 text-lg font-medium"
          >
            Contact
          </Link>
          <div className="mt-4 px-3">
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-ifps-yellow text-white py-4 rounded-ifps font-bold"
            >
              S'inscrire maintenant
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
