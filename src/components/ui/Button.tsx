import React from "react";
import { MoveRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        const variants = {
            primary: "bg-gold text-navy hover:bg-gold/90 border border-gold shadow-md",
            secondary: "bg-navy text-gold hover:bg-navy/90 border border-navy shadow-md",
            outline: "bg-transparent text-navy border border-navy hover:bg-navy hover:text-gold",
            ghost: "bg-transparent text-navy hover:bg-navy/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-none transition-all duration-300 font-medium tracking-wide active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {icon && <MoveRight className="w-4 h-4 ml-1" />}
            </button>
        );
    }
);

Button.displayName = "Button";
