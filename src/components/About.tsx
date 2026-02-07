import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-[var(--color-cream-white)] relative overflow-hidden">
            {/* Decorative Background Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1621251918374-7cbf9960ff7f?q=80&w=500&auto=format&fit=crop" alt="Floral Pattern" className="w-full rotate-45" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/about/puttu.jfif"
                                alt="Authentic Kerala Puttu"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Accent Image */}
                        <div className="absolute -bottom-10 -right-10 w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-kerala-gold z-20 hidden md:block">
                            <img
                                src="/gallery/seafood-special.jpg"
                                alt="Traditional Spices"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div>
                            <span className="text-kerala-gold font-serif text-lg tracking-widest uppercase mb-2 block">{t.about.subtitle}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-kerala-green leading-tight">
                                {t.about.title}
                            </h2>
                        </div>

                        <p className="text-lg text-coconut-brown/80 leading-relaxed font-light italic">
                            {t.about.description}
                        </p>

                        <div className="space-y-4">
                            <p className="text-lg text-coconut-brown leading-relaxed">
                                {t.about.details}
                            </p>
                            <ul className="grid grid-cols-2 gap-4 pt-4">
                                {t.about.features.map((item) => (
                                    <li key={item} className="flex items-center space-x-2 text-kerala-green font-medium">
                                        <span className="w-2 h-2 bg-kerala-gold rounded-full" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="px-10 py-4 border-2 border-kerala-green text-kerala-green hover:bg-kerala-green hover:text-white transition-all duration-300 font-semibold rounded-lg uppercase tracking-wider text-sm">
                            {t.about.cta}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
