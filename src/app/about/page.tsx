import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner } from "@/components/ui/PageBanner";
import { COMPANY_NAME } from "@/data/constants";
import aboutBanner from "../../../public/02.webp";

export default function AboutPage() {
    return (
        <div className="pt-20 pb-20">
            <PageBanner
                title="About Us"
                subtitle="Legacy. Purity. Trust."
                image={aboutBanner}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                {/* Our Story */}
                <div className="mb-16">
                    <SectionHeading title="Our Story" center={false} />
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Founded in 1951, <strong>{COMPANY_NAME}</strong> began as a small jewellery establishment with a strong belief in purity, craftsmanship, and customer trust. Over the years, this belief transformed into a legacy that continues to shine across generations.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        From traditional gold ornaments to modern fine jewellery, our journey reflects dedication to excellence and respect for tradition.
                    </p>
                </div>

                {/* Philosophy */}
                <div className="mb-16 bg-cream p-10 rounded-sm border border-gold/20">
                    <h3 className="text-2xl font-serif text-navy mb-4">Our Philosophy</h3>
                    <p className="text-gray-700 leading-relaxed">
                        We believe jewellery is deeply personal. It carries memories, emotions, and identity. That’s why every piece we create is treated with care — from design to finishing — ensuring it reflects both beauty and meaning.
                    </p>
                </div>

                {/* Craftsmanship & Promise */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-serif text-navy mb-4 border-b border-gold/30 pb-2 inline-block">Craftsmanship & Quality</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-4">
                            <li>Purity assured in every karat</li>
                            <li>Impeccable finish and detailing</li>
                            <li>Durability for generations</li>
                            <li>Comfort fit for daily wear</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-navy mb-4 border-b border-gold/30 pb-2 inline-block">Our Promise</h3>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-4">
                            <li>Honest pricing without hidden costs</li>
                            <li>Pure materials sourced ethically</li>
                            <li>Transparent process from start to finish</li>
                            <li>Building long-term relationships</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
