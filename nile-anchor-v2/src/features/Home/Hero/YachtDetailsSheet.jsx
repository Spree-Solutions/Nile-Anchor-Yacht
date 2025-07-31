import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

const YachtDetailsSheet = ({ yacht, isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!yacht) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[90vh] bg-black border-t border-white/20 p-0 overflow-hidden">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <SheetHeader className="text-left">
              <SheetTitle className="font-['Antic_Didone'] text-white text-2xl md:text-3xl">{t(yacht.name)}</SheetTitle>
              <SheetDescription className="text-white/70 text-sm">{t("Yacht Details")}</SheetDescription>
            </SheetHeader>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[500px]">
              <div className="relative bg-black/50">
                <LazyImage src={yacht.image} alt={yacht.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8 bg-black text-white overflow-y-auto">
                <div className="space-y-6">
                  <div className="lg:hidden">
                    <h2 className="font-['Antic_Didone'] text-3xl mb-2 text-[#a18c6d]">{t(yacht.name)}</h2>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#a18c6d]">{t("Description")}</h3>
                    <p className="text-white/90 leading-relaxed text-base md:text-lg">{t(yacht.description)}</p>
                  </div>

                  {yacht.specifications && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d]">{t("Specifications")}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {yacht.specifications.length && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Length")}</span>
                            <p className="text-white font-semibold">{yacht.specifications.length}</p>
                          </div>
                        )}
                        {yacht.specifications.capacity && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Capacity")}</span>
                            <p className="text-white font-semibold">{yacht.specifications.capacity}</p>
                          </div>
                        )}
                        {yacht.specifications.year && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Year")}</span>
                            <p className="text-white font-semibold">{yacht.specifications.year}</p>
                          </div>
                        )}
                        {yacht.specifications.speed && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Max Speed")}</span>
                            <p className="text-white font-semibold">{yacht.specifications.speed}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {yacht.features && yacht.features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d]">{t("Features")}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {yacht.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#a18c6d] rounded-full flex-shrink-0" />
                            <span className="text-white/90">{t(feature)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {yacht.price && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d]">{t("Price")}</h3>
                      <p className="text-2xl font-bold text-white">{yacht.price}/{t("day")}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default YachtDetailsSheet;
