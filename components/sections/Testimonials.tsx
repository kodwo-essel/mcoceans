"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Mr. & Mrs. Ofori",
        role: "Newlyweds",
        content: "We just want to say thank you. You handled the flow of the program so well. We appreciate how you managed last-minute changes without stress. We absolutely never regretted choosing you. You made our day so special, Daniel....",
        image: "/images/1.jpg",
    },
    {
        name: "Mr. & Mrs. Amofa",
        role: "Clients",
        content: "Your presence was such a blessing. Even with the large crowd, you kept everything in order and transitioned so smoothly. Your humbleness was evident throughout, yet your stage presence was powerful. You were truly marvelous, and we appreciate you!",
        image: "/images/2.jpg",
    },
    {
        name: "Kobina & Esi",
        role: "Clients",
        content: "You brought so much life to the party! What stood out the most was your professionalism and the way you made everyone feel included. Your style is warm, engaging, and respectful. I'll never forget this day—and I'll never regret choosing you, Sir.",
        image: "/images/3.jpg",
    },
    {
        name: "Stephen & Gabriella",
        role: "Clients",
        content: "From start to finish, your professionalism was unmatched. You carried the entire program with such grace and energy, keeping our guests entertained and everything flowing smoothly. We made really beautiful memories. You were simply marvelous. Thanks a lot.",
        image: "/images/4.jpg",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-black py-32 md:py-64 min-h-screen relative overflow-hidden">
            {/* Background Accents */}
            <div className="bloom w-[600px] h-[600px] bg-gold/5 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2" />
            <div className="bloom w-[500px] h-[500px] bg-emerald/10 absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />

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
                        className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                    >
                        The Client <br />
                        <span className="text-gold-leaf">Testimonials.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative p-8 md:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-gold/30 transition-all duration-500"
                        >
                            {/* Quote Mark */}
                            <div className="absolute top-8 right-8 text-gold/20 font-serif text-8xl md:text-9xl leading-none pointer-events-none">
                                &ldquo;
                            </div>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-gold/20">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-xl mb-1">{t.name}</h4>
                                    <p className="text-gold font-sans font-bold text-[9px] tracking-[0.2em] uppercase">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-white/60 text-lg font-light leading-relaxed italic relative z-10">
                                &ldquo;{t.content}&rdquo;
                            </p>

                            {/* Hover Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
