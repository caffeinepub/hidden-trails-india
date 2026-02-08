import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, MapPin, Wallet, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CinematicHero from '@/components/CinematicHero';
import DestinationCard from '@/components/DestinationCard';
import InteractiveIndiaMap from '@/components/InteractiveIndiaMap';
import SocialProofGallery from '@/components/SocialProofGallery';
import MotionReveal from '@/components/MotionReveal';
import { useParallax } from '@/hooks/useParallax';
import { TagType } from '@/components/TagChip';

const featuredDestinations = [
  {
    slug: 'pulga',
    name: 'Pulga',
    region: 'Himachal Pradesh',
    budget: '₹8K-12K',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    description: 'Hidden Himalayan village with fairy forest trails',
    tags: ['Trek', 'Nature', 'Camping'] as TagType[],
  },
  {
    slug: 'gurez',
    name: 'Gurez Valley',
    region: 'Kashmir',
    budget: '₹15K-20K',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    description: 'Untouched valley near the LoC with pristine beauty',
    tags: ['Valley', 'Trek'] as TagType[],
  },
  {
    slug: 'tirthan',
    name: 'Tirthan Valley',
    region: 'Himachal Pradesh',
    budget: '₹10K-15K',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
    description: 'Crystal clear river and offbeat trekking routes',
    tags: ['Nature', 'Trek', 'Camping'] as TagType[],
  },
  {
    slug: 'majuli',
    name: 'Majuli',
    region: 'Assam',
    budget: '₹12K-18K',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    description: "World's largest river island with unique culture",
    tags: ['Nature', 'Beach'] as TagType[],
  },
  {
    slug: 'dzukou',
    name: 'Dzukou Valley',
    region: 'Nagaland',
    budget: '₹10K-14K',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    description: 'Valley of flowers in Northeast India',
    tags: ['Valley', 'Trek', 'Nature'] as TagType[],
  },
  {
    slug: 'gandikota',
    name: 'Gandikota',
    region: 'Andhra Pradesh',
    budget: '₹6K-10K',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    description: "India's Grand Canyon with stunning gorge views",
    tags: ['Valley', 'Camping'] as TagType[],
  },
];

const budgetCategories = [
  {
    title: 'Under ₹10K',
    description: 'Budget-friendly weekend escapes',
    icon: Wallet,
    count: '15+ destinations',
  },
  {
    title: '₹10K-₹20K',
    description: 'Comfortable week-long adventures',
    icon: Calendar,
    count: '20+ destinations',
  },
  {
    title: '₹20K+ Premium',
    description: 'Luxury offbeat experiences',
    icon: TrendingUp,
    count: '10+ destinations',
  },
];

export default function HomePage() {
  const parallaxRef = useParallax({ speed: 0.3 });

  return (
    <div className="flex flex-col">
      {/* Cinematic Hero */}
      <CinematicHero />

      {/* Featured Destinations */}
      <section id="featured-section" className="py-24 md:py-32 relative overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 gradient-ocean opacity-30 parallax" />
        <div className="container relative z-10">
          <MotionReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Featured Hidden Destinations
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Start your journey with these carefully selected offbeat gems across India
              </p>
            </div>
          </MotionReveal>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4">
              {featuredDestinations.map((destination, index) => (
                <div key={destination.slug} className="flex-shrink-0 w-[85vw] snap-center">
                  <MotionReveal delay={index * 50}>
                    <DestinationCard {...destination} />
                  </MotionReveal>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Masonry Grid */}
          <div className="hidden md:block">
            <div className="masonry">
              {featuredDestinations.map((destination, index) => (
                <div key={destination.slug} className="masonry-item">
                  <MotionReveal delay={index * 100}>
                    <DestinationCard {...destination} />
                  </MotionReveal>
                </div>
              ))}
            </div>
          </div>

          <MotionReveal>
            <div className="text-center mt-16">
              <Button asChild size="lg" className="btn-glow">
                <Link to="/destinations">
                  View All Destinations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <MotionReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Why Hidden Trails India?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're not just another travel blog. Every destination is carefully curated with practical information you actually need.
              </p>
            </div>
          </MotionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: 'Less Crowded', desc: 'Only destinations away from tourist crowds' },
              { icon: Wallet, title: 'Budget Breakdown', desc: 'Detailed cost estimates for every trip' },
              { icon: Calendar, title: 'Real Logistics', desc: 'How to reach, where to stay, what to do' },
              { icon: TrendingUp, title: 'Local Insights', desc: 'Authentic experiences from real travelers' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <MotionReveal key={item.title} delay={index * 100}>
                  <Card className="h-full card-glow hover:card-glow-hover transition-all">
                    <CardHeader>
                      <Icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive India Map */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-desert opacity-20" />
        <div className="container relative z-10">
          <MotionReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Explore by Region
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Click on any region to discover hidden destinations
              </p>
            </div>
          </MotionReveal>

          <MotionReveal>
            <InteractiveIndiaMap />
          </MotionReveal>

          {/* Region Sections */}
          <div className="mt-24 space-y-16">
            {['north', 'south', 'east', 'west', 'northeast'].map((region) => (
              <div key={region} id={`region-${region}`} className="scroll-mt-24">
                <MotionReveal>
                  <h3 className="font-display text-3xl font-bold mb-8 capitalize">
                    {region.replace('northeast', 'Northeast')} India
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Discover hidden gems in {region} India with detailed guides and budget breakdowns.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/destinations">
                      Explore {region.charAt(0).toUpperCase() + region.slice(1)} Destinations
                    </Link>
                  </Button>
                </MotionReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Gallery */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <MotionReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Traveler Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real adventures from our community of explorers
              </p>
            </div>
          </MotionReveal>

          <MotionReveal>
            <SocialProofGallery />
          </MotionReveal>
        </div>
      </section>

      {/* Explore by Budget */}
      <section className="py-24 md:py-32">
        <div className="container">
          <MotionReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Explore by Budget
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find destinations that match your travel budget
              </p>
            </div>
          </MotionReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {budgetCategories.map((category, index) => (
              <MotionReveal key={category.title} delay={index * 100}>
                <Card className="text-center hover:card-glow-hover transition-all card-glow h-full">
                  <CardHeader>
                    <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{category.title}</CardTitle>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-muted-foreground mb-6">
                      {category.count}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/destinations">
                        Explore
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90" />
        <div className="container relative z-10 text-center text-primary-foreground">
          <MotionReveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Ready to Discover Hidden India?
            </h2>
            <p className="text-lg md:text-xl mb-12 opacity-95 max-w-3xl mx-auto">
              Start exploring offbeat destinations with detailed guides, budget breakdowns, and real travel logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                <Link to="/destinations">
                  Browse All Destinations
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/blog">
                  Read Travel Tips
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
