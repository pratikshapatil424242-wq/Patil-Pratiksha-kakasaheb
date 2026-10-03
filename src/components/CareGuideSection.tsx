import React, { useState } from 'react';
import { Droplets, Sun, Sprout, Sparkles, Thermometer, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FLOWERS, Flower } from '../data/flowers';

interface CareGuideSectionProps {
  initialSelectedFlowerId?: string;
}

export const CareGuideSection: React.FC<CareGuideSectionProps> = ({
  initialSelectedFlowerId = 'rose',
}) => {
  const [selectedFlowerId, setSelectedFlowerId] = useState<string>(initialSelectedFlowerId);

  // Sync if prop changes
  React.useEffect(() => {
    if (initialSelectedFlowerId) {
      setSelectedFlowerId(initialSelectedFlowerId);
    }
  }, [initialSelectedFlowerId]);

  const currentFlower: Flower =
    FLOWERS.find((f) => f.id === selectedFlowerId) || FLOWERS[0];

  const currentTheme = currentFlower.theme;

  const corePillars = [
    {
      title: 'Watering',
      icon: Droplets,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      hex: '#2563EB',
      universalRule: 'Check moisture 2 inches below the surface before watering. Morning watering prevents fungal foliage rot.',
    },
    {
      title: 'Sunlight',
      icon: Sun,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      hex: '#D97706',
      universalRule: 'Most flowering plants need 6+ hours of sun. Provide afternoon shade in extreme summer heat.',
    },
    {
      title: 'Soil Quality',
      icon: Sprout,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      hex: '#059669',
      universalRule: 'Ensure exceptional drainage with compost and perlite. Stagnant standing water causes root rot.',
    },
    {
      title: 'Fertilizer',
      icon: Sparkles,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      hex: '#E11D48',
      universalRule: 'Feed with balanced organic nutrients during active bud formation; halt feeding during winter dormancy.',
    },
    {
      title: 'Temperature',
      icon: Thermometer,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      hex: '#7C3AED',
      universalRule: 'Protect tropical varieties from frost below 10°C; ensure cold dormancy periods for spring bulbs.',
    },
  ];

  const seasonalSteps = [
    {
      phase: 'Spring Awakening',
      timeline: 'March - May',
      instructions: 'Prune dead stems, aerate topsoil, apply fresh compost, and water deeply to stimulate fresh shoots.',
      color: 'text-emerald-700',
      accentBg: 'bg-emerald-100',
      border: 'border-emerald-200'
    },
    {
      phase: 'Summer Vitality',
      timeline: 'June - August',
      instructions: 'Irrigate at soil base early morning, mulch root zones to conserve moisture, and deadhead spent blooms weekly.',
      color: 'text-amber-700',
      accentBg: 'bg-amber-100',
      border: 'border-amber-200'
    },
    {
      phase: 'Autumn Preparation',
      timeline: 'September - November',
      instructions: 'Cut back declining foliage, reduce fertilizer, plant spring bulbs like tulips and lilies, and protect root balls.',
      color: 'text-orange-700',
      accentBg: 'bg-orange-100',
      border: 'border-orange-200'
    },
    {
      phase: 'Winter Dormancy',
      timeline: 'December - February',
      instructions: 'Insulate garden beds with straw mulch, relocate delicate potted specimens indoors, and minimize watering frequency.',
      color: 'text-purple-700',
      accentBg: 'bg-purple-100',
      border: 'border-purple-200'
    },
  ];

  return (
    <section id="care-guide" className="py-20 bg-stone-50/70 border-t border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 via-teal-100 to-amber-100 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs border border-emerald-200/60">
            <Sprout className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 via-teal-700 to-amber-700">
              Colour-Coded Care Wisdom
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Comprehensive Flower Care Guide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Healthy blooms require the right balance of moisture, light, nutrient-rich soil, and temperature. 
            Select any specimen below to view instructions tailored directly in its signature colour.
          </p>
        </div>

        {/* 5 Core Pillars Banner with Vibrant Thematic Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl ${pillar.bg} ${pillar.border} border flex items-center justify-center ${pillar.color} mb-3 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.universalRule}
                  </p>
                </div>
                <div
                  className="h-1 w-full rounded-full mt-4"
                  style={{ backgroundColor: pillar.hex }}
                />
              </div>
            );
          })}
        </div>

        {/* Interactive Specimen Companion Box Styled in the Selected Flower's EXACT Color */}
        <div
          className="bg-white rounded-3xl p-6 sm:p-10 border shadow-xl mb-16 transition-all duration-300 relative overflow-hidden"
          style={{ borderColor: `${currentTheme.primaryHex}44` }}
        >
          {/* Top colored aura matching the flower */}
          <div
            className="absolute top-0 left-0 right-0 h-2.5 transition-all duration-300"
            style={{ backgroundColor: currentTheme.primaryHex }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200 mt-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: currentTheme.primaryHex }}
                />
                <span
                  className="text-xs uppercase tracking-wider font-bold"
                  style={{ color: currentTheme.primaryHex }}
                >
                  {currentTheme.name} Care Protocol
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Custom Care Requirements for {currentFlower.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1 italic font-serif">
                {currentFlower.scientificName} · Cultivation Difficulty:{' '}
                <strong
                  className="font-bold not-italic px-2 py-0.5 rounded-md text-xs"
                  style={{
                    backgroundColor: `${currentTheme.primaryHex}1A`,
                    color: currentTheme.primaryHex,
                  }}
                >
                  {currentFlower.careGuide.difficulty}
                </strong>
              </p>
            </div>

            {/* Specimen Selector Buttons Color-Coded */}
            <div className="flex flex-wrap items-center gap-2">
              {FLOWERS.map((f) => {
                const isSelected = selectedFlowerId === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFlowerId(f.id)}
                    style={{
                      backgroundColor: isSelected ? f.theme.primaryHex : undefined,
                      borderColor: isSelected ? f.theme.primaryHex : undefined,
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all border ${
                      isSelected
                        ? 'text-white shadow-md scale-105'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: isSelected ? '#FFFFFF' : f.theme.primaryHex,
                      }}
                    />
                    <span>{f.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Flower Customized Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 py-8 border-b border-stone-100">
            <div className="space-y-1.5 p-3 rounded-2xl bg-blue-50/50 border border-blue-100">
              <span className="text-[11px] uppercase tracking-wider text-blue-700 font-bold flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5" /> Watering
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentFlower.careGuide.watering}
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-2xl bg-amber-50/50 border border-amber-100">
              <span className="text-[11px] uppercase tracking-wider text-amber-700 font-bold flex items-center gap-1">
                <Sun className="w-3.5 h-3.5" /> Sunlight
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentFlower.careGuide.sunlight}
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <span className="text-[11px] uppercase tracking-wider text-emerald-700 font-bold flex items-center gap-1">
                <Sprout className="w-3.5 h-3.5" /> Soil Blend
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentFlower.careGuide.soil}
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-2xl bg-rose-50/50 border border-rose-100">
              <span className="text-[11px] uppercase tracking-wider text-rose-700 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Fertilizer
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentFlower.careGuide.fertilizer}
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
              <span className="text-[11px] uppercase tracking-wider text-purple-700 font-bold flex items-center gap-1">
                <Thermometer className="w-3.5 h-3.5" /> Temperature
              </span>
              <p className="text-xs text-stone-700 leading-relaxed">
                {currentFlower.careGuide.temperature}
              </p>
            </div>
          </div>

          {/* Step-by-Step Care Instructions for Selected Flower with Flower's matching color numbers */}
          <div className="pt-6">
            <h4
              className="font-serif text-lg font-bold mb-4 flex items-center gap-2"
              style={{ color: currentTheme.primaryHex }}
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Step-by-Step Cultivation Protocol for {currentFlower.name}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentFlower.careGuide.stepByStepTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl border transition-all"
                  style={{
                    backgroundColor: `${currentTheme.primaryHex}0A`,
                    borderColor: `${currentTheme.primaryHex}26`,
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                    style={{ backgroundColor: currentTheme.primaryHex }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4-Phase Seasonal Timeline with Colorful Phase Headers */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-md">
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2 text-center">
            Universal 4-Season Garden Care Cycle
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 text-center max-w-xl mx-auto mb-8">
            Syncing garden chores with natural seasonal rhythms ensures your flower beds maintain 
            exuberant vitality year after year.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalSteps.map((step, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-5 border ${step.border} shadow-xs flex flex-col justify-between bg-stone-50/60 hover:bg-white transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${step.color}`}>
                      Phase 0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">
                      {step.timeline}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {step.phase}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.instructions}
                  </p>
                </div>
                <div className={`mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 ${step.color} text-xs font-semibold`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Essential Task</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
