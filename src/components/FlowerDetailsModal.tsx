import React, { useEffect } from 'react';
import { Flower } from '../data/flowers';
import { X, Calendar, Palette, HeartPulse, Globe2, BookOpen, Sparkles, CheckCircle2, Sprout } from 'lucide-react';

interface FlowerDetailsModalProps {
  flower: Flower | null;
  onClose: () => void;
  onOpenCareGuide: (flowerId: string) => void;
}

export const FlowerDetailsModal: React.FC<FlowerDetailsModalProps> = ({
  flower,
  onClose,
  onOpenCareGuide,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (flower) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [flower, onClose]);

  if (!flower) return null;

  const theme = flower.theme;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-flower-name"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Header Matching Colour Stripe */}
        <div className="h-2.5 w-full" style={{ backgroundColor: theme.primaryHex }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-stone-900/70 hover:bg-stone-950 text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Quick Specimen Specs */}
          <div className="md:col-span-5 bg-stone-900 text-white flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/3] md:aspect-auto md:h-72 w-full overflow-hidden bg-stone-950">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className="text-xs uppercase tracking-widest font-bold px-2 py-0.5 rounded-full inline-block mb-1"
                    style={{ backgroundColor: `${theme.primaryHex}44`, color: '#FFFFFF' }}
                  >
                    {theme.name} Specimen
                  </span>
                  <h3 className="font-serif text-3xl font-bold">{flower.name}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Scientific Binomial</span>
                    <span className="font-serif italic text-sm text-stone-200">{flower.scientificName}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Botanical Family</span>
                    <span className="text-stone-200 font-medium">{flower.family}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Signature Colour</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-4 h-4 rounded-full border border-white/50" style={{ backgroundColor: theme.primaryHex }} />
                      <span className="text-stone-200 font-semibold">{theme.name} ({theme.primaryHex})</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Native Region</span>
                    <span className="text-stone-200">{flower.nativeRegion}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block uppercase tracking-wider text-[10px]">Symbolic Meaning</span>
                    <span className="text-stone-200 italic font-serif leading-relaxed">"{flower.symbolism}"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button to Care Guide matching flower's color */}
            <div className="p-6 pt-0 border-t border-stone-800">
              <button
                onClick={() => {
                  onClose();
                  onOpenCareGuide(flower.id);
                }}
                style={{ backgroundColor: theme.primaryHex }}
                className="w-full py-3 px-4 hover:brightness-110 text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Sprout className="w-4 h-4" />
                <span>Open {flower.name} Care Protocol</span>
              </button>
            </div>
          </div>

          {/* Right Column: In-depth botanical information */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6 bg-white text-stone-800">
            
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {flower.categories.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${theme.primaryHex}1A`, color: theme.primaryHex }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h2 id="modal-flower-name" className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                {flower.name}
              </h2>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                {flower.fullDescription}
              </p>
            </div>

            {/* Quick Metrics Bar with matching color border */}
            <div
              className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border"
              style={{ borderColor: `${theme.primaryHex}44` }}
            >
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 mt-0.5 shrink-0" style={{ color: theme.primaryHex }} />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium block">Blooming Season</span>
                  <span className="text-xs font-semibold text-stone-800">{flower.season}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Palette className="w-4 h-4 mt-0.5 shrink-0" style={{ color: theme.primaryHex }} />
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium block">Natural Colors</span>
                  <span className="text-xs font-semibold text-stone-800">{flower.colorDisplay}</span>
                </div>
              </div>
            </div>

            {/* Medicinal & Practical Uses */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-base">
                <HeartPulse className="w-4 h-4 text-emerald-600" />
                <h4>Medicinal & Practical Applications</h4>
              </div>
              <ul className="space-y-2 text-xs text-stone-600">
                {flower.medicinalUses.map((use, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cultural Importance */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-base">
                <Globe2 className="w-4 h-4" style={{ color: theme.primaryHex }} />
                <h4>Cultural & Sacred Importance</h4>
              </div>
              <ul className="space-y-2 text-xs text-stone-600">
                {flower.culturalImportance.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: theme.primaryHex }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Environmental & Pollinator Benefits */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-base">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <h4>Ecological Role & Biodiversity</h4>
              </div>
              <ul className="space-y-2 text-xs text-stone-600">
                {flower.environmentalBenefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fascinating Facts with Flower's matching background tint */}
            <div
              className="p-4 rounded-2xl border space-y-2"
              style={{
                backgroundColor: `${theme.primaryHex}0D`,
                borderColor: `${theme.primaryHex}33`
              }}
            >
              <div className="flex items-center gap-2 font-serif font-bold text-sm" style={{ color: theme.primaryHex }}>
                <BookOpen className="w-4 h-4" />
                <h5>Interesting Botanical Facts</h5>
              </div>
              <div className="space-y-1.5 text-xs text-stone-800">
                {flower.interestingFacts.map((fact, idx) => (
                  <p key={idx} className="leading-relaxed">
                    • {fact}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
