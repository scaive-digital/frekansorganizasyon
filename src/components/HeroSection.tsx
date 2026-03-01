"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
    // Scroll function for the down arrow
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full min-h-screen bg-background pt-28 pb-6 px-4 md:px-6 flex flex-col">
            {/* The Inset Frame (A46 Style) */}
            <div className="relative flex-1 w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center bg-secondary shadow-lg">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="w-full h-full"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
                            alt="Frekans Organizasyon"
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                        />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center flex flex-col items-center w-full px-4">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="font-script text-primary text-4xl md:text-5xl lg:text-6xl mb-4 font-normal tracking-wide drop-shadow-md"
                    >
                        Rüya Gibi Bir An
                    </motion.span>

                    <h1 className="text-white font-heading text-6xl md:text-8xl lg:text-[10rem] font-medium leading-[1.0] tracking-tight">
                        <div className="overflow-hidden pb-1 md:pb-4">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            >
                                Kusursuz
                            </motion.div>
                        </div>
                        <div className="overflow-hidden pt-1 md:pt-4 italic text-white/90">
                            <motion.div
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                            >
                                Anlar.
                            </motion.div>
                        </div>
                    </h1>
                </div>

                {/* A46 Style Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 z-20"
                >
                    <button
                        onClick={scrollToServices}
                        className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-colors group"
                        aria-label="Aşağı Kaydır"
                    >
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="group-hover:text-primary transition-colors"
                        >
                            <ArrowDown size={20} strokeWidth={1.5} />
                        </motion.div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
