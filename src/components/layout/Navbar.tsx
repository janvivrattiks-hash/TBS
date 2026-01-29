"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY_SHORT_NAME } from "@/data/constants";
import { Button } from "@/components/ui/Button";
import logo from "../../../public/TBS.webp"
import logoPng from "../../../public/logo.png"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
                ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-3"
                : "bg-transparent py-1"
                }`}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50 flex items-center">
                    {/* <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tight ${isScrolled || isOpen || !isHomePage ? "text-navy" : "text-white"
                        }`}>
                        TBS <span className="text-gold">Jewellers</span>
                    </span> */}

                    <img src={isHomePage ? logo.src : logoPng.src} alt="" width={180} height={100} />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm tracking-widest uppercase hover:text-gold transition-colors ${pathname === link.href ? "text-gold font-bold" : (isScrolled || !isHomePage ? "text-navy" : "text-white")
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <Button variant="primary" size="sm">
                            Visit Store
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className={`md:hidden z-50 p-2 focus:outline-none ${isOpen || isScrolled || !isHomePage ? "text-navy" : "text-white"}`}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center space-y-8"
                        >
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    className={`text-2xl font-serif tracking-wide ${pathname === link.href ? "text-gold" : "text-navy"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={toggleMenu}>
                                <Button variant="primary" size="lg">
                                    Visit Store
                                </Button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
