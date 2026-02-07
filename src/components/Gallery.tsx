import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800', title: 'Backwaters' },
    { url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800', title: 'Traditional Kitchen' },
    { url: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=800', title: 'Spice Market' },
    { url: 'https://images.unsplash.com/photo-1596797038530-2c39fa802279?q=80&w=800', title: 'Kathakali Performance' },
    { url: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800', title: 'Seafood Special' },
    { url: 'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=800', title: 'Palm Groves' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-cream-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-kerala-gold font-serif text-lg tracking-widest uppercase mb-2 block">Moments</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-kerala-green mb-6">Our Visual Story</h2>
                    <div className="w-24 h-1 bg-kerala-gold mx-auto rounded-full" />
                </motion.div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-kerala-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-xl font-serif tracking-widest uppercase border-b-2 border-kerala-gold pb-1">
                                    {img.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
