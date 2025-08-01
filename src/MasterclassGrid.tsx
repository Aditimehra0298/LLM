import React from 'react';
import { Trophy, MapPin, GraduationCap, FileText, Mail, FileQuestion, Bot, LayoutDashboard, Rocket, CheckCircle, Factory, BrainCircuit } from 'lucide-react';

const gridItems = [
  {
    id: 'training',
    title: '3 Months of Expert-Led Training',
    icon: <BrainCircuit className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400" />,
    description: 'Build a rock-solid foundation with an industry-ready curriculum covering everything from fundamentals to ethics.',
    features: [
      { label: 'LLM Fundamentals: GPT, Claude, Gemini, Mistral & more.' },
      { label: 'Prompt Engineering: Context handling, few-shot, CoT, RAG.' },
      { label: 'API Integration: OpenAI, Anthropic, Hugging Face.' },
      { label: 'No-Code & Low-Code: LangChain, Flowise, Pika, Zapier.' },
      { label: 'Ethics & Safety in AI: Responsible usage and deployment.' },
    ],
  },
  {
    id: 'industrial',
    title: '3 Months of Industrial Project',
    icon: <Factory className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" />,
    description: 'Transition from student to professional. Apply your skills to a live industry project, mentored by experts.',
    features: [
      { label: 'Work on real datasets and solve practical problems.' },
      { label: 'Add a powerful capstone project to your AI portfolio.' },
      { label: 'Earn a Certificate & Letter of Recommendation (LOR).' },
      { label: 'Gain invaluable experience in a professional environment.' },
    ],
  },
];

const projectPortfolio = [
  { icon: <FileText className="mx-auto w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-indigo-300" />, label: 'Resume Analyzers' },
  { icon: <Mail className="mx-auto w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-indigo-300" />, label: 'AI Email Assistants' },
  { icon: <FileQuestion className="mx-auto w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-indigo-300" />, label: 'PDF Q&A Bots' },
  { icon: <Bot className="mx-auto w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-indigo-300" />, label: 'Personal ChatGPTs' },
  { icon: <LayoutDashboard className="mx-auto w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-indigo-300" />, label: 'LLM Dashboards' },
];

const otherBenefits = [
  {
    icon: <MapPin className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-pink-400" />,
    title: 'Choose Your Learning Mode',
    description: 'Learn your way. Both modes offer the same curriculum and outcomes. Available Online (live sessions) or Offline at select centers (Mohali, Delhi).',
  },
  {
    icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-pink-400" />,
    title: 'Scholarships for Top Performers',
    description: 'We support bright minds. Ace our entry exam and get up to 100% scholarship to fund your learning journey.',
  },
  {
    icon: <Trophy className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 text-pink-400" />,
    title: 'Monthly Contests & Rewards',
    description: 'Compete in AI hackathons and challenges. Winners receive cash prizes up to ₹10,000, badges, and a spot in our Hall of Fame.',
  },
];

const summaryItems = [
  '3 Months of Live Training',
  'LLM Project Portfolio',
  '3 Months Industrial Project',
  'Project Funding Opportunity',
  'Certificate + LOR',
  'Scholarship Test',
  'Monthly Contests (₹10k Prize)',
  'Online or Offline Mode',
  'Lifetime Community Access',
];

interface MasterclassGridProps {
  setShowEnrollModal: (show: boolean) => void;
}

const MasterclassGrid: React.FC<MasterclassGridProps> = ({ setShowEnrollModal }) => {
  return (
    <section className="w-full">
      {/* Program Structure Grid */}
      <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-black px-3 sm:px-4">A Program Designed for Mastery</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* First Card */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col h-full shadow-lg w-full md:w-auto md:flex-1">
            <div className="flex items-center mb-3 sm:mb-4">
              {gridItems[0].icon}
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold ml-2 sm:ml-3 md:ml-4 text-black">{gridItems[0].title}</h4>
            </div>
            <p className="mb-4 sm:mb-6 text-black text-sm sm:text-base">{gridItems[0].description}</p>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 flex-1">
              {gridItems[0].features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-green-400 shrink-0" />
                  <span className="text-black text-xs sm:text-sm md:text-base">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus Symbol */}
          <div className="hidden md:flex items-center justify-center">
            <div className="bg-blue-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg">
              +
            </div>
          </div>

          {/* Second Card */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col h-full shadow-lg w-full md:w-auto md:flex-1">
            <div className="flex items-center mb-3 sm:mb-4">
              {gridItems[1].icon}
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold ml-2 sm:ml-3 md:ml-4 text-black">{gridItems[1].title}</h4>
            </div>
            <p className="mb-4 sm:mb-6 text-black text-sm sm:text-base">{gridItems[1].description}</p>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 flex-1">
              {gridItems[1].features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-green-400 shrink-0" />
                  <span className="text-black text-xs sm:text-sm md:text-base">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Project Portfolio Section */}
      <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-black px-3 sm:px-4">Build Your LLM Portfolio</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {projectPortfolio.map((item, index) => (
            <div key={index} className="text-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              {item.icon}
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Benefits Section */}
      <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-black px-3 sm:px-4">Additional Benefits</h3>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {otherBenefits.map((benefit, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {benefit.icon}
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{benefit.title}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Section */}
      <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-32">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white/10 rounded-full -mr-12 sm:-mr-16 md:-mr-20 -mt-12 sm:-mt-16 md:-mt-20"></div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">Program Summary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {summaryItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 sm:p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-300 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6 sm:mt-8 md:mt-10">
              <button
                onClick={() => setShowEnrollModal(true)}
                className="bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Enroll Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MasterclassGrid; 