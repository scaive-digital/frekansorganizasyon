"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

function GalleryItemCard({ item, index }: { item: any; index: number }) {
    const isEven = index % 2 === 0;
    const isGiant = index === 0 || index === 4;
    const isPortrait = item.span?.row === 2;

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100, skewY: 1 }}
            whileInView={{ opacity: 1, y: 0, skewY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative flex flex-col gap-6 md:gap-8 
                ${isGiant ? 'w-full' : (isPortrait ? 'w-[85%] md:w-[50%]' : 'w-[90%] md:w-[75%]')} 
                ${isEven && !isGiant ? 'self-end' : 'self-start'}
            `}
        >
            {/* Görsel Paneli */}
            <div className={`relative overflow-hidden bg-surface rounded-[1.5rem] md:rounded-[2.5rem]
                ${isGiant ? 'h-[50vh] md:h-[90vh]' : (isPortrait ? 'h-[60vh] md:h-[80vh]' : 'h-[40vh] md:h-[70vh]')}
            `}>
                {/* Wipe Reveal Animasyonu */}
                <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
                    style={{ transformOrigin: "top" }}
                    className="absolute inset-0 bg-secondary z-30 pointer-events-none"
                />

                <motion.div style={{ y: yImage }} className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                </motion.div>
            </div>

            {/* Typography under Image (A46 Premium style) */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                <div>
                    <h3 className="text-secondary font-heading text-3xl md:text-5xl tracking-tight mb-2 uppercase group-hover:text-primary transition-colors duration-500">
                        {item.title}
                    </h3>
                    <span className="text-foreground/80 tracking-[0.3em] uppercase text-xs md:text-sm font-semibold">
                        {item.category}
                    </span>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 overflow-hidden transform group-hover:scale-110 shrink-0 cursor-pointer">
                    <ArrowRight size={24} className="absolute -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" strokeWidth={1.5} />
                    <ArrowRight size={24} className="transition-transform duration-500 group-hover:translate-x-full ease-out" strokeWidth={1.5} />
                </div>
            </div>
        </motion.div>
    );
}

export function GallerySection() {
    return (
        <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="max-w-[96%] mx-auto px-4 md:px-8 relative z-10">
                <div className="text-left mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-heading text-secondary font-medium tracking-tight uppercase leading-[0.9]">
                            Spotlight
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="flex items-center gap-4"
                    >
                        <span className="w-12 md:w-24 h-px bg-primary block"></span>
                        <p className="font-script text-primary text-3xl md:text-4xl tracking-wide drop-shadow-sm">
                            Unutulmaz Anlar
                        </p>
                    </motion.div>
                </div>

                {/* A46 Style Asymmetric Spotlight List */}
                <div className="flex flex-col gap-24 md:gap-40 w-full">
                    {galleryItems.map((item, index) => (
                        <GalleryItemCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* Explore More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-32 text-center"
                >
                    <button className="group relative overflow-hidden px-14 py-6 rounded-full border border-border bg-surface text-secondary font-medium tracking-[0.2em] uppercase text-sm transition-all hover:scale-105 active:scale-95 shadow-sm">
                        <span className="absolute inset-0 w-full h-full bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Tüm Galeriyi İncele</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
