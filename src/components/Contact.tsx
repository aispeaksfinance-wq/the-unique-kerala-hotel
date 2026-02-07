import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 bg-kerala-green text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.title}</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                {t.contact.description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-kerala-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-kerala-gold mb-1">{t.contact.location}</h3>
                                    <p className="text-white/80">Unique Kerala Hotel<br />XHM7+H47, 2nd Main Rd, Ramachandrapuram, 4N Block,Srirampura, Bangalore, Karnataka, 560010</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-kerala-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-kerala-gold mb-1">{t.contact.reservations}</h3>
                                    <p className="text-white/80">+91 7012657177</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-kerala-gold mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold text-kerala-gold mb-1">{t.contact.email}</h3>
                                    <p className="text-white/80">krishnajiji@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-cream-white rounded-2xl p-8 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-kerala-green mb-6">{t.contact.formTitle}</h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-coconut-brown font-medium mb-2">{t.contact.name}</label>
                                <input type="text" className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown text-base" placeholder={t.contact.name} />
                            </div>
                            <div>
                                <label className="block text-coconut-brown font-medium mb-2">{t.contact.emailLabel}</label>
                                <input type="email" className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown text-base" placeholder={t.contact.emailLabel} />
                            </div>
                            <div>
                                <label className="block text-coconut-brown font-medium mb-2">{t.contact.subject}</label>
                                <select className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown text-base">
                                    {t.contact.subjects.map(s => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-coconut-brown font-medium mb-2">{t.contact.message}</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown text-base" placeholder={t.contact.message} />
                            </div>
                            <button className="w-full py-4 bg-kerala-green text-white font-bold rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2">
                                <Send className="w-5 h-5" />
                                <span>{t.contact.send}</span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
