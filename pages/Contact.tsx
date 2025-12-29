
import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, Calendar, Clock } from 'lucide-react';
import { COMPANY_INFO, TECHNICAL_COURSES, PARAMEDICAL_COURSES, MANAGEMENT_COURSES, IT_COURSES } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    training: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fullName: '', phone: '', email: '', training: '', message: '' });
    }, 1500);
  };

  const allCourses = [...TECHNICAL_COURSES, ...PARAMEDICAL_COURSES, ...MANAGEMENT_COURSES, ...IT_COURSES].sort();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-ifps-dark py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-title mb-4">Contactez-nous</h1>
          <p className="text-xl text-ifps-gray">Une question ? Une inscription ? Nous sommes à votre écoute.</p>
        </div>
      </section>

      <section className="py-20 bg-ifps-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-ifps shadow-md">
                <h3 className="text-2xl font-bold mb-8 border-b pb-4">Nos Coordonnées</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="bg-ifps-blue bg-opacity-10 p-3 rounded-full text-ifps-blue">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Téléphones</p>
                      <p className="text-ifps-gray">{COMPANY_INFO.phones[0]}</p>
                      <p className="text-ifps-gray">{COMPANY_INFO.phones[1]}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-ifps-yellow bg-opacity-10 p-3 rounded-full text-ifps-yellow">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Adresse</p>
                      <p className="text-ifps-gray">{COMPANY_INFO.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="bg-ifps-red bg-opacity-10 p-3 rounded-full text-ifps-red">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-ifps-gray">{COMPANY_INFO.email}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-ifps-blue text-white p-8 rounded-ifps shadow-md">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-xl font-bold">Horaires d'ouverture</h3>
                </div>
                <ul className="space-y-3 opacity-90">
                  <li className="flex justify-between"><span>Lundi - Vendredi</span> <span>08h00 - 17h00</span></li>
                  <li className="flex justify-between"><span>Samedi</span> <span>09h00 - 13h00</span></li>
                  <li className="flex justify-between"><span>Dimanche</span> <span className="text-ifps-yellow font-bold uppercase">Fermé</span></li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-ifps shadow-md">
                <h3 className="text-xl font-bold mb-6">Rentrée Académique</h3>
                <div className="flex items-center space-x-4 bg-ifps-light p-4 rounded-ifps">
                  <Calendar className="text-ifps-yellow w-10 h-10" />
                  <div>
                    <p className="text-sm font-bold text-ifps-gray">DATE FIXÉE</p>
                    <p className="text-xl font-black text-ifps-dark">{COMPANY_INFO.nextIntake}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-ifps shadow-xl">
                <h2 className="text-3xl font-bold mb-8">Formulaire de Pré-inscription</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-ifps text-center">
                    <Send className="w-16 h-16 mx-auto mb-4 text-green-500" />
                    <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                    <p className="mb-6">Merci pour votre intérêt. Notre équipe pédagogique vous contactera dans les plus brefs délais.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-green-600 text-white px-8 py-3 rounded-ifps font-bold"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-ifps-dark uppercase tracking-wide">Nom complet</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Ex: Jean Dupont"
                          className="w-full px-5 py-4 bg-ifps-light rounded-ifps border-2 border-transparent focus:border-ifps-blue focus:bg-white outline-none transition-all"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-ifps-dark uppercase tracking-wide">Téléphone / WhatsApp</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="Ex: +237 6XX XXX XXX"
                          className="w-full px-5 py-4 bg-ifps-light rounded-ifps border-2 border-transparent focus:border-ifps-blue focus:bg-white outline-none transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-ifps-dark uppercase tracking-wide">Email</label>
                        <input 
                          type="email" 
                          required
                          placeholder="Ex: contact@email.com"
                          className="w-full px-5 py-4 bg-ifps-light rounded-ifps border-2 border-transparent focus:border-ifps-blue focus:bg-white outline-none transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-ifps-dark uppercase tracking-wide">Formation souhaitée</label>
                        <select 
                          required
                          className="w-full px-5 py-4 bg-ifps-light rounded-ifps border-2 border-transparent focus:border-ifps-blue focus:bg-white outline-none transition-all appearance-none"
                          value={formData.training}
                          onChange={(e) => setFormData({...formData, training: e.target.value})}
                        >
                          <option value="">Sélectionnez une formation</option>
                          {allCourses.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ifps-dark uppercase tracking-wide">Message</label>
                      <textarea 
                        rows={5}
                        required
                        placeholder="Parlez-nous de vos objectifs..."
                        className="w-full px-5 py-4 bg-ifps-light rounded-ifps border-2 border-transparent focus:border-ifps-blue focus:bg-white outline-none transition-all"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-ifps-yellow text-white py-4 rounded-ifps font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span>Envoyer ma demande</span>
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                      <a 
                        href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}`}
                        className="bg-ifps-blue text-white py-4 px-8 rounded-ifps font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span>WhatsApp direct</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe 
          title="IFPS Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.1417578276!2d9.7303037!3d4.0435384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113b63a9f0f9b%3A0xc476e3396827c62b!2sMarch%C3%A9%20Dakar%2C%20Douala%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1710112345678!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
