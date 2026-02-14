import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Cpu, Sparkles, Zap, Palette, Award, Lightbulb, FileText, Video, Edit, Package } from 'lucide-react';

export function AIVideoPage() {
  return (
    <ServicePageTemplate
      title="AI Video & Animation Explainer Videos"
      subtitle="Cutting-Edge AI-Powered Video Production and Animation"
      heroImage="https://images.unsplash.com/photo-1701696934136-86ffdc37b892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Harness the power of artificial intelligence to create stunning explainer videos and animations.',
        'Our AI-enhanced production workflow combines traditional animation expertise with cutting-edge AI tools for faster turnaround and unique visual styles.',
        'Perfect for product launches, educational content, marketing campaigns, and brand storytelling.',
      ]}
      features={[
        { icon: Cpu, title: 'AI Technology', description: 'Latest AI tools for efficient video production and unique visual effects.' },
        { icon: Sparkles, title: 'Custom Animation', description: '2D/3D animation tailored to your brand and message.' },
        { icon: Zap, title: 'Fast Production', description: 'AI-accelerated workflow for quicker delivery times.' },
        { icon: Palette, title: 'Creative Freedom', description: 'Unlimited visual possibilities with AI-generated assets.' },
        { icon: Award, title: 'Professional Quality', description: 'Polished animations that engage and convert audiences.' },
      ]}
      processSteps={[
        { number: '01', title: 'Concept & Script', icon: Lightbulb },
        { number: '02', title: 'Storyboarding', icon: FileText },
        { number: '03', title: 'AI Generation', icon: Video },
        { number: '04', title: 'Animation & Editing', icon: Edit },
        { number: '05', title: 'Final Delivery', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1701696934136-86ffdc37b892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
