export interface FlowerCareGuide {
  watering: string;
  sunlight: string;
  soil: string;
  fertilizer: string;
  temperature: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  stepByStepTips: string[];
}

export interface FlowerTheme {
  primaryHex: string;
  name: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accentText: string;
  buttonBg: string;
  cardBorderHover: string;
  cardGlow: string;
  accentBgLight: string;
  tagColor: string;
}

export interface Flower {
  id: string;
  name: string;
  scientificName: string;
  family: string;
  colors: string[];
  colorDisplay: string;
  season: string;
  categories: Array<'Seasonal' | 'Medicinal' | 'Decorative' | 'National/Traditional'>;
  shortDescription: string;
  fullDescription: string;
  image: string;
  symbolism: string;
  nativeRegion: string;
  medicinalUses: string[];
  culturalImportance: string[];
  environmentalBenefits: string[];
  interestingFacts: string[];
  careGuide: FlowerCareGuide;
  theme: FlowerTheme;
}

export const HERO_IMAGE = '/src/assets/images/blooming_flowers_hero_1791048565198.jpg';

export const FLOWERS: Flower[] = [
  {
    id: 'rose',
    name: 'Rose',
    scientificName: 'Rosa rubiginosa / Rosa damascena',
    family: 'Rosaceae',
    colors: ['Crimson Red', 'Blush Pink', 'Ivory White', 'Golden Yellow'],
    colorDisplay: 'Crimson Red, Blush Pink, Ivory, Golden Yellow',
    season: 'Late Spring to Autumn',
    categories: ['Decorative', 'Medicinal', 'National/Traditional', 'Seasonal'],
    shortDescription: 'The timeless queen of flowers, renowned worldwide for velvety petals, enchanting aroma, and romantic symbolism.',
    fullDescription: 'Roses are woody perennial flowering plants belonging to the family Rosaceae. With over three hundred species and tens of thousands of cultivars, roses range from compact miniatures to climbing ramblers that scale garden walls. Cultivated for millennia across Persia, China, and the Mediterranean, roses are as chemically fascinating as they are aesthetically revered, producing precious essential oils and vitamin-rich rosehips.',
    image: '/src/assets/images/flower_rose_macro_1791048578185.jpg',
    symbolism: 'Love, passion, devotion, beauty, and confidentiality (sub rosa).',
    nativeRegion: 'Temperate regions of the Northern Hemisphere, particularly Asia.',
    medicinalUses: [
      'Rose water acts as an anti-inflammatory astringent for skin hydration and toning.',
      'Rosehip tea provides high concentrations of Vitamin C and antioxidants.',
      'Aromatherapeutic rose damascena oil alleviates stress, anxiety, and mild tension.',
      'Petal infusions soothe sore throats and support digestive comfort.'
    ],
    culturalImportance: [
      'National floral emblem of England, the United States, and the Maldives.',
      'Central motif in Persian poetry, classical literature, and Renaissance paintings.',
      'Extensively utilized in ceremonial garlands, luxury perfumes, and wedding traditions globally.'
    ],
    environmentalBenefits: [
      'Crucial pollen source for bumblebees, solitary bees, and hoverflies.',
      'Thorny branches provide secure nesting sanctuaries and songbird roosts.',
      'Winter rosehips supply critical cold-season nourishment for migrating birds.'
    ],
    interestingFacts: [
      'Fossilized rose leaves dating back 35 million years have been discovered in Colorado.',
      'Over 2,000 rose blossoms are distilled to produce just one gram of pure rose attar essential oil.',
      'In ancient Rome, wild roses were placed on doors to signify that secrets spoken within were confidential ("sub rosa").'
    ],
    careGuide: {
      watering: 'Deeply water 1–2 times weekly at ground level to keep root ball moist while preventing leaf dampness.',
      sunlight: 'Full direct sunlight (at least 6 hours daily) for maximum blooming vigor.',
      soil: 'Rich, loamy, well-draining soil with a slightly acidic to neutral pH between 6.0 and 6.8.',
      fertilizer: 'Balanced 10-10-10 organic rose food applied every 4 to 6 weeks during active growth.',
      temperature: '15°C to 26°C (60°F–78°F). Hardy varieties tolerate light frosts when mulched.',
      difficulty: 'Moderate',
      stepByStepTips: [
        'Prune in early spring, removing dead wood and inward-facing stems at a 45-degree angle.',
        'Always irrigate the soil directly beneath the foliage rather than overhead to thwart black spot fungus.',
        'Apply a 2-inch layer of organic cedar or pine bark mulch to conserve soil moisture and cool root systems.',
        'Regularly deadhead spent blooms right above a 5-leaflet leaf set to spur recurring flower buds.'
      ]
    },
    theme: {
      primaryHex: '#E11D48',
      name: 'Ruby Rose',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-800',
      badgeBorder: 'border-rose-200',
      accentText: 'text-rose-700',
      buttonBg: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200',
      cardBorderHover: 'hover:border-rose-400 hover:shadow-rose-200/80',
      cardGlow: 'from-rose-500/15 via-rose-500/5 to-transparent',
      accentBgLight: 'bg-rose-50',
      tagColor: 'Crimson Red'
    }
  },
  {
    id: 'lotus',
    name: 'Lotus',
    scientificName: 'Nelumbo nucifera',
    family: 'Nelumbonaceae',
    colors: ['Blush Pink', 'Pristine White', 'Pale Cream'],
    colorDisplay: 'Pristine White, Soft Blush Pink',
    season: 'Summer (June to September)',
    categories: ['National/Traditional', 'Medicinal', 'Decorative', 'Seasonal'],
    shortDescription: 'Sacred aquatic perennial celebrated for its immaculate, water-repelling blossoms rising pure above muddy waters.',
    fullDescription: 'Nelumbo nucifera, commonly known as the sacred lotus, is an ancient aquatic plant with spectacular leaves and blossoms that emerge high above water. Endowed with the ultra-hydrophobic "lotus effect," its surface microstructures naturally repel water droplets, ensuring petals remain pristine and self-cleaning. Every portion of the lotus plant, from the crisp rhizomes to crunchy seeds and fragrant petals, holds revered culinary and cultural status throughout Asia.',
    image: '/src/assets/images/flower_lotus_pond_1791048590724.jpg',
    symbolism: 'Purity of body, speech, and mind; spiritual enlightenment; rebirth and divine beauty.',
    nativeRegion: 'Tropical and warm temperate regions across Asia and Northern Australia.',
    medicinalUses: [
      'Lotus leaf extracts are traditionally utilized to regulate metabolism and support healthy lipid levels.',
      'Dried lotus plumule (lian xin) tea calms the nervous system and aids restful sleep.',
      'Lotus root is a potassium, dietary fiber, and vitamin B6 superfood supporting cardiovascular health.',
      'Seed extracts are recognized for potent free-radical scavenging and anti-aging properties.'
    ],
    culturalImportance: [
      'National flower of both India and Vietnam, holding profound sacred veneration.',
      'Central throne and motif in Buddhist iconography and Hindu deities (Lakshmi, Saraswati, Brahma).',
      'Symbol of perseverance: emerging unblemished from murky mud into radiant sunlight.'
    ],
    environmentalBenefits: [
      'Acts as a biological natural filter, absorbing excess nitrates and heavy metals from wetlands.',
      'Provides extensive underwater shelter for small aquatic fauna and beneficial pond amphibians.',
      'Attracts specialized native beetles and aquatic pollinators through floral thermogenesis.'
    ],
    interestingFacts: [
      'Lotus blossoms can self-regulate their temperature, warming up to 35°C to attract pollinating insects.',
      'Viable lotus seeds recovered from an ancient dried lake bed in China germinated after 1,300 years of dormancy.',
      'Nanoscientists designed modern water-repellent fabrics and paints by mimicking the microscopic wax crystals on lotus leaves.'
    ],
    careGuide: {
      watering: 'Requires 20–50 cm of standing non-chlorinated fresh water above soil substrate.',
      sunlight: 'Full unshaded sunlight (minimum 6–8 hours daily); flowers will not open in shade.',
      soil: 'Heavy clay loam or pond sediment free of floating perlite or uncomposted peat.',
      fertilizer: 'Aquatic plant fertilizer tablets inserted directly into underwater mud once monthly in spring and summer.',
      temperature: 'Warm tropical conditions, 22°C to 35°C (72°F–95°F). Tubers overwinter safely under ice-free mud.',
      difficulty: 'Challenging',
      stepByStepTips: [
        'Plant tuber horizontal with growing tip tilted slightly upward into heavy clay loam container.',
        'Submerge pot carefully in your garden water basin or barrel without disturbing the tender tuber eye.',
        'Keep water crystal clear and free from aggressive algae blooms by adding aquatic snails or bio-filters.',
        'Relocate dormant tuber below the pond freezing line or store in cool damp moss before winter frosts.'
      ]
    },
    theme: {
      primaryHex: '#EC4899',
      name: 'Lotus Pink',
      badgeBg: 'bg-pink-100',
      badgeText: 'text-pink-800',
      badgeBorder: 'border-pink-200',
      accentText: 'text-pink-700',
      buttonBg: 'bg-pink-600 hover:bg-pink-700 text-white shadow-pink-200',
      cardBorderHover: 'hover:border-pink-400 hover:shadow-pink-200/80',
      cardGlow: 'from-pink-500/15 via-pink-500/5 to-transparent',
      accentBgLight: 'bg-pink-50',
      tagColor: 'Blush Pink'
    }
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    family: 'Asteraceae',
    colors: ['Golden Yellow', 'Warm Amber', 'Russet Bronze'],
    colorDisplay: 'Vivid Golden Amber, Warm Russet, Tangerine',
    season: 'Mid Summer to Early Autumn',
    categories: ['Seasonal', 'Decorative', 'Medicinal'],
    shortDescription: 'Towering heliotropic giant that turns its radiant golden face to track the sun across open azure skies.',
    fullDescription: 'Helianthus annuus is a quintessential member of the daisy family Asteraceae, famous for its magnificent inflorescence composed of hundreds or thousands of tiny individual florets arranged in Fibonacci spirals. Sunflowers exhibit remarkable heliotropism in their juvenile phase, turning from east to west with the daytime trajectory of the sun, and re-orienting eastward before dawn. They are prized worldwide for culinary oil, wholesome seeds, and landscape grandeur.',
    image: '/src/assets/images/flower_sunflower_field_1791048601796.jpg',
    symbolism: 'Adoration, loyalty, longevity, radiant optimism, and unwavering warmth.',
    nativeRegion: 'North and Central America, domesticated over 3,000 years ago by Indigenous peoples.',
    medicinalUses: [
      'Cold-pressed sunflower seed oil is exceptionally rich in Vitamin E and linoleic essential fatty acids.',
      'Infusions of dried sunflower petals have been brewed in folk medicine to ease bronchitic coughs.',
      'Seed extracts support heart health and cholesterol moderation through phytosterols.',
      'Poultices from crushed fresh leaves were traditionally applied to soothe insect stings and contusions.'
    ],
    culturalImportance: [
      'Immortalized in Vincent van Gogh’s world-famous 1888 Post-Impressionist masterwork series.',
      'National flower of Ukraine, symbolizing resilient spirit, national sovereignty, and peace.',
      'Sacred solar deity emblem among ancient Inca and Native American sun-honoring ceremonies.'
    ],
    environmentalBenefits: [
      'Renowned hyperaccumulators used in phytoremediation to detoxify lead, arsenic, and radioactive isotopes from soil.',
      'Magnificent pollinator magnet delivering rich protein-packed pollen and nectar to wild bee colonies.',
      'Mature seedheads provide essential autumn bird feeding stations for goldfinches, sparrows, and cardinals.'
    ],
    interestingFacts: [
      'The seedhead structure follows the golden ratio (1.618), packing the maximum possible seeds into a circle.',
      'Sunflowers were planted extensively around Chernobyl and Fukushima to extract toxic radiation from contaminated earth.',
      'The Guinness World Record for the tallest sunflower reached an astounding 9.17 meters (30 ft 1 in).'
    ],
    careGuide: {
      watering: 'Water deeply and infrequently (about 2 gallons per plant weekly) to encourage deep anchor taproots.',
      sunlight: 'Full direct sunlight (at least 6–8 hours daily); more sun equates to sturdier stalks.',
      soil: 'Tolerant of varied soils, but thrives in nutrient-dense, loose, well-draining soil with neutral pH.',
      fertilizer: 'Light feeder; an all-purpose slow-release organic fertilizer at planting is sufficient.',
      temperature: '21°C to 30°C (70°F–86°F). Highly heat tolerant once established.',
      difficulty: 'Easy',
      stepByStepTips: [
        'Sow seeds directly outdoors in late spring after all frost threat has vanished.',
        'Stake giant varieties in windy regions with bamboo poles to prevent stem snapping under heavy flower heads.',
        'Protect early seedlings from birds and slugs with wire mesh domes during the first two weeks.',
        'Allow flower heads to dry on the stalk in autumn if harvesting seeds for wild garden birds or roasting.'
      ]
    },
    theme: {
      primaryHex: '#EAB308',
      name: 'Sun Gold',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-800',
      badgeBorder: 'border-amber-200',
      accentText: 'text-amber-700',
      buttonBg: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-200',
      cardBorderHover: 'hover:border-amber-400 hover:shadow-amber-200/80',
      cardGlow: 'from-amber-500/15 via-amber-500/5 to-transparent',
      accentBgLight: 'bg-amber-50',
      tagColor: 'Golden Yellow'
    }
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    scientificName: 'Jasminum sambac / Jasminum officinale',
    family: 'Oleaceae',
    colors: ['Star White', 'Pale Cream', 'Emerald Foliage'],
    colorDisplay: 'Pristine Porcelain White, Ivory',
    season: 'Spring through Autumn (Blooms at dusk)',
    categories: ['Medicinal', 'Decorative', 'National/Traditional'],
    shortDescription: 'Star-like white blossoms releasing an intoxicating, sweet fragrance into the evening air.',
    fullDescription: 'Jasmine is an aristocratic genus of flowering shrubs and climbing vines in the olive family Oleaceae. Most renowned for its deeply evocative nocturnal aroma, jasmine blossoms open their star-shaped corollas as twilight arrives, releasing complex aromatic indoles and benzyl acetates that perfume garden courtyards for yards around. Prized across the Orient for tea scenting, wedding garlands, and high perfumery.',
    image: '/src/assets/images/flower_jasmine_fragrant_1791048616499.jpg',
    symbolism: 'Sensuality, divine hope, purity of heart, unconditional love, and nocturnal mystique.',
    nativeRegion: 'Tropical and warm temperate parts of Eurasia, Australasia, and Oceania.',
    medicinalUses: [
      'Jasmine green tea (Moli Hua Cha) delivers catechins and polyphenols for cardiovascular health.',
      'Aromatherapeutic jasmine absolute is celebrated for lifting melancholy and soothing mental fatigue.',
      'Traditional Ayurvedic formulations utilize crushed leaves to cool inflamed tissue and soothe headaches.',
      'Antimicrobial botanical compounds lend mild antiseptic benefits in herbal facial toners.'
    ],
    culturalImportance: [
      'National flower of the Philippines (Sampaguita), Indonesia (Melati putih), and Tunisia.',
      'Traditional flower for welcoming guests in Hawaii, India, and Southeast Asia with handwoven leis and garlands.',
      'Integral base note across legendary French haute perfumery including Chanel No. 5.'
    ],
    environmentalBenefits: [
      'Night-blooming varieties serve as critical nectar food stations for nocturnal hawk moths and sphinx moths.',
      'Dense climbing vines provide vertical greenery and insulation on building walls.',
      'Attracts daylight pollinators including honeybees and swallowtail butterflies in morning hours.'
    ],
    interestingFacts: [
      'Jasmine flowers must be hand-harvested just before dawn when their essential oil concentration peaks.',
      'The name originates from the Persian word "Yasmin," translating to "Gift from God."',
      'Authentic jasmine absolute is among the most costly fragrance raw materials in the global perfume trade.'
    ],
    careGuide: {
      watering: 'Keep soil evenly moist during flowering season; reduce water frequency during winter dormancy.',
      sunlight: 'Full morning sun with light afternoon shade, or bright indirect illumination indoors.',
      soil: 'Rich, moist, humus-rich soil amended with compost and sharp sand for pristine drainage.',
      fertilizer: 'High-phosphorus water-soluble fertilizer applied every two weeks during spring and summer blooms.',
      temperature: '18°C to 27°C (65°F–80°F). Protect from freezing temperatures under 10°C.',
      difficulty: 'Moderate',
      stepByStepTips: [
        'Provide a sturdy wooden or wire trellis to guide and support vigorous vine climbers.',
        'Pinch back terminal shoots in late winter to stimulate dense lateral branching and more flower buds.',
        'Wipe indoor foliage periodically with a damp sponge to prevent dust accumulation and spider mites.',
        'Position the plant in an outdoor patio or bedroom window where its evening fragrance can drift indoors.'
      ]
    },
    theme: {
      primaryHex: '#059669',
      name: 'Emerald Jasmine',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      badgeBorder: 'border-emerald-200',
      accentText: 'text-emerald-700',
      buttonBg: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200',
      cardBorderHover: 'hover:border-emerald-400 hover:shadow-emerald-200/80',
      cardGlow: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
      accentBgLight: 'bg-emerald-50',
      tagColor: 'Pure White & Jade'
    }
  },
  {
    id: 'marigold',
    name: 'Marigold',
    scientificName: 'Tagetes erecta / Tagetes patula',
    family: 'Asteraceae',
    colors: ['Fiery Orange', 'Golden Amber', 'Mahogany Bronze'],
    colorDisplay: 'Vibrant Saffron Orange, Marigold Yellow, Mahogany',
    season: 'Early Summer through Late Autumn Frosts',
    categories: ['Medicinal', 'Decorative', 'National/Traditional', 'Seasonal'],
    shortDescription: 'Resilient sunshine blossoms with dense, ruffled petals and celebrated pest-repelling natural oils.',
    fullDescription: 'Marigolds are hearty, cheerful annuals and perennials in the Asteraceae family. Featuring densely ruffled flower pompoms in glowing shades of copper, gold, and amber, marigolds produce distinctive aromatic terpenes in their foliage that act as natural garden guardians. Celebrated in Mexican Día de los Muertos festivals as Cempasúchil and across Indian Diwali ceremonies, marigolds are durable, drought-tolerant champions.',
    image: '/src/assets/images/flower_marigold_vibrant_1791048628262.jpg',
    symbolism: 'Passion, creative drive, resilience, celebratory joy, and remembrance of loved ones.',
    nativeRegion: 'Central and South America, particularly central Mexico.',
    medicinalUses: [
      'Lutein and zeaxanthin extracted from petals prevent macular degeneration and enhance ocular wellness.',
      'Calendula and Tagetes salves accelerate skin tissue repair, easing burns, rashes, and minor cuts.',
      'Antifungal and antibacterial extracts help treat fungal foot infections and skin irritations.',
      'Marigold tea stimulates lymphatic cleansing and helps ease minor digestive cramping.'
    ],
    culturalImportance: [
      'The sacred "Flor de Muerto" used to guide spirits back to family altars in Mexico’s Día de los Muertos.',
      'Ubiquitous in Hindu wedding rituals, temple offerings, and Diwali house doorways for prosperity.',
      'Natural textile dye producing radiant golden-yellow ochre hues for natural linens and silks.'
    ],
    environmentalBenefits: [
      'Roots exude alpha-terthienyl, an organic compound that eliminates harmful root-knot nematodes in garden soil.',
      'Companion planting companion that deters whiteflies, tomato hornworms, and cabbage moths.',
      'Provides late-season pollen and nectar during autumn when many other garden blossoms have expired.'
    ],
    interestingFacts: [
      'Aztecs cultivated marigolds as sacred medicines and ritual flowers before Spanish explorers brought them abroad.',
      'Marigold petals are routinely included in organic poultry feed to give egg yolks a deep golden sunrise tint.',
      'They are one of the easiest flowers for novice gardeners and students to germinate from seed in just 4 days.'
    ],
    careGuide: {
      watering: 'Allow top inch of soil to dry between waterings. Drought-hardy once root systems establish.',
      sunlight: 'Full blazing sun (6+ hours daily); will grow spindly with sparse blossoms in partial shade.',
      soil: 'Standard garden soil with good drainage; overly fertile soil produces leafy foliage at expense of flowers.',
      fertilizer: 'Minimal requirement; a half-strength tomato fertilizer once at mid-summer is plenty.',
      temperature: '18°C to 32°C (64°F–90°F). Thrives in warm sunny weather, perishes with freezing hard frost.',
      difficulty: 'Easy',
      stepByStepTips: [
        'Directly sow seeds 1/4 inch deep in spring; thin seedlings to 8–10 inches apart for airflow.',
        'Pinch early vegetative tips to create bushy, multi-stemmed plants loaded with flower buds.',
        'Deadhead faded flower heads weekly to trigger a non-stop wave of blossoms until November.',
        'Plant directly alongside heirloom tomatoes and brassicas as natural organic insect deterrents.'
      ]
    },
    theme: {
      primaryHex: '#EA580C',
      name: 'Saffron Fire',
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-800',
      badgeBorder: 'border-orange-200',
      accentText: 'text-orange-700',
      buttonBg: 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200',
      cardBorderHover: 'hover:border-orange-400 hover:shadow-orange-200/80',
      cardGlow: 'from-orange-500/15 via-orange-500/5 to-transparent',
      accentBgLight: 'bg-orange-50',
      tagColor: 'Saffron Orange'
    }
  },
  {
    id: 'tulip',
    name: 'Tulip',
    scientificName: 'Tulipa gesneriana',
    family: 'Liliaceae',
    colors: ['Coral Peach', 'Vibrant Scarlet', 'Royal Purple', 'Canary Yellow'],
    colorDisplay: 'Soft Peach, Coral Rose, Royal Purple, Canary',
    season: 'Spring (March to May)',
    categories: ['Seasonal', 'Decorative', 'National/Traditional'],
    shortDescription: 'The ultimate symbol of spring rebirth, displaying perfect cup-shaped symmetry and velvety vibrant hues.',
    fullDescription: 'Tulipa is a genus of spring-blooming perennial herbaceous bulbiferous geophytes in the lily family Liliaceae. Indigenous to the rugged mountain passes of Central Asia and the Ottoman Empire, tulips ignited the legendary "Tulip Mania" of 17th-century Holland—one of the earliest documented speculative economic bubbles. Today, they blanket the Keukenhof gardens in Holland with millions of radiant geometric color ribbons.',
    image: '/src/assets/images/flower_tulip_spring_1791048640038.jpg',
    symbolism: 'Perfect deep love, rebirth, elegance, prosperity, and the joyous arrival of spring.',
    nativeRegion: 'Central Asia, Tien Shan mountain foothills, and the Anatolian Peninsula.',
    medicinalUses: [
      'Historically used in Persian folk medicine as a mild cooling tonic for topical skin irritation.',
      'Cosmetic infusions contain humectant properties that aid botanical moisturizing creams.',
      'Note: Raw tulip bulbs contain tulipalin allergens and should never be consumed without expert processing.'
    ],
    culturalImportance: [
      'National floral symbol of the Netherlands, Turkey, and Hungary.',
      'Central design element in Ottoman architectural iznik tiles and imperial silk tapestries.',
      'Subject of historic "Tulip Mania" (1637) where a single rare "Semper Augustus" bulb cost more than an Amsterdam mansion.'
    ],
    environmentalBenefits: [
      'Essential early-season nectar reservoir for hungry queen bees emerging from winter hibernation.',
      'Helps stabilize springtime topsoil on sloping garden terraces with extensive fibrous rootlets.',
      'Signals seasonal ecological transitions for biodiversity phenology tracking.'
    ],
    interestingFacts: [
      'Tulip petals are actually edible in organic culinary gastronomy, tasting crisp like fresh sweet lettuce or baby peas.',
      'Cut tulips continue to grow in the vase water, lengthening by an inch or more while bending toward light.',
      'The famous feathered stripes on historical Dutch master tulips were caused by a harmless mosaic virus spread by aphids.'
    ],
    careGuide: {
      watering: 'Water thoroughly after autumn bulb planting; natural spring rains usually suffice until blooming finishes.',
      sunlight: 'Full morning sun to light afternoon filtered shade to prolong flower petal longevity.',
      soil: 'Porous, fast-draining sandy loam. Wet, waterlogged winter soil will cause bulb rot.',
      fertilizer: 'Bone meal or slow-release bulb booster worked into planting trench during autumn planting.',
      temperature: 'Requires a cold winter chilling period (at least 12–14 weeks below 7°C/45°F) to initiate spring blooms.',
      difficulty: 'Easy',
      stepByStepTips: [
        'Plant bulbs in late autumn, 6 to 8 inches deep with the pointed tip pointing toward the sky.',
        'Mulch planting beds with 2 inches of shredded leaves to protect bulbs from freeze-thaw cycles.',
        'Snip off spent flower heads right after petal drop, but allow green foliage to turn yellow before cutting back.',
        'In warm winter climates, pre-chill bulbs in a household refrigerator for 12 weeks prior to planting.'
      ]
    },
    theme: {
      primaryHex: '#F43F5E',
      name: 'Coral Tulip',
      badgeBg: 'bg-rose-100',
      badgeText: 'text-rose-800',
      badgeBorder: 'border-rose-200',
      accentText: 'text-rose-700',
      buttonBg: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200',
      cardBorderHover: 'hover:border-rose-400 hover:shadow-rose-200/80',
      cardGlow: 'from-rose-500/15 via-rose-500/5 to-transparent',
      accentBgLight: 'bg-rose-50',
      tagColor: 'Coral Peach'
    }
  },
  {
    id: 'lily',
    name: 'Lily',
    scientificName: 'Lilium orientalis / Lilium candidum',
    family: 'Liliaceae',
    colors: ['Stargazer Raspberry', 'Porcelain White', 'Tiger Gold'],
    colorDisplay: 'Porcelain White, Raspberry Stargazer, Tiger Gold',
    season: 'Early Summer to Mid Summer',
    categories: ['Decorative', 'Medicinal', 'National/Traditional', 'Seasonal'],
    shortDescription: 'Regal, stately trumpet blossoms boasting intoxicating perfume and dramatic protruding stamens.',
    fullDescription: 'True lilies of the genus Lilium represent the epitome of botanical grandeur. With dramatic funnel or trumpet-shaped flowers borne on tall, unbranched leafy stems, lilies captivate with prominent nectar-bearing anthers and an opulent fragrance that intensifies at night. Oriental hybrids like the Stargazer provide dramatic focal impact in both formal estate landscapes and high-end florist arrangements.',
    image: '/src/assets/images/flower_lily_pure_1791048651763.jpg',
    symbolism: 'Purity, innocence, majesty, rebirth, motherhood, and transcendent devotion.',
    nativeRegion: 'Temperate and subtropical zones of North America, Europe, and Asia.',
    medicinalUses: [
      'Lilium brownii and candidum bulbs have been steamed in Asian traditional medicine for soothing bronchial dryness.',
      'Petal oils infused with almond oil soothe chapped skin and calm topical irritation.',
      'Polysaccharides from edible lily scales demonstrate mild immune-supportive properties in dietary soups.'
    ],
    culturalImportance: [
      'Associated with the Virgin Mary in Christian art (the white Madonna Lily symbolizing purity).',
      'The Fleur-de-lis heraldic emblem served as the sovereign insignia of the French monarchy for centuries.',
      'Favored funeral and celebration flower symbolizing the restored soul and remembrance.'
    ],
    environmentalBenefits: [
      'High-nectar yields feed large pollinating sphinx moths, bumblebees, and hummingbirds.',
      'Deep root systems improve soil aeration and microbiological subterranean stability.',
      'Enhances multi-tier ecological planting layers beneath deciduous woodland trees.'
    ],
    interestingFacts: [
      'Despite sharing the common name, daylilies, calla lilies, and water lilies are not true botanical lilies.',
      'Pollen grains on lily anthers contain an oily carotenoid pigment that creates permanent fabric dyes.',
      'Lilies are toxic to domestic felines, so cat owners should display them safely outdoors out of pet reach.'
    ],
    careGuide: {
      watering: 'Provide 1 inch of water weekly, keeping soil consistently moist but never soggy.',
      sunlight: 'Thrives with "head in the sun, feet in the shade"—full top sun with shaded, cool ground.',
      soil: 'Rich, organic, acid-to-neutral soil that drains rapidly. Standing water will decay the scaled bulb.',
      fertilizer: 'High-potassium tomato or bulb fertilizer applied every month from spring emergence until post-bloom.',
      temperature: '18°C to 25°C (64°F–77°F). Cold-hardy perennials that stay planted year-round in zones 4–9.',
      difficulty: 'Moderate',
      stepByStepTips: [
        'Plant fleshy scaled bulbs as soon as acquired in spring or autumn, as they do not have a protective papery tunic.',
        'Surround the base of lily stems with low-growing groundcover plants or mulch to shade the soil root zone.',
        'Gently snip stamens with a small scissor when flowers open to prevent orange pollen stains on white petals.',
        'Do not prune green stems after flowering; let leaves feed the bulb until autumn frost triggers natural dieback.'
      ]
    },
    theme: {
      primaryHex: '#C026D3',
      name: 'Stargazer Magenta',
      badgeBg: 'bg-fuchsia-100',
      badgeText: 'text-fuchsia-800',
      badgeBorder: 'border-fuchsia-200',
      accentText: 'text-fuchsia-700',
      buttonBg: 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-fuchsia-200',
      cardBorderHover: 'hover:border-fuchsia-400 hover:shadow-fuchsia-200/80',
      cardGlow: 'from-fuchsia-500/15 via-fuchsia-500/5 to-transparent',
      accentBgLight: 'bg-fuchsia-50',
      tagColor: 'Magenta & White'
    }
  },
  {
    id: 'orchid',
    name: 'Orchid',
    scientificName: 'Phalaenopsis amabilis / Orchidaceae',
    family: 'Orchidaceae',
    colors: ['Amethyst Purple', 'Royal Violet', 'Snow White', 'Fuchsia'],
    colorDisplay: 'Magenta Violet, Royal Purple, Snow White',
    season: 'Late Winter to Spring (Blooms last 2–3 months)',
    categories: ['Decorative', 'Medicinal', 'National/Traditional'],
    shortDescription: 'Exquisite, highly evolved epiphytes displaying bilateral floral symmetry and sculptural elegance.',
    fullDescription: 'Orchidaceae is one of the two largest families of flowering plants on Earth, encompassing over 28,000 accepted species. Known for their intricate bilateral symmetry (zygomorphism) and modified lip (labellum), orchids are master evolutionary strategists. Many, such as the beloved moth orchid (Phalaenopsis), are epiphytic, growing anchored to tree barks in tropical rainforests where they absorb humidity and nutrients from ambient air.',
    image: '/src/assets/images/flower_orchid_exotic_1791048663797.jpg',
    symbolism: 'Exotic beauty, refined elegance, rare luxury, fertility, strength, and thoughtful refinement.',
    nativeRegion: 'Tropical rainforest canopies across Southeast Asia, Central America, and South America.',
    medicinalUses: [
      'Vanilla flavoring is harvested from the cured seed pods of the Vanilla planifolia orchid.',
      'Dendrobium orchids are prized in Traditional Chinese Medicine (Shi Hu) to replenish body fluids and yin energy.',
      'Orchid flower extracts provide botanical mucilage that hydrates and conditions cosmetic skincare serums.'
    ],
    culturalImportance: [
      'National flower of Singapore (Vanda Miss Joaquim), Venezuela, Colombia, and Guatemala.',
      'Revered by Confucius as a symbol of scholarly virtue and noble moral character.',
      'Subject of Victorian "Orchidelirium," where collectors mounted global expeditions to find uncatalogued specimens.'
    ],
    environmentalBenefits: [
      'Pivotal indicator species whose health mirrors the intact biodiversity of tropical rainforest canopies.',
      'Engages in complex symbiotic relationships with subterranean mycorrhizal fungi to germinate seeds.',
      'Provides exclusive nectar rewards for specialized Euglossine orchid bees.'
    ],
    interestingFacts: [
      'Orchid seeds are as tiny as dust particles, lacking endosperm and carrying millions of seeds per single pod.',
      'Some orchids practice sexual deception, mimicking female wasps in scent and appearance to ensure cross-pollination.',
      'Individual blooms of Phalaenopsis moth orchids can remain pristine and open on the stem for up to three months.'
    ],
    careGuide: {
      watering: 'Water thoroughly once weekly when clear roots turn silver-gray; allow all excess water to drain out.',
      sunlight: 'Bright indirect light (east or shaded south window). Avoid harsh direct sun which burns delicate leaves.',
      soil: 'Never use standard potting soil! Use chunky pine bark, sphagnum moss, and perlite orchid mix.',
      fertilizer: 'Diluted orchid fertilizer applied "weakly, weekly" (1/4 recommended strength) 3 out of 4 weeks.',
      temperature: '18°C to 28°C (65°F–82°F) with a 5°C night temperature drop to induce brand-new flower spikes.',
      difficulty: 'Moderate',
      stepByStepTips: [
        'Plant in a transparent plastic pot with ample drainage slots so roots can perform photosynthesis.',
        'Never let the central orchid crown retain sitting water, as crown rot can destroy the plant in days.',
        'When the last flower drops, trim the flower spike just above an active dormant node to stimulate a secondary branch.',
        'Maintain household humidity around 50–60% using a pebble tray with water beneath the pot.'
      ]
    },
    theme: {
      primaryHex: '#7C3AED',
      name: 'Amethyst Violet',
      badgeBg: 'bg-purple-100',
      badgeText: 'text-purple-800',
      badgeBorder: 'border-purple-200',
      accentText: 'text-purple-700',
      buttonBg: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-200',
      cardBorderHover: 'hover:border-purple-400 hover:shadow-purple-200/80',
      cardGlow: 'from-purple-500/15 via-purple-500/5 to-transparent',
      accentBgLight: 'bg-purple-50',
      tagColor: 'Amethyst Violet'
    }
  }
];

