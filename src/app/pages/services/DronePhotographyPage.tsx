import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Plane, Map, Eye, Shield, Zap, Lightbulb, FileText, Camera, Edit, Package } from 'lucide-react';

export function DronePhotographyPage() {
  return (
    <ServicePageTemplate
      title="Drone Photography & Videography"
      subtitle="Elevate Your Perspective with Stunning Aerial Cinematography"
      heroImage="https://images.unsplash.com/photo-1668836733970-9ed7e53cd2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Capture breathtaking aerial perspectives with our professional drone cinematography services.',
        'Using state-of-the-art drones and expert piloting, we deliver stunning aerial footage for real estate, events, documentaries, and commercial projects.',
        'Our licensed and insured drone operators ensure safe, legal, and spectacular results every time.',
      ]}
      features={[
        { icon: Plane, title: 'Latest Technology', description: 'Professional-grade drones with 4K/6K cameras and advanced stabilization.' },
        { icon: Map, title: 'Strategic Planning', description: 'Detailed flight path planning for optimal coverage and stunning compositions.' },
        { icon: Eye, title: 'Creative Vision', description: 'Artistic aerial perspectives that elevate your visual storytelling.' },
        { icon: Shield, title: 'Licensed & Insured', description: 'Fully certified pilots with comprehensive insurance coverage.' },
        { icon: Zap, title: 'Quick Turnaround', description: 'Fast editing and delivery without compromising quality.' },
      ]}
      processSteps={[
        { number: '01', title: 'Site Assessment', icon: Lightbulb },
        { number: '02', title: 'Flight Planning', icon: FileText },
        { number: '03', title: 'Aerial Capture', icon: Camera },
        { number: '04', title: 'Post-Production', icon: Edit },
        { number: '05', title: 'Final Delivery', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1668836733970-9ed7e53cd2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}