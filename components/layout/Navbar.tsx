"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [exploreOpen, setExploreOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        // Lock body scroll when mobile menu is open
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Booking", href: "/booking" },
    ];

    const menuLinks = navLinks.filter(link => link.name !== "Booking");

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-black/90 backdrop-blur-3xl py-4 border-b border-white/5" : "bg-transparent py-10"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-4">
                        <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-gold/20 group-hover:border-gold transition-colors duration-500">
                            <Image
                                src="/images/logo.jpg"
                                alt="Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className={`text-sm md:text-2xl font-black tracking-tighter transition-colors duration-500 text-white`}>
                            MC DANIEL <span className="text-gold-leaf">OCEAN</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-12">
                        {/* Grouped Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setExploreOpen(true)}
                            onMouseLeave={() => setExploreOpen(false)}
                        >
                            <button
                                className={`flex items-center gap-3 font-sans font-bold text-[10px] tracking-[0.4em] uppercase transition-all duration-300 ${exploreOpen ? "text-gold" : "text-white/60 hover:text-gold"}`}
                            >
                                Explore
                                <motion.span
                                    animate={{ rotate: exploreOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[8px]"
                                >
                                    ▼
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {exploreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-48"
                                    >
                                        <div className="bg-black border border-white/10 p-6 space-y-4 shadow-2xl">
                                            {menuLinks.map((link) => {
                                                const isActive = pathname === link.href;
                                                return (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        className={`block font-sans font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-300 ${isActive ? "text-gold" : "text-white/40 hover:text-white"
                                                            }`}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/booking"
                            className="px-10 py-4 bg-gold/10 border border-gold/30 text-gold font-sans font-bold text-[9px] tracking-[0.4em] uppercase hover:bg-gold hover:text-black transition-all duration-500"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu - Moved outside of the nav for better fixed position control */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-[999] flex flex-col items-center justify-center gap-12 p-6"
                    >
                        <button
                            className="absolute top-10 right-6 text-gold transition-transform hover:scale-110"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-3xl font-black transition-all duration-300 uppercase tracking-widest ${isActive ? "text-gold scale-110" : "text-white hover:text-gold"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        <div className="mt-12 w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                        <div className="text-white/20 font-sans font-bold text-[8px] tracking-[0.6em] uppercase text-center">
                            Orchestrating Excellence
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
