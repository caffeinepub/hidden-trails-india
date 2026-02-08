import { Link } from '@tanstack/react-router';
import { Calculator, Wallet, TrendingDown, PiggyBank, CreditCard, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function BudgetPlanningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Budget Planning
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Plan your finances effectively for unforgettable offbeat adventures
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          {/* Budget Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Budget Travel</CardTitle>
                <CardDescription>Under ₹10,000</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Perfect for weekend getaways. Stay in hostels or budget guesthouses, use public transport, and eat local.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dorms/shared rooms</li>
                  <li>• Local buses/trains</li>
                  <li>• Street food & dhabas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Mid-Range</CardTitle>
                <CardDescription>₹10,000 - ₹20,000</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comfortable week-long trips. Private rooms, mix of transport options, and varied dining experiences.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Private guesthouses</li>
                  <li>• Shared cabs/AC buses</li>
                  <li>• Local restaurants</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Premium</CardTitle>
                <CardDescription>₹20,000+</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Luxury offbeat experiences. Boutique stays, private transport, curated activities, and fine dining.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Boutique hotels/resorts</li>
                  <li>• Private cabs/flights</li>
                  <li>• Premium dining</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sample Budget Breakdown */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Sample Budget Breakdown
            </h2>

            <Card className="card-glow overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">5-Day Trip to Himachal Pradesh (Mid-Range)</CardTitle>
                <CardDescription>Estimated cost for one person</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead className="text-right">Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Transport</TableCell>
                      <TableCell className="text-sm text-muted-foreground">Bus to/from + local cabs</TableCell>
                      <TableCell className="text-right">₹3,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Accommodation</TableCell>
                      <TableCell className="text-sm text-muted-foreground">Guesthouse (₹800/night × 4)</TableCell>
                      <TableCell className="text-right">₹3,200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Food</TableCell>
                      <TableCell className="text-sm text-muted-foreground">₹500/day × 5 days</TableCell>
                      <TableCell className="text-right">₹2,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Activities</TableCell>
                      <TableCell className="text-sm text-muted-foreground">Trekking, entry fees</TableCell>
                      <TableCell className="text-right">₹1,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Miscellaneous</TableCell>
                      <TableCell className="text-sm text-muted-foreground">Snacks, souvenirs, tips</TableCell>
                      <TableCell className="text-right">₹1,000</TableCell>
                    </TableRow>
                    <TableRow className="font-bold">
                      <TableCell>Total</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="text-right">₹11,700</TableCell>
                    </TableRow>
                    <TableRow className="bg-muted/50">
                      <TableCell className="font-medium">Buffer (20%)</TableCell>
                      <TableCell className="text-sm text-muted-foreground">For emergencies</TableCell>
                      <TableCell className="text-right">₹2,340</TableCell>
                    </TableRow>
                    <TableRow className="font-bold text-lg">
                      <TableCell>Final Budget</TableCell>
                      <TableCell></TableCell>
                      <TableCell className="text-right text-primary">₹14,040</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Money-Saving Tips */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Money-Saving Tips
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <TrendingDown className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Travel Off-Season</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Visit during shoulder months (just before/after peak season) for 30-50% lower accommodation and transport costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <PiggyBank className="h-6 w-6 text-accent" />
                    <CardTitle className="text-lg">Book in Advance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Early bookings for trains, buses, and accommodation can save 20-40%. Use advance booking discounts.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Wallet className="h-6 w-6 text-secondary" />
                    <CardTitle className="text-lg">Eat Local</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Local dhabas and street food are not only cheaper but offer authentic flavors. Budget ₹300-500/day instead of ₹800+.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Share Costs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Travel with friends or join group tours to split cab fares, accommodation, and activity costs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Important Note */}
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Pro tip:</strong> Always keep 20-30% extra budget as a buffer for unexpected expenses, weather delays, or spontaneous experiences. Cash is king in remote areas—carry enough as ATMs may be scarce.
            </AlertDescription>
          </Alert>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to plan your budget-friendly adventure?
            </p>
            <Button asChild size="lg" className="btn-glow">
              <Link to="/destinations">
                Browse Destinations by Budget
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
