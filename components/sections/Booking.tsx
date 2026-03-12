"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const Booking = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [eventType, setEventType] = useState("");
    const [eventDate, setEventDate] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            await emailjs.sendForm(
                "service_91a2jua",
                "template_y4veigr",
                formRef.current,
                "hID9iCKI202ChFZOY"
            );
            setSubmitStatus("success");
            formRef.current.reset();
            setEventType("");
            setEventDate("");
        } catch (error) {
            console.error("EmailJS Error:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                    { icon: Mail, text: "theoceanmc1@gmail.com" },
                                    { icon: Phone, text: "+233 53 940 5460 | +233 54 762 6334" },
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

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Full Name</label>
                                        <input
                                            name="from_name"
                                            required
                                            type="text"
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors placeholder:text-white/20"
                                            placeholder="Daniel Ocean"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Email Address</label>
                                        <input
                                            name="reply_to"
                                            required
                                            type="email"
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors placeholder:text-white/20"
                                            placeholder="daniel@ocean.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Phone Number</label>
                                        <input
                                            name="phone"
                                            required
                                            type="tel"
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors placeholder:text-white/20"
                                            placeholder="+233 53 940 5460"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Event Date</label>
                                        <input
                                            name="event_date"
                                            required
                                            type="date"
                                            value={eventDate}
                                            onChange={(e) => setEventDate(e.target.value)}
                                            className={`w-full bg-transparent border-b border-white/10 py-4 font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors appearance-none ${eventDate ? 'text-white' : 'text-white/20'}`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Event Type</label>
                                    <select
                                        name="event_type"
                                        required
                                        value={eventType}
                                        onChange={(e) => setEventType(e.target.value)}
                                        className={`w-full bg-transparent border-b border-white/10 py-4 font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors appearance-none cursor-pointer ${eventType ? 'text-white' : 'text-white/20'}`}
                                    >
                                        <option value="" disabled className="bg-black text-white/40">Select Event Type</option>
                                        <option value="Okyeame Services" className="bg-emerald text-white">Okyeame Services</option>
                                        <option value="Wedding Reception" className="bg-emerald text-white">Wedding Reception</option>
                                        <option value="Dinner and Awards" className="bg-emerald text-white">Dinner and Awards</option>
                                        <option value="Product Launch" className="bg-emerald text-white">Product Launch</option>
                                        <option value="Corporate Events" className="bg-emerald text-white">Corporate Events (AGMs, etc.)</option>
                                        <option value="Social Events" className="bg-emerald text-white">Social Events (Birthdays, etc.)</option>
                                        <option value="Custom Package" className="bg-emerald text-white">Custom Package</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-gold font-sans font-bold text-[10px] tracking-[0.3em] uppercase">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-white font-sans font-bold text-base md:text-lg focus:border-gold outline-none transition-colors resize-none placeholder:text-white/20"
                                        placeholder="Tell us about your masterpiece..."
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full py-8 bg-gold text-black font-sans font-bold text-xs tracking-[0.6em] uppercase transition-all duration-500 hover:tracking-[0.8em] active:scale-95 flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        "Request Consultation"
                                    )}
                                </button>

                                {/* Submission Feedback */}
                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-4 text-white font-sans font-bold text-[10px] tracking-widest uppercase bg-white/5 p-6 border border-white/10"
                                    >
                                        <CheckCircle2 className="text-gold" size={18} />
                                        <span>Inquiry sent successfully. We will reach out shortly.</span>
                                    </motion.div>
                                )}
                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-4 text-red-400 font-sans font-bold text-[10px] tracking-widest uppercase bg-red-400/5 p-6 border border-red-400/20"
                                    >
                                        <AlertCircle size={18} />
                                        <span>Failed to send inquiry. Please try again.</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Booking;  
