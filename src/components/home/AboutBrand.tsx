"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import aboutImage from "../../../public/02.webp"

export function AboutBrand() {
    return (
        <section className="py-20 bg-cream overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <motion.div
                        className="w-full md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
                            About The Brand
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-navy mb-6 leading-tight">
                            Rooted in heritage,<br />guided by craftsmanship.
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            TBS Jewellers has been creating fine jewellery that balances tradition with elegance.
                            From everyday wear to bridal masterpieces, every piece is crafted with precision, purity, and pride.
                            Our legacy is built on a commitment to quality and a passion for creating timeless treasures
                            that become part of your family's story.
                        </p>
                        <Link href="/about">
                            <Button variant="primary" size="lg">
                                Read Our Story
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative aspect-[4/5] w-full max-w-lg mx-auto md:mx-0 overflow-hidden rounded-sm shadow-xl">
                            <Image
                                src={aboutImage}
                                alt="Artisan crafting jewelry"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Decorative Border */}
                            <div className="absolute inset-4 border border-white/30 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
