"use client";

import { motion } from "framer-motion";
import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32">
            <div className="max-w-[96%] mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading text-secondary font-medium tracking-tight uppercase leading-[0.9] mb-8">
                        İletişim
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    style={{ transformOrigin: "top" }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
                    className="w-full h-[30vh] md:h-[50vh] rounded-[2rem] overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-black/30 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop"
                        alt="Contact Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            <ContactSection />
        </main>
    );
}
