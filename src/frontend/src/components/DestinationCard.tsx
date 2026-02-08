import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TagChip, { TagType } from './TagChip';
import RippleButton from './RippleButton';

interface DestinationCardProps {
  slug: string;
  name: string;
  region: string;
  budget: string;
  image: string;
  description: string;
  tags?: TagType[];
  className?: string;
}

export default function DestinationCard({
  slug,
  name,
  region,
  budget,
  image,
  description,
  tags = [],
  className = '',
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/destinations/$slug"
      params={{ slug }}
      className={`group block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:card-glow-hover card-glow border-2">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Image with zoom effect */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
          />
          
          {/* Gradient overlay that appears on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Content that slides up on hover */}
          <div
            className={`absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {name}
                </h3>
                <Badge variant="secondary" className="shrink-0">
                  {budget}
                </Badge>
              </div>
              
              <p className="text-sm text-foreground/80 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {region}
              </p>
              
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <TagChip key={tag} tag={tag} />
                  ))}
                </div>
              )}
              
              <RippleButton
                size="sm"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  // Navigation handled by Link
                }}
              >
                View Trail
                <ArrowRight className="ml-2 h-4 w-4" />
              </RippleButton>
            </div>
          </div>
        </div>
        
        {/* Static content visible when not hovered */}
        <div className={`p-6 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
              {name}
            </h3>
            <Badge variant="secondary">{budget}</Badge>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
            <MapPin className="h-3 w-3" />
            {region}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
