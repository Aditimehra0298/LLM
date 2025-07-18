import React, { useState, useEffect } from 'react';
import {
  Calendar, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  ArrowRight,
  BookOpen,
  Target,
  Zap,
  Trophy,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Play,
  Pause,
  TrendingUp,
  Brain,
  Rocket,
  Shield,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Code,
  Database,
  Cpu,
  Bot,
  Lightbulb,
  GraduationCap,
  Building,
  DollarSign,
  Timer,
  Heart,
  Filter,
  X,
  Eye,
  Layers,
  Briefcase,
  Menu
} from 'lucide-react';
import PhasePlan from './PhasePlan';

// --- LLM Tools Explorer Section (from user HTML) ---
const allTools = [
    { name: "Hugging Face Transformers", func: "LLM Fine-tuning & Deployment", price: "Free", depts: ["AI Development", "Machine Learning Engineering", "NLP Research"] },
    { name: "TensorFlow", func: "Deep Learning Framework", price: "Free", depts: ["AI Development", "Machine Learning Engineering", "Data Science"] },
    { name: "PyTorch", func: "Deep Learning Framework", price: "Free", depts: ["AI Development", "Machine Learning Engineering", "Data Science"] },
    { name: "DeepSpeed", func: "Large Scale Model Training", price: "Free", depts: ["Machine Learning Engineering", "AI Infrastructure", "Deep Learning"] },
    { name: "MLflow", func: "ML Lifecycle Management", price: "Free", depts: ["MLOps", "Machine Learning Engineering", "Data Science"] },
    { name: "Keras", func: "Deep Learning API", price: "Free", depts: ["AI Development", "Machine Learning Engineering"] },
    { name: "Intel NLP Architect", func: "Advanced NLP Model Building", price: "Free", depts: ["NLP Research", "AI Development"] },
    { name: "OpenAI API", func: "LLM Access & Integration", price: "Paid/API", depts: ["Software Engineering", "AI Product Development", "Data Science"] },
    { name: "Fairseq", func: "Sequence-to-Sequence Modeling", price: "Free", depts: ["NLP Research", "Machine Learning Engineering"] },
    { name: "spaCy", func: "Production-ready NLP", price: "Free", depts: ["NLP Engineering", "Data Science", "Software Engineering"] },
    { name: "DeepL Translator", func: "Neural Machine Translation", price: "Paid/Service", depts: ["Localization", "Software Engineering"] },
    { name: "Sentence-Transformers", func: "Sentence Embeddings", price: "Free", depts: ["NLP Engineering", "Data Science", "Information Retrieval"] },
    { name: "Streamlit", func: "ML App Development", price: "Free", depts: ["Data Science", "Machine Learning Engineering", "Software Engineering"] },
    { name: "Hugging Face Datasets", func: "Dataset Management", price: "Free", depts: ["Data Science", "Machine Learning Engineering", "NLP Research"] },
    { name: "Apache OpenNLP", func: "NLP Libraries & Models", price: "Free", depts: ["NLP Engineering", "Data Science"] },
    { name: "Fitz", func: "Scalable LLM Training", price: "Free", depts: ["Machine Learning Engineering", "AI Infrastructure", "Deep Learning"] },
    { name: "Google ML Kit", func: "Mobile ML Functionality", price: "Free", depts: ["Mobile Development", "Software Engineering"] },
    { name: "Vowpal Wabbit", func: "Scalable ML System", price: "Free", depts: ["Machine Learning Engineering", "Data Science"] }
];
const allFunctions = [...new Set(allTools.map(tool => tool.func))];
const allDepartments = [...new Set(allTools.flatMap(tool => tool.depts))];
const getPriceColor = (price: string) => {
    switch (price) {
        case 'Free': return 'bg-green-100 text-green-800';
        case 'Paid/API': return 'bg-indigo-100 text-indigo-800';
        case 'Paid/Service': return 'bg-orange-100 text-orange-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};
function LLMToolsExplorer() {
    const [functionFilter, setFunctionFilter] = useState('all');
    const [departmentFilter, setDepartmentFilter] = useState('all');
    const [filteredTools, setFilteredTools] = useState(allTools);
    useEffect(() => {
        let currentFilteredTools = allTools;
        if (functionFilter !== 'all') {
            currentFilteredTools = currentFilteredTools.filter(tool => tool.func === functionFilter);
        }
        if (departmentFilter !== 'all') {
            currentFilteredTools = currentFilteredTools.filter(tool => tool.depts.includes(departmentFilter));
        }
        setFilteredTools(currentFilteredTools);
    }, [functionFilter, departmentFilter]);
    return (
        <section id="tools" className="py-16 sm:py-20">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                    🛠️ Large Language Model Tools Explorer
                </h2>
                <p className="text-md sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto">
                    Explore the powerful tools and frameworks you'll master during the program
                </p>
            </div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-12">
                <div className="flex items-center space-x-2">
                    <Filter size={20} className="text-gray-500" />
                    <select
                        value={functionFilter}
                        onChange={(e) => setFunctionFilter(e.target.value)}
                        className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                        <option value="all">All Functions</option>
                        {allFunctions.map(func => (
                            <option key={func} value={func}>{func}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center space-x-2">
                    <Briefcase size={20} className="text-gray-500" />
                    <select
                        value={departmentFilter}
                        onChange={(e) => setDepartmentFilter(e.target.value)}
                        className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                        <option value="all">All Departments</option>
                        {allDepartments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* Tools Grid - horizontal scrollable, equal size cards */}
            <div className="overflow-x-auto pb-4 -mx-4">
                <div className="flex space-x-6 min-w-[900px] px-4">
                    {filteredTools.map((tool, index) => (
                        <div key={index} className="bg-white w-72 h-64 flex-shrink-0 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-500 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-bold text-gray-900 text-lg">{tool.name}</h3>
                                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getPriceColor(tool.price)}`}>
                                        {tool.price}
                                    </span>
                                </div>
                                <p className="text-sm text-teal-600 font-medium mb-4">{tool.func}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {tool.depts.slice(0, 3).map((dept, deptIndex) => (
                                    <span key={deptIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium">
                                        {dept}
                                    </span>
                                ))}
                                {tool.depts.length > 3 && (
                                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-medium">
                                        +{tool.depts.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Scroll indicator for mobile */}
                <div className="block sm:hidden mt-2 text-center text-gray-400 text-xs select-none">
                    <span className="inline-block animate-bounce">⬅️ Scroll to explore more tools ➡️</span>
                </div>
            </div>
            {/* Message for when no tools match the filter */}
            {filteredTools.length === 0 && (
                <div className="text-center py-16">
                    <div className="text-gray-400 mb-4">
                        <Bot size={48} className="mx-auto" />
                    </div>
                    <p className="text-gray-600 text-lg">No tools found matching your filters.</p>
                    <p className="text-gray-500 text-sm">Try selecting a different function or department.</p>
                </div>
            )}
        </section>
    );
}

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [enrollmentCount, setEnrollmentCount] = useState(53);
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [functionFilter, setFunctionFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Modal state
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    location: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Handle enroll modal form submission
  const handleEnrollSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    const url = "https://script.google.com/macros/s/AKfycbySZOPr0YG2M6-TzVsDgb-OFOdbqyM3-b2XU4sPynL7qs6tL8Ls4p8Q11Q84i-Qy3F2Lg/exec";
    const timestamp = new Date().toISOString();
    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      location: form.location,
      professional: form.profession,
      timestamp
    };
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFormStatus('success');
      setForm({ name: '', email: '', phone: '', profession: '', location: '' });
    } catch (err) {
      setFormStatus('error');
    }
  };

  // Curriculum Data
  const curriculumData = [
    { 
  
      phase: 1, 
      name: 'Foundations of AI & Prompt Engineering', 
      objective: 'Build a Strong base in AI logic, tools, and Conversational Frameworks.',
      topics: ['What is AI? Types, Capabilities, and Risks, Understanding LLMs (GPT, Claude, Gemini)', 'Prompt Engineering: Roles, Functions, Advanced Flows, Structured Prompts for Q&A, Data Extraction, Analysis', 'Hands-on: ChatGPT, Google AI Studio, Gemini', 'Project: “Your Personal GPT-powered Study Assistant”'], 
      bestTool: 'Google AI Studio, Gemini, Claude, Poe',
      activity: 'Hands-on: Engage with Google AI Studio for basic Q&A and brainstorming. Craft initial prompts for common workplace scenarios.' 
    },
    { 
     
      phase: 2, 
      name: 'No-Code Automation & Smart AI Workflows', 
      objective: 'Learn to automate real-world tasks using visual tools — no coding needed.', 
      topics: ['Logic building & trigger-based workflow design', 'Connecting apps: Gmail, Google Forms, WhatsApp, Sheets', 'Build bots for lead capture, email replies, & data storage', 'Create dynamic workflows with Make, n8n, Zapier, Build: “Auto-Response System for Freelancers & Startups”'], 
      bestTool: 'ChatGPT, NotebookLM, Zapier, Make, Latenode, Google Workspace, Webhooks ', 
      activity: 'Hands-on: Practice advanced prompting for detailed outputs. Summarize a sample report or policy document using AI.' 
    },
    { 
      phase: 3, 
      name: 'Applied AI in Real-Life Roles (Creative, Admin, HR, Audit)', 
      objective: ' Use AI to solve industry problems in marketing, HR, content, audits & more.', 
      topics: ['Creative & Marketing: Use Canva AI, Runway, D-ID, and Notion AI to design AI-generated graphics, captions, reels, and brand kits—build an AI-Based Social Media Manager', 'HR & Admin: Leverage Fireflies.ai, Google Calendar, and Voiceflow to automate resume screening, onboarding, and task management—create an HR AI Screening Assistant', 'Audit, Ops & Consultants: Automate checklists, reports, and compliance bots using Docsumo, Botpress, and Notion AI—develop a GHG Verifiers Report Auto-Generator','Freelancers & Solopreneurs: Use ChatGPT, Make, Google Docs, and Notion to build onboarding bots, automate invoices and proposals—launch a Client Proposal & Invoice Bot'], 
      bestTool: 'Make', 
      activity: 'Hands-on: Simulate a simple automated workflow (e.g., data entry, notification).' 
    },
    { 
     
      phase: 3, 
      name: 'Capstone, Career Boost & Certification', 
      objective: 'Apply everything you’ve learned in a real-world capstone project & prepare for job/freelance success.', 
      topics: ['Choose your final AI use-case (guided mentoring)','Build + Deploy: Real AI Solution or Automation', 'Create: AI Resume, LinkedIn Portfolio, Freelance Profile', 'Pitch & Showcase: Peer review + Community feature','Receive your EVOKE Certificate of Mastery'], 
      bestTool: 'Google AI Studio Veo, HeyGen, Canva AI,  Notion AI, Gamma.app, Fireflies', 
      activity: 'Hands-on: Edit a sample image using AI features. Generate a short video script and discuss AI tools for video production.' 
    },
    
  ];

  // Tools Data
  const toolsData = [
    // LLMs
    { name: 'ChatGPT', func: 'LLM', depts: ['Finance', 'Planning', 'Copywriting', 'HR', 'Digital Marketing', 'Client Servicing', 'Auditing'], price: 'Freemium' },
    { name: 'Claude AI', func: 'LLM', depts: ['IT', 'Copywriting'], price: 'Freemium' },
    { name: 'Google Gemini', func: 'LLM', depts: ['Planning'], price: 'Freemium' },
    { name: 'Google AI Studio', func: 'LLM Development', depts: ['IT', 'Planning'], price: 'Free' },

    // Conversational AI/Chatbots
    { name: 'Voiceflow/Vapi', func: 'Chatbot', depts: ['Administration', 'Client Servicing'], price: 'Freemium/Paid' },
    { name: 'Botpress', func: 'Chatbot', depts: ['Client Servicing'], price: 'Freemium/Paid' },

    // Document & Text Processing
    { name: 'Docsumo', func: 'Document Processing', depts: ['Finance', 'Auditing'], price: 'Paid' },
    { name: 'Nanonets', func: 'Document Processing', depts: ['Finance', 'Auditing'], price: 'Paid' },
    { name: 'Grammarly', func: 'Document Processing', depts: ['Copywriting'], price: 'Freemium' },
    { name: 'Google Sheets AI Plugin', func: 'Document Processing', depts: ['Auditing', 'Finance'], price: 'Free' },
    { name: 'Notion AI', func: 'Document Processing', depts: ['Planning', 'Operations', 'HR'], price: 'Freemium' },
    { name: 'ChatPDF', func: 'Document Processing', depts: [], price: 'Freemium' },
    { name: 'Humata', func: 'Document Processing', depts: [], price: 'Freemium' },
    { name: 'NotebookLM', func: 'Document Processing', depts: ['Planning', 'Auditing', 'Finance', 'Operations', 'HR', 'Client Servicing'], price: 'Free' },

    // Image Creation & Editing
    { name: 'Canva AI', func: 'Image Creation', depts: ['Creative 2D', 'Digital Marketing'], price: 'Freemium' },
    { name: 'Midjourney', func: 'Image Creation', depts: [], price: 'Paid' },
    { name: 'DALL-E', func: 'Image Creation', depts: ['Creative 2D'], price: 'Freemium' },
    { name: 'Stable Diffusion', func: 'Image Creation', depts: [], price: 'Free/Open-source' },
    { name: 'Adcreative.ai', func: 'Image Creation', depts: ['Digital Marketing'], price: 'Paid' },
    { name: 'Microsoft Designer', func: 'Image Creation', depts: ['Creative 2D'], price: 'Freemium' },

    // Video Creation
    { name: 'HeyGen', func: 'Video Creation', depts: ['Creative 2D', 'HR'], price: 'Freemium' },
    { name: 'Sora', func: 'Video Creation', depts: ['Digital Marketing'], price: 'Limited Access' },
    { name: 'Google Veo', func: 'Video Creation', depts: [], price: 'Limited Access' },
    { name: 'Luma Labs AI', func: 'Video Creation', depts: [], price: 'Freemium/Paid' },
    { name: 'Pictory', func: 'Video Creation', depts: ['HR', 'Digital Marketing'], price: 'Paid' },
    { name: 'RunwayML', func: 'Video Creation', depts: [], price: 'Freemium' },
    { name: 'Synthesia', func: 'Video Creation', depts: [], price: 'Paid' },

    // Workflow Automation & Integration
    { name: 'Make', func: 'Automation', depts: ['Finance', 'Administration', 'Client Servicing', 'Digital Marketing', 'IT', 'Operations'], price: 'Freemium' },
    { name: 'Zapier', func: 'Automation', depts: ['Finance', 'Administration', 'Client Servicing', 'Digital Marketing', 'IT'], price: 'Freemium' },
    { name: 'Go High Level', func: 'Automation', depts: ['Client Servicing', 'Operations'], price: 'Paid' },
    { name: 'Trello', func: 'Automation', depts: ['Administration'], price: 'Freemium' },
    { name: 'ClickUp', func: 'Automation', depts: ['Operations'], price: 'Freemium' },
    { name: 'Latenode', func: 'Automation', depts: ['IT'], price: 'Freemium/Paid' },
    { name: 'n8n', func: 'Automation', depts: ['IT'], price: 'Free/Open-source' },

    // Specialized Departmental AI
    { name: 'Zoho AI', func: 'Specialized', depts: ['HR'], price: 'Paid' },
    { name: 'GitHub Copilot', func: 'Specialized', depts: ['IT'], price: 'Paid' },
    { name: 'Bolt AI', func: 'Specialized', depts: ['IT'], price: 'Paid/Licensed' },
    { name: 'Cursor AI', func: 'Specialized', depts: ['IT'], price: 'Paid/Licensed' },
    { name: 'Wix Studio AI', func: 'Specialized', depts: ['IT'], price: 'Freemium/Paid' },
    { name: 'MindBridge Ai Auditor', func: 'Specialized', depts: ['Finance', 'Auditing'], price: 'Paid' },
    { name: 'AuditBoard', func: 'Specialized', depts: ['Auditing'], price: 'Paid' },
    { name: 'Copy.ai', func: 'Copywriting', depts: ['Digital Marketing'], price: 'Freemium' },
  ];

  const functions = [...new Set(toolsData.map(t => t.func))].sort();
  const departments = [...new Set(toolsData.flatMap(t => t.depts))].sort();

  const filteredTools = toolsData
    .filter(tool => (functionFilter === 'all' || tool.func === functionFilter))
    .filter(tool => (departmentFilter === 'all' || tool.depts.includes(departmentFilter)));

  const getPriceColor = (price: string) => {
    const colors = {
      'Freemium': 'bg-sky-100 text-sky-800',
      'Freemium/Paid': 'bg-cyan-100 text-cyan-800',
      'Paid': 'bg-amber-100 text-amber-800',
      'Paid/Licensed': 'bg-rose-100 text-rose-800',
      'Free/Open-source': 'bg-emerald-100 text-emerald-800',
      'Limited Access': 'bg-slate-100 text-slate-800'
    };
    return colors[price as keyof typeof colors] || 'bg-slate-100 text-slate-800';
  };

  const getPhaseColor = (phase: number) => {
    const colors = {
      1: 'from-blue-500 to-blue-600',
      2: 'from-purple-500 to-purple-600',
      3: 'from-orange-500 to-red-500',
      4: 'from-green-500 to-green-600'
    };
    return colors[phase as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'curriculum', 'tools', 'features', 'testimonials', 'pricing'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate real-time enrollment counter
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (Math.random() > 0.7) {
  //       setEnrollmentCount(prev => prev + 1);
  //     }
  //   }, 15000);
  //   return () => clearInterval(interval);
  // }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleVideo = () => {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const testimonials = [
    {
      quote: "As a marketing student, I built my first chatbot in Week 2. Evoke's hands-on learning is a game-changer.",
      author: "Rhea S.",
      role: "DU Student",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "Our group of 4 joined with the discount. Worth every rupee. We built automations we now use for freelance clients!",
      author: "Pranav M.",
      role: "Freelancer",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      quote: "The AI tools I learned here helped me land a job at a tech startup. The portfolio projects were impressive to recruiters.",
      author: "Ananya K.",
      role: "Software Engineer",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "Do I need any coding experience?",
      answer: "No! This course is designed for those with basic Python and AI knowledge. All tools are visual, drag-and-drop interfaces, but foundational coding skills are required to fully engage with the content."
    },
    {
      question: "What if I miss a live session?",
      answer: "All live sessions are recorded and available for lifetime access. You can catch up anytime and ask questions in our community."
    },
    {
      question: "Is there job placement assistance?",
      answer: "Yes! We provide resume building, portfolio guidance, and connect you with our partner companies for internships and job opportunities."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied within the first week, we'll provide a full refund."
    }
  ];

  const stats = [
    { number: "500+", label: "Students Trained", icon: Users },
    { number: "95%", label: "Job Success Rate", icon: TrendingUp },
    { number: "50+", label: "AI Tools Covered", icon: Bot },
    { number: "24/7", label: "Community Support", icon: MessageCircle }
  ];

  return (
  <div className="min-h-screen bg-gray-50">
      {/* Floating Notification */}
      {/* (Remove the entire floating notification div) */}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-24">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src="/l2.png" alt="Evoke AI Logo" className="h-16 lg:h-20 w-auto" />
              </div>
              <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                EVOKE AI
              </span>
              <div className="hidden sm:block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                LIVE
              </div>
            </div>
            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex items-center justify-center p-2 ml-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowMobileMenu((v) => !v)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-7 h-7 text-blue-600" />
            </button>
            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-8">
              {['overview', 'curriculum', 'tools', 'features', 'testimonials', 'pricing'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-all duration-300 capitalize relative ${
                    activeSection === section 
                      ? 'text-blue-600 scale-110' 
                      : 'text-gray-700 hover:text-blue-600 hover:scale-105'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
            <button
              onClick={() => setShowEnrollModal(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {showMobileMenu && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 z-50 animate-fade-in">
            <nav className="flex flex-col py-2">
              {['overview', 'curriculum', 'tools', 'features', 'testimonials', 'pricing'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setShowMobileMenu(false);
                  }}
                  className={`w-full text-left px-6 py-3 font-medium capitalize text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 ${activeSection === section ? 'text-blue-600' : ''}`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-32">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://cdn.pixabay.com/video/2023/07/19/172170-846731303_large.mp4" type="video/mp4" />
        </video>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/80"></div>
        
        {/* Video Control */}
        <button
          onClick={toggleVideo}
          className="absolute top-24 right-8 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 z-10"
        >
          {isVideoPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating Badge: Group Discount Available */}
          

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-yellow-300 animate-pulse">Evoke AI Large Language Model (LLM)</span>
            <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-orange-300 bg-clip-text text-transparent">
              MASTER CLASS
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Elevate Your AI Career in Just 6 Months – Harness the Power of Large Language Models and Real-World Experience!
          </p>
          
          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-300">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => scrollToSection('overview')}
              className="group bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Rocket size={20} />
                <span>Start Your AI Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('curriculum')}
              className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium hover:bg-blue-200 transition-all duration-300 border border-blue-200"
            >
              <BookOpen size={20} />
              <span>View Curriculum</span>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar className="text-yellow-300" size={20} />
              <span>6 Month Program</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="text-yellow-300" size={20} />
              <span>100% Offline</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="text-yellow-300" size={20} />
              <span>Industry Certificate</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Partner Companies Section - Always Filled Motion Bar */}
      <section className="bg-white py-8">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Our Partner Companies</h2>
        <div className="w-full overflow-x-hidden">
          <div
            className="flex items-center space-x-32 animate-logo-scroll"
            style={{ animation: 'logo-scroll 20s linear infinite', minHeight: '100px' }}
          >
            {Array(4).fill([3,4,5,6,7,8,9]).flat().map((num, idx) => (
              <img
                key={num + '-' + idx}
                src={`/l${num}.png`}
                alt={`Partner Logo l${num}`}
                className="h-20 w-auto object-contain drop-shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview Section */}
        <section id="overview" className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold mb-6 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Target size={20} />
                  <span>🎯 LLM is more than just technology — it’s your key to mastering AI-driven language solutions today!</span>
                </div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Program Overview</h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              LLM Workshop, a flagship program by DamnArt, is a comprehensive 6-month intensive training led by top legal professionals. It’s designed to provide in-depth legal knowledge while integrating essential Python and AI coding skills, empowering you to master LLM and work on real-world projects.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a student, freelancer, marketer, or job-seeker — if you're ready to future-proof your career, this course is for you.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                  <Shield className="text-blue-500" size={24} />
                  <span>LLM with Python and AI – Empowering You with Practical Skills for the Future of Language Models!

                  </span>
                </h3>
                <p className="text-gray-700">"All tools are intuitive, easy-to-use, and crafted for real-world application.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Key Program Details</h3>
              
              <div className="space-y-4 relative z-10">
                {[
                 { icon: Calendar, label: 'Duration', value: '4 Months Training + 2 Months Industry Training', color: 'bg-blue-100 text-blue-600' },
                 { icon: Globe, label: 'Mode', value: '100% Offline Training', color: 'bg-green-100 text-green-600' },
                 { icon: DollarSign, label: 'Total Fees', value: '₹10,000 per month (6 Months)', color: 'bg-orange-100 text-orange-600' },
                 { icon: Clock, label: 'Next Batch', value: 'Starts August 1, 2025', color: 'bg-purple-100 text-purple-600' },
                 { icon: Award, label: 'Certification', value: 'Industry-recognized certificate', color: 'bg-yellow-100 text-yellow-600' },
                 { icon: Users, label: 'Group Discount', value: 'Available for 3+ participants', color: 'bg-pink-100 text-pink-600' },  
                 { icon: DollarSign, label: 'Incentive', value: 'Top performers earn up to ₹5,000/month from Month 2, rising to ₹7,000/month from Month 4 for exceptional performance', color: 'bg-green-100 text-green-600' },               
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    <div className={`p-3 rounded-lg ${item.color}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.label}</div>
                      <div className="text-gray-600">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Curriculum Section */}
        <section id="curriculum" className="py-0 bg-transparent px-0">
          <PhasePlan />
        </section>

        {/* AI Tools Explorer Section */}
<LLMToolsExplorer />

{/* Features Section */}
<section id="features" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-6">
  <div className="text-center mb-10 sm:mb-16">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2 sm:mb-4 flex items-center justify-center gap-2">
      <span role="img" aria-label="magnifying glass">🔍</span> Program Features
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-blue-700 max-w-3xl mx-auto">
      All the tools, resources, and guidance you need to excel in LLM training
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
    {[
      { icon: Users, title: 'Expert Mentorship', desc: 'Learn from industry-leading AI professionals', color: 'from-blue-500 to-blue-700' },
      { icon: Clock, title: 'Live Sessions', desc: 'Interactive mentor sessions and Q&A', color: 'from-blue-400 to-blue-600' },
      { icon: Bot, title: 'AI Avatars', desc: 'Work with interactive AI avatars and recorded modules', color: 'from-blue-300 to-blue-500' },
      { icon: MessageCircle, title: '1-on-1 Support', desc: 'Personalized support for every query', color: 'from-blue-200 to-blue-400' },
      { icon: BookOpen, title: 'Portfolio Building', desc: 'Create a portfolio with real-world LLM projects', color: 'from-blue-100 to-blue-300' },
      { icon: Target, title: 'Free Resources', desc: 'Access templates and automation workflows', color: 'from-blue-200 to-blue-400' },
      { icon: Award, title: 'Certification', desc: 'Earn an industry-recognized certification', color: 'from-blue-300 to-blue-500' },
      { icon: Heart, title: 'Community', desc: 'Lifetime access to support and community', color: 'from-blue-400 to-blue-600' }
    ].map((feature, index) => (
      <div key={index} className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-start relative overflow-hidden">
        <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
          <feature.icon className="text-white" size={28} />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
        <div className="absolute top-0 right-0 w-16 h-16 bg-white/40 rounded-br-2xl rounded-tl-2xl pointer-events-none"></div>
      </div>
    ))}
  </div>
</section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              🗣️ Hear What Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real students who transformed their careers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -ml-16 -mt-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -mr-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 text-center mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-semibold text-blue-600 text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-500">{testimonials[currentTestimonial].role}</div>
                </div>
                
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              ❓ Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about the program
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronRight 
                    className={`text-gray-400 transform transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`} 
                    size={20} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  💸 Program Fee & Enrollment
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                Invest in your future with our comprehensive Large Language Model workshop.
                </p>
                
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-2xl text-center mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold mb-2">₹10,000 per month</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: '👥 Group Discount', value: 'Available for 3+', icon: Users },
                    { label: '💰 Payment Plan', value: '₹10,000 per month for 6 months', icon: DollarSign },
                    { label: '📅 Start Date', value: 'August 1, 2025', icon: Calendar },
                    { label: '🖥️ Mode', value: '100% Offline', icon: Globe },
                    { label: '📜 Certification', value: 'DamnArt AI Division', icon: Award },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-300">
                      <div className="flex items-center space-x-3">
                        <item.icon className="text-blue-600" size={20} />
                        <span className="font-medium text-gray-700">{item.label}</span>
                      </div>
                      <span className="text-blue-600 ">{item.value}</span>
                    </div>
                  ))}
                  {/* Stipend Row - suitcase + gift emoji, label, blue value right-aligned, two lines */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="text-blue-600" size={20} />
                      <span className="text-lg">🎁</span>
                      <span className="font-medium text-gray-700">Stipend</span>
                    </div>
                    <span className="text-blue-600 text-right block">
                      Upto 5,000/month from 2nd month
                      <span className="block text-xs text-blue-500 font-normal">(7000/month from 4th month for top performers)</span>
                    </span>
                  </div>
                  {/* Placement Opportunity Row - users + rocket emoji, label, blue value right-aligned */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <Users className="text-blue-600" size={20} />
                      <span className="text-lg">🚀</span>
                      <span className="font-medium text-gray-700">Placement Opportunity</span>
                    </div>
                    <span className="text-blue-600 text-right whitespace-nowrap">Entry-level AI Executive role</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">📞 Quick Contact</h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <Globe className="text-blue-600" size={20} />
                      <span className="text-gray-700">www.damnart.com/evoke</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <Phone className="text-blue-600" size={20} />
                      <a href="tel:+919056544487" className="text-gray-700 font-semibold hover:text-blue-700 transition-colors">+91 90565 44487</a>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                      <Mail className="text-blue-600" size={20} />
                      <span className="text-gray-700">info@www.damnart.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border-l-4 border-blue-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10 flex items-center space-x-2">
                    <Lightbulb className="text-blue-500" size={28} />
                    <span>🧠 Still Thinking?</span>
                  </h3>
                  <p className="text-gray-700 mb-4 relative z-10">
                    This course is not for tomorrow. It's for today's learner, the one who wants to create, automate, and lead with AI.
                  </p>
                  <p className="font-semibold text-gray-900 relative z-10">
                    No tech degree. No expensive tools. Just curiosity, guidance, and action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      {/* Floating Call Button */}
      <a
        href="tel:+919056544487"
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center bg-red-600 text-white p-0 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
        style={{ boxShadow: '0 8px 32px 0 rgba(200, 0, 0, 0.25)', width: '56px', height: '56px' }}
        aria-label="Call +91 90565 44487"
      >
        <Phone className="" size={32} />
      </a>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919056544487"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-transparent p-0 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        style={{ boxShadow: '0 8px 32px 0 rgba(0, 200, 0, 0.15)', width: '56px', height: '56px' }}
        aria-label="WhatsApp +91 90565 44487">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" width="56" height="56" style={{ display: 'block' }}/>
      </a>
      </div>
      <div className='w-full'>
        {/* CTA Section - Full Width Gradient */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-16 px-4 sm:px-0 w-full text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ✅ Enroll Today and EVOKE Your Future
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Don't wait for the future to happen. Create it with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button
              onClick={() => setShowEnrollModal(true)}
              className="group bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <GraduationCap size={24} />
              <span>Register Now</span>
              <ArrowRight size={24} />
            </button>
            <a
              href="tel:+919056544487"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50 flex items-center space-x-2"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={20} />
              <span>Book a Free Call</span>
            </a>
            <a
              href="https://wa.me/919056544487"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-2"
              style={{ textDecoration: 'none' }}
            >
              <MessageCircle size={20} />
              <span>💬 Chat with Us</span>
            </a>
          </div>
          
        </section>

      {/* Enroll Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-2 p-4 sm:p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl"
              onClick={() => setShowEnrollModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 text-center">Enroll Now</h2>
            <form className="space-y-4" onSubmit={handleEnrollSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Profession</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  value={form.profession}
                  onChange={e => setForm({ ...form, profession: e.target.value })}
                  required
                >
                  <option value="">Select Profession</option>
                  <option value="Student">Student</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Location</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  value={form.location}
                  onChange={e => setForm({ ...form, location: e.target.value })}
                  required
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium w-full sm:w-auto"
                  onClick={() => setShowEnrollModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold w-full sm:w-auto"
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              {formStatus === 'success' && (
                <div className="text-green-600 text-center font-semibold">Enrolled successfully!</div>
              )}
              {formStatus === 'error' && (
                <div className="text-red-600 text-center font-semibold">Submission failed. Please try again.</div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Day Detail Modal */}
      {selectedDay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`bg-gradient-to-r ${getPhaseColor(selectedDay.phase)} p-6 text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Day {selectedDay.day}</h2>
                  <h3 className="text-xl text-white/90">{selectedDay.name}</h3>
                  <p className="text-white/80 mt-2">Phase {selectedDay.phase}</p>
                </div>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🎯 Learning Objective</h4>
                <p className="text-gray-700 leading-relaxed">{selectedDay.objective}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">📚 Topics Covered</h4>
                <ul className="space-y-2">
                  {selectedDay.topics.map((topic: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🛠️ Best Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDay.bestTool.split(',').map((tool: string, index: number) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tool.trim()}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🎯 Hands-on Activity</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">{selectedDay.activity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full -ml-32 -mt-32"></div>
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/l2.png" alt="Evoke AI Logo" className="h-16 w-16 bg-white rounded-full shadow-lg object-contain" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">EVOKE AI</span>
          </div>
          <p className="text-gray-400 mb-4">
            &copy; 2025 DamnArt. All rights reserved. | EVOKE AI Masterclass
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="https://www.damnart.com/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.damnart.com/services/" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://www.damnart.com/contact-us/" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>




      </div>
    </div>
  );
}


export default App;
