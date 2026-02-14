import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Share2, TrendingUp, Users, Zap, Award, Lightbulb, FileText, BarChart, Edit, Package } from 'lucide-react';

export function SocialMediaPage() {
  return (
    <ServicePageTemplate
      title="Social Media Marketing"
      subtitle="Amplify Your Brand with Strategic Social Media Management"
      heroImage="https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Comprehensive social media marketing that builds engaged communities and drives real business results.',
        'From content strategy to community management, we handle every aspect of your social media presence across all major platforms.',
        'Our data-driven approach ensures your content resonates with your target audience and achieves your marketing goals.',
      ]}
      features={[
        { icon: Share2, title: 'Multi-Platform', description: 'Expert management across Instagram, Facebook, YouTube, and more.' },
        { icon: TrendingUp, title: 'Growth Focused', description: 'Strategies designed to increase followers, engagement, and conversions.' },
        { icon: Users, title: 'Community Building', description: 'Active engagement that builds loyal brand communities.' },
        { icon: Zap, title: 'Trend Savvy', description: 'Stay ahead with timely, trending content strategies.' },
        { icon: Award, title: 'Proven Results', description: 'Track record of successful campaigns and measurable ROI.' },
      ]}
      processSteps={[
        { number: '01', title: 'Strategy Development', icon: Lightbulb },
        { number: '02', title: 'Content Planning', icon: FileText },
        { number: '03', title: 'Campaign Execution', icon: BarChart },
        { number: '04', title: 'Optimization', icon: Edit },
        { number: '05', title: 'Reporting', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1640725804478-ebf80960a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
