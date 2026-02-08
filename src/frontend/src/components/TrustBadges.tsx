import { Shield, CheckCircle, MapPin } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: CheckCircle,
      label: 'Verified Stays',
      color: 'text-primary',
    },
    {
      icon: Shield,
      label: 'Budget Approved',
      color: 'text-accent',
    },
    {
      icon: MapPin,
      label: 'Local Insight',
      color: 'text-secondary',
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.label}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border-2 border-border/50 shadow-sm"
          >
            <Icon className={`h-4 w-4 ${badge.color}`} />
            <span className="text-sm font-semibold">{badge.label}</span>
          </div>
        );
      })}
    </div>
  );
}
