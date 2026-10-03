import React from 'react';
import { ArrowDown, Sparkles, Sun, Droplets, Heart, Palette } from 'lucide-react';
import { HERO_IMAGE, FLOWERS } from '../data/flowers';

interface HeroSectionProps {
  onExplore: () => void;
  onCareGuide: () => void;
  onSelectFlower?: (flowerId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onCareGuide, onSelectFlower }) => {
  return (
    <section id="hero" className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Vibrant Floral Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-rose-300/35 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/35 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      {/* Floating floral petal SVG motifs with soft pastel colors */}
      <div className="absolute top-20 left-10 text-rose-400/40 animate-float-slow pointer-events-none hidden lg:block">
        <svg width="68" height="68" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C65 30 100 50 100 50 C100 50 65 70 50 100 C35 70 0 50 0 50 C0 50 35 30 50 0 Z" />
        </svg>
      </div>
      <div className="absolute bottom-24 right-12 text-amber-400/40 animate-float-delayed pointer-events-none hidden lg:block">
        <svg width="84" height="84" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="22" />
          <path d="M50 10 C55 25 55 25 50 30 C45 25 45 25 50 10" />
          <path d="M50 90 C55 75 55 75 50 70 C45 75 45 75 50 90" />
          <path d="M10 50 C25 55 25 55 30 50 C25 45 25 45 10 50" />
          <path d="M90 50 C75 55 75 55 70 50 C75 45 75 45 90 50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Colorful Curatorial Kicker */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100 border border-rose-200/80 text-xs font-bold uppercase tracking-wider text-stone-800 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600">
                A Symphony of Living Colours
              </span>
            </div>

            {/* Main Headline with Vibrant Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-[1.15] tracking-tight">
              Discover the <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500">
                Beauty of Flowers
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Flowers are nature’s supreme canvas—brimming with vivid scarlet petals, golden sun crowns, 
              amethyst orchids, and pristine lotus blossoms that bring joy to our hearts, heal our ailments, 
              and sustain vital ecosystems across the globe.
            </p>

            {/* Colourful Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplore}
                className="group px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
              >
                <span>Explore Flowers</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <button
                onClick={onCareGuide}
                className="px-6 py-3.5 text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-all duration-200 shadow-xs hover:shadow"
              >
                Flower Care Guide
              </button>
            </div>

            {/* Interactive Colour Ribbon of the 8 Flowers */}
            <div className="pt-4 text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 flex items-center justify-center lg:justify-start gap-1.5">
                <Palette className="w-3.5 h-3.5 text-rose-500" />
                Featured Flower Palette:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {FLOWERS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      if (onSelectFlower) onSelectFlower(f.id);
                      onExplore();
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white border border-stone-200 hover:scale-105 transition-transform shadow-xs"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: f.theme.primaryHex }}
                    />
                    <span className="text-stone-700">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Micro-stats banner */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-serif font-bold text-rose-600">8</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Iconic Species</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-amber-600">8+</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Flower Colours</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-emerald-600">100%</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Care Guides</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Frame with soft shadow and floral curvature */}
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 group">
              <img
                src={HERO_IMAGE}
                alt="Breathtaking botanical garden flower field with vibrant blooming roses and sunshine"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-pink-300">Botanical Garden Masterpiece</span>
                <p className="font-serif text-lg font-medium leading-snug">Spring & Summer Awakening</p>
              </div>
            </div>

            {/* Floating Mini Info Badges with Bright Color Accents */}
            <div className="absolute -bottom-5 -left-4 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-amber-200 flex items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Seasonal Bloom</p>
                <p className="text-sm font-bold text-amber-800">Summer & Autumn</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:right-2 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-rose-200 flex items-center gap-3 animate-float-delayed">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-medium">Living Heritage</p>
                <p className="text-sm font-bold text-rose-800">Vital Pollination</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
