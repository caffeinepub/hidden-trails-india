import { useRef } from 'react';
import { Card } from '@/components/ui/card';

interface GalleryItem {
  id: string;
  image: string;
  username: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
    username: '@wanderlust_raj',
    caption: 'Found paradise in Pulga!',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    username: '@mountain_seeker',
    caption: 'Gurez Valley stole my heart',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80',
    username: '@backpack_diaries',
    caption: 'Crystal clear Tirthan vibes',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80',
    username: '@explore_northeast',
    caption: 'Majuli magic is real',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    username: '@trail_tales',
    caption: 'Dzukou dreams came true',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
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
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
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
