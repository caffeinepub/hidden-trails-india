import { Wallet, TrendingDown, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MotionReveal from '@/components/MotionReveal';

export default function BudgetPage() {
  const budgetRanges = [
    {
      title: 'Under ₹10,000',
      description: 'Weekend getaways and short trips',
      icon: Wallet,
      destinations: ['Gandikota', 'Pulga', 'Chikhaldara'],
      color: 'text-primary',
    },
    {
      title: '₹10,000 - ₹20,000',
      description: 'Week-long adventures',
      icon: Calendar,
      destinations: ['Tirthan Valley', 'Dzukou Valley', 'Majuli'],
      color: 'text-accent',
    },
    {
      title: '₹20,000+',
      description: 'Premium offbeat experiences',
      icon: TrendingDown,
      destinations: ['Ziro Valley', 'Gurez Valley', 'Spiti Circuit'],
      color: 'text-secondary',
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <MotionReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Budget Planning
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Plan Your
              <span className="text-primary"> Budget Trip</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore hidden destinations that match your budget. Every trip includes detailed cost breakdowns.
            </p>
          </div>
        </MotionReveal>

        {/* Budget Ranges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {budgetRanges.map((range, index) => {
            const Icon = range.icon;
            return (
              <MotionReveal key={range.title} delay={index * 100}>
                <Card className="h-full card-glow hover:card-glow-hover transition-all">
                  <CardHeader>
                    <div className={`mb-4 h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
                      <Icon className={`h-7 w-7 ${range.color}`} />
                    </div>
                    <CardTitle className="text-2xl">{range.title}</CardTitle>
                    <CardDescription className="text-base">{range.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">
                        Popular destinations:
                      </p>
                      {range.destinations.map((dest) => (
                        <div key={dest} className="flex items-center gap-2 text-sm">
                          <MapPin className="h-3 w-3 text-primary" />
                          <span>{dest}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionReveal>
            );
          })}
        </div>

        {/* Budget Tips */}
        <MotionReveal>
          <Card className="gradient-ocean border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Budget Travel Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Travel during off-season for better deals on accommodation and transport</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Book buses and trains in advance to save up to 30%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Stay in homestays for authentic experiences at lower costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Eat at local dhabas and restaurants instead of tourist spots</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Travel in groups to split costs for taxis and accommodation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </MotionReveal>
      </div>
    </div>
  );
}
