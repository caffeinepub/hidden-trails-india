import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DestinationCard from '@/components/DestinationCard';
import MasonryGrid from '@/components/MasonryGrid';
import MotionReveal from '@/components/MotionReveal';
import destinations from '@/data/destinations';

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Filter destinations based on search and budget
  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.significance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesBudget =
      activeTab === 'all' ||
      (activeTab === 'budget' && dest.category === 'budget') ||
      (activeTab === 'mid' && dest.category === 'mid') ||
      (activeTab === 'premium' && dest.category === 'premium');

    return matchesSearch && matchesBudget;
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
              Explore 50 offbeat gems across India with complete travel details
            </p>
          </div>
        </MotionReveal>

        {/* Search */}
        <MotionReveal>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations by name, state, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </MotionReveal>

        {/* Budget Filter Tabs */}
        <MotionReveal>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto">
              <TabsTrigger value="all" className="text-base py-3">
                All ({destinations.length})
              </TabsTrigger>
              <TabsTrigger value="budget" className="text-base py-3">
                Budget ({destinations.filter(d => d.category === 'budget').length})
              </TabsTrigger>
              <TabsTrigger value="mid" className="text-base py-3">
                Mid-Range ({destinations.filter(d => d.category === 'mid').length})
              </TabsTrigger>
              <TabsTrigger value="premium" className="text-base py-3">
                Premium ({destinations.filter(d => d.category === 'premium').length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-12">
              {filteredDestinations.length > 0 ? (
                <MasonryGrid>
                  {filteredDestinations.map((destination, index) => (
                    <MotionReveal key={destination.slug} delay={index * 50}>
                      <DestinationCard {...destination} />
                    </MotionReveal>
                  ))}
                </MasonryGrid>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground mb-6">
                    No destinations found matching your search.
                  </p>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or filters.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </MotionReveal>
      </div>
    </div>
  );
}
