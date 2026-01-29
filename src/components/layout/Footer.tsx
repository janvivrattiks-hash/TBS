import Link from "next/link";
import { Instagram } from "lucide-react";
import { CONTACT_INFO, NAV_LINKS, COMPANY_NAME, COMPANY_SHORT_NAME } from "@/data/constants";

export function Footer() {
    return (
        <footer className="bg-navy text-cream pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-2xl font-serif text-gold mb-4">{COMPANY_NAME}</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                            Rooted in heritage and guided by craftsmanship since 1951. We create timeless jewellery that celebrates your most precious moments.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif text-gold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-gold transition-colors text-sm tracking-wide"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif text-gold mb-6">Visit Us</h4>
                        <address className="not-italic text-gray-400 space-y-4 text-sm">
                            <p>{CONTACT_INFO.address}</p>
                            <p>
                                Phone: <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-gold">{CONTACT_INFO.phone}</a>
                            </p>
                            <p>{CONTACT_INFO.hours}</p>

                            {/* Social Link (Placeholder used as per constants) */}
                            <div className="mt-6">
                                <a
                                    href={CONTACT_INFO.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold hover:text-white transition-colors inline-block"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-6 h-6" />
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} {COMPANY_SHORT_NAME}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
