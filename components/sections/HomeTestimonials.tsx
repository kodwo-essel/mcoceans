"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const selectedTestimonials = [
    {
        name: "Mr. & Mrs. Ofori",
        role: "Newlyweds",
        content: "We just want to say thank you. You handled the flow of the program so well. We appreciate how you managed last-minute changes without stress. You made our day so special, Daniel.",
        image: "/images/mrandmrsofori.jpg",
    },
    {
        name: "Mr. & Mrs. Amofa",
        role: "Clients",
        content: "Your presence was such a blessing. Even with the large crowd, you kept everything in order and transitioned so smoothly. Your stage presence was powerful. Truly marvelous!",
        image: "/images/mrandmrsamofa.jpg",
    },
    {
        name: "Stephen & Gabriella",
        role: "Clients",
        content: "From start to finish, your professionalism was unmatched. You kept our guests entertained and everything flowing smoothly. We made really beautiful memories.",
        image: "/images/stephenandgabriella.jpg",
    },
];

const HomeTestimonials = () => {
    return (
        <section className="bg-black py-32 md:py-48 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gold font-sans font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block"
                    >
                        Voices of Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter"
                    >
                        Client <span className="text-gold-leaf">Stories.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {selectedTestimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-gold/30 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-lg mb-0.5">{t.name}</h4>
                                    <p className="text-gold font-sans font-bold text-[8px] tracking-[0.2em] uppercase">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-white/60 text-base font-light leading-relaxed italic flex-grow">
                                &ldquo;{t.content}&rdquo;
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link href="/testimonials">
                        <button className="group flex items-center gap-4 text-gold font-sans font-bold text-[10px] tracking-[0.4em] uppercase hover:text-white transition-all duration-300 px-8 py-4 border border-gold/20 hover:border-white/20">
                            Read All Stories
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeTestimonials;
