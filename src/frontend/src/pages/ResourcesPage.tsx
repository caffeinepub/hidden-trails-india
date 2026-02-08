import { Link } from '@tanstack/react-router';
import { BookOpen, Map, Compass, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your complete toolkit for planning unforgettable offbeat adventures across India
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Destination Guides</CardTitle>
                    <CardDescription>Comprehensive guides for every hidden gem</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Detailed information on how to reach, where to stay, what to do, and how much to budget for each destination.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/destinations">
                    Browse Destinations
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Compass className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Travel Tips</CardTitle>
                    <CardDescription>Expert advice for offbeat adventures</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn from experienced travelers about packing, safety, local customs, and making the most of your journey.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/travel-tips">
                    View Travel Tips
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Budget Planning</CardTitle>
                    <CardDescription>Plan your finances effectively</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Realistic budget breakdowns, money-saving tips, and cost estimates for accommodation, food, and activities.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/budget-planning">
                    Plan Your Budget
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">Safety Guide</CardTitle>
                    <CardDescription>Stay safe on hidden trails</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Essential safety information, emergency contacts, health tips, and precautions for remote destinations.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/safety-guide">
                    Read Safety Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
              Quick Reference
            </h2>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Essential Packing List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">First Aid Kit</Badge>
                  <Badge variant="secondary">Power Bank</Badge>
                  <Badge variant="secondary">Water Purification</Badge>
                  <Badge variant="secondary">Offline Maps</Badge>
                  <Badge variant="secondary">Emergency Cash</Badge>
                  <Badge variant="secondary">Weather-appropriate Clothing</Badge>
                  <Badge variant="secondary">Headlamp/Torch</Badge>
                  <Badge variant="secondary">Local SIM Card</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Best Time to Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Himalayas (North)</p>
                    <p className="text-muted-foreground">April-June, September-November</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Northeast</p>
                    <p className="text-muted-foreground">October-April</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">South India</p>
                    <p className="text-muted-foreground">October-March</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Western Ghats</p>
                    <p className="text-muted-foreground">June-September (monsoon), October-February</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-xl">Useful External Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Indian Railways (IRCTC) for train bookings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">India Meteorological Department for weather updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">State tourism websites for permits and regulations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
