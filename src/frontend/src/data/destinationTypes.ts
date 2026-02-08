export interface Destination {
  slug: string;
  name: string;
  state: string;
  region: string;
  location: string;
  significance: string;
  howToReach: {
    summary: string;
    byAir?: string;
    byTrain?: string;
    byBus?: string;
  };
  activities: string[];
  bestTime: string;
  travelPlanIdea: string;
  budget: string;
  category: 'budget' | 'mid' | 'premium';
  image: string;
  description: string;
  tags: Array<'Trek' | 'Nature' | 'Camping' | 'Valley' | 'Beach' | 'Culture' | 'Adventure' | 'Wildlife' | 'Heritage'>;
}
