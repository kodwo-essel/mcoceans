"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    { src: "/images/9.jpg", title: "Okyeame Services", location: "Ho", category: "Traditional" },
    { src: "/images/mrandmrsofori.jpg", title: "Wedding Reception", location: "Accra", category: "Elite" },
    { src: "/images/3.jpg", title: "Dinner and Awards", location: "Accra", category: "Corporate" },
    { src: "/images/prosperandnanayaa.jpg", title: "Wedding Reception", location: "Ho", category: "Elite" },
    { src: "/images/1.jpg", title: "Okyeame Services", location: "Cape Coast", category: "Traditional" },
    { src: "/images/6.jpg", title: "Wedding Reception", location: "Accra", category: "Elite" },
    { src: "/images/2.jpg", title: "Social Events", location: "Aburi", category: "Social" },
    { src: "/images/mrandmrsamofa.jpg", title: "Wedding Reception", location: "Kumasi", category: "Elite" },
    { src: "/images/joshuaandeunice.jpg", title: "Wedding Reception", location: "Sunyani", category: "Elite" },
    { src: "/images/5.jpg", title: "Social Events", location: "Kumasi", category: "Social" },
    { src: "/images/kobinaandesi.jpg", title: "Wedding Reception", location: "Takoradi", category: "Elite" },
    { src: "/images/8.jpg", title: "Wedding Reception", location: "Takoradi", category: "Elite" },
    { src: "/images/7.jpg", title: "Wedding Reception", location: "Koforidua", category: "Elite" },
    { src: "/images/4.jpg", title: "Social Events", location: "Tema", category: "Social" },
    { src: "/images/stephenandgabriella.jpg", title: "Social Events", location: "Koforidua", category: "Social" },
];

const Gallery = () => {
    return (
        <section className="bg-black py-32 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gold font-sans font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block"
                    >
                        The Master Archive
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                    >
                        Ceremonial <br />
                        <span className="text-gold-leaf">Catalog.</span>
                    </motion.h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="group relative aspect-[4/5] overflow-hidden border border-white/5"
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-gold font-sans font-bold text-[8px] tracking-[0.4em] uppercase block mb-2">{image.category}</span>
                                <h3 className="text-white font-display text-2xl mb-1">{image.title}</h3>
                                <p className="text-white/40 font-sans font-bold text-[9px] tracking-widest uppercase">{image.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
