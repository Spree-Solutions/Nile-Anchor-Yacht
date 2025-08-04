import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import LazyImage from "@/components/common/LazyImage";
import { useTranslation } from "react-i18next";
import { X, Users, Clock, Check, Star, Anchor } from "lucide-react";

const YachtDetailsSheet = ({ yacht, isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!yacht) return null;

  // Parse description to extract different sections
  const parseDescription = (description) => {
    if (!description) return { mainDescription: "", pricing: [], inclusions: [], extraServices: [], priceNote: "" };
    
    const sections = description.split('**');
    let mainDescription = "";
    let pricing = [];
    let inclusions = [];
    let extraServices = [];
    let priceNote = "";
    
    // Extract main description (before first **)
    mainDescription = sections[0].trim();
    
    // Process each section
    for (let i = 1; i < sections.length; i += 2) {
      const sectionTitle = sections[i];
      const sectionContent = sections[i + 1] || "";
      
      if (sectionTitle.includes('Pricing')) {
        // Extract pricing items
        const lines = sectionContent.split('\n').filter(line => line.trim().startsWith('•'));
        pricing = lines.map(line => {
          const cleanLine = line.replace('•', '').trim();
          const [pax, price] = cleanLine.split(' - ');
          return { pax: pax?.trim(), price: price?.trim() };
        }).filter(item => item.pax && item.price);
      } else if (sectionTitle.includes('Includes')) {
        inclusions = sectionContent.split(',').map(item => item.trim()).filter(item => item);
      } else if (sectionTitle.includes('Extra Services')) {
        const lines = sectionContent.split('\n').filter(line => line.trim());
        extraServices = lines.map(line => line.replace('•', '').trim()).filter(item => item);
      }
    }
    
    // Extract price note
    const priceNoteMatch = description.match(/\*([^*]+)\*/);
    if (priceNoteMatch) {
      priceNote = priceNoteMatch[1];
    }
    
    return { mainDescription, pricing, inclusions, extraServices, priceNote };
  };

  const { mainDescription, pricing, inclusions, extraServices, priceNote } = parseDescription(yacht.description);

  // Get duration from description
  const getDuration = () => {
    if (yacht.description?.includes('(2 hours)')) return "2 hours";
    if (yacht.description?.includes('(1 hour)')) return "1 hour";
    return "";
  };

  const duration = getDuration();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="bottom" className="h-[90vh] bg-black border-t border-white/20 p-0 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <SheetHeader className="text-left">
              <SheetTitle className="font-['Antic_Didone'] text-white text-2xl md:text-3xl">{t(yacht.name)}</SheetTitle>
              <SheetDescription className="text-white/70 text-sm flex items-center gap-4">
                <span>{t("Yacht Details")}</span>
                {yacht.capacity && (
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {t(yacht.capacity)}
                  </span>
                )}
                {duration && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {t(duration)}
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
                    <p className="text-lg font-bold">{yacht.price}</p>
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
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#a18c6d] flex items-center gap-2">
                      <Anchor className="w-5 h-5" />
                      {t("Description")}
                    </h3>
                    <p className="text-white/90 leading-relaxed text-base md:text-lg">{t(mainDescription)}</p>
                  </div>

                  {/* Pricing Section */}
                  {pricing.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#a18c6d] flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        {t("Pricing")} {duration && `(${t(duration)})`}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {pricing.map((item, index) => (
                          <div key={index} className="bg-gradient-to-r from-[#a18c6d]/20 to-[#a18c6d]/10 rounded-lg p-4 border border-[#a18c6d]/30">
                            <div className="flex justify-between items-center">
                              <span className="text-white/80 text-sm">{item.pax}</span>
                              <span className="text-white font-bold text-lg">{item.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {priceNote && (
                        <p className="text-white/60 text-sm mt-3 italic">{priceNote}</p>
                      )}
                    </div>
                  )}

                  {/* Inclusions */}
                  {inclusions.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d] flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        {t("What's Included")}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {inclusions.map((inclusion, index) => (
                          <div key={index} className="flex items-center space-x-3">
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
                          <div key={index} className="flex items-center space-x-3 py-1">
                            <div className="w-2 h-2 bg-[#a18c6d] rounded-full flex-shrink-0" />
                            <span className="text-white/90">{t(feature)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extra Services */}
                  {extraServices.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#a18c6d]">{t("Extra Services")}</h3>
                      <div className="space-y-2">
                        {extraServices.map((service, index) => (
                          <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <span className="text-white/90 text-sm">{t(service)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Specifications (if available) */}
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