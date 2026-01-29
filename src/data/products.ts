export interface Product {
    id: string;
    name: string;
    category: "gold" | "diamond" | "silver" | "platinum";
    price: string;
    image: string;
}

export const PRODUCTS: Product[] = [
    // Gold
    { id: "g1", name: "Traditional Gold Necklace Set", category: "gold", price: "₹ 1,50,000", image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&w=2070&auto=format&fit=crop" },
    { id: "g2", name: "Antique Gold Bangles", category: "gold", price: "₹ 85,000", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" },
    { id: "g3", name: "Gold Jhumka Earrings", category: "gold", price: "₹ 45,000", image: "https://images.unsplash.com/photo-1635767798638-3e252346484e?q=80&w=2000&auto=format&fit=crop" },

    // Diamond
    { id: "d1", name: "Solitaire Diamond Ring", category: "diamond", price: "₹ 65,000", image: "https://images.unsplash.com/photo-1605100804763-eb6a496a3318?q=80&w=1974&auto=format&fit=crop" },
    { id: "d2", name: "Diamond Pendant Necklace", category: "diamond", price: "₹ 42,000", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1974&auto=format&fit=crop" },

    // Silver
    { id: "s1", name: "Sterling Silver Bracelet", category: "silver", price: "₹ 3,500", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop" },
];
