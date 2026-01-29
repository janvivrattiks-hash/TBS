import { CustomDesignForm } from "@/components/custom-design/CustomDesignForm";
import { HowItWorks } from "@/components/custom-design/HowItWorks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WelcomeSpeech } from "@/components/custom-design/WelcomeSpeech";
import { PageBanner } from "@/components/ui/PageBanner";
import customBanner from "../../../public/074A0590.webp";
import craftingImg from "../../../public/02.webp";

export default function CustomDesignPage() {
    return (
        <div className="pt-20 pb-20">
            <WelcomeSpeech />
            <PageBanner
                title="Custom Design"
                subtitle="Your Imagination. Our Craftsmanship."
                image={customBanner}
            />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <SectionHeading
                            title="Design Your Dream Jewellery"
                            subtitle="Whether it's a reference image from Google, a celebrity-inspired design, or an idea straight from your mind — we bring it to life."
                            center={false}
                        />
                        <div className="prose text-gray-600 mb-8 leading-relaxed">
                            <p className="mb-4">
                                At TBS Jewellers, we understand that jewellery is personal. Our custom design service allows you to create unique pieces that tell your story.
                            </p>
                            <h4 className="font-serif text-navy text-xl mt-6 mb-2">Why Custom Design with TBS?</h4>
                            <ul className="list-none space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Personalised consultation
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Transparent quotations & honest guidance
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span> Precision craftsmanship by skilled artisans
                                </li>
                            </ul>
                        </div>

                        {/* Visual helper */}
                        <div className="relative h-64 w-full bg-gray-100 rounded-sm overflow-hidden mt-8 hidden lg:block">
                            <img
                                src={craftingImg.src}
                                alt="Jewellery Craftsmanship"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-navy/20"></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <CustomDesignForm />
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <HowItWorks />
            </div>
        </div>
    );
}
