import React from 'react';
import { Heart, BookOpen, Sparkles, GraduationCap, Award, Compass, Sprout } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-50/70 border-t border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/70 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Botanical Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            About Blooming Flowers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            A digital botanical initiative created to inspire ecological wonder and bridge scientific 
            horticulture with everyday floral appreciation.
          </p>
        </div>

        {/* Central Purpose Banner with explicit prompt quote */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rose-200/80 shadow-md max-w-4xl mx-auto mb-16 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100/50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-100/50 rounded-full blur-2xl pointer-events-none" />

          <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 mx-auto flex items-center justify-center mb-6">
            <Heart className="w-6 h-6 fill-rose-500/20" />
          </div>

          <span className="text-xs uppercase tracking-widest text-rose-600 font-semibold block mb-3">
            Our Core Purpose
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900 leading-snug max-w-3xl mx-auto">
            “Our goal is to help people learn about and appreciate the beauty and importance of flowers.”
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-stone-500">
            <span className="w-8 h-px bg-stone-300" />
            <span className="font-serif italic">Blooming Flowers Botanical Collective</span>
            <span className="w-8 h-px bg-stone-300" />
          </div>
        </div>

        {/* 3 Project Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                Botanical Literacy
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Demystifying binomial nomenclature, plant families, and physiological adaptations so anyone 
                can recognize and understand species in parks and home gardens.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 text-xs text-amber-700 font-medium flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Specimen Taxonomy
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                Ecological Stewardship
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Highlighting the irreplaceable relationship between flowering plants and endangered pollinator 
                networks that maintain planetary food security.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 text-xs text-emerald-700 font-medium flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Biodiversity Protection
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                Accessible Gardening
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Providing actionable watering, soil, temperature, and feeding guidance to turn every novice into 
                a confident, thriving gardener.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-stone-100 text-xs text-rose-700 font-medium flex items-center gap-1">
              <Award className="w-3.5 h-3.5" /> Practical Green Thumb
            </div>
          </div>

        </div>

        {/* Presentation Metadata Banner */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-stone-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-1">
            College Presentation Project Showcase
          </p>
          <p className="font-serif text-stone-800 text-sm">
            Designed as an interactive web curriculum on botanical biodiversity, aesthetic floriculture, and modern web application development.
          </p>
        </div>

      </div>
    </section>
  );
};
