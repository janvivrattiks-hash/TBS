"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT } from "@/data/constants";
import Link from "next/link";
import Image from "next/image";
import BannerImg from "../../../public/074A0079.webp"

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy text-cream">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-navy/90 z-10" />

                <Image
                    src={BannerImg}
                    alt="Hero banner"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
            </div>

            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 border border-gold/50 rounded-full text-gold text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
                        Est. {new Date().getFullYear() - 74}
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight max-w-4xl mx-auto">
                        {HERO_CONTENT.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {HERO_CONTENT.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/products">
                            <Button variant="primary" size="lg" icon>
                                {HERO_CONTENT.ctaPrimary}
                            </Button>
                        </Link>
                        <Link href="/custom-design">
                            <Button variant="outline" size="lg" className="text-cream border-cream hover:bg-cream hover:text-navy">
                                {HERO_CONTENT.ctaSecondary}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gold/80">Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
        </section>
    );
}
