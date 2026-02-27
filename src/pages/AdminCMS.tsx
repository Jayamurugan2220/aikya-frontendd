import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Save, 
  Home, 
  FileText, 
  Building2, 
  Users, 
  Mail, 
  Phone, 
  MessageSquare, 
  Calendar, 
  Bell,
  ChevronDown,
  ChevronRight,
  Sun,
  Moon,
  LogOut,
  Briefcase,
  ClipboardList,
  Star,
  Tag,
  Wrench,
  Newspaper,
  Heart,
  PartyPopper,
  UserPlus,
  Globe,
  LayoutDashboard,
  Settings
} from "lucide-react";
import { cmsAPI } from "@/services/api";

const AdminCMS = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, isAdmin, logout } = useAuth();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [contentExpanded, setContentExpanded] = useState(true);
  const [formsExpanded, setFormsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const [heroData, setHeroData] = useState({
    title: '',
    subtitle: '',
    tagline: '',
    buttonText: '',
    buttonLink: '',
  });

  const [aboutData, setAboutData] = useState({
    heading: '',
    content: '',
  });

  const [contactData, setContactData] = useState({
    heading: '',
    description: '',
    email: '',
    phone: '',
    address: '',
  });

  const [whyChooseData, setWhyChooseData] = useState({
    heading: '',
    reasons: [],
  });

  const [leadershipData, setLeadershipData] = useState({
    heading: '',
    leaders: [],
  });

  const [projectsData, setProjectsData] = useState({
    heading: '',
    description: '',
    projects: [],
  });

  const [testimonialsData, setTestimonialsData] = useState({
    heading: '',
    testimonials: [],
  });

  const [specialOffersData, setSpecialOffersData] = useState({
    heading: '',
    subheading: '',
    offers: [],
  });

  const [servicesData, setServicesData] = useState({
    heading: '',
    description: '',
    services: [],
  });

  const [footerData, setFooterData] = useState({
    companyName: '',
    tagline: '',
    address: '',
    phone: [],
    email: '',
  });

  const [newsData, setNewsData] = useState({
    heading: '',
    description: '',
    articles: [],
  });

  const [csrData, setCSRData] = useState({
    heading: '',
    description: '',
    initiatives: [],
  });

  const [eventsData, setEventsData] = useState({
    heading: '',
    description: '',
    events: [],
  });

  const [careersData, setCareersData] = useState({
    heading: '',
    description: '',
    openings: [],
  });

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Access Denied", 
        description: "Please login to access the CMS",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (!isAdmin) {
      toast({
        title: "Access Denied", 
        description: "You don't have admin privileges to access this page",
        variant: "destructive",
      });
      navigate("/dashboard");
      return;
    }
    
    fetchAllContent();
  }, [isAuthenticated, isAdmin, navigate]);

  const fetchAllContent = async () => {
    try {
      const [
        heroRes, 
        aboutRes, 
        whyChooseRes, 
        contactRes, 
        leadershipRes, 
        projectsRes,
        testimonialsRes,
        specialOffersRes,
        servicesRes,
        footerRes,
        newsRes,
        csrRes,
        eventsRes,
        careersRes
      ] = await Promise.all([
        cmsAPI.getHero(),
        cmsAPI.getAbout(),
        cmsAPI.getWhyChoose(),
        cmsAPI.getContact(),
        cmsAPI.getLeadership(),
        cmsAPI.getProjects(),
        cmsAPI.getTestimonials(),
        cmsAPI.getSpecialOffers(),
        cmsAPI.getServices(),
        cmsAPI.getFooter(),
        cmsAPI.getNews(),
        cmsAPI.getCSR(),
        cmsAPI.getEvents(),
        cmsAPI.getCareers(),
      ]);

      setHeroData(heroRes.data);
      setAboutData(aboutRes.data);
      setWhyChooseData(whyChooseRes.data);
      setContactData(contactRes.data);
      setLeadershipData(leadershipRes.data);
      setProjectsData(projectsRes.data);
      setTestimonialsData(testimonialsRes.data);
      setSpecialOffersData(specialOffersRes.data);
      setServicesData(servicesRes.data);
      setFooterData(footerRes.data);
      setNewsData(newsRes.data);
      setCSRData(csrRes.data);
      setEventsData(eventsRes.data);
      setCareersData(careersRes.data);
    } catch (error) {
      console.error('Error fetching content:', error);
      toast({
        title: "Error",
        description: "Failed to load content",
        variant: "destructive",
      });
    }
  };

  const updateHero = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateHero(heroData);
      toast({
        title: "Success!",
        description: "Hero section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateAbout = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateAbout(aboutData);
      toast({
        title: "Success!",
        description: "About section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateContact(contactData);
      toast({
        title: "Success!",
        description: "Contact section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateWhyChoose = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateWhyChoose(whyChooseData);
      toast({
        title: "Success!",
        description: "Why Choose Us section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateLeadership = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateLeadership(leadershipData);
      toast({
        title: "Success!",
        description: "Leadership section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProjects = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateProjects(projectsData);
      toast({
        title: "Success!",
        description: "Projects section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateTestimonials = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateTestimonials(testimonialsData);
      toast({
        title: "Success!",
        description: "Testimonials section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSpecialOffers = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateSpecialOffers(specialOffersData);
      toast({
        title: "Success!",
        description: "Special Offers section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateServices = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateServices(servicesData);
      toast({
        title: "Success!",
        description: "Services section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateFooter = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateFooter(footerData);
      toast({
        title: "Success!",
        description: "Footer section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateNews = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateNews(newsData);
      toast({
        title: "Success!",
        description: "News section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateCSR = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateCSR(csrData);
      toast({
        title: "Success!",
        description: "CSR section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateEvents = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateEvents(eventsData);
      toast({
        title: "Success!",
        description: "Events section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateCareers = async () => {
    setLoading(true);
    try {
      await cmsAPI.updateCareers(careersData);
      toast({
        title: "Success!",
        description: "Careers section updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-3">Admin Dashboard</h2>
              <p className="text-slate-400">
                Welcome to the admin dashboard. Use the sidebar to navigate to different sections.
              </p>
            </div>
          </div>
        );

      case 'hero':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Title</label>
                <Textarea
                  value={heroData.title}
                  onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                  rows={3}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Subtitle</label>
                <Input
                  value={heroData.subtitle}
                  onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Tagline</label>
                <Input
                  value={heroData.tagline}
                  onChange={(e) => setHeroData({ ...heroData, tagline: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Button Text</label>
                <Input
                  value={heroData.buttonText}
                  onChange={(e) => setHeroData({ ...heroData, buttonText: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Button Link</label>
                <Input
                  value={heroData.buttonLink}
                  onChange={(e) => setHeroData({ ...heroData, buttonLink: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <Button onClick={updateHero} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Hero Section
              </Button>
            </CardContent>
          </Card>
        );

      case 'about':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit About Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={aboutData.heading}
                  onChange={(e) => setAboutData({ ...aboutData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Content</label>
                <Textarea
                  value={aboutData.content}
                  onChange={(e) => setAboutData({ ...aboutData, content: e.target.value })}
                  rows={6}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <Button onClick={updateAbout} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save About Section
              </Button>
            </CardContent>
          </Card>
        );

      case 'projects':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Projects Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={projectsData.heading}
                  onChange={(e) => setProjectsData({ ...projectsData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea
                  value={projectsData.description}
                  onChange={(e) => setProjectsData({ ...projectsData, description: e.target.value })}
                  rows={3}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div className="text-sm text-slate-400 p-3 bg-slate-900/50 rounded-md border border-slate-700">
                📝 Note: Projects list management coming soon. Currently managed through database.
              </div>
              <Button onClick={updateProjects} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Projects Section
              </Button>
            </CardContent>
          </Card>
        );

      case 'whychoose':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Why Choose Us Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={whyChooseData.heading}
                  onChange={(e) => setWhyChooseData({ ...whyChooseData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div className="text-sm text-slate-400 p-3 bg-slate-900/50 rounded-md border border-slate-700">
                📝 Note: Reasons list management coming soon. Currently managed through database.
              </div>
              <Button onClick={updateWhyChoose} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Why Choose Us Section
              </Button>
            </CardContent>
          </Card>
        );

      case 'leadership':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Leadership Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={leadershipData.heading}
                  onChange={(e) => setLeadershipData({ ...leadershipData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div className="text-sm text-slate-400 p-3 bg-slate-900/50 rounded-md border border-slate-700">
                📝 Note: Leadership team list management coming soon. Currently managed through database.
              </div>
              <Button onClick={updateLeadership} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Leadership Section
              </Button>
            </CardContent>
          </Card>
        );

      case 'contact':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={contactData.heading}
                  onChange={(e) => setContactData({ ...contactData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea
                  value={contactData.description}
                  onChange={(e) => setContactData({ ...contactData, description: e.target.value })}
                  rows={2}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Email</label>
                <Input
                  type="email"
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Phone</label>
                <Input
                  value={contactData.phone}
                  onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Address</label>
                <Input
                  value={contactData.address}
                  onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <Button onClick={updateContact} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Contact Information
              </Button>
            </CardContent>
          </Card>
        );

      case 'testimonials':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Testimonials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={testimonialsData.heading || ''}
                  onChange={(e) => setTestimonialsData({ ...testimonialsData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Testimonials Data (JSON)</label>
                <Textarea
                  value={JSON.stringify(testimonialsData.testimonials || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setTestimonialsData({ ...testimonialsData, testimonials: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON, don't update
                    }
                  }}
                  rows={15}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                  placeholder='[{"name": "Customer Name", "role": "Role", "content": "Testimonial text", ...}]'
                />
                <p className="text-xs text-slate-400 mt-1">Edit JSON carefully. Each testimonial needs: name, role, company, content, image, rating</p>
              </div>
              <Button onClick={updateTestimonials} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Testimonials
              </Button>
            </CardContent>
          </Card>
        );

      case 'specialoffers':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Special Offers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={specialOffersData.heading || ''}
                  onChange={(e) => setSpecialOffersData({ ...specialOffersData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Subheading</label>
                <Input
                  value={specialOffersData.subheading || ''}
                  onChange={(e) => setSpecialOffersData({ ...specialOffersData, subheading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Offers Data (JSON)</label>
                <Textarea
                  value={JSON.stringify(specialOffersData.offers || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setSpecialOffersData({ ...specialOffersData, offers: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON
                    }
                  }}
                  rows={15}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                />
                <p className="text-xs text-slate-400 mt-1">Each offer: title, description, price, discount, features[], image, location, status, contactPhone, contactEmail</p>
              </div>
              <Button onClick={updateSpecialOffers} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Special Offers
              </Button>
            </CardContent>
          </Card>
        );

      case 'services':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={servicesData.heading || ''}
                  onChange={(e) => setServicesData({ ...servicesData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea
                  value={servicesData.description || ''}
                  onChange={(e) => setServicesData({ ...servicesData, description: e.target.value })}
                  rows={2}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Services Data (JSON)</label>
                <Textarea
                  value={JSON.stringify(servicesData.services || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setServicesData({ ...servicesData, services: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON
                    }
                  }}
                  rows={12}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                />
                <p className="text-xs text-slate-400 mt-1">Each service: title, description, features[], icon, image, category</p>
              </div>
              <Button onClick={updateServices} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Services
              </Button>
            </CardContent>
          </Card>
        );

      case 'news':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit News</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={newsData.heading || ''}
                  onChange={(e) => setNewsData({ ...newsData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea
                  value={newsData.description || ''}
                  onChange={(e) => setNewsData({ ...newsData, description: e.target.value })}
                  rows={2}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Articles Data (JSON)</label>
                <Textarea
                  value={JSON.stringify(newsData.articles || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setNewsData({ ...newsData, articles: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON
                    }
                  }}
                  rows={12}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                />
                <p className="text-xs text-slate-400 mt-1">Each article: title, excerpt, content, image, author, publishedDate, category, tags[]</p>
              </div>
              <Button onClick={updateNews} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save News
              </Button>
            </CardContent>
          </Card>
        );

      case 'csr':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit CSR</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={csrData.heading || ''}
                  onChange={(e) => setCSRData({ ...csrData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea
                  value={csrData.description || ''}
                  onChange={(e) => setCSRData({ ...csrData, description: e.target.value })}
                  rows={2}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Initiatives Data (JSON)</label>
                <Textarea
                  value={JSON.stringify(csrData.initiatives || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setCSRData({ ...csrData, initiatives: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON
                    }
                  }}
                  rows={12}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                />
                <p className="text-xs text-slate-400 mt-1">Each initiative: title, description, image, category, impact</p>
              </div>
              <Button onClick={updateCSR} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save CSR
              </Button>
            </CardContent>
          </Card>
        );

      case 'events':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={eventsData.heading || ''}
                  onChange={(e) => setEventsData({ ...eventsData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea
                  value={eventsData.description || ''}
                  onChange={(e) => setEventsData({ ...eventsData, description: e.target.value })}
                  rows={2}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Events Data (JSON)</label>
                <Textarea
                  value={JSON.stringify(eventsData.events || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setEventsData({ ...eventsData, events: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON
                    }
                  }}
                  rows={12}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                />
                <p className="text-xs text-slate-400 mt-1">Each event: title, description, image, date, location, category, registrationLink</p>
              </div>
              <Button onClick={updateEvents} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Events
              </Button>
            </CardContent>
          </Card>
        );

      case 'careers':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Careers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Heading</label>
                <Input
                  value={careersData.heading || ''}
                  onChange={(e) => setCareersData({ ...careersData, heading: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Description</label>
                <Textarea
                  value={careersData.description || ''}
                  onChange={(e) => setCareersData({ ...careersData, description: e.target.value })}
                  rows={2}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Job Openings Data (JSON)</label>
                <Textarea
                  value={JSON.stringify(careersData.openings || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setCareersData({ ...careersData, openings: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON
                    }
                  }}
                  rows={12}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                />
                <p className="text-xs text-slate-400 mt-1">Each opening: title, department, location, type, experience, description, requirements[], responsibilities[], applyLink</p>
              </div>
              <Button onClick={updateCareers} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Careers
              </Button>
            </CardContent>
          </Card>
        );

      case 'footer':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Edit Footer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Company Name</label>
                <Input
                  value={footerData.companyName || ''}
                  onChange={(e) => setFooterData({ ...footerData, companyName: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Tagline</label>
                <Input
                  value={footerData.tagline || ''}
                  onChange={(e) => setFooterData({ ...footerData, tagline: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Address</label>
                <Input
                  value={footerData.address || ''}
                  onChange={(e) => setFooterData({ ...footerData, address: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Email</label>
                <Input
                  type="email"
                  value={footerData.email || ''}
                  onChange={(e) => setFooterData({ ...footerData, email: e.target.value })}
                  className="mt-1 bg-slate-900 border-slate-700 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300">Phone Numbers (JSON Array)</label>
                <Textarea
                  value={JSON.stringify(footerData.phone || [], null, 2)}
                  onChange={(e) => {
                    try {
                      setFooterData({ ...footerData, phone: JSON.parse(e.target.value) });
                    } catch (err) {
                      // Invalid JSON
                    }
                  }}
                  rows={3}
                  className="mt-1 bg-slate-900 border-slate-700 text-white font-mono text-xs"
                  placeholder='["+91 9042 666 555", "+91 44 6009 6009"]'
                />
              </div>
              <Button onClick={updateFooter} disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
                <Save className="mr-2" size={18} />
                Save Footer
              </Button>
            </CardContent>
          </Card>
        );

      case 'contact-messages':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Contact Messages</CardTitle>
                <Badge className="bg-blue-600">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-400 p-6 text-center bg-slate-900/50 rounded-md border border-slate-700">
                📧 Contact message management system coming soon. You'll be able to view and respond to customer inquiries here.
              </div>
            </CardContent>
          </Card>
        );

      case 'project-inquiries':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Project Inquiries</CardTitle>
                <Badge className="bg-blue-600">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-400 p-6 text-center bg-slate-900/50 rounded-md border border-slate-700">
                🏗️ Project inquiry management system coming soon. Track and manage customer project requests.
              </div>
            </CardContent>
          </Card>
        );

      case 'consultations':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Consultation Requests</CardTitle>
                <Badge className="bg-blue-600">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-400 p-6 text-center bg-slate-900/50 rounded-md border border-slate-700">
                📅 Consultation request management coming soon. Schedule and manage client consultations.
              </div>
            </CardContent>
          </Card>
        );

      case 'newsletter':
        return (
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Newsletter Subscriptions</CardTitle>
                <Badge className="bg-blue-600">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-400 p-6 text-center bg-slate-900/50 rounded-md border border-slate-700">
                📰 Newsletter subscription management coming soon. Manage your email subscribers and campaigns.
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Panel | Aikya Builders</title>
        <meta name="description" content="Content Management System" />
      </Helmet>

      <div className="flex h-screen bg-navy-gradient relative overflow-hidden">
        {/* Cosmic Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-glow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="stars absolute inset-0"></div>
        </div>
        {/* Sidebar */}
        <div className="w-64 bg-slate-900/80 backdrop-blur-md border-r border-slate-800/50 flex flex-col relative z-10">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-slate-800/50">
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>

          {/* User Profile */}
          <div className="p-4 border-b border-slate-800/50 relative">
            <div 
              className="flex items-center gap-3 cursor-pointer hover:bg-slate-800/50 p-2 rounded-lg transition-colors"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {user?.fullName?.charAt(0)?.toUpperCase() || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{user?.fullName || 'Admin User'}</p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>
              <ChevronDown size={16} className={`text-slate-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Profile Dropdown */}
            {profileDropdownOpen && (
              <div className="absolute top-full left-4 right-4 mt-2 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
                <button
                  onClick={() => {
                    navigate('/admin-cms');
                    setProfileDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors rounded-t-lg"
                >
                  <Settings size={16} />
                  <span>Management</span>
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setProfileDropdownOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors rounded-b-lg"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Navigation */}
          <ScrollArea className="flex-1 px-3 py-4">
            <div className="space-y-6">
              {/* Main Section */}
              <div>
                <h3 className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">MAIN</h3>
                <button
                  onClick={() => navigate('/')}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <Home size={18} />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === 'dashboard'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <LayoutDashboard size={18} />
                  <span>Dashboard</span>
                </button>
              </div>

              {/* Content Section */}
              <div>
                <button
                  onClick={() => setContentExpanded(!contentExpanded)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors"
                >
                  <span>CONTENT</span>
                  {contentExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
                {contentExpanded && (
                  <div className="mt-2 space-y-1">
                    <button
                      onClick={() => setActiveSection('hero')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'hero'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <FileText size={18} />
                      <span>Hero Section</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('about')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'about'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <FileText size={18} />
                      <span>About Us</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('projects')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'projects'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Building2 size={18} />
                      <span>Projects</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('whychoose')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'whychoose'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <ClipboardList size={18} />
                      <span>Why Choose Us</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('leadership')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'leadership'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Users size={18} />
                      <span>Leadership</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('contact')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'contact'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Phone size={18} />
                      <span>Contact Info</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('testimonials')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'testimonials'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Star size={18} />
                      <span>Testimonials</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('specialoffers')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'specialoffers'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Tag size={18} />
                      <span>Special Offers</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('services')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'services'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Wrench size={18} />
                      <span>Services</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('news')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'news'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Newspaper size={18} />
                      <span>News</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('csr')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'csr'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Heart size={18} />
                      <span>CSR</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('events')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'events'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <PartyPopper size={18} />
                      <span>Events</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('careers')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'careers'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <UserPlus size={18} />
                      <span>Careers</span>
                    </button>
                    <button
                      onClick={() => setActiveSection('footer')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'footer'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Globe size={18} />
                      <span>Footer</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Forms Management Section */}
              <div>
                <button
                  onClick={() => setFormsExpanded(!formsExpanded)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors"
                >
                  <span>FORMS MANAGEMENT</span>
                  {formsExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
                {formsExpanded && (
                  <div className="mt-2 space-y-1">
                    <button
                      onClick={() => setActiveSection('contact-messages')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'contact-messages'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <MessageSquare size={18} />
                      <span className="flex-1 text-left">Contact Messages</span>
                      <Badge className="bg-blue-600 text-xs">New</Badge>
                    </button>
                    <button
                      onClick={() => setActiveSection('project-inquiries')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'project-inquiries'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Briefcase size={18} />
                      <span className="flex-1 text-left">Project Inquiries</span>
                      <Badge className="bg-blue-600 text-xs">New</Badge>
                    </button>
                    <button
                      onClick={() => setActiveSection('consultations')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'consultations'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Calendar size={18} />
                      <span className="flex-1 text-left">Consultations</span>
                      <Badge className="bg-blue-600 text-xs">New</Badge>
                    </button>
                    <button
                      onClick={() => setActiveSection('newsletter')}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === 'newsletter'
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <Bell size={18} />
                      <span className="flex-1 text-left">Newsletter</span>
                      <Badge className="bg-blue-600 text-xs">New</Badge>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-slate-800/50">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden relative z-10">
          {/* Top Bar */}
          <div className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-6">
            <h2 className="text-xl font-bold text-white">
              {activeSection === 'dashboard' && 'Dashboard'}
              {activeSection === 'hero' && 'Hero Section'}
              {activeSection === 'about' && 'About Us'}
              {activeSection === 'projects' && 'Projects'}
              {activeSection === 'whychoose' && 'Why Choose Us'}
              {activeSection === 'leadership' && 'Leadership'}
              {activeSection === 'contact' && 'Contact Information'}
              {activeSection === 'testimonials' && 'Testimonials'}
              {activeSection === 'specialoffers' && 'Special Offers'}
              {activeSection === 'services' && 'Services'}
              {activeSection === 'news' && 'News'}
              {activeSection === 'csr' && 'CSR'}
              {activeSection === 'events' && 'Events'}
              {activeSection === 'careers' && 'Careers'}
              {activeSection === 'footer' && 'Footer'}
              {activeSection === 'contact-messages' && 'Contact Messages'}
              {activeSection === 'project-inquiries' && 'Project Inquiries'}
              {activeSection === 'consultations' && 'Consultation Requests'}
              {activeSection === 'newsletter' && 'Newsletter Subscriptions'}
            </h2>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto bg-transparent">
            <div className="container mx-auto px-6 py-8 max-w-5xl">
              {activeSection === 'dashboard' && (
                <div className="space-y-6">
                  <p className="text-slate-300">Welcome to your admin dashboard</p>
                  <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-3">Admin Dashboard</h2>
                    <p className="text-slate-300">
                      Welcome to the admin dashboard. Use the sidebar to navigate to different sections.
                    </p>
                  </div>
                  <div className="text-center text-sm text-slate-400 mt-12">
                    © 2026 Aikya Builders. All rights reserved.
                  </div>
                </div>
              )}
              {activeSection !== 'dashboard' && renderMainContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCMS;
