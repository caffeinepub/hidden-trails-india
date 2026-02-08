import { Destination } from './destinationTypes';

export const destinations: Destination[] = [
  // NORTH INDIA (1-15)
  {
    slug: 'gurez-valley',
    name: 'Gurez Valley',
    state: 'Jammu & Kashmir',
    region: 'North India',
    location: 'Near LoC, north of Bandipora',
    significance: 'Untouched Himalayan valley, wooden villages, turquoise river',
    howToReach: {
      summary: 'Srinagar → Bandipora → Drive via Razdan Pass (6–7 hrs)',
      byAir: 'Fly to Srinagar Airport, then hire a taxi or take local transport to Bandipora',
      byBus: 'Regular buses from Srinagar to Bandipora, then local jeeps to Gurez Valley'
    },
    activities: ['Trekking', 'Camping', 'Photography', 'Village exploration'],
    bestTime: 'June–September',
    travelPlanIdea: '3N/4D slow travel with homestay + meadow camping',
    budget: '₹15K-20K',
    category: 'mid',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Habba_Khatoon.jpg',
    description: 'Untouched valley near the LoC with pristine beauty and wooden villages',
    tags: ['Valley', 'Trek', 'Nature', 'Camping']
  },
  {
    slug: 'tirthan-valley',
    name: 'Tirthan Valley',
    state: 'Himachal Pradesh',
    region: 'North India',
    location: 'Kullu district',
    significance: 'Crystal clear river, GHNP buffer zone',
    howToReach: {
      summary: 'Bhuntar Airport → 1.5 hr drive',
      byAir: 'Fly to Bhuntar Airport (Kullu-Manali), then taxi to Tirthan Valley',
      byBus: 'Buses from Delhi/Chandigarh to Aut, then local transport to Tirthan'
    },
    activities: ['Trout fishing', 'River walks', 'Forest treks', 'Bird watching'],
    bestTime: 'March–October',
    travelPlanIdea: '2N riverside stay + 1 day GHNP trek',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://www.ravenouslegs.com/uploads/4/2/3/4/42340821/tirthan-river-in-tirthan-valley_orig.jpeg',
    description: 'Crystal clear river and offbeat trekking routes in GHNP buffer zone',
    tags: ['Nature', 'Trek', 'Camping', 'Adventure']
  },
  {
    slug: 'kalpa',
    name: 'Kalpa',
    state: 'Himachal Pradesh',
    region: 'North India',
    location: 'Kinnaur district',
    significance: 'Stunning Kinner Kailash views without Spiti crowd',
    howToReach: {
      summary: 'Shimla → Reckong Peo → Kalpa',
      byBus: 'Buses from Shimla to Reckong Peo, then local taxi to Kalpa (8-10 hours total)',
      byAir: 'Nearest airport is Shimla (235 km), then road journey'
    },
    activities: ['Apple orchard walks', 'Monastery visit', 'Sunrise photography', 'Village walks'],
    bestTime: 'May–October',
    travelPlanIdea: 'Combine with Sangla & Chitkul for 4-5 day circuit',
    budget: '₹12K-18K',
    category: 'mid',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Kalpa_%288512894537%29.jpg',
    description: 'Stunning Kinner Kailash views without Spiti crowd, apple orchards',
    tags: ['Nature', 'Culture', 'Trek']
  },
  {
    slug: 'chitkul',
    name: 'Chitkul',
    state: 'Himachal Pradesh',
    region: 'North India',
    location: 'Last Indian Village on Indo-Tibetan border',
    significance: 'Raw mountain beauty, Baspa river',
    howToReach: {
      summary: 'Shimla → Sangla → Chitkul',
      byBus: 'Buses to Sangla from Shimla/Reckong Peo, then shared taxi to Chitkul',
      byAir: 'Nearest airport Shimla, then 10-11 hour road journey'
    },
    activities: ['Riverside camping', 'Stargazing', 'Photography', 'Village exploration'],
    bestTime: 'May–September',
    travelPlanIdea: '2N stay with day trips to nearby villages and Baspa riverside',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/baspa-rever-himachal-pradesh-rural-unique?qlt=82&ts=1726642254388',
    description: 'Last Indian village with raw mountain beauty and Baspa river',
    tags: ['Nature', 'Camping', 'Adventure']
  },
  {
    slug: 'barot-valley',
    name: 'Barot Valley',
    state: 'Himachal Pradesh',
    region: 'North India',
    location: 'Mandi district',
    significance: 'Hidden river valley',
    howToReach: {
      summary: 'Joginder Nagar → Barot (40 km)',
      byTrain: 'Train to Joginder Nagar, then taxi to Barot',
      byBus: 'Buses from Mandi to Barot via Joginder Nagar'
    },
    activities: ['Fishing', 'Short treks', 'Peaceful retreat', 'Nature walks'],
    bestTime: 'March–June, September–November',
    travelPlanIdea: '2-3N relaxed stay with fishing and forest walks',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Barot_Valley_%2CMandi%2CHimachal_Pardesh.jpg',
    description: 'Hidden river valley perfect for fishing and peaceful retreat',
    tags: ['Nature', 'Trek', 'Camping']
  },
  {
    slug: 'chopta',
    name: 'Chopta',
    state: 'Uttarakhand',
    region: 'North India',
    location: 'Rudraprayag district',
    significance: 'Mini Switzerland of India',
    howToReach: {
      summary: 'Rishikesh → Chopta (160 km, 6-7 hrs)',
      byBus: 'Buses from Rishikesh/Haridwar to Ukhimath, then taxi to Chopta',
      byAir: 'Nearest airport Jolly Grant (Dehradun), then road journey'
    },
    activities: ['Tungnath & Chandrashila trek', 'Bird watching', 'Camping', 'Photography'],
    bestTime: 'April–November',
    travelPlanIdea: '2N stay with Tungnath-Chandrashila day trek',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1745916342a5160ff72b8591a242f1fe76dc5fe7f3.jpg',
    description: 'Mini Switzerland with Tungnath & Chandrashila trek',
    tags: ['Trek', 'Nature', 'Camping', 'Adventure']
  },
  {
    slug: 'munsiyari',
    name: 'Munsiyari',
    state: 'Uttarakhand',
    region: 'North India',
    location: 'Pithoragarh district',
    significance: 'Panchachuli range views',
    howToReach: {
      summary: 'Kathgodam → Almora → Munsiyari (275 km)',
      byTrain: 'Train to Kathgodam, then taxi/bus to Munsiyari (10-12 hours)',
      byBus: 'Direct buses from Haldwani to Munsiyari'
    },
    activities: ['Glacier treks', 'Waterfall visits', 'Village walks', 'Photography'],
    bestTime: 'March–June, September–November',
    travelPlanIdea: '3-4N with Khaliya Top or Milam Glacier trek',
    budget: '₹12K-18K',
    category: 'mid',
    image: 'https://t.eucdn.in/tourism/lg/panchchuli-peaks-1594437.webp',
    description: 'Panchachuli range views with glacier treks and waterfalls',
    tags: ['Trek', 'Nature', 'Adventure']
  },
  {
    slug: 'kanatal',
    name: 'Kanatal',
    state: 'Uttarakhand',
    region: 'North India',
    location: 'Tehri Garhwal district',
    significance: 'Quiet alternative to Mussoorie',
    howToReach: {
      summary: 'Dehradun → Chamba → Kanatal (78 km)',
      byBus: 'Buses from Dehradun/Rishikesh to Chamba, then taxi to Kanatal',
      byAir: 'Jolly Grant Airport Dehradun, then 3-4 hour drive'
    },
    activities: ['Camping', 'Zipline', 'Forest walks', 'Adventure activities'],
    bestTime: 'March–June, September–November',
    travelPlanIdea: '2N adventure camp stay with activities',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Quiet alternative to Mussoorie with adventure activities',
    tags: ['Nature', 'Camping', 'Adventure']
  },
  {
    slug: 'pangot',
    name: 'Pangot',
    state: 'Uttarakhand',
    region: 'North India',
    location: 'Near Nainital',
    significance: 'Birding paradise near Nainital',
    howToReach: {
      summary: 'Nainital → Pangot (15 km)',
      byBus: 'Buses to Nainital, then taxi to Pangot',
      byTrain: 'Train to Kathgodam, then taxi to Pangot via Nainital'
    },
    activities: ['200+ bird species spotting', 'Nature walks', 'Photography', 'Village exploration'],
    bestTime: 'October–March (best for birding)',
    travelPlanIdea: '2N birding retreat with early morning walks',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Birding paradise with 200+ species near Nainital',
    tags: ['Nature', 'Wildlife']
  },
  {
    slug: 'chakrata',
    name: 'Chakrata',
    state: 'Uttarakhand',
    region: 'North India',
    location: 'Dehradun district',
    significance: 'Waterfalls & cliff views',
    howToReach: {
      summary: 'Dehradun → Chakrata (90 km, 3 hrs)',
      byBus: 'Buses from Dehradun to Chakrata',
      byAir: 'Jolly Grant Airport Dehradun, then taxi'
    },
    activities: ['Tiger Falls trek', 'Cliff walks', 'Cave exploration', 'Nature photography'],
    bestTime: 'March–June, September–November',
    travelPlanIdea: '2N stay with Tiger Falls day trek',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Waterfalls & cliff views with Tiger Falls trek',
    tags: ['Trek', 'Nature', 'Adventure']
  },
  {
    slug: 'shoja',
    name: 'Shoja',
    state: 'Himachal Pradesh',
    region: 'North India',
    location: 'Seraj Valley, Kullu',
    significance: 'Serolsar Lake hidden trail',
    howToReach: {
      summary: 'Aut → Jalori Pass → Shoja',
      byBus: 'Buses to Aut from Bhuntar, then taxi to Shoja',
      byAir: 'Bhuntar Airport, then road journey'
    },
    activities: ['Forest camping', 'Serolsar Lake trek', 'Village walks', 'Photography'],
    bestTime: 'April–June, September–November',
    travelPlanIdea: '2N forest stay with Serolsar Lake trek',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Serolsar Lake hidden trail with forest camping',
    tags: ['Trek', 'Nature', 'Camping']
  },
  {
    slug: 'jibhi',
    name: 'Jibhi',
    state: 'Himachal Pradesh',
    region: 'North India',
    location: 'Banjar Valley, Kullu',
    significance: 'Fairytale wooden cottages',
    howToReach: {
      summary: 'Aut → Jibhi (7 km)',
      byBus: 'Buses from Bhuntar to Aut, then taxi to Jibhi',
      byAir: 'Bhuntar Airport, then 1.5 hour drive'
    },
    activities: ['Waterfall & meadow walks', 'Village exploration', 'Trout fishing', 'Photography'],
    bestTime: 'March–June, September–November',
    travelPlanIdea: '2-3N cottage stay with waterfall trails',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Fairytale wooden cottages with waterfall & meadow walks',
    tags: ['Nature', 'Trek', 'Camping']
  },
  {
    slug: 'dzukou-valley',
    name: 'Dzukou Valley',
    state: 'Nagaland/Manipur',
    region: 'North India',
    location: 'Nagaland-Manipur border',
    significance: 'Valley of flowers of Northeast',
    howToReach: {
      summary: 'Kohima → Viswema → Trek base (2 hrs drive + 2-3 hrs trek)',
      byAir: 'Fly to Dimapur, then taxi to Kohima and trek base',
      byBus: 'Buses from Dimapur to Kohima, then local transport'
    },
    activities: ['2-day trek', 'Camping', 'Flower viewing', 'Photography'],
    bestTime: 'June–September',
    travelPlanIdea: '3N/4D with 2-day trek and camping in valley',
    budget: '₹10K-14K',
    category: 'mid',
    image: 'https://cdn.tripuntold.com/media/photos/location/2019/03/25/2942a212-2370-4043-8d58-59b31bf10703.jpg',
    description: 'Valley of flowers in Northeast India with camping',
    tags: ['Valley', 'Trek', 'Nature', 'Camping']
  },
  {
    slug: 'ziro-valley',
    name: 'Ziro Valley',
    state: 'Arunachal Pradesh',
    region: 'North India',
    location: 'Lower Subansiri district',
    significance: 'Rolling green valley + Apatani culture',
    howToReach: {
      summary: 'Guwahati → Itanagar → Ziro (8-10 hrs)',
      byAir: 'Fly to Guwahati or Tezpur, then road journey',
      byBus: 'Buses from Itanagar to Ziro'
    },
    activities: ['Cycling', 'Cultural exploration', 'Village walks', 'Photography'],
    bestTime: 'March–October',
    travelPlanIdea: '3-4N cultural immersion with village cycling',
    budget: '₹12K-18K',
    category: 'mid',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/A_cross_section_of_luch_green_valley_of_Ziro.jpg',
    description: 'Rolling green valley with unique Apatani culture',
    tags: ['Nature', 'Culture', 'Adventure']
  },
  {
    slug: 'majuli',
    name: 'Majuli',
    state: 'Assam',
    region: 'North India',
    location: 'Brahmaputra River',
    significance: "World's largest river island",
    howToReach: {
      summary: 'Jorhat → Ferry to Majuli (2.5 hrs)',
      byAir: 'Fly to Jorhat, then ferry to Majuli',
      byTrain: 'Train to Jorhat, then ferry crossing'
    },
    activities: ['Satras visit', 'Cycling', 'Photography', 'Cultural exploration'],
    bestTime: 'October–March',
    travelPlanIdea: '2-3N island stay with satra visits and cycling',
    budget: '₹12K-18K',
    category: 'mid',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Doriya_River_of_Majuli.jpg',
    description: "World's largest river island with unique culture",
    tags: ['Nature', 'Culture', 'Adventure']
  },

  // EAST INDIA (16-25)
  {
    slug: 'pakhi-pahar',
    name: 'Pakhi Pahar',
    state: 'West Bengal',
    region: 'East India',
    location: 'Purulia district',
    significance: 'Massive bird rock sculptures',
    howToReach: {
      summary: 'Kolkata → Purulia → Pakhi Pahar (300 km)',
      byTrain: 'Train to Purulia, then local transport',
      byBus: 'Buses from Kolkata to Purulia'
    },
    activities: ['Light trek', 'Tribal art visit', 'Photography', 'Rock climbing'],
    bestTime: 'October–March',
    travelPlanIdea: '1-2N with tribal village exploration',
    budget: '₹6K-10K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Massive bird rock sculptures with tribal art',
    tags: ['Trek', 'Culture', 'Adventure']
  },
  {
    slug: 'buxa-duar',
    name: 'Buxa Duar',
    state: 'West Bengal',
    region: 'East India',
    location: 'Alipurduar district',
    significance: 'Dense forest reserve near Bhutan',
    howToReach: {
      summary: 'NJP/Siliguri → Alipurduar → Buxa Duar',
      byTrain: 'Train to Alipurduar, then local transport',
      byAir: 'Bagdogra Airport, then road journey'
    },
    activities: ['Jungle trekking', 'Wildlife spotting', 'Fort visit', 'Nature walks'],
    bestTime: 'October–March',
    travelPlanIdea: '2N jungle stay with trekking',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Dense forest reserve near Bhutan with jungle trekking',
    tags: ['Trek', 'Nature', 'Wildlife']
  },
  {
    slug: 'lepchajagat',
    name: 'Lepchajagat',
    state: 'West Bengal',
    region: 'East India',
    location: 'Near Darjeeling',
    significance: 'Cloud forest hideaway',
    howToReach: {
      summary: 'Darjeeling → Lepchajagat (19 km)',
      byTrain: 'Toy train or taxi from Darjeeling',
      byAir: 'Bagdogra Airport, then to Darjeeling and onward'
    },
    activities: ['Forest walks', 'Bird watching', 'Village exploration', 'Photography'],
    bestTime: 'March–May, October–December',
    travelPlanIdea: '2N forest retreat with nature walks',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Cloud forest hideaway near Darjeeling',
    tags: ['Nature', 'Trek']
  },
  {
    slug: 'tinchuley',
    name: 'Tinchuley',
    state: 'West Bengal',
    region: 'East India',
    location: 'Darjeeling district',
    significance: 'Offbeat tea village',
    howToReach: {
      summary: 'Darjeeling → Tinchuley (32 km)',
      byBus: 'Shared jeeps from Darjeeling',
      byAir: 'Bagdogra Airport, then road journey'
    },
    activities: ['Tea garden walks', 'Village homestay', 'Sunrise views', 'Organic farming'],
    bestTime: 'March–May, October–December',
    travelPlanIdea: '2N homestay with tea garden experience',
    budget: '₹7K-11K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Offbeat tea village with homestay experience',
    tags: ['Nature', 'Culture']
  },
  {
    slug: 'sandakphu',
    name: 'Sandakphu',
    state: 'West Bengal',
    region: 'East India',
    location: 'Singalila Ridge',
    significance: '4 highest peaks visible together',
    howToReach: {
      summary: 'Manebhanjan → Sandakphu trek (32 km)',
      byAir: 'Bagdogra Airport, then to Manebhanjan',
      byTrain: 'NJP station, then taxi to Manebhanjan'
    },
    activities: ['Multi-day trek', 'Mountain views', 'Photography', 'Camping'],
    bestTime: 'April–May, October–November',
    travelPlanIdea: '4-5N trek with lodge stays',
    budget: '₹12K-18K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: '4 highest peaks visible together on Singalila Ridge',
    tags: ['Trek', 'Nature', 'Adventure']
  },
  {
    slug: 'deomali',
    name: 'Deomali',
    state: 'Odisha',
    region: 'East India',
    location: 'Koraput district',
    significance: 'Highest peak of Odisha',
    howToReach: {
      summary: 'Koraput → Deomali (90 km)',
      byTrain: 'Train to Koraput, then taxi',
      byAir: 'Visakhapatnam Airport, then road journey'
    },
    activities: ['Trekking', 'Tribal village visits', 'Sunrise views', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2N with tribal culture exploration',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Highest peak of Odisha with tribal culture',
    tags: ['Trek', 'Nature', 'Culture']
  },
  {
    slug: 'satkosia-gorge',
    name: 'Satkosia Gorge',
    state: 'Odisha',
    region: 'East India',
    location: 'Angul district',
    significance: 'River gorge camping',
    howToReach: {
      summary: 'Bhubaneswar → Angul → Satkosia (180 km)',
      byTrain: 'Train to Angul, then local transport',
      byBus: 'Buses from Bhubaneswar to Angul'
    },
    activities: ['River camping', 'Boat rides', 'Wildlife spotting', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2N riverside camping with boat safari',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'River gorge camping with wildlife',
    tags: ['Nature', 'Camping', 'Wildlife']
  },
  {
    slug: 'netarhat',
    name: 'Netarhat',
    state: 'Jharkhand',
    region: 'East India',
    location: 'Latehar district',
    significance: '"Queen of Chotanagpur"',
    howToReach: {
      summary: 'Ranchi → Netarhat (156 km)',
      byBus: 'Buses from Ranchi to Netarhat',
      byAir: 'Ranchi Airport, then taxi'
    },
    activities: ['Sunrise/sunset views', 'Waterfall visits', 'Forest walks', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2N hill station retreat',
    budget: '₹7K-11K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: '"Queen of Chotanagpur" with sunrise views',
    tags: ['Nature', 'Trek']
  },
  {
    slug: 'daringbadi',
    name: 'Daringbadi',
    state: 'Odisha',
    region: 'East India',
    location: 'Kandhamal district',
    significance: 'Kashmir of Odisha',
    howToReach: {
      summary: 'Berhampur → Phulbani → Daringbadi (200 km)',
      byTrain: 'Train to Berhampur, then taxi',
      byBus: 'Buses from Bhubaneswar via Phulbani'
    },
    activities: ['Coffee plantation tours', 'Nature walks', 'Tribal village visits', 'Photography'],
    bestTime: 'October–February',
    travelPlanIdea: '2N hill station stay with plantation tours',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Kashmir of Odisha with coffee plantations',
    tags: ['Nature', 'Culture']
  },
  {
    slug: 'mechuka',
    name: 'Mechuka',
    state: 'Arunachal Pradesh',
    region: 'East India',
    location: 'West Siang district',
    significance: 'Tibetan vibe valley near China border',
    howToReach: {
      summary: 'Guwahati → Itanagar → Along → Mechuka (12-14 hrs)',
      byAir: 'Fly to Guwahati, then road journey (requires Inner Line Permit)',
      byBus: 'Buses to Along, then shared taxis to Mechuka'
    },
    activities: ['Monastery visits', 'Village exploration', 'River walks', 'Photography'],
    bestTime: 'March–October',
    travelPlanIdea: '3-4N cultural immersion with monastery visits',
    budget: '₹15K-20K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Tibetan vibe valley near China border',
    tags: ['Nature', 'Culture', 'Adventure']
  },

  // WEST INDIA (26-35)
  {
    slug: 'gokarna-hidden-beaches',
    name: 'Gokarna (Beyond Main Beaches)',
    state: 'Karnataka',
    region: 'West India',
    location: 'Uttara Kannada district',
    significance: 'Paradise & Half Moon Beach trekking',
    howToReach: {
      summary: 'Goa/Mangalore → Gokarna (140 km)',
      byTrain: 'Train to Gokarna Road station, then auto to beaches',
      byBus: 'Buses from Goa, Mangalore, Bangalore'
    },
    activities: ['Paradise & Half Moon Beach trekking', 'Beach camping', 'Cliff jumping', 'Yoga'],
    bestTime: 'October–March',
    travelPlanIdea: '3N beach hopping with cliff treks',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Hidden beaches beyond main Gokarna with trekking',
    tags: ['Beach', 'Trek', 'Nature', 'Camping']
  },
  {
    slug: 'devbagh-beach',
    name: 'Devbagh Beach',
    state: 'Karnataka',
    region: 'West India',
    location: 'Karwar, Uttara Kannada',
    significance: 'Crowd-free beach',
    howToReach: {
      summary: 'Karwar → Devbagh Island (boat ride)',
      byTrain: 'Train to Karwar, then boat to Devbagh',
      byAir: 'Goa Airport, then road to Karwar'
    },
    activities: ['Beach relaxation', 'Water sports', 'Island exploration', 'Dolphin spotting'],
    bestTime: 'October–March',
    travelPlanIdea: '2N island beach stay',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Crowd-free beach on island near Karwar',
    tags: ['Beach', 'Nature']
  },
  {
    slug: 'gandikota',
    name: 'Gandikota',
    state: 'Andhra Pradesh',
    region: 'West India',
    location: 'Kadapa district',
    significance: "India's Grand Canyon",
    howToReach: {
      summary: 'Bangalore → Gandikota (270 km)',
      byBus: 'Buses from Bangalore/Hyderabad to Jammalamadugu, then local transport',
      byTrain: 'Train to Muddanuru, then taxi'
    },
    activities: ['Gorge views', 'Fort exploration', 'Camping', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '1-2N camping with sunrise/sunset views',
    budget: '₹6K-10K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: "India's Grand Canyon with stunning gorge views",
    tags: ['Valley', 'Camping', 'Heritage']
  },
  {
    slug: 'lonar-lake',
    name: 'Lonar Lake',
    state: 'Maharashtra',
    region: 'West India',
    location: 'Buldhana district',
    significance: 'Meteor crater lake',
    howToReach: {
      summary: 'Aurangabad → Lonar (150 km)',
      byBus: 'Buses from Aurangabad to Lonar',
      byTrain: 'Train to Jalna, then taxi'
    },
    activities: ['Lake circuit walk', 'Temple visits', 'Bird watching', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '1-2N with lake exploration',
    budget: '₹6K-10K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Unique meteor crater lake with temples',
    tags: ['Nature', 'Heritage']
  },
  {
    slug: 'chikhaldara',
    name: 'Chikhaldara',
    state: 'Maharashtra',
    region: 'West India',
    location: 'Amravati district',
    significance: "Vidarbha's only hill station",
    howToReach: {
      summary: 'Amravati → Chikhaldara (100 km)',
      byBus: 'Buses from Amravati/Nagpur',
      byTrain: 'Train to Amravati, then taxi'
    },
    activities: ['Viewpoint visits', 'Waterfall treks', 'Wildlife sanctuary', 'Boating'],
    bestTime: 'October–March',
    travelPlanIdea: '2N hill station retreat',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: "Vidarbha's only hill station with waterfalls",
    tags: ['Nature', 'Trek']
  },
  {
    slug: 'tarkarli',
    name: 'Tarkarli',
    state: 'Maharashtra',
    region: 'West India',
    location: 'Sindhudurg district',
    significance: 'Clear water scuba',
    howToReach: {
      summary: 'Goa → Tarkarli (130 km)',
      byBus: 'Buses from Goa/Mumbai to Malvan, then local transport',
      byTrain: 'Train to Kudal, then taxi'
    },
    activities: ['Scuba diving', 'Snorkeling', 'Beach activities', 'Fort visit'],
    bestTime: 'October–March',
    travelPlanIdea: '2-3N beach stay with water sports',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Clear water scuba diving and pristine beaches',
    tags: ['Beach', 'Adventure']
  },
  {
    slug: 'jawhar',
    name: 'Jawhar',
    state: 'Maharashtra',
    region: 'West India',
    location: 'Palghar district',
    significance: 'Tribal hill town',
    howToReach: {
      summary: 'Mumbai → Jawhar (170 km)',
      byBus: 'Buses from Mumbai to Jawhar',
      byTrain: 'Train to Igatpuri, then taxi'
    },
    activities: ['Waterfall visits', 'Tribal culture', 'Fort exploration', 'Nature walks'],
    bestTime: 'June–September (monsoon), October–February',
    travelPlanIdea: '1-2N tribal culture experience',
    budget: '₹6K-10K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Tribal hill town with waterfalls and culture',
    tags: ['Nature', 'Culture', 'Heritage']
  },
  {
    slug: 'mandu',
    name: 'Mandu',
    state: 'Madhya Pradesh',
    region: 'West India',
    location: 'Dhar district',
    significance: 'Romantic ruins',
    howToReach: {
      summary: 'Indore → Mandu (100 km)',
      byBus: 'Buses from Indore to Mandu',
      byTrain: 'Train to Indore, then taxi'
    },
    activities: ['Monument exploration', 'Photography', 'Sunset views', 'Heritage walks'],
    bestTime: 'October–March',
    travelPlanIdea: '1-2N heritage exploration',
    budget: '₹7K-11K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Romantic ruins with Afghan architecture',
    tags: ['Heritage', 'Culture']
  },
  {
    slug: 'orchha',
    name: 'Orchha',
    state: 'Madhya Pradesh',
    region: 'West India',
    location: 'Tikamgarh district',
    significance: 'Riverside cenotaphs',
    howToReach: {
      summary: 'Jhansi → Orchha (16 km)',
      byTrain: 'Train to Jhansi, then taxi/auto',
      byBus: 'Buses from Jhansi to Orchha'
    },
    activities: ['Palace visits', 'River rafting', 'Cycling', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2N heritage stay with palace exploration',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Riverside cenotaphs and medieval palaces',
    tags: ['Heritage', 'Culture']
  },
  {
    slug: 'polo-forest',
    name: 'Polo Forest',
    state: 'Gujarat',
    region: 'West India',
    location: 'Sabarkantha district',
    significance: 'Ancient forest temples',
    howToReach: {
      summary: 'Ahmedabad → Polo Forest (150 km)',
      byBus: 'Buses from Ahmedabad to Vijaynagar, then local transport',
      byTrain: 'Train to Himmatnagar, then taxi'
    },
    activities: ['Temple exploration', 'Forest walks', 'Camping', 'Bird watching'],
    bestTime: 'October–March',
    travelPlanIdea: '1-2N camping with temple visits',
    budget: '₹7K-11K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Ancient forest temples with camping',
    tags: ['Heritage', 'Nature', 'Camping']
  },

  // SOUTH INDIA (36-50)
  {
    slug: 'vattakanal',
    name: 'Vattakanal',
    state: 'Tamil Nadu',
    region: 'South India',
    location: 'Near Kodaikanal',
    significance: 'Mini Israel of India',
    howToReach: {
      summary: 'Kodaikanal → Vattakanal (3 km)',
      byBus: 'Buses to Kodaikanal, then taxi/walk to Vattakanal',
      byAir: 'Madurai Airport, then road to Kodaikanal'
    },
    activities: ['Dolphin Nose trek', 'Cafe hopping', 'Village walks', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2-3N offbeat stay near Kodaikanal',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Mini Israel of India with cafes and treks',
    tags: ['Nature', 'Trek', 'Culture']
  },
  {
    slug: 'kolli-hills',
    name: 'Kolli Hills',
    state: 'Tamil Nadu',
    region: 'South India',
    location: 'Namakkal district',
    significance: '70 hairpin bends adventure',
    howToReach: {
      summary: 'Salem → Kolli Hills (90 km via 70 hairpin bends)',
      byBus: 'Buses from Salem to Kolli Hills',
      byTrain: 'Train to Salem, then taxi'
    },
    activities: ['Waterfall visits', 'Temple exploration', 'Trekking', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2N hill stay with waterfall treks',
    budget: '₹7K-11K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: '70 hairpin bends adventure with waterfalls',
    tags: ['Trek', 'Nature', 'Adventure']
  },
  {
    slug: 'valparai',
    name: 'Valparai',
    state: 'Tamil Nadu',
    region: 'South India',
    location: 'Coimbatore district',
    significance: 'Tea estate road trip',
    howToReach: {
      summary: 'Coimbatore → Valparai (100 km via 40 hairpin bends)',
      byBus: 'Buses from Coimbatore to Valparai',
      byAir: 'Coimbatore Airport, then road journey'
    },
    activities: ['Tea estate tours', 'Wildlife spotting', 'Waterfall visits', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2N tea estate stay with wildlife safari',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Tea estate road trip with wildlife',
    tags: ['Nature', 'Wildlife']
  },
  {
    slug: 'agumbe',
    name: 'Agumbe',
    state: 'Karnataka',
    region: 'South India',
    location: 'Shimoga district',
    significance: 'Sunset rainforest',
    howToReach: {
      summary: 'Mangalore → Agumbe (100 km)',
      byBus: 'Buses from Mangalore/Udupi to Agumbe',
      byTrain: 'Train to Udupi, then taxi'
    },
    activities: ['Sunset point', 'Rainforest treks', 'Waterfall visits', 'Photography'],
    bestTime: 'October–February',
    travelPlanIdea: '2N rainforest stay with sunset views',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Sunset rainforest with waterfalls',
    tags: ['Nature', 'Trek']
  },
  {
    slug: 'honnemaradu',
    name: 'Honnemaradu',
    state: 'Karnataka',
    region: 'South India',
    location: 'Shimoga district',
    significance: 'Lake kayaking',
    howToReach: {
      summary: 'Shimoga → Honnemaradu (70 km)',
      byBus: 'Buses from Shimoga to Sagar, then local transport',
      byTrain: 'Train to Shimoga, then taxi'
    },
    activities: ['Kayaking', 'Coracle rides', 'Camping', 'Bird watching'],
    bestTime: 'October–March',
    travelPlanIdea: '2N lakeside camping with water sports',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Lake kayaking and camping adventure',
    tags: ['Nature', 'Camping', 'Adventure']
  },
  {
    slug: 'araku-valley',
    name: 'Araku Valley',
    state: 'Andhra Pradesh',
    region: 'South India',
    location: 'Visakhapatnam district',
    significance: 'Coffee valley',
    howToReach: {
      summary: 'Visakhapatnam → Araku (115 km, scenic train available)',
      byTrain: 'Scenic train from Visakhapatnam to Araku',
      byBus: 'Buses from Visakhapatnam'
    },
    activities: ['Coffee plantation tours', 'Tribal museum', 'Cave exploration', 'Valley views'],
    bestTime: 'October–March',
    travelPlanIdea: '2N valley stay with coffee tours',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Coffee valley with scenic train journey',
    tags: ['Nature', 'Culture']
  },
  {
    slug: 'poovar-island',
    name: 'Poovar Island',
    state: 'Kerala',
    region: 'South India',
    location: 'Thiruvananthapuram district',
    significance: 'Backwater + sea merge',
    howToReach: {
      summary: 'Trivandrum → Poovar (30 km)',
      byBus: 'Buses from Trivandrum to Poovar',
      byAir: 'Trivandrum Airport, then taxi'
    },
    activities: ['Backwater cruise', 'Beach relaxation', 'Island exploration', 'Ayurvedic spa'],
    bestTime: 'October–March',
    travelPlanIdea: '2N island resort stay',
    budget: '₹12K-18K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Unique spot where backwater meets sea',
    tags: ['Beach', 'Nature']
  },
  {
    slug: 'silent-valley',
    name: 'Silent Valley',
    state: 'Kerala',
    region: 'South India',
    location: 'Palakkad district',
    significance: 'Untouched rainforest',
    howToReach: {
      summary: 'Palakkad → Mukkali → Silent Valley (80 km)',
      byBus: 'Buses from Palakkad to Mukkali, then jeep',
      byTrain: 'Train to Palakkad, then taxi'
    },
    activities: ['Rainforest trekking', 'Wildlife spotting', 'Nature walks', 'Photography'],
    bestTime: 'October–March',
    travelPlanIdea: '2N eco-tourism stay with guided treks',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Untouched rainforest national park',
    tags: ['Nature', 'Wildlife', 'Trek']
  },
  {
    slug: 'gavi',
    name: 'Gavi',
    state: 'Kerala',
    region: 'South India',
    location: 'Pathanamthitta district',
    significance: 'Forest eco-tourism',
    howToReach: {
      summary: 'Kottayam → Gavi (110 km, permit required)',
      byBus: 'Buses to Kottayam, then jeep with permit',
      byTrain: 'Train to Kottayam, then taxi'
    },
    activities: ['Jeep safari', 'Boating', 'Trekking', 'Wildlife spotting'],
    bestTime: 'October–March',
    travelPlanIdea: '2N eco-tourism package with activities',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Forest eco-tourism with jeep safari',
    tags: ['Nature', 'Wildlife', 'Adventure']
  },
  {
    slug: 'varkala-north-cliff',
    name: 'Varkala (North Cliff)',
    state: 'Kerala',
    region: 'South India',
    location: 'Thiruvananthapuram district',
    significance: 'Cliff beach calm zones',
    howToReach: {
      summary: 'Trivandrum → Varkala (50 km)',
      byTrain: 'Train to Varkala Sivagiri station',
      byBus: 'Buses from Trivandrum to Varkala'
    },
    activities: ['Beach relaxation', 'Cliff walks', 'Yoga', 'Ayurvedic treatments'],
    bestTime: 'October–March',
    travelPlanIdea: '3N beach stay with wellness activities',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Cliff beach with calm zones away from crowds',
    tags: ['Beach', 'Nature']
  },
  {
    slug: 'yercaud',
    name: 'Yercaud',
    state: 'Tamil Nadu',
    region: 'South India',
    location: 'Salem district',
    significance: 'Less crowded Ooty',
    howToReach: {
      summary: 'Salem → Yercaud (30 km)',
      byBus: 'Buses from Salem to Yercaud',
      byTrain: 'Train to Salem, then taxi'
    },
    activities: ['Lake boating', 'Viewpoint visits', 'Coffee plantation tours', 'Nature walks'],
    bestTime: 'October–March',
    travelPlanIdea: '2N hill station retreat',
    budget: '₹8K-12K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Less crowded alternative to Ooty',
    tags: ['Nature', 'Trek']
  },
  {
    slug: 'lambasingi',
    name: 'Lambasingi',
    state: 'Andhra Pradesh',
    region: 'South India',
    location: 'Visakhapatnam district',
    significance: '"South India\'s Kashmir"',
    howToReach: {
      summary: 'Visakhapatnam → Lambasingi (100 km)',
      byBus: 'Buses from Visakhapatnam to Chintapalli, then local transport',
      byTrain: 'Train to Visakhapatnam, then taxi'
    },
    activities: ['Frost viewing', 'Coffee plantation tours', 'Tribal village visits', 'Photography'],
    bestTime: 'December–January (for frost)',
    travelPlanIdea: '1-2N winter experience with frost viewing',
    budget: '₹7K-11K',
    category: 'budget',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: '"South India\'s Kashmir" with frost in winter',
    tags: ['Nature', 'Culture']
  },
  {
    slug: 'chembra-peak',
    name: 'Chembra Peak',
    state: 'Kerala',
    region: 'South India',
    location: 'Wayanad district',
    significance: 'Heart-shaped lake trek',
    howToReach: {
      summary: 'Kozhikode → Meppadi → Chembra (70 km)',
      byBus: 'Buses from Kozhikode to Meppadi',
      byAir: 'Kozhikode Airport, then road journey'
    },
    activities: ['Heart lake trek', 'Peak climbing', 'Photography', 'Nature walks'],
    bestTime: 'October–March',
    travelPlanIdea: '2N Wayanad stay with Chembra day trek',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Heart-shaped lake trek to highest peak in Wayanad',
    tags: ['Trek', 'Nature', 'Adventure']
  },
  {
    slug: 'kudremukh',
    name: 'Kudremukh',
    state: 'Karnataka',
    region: 'South India',
    location: 'Chikmagalur district',
    significance: 'Rolling grassland trek',
    howToReach: {
      summary: 'Mangalore → Kudremukh (100 km)',
      byBus: 'Buses from Mangalore/Chikmagalur to Kudremukh',
      byTrain: 'Train to Mangalore, then taxi'
    },
    activities: ['Grassland trek', 'Peak climbing', 'Wildlife spotting', 'Photography'],
    bestTime: 'October–February',
    travelPlanIdea: '2N with full-day Kudremukh peak trek',
    budget: '₹10K-15K',
    category: 'mid',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    description: 'Rolling grassland trek with stunning peak views',
    tags: ['Trek', 'Nature', 'Adventure']
  }
];

export default destinations;
