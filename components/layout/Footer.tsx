"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="bloom w-96 h-96 bg-gold/10 -bottom-12 -right-12" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Col */}
                    <div className="lg:col-span-12 mb-16">
                        <Link href="/" className="inline-flex items-center gap-6 mb-12 group">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full border border-white/10 group-hover:border-gold transition-colors duration-500">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                                MC DANIEL <span className="text-gold-leaf">OCEAN</span>
                            </span>
                        </Link>
                        <p className="text-white/40 text-lg font-light max-w-2xl leading-relaxed tracking-tight">
                            The premier orchestrator of global elite weddings and high-stakes corporate galas. Cinematic presence. Unmatched energy. Oceanic luxury.
                        </p>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-gold font-sans font-bold text-[10px] tracking-[0.4em] uppercase">Navigation</h4>
                        <ul className="space-y-4">
                            {["Home", "Services", "About", "Portfolio", "Testimonials", "Booking"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : link === "Testimonials" ? "/testimonials" : `/#${link.toLowerCase()}`}
                                        className="text-white/40 hover:text-gold font-sans font-bold tracking-[0.2em] uppercase text-[9px] transition-colors duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-gold font-sans font-bold text-[10px] tracking-[0.4em] uppercase">Connect</h4>
                        <div className="flex gap-6">
                            {[Instagram, Facebook, Twitter, MessageCircle].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300">
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <h4 className="text-gold font-sans font-bold text-[10px] tracking-[0.4em] uppercase">Inquiries</h4>
                        <p className="text-white/40 font-sans font-bold text-[8px] sm:text-[11px] tracking-[0.2em] uppercase leading-relaxed">
                            theoceanmc1@gmail.com <br />
                            +233 53 940 5460 | +233 54 762 6334
                        </p>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-white/20 text-[9px] font-sans font-bold tracking-widest uppercase">
                        © {new Date().getFullYear()} MC DANIEL OCEAN ALL RIGHTS SECURED.
                    </p>

                    <a
                        href="https://jimmyessel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 transition-all duration-500"
                    >
                        <span className="text-white/20 group-hover:text-gold/50 text-[8px] font-sans font-bold tracking-[0.4em] uppercase transition-colors">Crafted in spirit by</span>
                        <span className="text-gold font-sans font-bold text-[10px] tracking-[0.5em] uppercase border-b border-gold/0 group-hover:border-gold/100 transition-all duration-500">
                            Jimmy Essel
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
