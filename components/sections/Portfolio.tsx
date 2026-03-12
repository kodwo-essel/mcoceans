"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
    return (
        <section id="portfolio" className="relative py-32 md:py-64 bg-black overflow-hidden">
            {/* Luxury Bloom Accent */}
            <div className="bloom w-[800px] h-[800px] bg-emerald/10 bottom-0 left-0 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-48 gap-8">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gold font-sans font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
                        >
                            The Archives
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                        >
                            The Ceremonial <br />
                            <span className="text-gold-leaf ">Gallery.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="lg:mb-4 lg:text-right"
                    >
                        <p className="text-white/40 text-base sm:text-lg font-light max-w-sm leading-relaxed tracking-wide">
                            A curated selection of legacy events orchestrated across twelve major cities.
                        </p>
                    </motion.div>
                </div>

                {/* Master Collage */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[16/9] w-full border border-gold/10 overflow-hidden group"
                >
                    <Image
                        src="/images/3.jpg"
                        alt="Event Portfolio Collage"
                        fill
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[8000ms] ease-out opacity-40 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <Link href="/portfolio">
                            <button className="px-24 py-8 bg-gold/90 backdrop-blur-md text-black font-sans font-bold text-xs tracking-[0.5em] uppercase cursor-pointer transition-all duration-500 hover:bg-gold">
                                View All Works
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Elite Metrics */}
                <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-24 border-t border-white/5 pt-32 text-center lg:text-left">
                    {[
                        { label: "Elite Marriages", val: "60+" },
                        { label: "Major Cities", val: "5+" },
                        { label: "Corporate Galas", val: "30+" },
                        { label: "Mastery", val: "5+ Yrs" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <span className="text-white/20 font-sans font-bold text-[9px] mb-4 block tracking-[0.3em] uppercase">{stat.label}</span>
                            <span className="text-gold font-black text-4xl sm:text-5xl tracking-tighter">{stat.val}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
