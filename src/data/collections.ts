export interface Collection {
    id: string;
    title: string;
    description: string;
    image: string; // Placeholder path or external URL
    href: string;
}

export const COLLECTIONS: Collection[] = [
    {
        id: "gold",
        title: "Gold Jewellery",
        description: "Classic. Timeless. Everlasting. Traditional elegance for every generation.",
        image: "/074A0079.webp",
        href: "/products?category=gold",
    },
    {
        id: "diamond",
        title: "Diamond Jewellery",
        description: "Elegance That Shines Forever. Sophistication for modern lifestyles.",
        image: "/074A0590.webp",
        href: "/products?category=diamond",
    },
    {
        id: "silver",
        title: "Silver Jewellery",
        description: "Graceful & Versatile. Ideal for gifting and everyday elegance.",
        image: "/02.webp",
        href: "/products?category=silver",
    },
    {
        id: "platinum",
        title: "Platinum Jewellery",
        description: "Pure. Rare. Distinctive. Understated luxury and refinement.",
        image: "/074A0590.webp",
        href: "/products?category=platinum",
    },
];
