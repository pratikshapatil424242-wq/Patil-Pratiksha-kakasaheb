import React, { useState } from 'react';
import { HeartPulse, Globe2, Leaf, Bug, Sparkles } from 'lucide-react';

export const FlowerInformation: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'all' | 'medicinal' | 'cultural' | 'environmental' | 'pollination'>('all');

  const infoPillars = [
    {
      id: 'medicinal',
      title: 'Medicinal Uses',
      icon: HeartPulse,
      hex: '#059669',
      border: 'border-emerald-200',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      tagline: 'Nature’s Living Pharmacy',
      summary: 'Flowers are dense natural laboratories synthesizing essential oils, flavonoids, polyphenols, and salicylic derivatives that have supported global healthcare for millennia.',
      points: [
        {
          heading: 'Herbal Infusions & Teas',
          desc: 'Flowers such as Jasmine, Lotus, and Rose are steeped into restorative brews that lower oxidative stress, soothe mental tension, and regulate digestion.'
        },
        {
          heading: 'Therapeutic Aromatherapy',
          desc: 'Volatile aromatic terpenes from rose damascena and jasmine blossoms activate olfactory receptors that calm cortisol stress and reduce nervous anxiety.'
        },
        {
          heading: 'Dermatological Regeneration',
          desc: 'Calendula, marigold, and rose water deliver antimicrobials, lutein, and mild tannins that heal abrasions, burns, and chronic skin inflammation.'
        },
        {
          heading: 'Cardiovascular Support',
          desc: 'Lotus extracts and sunflower phytosterols assist in blood vessel dilation, blood pressure moderation, and cholesterol management.'
        }
      ]
    },
    {
      id: 'cultural',
      title: 'Cultural Importance',
      icon: Globe2,
      hex: '#E11D48',
      border: 'border-rose-200',
      badgeBg: 'bg-rose-100 text-rose-800',
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
      tagline: 'Sacred Symbols & Human Art',
      summary: 'Flowers serve as universal emotional currency and sacred symbols across world civilizations, representing divine virtues, literature, and rites of passage.',
      points: [
        {
          heading: 'Sacred & Spiritual Worship',
          desc: 'The sacred Lotus (Nelumbo nucifera) symbolizes purity and spiritual enlightenment in Buddhism and Hinduism, emerging untainted from muddy ponds.'
        },
        {
          heading: 'National Identity & Sovereignty',
          desc: 'Flowers serve as national emblems—the Tudor Rose for England, the Golden Sunflower for Ukraine, and the Lotus for India and Vietnam.'
        },
        {
          heading: 'Celebration & Rites of Passage',
          desc: 'Marigolds guide spirits during Día de los Muertos in Mexico and adorn temple altars during Diwali in India, celebrating life, transition, and light.'
        },
        {
          heading: 'Poetry, Art & Architecture',
          desc: 'From Van Gogh’s Sunflowers to Ottoman Iznik tulip tiles and Persian ghazals, floral forms inspire humanity’s most celebrated artistic achievements.'
        }
      ]
    },
    {
      id: 'environmental',
      title: 'Environmental Benefits',
      icon: Leaf,
      hex: '#0D9488',
      border: 'border-teal-200',
      badgeBg: 'bg-teal-100 text-teal-800',
      iconBg: 'bg-teal-50 text-teal-600 border-teal-100',
      tagline: 'Ecological Balance & Soil Guardians',
      summary: 'Beyond aesthetic splendour, flowering flora regulate subterranean chemistry, prevent catastrophic erosion, and remediate industrial soil pollution.',
      points: [
        {
          heading: 'Phytoremediation',
          desc: 'Sunflowers and deep-rooted botanicals bio-accumulate toxic heavy metals (lead, arsenic, zinc) and environmental isotopes from contaminated topsoils.'
        },
        {
          heading: 'Topsoil Stabilization',
          desc: 'Extensive fibrous root networks of perennial bulbs like lilies and tulips anchor delicate topsoil, preventing rain-induced soil erosion.'
        },
        {
          heading: 'Organic Pest Suppression',
          desc: 'Marigold root secretions (alpha-terthienyl) eradicate destructive nematode parasites naturally, shielding companion vegetable crops without synthetic pesticides.'
        },
        {
          heading: 'Microclimate Humidification',
          desc: 'Dense flowering canopies transpire water vapor into the boundary layer, buffering urban heat island effects and cooling neighborhood ambient air.'
        }
      ]
    },
    {
      id: 'pollination',
      title: 'Pollination & Biodiversity',
      icon: Bug,
      hex: '#D97706',
      border: 'border-amber-200',
      badgeBg: 'bg-amber-100 text-amber-800',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      tagline: 'Sustaining Global Food Security',
      summary: 'Flowering plants (angiosperms) co-evolved with pollinators, supporting over 85% of wild plants and one out of every three bites of food we eat.',
      points: [
        {
          heading: 'Nectar & Protein Reserves',
          desc: 'Flowers supply essential carbohydrate nectar and protein-rich pollen that sustain thousands of solitary bee species, bumblebees, and hummingbirds.'
        },
        {
          heading: 'Nocturnal Pollinator Habitats',
          desc: 'Night-blooming varieties such as white Jasmine and evening primroses sustain nocturnal hawk moths, sphinx moths, and fruit bats.'
        },
        {
          heading: 'Global Food Web Foundation',
          desc: 'Pollinated flowers develop into fruit, berries, nuts, and seeds that nourish wild songbirds, forest mammals, and agrarian livestock.'
        },
        {
          heading: 'Genetic Plant Diversity',
          desc: 'Cross-pollination mediated by diverse insects ensures high evolutionary fitness, resilience to pathogens, and climate adaptation in plant species.'
        }
      ]
    }
  ];

  const displayedPillars = activePillar === 'all'
    ? infoPillars
    : infoPillars.filter((p) => p.id === activePillar);

  return (
    <section id="importance" className="py-20 bg-[#FAF7F2] border-t border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 via-rose-100 to-amber-100 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 via-rose-700 to-amber-700">
              Ecological & Human Vitality
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            The Importance of Flowers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Flowers are not merely decorative ornaments—they are the dynamic cornerstone of planetary life, 
            human wellness, and artistic culture.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-2xl border border-stone-200 shadow-xs">
            <button
              onClick={() => setActivePillar('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                activePillar === 'all'
                  ? 'bg-stone-900 text-white font-semibold shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Dimensions
            </button>
            {infoPillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePillar(p.id as any)}
                style={{
                  backgroundColor: activePillar === p.id ? p.hex : undefined,
                  color: activePillar === p.id ? '#FFFFFF' : undefined,
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 ${
                  activePillar === p.id
                    ? 'font-semibold shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Informational Cards Grid with Matching Colour Accent Stripes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 border ${pillar.border} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
              >
                {/* Top matching colour bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: pillar.hex }}
                />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: `${pillar.hex}15`,
                        borderColor: `${pillar.hex}30`,
                        color: pillar.hex,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span
                        className="text-xs uppercase tracking-wider font-bold block"
                        style={{ color: pillar.hex }}
                      >
                        {pillar.tagline}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-stone-900">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    {pillar.summary}
                  </p>

                  {/* Detailed Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                    {pillar.points.map((pt, idx) => (
                      <div key={idx} className="space-y-1">
                        <h4 className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: pillar.hex }}
                          />
                          <span>{pt.heading}</span>
                        </h4>
                        <p className="text-[12px] text-stone-500 leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnote callout */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                  <span className="italic font-serif">Botanical Impact Note</span>
                  <span
                    className="font-bold text-xs"
                    style={{ color: pillar.hex }}
                  >
                    Verified Science
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Callout Box for Presentation */}
        <div className="mt-12 bg-gradient-to-r from-rose-900 via-stone-900 to-emerald-950 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-pink-300 font-semibold">
              Ecological Stewardship
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
              Every Blossom Plays a Role in Planet Earth’s Tapestry
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed">
              Without flowering plants and their dedicated pollinators, global agricultural food supplies 
              would collapse and terrestrial ecosystems would lose over 80% of their botanical diversity.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            <div className="text-center px-4 py-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="block font-serif text-2xl font-bold text-amber-300">1 in 3</span>
              <span className="text-[11px] text-stone-300 uppercase tracking-wider">Bites of Food</span>
            </div>
            <div className="text-center px-4 py-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <span className="block font-serif text-2xl font-bold text-pink-300">85%+</span>
              <span className="text-[11px] text-stone-300 uppercase tracking-wider">Wild Flora</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
