import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AffiliateCtaPlaceholderProps {
  title: string;
  description: string;
  ctaText: string;
  variant?: 'default' | 'secondary';
}

export default function AffiliateCtaPlaceholder({
  title,
  description,
  ctaText,
  variant = 'default',
}: AffiliateCtaPlaceholderProps) {
  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant={variant} className="w-full" asChild>
          <a href="#" onClick={(e) => e.preventDefault()} className="justify-center">
            <span className="text-center">{ctaText}</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
