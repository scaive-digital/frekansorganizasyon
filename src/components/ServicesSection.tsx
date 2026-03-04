"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

function ServiceCard({ service, index }: { service: any; index: number }) {
    const isEven = index % 2 === 1;
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Smooth image parallax
    const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div className={`group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-surface flex flex-col h-[50vh] sm:h-[60vh] md:h-[80vh] block ${isEven ? 'md:mt-24' : ''}`}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50, skewY: 2 }}
                whileInView={{ opacity: 1, y: 0, skewY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
            >
                {/* Top Mask Swipe Reveal */}
                <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                    style={{ transformOrigin: "top" }}
                    className="absolute inset-0 bg-secondary z-30 pointer-events-none"
                />

                {/* Background Image/Video with Parallax */}
                <motion.div style={{ y: yImage }} className="absolute inset-0 z-0 w-full h-[130%] -top-[15%] bg-muted">
                    <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-700 group-hover:bg-black/0" />
                    {service.video ? (
                        <video
                            src={service.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={service.image}
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                    ) : (
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                    )}
                </motion.div>

                {/* Floating Glass Labels (A46 Style) */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white/95 backdrop-blur-xl p-5 md:p-6 rounded-2xl md:rounded-3xl max-w-sm flex-1 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                        <span className="text-primary text-[10px] tracking-[0.2em] uppercase font-bold mb-2 md:mb-3 block">0{index + 1}</span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-heading text-secondary mb-1 md:mb-2">{service.title}</h3>
                        <p className="text-foreground text-xs sm:text-sm font-light leading-relaxed hidden sm:block">{service.subtitle}</p>

                        {/* Decortative Label */}
                        <div className="mt-4 flex items-center gap-2 overflow-hidden text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                            <span>A46 Deneyimi</span>
                        </div>
                    </div>

                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-secondary flex items-center justify-center shrink-0 transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-primary group-hover:text-white group-hover:rotate-45 shadow-lg">
                        <ArrowUpRight size={24} strokeWidth={1.5} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function ServicesSection() {
    return (
        <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="max-w-[96%] mx-auto px-4 md:px-8 relative z-10">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-heading text-secondary font-medium tracking-tight leading-[1.1]">
                            Özel <span className="text-primary italic font-light">Hizmetler</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-foreground max-w-lg mx-auto mt-8 font-light text-lg md:text-xl"
                    >
                        Her detayı özenle düşünülmüş, size özel konseptlerle lüks organizasyon deneyimini yeniden tanımlıyoruz.
                    </motion.p>
                </div>

                {/* A46 Style Split Screen Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
