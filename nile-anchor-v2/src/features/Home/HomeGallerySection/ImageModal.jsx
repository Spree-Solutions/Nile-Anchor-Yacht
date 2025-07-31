import "./../style.css";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ImageModal = ({ isOpen, onClose, image, onNavigate, totalImages, yachtName }) => {
  const { t } = useTranslation();
  if (!image) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[80%] xl:max-w-7xl w-full h-full max-h-screen p-0 bg-black/95 image-modal">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          {totalImages > 1 && (
            <>
              <button
                onClick={() => onNavigate("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={() => onNavigate("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Image */}
          <img src={image.url} alt={image.alt || "Gallery image"} className="max-w-full max-h-full object-contain" />

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-6 py-4 inline-block">
              <h3 className="text-white font-semibold text-lg mb-1">{t(yachtName)}</h3>
              {image.caption && <p className="text-gray-300 text-sm">{t(image.caption)}</p>}
              <p className="text-gray-400 text-xs mt-2">
                {image.index + 1} {t("of")} {totalImages}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
