import { TagType } from '@/components/TagChip';

export interface DestinationSnapshot {
  duration: string;
  budget: string;
  bestSeason: string;
  difficulty: string;
  internet: string;
}

export interface TransportOption {
  type: 'air' | 'train' | 'bus';
  title: string;
  description: string;
  details: string;
}

export interface AccommodationOption {
  type: 'homestay' | 'guesthouse' | 'hotel' | 'airbnb';
  title: string;
  priceRange: string;
  description: string;
}

export interface LocalTransportOption {
  type: 'bike' | 'cab';
  title: string;
  description: string;
  details: string[];
}

export interface BudgetItem {
  label: string;
  amount: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type MacroRegion = 'north' | 'south' | 'east' | 'west' | 'northeast';

export interface Destination {
  slug: string;
  name: string;
  region: string;
  macroRegion: MacroRegion;
  budget: string;
  category: 'budget' | 'mid' | 'premium';
  image: string;
  description: string;
  tags: TagType[];
  isFeatured?: boolean;
  
  // Detail page fields
  tagline: string;
  heroImage: string;
  snapshot: DestinationSnapshot;
  detailedDescription: string;
  transport: TransportOption[];
  accommodation: AccommodationOption[];
  localTransport: LocalTransportOption[];
  budgetBreakdown: BudgetItem[];
  budgetTotal: number;
  faqs: FAQ[];
}

export const destinations: Destination[] = [
  {
    slug: 'pulga',
    name: 'Pulga',
    region: 'Himachal Pradesh',
    macroRegion: 'north',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    description: 'Hidden Himalayan village with fairy forest trails',
    tags: ['Trek', 'Nature', 'Camping'],
    isFeatured: true,
    tagline: 'Hidden Himalayan village with fairy forest trails',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹8,000 - ₹12,000',
      bestSeason: 'March to June, September to November',
      difficulty: 'Easy to Moderate',
      internet: 'Limited (BSNL works)',
    },
    detailedDescription: 'Pulga is a tiny hamlet in the Parvati Valley, known for its magical fairy forest trails and peaceful atmosphere. Away from the crowds of Kasol, this hidden gem offers authentic mountain village life with stunning views of snow-capped peaks.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Bhuntar (Kullu-Manali Airport) - 50 km',
        details: 'From airport, take a taxi to Barshaini (₹1,500-2,000) or bus to Bhuntar town and then local transport.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Joginder Nagar - 144 km',
        details: 'Better option: Chandigarh Railway Station (300 km), then take bus to Bhuntar/Kasol.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Direct buses from Delhi to Bhuntar/Kasol (₹800-1,200). From Kasol, local bus or taxi to Barshaini, then 30-min trek to Pulga.',
        details: 'Overnight buses available from major cities.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Budget Homestays',
        priceRange: '₹500-800 per night',
        description: 'Basic rooms with shared bathrooms, home-cooked meals available. Perfect for experiencing authentic village life and connecting with local families.',
      },
      {
        type: 'guesthouse',
        title: 'Guesthouses',
        priceRange: '₹1,000-1,500 per night',
        description: 'Private rooms with attached bathrooms, mountain views, and basic amenities. A comfortable middle-ground option.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹2,000-4,000 per night',
        description: 'While Pulga itself has limited hotel options, nearby Kasol and Manikaran offer comfortable hotels with modern amenities, hot water, WiFi, and in-house restaurants.',
      },
      {
        type: 'airbnb',
        title: 'Airbnb',
        priceRange: '₹1,500-3,500 per night',
        description: 'Unique stays including cozy cottages, traditional Himachali homes, and private apartments. Great for longer stays or groups seeking privacy and local character.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Explore the Parvati Valley at your own pace. Bikes available in Kasol and Bhuntar starting from ₹500-1,200 per day depending on the model. Royal Enfield and scooters are popular choices for the mountain roads.',
        details: [
          'Valid driving license required',
          'Helmets provided with rental',
          'Fuel not included in rental price',
          'Security deposit typically ₹2,000-5,000',
        ],
      },
      {
        type: 'cab',
        title: 'Cab / Taxi',
        description: 'Local taxis and shared cabs are readily available for point-to-point travel. Shared taxis from Kasol to Barshaini cost ₹50-100 per person. Private taxis for day trips range from ₹1,500-3,000 depending on distance.',
        details: [
          'Shared taxis: Most economical option',
          'Private cabs: Book through your accommodation',
          'Negotiate fares before starting journey',
          'Limited availability after sunset',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Delhi-Pulga-Delhi)', amount: 3000 },
      { label: 'Accommodation (3 nights)', amount: 2400 },
      { label: 'Food (3 days)', amount: 1800 },
      { label: 'Local transport & activities', amount: 1000 },
      { label: 'Miscellaneous', amount: 800 },
    ],
    budgetTotal: 9000,
    faqs: [
      {
        question: 'Is Pulga safe for solo travelers?',
        answer: 'Yes, Pulga is very safe for solo travelers. The village is small and locals are friendly. However, always inform someone about your trekking plans.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'March to June for pleasant weather and blooming flowers. September to November for clear skies and autumn colors. Avoid monsoon (July-August) due to landslides.',
      },
      {
        question: 'Do I need permits?',
        answer: 'No special permits are required for Pulga. However, if you plan to trek to Kheerganga or beyond, check current regulations.',
      },
      {
        question: 'Is there mobile network?',
        answer: 'BSNL works reasonably well. Airtel and Jio have limited or no connectivity. Carry a BSNL SIM if you need reliable connectivity.',
      },
    ],
  },
  {
    slug: 'gurez',
    name: 'Gurez Valley',
    region: 'Kashmir',
    macroRegion: 'north',
    budget: '₹15K-20K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'Untouched valley near the LoC with pristine beauty',
    tags: ['Valley', 'Trek'],
    isFeatured: true,
    tagline: 'Untouched valley near the LoC with pristine beauty',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    snapshot: {
      duration: '4-5 days',
      budget: '₹15,000 - ₹20,000',
      bestSeason: 'June to September',
      difficulty: 'Moderate',
      internet: 'Very Limited (BSNL only)',
    },
    detailedDescription: 'Gurez Valley is one of the most remote and beautiful valleys in Kashmir, located near the Line of Control. With its pristine landscapes, traditional wooden houses, and the Kishanganga River flowing through, Gurez offers an authentic Himalayan experience away from tourist crowds.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Srinagar International Airport - 123 km',
        details: 'From Srinagar, hire a private taxi (₹4,000-6,000) or take shared taxi to Bandipora, then local transport to Gurez.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Jammu Tawi - 400 km',
        details: 'From Jammu, take a bus or taxi to Srinagar (₹500-1,500), then proceed to Gurez.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Regular buses from Srinagar to Bandipora (₹100-200). From Bandipora, shared taxis or local buses to Gurez (₹300-500).',
        details: 'Road opens only from June to October. Check road conditions before travel.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Local Homestays',
        priceRange: '₹800-1,200 per night',
        description: 'Stay with local Dard-Shin families in traditional wooden houses. Experience authentic Kashmiri hospitality with home-cooked meals.',
      },
      {
        type: 'guesthouse',
        title: 'Guesthouses',
        priceRange: '₹1,500-2,500 per night',
        description: 'Basic guesthouses with essential amenities. Limited options available, advance booking recommended.',
      },
      {
        type: 'hotel',
        title: 'Government Guesthouses',
        priceRange: '₹2,000-3,000 per night',
        description: 'PWD and Forest Department guesthouses offer clean rooms with basic facilities. Prior permission may be required.',
      },
      {
        type: 'airbnb',
        title: 'Camping',
        priceRange: '₹1,000-2,000 per night',
        description: 'Organized camping sites near the river with tents, sleeping bags, and meals included. Perfect for adventure seekers.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes can be rented in Srinagar for ₹800-1,500 per day. The ride to Gurez is scenic but challenging with narrow mountain roads.',
        details: [
          'Experienced riders only due to difficult terrain',
          'Carry spare fuel as petrol pumps are scarce',
          'Check weather and road conditions',
          'Permits may be required for certain areas',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Shared taxis within Gurez Valley cost ₹50-150 per person. Private taxis for sightseeing available at ₹2,000-3,000 per day.',
        details: [
          'Book through your homestay or guesthouse',
          'Limited vehicles available',
          'Negotiate rates in advance',
          'Drivers know the best viewpoints',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Delhi-Gurez-Delhi)', amount: 6000 },
      { label: 'Accommodation (4 nights)', amount: 4000 },
      { label: 'Food (4 days)', amount: 2400 },
      { label: 'Local transport & sightseeing', amount: 2000 },
      { label: 'Permits & miscellaneous', amount: 1600 },
    ],
    budgetTotal: 16000,
    faqs: [
      {
        question: 'Do I need special permits for Gurez?',
        answer: 'Indian citizens do not need permits, but carry a valid ID. Foreign nationals need special permits from the Ministry of Home Affairs.',
      },
      {
        question: 'Is it safe to visit Gurez?',
        answer: 'Yes, Gurez is safe for tourists. However, it is near the LoC, so follow local guidelines and avoid restricted areas.',
      },
      {
        question: 'When is the valley accessible?',
        answer: 'Gurez is accessible only from June to October. Heavy snowfall blocks the roads during winter months.',
      },
      {
        question: 'What should I pack?',
        answer: 'Warm clothes even in summer, rain gear, sturdy shoes, basic medicines, and power banks as electricity can be erratic.',
      },
    ],
  },
  {
    slug: 'tirthan',
    name: 'Tirthan Valley',
    region: 'Himachal Pradesh',
    macroRegion: 'north',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    description: 'Crystal clear river and offbeat trekking routes',
    tags: ['Nature', 'Trek', 'Camping'],
    isFeatured: true,
    tagline: 'Crystal clear river and offbeat trekking routes',
    heroImage: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹10,000 - ₹15,000',
      bestSeason: 'March to June, September to November',
      difficulty: 'Easy to Moderate',
      internet: 'Moderate (Most networks work)',
    },
    detailedDescription: 'Tirthan Valley is a serene paradise in the Great Himalayan National Park region. Known for its crystal-clear Tirthan River, trout fishing, and pristine forests, this valley offers the perfect escape for nature lovers and adventure enthusiasts seeking tranquility.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Bhuntar Airport - 50 km',
        details: 'From Bhuntar, hire a taxi to Tirthan Valley (₹1,200-1,800) or take a bus to Aut and then local transport.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Joginder Nagar - 125 km',
        details: 'Better option: Chandigarh Railway Station (270 km). From Chandigarh, take a bus or taxi to Aut/Banjar.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Direct buses from Delhi to Aut (₹600-1,000). From Aut, local buses or shared taxis to Gushaini/Nagini villages in Tirthan Valley (₹50-100).',
        details: 'HRTC buses run regularly from major cities.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Riverside Homestays',
        priceRange: '₹1,000-1,800 per night',
        description: 'Charming homestays along the Tirthan River offering home-cooked Himachali meals and warm hospitality. Many have riverside seating areas.',
      },
      {
        type: 'guesthouse',
        title: 'Eco Guesthouses',
        priceRange: '₹1,500-2,500 per night',
        description: 'Eco-friendly guesthouses with comfortable rooms, modern bathrooms, and beautiful valley views. Some offer trout fishing experiences.',
      },
      {
        type: 'hotel',
        title: 'Boutique Hotels',
        priceRange: '₹3,000-5,000 per night',
        description: 'Upscale boutique properties with premium amenities, in-house restaurants, and organized activities like trekking and fishing.',
      },
      {
        type: 'airbnb',
        title: 'Cottages & Cabins',
        priceRange: '₹2,000-4,000 per night',
        description: 'Private wooden cottages and stone cabins nestled in the forest. Ideal for couples and families seeking privacy and nature immersion.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Aut and nearby towns for ₹600-1,000 per day. Perfect for exploring the valley villages and scenic spots at your own pace.',
        details: [
          'Roads are well-maintained but narrow',
          'Helmets mandatory',
          'Fuel stations available in Aut',
          'Ideal for experienced riders',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Shared taxis between villages cost ₹30-80 per person. Private taxis for day trips available at ₹1,500-2,500.',
        details: [
          'Book through your accommodation',
          'Drivers familiar with trekking points',
          'Advance booking recommended in peak season',
          'Negotiate for multi-day packages',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Delhi-Tirthan-Delhi)', amount: 3500 },
      { label: 'Accommodation (3 nights)', amount: 4500 },
      { label: 'Food (3 days)', amount: 2100 },
      { label: 'Activities (fishing, trekking)', amount: 1500 },
      { label: 'Miscellaneous', amount: 900 },
    ],
    budgetTotal: 12500,
    faqs: [
      {
        question: 'What activities can I do in Tirthan Valley?',
        answer: 'Trout fishing, trekking to Serolsar Lake and Jalori Pass, bird watching, riverside camping, and exploring Great Himalayan National Park.',
      },
      {
        question: 'Is fishing allowed in Tirthan River?',
        answer: 'Yes, catch-and-release trout fishing is allowed with permits. Many homestays arrange fishing equipment and permits.',
      },
      {
        question: 'Do I need permits for trekking?',
        answer: 'For treks within Great Himalayan National Park, you need entry permits (₹200-500). Your guide or homestay can arrange these.',
      },
      {
        question: 'Is Tirthan Valley suitable for families?',
        answer: 'Absolutely! The valley is peaceful, safe, and offers easy nature walks suitable for all ages. Many homestays are family-friendly.',
      },
    ],
  },
  {
    slug: 'majuli',
    name: 'Majuli',
    region: 'Assam',
    macroRegion: 'northeast',
    budget: '₹12K-18K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    description: "World's largest river island with unique culture",
    tags: ['Nature', 'Beach'],
    isFeatured: true,
    tagline: "World's largest river island with unique Sattriya culture",
    heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹12,000 - ₹18,000',
      bestSeason: 'October to March',
      difficulty: 'Easy',
      internet: 'Limited (BSNL, Airtel work)',
    },
    detailedDescription: "Majuli is the world's largest river island on the Brahmaputra River in Assam. Famous for its Vaishnavite monasteries (Satras), traditional mask-making, pottery, and vibrant Mishing tribal culture, Majuli offers a unique cultural and natural experience.",
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Jorhat Airport - 20 km from ferry point',
        details: 'From Jorhat, take a taxi to Neemati Ghat (₹400-600), then ferry to Majuli (₹15-20, 1-2 hours).',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Jorhat Town - 12 km from ferry',
        details: 'From Jorhat station, auto-rickshaw or taxi to Neemati Ghat (₹200-400), then ferry to Majuli.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Guwahati to Jorhat (₹400-600, 7-8 hours). From Jorhat, local transport to Neemati Ghat, then ferry.',
        details: 'Ferry timings: Multiple trips daily from 8 AM to 4 PM. Check schedule in advance.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Tribal Homestays',
        priceRange: '₹600-1,000 per night',
        description: 'Stay with Mishing tribal families in traditional bamboo houses on stilts. Experience authentic island life with home-cooked Assamese meals.',
      },
      {
        type: 'guesthouse',
        title: 'Eco Lodges',
        priceRange: '₹1,200-2,000 per night',
        description: 'Eco-friendly lodges with basic amenities, clean rooms, and cultural programs. Some offer pottery and mask-making workshops.',
      },
      {
        type: 'hotel',
        title: 'Island Resorts',
        priceRange: '₹2,500-4,000 per night',
        description: 'Comfortable resorts with modern facilities, river views, and organized tours to Satras and villages.',
      },
      {
        type: 'airbnb',
        title: 'Cottage Stays',
        priceRange: '₹1,500-3,000 per night',
        description: 'Private cottages with scenic river views. Ideal for those seeking peace and immersion in island culture.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bicycles and motorcycles available for rent at ₹200-600 per day. Perfect for exploring the flat island terrain and visiting multiple Satras.',
        details: [
          'Flat terrain, easy for all riders',
          'Bicycles ideal for short distances',
          'Motorcycles for covering more ground',
          'Limited fuel stations, fill up in advance',
        ],
      },
      {
        type: 'cab',
        title: 'Auto-rickshaws & Taxis',
        description: 'Auto-rickshaws for short trips (₹50-150). Private taxis for full-day sightseeing (₹1,500-2,500).',
        details: [
          'Book through your homestay',
          'Drivers know all Satras and villages',
          'Negotiate for multi-day packages',
          'Limited vehicles, book in advance',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Guwahati-Majuli-Guwahati)', amount: 4000 },
      { label: 'Accommodation (3 nights)', amount: 2400 },
      { label: 'Food (3 days)', amount: 1800 },
      { label: 'Local transport & activities', amount: 1500 },
      { label: 'Miscellaneous', amount: 1300 },
    ],
    budgetTotal: 11000,
    faqs: [
      {
        question: 'What is the best time to visit Majuli?',
        answer: 'October to March is ideal. Avoid monsoon (June-September) as the island faces severe flooding and ferry services may be disrupted.',
      },
      {
        question: 'What can I do in Majuli?',
        answer: 'Visit Vaishnavite Satras, watch traditional mask-making and pottery, explore Mishing villages, enjoy river sunsets, and experience Sattriya dance performances.',
      },
      {
        question: 'Is Majuli safe for solo travelers?',
        answer: 'Yes, Majuli is very safe. The local community is welcoming and helpful. However, respect local customs and traditions.',
      },
      {
        question: 'Do I need permits?',
        answer: 'No special permits required for Indian citizens. Foreign nationals should check current regulations for Assam.',
      },
    ],
  },
  {
    slug: 'dzukou',
    name: 'Dzukou Valley',
    region: 'Nagaland',
    macroRegion: 'northeast',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'Valley of flowers with stunning seasonal blooms',
    tags: ['Trek', 'Nature', 'Camping'],
    isFeatured: true,
    tagline: 'Valley of flowers with stunning seasonal blooms',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    snapshot: {
      duration: '2-3 days',
      budget: '₹10,000 - ₹15,000',
      bestSeason: 'June to September (flowers), October to February (snow)',
      difficulty: 'Moderate',
      internet: 'No connectivity',
    },
    detailedDescription: 'Dzukou Valley, straddling Nagaland and Manipur, is a pristine valley known for its seasonal flowers, rolling hills, and untouched natural beauty. Often called the "Valley of Flowers of the Northeast," it offers a challenging yet rewarding trek with breathtaking landscapes.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Dimapur Airport - 75 km from Kohima',
        details: 'From Dimapur, take a taxi or bus to Kohima (₹500-1,000, 2-3 hours). From Kohima, hire a taxi to Viswema village (₹800-1,200).',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Dimapur - 75 km from Kohima',
        details: 'From Dimapur station, buses and shared taxis to Kohima available (₹200-400). Then proceed to Viswema village.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Regular buses from Guwahati to Kohima (₹600-900, 10-12 hours). From Kohima, local transport to Viswema village, the trek starting point.',
        details: 'Trek from Viswema to Dzukou Valley takes 3-4 hours. Camping at the valley is mandatory.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Viswema Homestays',
        priceRange: '₹500-800 per night',
        description: 'Stay in Viswema village before and after the trek. Experience Naga hospitality with traditional meals and warm hosts.',
      },
      {
        type: 'guesthouse',
        title: 'Kohima Guesthouses',
        priceRange: '₹1,000-1,800 per night',
        description: 'Comfortable guesthouses in Kohima with modern amenities. Good base for acclimatization before the trek.',
      },
      {
        type: 'hotel',
        title: 'Kohima Hotels',
        priceRange: '₹2,000-3,500 per night',
        description: 'Hotels in Kohima with hot water, WiFi, and restaurants. Ideal for pre and post-trek relaxation.',
      },
      {
        type: 'airbnb',
        title: 'Valley Camping',
        priceRange: '₹500-1,000 per night',
        description: 'Camping at Dzukou Valley base camp with tents and sleeping bags. Basic facilities available. Bring your own camping gear or rent locally.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Kohima for ₹700-1,200 per day. Ride to Viswema village, but the valley itself requires trekking.',
        details: [
          'Mountain roads, experienced riders only',
          'Helmets mandatory',
          'Limited fuel stations',
          'Park bike at Viswema before trek',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Taxis from Kohima to Viswema cost ₹800-1,200. Arrange return pickup in advance as vehicles are limited.',
        details: [
          'Book through your hotel or homestay',
          'Negotiate round-trip rates',
          'Drivers wait at Viswema for return',
          'Shared taxis available but less frequent',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Guwahati-Dzukou-Guwahati)', amount: 4500 },
      { label: 'Accommodation (2 nights)', amount: 2000 },
      { label: 'Food (2 days)', amount: 1200 },
      { label: 'Trek permits & camping', amount: 1000 },
      { label: 'Miscellaneous', amount: 1300 },
    ],
    budgetTotal: 10000,
    faqs: [
      {
        question: 'Do I need permits for Dzukou Valley?',
        answer: 'Yes, trekking permits are required. Indian citizens can obtain permits at Viswema village (₹50-100). Foreign nationals need Inner Line Permits for Nagaland.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'June to September for flowers (especially lilies in July). October to February for snow-covered landscapes. Avoid monsoon peak (July-August) due to leeches.',
      },
      {
        question: 'Is the trek difficult?',
        answer: 'Moderate difficulty. The trail is steep in sections but well-marked. Basic fitness required. Altitude is around 2,400m, so acclimatize in Kohima.',
      },
      {
        question: 'What should I pack?',
        answer: 'Trekking shoes, warm clothes, rain gear, sleeping bag, torch, basic medicines, energy bars, and water bottles. Carry all trash back.',
      },
    ],
  },
  {
    slug: 'gandikota',
    name: 'Gandikota',
    region: 'Andhra Pradesh',
    macroRegion: 'south',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    description: "India's Grand Canyon with stunning gorge views",
    tags: ['Nature', 'Trek'],
    isFeatured: true,
    tagline: "India's Grand Canyon with stunning gorge views",
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80',
    snapshot: {
      duration: '2-3 days',
      budget: '₹8,000 - ₹12,000',
      bestSeason: 'October to March',
      difficulty: 'Easy',
      internet: 'Limited (BSNL, Airtel work)',
    },
    detailedDescription: 'Gandikota, often called the "Grand Canyon of India," is a hidden gem in Andhra Pradesh. The Pennar River has carved a stunning gorge through the Erramala hills, creating dramatic red sandstone cliffs. The 13th-century fort offers breathtaking sunrise and sunset views.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Tirupati Airport - 250 km',
        details: 'From Tirupati, hire a taxi to Gandikota (₹3,500-5,000) or take a bus to Kadapa, then local transport.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Muddanuru - 18 km',
        details: 'From Muddanuru, auto-rickshaws or taxis to Gandikota (₹300-500). Alternatively, trains to Kadapa (60 km), then bus or taxi.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Bangalore to Kadapa (₹600-900, 8-9 hours). From Kadapa, local buses to Gandikota (₹50-100, 2 hours).',
        details: 'Limited direct buses. Best to reach Kadapa first, then take local transport.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Village Homestays',
        priceRange: '₹500-800 per night',
        description: 'Basic homestays in Gandikota village with home-cooked Andhra meals. Simple rooms with shared facilities.',
      },
      {
        type: 'guesthouse',
        title: 'Budget Guesthouses',
        priceRange: '₹800-1,200 per night',
        description: 'Small guesthouses near the fort with basic amenities. Some offer gorge views from the terrace.',
      },
      {
        type: 'hotel',
        title: 'Haritha Hotel (APTDC)',
        priceRange: '₹1,500-2,500 per night',
        description: 'Government-run hotel with clean rooms, restaurant, and stunning gorge views. Advance booking recommended.',
      },
      {
        type: 'airbnb',
        title: 'Camping',
        priceRange: '₹800-1,500 per night',
        description: 'Organized camping near the gorge with tents, sleeping bags, and meals. Perfect for stargazing and sunrise views.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes can be rented in Kadapa for ₹500-800 per day. The ride to Gandikota is scenic with good roads.',
        details: [
          'Well-maintained roads',
          'Helmets mandatory',
          'Fuel available in Kadapa',
          'Ideal for exploring nearby villages',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Auto-rickshaws within Gandikota village (₹50-100). Private taxis for day trips from Kadapa (₹1,500-2,500).',
        details: [
          'Book through your accommodation',
          'Limited vehicles in the village',
          'Negotiate rates in advance',
          'Drivers know best viewpoints',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Bangalore-Gandikota-Bangalore)', amount: 3000 },
      { label: 'Accommodation (2 nights)', amount: 2000 },
      { label: 'Food (2 days)', amount: 1200 },
      { label: 'Local transport & entry fees', amount: 800 },
      { label: 'Miscellaneous', amount: 1000 },
    ],
    budgetTotal: 8000,
    faqs: [
      {
        question: 'What is the best time to visit Gandikota?',
        answer: 'October to March is ideal. Summers (April-June) are extremely hot. Monsoon (July-September) brings greenery but can be humid.',
      },
      {
        question: 'What can I do in Gandikota?',
        answer: 'Explore the fort, watch sunrise/sunset at the gorge, visit Belum Caves (60 km away), trek along the canyon, and enjoy stargazing at night.',
      },
      {
        question: 'Is Gandikota safe for solo travelers?',
        answer: 'Yes, Gandikota is safe. The village is small and locals are friendly. However, be cautious near the gorge edges, especially at night.',
      },
      {
        question: 'Are there entry fees?',
        answer: 'Minimal entry fee for the fort (₹10-20). Camping sites may charge separately. No fee for viewing the gorge.',
      },
    ],
  },
  {
    slug: 'ziro',
    name: 'Ziro Valley',
    region: 'Arunachal Pradesh',
    macroRegion: 'northeast',
    budget: '₹15K-20K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'UNESCO heritage site with Apatani tribal culture',
    tags: ['Nature', 'Trek'],
    isFeatured: true,
    tagline: 'UNESCO heritage site with Apatani tribal culture',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    snapshot: {
      duration: '4-5 days',
      budget: '₹15,000 - ₹20,000',
      bestSeason: 'March to October',
      difficulty: 'Easy to Moderate',
      internet: 'Limited (BSNL works)',
    },
    detailedDescription: 'Ziro Valley in Arunachal Pradesh is a UNESCO World Heritage Site known for its stunning rice fields, pine-covered hills, and the unique Apatani tribal culture. The valley offers a perfect blend of natural beauty, cultural immersion, and the famous Ziro Music Festival.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Lilabari Airport (North Lakhimpur) - 100 km',
        details: 'From Lilabari, hire a taxi to Ziro (₹2,500-3,500, 3-4 hours). Shared taxis also available (₹500-800 per person).',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Naharlagun - 115 km',
        details: 'From Naharlagun, buses or shared taxis to Ziro (₹300-600, 4-5 hours). Private taxis cost ₹2,000-3,000.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Guwahati to Itanagar/Naharlagun (₹500-800, 10-12 hours). From there, local buses or taxis to Ziro.',
        details: 'Road conditions can be challenging during monsoon. Check weather before travel.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Apatani Homestays',
        priceRange: '₹800-1,500 per night',
        description: 'Stay with Apatani families in traditional bamboo houses. Experience authentic tribal culture with home-cooked meals and local rice beer.',
      },
      {
        type: 'guesthouse',
        title: 'Valley Guesthouses',
        priceRange: '₹1,200-2,000 per night',
        description: 'Comfortable guesthouses with valley views, clean rooms, and basic amenities. Some offer cultural programs.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹2,000-3,500 per night',
        description: 'Small hotels in Ziro town with modern facilities, hot water, and restaurants. Limited options, book in advance.',
      },
      {
        type: 'airbnb',
        title: 'Eco Cottages',
        priceRange: '₹2,500-4,500 per night',
        description: 'Eco-friendly cottages amidst rice fields with stunning valley views. Ideal for nature lovers and photographers.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Ziro for ₹600-1,000 per day. Perfect for exploring villages, rice fields, and nearby trekking points.',
        details: [
          'Hilly terrain, experienced riders preferred',
          'Helmets mandatory',
          'Limited fuel stations, fill up in Ziro',
          'Ideal for visiting Apatani villages',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Shared taxis between villages (₹50-150). Private taxis for sightseeing (₹1,500-2,500 per day).',
        details: [
          'Book through your homestay',
          'Drivers know all villages and viewpoints',
          'Negotiate for multi-day packages',
          'Limited vehicles, advance booking recommended',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Guwahati-Ziro-Guwahati)', amount: 6000 },
      { label: 'Accommodation (4 nights)', amount: 4800 },
      { label: 'Food (4 days)', amount: 2400 },
      { label: 'Local transport & activities', amount: 2000 },
      { label: 'Permits & miscellaneous', amount: 1800 },
    ],
    budgetTotal: 17000,
    faqs: [
      {
        question: 'Do I need permits for Ziro?',
        answer: 'Yes, Inner Line Permit (ILP) required for Indian citizens. Foreign nationals need Protected Area Permit (PAP). Both can be obtained online or at checkpoints.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'March to October is ideal. September hosts the famous Ziro Music Festival. Avoid monsoon (June-August) due to landslides.',
      },
      {
        question: 'What can I do in Ziro?',
        answer: 'Visit Apatani villages, explore rice fields, trek to Talley Valley, attend Ziro Music Festival, learn about Apatani culture, and enjoy valley views.',
      },
      {
        question: 'Is Ziro safe for solo travelers?',
        answer: 'Yes, Ziro is very safe. The Apatani community is welcoming and helpful. Respect local customs and traditions.',
      },
    ],
  },
  {
    slug: 'chikhaldara',
    name: 'Chikhaldara',
    region: 'Maharashtra',
    macroRegion: 'west',
    budget: '₹9K-14K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    description: 'Hill station with coffee plantations and wildlife',
    tags: ['Nature', 'Trek'],
    isFeatured: true,
    tagline: 'Hill station with coffee plantations and wildlife',
    heroImage: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80',
    snapshot: {
      duration: '2-3 days',
      budget: '₹9,000 - ₹14,000',
      bestSeason: 'October to March',
      difficulty: 'Easy',
      internet: 'Moderate (Most networks work)',
    },
    detailedDescription: 'Chikhaldara is the only hill station in Maharashtra, nestled in the Satpura Range. Known for its coffee plantations, scenic viewpoints, and proximity to Melghat Tiger Reserve, this offbeat destination offers a perfect blend of nature, wildlife, and tranquility.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Nagpur Airport - 230 km',
        details: 'From Nagpur, hire a taxi to Chikhaldara (₹3,000-4,500, 5-6 hours) or take a bus to Amravati, then local transport.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Amravati - 118 km',
        details: 'From Amravati, buses or taxis to Chikhaldara (₹500-1,000, 3-4 hours). Regular state transport buses available.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Direct buses from Nagpur to Chikhaldara (₹300-500, 6-7 hours). MSRTC buses run regularly.',
        details: 'Buses also available from Amravati and nearby cities. Book in advance during peak season.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Local Homestays',
        priceRange: '₹600-1,000 per night',
        description: 'Homestays in Chikhaldara town with home-cooked Maharashtrian meals. Simple rooms with basic amenities.',
      },
      {
        type: 'guesthouse',
        title: 'Forest Guesthouses',
        priceRange: '₹1,000-1,800 per night',
        description: 'Forest Department guesthouses near Melghat Tiger Reserve. Basic facilities with nature views.',
      },
      {
        type: 'hotel',
        title: 'MTDC Resort',
        priceRange: '₹2,000-3,500 per night',
        description: 'Government-run resort with comfortable rooms, restaurant, and scenic views. Popular among tourists.',
      },
      {
        type: 'airbnb',
        title: 'Private Cottages',
        priceRange: '₹1,500-3,000 per night',
        description: 'Private cottages amidst coffee plantations. Ideal for families and groups seeking privacy.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Chikhaldara for ₹400-700 per day. Perfect for exploring viewpoints and nearby villages.',
        details: [
          'Hilly roads, moderate difficulty',
          'Helmets mandatory',
          'Fuel available in Chikhaldara',
          'Ideal for visiting coffee estates',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Auto-rickshaws for short trips (₹50-150). Private taxis for sightseeing (₹1,200-2,000 per day).',
        details: [
          'Book through your hotel',
          'Drivers know all viewpoints',
          'Negotiate for full-day packages',
          'Limited vehicles, book in advance',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Mumbai-Chikhaldara-Mumbai)', amount: 3500 },
      { label: 'Accommodation (2 nights)', amount: 2400 },
      { label: 'Food (2 days)', amount: 1400 },
      { label: 'Local transport & entry fees', amount: 1000 },
      { label: 'Miscellaneous', amount: 700 },
    ],
    budgetTotal: 9000,
    faqs: [
      {
        question: 'What is the best time to visit Chikhaldara?',
        answer: 'October to March is ideal. Monsoon (June-September) brings lush greenery but heavy rains. Summers are pleasant compared to plains.',
      },
      {
        question: 'What can I do in Chikhaldara?',
        answer: 'Visit viewpoints (Bhimkund, Hurricane Point), explore Melghat Tiger Reserve, trek to Gavilgad Fort, visit coffee plantations, and enjoy boating at Shakkar Lake.',
      },
      {
        question: 'Is wildlife safari available?',
        answer: 'Yes, safaris in Melghat Tiger Reserve can be arranged. Advance booking recommended. Best time for wildlife sighting is early morning.',
      },
      {
        question: 'Is Chikhaldara suitable for families?',
        answer: 'Absolutely! Chikhaldara is safe, peaceful, and offers easy activities suitable for all ages. Many viewpoints are accessible by car.',
      },
    ],
  },
  {
    slug: 'mawlynnong',
    name: 'Mawlynnong',
    region: 'Meghalaya',
    macroRegion: 'northeast',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    description: "Asia's cleanest village with living root bridges",
    tags: ['Nature', 'Trek'],
    tagline: "Asia's cleanest village with living root bridges",
    heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=80',
    snapshot: {
      duration: '2-3 days',
      budget: '₹10,000 - ₹15,000',
      bestSeason: 'October to May',
      difficulty: 'Easy',
      internet: 'Limited (Airtel, Jio work)',
    },
    detailedDescription: "Mawlynnong, known as Asia's cleanest village, is a picturesque hamlet in Meghalaya. Famous for its living root bridges, bamboo dustbins, and community-driven cleanliness, this village offers a unique eco-tourism experience with stunning views of Bangladesh plains.",
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Shillong Airport - 90 km',
        details: 'From Shillong, hire a taxi to Mawlynnong (₹2,000-3,000, 2.5-3 hours). Shared taxis also available from Dawki.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Guwahati - 140 km',
        details: 'From Guwahati, take a bus or taxi to Shillong (₹300-800, 3-4 hours), then proceed to Mawlynnong.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Guwahati to Shillong (₹200-400). From Shillong, shared taxis to Dawki, then local transport to Mawlynnong.',
        details: 'Limited direct transport. Best to hire a taxi from Shillong for convenience.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Village Homestays',
        priceRange: '₹800-1,500 per night',
        description: 'Stay with local Khasi families in traditional bamboo houses. Experience village life with home-cooked meals and warm hospitality.',
      },
      {
        type: 'guesthouse',
        title: 'Eco Guesthouses',
        priceRange: '₹1,200-2,000 per night',
        description: 'Eco-friendly guesthouses with basic amenities and clean rooms. Some offer views of Bangladesh plains.',
      },
      {
        type: 'hotel',
        title: 'Shillong Hotels',
        priceRange: '₹2,000-4,000 per night',
        description: 'Stay in Shillong and take day trips to Mawlynnong. More hotel options and amenities available.',
      },
      {
        type: 'airbnb',
        title: 'Bamboo Cottages',
        priceRange: '₹1,500-3,000 per night',
        description: 'Unique bamboo cottages in the village with modern facilities. Perfect for nature lovers and photographers.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Shillong for ₹600-1,000 per day. The ride to Mawlynnong is scenic with good roads.',
        details: [
          'Well-maintained roads',
          'Helmets mandatory',
          'Fuel available in Shillong and Dawki',
          'Ideal for exploring nearby villages',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Shared taxis from Shillong to Dawki (₹150-250 per person). Private taxis for Mawlynnong day trip (₹2,500-3,500).',
        details: [
          'Book through your hotel',
          'Drivers know all viewpoints',
          'Combine with Dawki and living root bridge visit',
          'Negotiate for multi-destination packages',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Guwahati-Mawlynnong-Guwahati)', amount: 4000 },
      { label: 'Accommodation (2 nights)', amount: 2400 },
      { label: 'Food (2 days)', amount: 1400 },
      { label: 'Local transport & activities', amount: 1200 },
      { label: 'Miscellaneous', amount: 1000 },
    ],
    budgetTotal: 10000,
    faqs: [
      {
        question: 'What makes Mawlynnong special?',
        answer: "It's Asia's cleanest village with community-driven cleanliness initiatives. The village has bamboo dustbins, living root bridges, and a unique sky view platform.",
      },
      {
        question: 'What is the best time to visit?',
        answer: 'October to May is ideal. Avoid monsoon (June-September) as the region receives heavy rainfall and roads can be slippery.',
      },
      {
        question: 'What can I do in Mawlynnong?',
        answer: 'Explore the clean village, visit living root bridge, climb the sky view platform, visit nearby Dawki river, and experience Khasi culture.',
      },
      {
        question: 'Is Mawlynnong suitable for families?',
        answer: 'Yes, very suitable. The village is safe, clean, and offers easy walks. The living root bridge requires some trekking but is manageable for most ages.',
      },
    ],
  },
  {
    slug: 'gokarna',
    name: 'Gokarna',
    region: 'Karnataka',
    macroRegion: 'south',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    description: 'Pristine beaches and spiritual vibes',
    tags: ['Beach', 'Nature', 'Trek'],
    tagline: 'Pristine beaches and spiritual vibes',
    heroImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹8,000 - ₹12,000',
      bestSeason: 'October to March',
      difficulty: 'Easy',
      internet: 'Good (All networks work)',
    },
    detailedDescription: 'Gokarna is a laid-back beach town in Karnataka, offering pristine beaches, spiritual temples, and a relaxed hippie vibe. Unlike crowded Goa, Gokarna provides a perfect blend of beach life, trekking, and cultural experiences with its ancient temples and serene atmosphere.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Goa International Airport - 140 km',
        details: 'From Goa airport, hire a taxi to Gokarna (₹2,500-3,500, 3 hours) or take a bus to Karwar, then local transport.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Gokarna Road - 10 km',
        details: 'From Gokarna Road station, auto-rickshaws or taxis to Gokarna town (₹200-400). Trains from Bangalore, Mumbai, and Goa available.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Direct buses from Bangalore (₹600-900, 10-12 hours), Goa (₹200-400, 3-4 hours), and Mumbai (₹800-1,200, 14-16 hours).',
        details: 'Overnight buses available from major cities. KSRTC and private operators run regular services.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Beach Homestays',
        priceRange: '₹500-1,000 per night',
        description: 'Simple homestays near beaches with basic amenities. Some offer sea views and home-cooked meals.',
      },
      {
        type: 'guesthouse',
        title: 'Beach Huts',
        priceRange: '₹800-1,500 per night',
        description: 'Bamboo and wooden beach huts on Kudle and Om beaches. Basic facilities with direct beach access.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹1,500-3,000 per night',
        description: 'Hotels in Gokarna town with modern amenities, hot water, and restaurants. Walking distance to main beach.',
      },
      {
        type: 'airbnb',
        title: 'Beach Cottages',
        priceRange: '₹2,000-4,000 per night',
        description: 'Private cottages with sea views, modern facilities, and privacy. Ideal for couples and small groups.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes and scooters available in Gokarna for ₹300-600 per day. Perfect for beach hopping and exploring nearby villages.',
        details: [
          'Easy coastal roads',
          'Helmets mandatory',
          'Fuel available in Gokarna town',
          'Ideal for visiting all beaches',
        ],
      },
      {
        type: 'cab',
        title: 'Auto-rickshaws',
        description: 'Auto-rickshaws for short trips (₹50-150). Shared autos between beaches (₹20-50 per person).',
        details: [
          'Readily available in town',
          'Negotiate fares before starting',
          'Limited availability late at night',
          'Walking between beaches also popular',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Bangalore-Gokarna-Bangalore)', amount: 2500 },
      { label: 'Accommodation (3 nights)', amount: 2700 },
      { label: 'Food (3 days)', amount: 1800 },
      { label: 'Local transport & activities', amount: 1000 },
      { label: 'Miscellaneous', amount: 1000 },
    ],
    budgetTotal: 9000,
    faqs: [
      {
        question: 'Which beaches should I visit in Gokarna?',
        answer: 'Om Beach (most popular), Kudle Beach (relaxed vibe), Half Moon Beach (secluded), Paradise Beach (pristine), and Gokarna Main Beach (near temple).',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'October to March is ideal. Avoid monsoon (June-September) as beaches are not safe for swimming and many shacks close.',
      },
      {
        question: 'Is Gokarna safe for solo travelers?',
        answer: 'Yes, Gokarna is safe. The town has a relaxed vibe and locals are friendly. However, be cautious on secluded beaches at night.',
      },
      {
        question: 'What can I do besides beaches?',
        answer: 'Visit Mahabaleshwar Temple, trek between beaches, try water sports, practice yoga, explore nearby villages, and enjoy sunset views.',
      },
    ],
  },
  {
    slug: 'dhanushkodi',
    name: 'Dhanushkodi',
    region: 'Tamil Nadu',
    macroRegion: 'south',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    description: 'Ghost town with pristine beaches and ruins',
    tags: ['Beach', 'Nature'],
    tagline: 'Ghost town with pristine beaches and ruins',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80',
    snapshot: {
      duration: '2-3 days',
      budget: '₹10,000 - ₹15,000',
      bestSeason: 'October to March',
      difficulty: 'Easy',
      internet: 'Limited (BSNL, Airtel work)',
    },
    detailedDescription: 'Dhanushkodi is a ghost town at the southern tip of India, where the Bay of Bengal meets the Indian Ocean. Destroyed by a cyclone in 1964, the ruins and pristine beaches create a hauntingly beautiful landscape. The town holds mythological significance from the Ramayana.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Madurai Airport - 170 km',
        details: 'From Madurai, hire a taxi to Rameswaram (₹2,500-3,500, 3-4 hours), then local transport to Dhanushkodi.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Rameswaram - 18 km',
        details: 'From Rameswaram station, shared jeeps or buses to Dhanushkodi (₹50-100 per person, 45 minutes).',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Chennai to Rameswaram (₹500-800, 10-12 hours). From Rameswaram, shared jeeps or buses to Dhanushkodi.',
        details: 'Regular buses from major Tamil Nadu cities. Private vehicles not allowed beyond a point; use shared jeeps.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Rameswaram Homestays',
        priceRange: '₹600-1,200 per night',
        description: 'Stay in Rameswaram and take day trips to Dhanushkodi. Homestays offer home-cooked Tamil meals and local insights.',
      },
      {
        type: 'guesthouse',
        title: 'Budget Guesthouses',
        priceRange: '₹800-1,500 per night',
        description: 'Simple guesthouses in Rameswaram with basic amenities. Walking distance to Ramanathaswamy Temple.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹1,500-3,000 per night',
        description: 'Hotels in Rameswaram with modern facilities, hot water, and restaurants. Good base for exploring the area.',
      },
      {
        type: 'airbnb',
        title: 'Beach Resorts',
        priceRange: '₹2,500-5,000 per night',
        description: 'Beach resorts near Rameswaram with sea views and premium amenities. Ideal for comfortable stays.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Rameswaram for ₹300-600 per day. Ride up to the restricted point, then take shared jeeps to Dhanushkodi.',
        details: [
          'Flat coastal roads',
          'Helmets mandatory',
          'Fuel available in Rameswaram',
          'Private vehicles restricted near Dhanushkodi',
        ],
      },
      {
        type: 'cab',
        title: 'Shared Jeeps',
        description: 'Shared jeeps from Rameswaram to Dhanushkodi (₹50-100 per person). Private jeeps for groups (₹800-1,500).',
        details: [
          'Only mode of transport to Dhanushkodi',
          'Jeeps wait for return journey',
          'Negotiate for extra time at the beach',
          'Carry water and snacks',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Chennai-Dhanushkodi-Chennai)', amount: 4000 },
      { label: 'Accommodation (2 nights)', amount: 2400 },
      { label: 'Food (2 days)', amount: 1400 },
      { label: 'Local transport & entry fees', amount: 1200 },
      { label: 'Miscellaneous', amount: 1000 },
    ],
    budgetTotal: 10000,
    faqs: [
      {
        question: 'Why is Dhanushkodi called a ghost town?',
        answer: 'A devastating cyclone in 1964 destroyed the town, killing thousands. The ruins remain as a reminder, and the area was declared unfit for habitation.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'October to March is ideal. Avoid monsoon and cyclone season (June-November). Summers are hot but manageable.',
      },
      {
        question: 'What can I do in Dhanushkodi?',
        answer: 'Explore ruins of the old town, visit pristine beaches, see the confluence of Bay of Bengal and Indian Ocean, visit Ramanathaswamy Temple in Rameswaram.',
      },
      {
        question: 'Is it safe to visit?',
        answer: 'Yes, but follow local guidelines. The area is remote with limited facilities. Carry water, snacks, and sun protection. Avoid swimming in rough seas.',
      },
    ],
  },
  {
    slug: 'chopta',
    name: 'Chopta',
    region: 'Uttarakhand',
    macroRegion: 'north',
    budget: '₹9K-14K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    description: 'Mini Switzerland with Tungnath trek',
    tags: ['Trek', 'Nature', 'Camping'],
    tagline: 'Mini Switzerland with Tungnath trek',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹9,000 - ₹14,000',
      bestSeason: 'April to November',
      difficulty: 'Moderate',
      internet: 'Limited (BSNL works)',
    },
    detailedDescription: 'Chopta, often called "Mini Switzerland of India," is a picturesque hill station in Uttarakhand. It serves as the base for the Tungnath Temple trek (highest Shiva temple) and Chandrashila summit. The meadows, rhododendron forests, and Himalayan views make it a trekker\'s paradise.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Jolly Grant Airport (Dehradun) - 221 km',
        details: 'From Dehradun, hire a taxi to Chopta (₹4,000-6,000, 7-8 hours) or take a bus to Rudraprayag, then local transport.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Rishikesh - 202 km',
        details: 'From Rishikesh, buses or shared taxis to Rudraprayag (₹300-500), then local buses or taxis to Chopta (₹200-400).',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Delhi to Rudraprayag (₹600-1,000, 12-14 hours). From Rudraprayag, local buses or shared taxis to Chopta (₹150-300).',
        details: 'Limited direct buses. Best to reach Rudraprayag first, then proceed to Chopta.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Village Homestays',
        priceRange: '₹500-900 per night',
        description: 'Basic homestays in nearby villages with home-cooked Garhwali meals. Simple rooms with shared facilities.',
      },
      {
        type: 'guesthouse',
        title: 'Trekker Guesthouses',
        priceRange: '₹800-1,500 per night',
        description: 'Guesthouses catering to trekkers with basic amenities, hot water (limited hours), and packed lunch options.',
      },
      {
        type: 'hotel',
        title: 'Small Hotels',
        priceRange: '₹1,500-2,500 per night',
        description: 'Small hotels with comfortable rooms, heaters, and restaurants. Limited options, book in advance.',
      },
      {
        type: 'airbnb',
        title: 'Camping',
        priceRange: '₹800-1,500 per night',
        description: 'Organized camping in meadows with tents, sleeping bags, and meals. Perfect for stargazing and nature immersion.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes can be rented in Rishikesh or Rudraprayag for ₹600-1,000 per day. The ride to Chopta is scenic but challenging.',
        details: [
          'Mountain roads, experienced riders only',
          'Helmets mandatory',
          'Limited fuel stations, fill up in Rudraprayag',
          'Park bike at Chopta before trekking',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Shared taxis from Rudraprayag to Chopta (₹200-400 per person). Private taxis for groups (₹1,500-2,500).',
        details: [
          'Book through your accommodation',
          'Limited vehicles in Chopta',
          'Negotiate for return pickup',
          'Drivers wait at Chopta for trekkers',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Delhi-Chopta-Delhi)', amount: 3500 },
      { label: 'Accommodation (3 nights)', amount: 3000 },
      { label: 'Food (3 days)', amount: 1800 },
      { label: 'Trek guide & permits', amount: 1200 },
      { label: 'Miscellaneous', amount: 1500 },
    ],
    budgetTotal: 11000,
    faqs: [
      {
        question: 'What is the Tungnath trek like?',
        answer: 'Moderate difficulty, 3.5 km from Chopta to Tungnath Temple (3,680m). Well-marked trail, takes 3-4 hours round trip. Chandrashila summit adds 1.5 km more.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'April to November for trekking. December to March for snow (roads may be closed). Avoid monsoon (July-August) due to landslides.',
      },
      {
        question: 'Do I need a guide?',
        answer: 'Not mandatory for Tungnath trek as the trail is well-marked. However, guides are helpful for Chandrashila summit and winter treks.',
      },
      {
        question: 'What should I pack?',
        answer: 'Trekking shoes, warm clothes (even in summer), rain gear, torch, basic medicines, energy bars, and water bottles. Carry all trash back.',
      },
    ],
  },
  {
    slug: 'spiti',
    name: 'Spiti Valley',
    region: 'Himachal Pradesh',
    macroRegion: 'north',
    budget: '₹20K-30K',
    category: 'premium',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    description: 'Cold desert with ancient monasteries',
    tags: ['Trek', 'Nature'],
    tagline: 'Cold desert with ancient monasteries',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
    snapshot: {
      duration: '7-10 days',
      budget: '₹20,000 - ₹30,000',
      bestSeason: 'May to October',
      difficulty: 'Moderate to Difficult',
      internet: 'Very Limited (BSNL only)',
    },
    detailedDescription: 'Spiti Valley, meaning "The Middle Land," is a cold desert mountain valley in Himachal Pradesh. Known for its ancient Buddhist monasteries, barren landscapes, and high-altitude villages, Spiti offers an otherworldly experience with stunning vistas and rich Tibetan culture.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Bhuntar Airport - 245 km',
        details: 'From Bhuntar, hire a taxi to Spiti via Manali (₹8,000-12,000, 10-12 hours). Road opens only from May to October.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Joginder Nagar - 365 km',
        details: 'Better option: Chandigarh Railway Station (420 km). From Chandigarh, take a bus or taxi to Manali, then proceed to Spiti.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Delhi to Manali (₹800-1,500, 14-16 hours). From Manali, HRTC buses to Kaza (₹400-600, 10-12 hours).',
        details: 'Road via Manali opens in May. Alternative route via Shimla-Kinnaur open year-round but longer.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Village Homestays',
        priceRange: '₹800-1,500 per night',
        description: 'Stay with local families in traditional mud-brick houses. Experience authentic Spitian culture with home-cooked meals.',
      },
      {
        type: 'guesthouse',
        title: 'Monastery Guesthouses',
        priceRange: '₹600-1,200 per night',
        description: 'Basic guesthouses run by monasteries. Simple rooms with shared facilities. Peaceful and spiritual atmosphere.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹2,000-4,000 per night',
        description: 'Small hotels in Kaza and major villages with heaters, hot water, and restaurants. Limited options, book in advance.',
      },
      {
        type: 'airbnb',
        title: 'Camping',
        priceRange: '₹1,000-2,000 per night',
        description: 'Organized camping at scenic spots with tents, sleeping bags, and meals. Perfect for stargazing in clear skies.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Manali for ₹1,000-2,000 per day. The ride to Spiti is challenging with high-altitude passes and rough roads.',
        details: [
          'Experienced riders only',
          'Carry spare fuel and tools',
          'Acclimatize before high passes',
          'Permits required for certain areas',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Shared taxis between villages (₹100-300 per person). Private taxis for sightseeing (₹3,000-5,000 per day).',
        details: [
          'Book through your accommodation',
          'Limited vehicles, advance booking essential',
          'Drivers know all monasteries and viewpoints',
          'Negotiate for multi-day packages',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Delhi-Spiti-Delhi)', amount: 10000 },
      { label: 'Accommodation (7 nights)', amount: 8400 },
      { label: 'Food (7 days)', amount: 4200 },
      { label: 'Local transport & permits', amount: 4000 },
      { label: 'Miscellaneous', amount: 3400 },
    ],
    budgetTotal: 30000,
    faqs: [
      {
        question: 'Do I need permits for Spiti?',
        answer: 'Indian citizens do not need permits for most areas. However, permits required for certain border villages. Foreign nationals need Inner Line Permits.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'May to October when roads are open. June to September is ideal. Winter (November-April) is extremely cold with roads closed.',
      },
      {
        question: 'What are the must-visit places?',
        answer: 'Key Monastery, Tabo Monastery, Dhankar Monastery, Chandratal Lake, Kibber village, Pin Valley, and Langza village (fossil village).',
      },
      {
        question: 'How to deal with altitude sickness?',
        answer: 'Acclimatize in Manali or Kalpa before entering Spiti. Stay hydrated, avoid alcohol, ascend gradually, and carry Diamox tablets. Consult a doctor before travel.',
      },
    ],
  },
  {
    slug: 'khajjiar',
    name: 'Khajjiar',
    region: 'Himachal Pradesh',
    macroRegion: 'north',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    description: 'Mini Switzerland with meadows and lake',
    tags: ['Nature', 'Trek'],
    tagline: 'Mini Switzerland with meadows and lake',
    heroImage: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80',
    snapshot: {
      duration: '2-3 days',
      budget: '₹10,000 - ₹15,000',
      bestSeason: 'March to June, September to November',
      difficulty: 'Easy',
      internet: 'Moderate (Most networks work)',
    },
    detailedDescription: 'Khajjiar, often called "Mini Switzerland of India," is a picturesque hill station near Dalhousie. With its vast meadow, small lake, and dense deodar forests, Khajjiar offers a perfect blend of natural beauty and adventure activities like zorbing, paragliding, and horse riding.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Pathankot Airport - 120 km',
        details: 'From Pathankot, hire a taxi to Khajjiar via Dalhousie (₹2,500-3,500, 3-4 hours).',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Pathankot - 120 km',
        details: 'From Pathankot, buses or taxis to Dalhousie (₹300-800, 3-4 hours), then local transport to Khajjiar (24 km).',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Delhi to Dalhousie (₹700-1,200, 12-14 hours). From Dalhousie, local buses or taxis to Khajjiar (₹100-300).',
        details: 'HRTC buses run regularly. Khajjiar is 24 km from Dalhousie, easily accessible.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Local Homestays',
        priceRange: '₹800-1,500 per night',
        description: 'Homestays in Khajjiar and nearby villages with home-cooked Himachali meals. Warm hospitality and cozy rooms.',
      },
      {
        type: 'guesthouse',
        title: 'Guesthouses',
        priceRange: '₹1,200-2,000 per night',
        description: 'Comfortable guesthouses with valley views, clean rooms, and basic amenities. Some offer adventure activity packages.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹2,000-4,000 per night',
        description: 'Hotels in Khajjiar and Dalhousie with modern facilities, heaters, and restaurants. Good for comfortable stays.',
      },
      {
        type: 'airbnb',
        title: 'Cottages',
        priceRange: '₹2,500-5,000 per night',
        description: 'Private cottages amidst deodar forests with scenic views. Ideal for families and couples seeking privacy.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Dalhousie for ₹500-900 per day. The ride to Khajjiar is scenic with well-maintained roads.',
        details: [
          'Easy mountain roads',
          'Helmets mandatory',
          'Fuel available in Dalhousie',
          'Ideal for exploring nearby viewpoints',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Taxis from Dalhousie to Khajjiar (₹500-800 round trip). Local taxis for sightseeing (₹1,500-2,500 per day).',
        details: [
          'Book through your hotel',
          'Drivers know all viewpoints',
          'Negotiate for multi-destination packages',
          'Combine with Dalhousie sightseeing',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Delhi-Khajjiar-Delhi)', amount: 3500 },
      { label: 'Accommodation (2 nights)', amount: 3000 },
      { label: 'Food (2 days)', amount: 1600 },
      { label: 'Activities (zorbing, paragliding)', amount: 1500 },
      { label: 'Miscellaneous', amount: 1400 },
    ],
    budgetTotal: 11000,
    faqs: [
      {
        question: 'What activities can I do in Khajjiar?',
        answer: 'Zorbing, paragliding, horse riding, trekking, boating in the lake, visiting Khajji Nag Temple, and exploring deodar forests.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'March to June for pleasant weather. September to November for clear skies. December to February for snow (very cold).',
      },
      {
        question: 'Is Khajjiar suitable for families?',
        answer: 'Absolutely! Khajjiar is safe, peaceful, and offers easy activities suitable for all ages. The meadow is perfect for picnics.',
      },
      {
        question: 'How far is Khajjiar from Dalhousie?',
        answer: '24 km, about 45 minutes by car. Many visitors stay in Dalhousie and take day trips to Khajjiar.',
      },
    ],
  },
  {
    slug: 'hampi',
    name: 'Hampi',
    region: 'Karnataka',
    macroRegion: 'south',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    description: 'Ancient ruins and boulder landscapes',
    tags: ['Nature', 'Trek'],
    tagline: 'Ancient ruins and boulder landscapes',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹8,000 - ₹12,000',
      bestSeason: 'October to March',
      difficulty: 'Easy',
      internet: 'Good (All networks work)',
    },
    detailedDescription: 'Hampi, a UNESCO World Heritage Site, is an ancient village in Karnataka known for its stunning ruins of the Vijayanagara Empire. With over 500 monuments, boulder-strewn landscapes, and the Tungabhadra River, Hampi offers a unique blend of history, architecture, and natural beauty.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Hubli Airport - 144 km',
        details: 'From Hubli, hire a taxi to Hampi (₹2,500-3,500, 3-4 hours) or take a bus to Hospet, then local transport.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Hospet - 13 km',
        details: 'From Hospet, auto-rickshaws or buses to Hampi (₹100-200, 30 minutes). Trains from Bangalore, Goa, and Hyderabad available.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Bangalore to Hospet (₹500-800, 8-10 hours). From Hospet, local buses or autos to Hampi (₹50-100).',
        details: 'Overnight buses available from major cities. KSRTC and private operators run regular services.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Village Homestays',
        priceRange: '₹500-1,000 per night',
        description: 'Homestays in Hampi Bazaar and nearby villages with basic amenities. Experience local life with home-cooked meals.',
      },
      {
        type: 'guesthouse',
        title: 'Budget Guesthouses',
        priceRange: '₹600-1,200 per night',
        description: 'Simple guesthouses with clean rooms, rooftop cafes, and bicycle rentals. Popular among backpackers.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹1,500-3,000 per night',
        description: 'Hotels in Hospet and Hampi with modern amenities, hot water, and restaurants. More options in Hospet.',
      },
      {
        type: 'airbnb',
        title: 'Heritage Stays',
        priceRange: '₹2,000-4,000 per night',
        description: 'Heritage properties and boutique stays with unique architecture. Ideal for those seeking comfort and character.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bicycles (₹100-200/day) and motorcycles (₹400-700/day) available in Hampi. Perfect for exploring the vast ruins and landscapes.',
        details: [
          'Flat terrain, easy for all riders',
          'Bicycles ideal for short distances',
          'Motorcycles for covering more ground',
          'Fuel available in Hospet',
        ],
      },
      {
        type: 'cab',
        title: 'Auto-rickshaws',
        description: 'Auto-rickshaws for short trips (₹50-150). Private autos for full-day sightseeing (₹800-1,500).',
        details: [
          'Readily available in Hampi Bazaar',
          'Negotiate fares before starting',
          'Drivers know all monuments',
          'Combine with coracle ride on Tungabhadra',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Bangalore-Hampi-Bangalore)', amount: 2500 },
      { label: 'Accommodation (3 nights)', amount: 2400 },
      { label: 'Food (3 days)', amount: 1800 },
      { label: 'Bike rental & entry fees', amount: 1000 },
      { label: 'Miscellaneous', amount: 1300 },
    ],
    budgetTotal: 9000,
    faqs: [
      {
        question: 'What are the must-visit monuments in Hampi?',
        answer: 'Virupaksha Temple, Vittala Temple (stone chariot), Lotus Mahal, Elephant Stables, Matanga Hill (sunrise), Hemakuta Hill (sunset), and Royal Enclosure.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'October to March is ideal. Avoid summers (April-June) as it gets extremely hot. Monsoon (July-September) brings greenery but can be humid.',
      },
      {
        question: 'Is Hampi safe for solo travelers?',
        answer: 'Yes, Hampi is safe and popular among solo travelers and backpackers. The vibe is relaxed and locals are friendly.',
      },
      {
        question: 'What can I do besides exploring ruins?',
        answer: 'Rock climbing, bouldering, coracle rides on Tungabhadra River, sunset at Hippie Island, yoga sessions, and exploring local cafes.',
      },
    ],
  },
  {
    slug: 'coorg',
    name: 'Coorg',
    region: 'Karnataka',
    macroRegion: 'south',
    budget: '₹12K-18K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    description: 'Coffee plantations and misty hills',
    tags: ['Nature', 'Trek'],
    tagline: 'Coffee plantations and misty hills',
    heroImage: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹12,000 - ₹18,000',
      bestSeason: 'October to March',
      difficulty: 'Easy',
      internet: 'Good (All networks work)',
    },
    detailedDescription: 'Coorg, also known as Kodagu, is a picturesque hill station in Karnataka famous for its coffee plantations, misty hills, and lush greenery. Known as the "Scotland of India," Coorg offers a perfect blend of natural beauty, adventure activities, and rich Kodava culture.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Mangalore Airport - 160 km',
        details: 'From Mangalore, hire a taxi to Coorg (₹3,000-4,500, 3-4 hours) or take a bus to Madikeri.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Mysore - 120 km',
        details: 'From Mysore, buses or taxis to Madikeri (₹300-800, 3 hours). Trains from Bangalore and other major cities available.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Bangalore to Madikeri (₹400-700, 6-7 hours). KSRTC and private operators run regular services.',
        details: 'Overnight buses available. Madikeri is the main town in Coorg.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Plantation Homestays',
        priceRange: '₹1,500-3,000 per night',
        description: 'Stay in coffee plantations with Kodava families. Experience authentic Coorg hospitality with home-cooked meals and plantation tours.',
      },
      {
        type: 'guesthouse',
        title: 'Guesthouses',
        priceRange: '₹1,200-2,500 per night',
        description: 'Comfortable guesthouses with valley views, clean rooms, and basic amenities. Some offer trekking packages.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹2,500-5,000 per night',
        description: 'Hotels in Madikeri with modern facilities, hot water, and restaurants. Good base for exploring Coorg.',
      },
      {
        type: 'airbnb',
        title: 'Luxury Resorts',
        priceRange: '₹5,000-10,000 per night',
        description: 'Luxury resorts amidst coffee estates with premium amenities, spa, and fine dining. Ideal for a relaxing getaway.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Madikeri for ₹500-900 per day. Perfect for exploring coffee estates, waterfalls, and viewpoints.',
        details: [
          'Hilly roads, moderate difficulty',
          'Helmets mandatory',
          'Fuel available in Madikeri',
          'Ideal for visiting Abbey Falls and Raja\'s Seat',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Taxis for sightseeing (₹2,000-3,500 per day). Drivers know all attractions and can customize itineraries.',
        details: [
          'Book through your homestay or hotel',
          'Negotiate for multi-day packages',
          'Combine with plantation tours',
          'Drivers provide local insights',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Bangalore-Coorg-Bangalore)', amount: 3000 },
      { label: 'Accommodation (3 nights)', amount: 6000 },
      { label: 'Food (3 days)', amount: 2700 },
      { label: 'Local transport & activities', amount: 2500 },
      { label: 'Miscellaneous', amount: 1800 },
    ],
    budgetTotal: 16000,
    faqs: [
      {
        question: 'What are the must-visit places in Coorg?',
        answer: 'Abbey Falls, Raja\'s Seat, Dubare Elephant Camp, Talacauvery (origin of Kaveri River), Namdroling Monastery (Golden Temple), and coffee plantations.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'October to March is ideal. Monsoon (June-September) brings lush greenery but heavy rains. Summers are pleasant compared to plains.',
      },
      {
        question: 'What activities can I do in Coorg?',
        answer: 'Coffee plantation tours, trekking (Tadiandamol Peak), river rafting, elephant interactions, bird watching, and exploring Kodava culture.',
      },
      {
        question: 'Is Coorg suitable for families?',
        answer: 'Absolutely! Coorg is safe, peaceful, and offers activities suitable for all ages. Plantation homestays are family-friendly.',
      },
    ],
  },
  {
    slug: 'rann-of-kutch',
    name: 'Rann of Kutch',
    region: 'Gujarat',
    macroRegion: 'west',
    budget: '₹15K-22K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    description: 'White salt desert with vibrant culture',
    tags: ['Nature'],
    tagline: 'White salt desert with vibrant culture',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹15,000 - ₹22,000',
      bestSeason: 'November to February (Rann Utsav)',
      difficulty: 'Easy',
      internet: 'Limited (BSNL, Airtel work)',
    },
    detailedDescription: 'The Rann of Kutch is a vast white salt desert in Gujarat, famous for its surreal landscapes and the annual Rann Utsav festival. The Great Rann and Little Rann offer unique experiences with full moon nights, vibrant handicrafts, and rich Kutchi culture.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Bhuj Airport - 80 km from Dhordo',
        details: 'From Bhuj, hire a taxi to Dhordo/Rann (₹1,500-2,500, 1.5-2 hours). Flights from Mumbai, Ahmedabad, and Delhi available.',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Bhuj - 80 km',
        details: 'From Bhuj, buses or taxis to Dhordo (₹500-1,000). Trains from Ahmedabad, Mumbai, and other major cities available.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Ahmedabad to Bhuj (₹400-700, 8-10 hours). From Bhuj, local buses or taxis to Dhordo/Rann.',
        details: 'During Rann Utsav, special buses and packages available from major cities.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Village Homestays',
        priceRange: '₹1,000-2,000 per night',
        description: 'Stay with local families in Kutchi villages. Experience authentic culture with traditional meals and handicraft demonstrations.',
      },
      {
        type: 'guesthouse',
        title: 'Budget Guesthouses',
        priceRange: '₹1,500-2,500 per night',
        description: 'Simple guesthouses in Bhuj and nearby villages with basic amenities. Good base for exploring the region.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹2,500-5,000 per night',
        description: 'Hotels in Bhuj with modern facilities. More options available compared to Dhordo.',
      },
      {
        type: 'airbnb',
        title: 'Tent City (Rann Utsav)',
        priceRange: '₹5,000-15,000 per night',
        description: 'Luxury tents at Dhordo during Rann Utsav with cultural programs, camel rides, and full moon parties. Book well in advance.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Bhuj for ₹500-900 per day. Perfect for exploring villages, handicraft centers, and the Rann.',
        details: [
          'Flat desert roads',
          'Helmets mandatory',
          'Fuel available in Bhuj',
          'Ideal for visiting nearby villages',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Taxis from Bhuj to Rann (₹1,500-2,500 per day). During Rann Utsav, shared jeeps available (₹200-400 per person).',
        details: [
          'Book through your hotel',
          'Drivers know all villages and viewpoints',
          'Negotiate for multi-day packages',
          'Combine with handicraft village tours',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Ahmedabad-Rann-Ahmedabad)', amount: 5000 },
      { label: 'Accommodation (3 nights)', amount: 7500 },
      { label: 'Food (3 days)', amount: 2400 },
      { label: 'Local transport & entry fees', amount: 2500 },
      { label: 'Miscellaneous', amount: 2600 },
    ],
    budgetTotal: 20000,
    faqs: [
      {
        question: 'What is Rann Utsav?',
        answer: 'An annual cultural festival (November-February) celebrating Kutchi culture with music, dance, handicrafts, and full moon parties at the white Rann.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'November to February during Rann Utsav. Full moon nights are magical. Avoid monsoon (June-September) as the Rann is flooded.',
      },
      {
        question: 'What can I do in Rann of Kutch?',
        answer: 'Visit white Rann, explore handicraft villages (Bhujodi, Nirona), see flamingos at Little Rann, visit Kala Dungar (Black Hill), and shop for Kutchi embroidery.',
      },
      {
        question: 'Is it safe to visit the Rann at night?',
        answer: 'Yes, during Rann Utsav, the area is well-organized with security. However, avoid venturing alone into the Rann without a guide.',
      },
    ],
  },
  {
    slug: 'tawang',
    name: 'Tawang',
    region: 'Arunachal Pradesh',
    macroRegion: 'northeast',
    budget: '₹18K-25K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'Monastery town with Himalayan views',
    tags: ['Nature', 'Trek'],
    tagline: 'Monastery town with Himalayan views',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    snapshot: {
      duration: '5-6 days',
      budget: '₹18,000 - ₹25,000',
      bestSeason: 'March to October',
      difficulty: 'Moderate',
      internet: 'Limited (BSNL works)',
    },
    detailedDescription: 'Tawang, located at 10,000 feet in Arunachal Pradesh, is home to the largest monastery in India and the second-largest in the world. With stunning Himalayan views, pristine lakes, and rich Buddhist culture, Tawang offers a spiritual and scenic retreat.',
    transport: [
      {
        type: 'air',
        title: 'By Air',
        description: 'Nearest airport: Tezpur Airport - 320 km',
        details: 'From Tezpur, hire a taxi to Tawang (₹8,000-12,000, 10-12 hours). Road passes through Sela Pass (13,700 ft).',
      },
      {
        type: 'train',
        title: 'By Train',
        description: 'Nearest railway station: Tezpur - 320 km',
        details: 'From Tezpur, shared taxis or private cabs to Tawang. Journey takes 10-12 hours with overnight stops recommended.',
      },
      {
        type: 'bus',
        title: 'By Bus',
        description: 'Buses from Guwahati to Tezpur (₹300-600, 6-8 hours). From Tezpur, shared taxis to Tawang (₹800-1,500 per person).',
        details: 'Road conditions can be challenging. Sela Pass may be closed in winter due to snow.',
      },
    ],
    accommodation: [
      {
        type: 'homestay',
        title: 'Monpa Homestays',
        priceRange: '₹800-1,500 per night',
        description: 'Stay with local Monpa families in traditional homes. Experience authentic culture with home-cooked meals and butter tea.',
      },
      {
        type: 'guesthouse',
        title: 'Monastery Guesthouses',
        priceRange: '₹600-1,200 per night',
        description: 'Basic guesthouses run by monasteries. Simple rooms with shared facilities. Peaceful and spiritual atmosphere.',
      },
      {
        type: 'hotel',
        title: 'Hotels',
        priceRange: '₹2,000-4,000 per night',
        description: 'Hotels in Tawang town with heaters, hot water, and restaurants. Limited options, book in advance.',
      },
      {
        type: 'airbnb',
        title: 'Tourist Lodges',
        priceRange: '₹1,500-3,000 per night',
        description: 'Government tourist lodges with basic amenities and mountain views. Good value for money.',
      },
    ],
    localTransport: [
      {
        type: 'bike',
        title: 'Rent a Bike',
        description: 'Bikes available in Tezpur for ₹1,000-1,500 per day. The ride to Tawang is challenging with high-altitude passes.',
        details: [
          'Experienced riders only',
          'Acclimatize before Sela Pass',
          'Carry spare fuel and warm clothes',
          'Permits required',
        ],
      },
      {
        type: 'cab',
        title: 'Local Taxis',
        description: 'Shared taxis between towns (₹100-300 per person). Private taxis for sightseeing (₹2,500-4,000 per day).',
        details: [
          'Book through your hotel',
          'Limited vehicles, advance booking essential',
          'Drivers know all monasteries and lakes',
          'Negotiate for multi-day packages',
        ],
      },
    ],
    budgetBreakdown: [
      { label: 'Transport (Guwahati-Tawang-Guwahati)', amount: 8000 },
      { label: 'Accommodation (5 nights)', amount: 6000 },
      { label: 'Food (5 days)', amount: 3000 },
      { label: 'Local transport & permits', amount: 3500 },
      { label: 'Miscellaneous', amount: 2500 },
    ],
    budgetTotal: 23000,
    faqs: [
      {
        question: 'Do I need permits for Tawang?',
        answer: 'Yes, Inner Line Permit (ILP) required for Indian citizens. Foreign nationals need Protected Area Permit (PAP). Both can be obtained online or at checkpoints.',
      },
      {
        question: 'What is the best time to visit?',
        answer: 'March to October is ideal. April-May for rhododendrons. September-October for clear skies. Winter (November-February) is extremely cold with snow.',
      },
      {
        question: 'What are the must-visit places?',
        answer: 'Tawang Monastery, Sela Pass, Madhuri Lake (Sangetsar Lake), Bumla Pass (Indo-China border), Nuranang Falls, and War Memorial.',
      },
      {
        question: 'How to deal with altitude sickness?',
        answer: 'Acclimatize in Tezpur or Bomdila before ascending. Stay hydrated, avoid alcohol, ascend gradually, and carry Diamox tablets. Consult a doctor before travel.',
      },
    ],
  },
];

export function getAllDestinations(): Destination[] {
  return destinations;
}

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((dest) => dest.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((dest) => dest.isFeatured);
}

export function getDestinationsByMacroRegion(macroRegion: MacroRegion): Destination[] {
  return destinations.filter((dest) => dest.macroRegion === macroRegion);
}

export function getDestinationCountByMacroRegion(macroRegion: MacroRegion): number {
  return destinations.filter((dest) => dest.macroRegion === macroRegion).length;
}

export function getMacroRegionName(macroRegion: MacroRegion): string {
  const names: Record<MacroRegion, string> = {
    north: 'North India',
    south: 'South India',
    east: 'East India',
    west: 'West India',
    northeast: 'Northeast India',
  };
  return names[macroRegion];
}
