import { useDubaiMallStore } from "@/stores/dubaiMallStore";

export function useDownload() {
  const { addDownloadedAsset, showFeedback } = useDubaiMallStore();

  const handleDownload = async (
    assetId: string,
    fileName: string,
    fileUrl: string,
  ) => {
    try {
      // Show downloading feedback
      showFeedback({
        type: "info" as const,
        message: `Downloading ${fileName}...`,
      } as any);

      // Create a link element and trigger download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Track the download
      addDownloadedAsset(assetId);

      // Show success feedback
      setTimeout(() => {
        showFeedback({
          type: "success" as const,
          message: `${fileName} downloaded successfully!`,
        } as any);
      }, 800);
    } catch (error) {
      showFeedback({
        type: "error" as const,
        message: "Failed to download file. Please try again.",
      } as any);
    }
  };

  return { handleDownload };
}
