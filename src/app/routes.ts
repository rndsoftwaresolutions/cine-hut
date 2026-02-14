import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AdminRoot from "./admin/AdminRoot";
import AdminDashboard from "./admin/Dashboard";
import AdminProjects from "./admin/Projects";
import AdminClients from "./admin/Clients";
import AdminPayments from "./admin/Payments";
import AdminContent from "./admin/Content";
import AdminCareer from "./admin/CareerApplications";
import AdminSettings from "./admin/Settings";
import NotFound from "./pages/NotFound";
import { CinematicFilmsPage } from "./pages/services/CinematicFilmsPage";
import { EventCoveragePage } from "./pages/services/EventCoveragePage";
import { DronePhotographyPage } from "./pages/services/DronePhotographyPage";
import { SportsEventPage } from "./pages/services/SportsEventPage";
import { AIVideoPage } from "./pages/services/AIVideoPage";
import { WeddingFilmsPage } from "./pages/services/WeddingFilmsPage";
import { GraphicDesignPage } from "./pages/services/GraphicDesignPage";
import { MotionGraphicsPage } from "./pages/services/MotionGraphicsPage";
import { SocialMediaPage } from "./pages/services/SocialMediaPage";
import { ContentCreationPage } from "./pages/services/ContentCreationPage";
import { PRBrandingPage } from "./pages/services/PRBrandingPage";
import { OnlineCampaignPage } from "./pages/services/OnlineCampaignPage";
import ServicesPage from "./pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "clients", Component: Clients },
      { path: "career", Component: Career },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "contact", Component: Contact },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
    ],
  },
  {
    path: "services",
    Component: Root,
    children: [
      { index: true, Component: ServicesPage },

      { path: "cinematic-films", Component: CinematicFilmsPage },
      { path: "event-coverage", Component: EventCoveragePage },
      { path: "drone-photography", Component: DronePhotographyPage },
      { path: "sports-event", Component: SportsEventPage },
      { path: "ai-video", Component: AIVideoPage },
      { path: "wedding-films", Component: WeddingFilmsPage },
      { path: "graphic-design", Component: GraphicDesignPage },
      { path: "motion-graphics", Component: MotionGraphicsPage },
      { path: "social-media", Component: SocialMediaPage },
      { path: "content-creation", Component: ContentCreationPage },
      { path: "pr-branding", Component: PRBrandingPage },
      { path: "online-campaign", Component: OnlineCampaignPage },
    ],
  },
  {
    path: "/admin",
    Component: AdminRoot,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "projects", Component: AdminProjects },
      { path: "clients", Component: AdminClients },
      { path: "payments", Component: AdminPayments },
      { path: "content", Component: AdminContent },
      { path: "career", Component: AdminCareer },
      { path: "settings", Component: AdminSettings },
    ],
  },
  { path: "*", Component: NotFound },
]);
