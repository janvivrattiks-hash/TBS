"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { COLLECTIONS } from "@/data/collections";
import { SectionHeading } from "@/components/ui/SectionHeading";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function CollectionsGrid() {
    return (
        <section className="py-20 bg-cream">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Our Jewellery Collections"
                    subtitle="Discover thoughtfully designed jewellery collections made to suit celebrations, weddings, milestones, and everyday elegance."
                />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {COLLECTIONS.map((collection) => (
                        <motion.div key={collection.id} variants={item} className="group relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">
                            {/* Image Placeholder - In real app use next/image */}
                            <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-serif text-white mb-2">{collection.title}</h3>
                                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 mb-4">
                                        {collection.description}
                                    </p>
                                    <Link href={collection.href} className="text-gold text-sm uppercase tracking-widest font-medium hover:text-white inline-flex items-center gap-2">
                                        Explore <span className="text-lg">→</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
