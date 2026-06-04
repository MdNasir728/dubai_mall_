import { motion } from "framer-motion";
import { useDownload } from "@/hooks/useDownload";
import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

interface DownloadButtonProps {
  assetId: string;
  fileName: string;
  fileUrl: string;
  variant?: "default" | "ghost";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  children?: React.ReactNode;
}

export function DownloadButton({
  assetId,
  fileName,
  fileUrl,
  variant = "default",
  size = "md",
  showIcon = true,
  children,
}: DownloadButtonProps) {
  const { handleDownload } = useDownload();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await handleDownload(assetId, fileName, fileUrl);
    setIsLoading(false);
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = {
    default: "border-foreground/20 text-foreground/60 hover:text-gold hover:border-gold/50",
    ghost: "border-0 text-muted-foreground hover:text-gold",
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={isLoading}
      className={`relative rounded-sm border transition-all duration-300 flex items-center gap-2 font-medium tracking-wide ${sizeClasses[size]} ${variantClasses[variant]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : showIcon ? (
        <Download className="h-4 w-4" />
      ) : null}
      {children || "Download"}
    </motion.button>
  );
}
