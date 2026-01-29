import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner } from "@/components/ui/PageBanner";
import { CONTACT_INFO } from "@/data/constants";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import contactBanner from "../../../public/074A0590.webp";

export default function ContactPage() {
    return (
        <div className="pt-20 pb-20">
            <PageBanner
                title="Contact Us"
                subtitle="Visit Our Showroom"
                image={contactBanner}
            />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Info Card */}
                    <div className="bg-white p-8 shadow-sm border border-gray-100">
                        <SectionHeading title="Get In Touch" center={false} className="mb-8" />

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-cream p-3 rounded-full text-navy">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-navy mb-1">Visit Our Store</h4>
                                    <p className="text-gray-600 max-w-xs">{CONTACT_INFO.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cream p-3 rounded-full text-navy">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-navy mb-1">Call Us</h4>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 hover:text-gold transition-colors">
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cream p-3 rounded-full text-navy">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-navy mb-1">Opening Hours</h4>
                                    <p className="text-gray-600">{CONTACT_INFO.hours}</p>
                                    <p className="text-xs text-gray-400 mt-1">(Sunday closed)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cream p-3 rounded-full text-navy">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-navy mb-1">Follow Us</h4>
                                    <a href={CONTACT_INFO.social.instagram} target="_blank" className="text-gray-600 hover:text-gold transition-colors">
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-full min-h-[400px] w-full bg-gray-200 relative overflow-hidden rounded-sm shadow-inner">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.596637651036!2d72.91898737517676!3d20.95759798067425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f7a555555555%3A0x123456789abc!2sNavsari%20Mota%20Bazar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        {/* Note: Start coordinates are approximate Navsari coordinates */}
                    </div>

                </div>
            </div>
        </div>
    );
}
