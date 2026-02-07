import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image - Kerala Backwaters/Palm Trees vibe */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop")',
                    filter: 'brightness(0.6)'
                }}
            />

            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[var(--color-cream-white)] z-1" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-kerala-gold font-serif text-lg sm:text-xl md:text-2xl tracking-widest md:tracking-[0.3em] uppercase mb-4 block">
                        {t.hero.subtitle}
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
                        {t.hero.title} <span className="text-kerala-gold">{t.hero.titleSpan}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.hero.description}
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#menu"
                            className="px-8 py-4 bg-kerala-green text-white font-semibold rounded-full hover:bg-kerala-green/90 transition-all transform hover:scale-105 shadow-lg shadow-kerala-green/20"
                        >
                            {t.hero.cta}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Cultural Element - Kathakali Mask (Subtle) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-10 right-10 w-32 md:w-48 opacity-20 pointer-events-none hidden lg:block"
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png"
                    alt="Kathakali Motif"
                    className="w-full h-auto grayscale brightness-200"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
