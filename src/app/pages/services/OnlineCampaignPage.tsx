import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { TrendingUp, Target, BarChart, Zap, Award, Lightbulb, FileText, Megaphone, Edit, Package } from 'lucide-react';

export function OnlineCampaignPage() {
  return (
    <ServicePageTemplate
      title="Online Campaign Management"
      subtitle="Data-Driven Digital Campaigns That Deliver Results"
      heroImage="https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'End-to-end online campaign management that maximizes your digital marketing ROI.',
        'From paid advertising to email marketing and influencer partnerships, we orchestrate multi-channel campaigns that drive conversions.',
        'Our data-driven approach ensures every dollar is optimized for performance, with transparent reporting and continuous improvement.',
      ]}
      features={[
        { icon: TrendingUp, title: 'Performance Focused', description: 'Campaigns optimized for conversions, not just clicks.' },
        { icon: Target, title: 'Precise Targeting', description: 'Advanced audience segmentation and targeting strategies.' },
        { icon: BarChart, title: 'Analytics Driven', description: 'Real-time tracking and data-backed decision making.' },
        { icon: Zap, title: 'Multi-Channel', description: 'Coordinated campaigns across Google, Facebook, Instagram, and more.' },
        { icon: Award, title: 'Proven Track Record', description: 'Consistent results with measurable ROI improvements.' },
      ]}
      processSteps={[
        { number: '01', title: 'Campaign Strategy', icon: Lightbulb },
        { number: '02', title: 'Setup & Launch', icon: FileText },
        { number: '03', title: 'Execution', icon: Megaphone },
        { number: '04', title: 'Optimization', icon: Edit },
        { number: '05', title: 'Reporting', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1640127249308-098702574176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
