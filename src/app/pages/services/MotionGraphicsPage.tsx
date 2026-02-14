import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Sparkles, Layers, Zap, Palette, Award, Lightbulb, FileText, Video, Edit, Package } from 'lucide-react';

export function MotionGraphicsPage() {
  return (
    <ServicePageTemplate
      title="Motion Graphics & Fine Art"
      subtitle="Bringing Design to Life with Dynamic Animation"
      heroImage="https://images.unsplash.com/photo-1695114584354-13e1910d491b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Professional motion graphics that transform static designs into captivating animated experiences.',
        'We specialize in creating eye-catching motion graphics for commercials, title sequences, explainer videos, and social media content.',
        'Our blend of fine art sensibility and technical expertise delivers animations that are both aesthetically stunning and strategically effective.',
      ]}
      features={[
        { icon: Sparkles, title: 'Dynamic Animation', description: 'Fluid, professional animations that grab attention and engage viewers.' },
        { icon: Layers, title: '2D/3D Graphics', description: 'Full spectrum of motion graphics from flat design to 3D renders.' },
        { icon: Zap, title: 'Quick Production', description: 'Efficient pipeline for fast turnaround on motion projects.' },
        { icon: Palette, title: 'Fine Art Touch', description: 'Artistic approach that elevates commercial motion graphics.' },
        { icon: Award, title: 'Industry Standard', description: 'Professional tools and techniques used by top studios.' },
      ]}
      processSteps={[
        { number: '01', title: 'Concept Design', icon: Lightbulb },
        { number: '02', title: 'Storyboarding', icon: FileText },
        { number: '03', title: 'Animation', icon: Video },
        { number: '04', title: 'Refinement', icon: Edit },
        { number: '05', title: 'Final Delivery', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1695114584354-13e1910d491b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
