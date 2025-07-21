import React, { useState } from 'react';
import { 
  Brain, 
  Code2, 
  Target, 
  Award, 
  Calendar, 
  Users, 
  BookOpen, 
  Wrench, 
  Play,
  ChevronRight,
  ChevronDown,
  Clock,
  CheckCircle,
  Star,
  Lightbulb,
  Cog,
  Briefcase,
  Trophy,
  PlayCircle,
  Monitor,
  Code,
  Palette,
  FileText,
  Pause,
  Database,
  Server,
  Zap,
  Cpu,
  GitBranch,
  Cloud
} from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  focus: string;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  videoUrl: string;
  videoThumbnail: string;
  weeks: {
    week: number;
    title: string;
    topics: string[];
    projects: string[];
    tools: string[];
  }[];
  keySkills: string[];
  deliverables: string[];
}

const phases: Phase[] = [
  {
    id: 1,
    title: "Introduction to LLMs, Python, and AI Fundamentals",
    subtitle: "Build foundational knowledge in Large Language Models, Python programming, and essential AI concepts",
    duration: "Month 1",
    focus: "LLM Fundamentals + Python Programming",
    color: "from-blue-500 to-purple-600",
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
    icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    videoUrl: "/ai.mp4",
    videoThumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    weeks: [
      {
        week: 1,
        title: "Introduction to Large Language Models (LLMs)",
        topics: [
          "What are LLMs? Overview and applications",
          "Popular LLMs: GPT-3, BERT, T5, GPT-4",
          "The transformer architecture: Attention mechanism, encoder-decoder",
          "How LLMs Work: Training, fine-tuning, and task-specific applications"
        ],
        projects: [
          "LLM comparison analysis project",
          "Transformer architecture visualization"
        ],
        tools: ["Hugging Face", "OpenAI API", "Python"]
      },
      {
        week: 2,
        title: "Basics of Python Programming for AI",
        topics: [
          "Python Basics: Variables, data types, loops, functions",
          "Essential Python libraries: NumPy, Pandas, Matplotlib",
          "Setting Up the Python Environment: IDEs, libraries"
        ],
        projects: [
          "Python environment setup",
          "Data manipulation with Pandas project"
        ],
        tools: ["Python", "Jupyter Notebook", "VS Code", "NumPy", "Pandas"]
      },
      {
        week: 3,
        title: "Introduction to AI and Machine Learning Concepts",
        topics: [
          "AI Fundamentals: Narrow AI, General AI",
          "Machine learning: Supervised, unsupervised, reinforcement learning",
          "Neural Networks: layers, nodes, activation functions",
          "Deep learning in NLP and its role in LLMs"
        ],
        projects: [
          "Neural network from scratch",
          "ML algorithm comparison study"
        ],
        tools: ["TensorFlow", "Scikit-learn", "PyTorch"]
      },
      {
        week: 4,
        title: "NLP Basics and Hugging Face Introduction",
        topics: [
          "Text processing: Tokenization, stemming, lemmatization",
          "Word embeddings: TF-IDF, Word2Vec, GloVe",
          "Running pre-trained models with Hugging Face Transformers"
        ],
        projects: [
          "Text generation project using Hugging Face",
          "Word embedding visualization"
        ],
        tools: ["Hugging Face", "NLTK", "SpaCy", "Gensim"]
      }
    ],
    keySkills: ["Python Programming", "LLM Fundamentals", "Neural Networks", "NLP Basics"],
    deliverables: ["Python Portfolio", "LLM Analysis Report", "Text Generation App"]
  },
  {
    id: 2,
    title: "In-Depth Learning and Development",
    subtitle: "Deepen Python, AI, and LLM understanding with advanced topics and hands-on projects",
    duration: "Month 2",
    focus: "Advanced Python + Deep Learning + Model Fine-tuning",
    color: "from-green-500 to-teal-600",
    gradient: "bg-gradient-to-br from-green-50 to-teal-50",
    icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    videoUrl: "/a5.mp4",
    videoThumbnail: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    weeks: [
      {
        week: 1,
        title: "Advanced Python and Data Handling",
        topics: [
          "Advanced Python: List comprehensions, lambda functions, error handling",
          "Data handling with Pandas for manipulation",
          "Matplotlib for visualization"
        ],
        projects: [
          "Text dataset manipulation project",
          "Data visualization dashboard"
        ],
        tools: ["Pandas", "Matplotlib", "Seaborn", "Plotly"]
      },
      {
        week: 2,
        title: "Advanced Neural Networks and Deep Learning",
        topics: [
          "CNN, RNN, and LSTM networks",
          "Introduction to TensorFlow and Keras",
          "Deep learning model architecture design"
        ],
        projects: [
          "Build and train a deep learning model",
          "CNN for image classification"
        ],
        tools: ["TensorFlow", "Keras", "PyTorch", "OpenCV"]
      },
      {
        week: 3,
        title: "Fine-Tuning LLMs for Specific Use-Cases",
        topics: [
          "Transformer fine-tuning techniques",
          "Fine-tuning pre-trained models on custom datasets",
          "Transfer learning strategies"
        ],
        projects: [
          "Fine-tune transformer for text classification",
          "Custom dataset preparation and training"
        ],
        tools: ["Hugging Face", "Transformers", "PyTorch", "Weights & Biases"]
      },
      {
        week: 4,
        title: "Model Optimization and Evaluation",
        topics: [
          "Hyperparameter tuning and learning rate adjustments",
          "Model performance metrics: accuracy, precision, recall",
          "Optimization strategies for better performance"
        ],
        projects: [
          "Model optimization project",
          "Performance evaluation dashboard"
        ],
        tools: ["Optuna", "Ray Tune", "MLflow", "TensorBoard"]
      }
    ],
    keySkills: ["Advanced Python", "Deep Learning", "Model Fine-tuning", "Performance Optimization"],
    deliverables: ["Fine-tuned Model", "Optimization Report", "Performance Dashboard"]
  },
  {
    id: 3,
    title: "Building Real-World NLP Applications with LLMs",
    subtitle: "Build advanced skills in developing and deploying LLM-based NLP applications",
    duration: "Month 3",
    focus: "Real-World NLP Applications + Chatbots + Text Analysis",
    color: "from-orange-500 to-red-600",
    gradient: "bg-gradient-to-br from-orange-50 to-red-50",
    icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    videoUrl: "/ai4.mp4",
    videoThumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    weeks: [
      {
        week: 1,
        title: "Implementing Text Generation with GPT Models",
        topics: [
          "Working with GPT-2 and GPT-3 for text generation",
          "Applications in content creation and creative writing",
          "Chatbot development with GPT models"
        ],
        projects: [
          "Content generation system using GPT",
          "Creative writing assistant"
        ],
        tools: ["OpenAI API", "GPT-3", "GPT-4", "Streamlit"]
      },
      {
        week: 2,
        title: "Building Chatbots and Conversational AI",
        topics: [
          "Introduction to conversational AI and chatbots",
          "Using Rasa or Hugging Face's chatbot models",
          "Dialog management and context handling"
        ],
        projects: [
          "Develop a basic chatbot using pre-trained LLMs",
          "Customer service automation bot"
        ],
        tools: ["Rasa", "Botpress", "Dialogflow", "ChainLit"]
      },
      {
        week: 3,
        title: "Text Summarization and Question Answering",
        topics: [
          "Abstractive and extractive summarization methods",
          "Developing question-answering systems with BERT",
          "Document understanding and information extraction"
        ],
        projects: [
          "Build a summarizer and question-answering model",
          "Document analysis system"
        ],
        tools: ["BERT", "RoBERTa", "T5", "BART"]
      },
      {
        week: 4,
        title: "NLP Applications in Real Life",
        topics: [
          "Sentiment analysis and Named Entity Recognition (NER)",
          "Document classification and content moderation",
          "Industry applications in healthcare, finance, customer service"
        ],
        projects: [
          "Sentiment analysis model for product reviews",
          "Content moderation system"
        ],
        tools: ["SpaCy", "NLTK", "Flair", "TextBlob"]
      }
    ],
    keySkills: ["Text Generation", "Chatbot Development", "Text Analysis", "NLP Applications"],
    deliverables: ["Chatbot Application", "Text Analysis Tool", "NLP Portfolio"]
  },
  {
    id: 4,
    title: "Model Deployment and Real-World Applications",
    subtitle: "Learn how to deploy models and use LLMs in production for real-world tasks",
    duration: "Month 4",
    focus: "Model Deployment + APIs + Cloud Production",
    color: "from-purple-500 to-pink-600",
    gradient: "bg-gradient-to-br from-purple-50 to-pink-50",
    icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    videoUrl: "/a7.mp4",
    videoThumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    weeks: [
      {
        week: 1,
        title: "Introduction to Model Deployment",
        topics: [
          "Deploying ML models using Flask and FastAPI",
          "Cloud deployment: AWS, Google Cloud, Heroku",
          "Containerization with Docker"
        ],
        projects: [
          "Deploy an NLP model using Flask",
          "Docker containerization project"
        ],
        tools: ["Flask", "FastAPI", "Docker", "AWS", "Heroku"]
      },
      {
        week: 2,
        title: "APIs and Microservices for LLMs",
        topics: [
          "Creating APIs for LLMs using FastAPI",
          "Integrating models into microservices",
          "API documentation and testing"
        ],
        projects: [
          "Build an API for text classification model",
          "Microservices architecture design"
        ],
        tools: ["FastAPI", "Docker", "Kubernetes", "Postman"]
      },
      {
        week: 3,
        title: "Real-Life NLP Projects",
        topics: [
          "Working with real-world text data",
          "Industry-specific datasets and applications",
          "Document classification and text summarization"
        ],
        projects: [
          "Industry-specific NLP solution",
          "Real-time text processing system"
        ],
        tools: ["Apache Kafka", "Redis", "PostgreSQL", "MongoDB"]
      },
      {
        week: 4,
        title: "Performance Tuning and Scalability",
        topics: [
          "Scaling NLP applications for high performance",
          "Performance tuning for efficient inference",
          "Load balancing and monitoring"
        ],
        projects: [
          "Optimize deployed model for faster predictions",
          "Scalability testing and monitoring"
        ],
        tools: ["Nginx", "Prometheus", "Grafana", "New Relic"]
      }
    ],
    keySkills: ["Model Deployment", "API Development", "Cloud Computing", "Performance Optimization"],
    deliverables: ["Production API", "Deployed Application", "Performance Report"]
  },
  {
    id: 5,
    title: "Industrial Training and Real-Life Case Studies",
    subtitle: "Gain hands-on experience solving real-world problems with industry experts",
    duration: "Month 5",
    focus: "Industry Projects + Mentorship + Real-world Problem Solving",
    color: "from-red-500 to-orange-600",
    gradient: "bg-gradient-to-br from-red-50 to-orange-50",
    icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    videoUrl: "/a8.mp4",
    videoThumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    weeks: [
      {
        week: 1,
        title: "Industry Project Overview",
        topics: [
          "Introduction to industry project and problem statement",
          "Project planning and timeline management",
          "Collaborative work with mentors and experts"
        ],
        projects: [
          "Industry project planning",
          "Problem analysis and solution design"
        ],
        tools: ["Jira", "Confluence", "Slack", "Git"]
      },
      {
        week: 2,
        title: "Solving Real-Life Problems - Part 1",
        topics: [
          "Industry-specific problem solving with LLMs",
          "Customer support automation",
          "Content moderation systems"
        ],
        projects: [
          "Customer support automation system",
          "Content moderation pipeline"
        ],
        tools: ["Production LLM APIs", "Monitoring Tools", "A/B Testing"]
      },
      {
        week: 3,
        title: "Solving Real-Life Problems - Part 2",
        topics: [
          "Advanced optimization for industry use cases",
          "Model refinement and performance improvement",
          "Integration with existing systems"
        ],
        projects: [
          "System integration project",
          "Performance optimization implementation"
        ],
        tools: ["Enterprise APIs", "Database Systems", "Monitoring"]
      },
      {
        week: 4,
        title: "Project Review and Iteration",
        topics: [
          "Final review with industry experts",
          "Iterative feedback and improvements",
          "Professional portfolio preparation"
        ],
        projects: [
          "Project refinement and documentation",
          "Portfolio presentation preparation"
        ],
        tools: ["Documentation Tools", "Presentation Software", "GitHub"]
      }
    ],
    keySkills: ["Industry Problem Solving", "Project Management", "System Integration", "Professional Development"],
    deliverables: ["Industry Project", "Professional Portfolio", "Case Study Documentation"]
  },
  {
    id: 6,
    title: "Final Project and Certification",
    subtitle: "Complete the final project, showcase results, and receive certification",
    duration: "Month 6",
    focus: "Final Project + Presentation + Certification + Job Readiness",
    color: "from-pink-500 to-purple-600",
    gradient: "bg-gradient-to-br from-pink-50 to-purple-50",
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    videoUrl: "/A9.mp4",
    videoThumbnail: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop",
    weeks: [
      {
        week: 1,
        title: "Final Project Development - Part 1",
        topics: [
          "Apply all concepts to comprehensive NLP solution",
          "End-to-end LLM application development",
          "Regular checkpoints with mentors"
        ],
        projects: [
          "Final project planning and setup",
          "Core functionality implementation"
        ],
        tools: ["Full Stack Development", "Database Design", "API Development"]
      },
      {
        week: 2,
        title: "Final Project Development - Part 2",
        topics: [
          "Advanced features and optimization",
          "Testing and quality assurance",
          "Documentation and deployment"
        ],
        projects: [
          "Feature completion and testing",
          "Deployment and optimization"
        ],
        tools: ["Testing Frameworks", "CI/CD Tools", "Deployment Platforms"]
      },
      {
        week: 3,
        title: "Project Presentation",
        topics: [
          "Present to panel of industry experts",
          "Discuss impact, challenges, and solutions",
          "Receive feedback for improvements"
        ],
        projects: [
          "Final presentation preparation",
          "Project demonstration and defense"
        ],
        tools: ["Presentation Tools", "Demo Platforms", "Communication Skills"]
      },
      {
        week: 4,
        title: "Certification and Job Market Preparation",
        topics: [
          "Final evaluation and certification",
          "Networking with industry professionals",
          "Job market preparation and portfolio optimization"
        ],
        projects: [
          "Portfolio finalization",
          "Job application preparation"
        ],
        tools: ["LinkedIn", "Resume Tools", "Interview Prep", "Networking"]
      }
    ],
    keySkills: ["Full-Stack Development", "Project Management", "Presentation", "Job Readiness"],
    deliverables: ["Final Project", "Industry Certification", "Professional Portfolio", "Job-Ready Profile"]
  }
];

