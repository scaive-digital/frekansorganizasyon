"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax & Shader-like transformation values
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["2rem", "6rem"]);
    const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    // Scroll function for the down arrow
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-background pt-28 pb-6 px-4 md:px-6 flex flex-col overflow-hidden">
            {/* The Inset Frame (A46 Style) with Scroll Transformation */}
            <motion.div
                style={{ scale, borderRadius }}
                className="relative flex-1 w-full overflow-hidden flex items-center justify-center bg-secondary shadow-2xl origin-top"
            >

                {/* Background Video with Parallax */}
                <motion.div
                    style={{ y: yVideo }}
                    className="absolute inset-0 z-0 w-full h-[120%]" // Extra height for parallax
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
                            className="w-full h-full object-cover opacity-70 mix-blend-overlay"
                        >
                            <source src="/videos/wedding.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                    style={{ opacity: opacityText, y: yText }}
                    className="relative z-10 text-center flex flex-col items-center w-full px-4"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="font-script text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-normal tracking-wide drop-shadow-md"
                    >
                        Rüya Gibi Bir An
                    </motion.span>

                    <h1 className="text-white font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-medium leading-[1.0] tracking-tight">
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
                </motion.div>

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
            </motion.div>
        </section>
    );
}
