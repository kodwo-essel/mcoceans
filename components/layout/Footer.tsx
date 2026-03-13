"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
// Custom Brand Icons
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.671 6.655a1.99 1.99 0 1 0 1.99 1.99v-5.28c.308 1.321 1.195 2.242 2.658 2.242" />
        <path d="M.96 10.269a3.13 3.13 0 0 0 2.753 2.76c1.07.119 2.167.221 3.287.221s2.218-.102 3.287-.222a3.13 3.13 0 0 0 2.753-2.76c.114-1.063.21-2.155.21-3.268s-.096-2.205-.21-3.269a3.13 3.13 0 0 0-2.753-2.76C9.217.853 8.12.75 7 .75S4.782.852 3.713.972A3.13 3.13 0 0 0 .96 3.732C.846 4.794.75 5.886.75 7s.096 2.205.21 3.269" />
    </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
        <path fillRule="evenodd" d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352" />
    </svg>
);

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

                    <div className="lg:col-span-4 space-y-10">
                        <h4 className="text-gold font-sans font-bold text-[10px] tracking-[0.4em] uppercase">Connect</h4>
                        <div className="space-y-6">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/theoceanmc?utm_source=qr&igsh=MXNqcGw0aXFhYW9zZA==", handle: "@theoceanmc" },
                                { Icon: TikTokIcon, href: "https://www.tiktok.com/@theoceanmc?_r=1&_t=ZS-94dGkHEpPXA", handle: "@theoceanmc" },
                                { Icon: Facebook, href: "https://www.facebook.com/share/1BEtaM2Smy/", handle: "MC Daniel Ocean" },
                                { Icon: WhatsAppIcon, href: "https://wa.me/message/DMJTQ45QFRG6D1", handle: "+233 53 940 5460" }
                            ].map((social, i) => (
                                <Link key={i} href={social.href} target="_blank" className="flex items-center gap-5 group">
                                    <div className="text-white/20 group-hover:text-gold transition-all duration-300">
                                        <social.Icon size={18} />
                                    </div>
                                    <span className="text-white/40 group-hover:text-white font-sans font-bold text-[10px] tracking-[0.15em] uppercase transition-colors">
                                        {social.handle}
                                    </span>
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
