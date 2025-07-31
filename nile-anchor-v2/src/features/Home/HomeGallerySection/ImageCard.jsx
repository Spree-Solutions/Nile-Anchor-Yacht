import { Expand } from "lucide-react";
import { useTranslation } from "react-i18next";

const ImageCard = ({ image, index, onClick, className = "" }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:shadow-xl ${className}`}
      onClick={() => onClick(image, index)}
    >
      <img
        src={image.url}
        alt={image.alt || `Gallery image ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-700"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Expand Icon */}
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <Expand className="w-4 h-4 text-white" />
      </div>

      {/* Image Caption */}
      {image.caption && (
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <p className="text-white text-sm font-medium">{t(image.caption)}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
