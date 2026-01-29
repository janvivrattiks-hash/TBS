import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageBanner } from "@/components/ui/PageBanner";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import productsBanner from "../../../public/074A0079.webp";

export default function ProductsPage() {
    const categories = ["gold", "diamond", "silver"];

    return (
        <div className="pt-20 pb-20">
            <PageBanner
                title="Our Collections"
                subtitle="Timeless Elegance For Every Occasion"
                image={productsBanner}
            />

            <div className="container mx-auto px-6">
                {categories.map((category) => {
                    const categoryProducts = PRODUCTS.filter(p => p.category === category);
                    const title = category.charAt(0).toUpperCase() + category.slice(1) + " Jewellery";

                    return (
                        <div key={category} className="mb-20">
                            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                                <h2 className="text-3xl font-serif text-navy">{title}</h2>
                                <Link href={`#`} className="text-sm uppercase tracking-widest text-gold hover:text-navy transition-colors">View All</Link>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {categoryProducts.map((product) => (
                                    <div key={product.id} className="group cursor-pointer">
                                        <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                                            {/* Placeholder Image */}
                                            <div className={`w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500`}
                                                style={{ backgroundImage: `url('${product.image}')` }}
                                            />
                                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="w-full bg-white text-navy py-2 text-sm font-medium hover:bg-gold hover:text-white transition-colors">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-serif text-navy group-hover:text-gold transition-colors">{product.name}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{product.price}</p>
                                    </div>
                                ))}
                            </div>

                            {categoryProducts.length === 0 && (
                                <p className="text-gray-400 italic">No products currently available in this category.</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
