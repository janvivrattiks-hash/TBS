"use client";

import { TRUST_VALUES } from "@/data/constants";
import { ShieldCheck, UserCheck, PenTool, Gem, BadgeIndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const icons = [
    ShieldCheck, // BIS Hallmarked
    UserCheck, // Skilled Artisans
    PenTool, // Custom Design
    BadgeIndianRupee, // Transparent Pricing
    Gem, // After Sales (Using Gem as placeholder goodness)
];

export function TrustSection() {
    return (
        <section className="py-20 bg-navy text-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-gold mb-4">Why Choose TBS Jewellers</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">A Legacy Built on Trust since 1951</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {TRUST_VALUES.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-navy border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-serif text-gold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
