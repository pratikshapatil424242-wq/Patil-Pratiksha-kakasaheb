import React from 'react';
import { Calendar, HeartPulse, Sparkles, Crown, ArrowRight, Check } from 'lucide-react';
import { FLOWER_CATEGORIES } from '../data/flowers';

interface FlowerCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const FlowerCategories: React.FC<FlowerCategoriesProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Crown':
        return <Crown className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="categories" className="py-20 bg-stone-50/70 border-t border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-amber-100 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs border border-purple-200/60">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-pink-700 to-amber-700">
              Vibrant Botanical Taxonomy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Flower Categories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Discover flowers categorized by their natural seasonal cycles, healing botanical chemistry, 
            decorative artistry, and revered national traditions.
          </p>
        </div>

        {/* Categories 4-Card Grid with Rich Color Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLOWER_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border ${cat.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between group relative overflow-hidden`}
            >
              {/* Top ambient color glow */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${cat.bgGradient}`} />

              <div>
                {/* Category Icon */}
                <div className={`w-14 h-14 rounded-2xl ${cat.iconBg} border border-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {getIcon(cat.icon)}
                </div>

                <span className={`text-[11px] uppercase tracking-wider font-bold block mb-1 ${cat.accentText}`}>
                  {cat.tagline}
                </span>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2.5">
                  {cat.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Highlights List with matching colored checkmarks */}
                <div className="space-y-2 pt-4 border-t border-stone-100 mb-6">
                  {cat.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                      <Check className={`w-3.5 h-3.5 ${cat.accentText} shrink-0`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button that matches the category color */}
              <button
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full py-2.5 px-4 bg-stone-50 text-stone-700 font-semibold text-xs rounded-xl border border-stone-200 transition-all flex items-center justify-center gap-1.5 ${cat.buttonColor} group-hover:text-white shadow-xs`}
              >
                <span>Browse {cat.title}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
