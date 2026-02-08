import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import SafeImage from './SafeImage';

interface GalleryItem {
  id: string;
  image: string;
  username: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/assets/generated/image-fallback-square.dim_800x800.png',
    username: '@wanderlust_raj',
    caption: 'Found paradise in Pulga!',
  },
  {
    id: '2',
    image: '/assets/generated/image-fallback-square.dim_800x800.png',
    username: '@mountain_seeker',
    caption: 'Gurez Valley stole my heart',
  },
  {
    id: '3',
    image: '/assets/generated/image-fallback-square.dim_800x800.png',
    username: '@backpack_diaries',
    caption: 'Crystal clear Tirthan vibes',
  },
  {
    id: '4',
    image: '/assets/generated/image-fallback-square.dim_800x800.png',
    username: '@explore_northeast',
    caption: 'Majuli magic is real',
  },
  {
    id: '5',
    image: '/assets/generated/image-fallback-square.dim_800x800.png',
    username: '@trail_tales',
    caption: 'Dzukou dreams came true',
  },
  {
    id: '6',
    image: '/assets/generated/image-fallback-square.dim_800x800.png',
    username: '@budget_traveler',
    caption: "India's Grand Canyon!",
  },
];

export default function SocialProofGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 md:px-0"
      >
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-80 snap-center"
          >
            <div className={`polaroid ${index % 2 === 0 ? '' : 'rotate-2'}`}>
              <div className="aspect-square overflow-hidden rounded-sm mb-3">
                <SafeImage
                  src={item.image}
                  alt={item.caption}
                  aspectRatio="square"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-sm">{item.username}</p>
                <p className="text-xs text-muted-foreground">{item.caption}</p>
                <p className="text-xs font-medium text-primary">#HiddenTrailsIndia</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
