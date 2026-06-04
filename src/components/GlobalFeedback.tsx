import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";
import {
  CheckCircle2,
  AlertCircle,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";

export function GlobalFeedback() {
  const { feedback, clearFeedback } = useDubaiMallStore();

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        clearFeedback();
      }, feedback.duration);

      return () => clearTimeout(timer);
    }
  }, [feedback, clearFeedback]);

  const iconMap = {
    success: <CheckCircle2 className="h-5 w-5 text-gold" />,
    error: <AlertCircle className="h-5 w-5 text-destructive" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-gold" />,
  };

  return (
    <AnimatePresence>
      {feedback && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 z-50 max-w-md"
        >
          <div
            className="rounded-lg p-4 flex items-start gap-4 shadow-lg border"
            style={{
              background: "oklch(0.1 0.01 0 / 0.95)",
              backdropFilter: "blur(10px)",
              borderColor:
                feedback.type === "success" ? "var(--gold)" : "var(--border)",
            }}
          >
            <div className="flex-shrink-0 mt-0.5">{iconMap[feedback.type]}</div>
            <div className="flex-1">
              <p className="text-sm text-foreground">{feedback.message}</p>
            </div>
            <button
              onClick={clearFeedback}
              className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
