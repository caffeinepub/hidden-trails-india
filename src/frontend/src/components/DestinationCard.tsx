import { Link } from '@tanstack/react-router';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TagChip, { TagType } from '@/components/TagChip';
import SafeImage from '@/components/SafeImage';

interface DestinationCardProps {
  slug: string;
  name: string;
  state?: string;
  region?: string;
  budget: string;
  image: string;
  description: string;
  tags: TagType[];
}

export default function DestinationCard({
  slug,
  name,
  state,
  region,
  budget,
  image,
  description,
  tags,
}: DestinationCardProps) {
  return (
    <Link
      to="/destinations/$slug"
      params={{ slug }}
      className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
    >
      <Card className="overflow-hidden h-full card-glow hover:card-glow-hover transition-all">
        <div className="relative aspect-[4/3] overflow-hidden">
          <SafeImage
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            aspectRatio="landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="glass">
              {budget}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6 relative">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
              <MapPin className="h-4 w-4" />
              {state || region}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>
            <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
              <span>Explore</span>
              <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
