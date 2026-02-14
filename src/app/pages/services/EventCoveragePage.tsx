import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Camera, Users, Clock, Award, Zap, Lightbulb, FileText, Video, Edit, Package } from 'lucide-react';

export function EventCoveragePage() {
  return (
    <ServicePageTemplate
      title="Event Coverage & Management"
      subtitle="Capturing Every Moment, Creating Lasting Memories"
      heroImage="https://images.unsplash.com/photo-1763280290224-1b7ed510a31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Professional event coverage that captures the energy, emotion, and essence of your special occasions.',
        'From corporate conferences to private celebrations, we provide comprehensive event management and videography services that ensure no moment is missed.',
        'Our experienced team handles everything from planning to post-production, delivering polished content that exceeds expectations.',
      ]}
      features={[
        { icon: Camera, title: 'Multi-Camera Setup', description: 'Professional multi-angle coverage ensuring comprehensive event documentation.' },
        { icon: Users, title: 'Experienced Crew', description: 'Skilled videographers and event coordinators for seamless execution.' },
        { icon: Clock, title: 'Real-time Delivery', description: 'Quick turnaround with highlights available within 24 hours.' },
        { icon: Award, title: 'Premium Quality', description: '4K recording with professional color grading and audio mixing.' },
        { icon: Zap, title: 'Live Streaming', description: 'Broadcast your event globally with our live streaming services.' },
      ]}
      processSteps={[
        { number: '01', title: 'Event Planning', icon: Lightbulb },
        { number: '02', title: 'Pre-Production', icon: FileText },
        { number: '03', title: 'Live Coverage', icon: Video },
        { number: '04', title: 'Post-Production', icon: Edit },
        { number: '05', title: 'Final Delivery', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1763280290224-1b7ed510a31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
