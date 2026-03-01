"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export const MultiStepTextReveal = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const words = text.split(" ");

    return (
        <div
            className={cn("flex flex-wrap cursor-default", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {words.map((word, idx) => (
                <span
                    key={idx}
                    className="relative inline-block overflow-hidden mr-[0.25em]"
                >
                    <span
                        className={cn(
                            "inline-block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                            isHovered ? "-translate-y-full" : "translate-y-0"
                        )}
                        style={{ transitionDelay: `${idx * 0.03}s` }}
                    >
                        {word}
                    </span>
                    <span
                        className={cn(
                            "absolute left-0 inline-block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] text-primary italic",
                            isHovered ? "translate-y-0" : "translate-y-full"
                        )}
                        style={{ transitionDelay: `${idx * 0.03}s` }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </div>
    );
};
