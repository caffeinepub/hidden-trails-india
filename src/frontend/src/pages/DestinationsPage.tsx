import { useState } from 'react';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import DestinationCard from '@/components/DestinationCard';
import MasonryGrid from '@/components/MasonryGrid';
import MotionReveal from '@/components/MotionReveal';
import { getAllDestinations, getDestinationsByMacroRegion, getMacroRegionName, type MacroRegion } from '@/data/destinations';

export default function DestinationsPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: '/destinations' });
  const regionParam = (search as { region?: string }).region as MacroRegion | undefined;

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const allDestinations = regionParam
    ? getDestinationsByMacroRegion(regionParam)
    : getAllDestinations();

  const filteredDestinations = allDestinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === 'all' || dest.category === activeTab;

    return matchesSearch && matchesTab;
  });

  const handleClearRegion = () => {
    navigate({ to: '/destinations', search: {} });
  };

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

        {/* Region Filter Badge */}
        {regionParam && (
          <MotionReveal>
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="text-base px-4 py-2 gap-2">
                {getMacroRegionName(regionParam)}
                <button
                  onClick={handleClearRegion}
                  className="ml-1 hover:bg-muted rounded-full p-0.5 transition-colors"
                  aria-label="Clear region filter"
                >
                  <X className="h-4 w-4" />
                </button>
              </Badge>
            </div>
          </MotionReveal>
        )}

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
            {regionParam && ` in ${getMacroRegionName(regionParam)}`}
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
