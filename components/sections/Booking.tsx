"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Booking = () => {
    return (
        <section id="booking" className="py-32 md:py-64 bg-emerald relative overflow-hidden">
            {/* Soft Gold Bloom */}
            <div className="bloom w-[600px] h-[600px] bg-gold/5 top-0 left-1/4" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                    {/* 1. Header & Info */}
                    <div className="lg:col-span-5">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gold font-sans font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
                        >
                            The Inquiry
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12"
                        >
                            Secure the <br />
                            <span className="text-gold-leaf ">Date.</span>
                        </motion.h2>

                        <div className="space-y-12">
                            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-md">
                                Orchestrating excellence requires precision planning. For elite weddings and global galas, we recommend reaching out at least six months in advance.
                            </p>

                            <div className="space-y-8 pt-12 border-t border-white/5">
                                {[
                                    { icon: Mail, text: "management@mcdanieloceans.com" },
                                    { icon: Phone, text: "+233 (0) 50 123 4567" },
                                    { icon: MapPin, text: "Accra, Ghana | Global Availability" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-white font-sans font-bold text-[8px] sm:text-[10px] tracking-widest uppercase">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. Elite Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="bg-black/40 backdrop-blur-3xl border border-gold/10 p-12 md:p-20 relative group"
                        >
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold/20" />

                            <form className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Full Name</label>
                                        <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors" placeholder="Alexander Sterling" />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Email Address</label>
                                        <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors" placeholder="sterling@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Event Type</label>
                                    <select className="w-full bg-transparent border-b border-white/10 py-4 text-white/40 font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors appearance-none cursor-pointer">
                                        <option className="bg-emerald text-white">Elite Wedding</option>
                                        <option className="bg-emerald text-white">Corporate Gala</option>
                                        <option className="bg-emerald text-white">Sporting Event</option>
                                        <option className="bg-emerald text-white">Private Soirée</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Message</label>
                                    <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors resize-none" placeholder="Tell us about your masterpiece..."></textarea>
                                </div>

                                <button className="w-full py-8 bg-gold text-black font-sans font-bold text-xs tracking-[0.6em] uppercase transition-all duration-500 hover:tracking-[0.8em] active:scale-95">
                                    Request Consultation
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Booking;
