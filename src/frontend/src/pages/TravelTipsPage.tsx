import { Link } from '@tanstack/react-router';
import { Lightbulb, Backpack, Users, Wifi, Camera, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function TravelTipsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Travel Tips
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Expert advice and insider knowledge for exploring India's hidden trails
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          {/* Key Tips Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Backpack className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Pack Smart</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Travel light but prepared. Bring layers, a good backpack, and essentials like a first-aid kit and power bank.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Connect Locally</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Engage with locals respectfully. They often know the best spots and can share authentic experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Stay Connected</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Download offline maps, carry a local SIM, and share your itinerary with someone back home.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Tips Accordion */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Detailed Travel Advice
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 card-glow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Before You Go
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                  <p>
                    <strong>Research thoroughly:</strong> Understand the destination's culture, weather, and accessibility. Check if permits are required.
                  </p>
                  <p>
                    <strong>Book in advance:</strong> For remote areas, book accommodation and transport ahead, especially during peak season.
                  </p>
                  <p>
                    <strong>Health prep:</strong> Get necessary vaccinations, carry prescribed medications, and pack a comprehensive first-aid kit.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 card-glow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  On the Road
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                  <p>
                    <strong>Start early:</strong> Begin your day early to make the most of daylight and avoid crowds.
                  </p>
                  <p>
                    <strong>Stay flexible:</strong> Weather and road conditions can change. Have backup plans and be patient.
                  </p>
                  <p>
                    <strong>Respect nature:</strong> Leave no trace. Carry your trash back and avoid disturbing wildlife.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 card-glow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Cultural Sensitivity
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                  <p>
                    <strong>Dress appropriately:</strong> Respect local customs, especially in religious sites and conservative areas.
                  </p>
                  <p>
                    <strong>Ask before photographing:</strong> Always seek permission before taking photos of people or private property.
                  </p>
                  <p>
                    <strong>Learn basic phrases:</strong> A few words in the local language go a long way in building connections.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 card-glow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Money & Budgeting
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                  <p>
                    <strong>Carry cash:</strong> Many remote areas have limited ATM access and don't accept cards.
                  </p>
                  <p>
                    <strong>Negotiate fairly:</strong> Bargaining is common, but be respectful and fair to local vendors.
                  </p>
                  <p>
                    <strong>Budget buffer:</strong> Always keep 20-30% extra for unexpected expenses or emergencies.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 card-glow">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Solo vs Group Travel
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3 pt-2">
                  <p>
                    <strong>Solo travel:</strong> Offers flexibility and self-discovery but requires extra safety precautions. Stay in touch regularly.
                  </p>
                  <p>
                    <strong>Group travel:</strong> More economical and safer for remote areas. Share costs and experiences with like-minded travelers.
                  </p>
                  <p>
                    <strong>Join communities:</strong> Connect with travel groups online to find companions or get real-time advice.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Pro Tips */}
          <Card className="card-glow bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Pro Tips from Experienced Travelers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <Camera className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Golden hour (sunrise/sunset) offers the best light for photography in mountain regions.</span>
                </li>
                <li className="flex gap-3">
                  <Coffee className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Try local street food and homestay meals for authentic flavors and cultural immersion.</span>
                </li>
                <li className="flex gap-3">
                  <Backpack className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Keep a small daypack for short hikes and explorations separate from your main luggage.</span>
                </li>
                <li className="flex gap-3">
                  <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Travel during shoulder season (just before/after peak) for better prices and fewer crowds.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to put these tips into action?
            </p>
            <Button asChild size="lg" className="btn-glow">
              <Link to="/destinations">
                Explore Destinations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
