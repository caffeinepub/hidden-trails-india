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

export default function DestinationDetailPage() {
  const { slug } = useParams({ from: '/destinations/$slug' });

  const destination = {
    name: 'Pulga',
    region: 'Himachal Pradesh',
    tagline: 'Hidden Himalayan village with fairy forest trails',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
    snapshot: {
      duration: '3-4 days',
      budget: '₹8,000 - ₹12,000',
      bestSeason: 'March to June, September to November',
      difficulty: 'Easy to Moderate',
      internet: 'Limited (BSNL works)',
    },
    description:
      'Pulga is a tiny hamlet in the Parvati Valley, known for its magical fairy forest trails and peaceful atmosphere. Away from the crowds of Kasol, this hidden gem offers authentic mountain village life with stunning views of snow-capped peaks.',
  };

  return (
    <div className="pb-16 mb-16 md:mb-0">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
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
                <p className="text-lg text-muted-foreground leading-relaxed">{destination.description}</p>
              </section>
            </MotionReveal>

            <Separator />

            {/* How to Reach */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">How to Reach</h2>
                <div className="space-y-6">
                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Plane className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">By Air</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Nearest airport: Bhuntar (Kullu-Manali Airport) - 50 km
                      </p>
                      <p className="text-muted-foreground">
                        From airport, take a taxi to Barshaini (₹1,500-2,000) or bus to Bhuntar town and then local transport.
                      </p>
                      <AffiliateCtaPlaceholder
                        title="Compare Prices"
                        description="Find the best flight deals"
                        ctaText="Search Flights"
                      />
                    </CardContent>
                  </Card>

                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Train className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">By Train</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-2">
                        Nearest railway station: Joginder Nagar - 144 km
                      </p>
                      <p className="text-muted-foreground">
                        Better option: Chandigarh Railway Station (300 km), then take bus to Bhuntar/Kasol.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Bus className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">By Bus</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Direct buses from Delhi to Bhuntar/Kasol (₹800-1,200). From Kasol, local bus or taxi to Barshaini, then 30-min trek to Pulga.
                      </p>
                      <AffiliateCtaPlaceholder
                        title="Book This Hostel"
                        description="Find overnight buses from major cities"
                        ctaText="Search Buses"
                        variant="secondary"
                      />
                    </CardContent>
                  </Card>
                </div>
              </section>
            </MotionReveal>

            <Separator />

            {/* Where to Stay */}
            <MotionReveal>
              <section>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Where to Stay</h2>
                <div className="space-y-6">
                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Home className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">Budget Homestays</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        ₹500-800 per night. Basic rooms with shared bathrooms, home-cooked meals available. Perfect for experiencing authentic village life and connecting with local families.
                      </p>
                      <Badge variant="outline">Recommended for authentic experience</Badge>
                    </CardContent>
                  </Card>

                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">Guesthouses</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        ₹1,000-1,500 per night. Private rooms with attached bathrooms, mountain views, and basic amenities. A comfortable middle-ground option.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Hotel className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">Hotels</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        ₹2,000-4,000 per night. While Pulga itself has limited hotel options, nearby Kasol and Manikaran offer comfortable hotels with modern amenities, hot water, WiFi, and in-house restaurants.
                      </p>
                      <AffiliateCtaPlaceholder
                        title="Find Hotels"
                        description="Browse hotels in Pulga and nearby areas"
                        ctaText="Search Hotels"
                      />
                    </CardContent>
                  </Card>

                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Home className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">Airbnb</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        ₹1,500-3,500 per night. Unique stays including cozy cottages, traditional Himachali homes, and private apartments. Great for longer stays or groups seeking privacy and local character.
                      </p>
                      <AffiliateCtaPlaceholder
                        title="Explore Airbnb"
                        description="Discover unique stays and local experiences"
                        ctaText="View Airbnb Listings"
                        variant="secondary"
                      />
                    </CardContent>
                  </Card>

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
                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Bike className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">Rent a Bike</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Explore the Parvati Valley at your own pace. Bikes available in Kasol and Bhuntar starting from ₹500-1,200 per day depending on the model. Royal Enfield and scooters are popular choices for the mountain roads.
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Valid driving license required</li>
                        <li>Helmets provided with rental</li>
                        <li>Fuel not included in rental price</li>
                        <li>Security deposit typically ₹2,000-5,000</li>
                      </ul>
                      <AffiliateCtaPlaceholder
                        title="Book a Bike"
                        description="Compare bike rental options and prices"
                        ctaText="Find Bike Rentals"
                      />
                    </CardContent>
                  </Card>

                  <Card className="card-glow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Car className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">Cab / Taxi</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Local taxis and shared cabs are readily available for point-to-point travel. Shared taxis from Kasol to Barshaini cost ₹50-100 per person. Private taxis for day trips range from ₹1,500-3,000 depending on distance.
                      </p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Shared taxis: Most economical option</li>
                        <li>Private cabs: Book through your accommodation</li>
                        <li>Negotiate fares before starting journey</li>
                        <li>Limited availability after sunset</li>
                      </ul>
                      <AffiliateCtaPlaceholder
                        title="Book a Cab"
                        description="Pre-book cabs for hassle-free travel"
                        ctaText="Find Cab Services"
                        variant="secondary"
                      />
                    </CardContent>
                  </Card>
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
                      <div className="flex justify-between items-center text-lg">
                        <span>Transport (Delhi-Pulga-Delhi)</span>
                        <span className="font-bold">₹3,000</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center text-lg">
                        <span>Accommodation (3 nights)</span>
                        <span className="font-bold">₹2,400</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center text-lg">
                        <span>Food (3 days)</span>
                        <span className="font-bold">₹1,800</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center text-lg">
                        <span>Local transport & activities</span>
                        <span className="font-bold">₹1,000</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center text-lg">
                        <span>Miscellaneous</span>
                        <span className="font-bold">₹800</span>
                      </div>
                      <Separator className="my-6" />
                      <div className="flex justify-between items-center text-2xl">
                        <span className="font-bold">Total Estimated Cost</span>
                        <span className="font-bold text-primary">₹9,000</span>
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
                  <AccordionItem value="item-1" className="card-glow rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold">
                      Is Pulga safe for solo travelers?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, Pulga is very safe for solo travelers. The village is small and locals are friendly. However, always inform someone about your trekking plans.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="card-glow rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold">
                      What's the best time to visit?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      March to June and September to November are ideal. Avoid monsoon (July-August) due to landslides and winter (December-February) due to heavy snow.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="card-glow rounded-lg px-6">
                    <AccordionTrigger className="text-lg font-semibold">
                      Do I need permits?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      No special permits are required for Pulga. However, if you plan to trek to Kheerganga, you may need to register at the forest checkpoint.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            </MotionReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <MotionReveal delay={200}>
                <Card className="card-glow gradient-sunrise">
                  <CardHeader>
                    <CardTitle className="text-xl">Plan Your Trip</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" size="lg">
                      Download Guide (PDF)
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Save to Wishlist
                    </Button>
                  </CardContent>
                </Card>
              </MotionReveal>

              <MotionReveal delay={300}>
                <Card className="card-glow">
                  <CardHeader>
                    <CardTitle className="text-xl">Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have questions about this destination? We're here to help!
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
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
