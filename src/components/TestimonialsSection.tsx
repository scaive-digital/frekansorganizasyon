"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 md:py-32 bg-surface relative overflow-hidden">
            <div className="max-w-[96%] mx-auto px-4 md:px-8 relative z-10">
                <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading text-secondary font-medium tracking-tight leading-[1.1]">
                            Mutlu <span className="text-primary italic font-light">Çiftler</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative flex overflow-hidden w-full py-4 -mx-4 px-4 md:-mx-8 md:px-8">
                    {/* Add fade masks on sides for premium look */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none" />

                    <div className="flex animate-marquee hover:[animation-play-state:paused] w-max select-none">
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="mx-3 bg-background rounded-[2rem] p-8 md:p-12 w-[300px] sm:w-[350px] md:w-[450px] shrink-0 flex flex-col justify-between border border-border/50 shadow-sm hover:shadow-md transition-all relative"
                            >
                                <Quote className="text-primary/10 absolute top-8 right-8 w-16 h-16 pointer-events-none" />
                                <div className="mb-8 relative z-10 pointer-events-none mt-2">
                                    <p className="text-foreground/90 text-base md:text-lg font-light leading-relaxed italic">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 relative z-10 pointer-events-none">
                                    <div className="w-12 h-12 rounded-full shadow-sm border border-border shrink-0 bg-surface flex items-center justify-center text-primary font-heading text-xl">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-secondary font-heading font-medium text-lg tracking-wide">{testimonial.name}</h4>
                                        {/* Removed Role Text per User Request */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-50%, 0, 0);
                    }
                }
                .animate-marquee {
                    animation: marquee 100s linear infinite;
                    will-change: transform;
                }
            `}</style>
        </section>
    );
}
