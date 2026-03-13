"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How far in advance should I book your services?",
        answer: "For peak seasons (December and Easter), we recommend booking 6-12 months in advance. For other times, 3-6 months is usually sufficient to secure your date."
    },
    {
        question: "Do you travel outside Accra for events?",
        answer: "Yes, we provide nationwide coverage across Ghana and are available for international bookings. Travel and accommodation fees may apply for locations outside Accra."
    },
    {
        question: "What is included in a typical MC package?",
        answer: "Our standard elite package includes comprehensive event coordination, program script vetting, rehearsals, professional hosting (MC), and seamless coordination with all major vendors."
    },
    {
        question: "Can you host traditional ceremonies (Okyeame services)?",
        answer: "Absolutely. We specialize in both contemporary luxury weddings and traditional ceremonies, bringing cultural depth and the appropriate protocols to every event."
    },
    {
        question: "Do you provide a consultation before the event?",
        answer: "Every booking includes at least two strategic consultations to align on your vision, review the program flow, and ensure every detail is meticulously planned."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="bg-black py-32 md:py-48 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gold font-sans font-bold tracking-[0.6em] uppercase text-[10px] mb-8 block"
                    >
                        CLARITY & PRECISION
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter"
                    >
                        Common <span className="text-gold-leaf">Inquiries.</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                className="w-full flex items-center justify-between py-8 text-left group hover:text-gold transition-colors duration-300"
                            >
                                <span className="text-lg md:text-xl font-medium text-white group-hover:text-gold transition-colors">
                                    {faq.question}
                                </span>
                                {activeIndex === i ? (
                                    <Minus size={20} className="text-gold flex-shrink-0 ml-4" />
                                ) : (
                                    <Plus size={20} className="text-white/40 group-hover:text-gold flex-shrink-0 ml-4" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="pb-10 pt-2">
                                            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-3xl">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
