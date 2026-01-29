import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    className?: string;
}

export function SectionHeading({ title, subtitle, center = true, className }: SectionHeadingProps) {
    return (
        <div className={cn("mb-12", center ? "text-center" : "text-left", className)}>
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4 relative inline-block">
                {title}
                {/* Decorative underline */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gold rounded-full opacity-80" />
            </h2>
            {subtitle && (
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
