import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-kerala-green text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
                <img src="https://cdn-icons-png.flaticon.com/512/1000/1000966.png" alt="Motif" className="w-full h-auto brightness-200" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Us</h2>
                            <p className="text-white/80 text-lg max-w-md">
                                We'd love to host you and share the best of Kerala's culinary traditions.
                                Drop by or get in touch for reservations.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <MapPin className="text-kerala-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Our Location</h4>
                                    <p className="text-white/60 italic">123 Spice Route, Fort Kochi,<br />Kerala, India - 682001</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Phone className="text-kerala-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Reservations</h4>
                                    <p className="text-white/60 italic">+91 98765 43210<br />+91 484 234567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Mail className="text-kerala-gold" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Email Us</h4>
                                    <p className="text-white/60 italic">hello@keraladelight.com<br />events@keraladelight.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 bg-white/10 rounded-full hover:bg-kerala-gold transition-colors">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
                    >
                        <h3 className="text-3xl font-bold text-kerala-green mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-coconut-brown font-semibold mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-coconut-brown font-semibold mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown" placeholder="email@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-coconut-brown font-semibold mb-2">Subject</label>
                                <select className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown">
                                    <option>Table Reservation</option>
                                    <option>Event Inquiry</option>
                                    <option>Catering</option>
                                    <option>Feedback</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-coconut-brown font-semibold mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-cream-white rounded-xl focus:outline-none focus:ring-2 focus:ring-kerala-gold text-coconut-brown" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-kerala-gold text-white font-bold rounded-xl shadow-lg hover:bg-kerala-gold/90 transition-all transform hover:scale-[1.02] active:scale-95">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    <p>© 2026 Unique Kerala Hotel. All rights reserved.</p>
                    <p className="mt-2">Made with ♥ in Kerala</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
