import { cardReveal, staggerContainer } from "@/constants/animations";
import { ENTERTAINMENT_ATTRACTIONS } from "@/data/mallData";
import { motion } from "framer-motion";
import { DownloadButton } from "@/components/DownLoadButton";

export function AttractionsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {ENTERTAINMENT_ATTRACTIONS.map((attraction, i) => (
        <motion.div
          key={attraction.name}
          variants={cardReveal}
          className={`luxury-card glass-panel rounded-sm overflow-hidden group ${
            i === 0 ? "md:col-span-2 lg:col-span-1" : ""
          }`}
        >
          <div className="p-7">
            {/* Icon/badge */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-2xl"
                role="img"
                aria-label={attraction.name}
              >
                {attraction.icon}
              </span>
              <span
                className="text-label px-2.5 py-1 rounded-sm"
                style={{
                  background: "oklch(0.75 0.12 85 / 0.08)",
                  color: "var(--gold)",
                  border: "1px solid oklch(0.75 0.12 85 / 0.2)",
                }}
              >
                {attraction.highlight}
              </span>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-3">
              {attraction.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {attraction.description}
            </p>

            {/* Hover reveal */}
            <div className="mt-5 pt-4 border-t border-border/30 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-label text-gold">Sponsor Opportunity</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M8 3l5 5-5 5"
                  stroke="oklch(0.75 0.12 85)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Additional offerings card */}
      <motion.div
        variants={cardReveal}
        className="luxury-card rounded-sm overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.02 85 / 0.4), oklch(0.06 0 0 / 0.8))",
          border: "1px solid oklch(0.75 0.12 85 / 0.15)",
        }}
      >
        <div className="p-7 h-full flex flex-col justify-between">
          <div>
            <p className="text-label mb-3 text-gold">AND MUCH MORE</p>
            <h3 className="text-2xl font-light text-foreground leading-tight mb-4">
              Dubai Mall is always evolving.
            </h3>
            <div className="space-y-3">
              {[
                "Ski Dubai adjacent",
                "Sega Republic gaming",
                "Olympic-size ice rink",
                "IMAX 4DX cinema",
                "Children play zones",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full text-gold" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <DownloadButton
            assetId="attractions-guide"
            fileName="Dubai-Mall-Attractions-Guide.txt"
            fileUrl="/downloads/Dubai-Mall-Attractions-Guide.txt"
            variant="default"
            size="md"
          >
            Full Attractions Guide
          </DownloadButton>
        </div>
      </motion.div>
    </motion.div>
  );
}
