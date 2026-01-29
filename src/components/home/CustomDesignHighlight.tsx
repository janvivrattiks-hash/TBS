"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MoveRight } from "lucide-react";

import craftingImg from "../../../public/02.webp";

export function CustomDesignHighlight() {
    return (
        <section className="py-24 bg-cream overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-2 block">
                            Custom Design Highlight
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6 leading-tight">
                            Your Design. <br /> <span className="italic text-gold">Our Craftsmanship.</span>
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">
                            Have a design in mind? Share your reference image or idea, and our experts will turn it into a finely crafted jewellery piece, tailored to your style and budget.
                        </p>
                        <Link href="/custom-design">
                            <Button variant="primary" size="lg" icon>
                                Start Custom Design
                            </Button>
                        </Link>
                    </div>

                    {/* Visual Showcase */}
                    <div className="lg:w-1/2 order-1 lg:order-2 relative">
                        <div className="relative z-10 p-2 border border-gold/20 ">
                            {/* Main Image */}
                            <div className="aspect-square bg-gray-200 overflow-hidden">
                                <img
                                    src={craftingImg.src}
                                    alt="Custom Jewellery Design Craftsmanship"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative Background Element */}
                        <div className="absolute top-10 -right-10 w-full h-full border-2 border-gold/10 -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
