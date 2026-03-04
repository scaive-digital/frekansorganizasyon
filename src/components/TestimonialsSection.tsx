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

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 hide-scrollbar">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="bg-background rounded-[2rem] p-8 md:p-12 min-w-[280px] sm:min-w-[350px] md:min-w-[450px] snap-center flex flex-col justify-between border border-border shadow-sm hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="text-primary/10 absolute top-8 right-8 w-16 h-16" />
                            <div className="mb-8 relative z-10">
                                <p className="text-foreground text-base md:text-lg font-light leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-border shrink-0 bg-surface flex items-center justify-center text-secondary font-heading text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-secondary font-heading font-medium text-lg">{testimonial.name}</h4>
                                    <p className="text-primary text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
