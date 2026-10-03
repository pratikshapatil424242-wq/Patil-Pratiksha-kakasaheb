import React, { useState } from 'react';
import { Flower, FLOWERS, COLOR_PALETTE_FILTERS } from '../data/flowers';
import { Search, Sparkles, Calendar, Palette, ArrowRight, Eye, Check } from 'lucide-react';

interface FlowerGalleryProps {
  onSelectFlower: (flower: Flower) => void;
  selectedCategoryFilter?: string | null;
  onClearCategoryFilter?: () => void;
}

export const FlowerGallery: React.FC<FlowerGalleryProps> = ({
  onSelectFlower,
  selectedCategoryFilter,
  onClearCategoryFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColorFilter, setSelectedColorFilter] = useState('all');
  const [activeTab, setActiveTab] = useState<'All' | 'Seasonal' | 'Medicinal' | 'Decorative' | 'National/Traditional'>(
    (selectedCategoryFilter as any) || 'All'
  );

  // Sync if prop filter changes
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveTab(selectedCategoryFilter as any);
    }
  }, [selectedCategoryFilter]);

  const categories = [
    { label: 'All Flowers', value: 'All' },
    { label: 'Seasonal', value: 'Seasonal' },
    { label: 'Medicinal', value: 'Medicinal' },
    { label: 'Decorative', value: 'Decorative' },
    { label: 'National & Traditional', value: 'National/Traditional' },
  ];

  const filteredFlowers = FLOWERS.filter((flower) => {
    const matchesTab =
      activeTab === 'All' || flower.categories.includes(activeTab as any);
    
    const matchesColor =
      selectedColorFilter === 'all' ||
      flower.colors.some((c) =>
        c.toLowerCase().includes(selectedColorFilter.toLowerCase())
      ) ||
      flower.theme.tagColor.toLowerCase().includes(selectedColorFilter.toLowerCase());

    const matchesSearch =
      flower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flower.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flower.colorDisplay.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flower.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesColor && matchesSearch;
  });

  return (
    <section id="gallery" className="py-20 bg-stone-50/70 border-t border-stone-200/70 relative">
      {/* Background colorful radiant floral auras */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100 text-stone-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs border border-rose-200/60">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600">
              Living Colourful Collection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Curated Flower Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            Immerse yourself in our eight iconic botanical specimens. Each flower is paired with its 
            exact signature natural colour, rich symbolism, and scientific taxonomy.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4 mb-10 pb-6 border-b border-stone-200/80">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center flex-wrap gap-1.5 p-1.5 bg-white rounded-2xl border border-stone-200/80 shadow-xs w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveTab(cat.value as any);
                    if (onClearCategoryFilter && cat.value === 'All') {
                      onClearCategoryFilter();
                    }
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                    activeTab === cat.value
                      ? 'bg-rose-600 text-white font-semibold shadow-sm scale-[1.02]'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search flower, color, or origin..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-full text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Interactive Colour Selector Palette */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5 shrink-0">
              <Palette className="w-3.5 h-3.5 text-rose-500" />
              Filter by Flower Colour:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {COLOR_PALETTE_FILTERS.map((col) => {
                const isActive = selectedColorFilter === col.value;
                return (
                  <button
                    key={col.value}
                    onClick={() => setSelectedColorFilter(col.value)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-stone-900 text-white shadow-sm ring-2 ring-stone-900 ring-offset-1 font-semibold'
                        : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${col.bgClass} inline-block shrink-0 shadow-xs border border-white/40`}
                      style={{ backgroundColor: col.hex }}
                    />
                    <span>{col.label}</span>
                    {isActive && <Check className="w-3 h-3 ml-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Active Filters Notification */}
        {(activeTab !== 'All' || selectedColorFilter !== 'all') && (
          <div className="mb-6 flex items-center justify-between bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-stone-800 shadow-xs">
            <span>
              Showing flowers matching {activeTab !== 'All' ? `category: "${activeTab}"` : ''} 
              {activeTab !== 'All' && selectedColorFilter !== 'all' ? ' and ' : ''}
              {selectedColorFilter !== 'all' ? `colour: "${selectedColorFilter}"` : ''} 
              {' '}(<strong className="font-semibold text-rose-700">{filteredFlowers.length} found</strong>)
            </span>
            <button
              onClick={() => {
                setActiveTab('All');
                setSelectedColorFilter('all');
                if (onClearCategoryFilter) onClearCategoryFilter();
              }}
              className="text-rose-700 hover:text-rose-900 underline font-medium"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Flower Cards Grid with Flower-matching Colour Accents */}
        {filteredFlowers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredFlowers.map((flower) => {
              const theme = flower.theme;
              return (
                <div
                  key={flower.id}
                  onClick={() => onSelectFlower(flower)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectFlower(flower);
                    }
                  }}
                  className={`group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm transition-all duration-300 transform hover:-translate-y-2 flex flex-col cursor-pointer text-left focus:outline-none focus:ring-2 ${theme.cardBorderHover} hover:shadow-xl`}
                >
                  {/* Top Matching Colour Banner Stripe */}
                  <div
                    className="h-2 w-full transition-all duration-300"
                    style={{ backgroundColor: theme.primaryHex }}
                  />

                  {/* Image Container with Zoom & Sheen */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <img
                      src={flower.image}
                      alt={flower.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    
                    {/* Top-right quick inspect with flower's matching hover color */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm text-stone-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                      <Eye className="w-4 h-4" style={{ color: theme.primaryHex }} />
                    </div>

                    {/* Flower's Exact Signature Colour Pill */}
                    <div
                      className="absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md backdrop-blur-md"
                      style={{ backgroundColor: `${theme.primaryHex}EE` }}
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span>{theme.name}</span>
                    </div>

                    {/* Season Badge */}
                    <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Calendar className="w-3 h-3 text-amber-300" />
                      <span>{flower.season.split('(')[0].trim()}</span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Flower Name in Matching Accent Color on Hover */}
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-xl font-bold text-stone-900 transition-colors group-hover:opacity-90" style={{ color: undefined }}>
                          {flower.name}
                        </h3>
                        <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100">
                          {flower.family}
                        </span>
                      </div>

                      <p className="text-xs italic text-stone-500 mt-0.5 font-serif">
                        {flower.scientificName}
                      </p>

                      {/* Short Description */}
                      <p className="text-xs text-stone-600 mt-2.5 line-clamp-2 leading-relaxed">
                        {flower.shortDescription}
                      </p>
                    </div>

                    {/* Color Swatches and Matching Action Button */}
                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      {/* Color Palette dots */}
                      <div className="flex items-center gap-1.5 text-xs text-stone-600">
                        <span
                          className="w-3.5 h-3.5 rounded-full shadow-inner border border-white"
                          style={{ backgroundColor: theme.primaryHex }}
                          title={theme.tagColor}
                        />
                        <span className="text-[11px] font-medium truncate max-w-[110px]">
                          {flower.colors[0]}
                        </span>
                      </div>

                      {/* Matching Action Link */}
                      <span
                        className="inline-flex items-center gap-1 text-xs font-bold transition-all group-hover:translate-x-1"
                        style={{ color: theme.primaryHex }}
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto shadow-sm">
            <p className="text-lg font-serif font-semibold text-stone-800">No flowers match this filter</p>
            <p className="text-xs text-stone-500 mt-2">Try selecting "All Colours" or clearing your search term.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedColorFilter('all');
                setActiveTab('All');
                if (onClearCategoryFilter) onClearCategoryFilter();
              }}
              className="mt-4 px-5 py-2.5 bg-rose-600 text-white rounded-full text-xs font-semibold hover:bg-rose-700 transition shadow"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
