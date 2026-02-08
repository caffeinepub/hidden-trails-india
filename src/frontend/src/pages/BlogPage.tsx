import { Link } from '@tanstack/react-router';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MotionReveal from '@/components/MotionReveal';
import SafeImage from '@/components/SafeImage';

const featuredPost = {
  slug: 'budget-travel-tips',
  title: '10 Budget Travel Tips for Exploring Hidden India',
  excerpt: 'Learn how to travel across India on a shoestring budget without compromising on experiences.',
  image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
  category: 'Travel Tips',
  readTime: '8 min read',
  date: 'March 15, 2024',
};

const blogPosts = [
  {
    slug: 'packing-guide',
    title: 'Ultimate Packing Guide for Himalayan Treks',
    excerpt: 'Everything you need to pack for a comfortable and safe trek in the Himalayas.',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    category: 'Gear',
    readTime: '6 min read',
    date: 'March 10, 2024',
  },
  {
    slug: 'solo-travel',
    title: 'Solo Travel Safety Tips for Women in India',
    excerpt: 'Essential safety tips and advice for women traveling solo in India.',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    category: 'Safety',
    readTime: '7 min read',
    date: 'March 5, 2024',
  },
  {
    slug: 'photography-tips',
    title: 'Landscape Photography Tips for Mountain Destinations',
    excerpt: 'Capture stunning mountain landscapes with these photography techniques.',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    category: 'Photography',
    readTime: '5 min read',
    date: 'February 28, 2024',
  },
  {
    slug: 'offseason-travel',
    title: 'Why Off-Season Travel is the Best Decision',
    excerpt: 'Discover the benefits of traveling during off-peak seasons.',
    image: '/assets/generated/image-fallback-landscape.dim_1600x900.png',
    category: 'Travel Tips',
    readTime: '4 min read',
    date: 'February 20, 2024',
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <MotionReveal>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Travel Blog
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Travel Guides & Tips
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert advice, destination guides, and insider tips for exploring hidden India
            </p>
          </div>
        </MotionReveal>

        {/* Featured Post */}
        <MotionReveal>
          <Link to="/blog/$slug" params={{ slug: featuredPost.slug }} className="group block mb-20">
            <Card className="overflow-hidden card-glow hover:card-glow-hover transition-all">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <SafeImage
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    Featured
                  </Badge>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button className="w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        </MotionReveal>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <MotionReveal key={post.slug} delay={index * 100}>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block h-full">
                <Card className="overflow-hidden h-full card-glow hover:card-glow-hover transition-all">
                  <div className="aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </MotionReveal>
          ))}
        </div>

        {/* CTA */}
        <MotionReveal>
          <div className="mt-20 text-center">
            <Card className="gradient-ocean border-2 p-12">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our curated list of hidden destinations across India
              </p>
              <Button asChild size="lg" className="btn-glow">
                <Link to="/destinations">
                  Explore Destinations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </Card>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}
