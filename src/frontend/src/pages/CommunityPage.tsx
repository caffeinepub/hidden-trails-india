import { Users, MessageCircle, Camera, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MotionReveal from '@/components/MotionReveal';

export default function CommunityPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <MotionReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Join the Community
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Connect with
              <span className="text-primary"> Fellow Travelers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your adventures, get travel tips, and discover hidden gems from our community of explorers.
            </p>
          </div>
        </MotionReveal>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <MotionReveal delay={0}>
            <Card className="h-full card-glow">
              <CardHeader>
                <Camera className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Share Your Stories</CardTitle>
                <CardDescription className="text-base">
                  Post photos and experiences from your hidden trail adventures
                </CardDescription>
              </CardHeader>
            </Card>
          </MotionReveal>

          <MotionReveal delay={100}>
            <Card className="h-full card-glow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl">Get Travel Advice</CardTitle>
                <CardDescription className="text-base">
                  Ask questions and get tips from experienced travelers
                </CardDescription>
              </CardHeader>
            </Card>
          </MotionReveal>

          <MotionReveal delay={200}>
            <Card className="h-full card-glow">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mb-4" />
                <CardTitle className="text-2xl">Find Travel Buddies</CardTitle>
                <CardDescription className="text-base">
                  Connect with like-minded travelers for group trips
                </CardDescription>
              </CardHeader>
            </Card>
          </MotionReveal>

          <MotionReveal delay={300}>
            <Card className="h-full card-glow">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Discover New Places</CardTitle>
                <CardDescription className="text-base">
                  Learn about hidden destinations from community recommendations
                </CardDescription>
              </CardHeader>
            </Card>
          </MotionReveal>
        </div>

        {/* Coming Soon Notice */}
        <MotionReveal>
          <Card className="gradient-sunrise border-2 text-center">
            <CardContent className="py-12">
              <h3 className="font-display text-3xl font-bold mb-4">
                Community Features Coming Soon
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're building an amazing community platform for travelers. Stay tuned for updates!
              </p>
            </CardContent>
          </Card>
        </MotionReveal>
      </div>
    </div>
  );
}
