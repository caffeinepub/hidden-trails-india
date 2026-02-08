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
import SafeImage from '@/components/SafeImage';
import destinations from '@/data/destinations';

export default function DestinationDetailPage() {
  const { slug } = useParams({ from: '/destinations/$slug' });

  const destination = destinations.find(d => d.slug === slug);

  if (!destination) {
    return (
      <div className="py-24 md:py-32">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Destination Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The destination you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link to="/destinations">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Destinations
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
        <SafeImage
          src={destination.image}
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
              {destination.state}
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
                      <MapPin className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">{destination.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wallet className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Budget Range</p>
                        <p className="text-sm text-muted-foreground">{destination.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Best Time</p>
                        <p className="text-sm text-muted-foreground">{destination.bestTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mountain className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Region</p>
                        <p className="text-sm text-muted-foreground">{destination.region}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionReveal>

            {/* Why Visit / Significance */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Why Visit {destination.name}?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{destination.significance}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{destination.description}</p>
              </section>
            </MotionReveal>

            <Separator />

            {/* How to Reach */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">How to Reach</h2>
                <p className="text-lg text-muted-foreground mb-6">{destination.howToReach.summary}</p>
                <div className="space-y-6">
                  {destination.howToReach.byAir && (
                    <Card className="card-glow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Plane className="h-6 w-6 text-primary" />
                          <CardTitle className="text-xl">By Air</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{destination.howToReach.byAir}</p>
                      </CardContent>
                    </Card>
                  )}

                  {destination.howToReach.byTrain && (
                    <Card className="card-glow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Train className="h-6 w-6 text-primary" />
                          <CardTitle className="text-xl">By Train</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{destination.howToReach.byTrain}</p>
                      </CardContent>
                    </Card>
                  )}

                  {destination.howToReach.byBus && (
                    <Card className="card-glow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Bus className="h-6 w-6 text-primary" />
                          <CardTitle className="text-xl">By Bus</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{destination.howToReach.byBus}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </section>
            </MotionReveal>

            <Separator />

            {/* Activities */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Activities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {destination.activities.map((activity, index) => (
                    <Card key={index} className="card-glow">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <Backpack className="h-5 w-5 text-primary" />
                          <p className="font-medium">{activity}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </MotionReveal>

            <Separator />

            {/* Travel Plan Idea */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Travel Plan Idea</h2>
                <Card className="card-glow">
                  <CardContent className="pt-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">{destination.travelPlanIdea}</p>
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
                  <AccordionItem value="item-1" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Is {destination.name} safe for solo travelers?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, {destination.name} is generally safe for solo travelers. However, always inform someone about your itinerary, stay in touch with family/friends, and follow local guidelines. It's recommended to travel during daylight hours and stay in well-reviewed accommodations.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      What should I pack for {destination.name}?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Pack comfortable trekking shoes, layered clothing, rain gear (if visiting during monsoon), sunscreen, basic first-aid kit, reusable water bottle, power bank, and any personal medications. Check the weather forecast before your trip and pack accordingly.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Are there ATMs and mobile network available?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Mobile network and ATM availability varies by location. It's best to carry sufficient cash and inform your bank about your travel plans. BSNL usually has better coverage in remote areas. Download offline maps before you travel.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                      Can I visit {destination.name} with family/kids?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, {destination.name} can be visited with family. However, consider the difficulty level of activities and ensure children are comfortable with the terrain. Choose family-friendly accommodations and plan shorter, easier activities for younger kids.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </MotionReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Affiliate CTAs */}
            <MotionReveal>
              <div className="space-y-6 sticky top-24">
                <AffiliateCtaPlaceholder
                  title="Book Your Stay"
                  description="Find the best accommodation deals"
                  ctaText="Search Hotels"
                />
                <AffiliateCtaPlaceholder
                  title="Travel Insurance"
                  description="Protect your trip with comprehensive coverage"
                  ctaText="Get Insured"
                  variant="secondary"
                />
                <AffiliateCtaPlaceholder
                  title="Travel Gear"
                  description="Essential equipment for your adventure"
                  ctaText="Shop Gear"
                  variant="secondary"
                />
                <TrustBadges />
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
