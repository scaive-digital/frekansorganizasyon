"use client";

import { motion } from "framer-motion";
import { GallerySection } from "@/components/GallerySection";

export default function WeddingsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32">
            <div className="max-w-[96%] mx-auto px-4 md:px-8 mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading text-secondary font-medium tracking-tight uppercase leading-[0.9] mb-8">
                        Weddings
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    style={{ transformOrigin: "top" }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
                    className="w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                        alt="Weddings Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            <GallerySection />
        </main>
    );
}
