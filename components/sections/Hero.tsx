"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-end pb-24 md:pb-32">
            {/* 1. Cinematic Background with Fluid Scale - GREATER PRIORITY */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute inset-0 z-0 bg-emerald-deep"
            >
                <Image
                    src="/images/hero.jpg"
                    alt="MC Daniel Oceans"
                    fill
                    priority
                    className="object-cover object-center opacity-30 grayscale mix-blend-luminosity"
                />

                {/* Oceanic Green Accents */}
                <div className="absolute inset-0 bg-emerald/10 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-forest/40 to-black/60 opacity-90" />

                {/* Luxury Bloom Accent */}
                <div className="bloom w-[1000px] h-[1000px] bg-emerald/20 -top-1/2 -left-1/4 opacity-40" />
                <div className="bloom w-[800px] h-[800px] bg-emerald/10 bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-30" />

                <div className="absolute inset-0 hero-vignette opacity-100" />
            </motion.div>

            {/* 2. Zen Minimalist Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="w-full max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="mb-6"
                    >
                        <span className="text-gold font-sans font-bold tracking-[0.8em] uppercase text-[9px] sm:text-[11px] block opacity-70">
                            The Master of Ceremony
                        </span>
                    </motion.div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-12 flex flex-wrap">
                        {"Orchestrating ".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.05,
                                    delay: 1.2 + i * 0.05,
                                    ease: "linear"
                                }}
                                className={char === " " ? "mr-4" : ""}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <div className="basis-full h-0 sm:hidden" />
                        {"Excellence.".split("").map((char, i) => (
                            <motion.span
                                key={i + 14}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.05,
                                    delay: 1.2 + (i + 14) * 0.05,
                                    ease: "linear"
                                }}
                                className="text-gold-leaf"
                            >
                                {char}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="inline-block w-[2px] h-[0.9em] bg-gold ml-1 align-middle"
                        />
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 3 }}
                        className="flex flex-col sm:flex-row items-start justify-start gap-12"
                    >
                        <Link href="/booking">
                            <button className="group relative py-2 text-gold font-sans font-bold text-[11px] tracking-[0.5em] uppercase overflow-hidden transition-all duration-500">
                                <span className="relative z-10 group-hover:text-white transition-colors">Start Inquiring</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-100 group-hover:scale-x-125 origin-left transition-transform duration-500" />
                            </button>
                        </Link>

                        <Link href="/portfolio">
                            <button className="group relative py-2 text-white/50 font-sans font-bold text-[11px] tracking-[0.5em] uppercase overflow-hidden transition-all duration-500 hover:text-white">
                                <span className="relative z-10">View Gallery</span>
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-500" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* 3. Elegance Detail */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2, delay: 4 }}
                className="absolute top-24 right-24 hidden lg:block"
            >
                <div className="flex items-center gap-6">
                    <span className="text-white font-sans font-bold text-[8px] tracking-[0.6em] uppercase vertical-text">Accra • Kumasi • Takoradi</span>
                    <div className="w-[1px] h-32 bg-gradient-to-b from-gold to-transparent" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
