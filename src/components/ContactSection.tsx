"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";
import { Quote, Send, ArrowRight, ArrowUpRight, Instagram, Facebook, Twitter } from "lucide-react";
import React, { useState } from "react";
import { MultiStepTextReveal } from "./ui/MultiStepTextReveal";

export function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        event_type: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        alert("Talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden text-foreground">

            {/* 21st.dev Style Subtly Animated Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.2]"
                style={{
                    backgroundImage: 'radial-gradient(#E65C2B 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    maskImage: 'linear-gradient(to top, white 10%, transparent 90%)'
                }}
            />

            {/* Testimonials Marquee */}
            <div className="w-full mb-32 overflow-hidden relative flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 relative z-10"
                >
                    <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 inline-flex items-center gap-3 bg-surface px-6 py-2 border border-border rounded-full shadow-sm">
                        <span className="w-4 h-px bg-primary" /> Müşteri Yorumları <span className="w-4 h-px bg-primary" />
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-secondary mt-4">
                        Bizi <span className="text-primary italic">Tercih Edenler</span>
                    </h2>
                </motion.div>

                {/* Marquee Container with enhanced shadow mask */}
                <div className="flex w-full overflow-hidden mask-image-fade py-8 relative z-10">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                            repeatType: "loop"
                        }}
                        className="flex gap-6 px-4 flex-none items-center"
                    >
                        {[...testimonials, ...testimonials].map((testimonial, idx) => (
                            <div
                                key={`${testimonial.id}-${idx}`}
                                className="w-[340px] md:w-[460px] bg-surface p-10 rounded-[3rem] border border-border flex-shrink-0 group hover:border-primary/50 hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2 cursor-default"
                            >
                                <div className="mb-8 text-primary/20 group-hover:text-primary transition-colors duration-500 transform group-hover:scale-110 origin-left">
                                    <Quote size={40} className="fill-current" />
                                </div>
                                <p className="text-foreground font-light italic mb-8 leading-relaxed text-lg md:text-xl">
                                    &quot;{testimonial.content}&quot;
                                </p>
                                <div className="flex flex-col border-t border-border pt-6">
                                    <span className="font-heading font-medium text-secondary text-xl">{testimonial.name}</span>
                                    <span className="text-sm text-primary font-medium tracking-wide">{testimonial.role}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Advanced Contact Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">

                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface border border-border text-primary mb-10 shadow-sm relative overflow-hidden group">
                                <span className="absolute inset-0 w-full h-full bg-primary/10 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />
                                <Send size={28} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </div>

                            <div className="text-5xl md:text-6xl font-heading text-secondary mb-8 leading-[1.1]">
                                <MultiStepTextReveal text="Beraber Bir" />
                                <div className="relative inline-block w-full mt-2">
                                    <span className="text-primary italic relative">
                                        Hikaye
                                        <motion.svg
                                            initial={{ strokeDashoffset: 100 }}
                                            whileInView={{ strokeDashoffset: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                            className="absolute w-full h-3 -bottom-1 left-0 text-primary/30"
                                            viewBox="0 0 100 20"
                                            preserveAspectRatio="none"
                                            strokeDasharray="100"
                                        >
                                            <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" />
                                        </motion.svg>
                                    </span>
                                    <span className="ml-4">Yazalım</span>
                                </div>
                            </div>

                            <p className="text-foreground max-w-md mb-12 font-light text-xl leading-relaxed">
                                Hayalinizdeki konsepti detaylandırmak, fiyat teklifi almak veya aklınızdaki sorular için bize ulaşın.
                            </p>

                            <div className="space-y-10">
                                <div className="group flex flex-col relative overflow-hidden">
                                    <span className="text-secondary/50 font-bold text-xs tracking-widest uppercase mb-2">Müşteri İlişkileri</span>
                                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-secondary font-heading text-3xl md:text-4xl group-hover:text-primary transition-colors flex items-center gap-4">
                                        {siteConfig.contact.phone}
                                        <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                                    </a>
                                </div>

                                <div className="group flex flex-col relative overflow-hidden">
                                    <span className="text-secondary/50 font-bold text-xs tracking-widest uppercase mb-2">E-posta Adresi</span>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary font-heading text-3xl md:text-3xl lg:text-4xl group-hover:text-primary transition-colors flex items-center gap-4">
                                        {siteConfig.contact.email}
                                        <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                                    </a>
                                </div>

                                <div className="flex flex-col pt-10 border-t border-border mt-10">
                                    <span className="text-secondary/50 font-bold text-xs tracking-widest uppercase mb-6">Bizi Takip Edin</span>
                                    <div className="flex gap-4">
                                        {Object.keys(siteConfig.social).map((platform, idx) => (
                                            <motion.a
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                key={platform}
                                                href={siteConfig.social[platform as keyof typeof siteConfig.social]}
                                                className="w-14 h-14 rounded-full border border-border bg-surface flex items-center justify-center text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-sm hover:-translate-y-1"
                                            >
                                                {platform === 'instagram' && <Instagram size={20} />}
                                                {platform === 'facebook' && <Facebook size={20} />}
                                                {platform === 'twitter' && <Twitter size={20} />}
                                                {!['instagram', 'facebook', 'twitter'].includes(platform) && (
                                                    <span className="capitalize text-sm font-bold tracking-wider">{platform[0]}</span>
                                                )}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white p-8 md:p-12 lg:p-14 rounded-[3rem] border border-border relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden group"
                    >
                        {/* Animated Glow behind form */}
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none transition-transform duration-[3s] group-hover:scale-150" />

                        <h3 className="text-3xl font-heading text-secondary mb-10 relative z-10 flex items-center gap-4">
                            Talep Formu
                            <span className="h-px flex-1 bg-border block" />
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3 group/input">
                                    <label htmlFor="name" className="text-[10px] font-bold tracking-widest uppercase text-secondary/50 ml-2 group-focus-within/input:text-primary transition-colors">Ad Soyad</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-transparent focus:outline-none focus:border-primary/30 focus:bg-white transition-all text-secondary font-medium shadow-inner-sm"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 group/input">
                                    <label htmlFor="phone" className="text-[10px] font-bold tracking-widest uppercase text-secondary/50 ml-2 group-focus-within/input:text-primary transition-colors">Telefon</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-transparent focus:outline-none focus:border-primary/30 focus:bg-white transition-all text-secondary font-medium shadow-inner-sm"
                                        placeholder="0555 555 55 55"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3 group/input">
                                    <label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-secondary/50 ml-2 group-focus-within/input:text-primary transition-colors">E-posta</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-transparent focus:outline-none focus:border-primary/30 focus:bg-white transition-all text-secondary font-medium shadow-inner-sm"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 group/input">
                                    <label htmlFor="event_type" className="text-[10px] font-bold tracking-widest uppercase text-secondary/50 ml-2 group-focus-within/input:text-primary transition-colors">Etkinlik Türü</label>
                                    <select
                                        id="event_type"
                                        name="event_type"
                                        required
                                        value={formState.event_type}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl bg-surface border-2 border-transparent focus:outline-none focus:border-primary/30 focus:bg-white transition-all text-secondary font-medium shadow-inner-sm appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Seçiniz</option>
                                        <option value="dugun">Düğün</option>
                                        <option value="kina">Kına</option>
                                        <option value="nisan">Nişan / Söz</option>
                                        <option value="kurumsal">Kurumsal Etkinlik</option>
                                        <option value="diger">Diğer</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 group/input">
                                <label htmlFor="message" className="text-[10px] font-bold tracking-widest uppercase text-secondary/50 ml-2 group-focus-within/input:text-primary transition-colors">Mesajınız (Opsiyonel)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="w-full px-5 py-5 rounded-3xl bg-surface border-2 border-transparent focus:outline-none focus:border-primary/30 focus:bg-white transition-all resize-none text-secondary font-medium shadow-inner-sm"
                                    placeholder="Hayalinizdeki konsepti veya sorularınızı kısaca anlatabilirsiniz..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full group/btn relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-6 bg-secondary text-white font-medium text-lg rounded-2xl transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] mt-8"
                            >
                                <span className="absolute inset-0 w-full h-full bg-primary -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                                <span className="relative z-10 group-hover/btn:tracking-wide transition-all duration-300">Talebi Gönder</span>
                                <span className="relative z-10 transition-transform group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2">
                                    <ArrowUpRight strokeWidth={2.5} size={20} className="text-white opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                </span>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-32 text-center text-secondary/40 text-sm pb-8 font-medium">
                &copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
            </div>

        </section>
    );
}
