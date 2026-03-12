"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Trophy, Mic2 } from "lucide-react";

const services = [
    {
        title: "Corporate Galas",
        description: "Sophisticated orchestration for high-stakes award ceremonies and international product launches.",
        icon: Briefcase,
        id: "I"
    },
    {
        title: "Elite Weddings",
        description: "The fine art of celebration for discerning couples seeking a timeless, cinematic experience.",
        icon: Heart,
        id: "II"
    },
    {
        title: "Sporting Events",
        description: "Commanding presence and crowd synergy for world-class competitions and stadiums.",
        icon: Trophy,
        id: "III"
    },
    {
        title: "Private Soirées",
        description: "Exclusive hosting for private parties, embassy functions, and luxury social gatherings.",
        icon: Mic2,
        id: "IV"
    },
];

const Services = () => {
    return (
        <section id="services" className="py-32 md:py-64 bg-black px-6 relative overflow-hidden">
            {/* Soft Gold Bloom */}
            <div className="bloom w-[600px] h-[600px] bg-gold/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto">
                <div className="text-center mb-48">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gold font-sans font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
                    >
                        The Portfolio of Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                    >
                        The Ceremonial <br />
                        <span className="text-gold-leaf ">Suites.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            className="group relative bg-emerald/10 backdrop-blur-3xl border border-white/5 p-16 md:p-24 transition-all duration-700 hover:border-gold/30 flex flex-col items-center text-center"
                        >
                            {/* Gold Shimmer Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative z-10 mb-12">
                                <span className="text-gold/20 font-black text-6xl sm:text-7xl block mb-8 group-hover:text-gold/40 transition-colors duration-700">
                                    {service.id}
                                </span>
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-12">
                                    <service.icon size={28} />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-gold transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 text-base font-light leading-relaxed max-w-sm mx-auto mb-10">
                                    {service.description}
                                </p>
                                <div className="w-8 h-[1px] bg-gold mx-auto group-hover:w-24 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
