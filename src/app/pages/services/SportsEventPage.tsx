import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Trophy, Zap, Camera, Users, Award, Lightbulb, FileText, Video, Edit, Package } from 'lucide-react';

export function SportsEventPage() {
  return (
    <ServicePageTemplate
      title="Sports Event Coverage"
      subtitle="Capturing the Intensity, Passion, and Glory of Athletic Competition"
      heroImage="https://images.unsplash.com/photo-1729871337531-249297613423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Dynamic sports coverage that captures every crucial moment of athletic excellence.',
        'From high school games to professional tournaments, we specialize in multi-camera sports production with instant replay capabilities and highlights packages.',
        'Our experienced sports videographers understand the game and know exactly when and where to capture the action.',
      ]}
      features={[
        { icon: Trophy, title: 'Sports Expertise', description: 'Specialized knowledge of various sports and key moments to capture.' },
        { icon: Zap, title: 'Fast-Paced Coverage', description: 'High-speed cameras and quick reflexes to catch every crucial play.' },
        { icon: Camera, title: 'Multi-Angle Setup', description: 'Strategic camera placement for comprehensive game coverage.' },
        { icon: Users, title: 'Experienced Team', description: 'Sports videography specialists who understand the game.' },
        { icon: Award, title: 'Highlight Reels', description: 'Professional highlight packages delivered within 24 hours.' },
      ]}
      processSteps={[
        { number: '01', title: 'Event Planning', icon: Lightbulb },
        { number: '02', title: 'Setup & Positioning', icon: FileText },
        { number: '03', title: 'Live Coverage', icon: Video },
        { number: '04', title: 'Highlights Editing', icon: Edit },
        { number: '05', title: 'Final Delivery', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1729871337531-249297613423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
