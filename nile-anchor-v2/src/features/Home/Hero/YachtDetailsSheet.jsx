import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { X, Users, Clock, Check, Star, Anchor, Settings } from "lucide-react";

const YachtDetailsSheet = ({ yacht, isOpen, onClose }) => {
  const { t,i18n:{language} } = useTranslation();

  if (!yacht) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[90vh] bg-black border-t border-white/20 p-0 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <SheetHeader className={`${language === "ar" ? "text-right" : "text-left"} flex-1`}>
              <SheetTitle className="font-['Antic_Didone'] text-white text-2xl md:text-3xl w-fit">{t(yacht.name)}</SheetTitle>
              <SheetDescription className="text-white/70 text-sm flex items-center gap-4">
                <span>{t("Yacht Details")}</span>
                {yacht.capacity && (
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {t(yacht.capacity)}
                  </span>
                )}
                {yacht.duration && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {t(yacht.duration)}
                  </span>
                )}
              </SheetDescription>
            </SheetHeader>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[500px]">
              
              {/* Image Section */}
              <div className="relative bg-black/50">
                <LazyImage src={yacht.image} alt={yacht.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Price overlay */}
                {yacht.price && (
                  <div className="absolute top-6 right-6 bg-[#a18c6d] text-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-lg font-bold">{t(yacht.price)}</p>
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-8 bg-black text-white overflow-y-auto">
                <div className="space-y-6">
                  
                  {/* Mobile Title */}
                  <div className="lg:hidden">
                    <h2 className="font-['Antic_Didone'] text-3xl mb-2 text-[#a18c6d]">{t(yacht.name)}</h2>
                  </div>

                  {/* Description */}
                  {yacht.description && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d] flex items-center gap-2">
                        <Anchor className="w-5 h-5" />
                        {t("Description")}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-base md:text-lg">{t(yacht.description)}</p>
                    </div>
                  )}

                  {/* Pricing Section */}
                  {yacht.pricing && yacht.pricing.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#a18c6d] flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        {t("Pricing")} {yacht.duration && `(${t(yacht.duration)})`}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {yacht.pricing.map((item, index) => (
                          <div key={index} className="bg-gradient-to-r from-[#a18c6d]/20 to-[#a18c6d]/10 rounded-lg p-4 border border-[#a18c6d]/30">
                            <div className="flex justify-between items-center">
                              <span className="text-white/80 text-sm">{t(item.pax)}</span>
                              <span className="text-white font-bold text-lg">{t(item.price)}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {yacht.priceNote && (
                        <p className="text-white/60 text-sm mt-3 italic">{t(yacht.priceNote)}</p>
                      )}
                    </div>
                  )}

                  {/* Inclusions */}
                  {yacht.includes && yacht.includes.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d] flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        {t("What's Included")}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {yacht.includes.map((inclusion, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#a18c6d] rounded-full flex-shrink-0" />
                            <span className="text-white/90">{t(inclusion)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  {yacht.features && yacht.features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d]">{t("Features & Amenities")}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {yacht.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 py-1">
                            <div className="w-2 h-2 bg-[#a18c6d] rounded-full flex-shrink-0" />
                            <span className="text-white/90">{t(feature)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extra Services */}
                  {yacht.extraServices && yacht.extraServices.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d]">{t("Extra Services")}</h3>
                      <div className="space-y-2">
                        {yacht.extraServices.map((service, index) => (
                          <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <span className="text-white/90 text-sm">{t(service)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specifications */}
                  {yacht.specifications && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d] flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        {t("Specifications")}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {yacht.specifications.capacity && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Capacity")}</span>
                            <p className="text-white font-semibold">{t(yacht.specifications.capacity)}</p>
                          </div>
                        )}
                        {yacht.specifications.decks && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Decks")}</span>
                            <p className="text-white font-semibold">{t(yacht.specifications.decks)}</p>
                          </div>
                        )}
                        {yacht.specifications.levels && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Levels")}</span>
                            <p className="text-white font-semibold">{t(yacht.specifications.levels)}</p>
                          </div>
                        )}
                        {yacht.specifications.stories && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Stories")}</span>
                            <p className="text-white font-semibold">{t(yacht.specifications.stories)}</p>
                          </div>
                        )}
                        {yacht.specifications.type && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <span className="text-white/70 text-sm">{t("Type")}</span>
                            <p className="text-white font-semibold">{t(yacht.specifications.type)}</p>
                          </div>
                        )}
                        {yacht.specifications.specialFeature && (
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10 sm:col-span-2">
                            <span className="text-white/70 text-sm">{t("Special Feature")}</span>
                            <p className="text-white font-semibold">{t(yacht.specifications.specialFeature)}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Contact CTA */}
                  <div className="bg-gradient-to-r from-[#a18c6d] to-[#8a7456] rounded-lg p-6 text-center">
                    <h4 className="text-white font-semibold text-lg mb-2">{t("Ready to Book?")}</h4>
                    <p className="text-white/90 text-sm mb-4">{t("Contact us for availability and reservations")}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a 
                        href="tel:+201211140222" 
                        className="bg-white text-[#a18c6d] px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
                      >
                        {t("Call Now")}
                      </a>
                      <a 
                        href="mailto:reservation@thenileanchor.com" 
                        className="bg-transparent border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
                      >
                        {t("Send Email")}
                      </a>
                    </div>
                  </div>
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