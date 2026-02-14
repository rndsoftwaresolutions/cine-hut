import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { FileText, Camera, Sparkles, Zap, Award, Lightbulb, Edit, Video, Megaphone, Package } from 'lucide-react';

export function ContentCreationPage() {
  return (
    <ServicePageTemplate
      title="Content Creation"
      subtitle="Compelling Content That Engages, Informs, and Converts"
      heroImage="https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Professional content creation services that tell your brand story across all digital channels.',
        'From written content to video production, photography, and graphics, we create cohesive content that resonates with your audience.',
        'Our holistic approach ensures brand consistency while maximizing engagement and conversion across every touchpoint.',
      ]}
      features={[
        { icon: FileText, title: 'Multi-Format Content', description: 'Articles, videos, graphics, and more in one integrated service.' },
        { icon: Camera, title: 'Professional Production', description: 'Studio-quality content creation with expert teams.' },
        { icon: Sparkles, title: 'Creative Excellence', description: 'Original, engaging content that stands out from the crowd.' },
        { icon: Zap, title: 'Consistent Output', description: 'Reliable content delivery schedules you can count on.' },
        { icon: Award, title: 'Strategic Approach', description: 'Content aligned with your business goals and audience needs.' },
      ]}
      processSteps={[
        { number: '01', title: 'Content Strategy', icon: Lightbulb },
        { number: '02', title: 'Planning', icon: Edit },
        { number: '03', title: 'Creation', icon: Video },
        { number: '04', title: 'Distribution', icon: Megaphone },
        { number: '05', title: 'Analysis', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
