import { Link } from '@tanstack/react-router';
import { Shield, AlertTriangle, Phone, Heart, MapPin, Wifi } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

export default function SafetyGuidePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Safety Guide
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Essential safety information for exploring India's hidden trails with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          {/* Emergency Alert */}
          <Alert className="mb-12 border-destructive/50 bg-destructive/5">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertTitle className="text-lg font-bold">Emergency Numbers</AlertTitle>
            <AlertDescription className="mt-2">
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div><strong>Police:</strong> 100</div>
                <div><strong>Ambulance:</strong> 102</div>
                <div><strong>Fire:</strong> 101</div>
                <div><strong>Women Helpline:</strong> 1091</div>
                <div><strong>Tourist Helpline:</strong> 1363</div>
                <div><strong>Disaster Management:</strong> 108</div>
              </div>
            </AlertDescription>
          </Alert>

          {/* Key Safety Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Health & Wellness</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Before travel:</strong> Get necessary vaccinations (Hepatitis A/B, Typhoid). Carry prescribed medications with prescriptions.
                </p>
                <p>
                  <strong>First-aid kit:</strong> Include bandages, antiseptic, pain relievers, anti-diarrheal, altitude sickness medication, and insect repellent.
                </p>
                <p>
                  <strong>Water safety:</strong> Drink only bottled or purified water. Carry water purification tablets for remote areas.
                </p>
                <p>
                  <strong>Altitude sickness:</strong> Acclimatize gradually in high-altitude regions. Descend immediately if symptoms worsen.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Navigation & Communication</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Offline maps:</strong> Download Google Maps or Maps.me offline for areas with poor connectivity.
                </p>
                <p>
                  <strong>Share itinerary:</strong> Always inform family/friends of your travel plans and check in regularly.
                </p>
                <p>
                  <strong>Local SIM:</strong> Get a local SIM card for better connectivity. Jio and Airtel have good coverage in most areas.
                </p>
                <p>
                  <strong>GPS device:</strong> Consider carrying a GPS tracker or satellite phone for extremely remote treks.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Personal Safety</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Solo travelers:</strong> Stay in well-reviewed accommodations. Avoid isolated areas after dark. Trust your instincts.
                </p>
                <p>
                  <strong>Valuables:</strong> Use hotel safes. Carry minimal cash and keep backup cards separately. Use money belts.
                </p>
                <p>
                  <strong>Scams:</strong> Be wary of overly friendly strangers offering deals. Book transport through official channels.
                </p>
                <p>
                  <strong>Women travelers:</strong> Dress modestly in conservative areas. Avoid traveling alone at night. Join women-only groups if possible.
                </p>
              </CardContent>
            </Card>

            <Card className="card-glow hover:card-glow-hover transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Weather & Environment</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Weather check:</strong> Monitor forecasts daily. Mountain weather can change rapidly—be prepared.
                </p>
                <p>
                  <strong>Monsoon caution:</strong> Avoid landslide-prone areas during heavy rains. Roads may be blocked or dangerous.
                </p>
                <p>
                  <strong>Wildlife:</strong> Maintain safe distance from animals. Don't feed wildlife. Carry a whistle or noise-maker for bears.
                </p>
                <p>
                  <strong>Natural disasters:</strong> Know evacuation routes. Follow local authority instructions during earthquakes or floods.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trekking Safety */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Trekking Safety Essentials
            </h2>

            <Card className="card-glow">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Before the Trek
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Assess your fitness level honestly</li>
                      <li>• Hire experienced local guides for difficult treks</li>
                      <li>• Check permit requirements and obtain them in advance</li>
                      <li>• Inform local authorities of your trekking plans</li>
                      <li>• Pack appropriate gear (layers, rain protection, sturdy boots)</li>
                      <li>• Carry enough food and water with purification tablets</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-accent" />
                      During the Trek
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Start early to avoid afternoon weather changes</li>
                      <li>• Stay on marked trails—don't take shortcuts</li>
                      <li>• Pace yourself and take regular breaks</li>
                      <li>• Stay hydrated and eat energy-rich snacks</li>
                      <li>• Turn back if weather worsens or you feel unwell</li>
                      <li>• Never trek alone in remote or difficult terrain</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator className="my-12" />

          {/* Insurance & Documentation */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center">
              Insurance & Documentation
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-lg">Travel Insurance</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    <strong>Highly recommended</strong> for adventure activities and remote destinations.
                  </p>
                  <p>
                    Ensure coverage includes: medical emergencies, evacuation, trip cancellation, lost baggage, and adventure sports.
                  </p>
                  <p>
                    Keep insurance documents and emergency contact numbers accessible offline.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-lg">Important Documents</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>
                    <strong>Carry physical and digital copies:</strong>
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Government-issued ID (Aadhaar, Passport)</li>
                    <li>• Travel permits (if required)</li>
                    <li>• Hotel bookings and transport tickets</li>
                    <li>• Emergency contact list</li>
                    <li>• Medical prescriptions and insurance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final Tips */}
          <Card className="card-glow bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Wifi className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Stay Connected & Informed</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                <strong>Register with your embassy</strong> if traveling to sensitive border areas or remote regions.
              </p>
              <p>
                <strong>Follow local news</strong> for weather alerts, political situations, or natural disasters.
              </p>
              <p>
                <strong>Join travel communities</strong> online for real-time updates and advice from fellow travelers.
              </p>
              <p>
                <strong>Trust your instincts.</strong> If something feels unsafe, it probably is. Don't hesitate to change plans.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Prepared and ready to explore safely?
            </p>
            <Button asChild size="lg" className="btn-glow">
              <Link to="/destinations">
                Start Your Adventure
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
