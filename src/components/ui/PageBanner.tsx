import Image, { StaticImageData } from "next/image";

interface PageBannerProps {
    title: string;
    subtitle?: string;
    image: StaticImageData;
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
    return (
        <div className="relative h-[25vh] md:h-[35vh] w-full flex items-center justify-center overflow-hidden mb-16">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-4 animate-fade-in-up">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-gold tracking-[0.2em] uppercase text-sm md:text-base animate-fade-in-up [animation-delay:200ms]">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
