"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="relative w-full bg-emerald py-32 md:py-64 overflow-hidden">
            {/* Decorative Luxury Blooms */}
            <div className="bloom w-[500px] h-[500px] bg-gold/5 -top-20 -left-20" />
            <div className="bloom w-[400px] h-[400px] bg-gold/5 bottom-0 right-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">

                    {/* 1. Large Portrait with Gold Frame */}
                    <div className="lg:col-span-12 mb-32 text-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-gold font-sans font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
                        >
                            The Master of Ceremony
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                        >
                            The Conductor of <br />
                            <span className="text-gold-leaf ">Luxury.</span>
                        </motion.h2>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="relative z-10 aspect-[3/4] border border-gold/20 p-4 group"
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/images/1.jpg"
                                    alt="MC Daniel Ocean"
                                    fill
                                    className="object-cover transition-all duration-[2000ms] scale-110 group-hover:scale-100"
                                />
                            </div>
                            {/* Gold Frame Corner Detail */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold" />
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 lg:pl-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            className="space-y-12"
                        >
                            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                                Crafting atmospheres where <span className="text-gold">every moment</span> becomes an unforgettable masterpiece.
                            </h3>

                            <div className="w-12 h-[1px] bg-gold/50" />

                            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed tracking-wide">
                                With over half a decade of experience and specialized training in event coordination and cultural traditions, Daniel Ocean brings a vibrant blend of energy, warmth, and seamless professionalism to every stage.
                            </p>

                            <div className="space-y-6">
                                <h4 className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Why Your Event Deserves MC Daniel Ocean</h4>
                                <p className="text-white/60 text-base font-light leading-relaxed tracking-wide italic">
                                    "Choose me for a stress-free, perfectly coordinated event where my adaptive style and confident command ensure a truly unique and fun experience. I treat your event as my own, creating memories that linger long after the final applause."
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
                                <div>
                                    <span className="text-gold font-black text-4xl sm:text-5xl block mb-2 tracking-tighter">100+</span>
                                    <span className="text-white/40 font-sans font-bold uppercase text-[9px] tracking-widest">Events Delivered</span>
                                </div>
                                <div>
                                    <span className="text-gold font-black text-4xl sm:text-5xl block mb-2 tracking-tighter">5+</span>
                                    <span className="text-white/40 font-sans font-bold uppercase text-[9px] tracking-widest">Years of Mastery</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
