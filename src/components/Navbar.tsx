"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
    { name: "Ana Sayfa", href: "#" },
    { name: "Hizmetler", href: "#services" },
    { name: "Portfolyo", href: "#gallery" },
    { name: "İletişim", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
                scrolled ? "bg-background/90 backdrop-blur-xl py-2 md:py-3 shadow-sm" : "bg-transparent py-4 md:py-6"
            )}
        >
            <div className="max-w-[96%] mx-auto flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link href="#" className="flex-1 flex items-center relative h-6 md:h-8">
                    <img
                        src="/images/frekanslogo.png"
                        alt="Frekans Organizasyon Logo"
                        className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-28 md:h-40 w-auto object-contain max-w-none drop-shadow-sm"
                    />
                </Link>

                {/* Desktop Links (Centered) */}
                <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[13px] font-medium text-secondary hover:text-primary transition-colors tracking-wide uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Side (MENU) */}
                <div className="flex-1 flex justify-end items-center">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                    >
                        <span className="textxs font-medium tracking-[0.2em] uppercase hidden md:block">Menu</span>
                        <div className="space-y-1.5 w-6 group-hover:w-7 transition-all">
                            <div className="h-[2px] w-full bg-current transition-all"></div>
                            <div className="h-[2px] w-full bg-current transition-all"></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile/Full Screen Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                        className="fixed inset-0 z-[60] bg-background flex flex-col p-6 min-h-screen"
                    >
                        <div className="flex justify-between items-center max-w-[96%] mx-auto w-full px-4 md:px-8 mt-2">
                            <img
                                src="/images/frekanslogo.png"
                                alt="Frekans Organizasyon Logo"
                                className="h-20 md:h-32 w-auto object-contain drop-shadow-sm"
                            />
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-3 text-secondary hover:bg-surface rounded-full transition-colors flex items-center gap-2 group"
                            >
                                <span className="text-xs font-medium tracking-[0.2em] uppercase hidden md:block">Kapat</span>
                                <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 items-center justify-center flex-1">
                            {links.map((link, i) => (
                                <div key={link.name} className="overflow-hidden">
                                    <motion.a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        initial={{ opacity: 0, y: "100%" }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: "100%" }}
                                        transition={{ delay: i * 0.1, duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                                        className="text-5xl md:text-7xl font-heading text-secondary hover:text-primary transition-colors inline-block"
                                    >
                                        {link.name}
                                    </motion.a>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
