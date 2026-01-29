import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsGrid } from "@/components/home/CollectionsGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { CustomDesignHighlight } from "@/components/home/CustomDesignHighlight";
import { AboutBrand } from "@/components/home/AboutBrand";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutBrand />

      <CollectionsGrid />
      <CustomDesignHighlight />
      <TrustSection />
    </>
  );
}
