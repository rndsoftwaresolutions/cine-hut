import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { Megaphone, Award, Users, Sparkles, Zap, Lightbulb, FileText, Target, Edit, Package } from 'lucide-react';

export function PRBrandingPage() {
  return (
    <ServicePageTemplate
      title="PR & Branding"
      subtitle="Build a Powerful Brand Identity That Commands Attention"
      heroImage="https://images.unsplash.com/photo-1645048984874-f8078b0467e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
      description={[
        'Strategic PR and branding services that establish your market presence and build lasting brand equity.',
        'We craft comprehensive brand identities and execute PR campaigns that generate positive media coverage and public perception.',
        'From startups to established businesses, we help you tell your story in a way that resonates with your audience and drives growth.',
      ]}
      features={[
        { icon: Megaphone, title: 'Media Relations', description: 'Strategic media outreach and press release distribution.' },
        { icon: Award, title: 'Brand Development', description: 'Complete brand identity creation from logo to voice.' },
        { icon: Users, title: 'Reputation Management', description: 'Proactive management of your public image and reputation.' },
        { icon: Sparkles, title: 'Creative Campaigns', description: 'Memorable PR campaigns that generate buzz and coverage.' },
        { icon: Zap, title: 'Crisis Management', description: 'Expert handling of sensitive situations and crisis communications.' },
      ]}
      processSteps={[
        { number: '01', title: 'Brand Discovery', icon: Lightbulb },
        { number: '02', title: 'Strategy Development', icon: FileText },
        { number: '03', title: 'Campaign Launch', icon: Target },
        { number: '04', title: 'Monitoring', icon: Edit },
        { number: '05', title: 'Reporting', icon: Package },
      ]}
      showcaseImage="https://images.unsplash.com/photo-1645048984874-f8078b0467e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    />
  );
}
