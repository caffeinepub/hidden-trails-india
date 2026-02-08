import { useParams, Link } from '@tanstack/react-router';
import {
  MapPin,
  Calendar,
  Wallet,
  Signal,
  TrendingUp,
  ArrowLeft,
  Train,
  Plane,
  Bus,
  Home,
  Backpack,
  Mountain,
  Bike,
  Car,
  Hotel,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AffiliateCtaPlaceholder from '@/components/AffiliateCtaPlaceholder';
import TrustBadges from '@/components/TrustBadges';
import MotionReveal from '@/components/MotionReveal';
import { getDestinationBySlug } from '@/data/destinations';

export default function DestinationDetailPage() {
  const { slug } = useParams({ from: '/destinations/$slug' });
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <div className="py-24 md:py-32">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Destination Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn't find the destination you're looking for.
          </p>
          <Button asChild size="lg">
            <Link to="/destinations">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Destinations
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-16 mb-16 md:mb-0">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container">
            <Button asChild variant="ghost" size="sm" className="mb-6 glass">
              <Link to="/destinations">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Destinations
              </Link>
            </Button>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
              {destination.name}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 flex items-center gap-2 drop-shadow-lg">
              <MapPin className="h-6 w-6" />
              {destination.region}
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Snapshot */}
            <MotionReveal>
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Snapshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Duration</p>
                        <p className="text-sm text-muted-foreground">{destination.snapshot.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wallet className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Budget Range</p>
                        <p className="text-sm text-muted-foreground">{destination.snapshot.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Best Season</p>
                        <p className="text-sm text-muted-foreground">{destination.snapshot.bestSeason}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Difficulty</p>
                        <p className="text-sm text-muted-foreground">{destination.snapshot.difficulty}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:col-span-2">
                      <Signal className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Internet Availability</p>
                        <p className="text-sm text-muted-foreground">{destination.snapshot.internet}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>

            {/* Why Visit */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Why Visit {destination.name}?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{destination.detailedDescription}</p>
              </section>
            </MotionReveal>

            <Separator />

            {/* How to Reach */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">How to Reach</h2>
                <div className="space-y-6">
                  {destination.transport.map((transport) => {
                    const Icon = transport.type === 'air' ? Plane : transport.type === 'train' ? Train : Bus;
                    return (
                      <Card key={transport.type} className="card-glow">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Icon className="h-6 w-6 text-primary" />
                            <CardTitle className="text-xl">{transport.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{transport.description}</p>
                          <p className="text-muted-foreground">{transport.details}</p>
                          {transport.type === 'air' && (
                            <AffiliateCtaPlaceholder
                              title="Compare Prices"
                              description="Find the best flight deals"
                              ctaText="Search Flights"
                            />
                          )}
                          {transport.type === 'bus' && (
                            <AffiliateCtaPlaceholder
                              title="Book This Hostel"
                              description="Find overnight buses from major cities"
                              ctaText="Search Buses"
                              variant="secondary"
                            />
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            </MotionReveal>

            <Separator />

            {/* Where to Stay */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Where to Stay</h2>
                <div className="space-y-6">
                  {destination.accommodation.map((acc) => {
                    const Icon = acc.type === 'homestay' ? Home : acc.type === 'guesthouse' ? Building2 : acc.type === 'hotel' ? Hotel : Home;
                    return (
                      <Card key={acc.type} className="card-glow">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Icon className="h-6 w-6 text-primary" />
                            <CardTitle className="text-xl">{acc.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">
                            {acc.priceRange}. {acc.description}
                          </p>
                          {acc.type === 'homestay' && (
                            <Badge variant="outline">Recommended for authentic experience</Badge>
                          )}
                          {acc.type === 'hotel' && (
                            <AffiliateCtaPlaceholder
                              title="Find Hotels"
                              description={`Browse hotels in ${destination.name} and nearby areas`}
                              ctaText="Search Hotels"
                            />
                          )}
                          {acc.type === 'airbnb' && (
                            <AffiliateCtaPlaceholder
                              title="Explore Airbnb"
                              description="Discover unique stays and local experiences"
                              ctaText="View Airbnb Listings"
                              variant="secondary"
                            />
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                  <TrustBadges />
                </div>
              </section>
            </MotionReveal>

            <Separator />

            {/* Local Transport */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Local Transport</h2>
                <div className="space-y-6">
                  {destination.localTransport.map((transport) => {
                    const Icon = transport.type === 'bike' ? Bike : Car;
                    return (
                      <Card key={transport.type} className="card-glow">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <Icon className="h-6 w-6 text-primary" />
                            <CardTitle className="text-xl">{transport.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground">{transport.description}</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {transport.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                          <AffiliateCtaPlaceholder
                            title={transport.type === 'bike' ? 'Book a Bike' : 'Book a Cab'}
                            description={transport.type === 'bike' ? 'Compare bike rental options and prices' : 'Pre-book cabs for hassle-free travel'}
                            ctaText={transport.type === 'bike' ? 'Find Bike Rentals' : 'Find Cab Services'}
                            variant={transport.type === 'bike' ? 'default' : 'secondary'}
                          />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            </MotionReveal>

            <Separator />

            {/* Budget Breakdown */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Budget Breakdown</h2>
                <Card className="card-glow">
                  <CardContent className="pt-8">
                    <div className="space-y-4">
                      {destination.budgetBreakdown.map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between items-center text-lg">
                            <span>{item.label}</span>
                            <span className="font-bold">₹{item.amount.toLocaleString()}</span>
                          </div>
                          {idx < destination.budgetBreakdown.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                      <Separator className="my-6" />
                      <div className="flex justify-between items-center text-2xl">
                        <span className="font-bold">Total Estimated Cost</span>
                        <span className="font-bold text-primary">₹{destination.budgetTotal.toLocaleString()}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                      * Costs are approximate and may vary based on season and personal preferences
                    </p>
                  </CardContent>
                </Card>
              </section>
            </MotionReveal>

            <Separator />

            {/* FAQ */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {destination.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </MotionReveal>

            {/* Affiliate CTAs */}
            <MotionReveal>
              <div className="grid md:grid-cols-2 gap-6">
                <AffiliateCtaPlaceholder
                  title="Travel Insurance"
                  description="Protect your trip with comprehensive coverage"
                  ctaText="Get Insured"
                />
                <AffiliateCtaPlaceholder
                  title="Travel Gear"
                  description="Essential equipment for your adventure"
                  ctaText="Shop Gear"
                  variant="secondary"
                />
              </div>
            </MotionReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <MotionReveal>
                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Backpack className="h-5 w-5" />
                      Trip Essentials
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">What to Pack</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Comfortable trekking shoes</li>
                        <li>Warm layers & rain gear</li>
                        <li>Power bank & chargers</li>
                        <li>First-aid kit & medicines</li>
                        <li>Reusable water bottle</li>
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <p className="font-semibold mb-2">Important Tips</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Carry sufficient cash</li>
                        <li>Respect local culture</li>
                        <li>Leave no trace behind</li>
                        <li>Book accommodation in advance</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </MotionReveal>

              <MotionReveal>
                <Card className="card-glow bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mountain className="h-5 w-5" />
                      Plan Your Trip
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Need help planning your {destination.name} adventure? Check out our comprehensive travel resources.
                    </p>
                    <div className="space-y-2">
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/travel-tips">Travel Tips</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/budget-planning">Budget Planning</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/safety-guide">Safety Guide</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
