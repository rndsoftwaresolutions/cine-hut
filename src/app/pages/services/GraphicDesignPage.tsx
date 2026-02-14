import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Palette, Sparkles, Layers, Award, Zap, Lightbulb, FileText, Paintbrush, Edit, Package } from 'lucide-react';

export function GraphicDesignPage() {
  return (
    <ServicePageTemplate
      title="Graphic Design"
      subtitle="Visual Identity That Captivates and Converts"
      heroImage="https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Premium graphic design services that bring your brand vision to life with stunning visuals.',
        'From logos and branding to marketing materials and digital assets, we create designs that resonate with your audience and elevate your brand presence.',
        'Our creative team combines artistic excellence with strategic thinking to deliver designs that are both beautiful and effective.',
      ]}
      features={[
        { icon: Palette, title: 'Creative Excellence', description: 'Award-winning designers with diverse portfolio experience.' },
        { icon: Sparkles, title: 'Brand Identity', description: 'Comprehensive branding solutions that tell your unique story.' },
        { icon: Layers, title: 'Versatile Design', description: 'From print to digital, we handle all design mediums.' },
        { icon: Award, title: 'Premium Quality', description: 'Professional-grade designs ready for any platform.' },
        { icon: Zap, title: 'Fast Turnaround', description: 'Efficient workflow without compromising creativity.' },
      ]}
      processSteps={[
        { number: '01', title: 'Discovery', icon: Lightbulb },
        { number: '02', title: 'Concept Development', icon: FileText },
        { number: '03', title: 'Design Creation', icon: Paintbrush },
        { number: '04', title: 'Refinement', icon: Edit },
        { number: '05', title: 'Final Delivery', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
