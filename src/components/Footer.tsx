import React, { useState } from 'react';
import { Flower2, ArrowUp, Heart, Check, Instagram, Youtube, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-full bg-rose-600/30 flex items-center justify-center text-rose-400">
                <Flower2 className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Blooming Flowers
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Our goal is to help people learn about and appreciate the beauty and importance of flowers. 
              Bridging botanical science, cultural history, and everyday gardening wisdom.
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social-instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-rose-600 hover:text-white flex items-center justify-center text-stone-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social-youtube"
                onClick={(e) => e.preventDefault()}
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-stone-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#social-twitter"
                onClick={(e) => e.preventDefault()}
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-sky-600 hover:text-white flex items-center justify-center text-stone-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#social-pinterest"
                onClick={(e) => e.preventDefault()}
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-rose-700 hover:text-white flex items-center justify-center text-stone-400 transition-colors"
              >
                <Flower2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  Flower Gallery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('importance')} className="hover:text-white transition-colors">
                  Importance & Value
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-white transition-colors">
                  Flower Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('care-guide')} className="hover:text-white transition-colors">
                  Care Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Curated Species Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Featured Flora
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Rose (Rosa rubiginosa)</li>
              <li>Lotus (Nelumbo nucifera)</li>
              <li>Sunflower (Helianthus annuus)</li>
              <li>Jasmine (Jasminum sambac)</li>
              <li>Marigold (Tagetes erecta)</li>
              <li>Tulip (Tulipa gesneriana)</li>
              <li>Lily & Orchid</li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              Botanical Dispatch
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Receive monthly seasonal bloom calendars and organic garden care tips.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs">
                <Check className="w-4 h-4 shrink-0" />
                <span>Subscribed! Welcome to our botanical journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-800 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-rose-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold transition"
                >
                  Join Newsletter
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Blooming Flowers. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for College Project Presentation. All rights reserved.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-stone-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
