"use client";

import { useEffect, useRef } from "react";

export function WelcomeSpeech() {
    const hasSpokenRef = useRef(false);

    useEffect(() => {
        // Prevent running on server or if already spoken in this session mount
        if (typeof window === "undefined" || hasSpokenRef.current) return;

        // const englishText = "Design Your Dream Jewellery. You can design your own custom design. We will make it for you. Here is the step by step process. First you can fill the form. Full name, Contact number, Email address, Jewellery type, Budget range, Occasion, Reference Image, Additional Notes. Then we will make it for you. Then we will deliver it to you.";

        const hindiText = "Namaste. Apne sapno ki jewellery design karein. Aap apna khud ka design bana sakte hain aur hum use aapke liye banayenge. Iski prakriya bahot saral hai. Sabse pehle form bharein: Apna naam, number, email, jewellery ka prakar, budget, aur reference photo. Hum ise banakar aap tak pahunchayenge. dhanyavaad.";

        // English Utterance
        const utteranceEn = new SpeechSynthesisUtterance(hindiText);
        utteranceEn.lang = 'hi-IN';
        utteranceEn.rate = 0.9;
        utteranceEn.pitch = 1;

        // Hindi Utterance
        const utteranceHi = new SpeechSynthesisUtterance(hindiText);
        utteranceHi.lang = 'hi-IN';
        utteranceHi.rate = 0.9;
        utteranceHi.pitch = 1;

        // Play sequentially
        window.speechSynthesis.speak(utteranceEn);
        window.speechSynthesis.speak(utteranceHi);
        hasSpokenRef.current = true;

        // Cleanup: cancel speech if user navigates away
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    return null; // Invisible component
}
