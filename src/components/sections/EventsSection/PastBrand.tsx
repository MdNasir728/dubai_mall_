import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PAST_BRANDS } from "@/data/mallData";

export function PastBrands() {
  return (
    <div className="mb-24">
      <ScrollReveal className="mb-8">
        <p className="text-label text-muted-foreground/50">
          BRANDS THAT HAVE ACTIVATED HERE
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="flex flex-wrap gap-2">
          {PAST_BRANDS.map((brand) => (
            <span
              key={brand}
              className="px-4 py-2 text-sm text-muted-foreground rounded-sm border border-silver/30 hover:border-silver/70 transition-all duration-600 hover:bg-silver/10"
            >
              {brand}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
