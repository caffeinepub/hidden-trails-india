import { useParams, Link } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BlogPostPage() {
  const { slug } = useParams({ from: '/blog/$slug' });

  // Mock data - in real app would fetch from backend
  const post = {
    title: 'Top 10 Hidden Places in North India for 2026',
    category: 'Destination Guides',
    date: 'Feb 5, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
    content: `
      <p>North India is home to some of the most spectacular landscapes in the country, but most travelers stick to the same crowded destinations. If you're looking to escape the tourist hordes and discover authentic experiences, these hidden gems are perfect for your 2026 travel plans.</p>

      <h2>1. Pulga, Himachal Pradesh</h2>
      <p>Tucked away in the Parvati Valley, Pulga is a tiny hamlet that offers everything Kasol promises but without the crowds. The village is famous for its fairy forest trails, traditional Himachali architecture, and stunning mountain views.</p>
      <p><strong>Why visit:</strong> Peaceful atmosphere, magical forest trails, authentic village life</p>
      <p><strong>Budget:</strong> ₹8,000-12,000 for 3-4 days</p>

      <h2>2. Gurez Valley, Kashmir</h2>
      <p>One of Kashmir's best-kept secrets, Gurez Valley sits near the Line of Control and remains largely untouched by mass tourism. The valley offers pristine beauty with the Kishanganga River flowing through dramatic mountain landscapes.</p>
      <p><strong>Why visit:</strong> Untouched natural beauty, unique Dard-Shina culture, adventure</p>
      <p><strong>Budget:</strong> ₹15,000-20,000 for 5-6 days</p>

      <h2>3. Tirthan Valley, Himachal Pradesh</h2>
      <p>Part of the Great Himalayan National Park, Tirthan Valley is a paradise for nature lovers and adventure seekers. The crystal-clear Tirthan River and surrounding forests offer excellent trekking and trout fishing opportunities.</p>
      <p><strong>Why visit:</strong> Pristine river, offbeat treks, eco-tourism</p>
      <p><strong>Budget:</strong> ₹10,000-15,000 for 4-5 days</p>

      <h2>Planning Your Trip</h2>
      <p>When planning visits to these hidden destinations, keep these tips in mind:</p>
      <ul>
        <li>Book accommodation in advance, especially during peak season</li>
        <li>Carry sufficient cash as ATMs may be limited</li>
        <li>Download offline maps before you go</li>
        <li>Pack appropriate clothing for mountain weather</li>
        <li>Respect local culture and environment</li>
      </ul>

      <h2>Best Time to Visit</h2>
      <p>Most of these destinations are best visited between March to June and September to November. Avoid monsoon season (July-August) due to landslides and road closures. Winter visits are possible but require proper preparation for cold weather.</p>

      <h2>Conclusion</h2>
      <p>These hidden places in North India offer incredible experiences without the crowds and commercialization of popular tourist spots. Whether you're seeking adventure, peace, or cultural immersion, these destinations deliver authentic travel experiences that will stay with you long after you return home.</p>
    `,
  };

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share Article
          </Button>
        </div>

        {/* Featured Image */}
        <div className="aspect-[21/9] rounded-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="my-12" />

        {/* Related Posts */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/$slug" params={{ slug: 'budget-trips-under-10k' }} className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
                    alt="Budget trips"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    Budget Travel
                  </Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Budget Hidden Trips Under ₹10,000
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/blog/$slug" params={{ slug: 'secret-trekking-spots' }} className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
                    alt="Trekking"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    Trekking
                  </Badge>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Secret Trekking Spots in India
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
