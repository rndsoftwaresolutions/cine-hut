import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Heart, Camera, Users, Sparkles, Award, Lightbulb, FileText, Video, Edit, Package } from 'lucide-react';

export function WeddingFilmsPage() {
  return (
    <ServicePageTemplate
      title="Wedding Films"
      subtitle="Preserving Your Most Precious Moments with Cinematic Excellence"
      heroImage="https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Elegant wedding cinematography that captures the emotion, beauty, and romance of your special day.',
        'We create timeless wedding films that feel like a cinematic masterpiece, not just a video recording.',
        'From intimate ceremonies to grand celebrations, our unobtrusive approach ensures authentic moments while delivering stunning visual storytelling.',
      ]}
      features={[
        { icon: Heart, title: 'Emotional Storytelling', description: 'Capturing genuine moments and emotions that you\'ll treasure forever.' },
        { icon: Camera, title: 'Cinematic Style', description: 'Film-quality production with artistic composition and lighting.' },
        { icon: Users, title: 'Professional Team', description: 'Experienced wedding videographers who blend into your celebration.' },
        { icon: Sparkles, title: 'Complete Coverage', description: 'Full-day coverage from preparation to reception.' },
        { icon: Award, title: 'Premium Packages', description: 'Customizable packages with highlight films and full ceremonies.' },
      ]}
      processSteps={[
        { number: '01', title: 'Consultation', icon: Lightbulb },
        { number: '02', title: 'Planning', icon: FileText },
        { number: '03', title: 'Wedding Day', icon: Video },
        { number: '04', title: 'Post-Production', icon: Edit },
        { number: '05', title: 'Final Delivery', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1767986012138-d02276728368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