const outcomes = [
  { skill: "LLM Development", output: "Production-Ready Models", confidence: "Build and deploy LLM applications" },
  { skill: "Python Programming", output: "Advanced Python Portfolio", confidence: "Expert-level Python for AI/ML" },
  { skill: "Model Deployment", output: "Cloud-Based Applications", confidence: "Deploy models to production" },
  { skill: "NLP Applications", output: "Real-World Solutions", confidence: "Solve industry problems with NLP" },
  { skill: "API Development", output: "Scalable APIs", confidence: "Build production-grade APIs" },
  { skill: "Industry Experience", output: "Professional Portfolio", confidence: "Ready for AI/ML roles" }
];

const programIncludes = [
  { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, text: "200+ Hours of Hands-On Coding" },
  { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Weekly Mentorship Sessions" },
  { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Real Industry Datasets" },
  { icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Cloud Deployment Training" },
  { icon: <GitBranch className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Version Control & Collaboration" },
  { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Industry-Recognized Certification" }
];

const VideoPlayer: React.FC<{ 
  videoUrl: string; 
  thumbnail: string; 
  title: string;
}> = ({ videoUrl, thumbnail, title }) => {
  return (
    <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-52 xl:h-56 bg-gray-900 rounded-lg overflow-hidden group">
          <video 
            src={videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
        playsInline
          />
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-600 text-white px-2 py-1 rounded text-xs sm:text-sm font-medium animate-pulse">
            ● LIVE
          </div>
    </div>
  );
};

const PhaseCard: React.FC<{ 
  phase: Phase; 
  isExpanded: boolean; 
  onToggle: () => void;
}> = ({ phase, isExpanded, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 mb-4 sm:mb-6">
      <div className="p-3 sm:p-4 lg:p-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4 lg:gap-6">
          {/* Video Section */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 mb-3 lg:mb-0">
            <VideoPlayer 
              videoUrl={phase.videoUrl}
              thumbnail={phase.videoThumbnail}
              title={phase.title}
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 w-full min-w-0">
            {/* Phase Badge and Duration */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="px-2 sm:px-3 py-1 rounded-full text-white text-xs sm:text-sm font-semibold whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #06b6d4 100%)' }}>
                  Phase {phase.id}
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{phase.duration}</span>
                </div>
              </div>
              <button
                onClick={onToggle}
                className="flex items-center gap-2 transition-colors mt-2 sm:mt-0 text-xs sm:text-sm" 
                style={{ color: '#1d4ed8' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#06b6d4'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1d4ed8'}
              >
                {isExpanded ? (
                  <>
                    <span className="font-medium whitespace-nowrap">Hide Details</span>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </>
                ) : (
                  <>
                    <span className="font-medium whitespace-nowrap">Show Details</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </>
                )}
              </button>
            </div>

            {/* Title and Subtitle */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 leading-tight">{phase.title}</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 leading-relaxed">{phase.subtitle}</p>
            
            {/* Focus */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 mb-4">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">Focus:</span> 
                <span className="ml-1">{phase.focus}</span>
              </div>
            </div>

            {/* Key Skills Preview */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {phase.keySkills.slice(0, 3).map((skill, i) => (
                <span key={i} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full whitespace-nowrap border" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#1d4ed8', borderColor: 'rgba(6, 182, 212, 0.3)' }}>
                  {skill}
                </span>
              ))}
              {phase.keySkills.length > 3 && (
                <span className="px-2 sm:px-3 py-1 bg-gray-50 text-xs sm:text-sm rounded-full text-gray-600 border border-gray-200 whitespace-nowrap">
                  +{phase.keySkills.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 space-y-6 sm:space-y-8 animate-in slide-in-from-top duration-300">
            {/* Weekly Breakdown */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                📅 Weekly Breakdown:
              </h4>
              <div className="space-y-4 sm:space-y-6">
                {phase.weeks.map((week, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                    <h5 className="font-medium text-gray-800 mb-3 text-sm sm:text-base">Week {week.week}: {week.title}</h5>
                    
                    {/* Topics */}
                    <div className="mb-3 sm:mb-4">
                      <h6 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Topics:</h6>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                        {week.topics.map((topic, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 mt-1 text-gray-400 flex-shrink-0" />
                            <span className="leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div className="mb-3 sm:mb-4">
                      <h6 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Projects:</h6>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                        {week.projects.map((project, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <Code className="w-2 h-2 sm:w-3 sm:h-3 mt-1 flex-shrink-0" style={{ color: '#1d4ed8' }} />
                            <span className="leading-relaxed">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h6 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Tools:</h6>
                      <div className="flex flex-wrap gap-1">
                        {week.tools.map((tool, j) => (
                          <span key={j} className="px-2 py-1 text-xs rounded-full whitespace-nowrap border" style={{ backgroundColor: '#f8fafc', color: '#64748b', borderColor: '#e2e8f0' }}>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                🎯 Key Skills:
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {phase.keySkills.map((skill, i) => (
                  <span key={i} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full whitespace-nowrap border" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#1d4ed8', borderColor: 'rgba(6, 182, 212, 0.3)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                📋 Deliverables:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                {phase.deliverables.map((deliverable, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Trophy className="w-2 h-2 sm:w-3 sm:h-3 mt-1 flex-shrink-0" style={{ color: '#1d4ed8' }} />
                    <span className="leading-relaxed">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const LLMBootcamp: React.FC = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const togglePhase = (phaseId: number) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  const toggleVideo = (phaseId: number) => {
    setPlayingVideo(playingVideo === phaseId ? null : phaseId);
  };

  return (
    <div className="min-h-screen w-full" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 25%, #2563eb 50%, #3b82f6 75%, #06b6d4 100%)' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 xl:py-20">
          <div className="text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
              Master LLMs & AI: Complete 6-Month Bootcamp
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-2 leading-relaxed">
              From Python fundamentals to production-ready LLM applications. Industry-focused curriculum with real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-8 text-sm sm:text-base lg:text-lg px-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">6 Months</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">200+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">Industry Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Cards */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
        <div className="space-y-4 sm:space-y-6">
          {phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              isExpanded={expandedPhase === phase.id}
              onToggle={() => togglePhase(phase.id)}
            />
          ))}
        </div>
      </div>

      {/* Outcomes Section */}
      <div className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12 px-2">
            🎓 Career Outcomes After 6 Months
          </h2>
          <div className="overflow-x-auto -mx-3 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <table className="w-full bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mx-3 sm:mx-0" style={{ minWidth: '600px' }}>
                <thead className="text-white" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #06b6d4 100%)' }}>
                  <tr>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">💼 Skill Domain</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">📁 Portfolio Output</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">🧑‍💻 Job Readiness</th>
                  </tr>
                </thead>
                <tbody>
                  {outcomes.map((outcome, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-medium text-gray-800 text-sm sm:text-base">{outcome.skill}</td>
                      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{outcome.output}</td>
                      <td className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{outcome.confidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Program Includes */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12 px-2">
            🧾 What's Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {programIncludes.map((item, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg text-white flex-shrink-0" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #06b6d4 100%)' }}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-800 text-sm sm:text-base leading-relaxed">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6">
        <div className="w-full text-center text-white max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 leading-tight">Ready to Become an LLM Expert?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 px-2 leading-relaxed">
            Join the next generation of AI professionals with comprehensive LLM mastery
          </p>
          <button 
            className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 mx-2"
            style={{ color: '#1d4ed8' }}
          >
            Start Your LLM Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default LLMBootcamp;