import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, MapPin, Wallet, Calendar, TrendingUp, BookOpen, Lightbulb, Calculator, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CinematicHero from '@/components/CinematicHero';
import DestinationCard from '@/components/DestinationCard';
import InteractiveIndiaMap from '@/components/InteractiveIndiaMap';
import SocialProofGallery from '@/components/SocialProofGallery';
import MotionReveal from '@/components/MotionReveal';
import { useParallax } from '@/hooks/useParallax';
import { getFeaturedDestinations } from '@/data/destinations';

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

const resourceCards = [
  {
    title: 'Resources',
    description: 'Essential guides and tools for your journey',
    icon: BookOpen,
    path: '/resources',
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    title: 'Travel Tips',
    description: 'Expert advice for offbeat adventures',
    icon: Lightbulb,
    path: '/travel-tips',
    gradient: 'from-accent/20 to-secondary/20',
  },
  {
    title: 'Budget Planning',
    description: 'Plan your trip finances effectively',
    icon: Calculator,
    path: '/budget-planning',
    gradient: 'from-secondary/20 to-primary/20',
  },
  {
    title: 'Safety Guide',
    description: 'Stay safe while exploring hidden trails',
    icon: Shield,
    path: '/safety-guide',
    gradient: 'from-primary/20 to-secondary/20',
  },
];

export default function HomePage() {
  const parallaxRef = useParallax({ speed: 0.3 });
  const featuredDestinations = getFeaturedDestinations();

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
                <div key={destination.slug} className="shrink-0 w-[85vw] snap-center">
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

      {/* Resources Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-desert opacity-20" />
        <div className="container relative z-10">
          <MotionReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to plan your perfect offbeat adventure
              </p>
            </div>
          </MotionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {resourceCards.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <MotionReveal key={resource.title} delay={index * 100}>
                  <Link
                    to={resource.path}
                    className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <Card className="h-full card-glow hover:card-glow-hover transition-all cursor-pointer border-2 hover:border-primary/50">
                      <CardHeader className="pb-4">
                        <div className={`mx-auto mb-6 h-20 w-20 rounded-2xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-center mb-3">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground text-center leading-relaxed">
                          {resource.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive India Map */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
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
        </div>
      </section>

      {/* Social Proof Gallery */}
      <section className="py-24 md:py-32">
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
      <section className="py-24 md:py-32 bg-muted/30">
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
                  Read Travel Stories
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
