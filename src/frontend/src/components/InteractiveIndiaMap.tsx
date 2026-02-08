import { useState } from 'react';
import { Card } from '@/components/ui/card';

interface Region {
  id: string;
  name: string;
  count: number;
  position: { x: string; y: string };
}

const regions: Region[] = [
  { id: 'north', name: 'North India', count: 12, position: { x: '45%', y: '20%' } },
  { id: 'south', name: 'South India', count: 8, position: { x: '50%', y: '75%' } },
  { id: 'east', name: 'East India', count: 6, position: { x: '75%', y: '45%' } },
  { id: 'west', name: 'West India', count: 10, position: { x: '25%', y: '50%' } },
  { id: 'northeast', name: 'Northeast India', count: 9, position: { x: '85%', y: '25%' } },
];

export default function InteractiveIndiaMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const handleRegionClick = (regionId: string) => {
    const section = document.getElementById(`region-${regionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Map Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-border">
        {/* Stylized India Map Image */}
        <img
          src="/assets/generated/india-map.dim_1600x1200.png"
          alt="India Map"
          className="w-full h-full object-contain opacity-30"
        />
        
        {/* Interactive Region Markers */}
        {regions.map((region) => (
          <button
            key={region.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: region.position.x, top: region.position.y }}
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => handleRegionClick(region.id)}
            aria-label={`Explore ${region.name}`}
          >
            {/* Marker Dot */}
            <div
              className={`w-6 h-6 rounded-full transition-all duration-300 ${
                hoveredRegion === region.id
                  ? 'bg-primary scale-150 shadow-glow'
                  : 'bg-primary/60 scale-100'
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
            </div>
            
            {/* Tooltip */}
            <div
              className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 transition-all duration-200 ${
                hoveredRegion === region.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
            >
              <Card className="px-4 py-2 shadow-lg whitespace-nowrap">
                <p className="font-semibold text-sm">{region.name}</p>
                <p className="text-xs text-muted-foreground">
                  {region.count} destinations
                </p>
              </Card>
            </div>
          </button>
        ))}
      </div>
      
      {/* Instructions */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        Click on a region to explore destinations
      </p>
    </div>
  );
}
