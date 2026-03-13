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
                            <span className="text-gold-leaf ">Portfolio.</span>
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

                {/* Portfolio Display Grid - Updated from single image to grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { src: "/images/3.jpg", title: "Corporate Gala", loc: "Accra" },
                        { src: "/images/mrandmrsofori.jpg", title: "Wedding", loc: "Ho" },
                        { src: "/images/1.jpg", title: "Traditional", loc: "Cape Coast" },
                        { src: "/images/6.jpg", title: "Elite Wedding", loc: "Accra" },
                        { src: "/images/2.jpg", title: "Social Event", loc: "Aburi" },
                        { src: "/images/mrandmrsamofa.jpg", title: "Wedding Ceremony", loc: "Kumasi" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="group relative aspect-[4/5] overflow-hidden border border-white/5"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-all duration-[1500ms] scale-105 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-white font-display text-2xl mb-1">{item.title}</h3>
                                <p className="text-white/40 font-sans font-bold text-[9px] tracking-widest uppercase">{item.loc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link href="/portfolio">
                        <button className="px-16 py-6 border border-gold/30 text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase cursor-pointer transition-all duration-500 hover:bg-gold hover:text-black">
                            View All Portfolio
                        </button>
                    </Link>
                </div>

                {/* Elite Metrics */}
                <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-24 border-t border-white/5 pt-32 text-center lg:text-left">
                    {[
                        { label: "Elite Marriages", val: "70+" },
                        { label: "Major Cities", val: "12+" },
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
