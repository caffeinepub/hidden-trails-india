import { Tent, Mountain, Waves, Palmtree, Trees } from 'lucide-react';

export type TagType = 'Camping' | 'Trek' | 'Beach' | 'Valley' | 'Nature';

interface TagChipProps {
  tag: TagType;
  className?: string;
}

const tagConfig: Record<TagType, { icon: React.ElementType; className: string }> = {
  Camping: { icon: Tent, className: 'tag-camping' },
  Trek: { icon: Mountain, className: 'tag-trek' },
  Beach: { icon: Waves, className: 'tag-beach' },
  Valley: { icon: Palmtree, className: 'tag-valley' },
  Nature: { icon: Trees, className: 'tag-nature' },
};

export default function TagChip({ tag, className = '' }: TagChipProps) {
  const config = tagConfig[tag];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.className} ${className}`}
    >
      <Icon className="h-3 w-3" />
      {tag}
    </span>
  );
}
