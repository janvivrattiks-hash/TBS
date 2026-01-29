import { SectionHeading } from "@/components/ui/SectionHeading";
import { Upload, FileText, MessageSquare, CheckCircle, PenTool, Gift } from "lucide-react";

const STEPS = [
    { icon: Upload, title: "1. Share Idea", description: "Upload a reference image or describe your dream design." },
    { icon: FileText, title: "2. Requirements", description: "Tell us your budget, metal preference, and occasion." },
    { icon: MessageSquare, title: "3. Consultation", description: "Our experts guide you and provide a transparent quote." },
    { icon: PenTool, title: "4. Design", description: "We create a detailed sketch or 3D model for your approval." },
    { icon: CheckCircle, title: "5. Crafting", description: "Skilled artisans bring the design to life with precision." },
    { icon: Gift, title: "6. Delivery", description: "Receive your unique masterpiece with quality assurance." },
];

export function HowItWorks() {
    return (
        <div className="py-16 bg-cream/50">
            <div className="container mx-auto px-6">
                <SectionHeading title="How It Works" subtitle="From your imagination to a timeless reality in 6 simple steps." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-navy text-gold p-3 rounded-full shrink-0">
                                <step.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg text-navy mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
