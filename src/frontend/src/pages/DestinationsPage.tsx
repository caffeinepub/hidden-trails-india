import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DestinationCard from '@/components/DestinationCard';
import MasonryGrid from '@/components/MasonryGrid';
import MotionReveal from '@/components/MotionReveal';
import { TagType } from '@/components/TagChip';

const allDestinations = [
  {
    slug: 'pulga',
    name: 'Pulga',
    region: 'Himachal Pradesh',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    description: 'Hidden Himalayan village with fairy forest trails',
    tags: ['Trek', 'Nature', 'Camping'] as TagType[],
  },
  {
    slug: 'gurez',
    name: 'Gurez Valley',
    region: 'Kashmir',
    budget: '₹15K-20K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'Untouched valley near the LoC with pristine beauty',
    tags: ['Valley', 'Trek'] as TagType[],
  },
  {
    slug: 'tirthan',
    name: 'Tirthan Valley',
    region: 'Himachal Pradesh',
    budget: '₹10K-15K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    description: 'Crystal clear river and offbeat trekking routes',
    tags: ['Nature', 'Trek', 'Camping'] as TagType[],
  },
  {
    slug: 'majuli',
    name: 'Majuli',
    region: 'Assam',
    budget: '₹12K-18K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    description: "World's largest river island with unique culture",
    tags: ['Nature', 'Beach'] as TagType[],
  },
  {
    slug: 'dzukou',
    name: 'Dzukou Valley',
    region: 'Nagaland',
    budget: '₹10K-14K',
    category: 'mid',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    description: 'Valley of flowers in Northeast India',
    tags: ['Valley', 'Trek', 'Nature'] as TagType[],
  },
  {
    slug: 'gandikota',
    name: 'Gandikota',
    region: 'Andhra Pradesh',
    budget: '₹6K-10K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    description: "India's Grand Canyon with stunning gorge views",
    tags: ['Valley', 'Camping'] as TagType[],
  },
  {
    slug: 'ziro',
    name: 'Ziro Valley',
    region: 'Arunachal Pradesh',
    budget: '₹18K-25K',
    category: 'premium',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'UNESCO heritage site with Apatani tribal culture',
    tags: ['Valley', 'Trek', 'Nature'] as TagType[],
  },
  {
    slug: 'chikhaldara',
    name: 'Chikhaldara',
    region: 'Maharashtra',
    budget: '₹8K-12K',
    category: 'budget',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    description: 'Hill station with coffee plantations and waterfalls',
    tags: ['Nature', 'Trek'] as TagType[],
  },
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === 'all' || dest.category === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <MotionReveal>
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Hidden Destinations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore offbeat places across India with detailed guides and budget breakdowns
            </p>
          </div>
        </MotionReveal>

        {/* Search and Filters */}
        <MotionReveal>
          <div className="mb-12 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations, regions, or activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-12">
                <TabsTrigger value="all" className="text-base">All</TabsTrigger>
                <TabsTrigger value="budget" className="text-base">Under ₹10K</TabsTrigger>
                <TabsTrigger value="mid" className="text-base">₹10K-₹20K</TabsTrigger>
                <TabsTrigger value="premium" className="text-base">₹20K+</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </MotionReveal>

        {/* Results Count */}
        <MotionReveal>
          <p className="text-sm text-muted-foreground mb-8">
            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </MotionReveal>

        {/* Destinations Grid - Mobile: Single Column, Desktop: Masonry */}
        {filteredDestinations.length > 0 ? (
          <>
            {/* Mobile */}
            <div className="md:hidden space-y-6">
              {filteredDestinations.map((destination, index) => (
                <MotionReveal key={destination.slug} delay={index * 50}>
                  <DestinationCard {...destination} />
                </MotionReveal>
              ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
              <MasonryGrid>
                {filteredDestinations.map((destination, index) => (
                  <div key={destination.slug} className="masonry-item">
                    <MotionReveal delay={index * 50}>
                      <DestinationCard {...destination} />
                    </MotionReveal>
                  </div>
                ))}
              </MasonryGrid>
            </div>
          </>
        ) : (
          <MotionReveal>
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No destinations found. Try adjusting your search or filters.
              </p>
            </div>
          </MotionReveal>
        )}
      </div>
    </div>
  );
}