export const FLOWER_CATEGORIES = [
  {
    id: 'Seasonal',
    title: 'Seasonal Flowers',
    tagline: 'Nature’s Living Calendar',
    description: 'Blossoms that flourish in sync with rhythmic Earth seasons—from springtime tulips to summer sunflowers.',
    icon: 'Calendar',
    flowersCount: 5,
    highlights: ['Spring Awakening', 'Summer Heat Bloomers', 'Autumn Responders', 'Frost Resistant'],
    bgGradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/5',
    borderColor: 'border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
    accentText: 'text-amber-700',
    buttonColor: 'group-hover:bg-amber-600 group-hover:border-amber-600'
  },
  {
    id: 'Medicinal',
    title: 'Medicinal Flowers',
    tagline: 'Ancient Healing Wisdom',
    description: 'Herbal treasures brimming with therapeutic antioxidants, flavonoids, and soothing botanic compounds.',
    icon: 'HeartPulse',
    flowersCount: 5,
    highlights: ['Aromatherapeutic Oils', 'Skin Healing Salves', 'Digestive Teas', 'Immune Tonics'],
    bgGradient: 'from-emerald-500/20 via-teal-500/10 to-emerald-500/5',
    borderColor: 'border-emerald-200',
    iconBg: 'bg-emerald-100 text-emerald-700',
    accentText: 'text-emerald-700',
    buttonColor: 'group-hover:bg-emerald-600 group-hover:border-emerald-600'
  },
  {
    id: 'Decorative',
    title: 'Decorative Flowers',
    tagline: 'Artistic Landscape Elegance',
    description: 'Prized for magnificent petal architecture, vibrant palette harmonies, and celebratory aesthetic displays.',
    icon: 'Sparkles',
    flowersCount: 7,
    highlights: ['Fine Art Bouquets', 'Architectural Borders', 'Floral Installations', 'Long Vase Life'],
    bgGradient: 'from-pink-500/20 via-rose-500/10 to-fuchsia-500/5',
    borderColor: 'border-pink-200',
    iconBg: 'bg-pink-100 text-pink-700',
    accentText: 'text-pink-700',
    buttonColor: 'group-hover:bg-pink-600 group-hover:border-pink-600'
  },
  {
    id: 'National/Traditional',
    title: 'National & Traditional Flowers',
    tagline: 'Cultural Heritage & Sacred Lore',
    description: 'Species carrying profound historical heritage, spiritual symbolism, and national sovereignty identities.',
    icon: 'Crown',
    flowersCount: 6,
    highlights: ['Sacred Temple Emblems', 'State Heraldry & Flags', 'Folk Festivities', 'Immortalized Art'],
    bgGradient: 'from-purple-500/20 via-indigo-500/10 to-blue-500/5',
    borderColor: 'border-purple-200',
    iconBg: 'bg-purple-100 text-purple-700',
    accentText: 'text-purple-700',
    buttonColor: 'group-hover:bg-purple-600 group-hover:border-purple-600'
  }
];

export const COLOR_PALETTE_FILTERS = [
  { label: 'All Colours', value: 'all', hex: '#64748B', bgClass: 'bg-stone-500' },
  { label: 'Rose Red', value: 'red', hex: '#E11D48', bgClass: 'bg-rose-600' },
  { label: 'Lotus Pink', value: 'pink', hex: '#EC4899', bgClass: 'bg-pink-500' },
  { label: 'Sun Gold', value: 'yellow', hex: '#EAB308', bgClass: 'bg-amber-500' },
  { label: 'Saffron Orange', value: 'orange', hex: '#EA580C', bgClass: 'bg-orange-500' },
  { label: 'Emerald Jade', value: 'green', hex: '#059669', bgClass: 'bg-emerald-600' },
  { label: 'Royal Violet', value: 'purple', hex: '#7C3AED', bgClass: 'bg-purple-600' },
  { label: 'Pure White', value: 'white', hex: '#E2E8F0', bgClass: 'bg-slate-300' }
];
