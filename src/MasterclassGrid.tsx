import React, { useState } from 'react';
import { X, Star, Trophy, Zap, Users, BookOpen, Award, DollarSign, MapPin, GraduationCap, FileText, Mail, FileQuestion, Bot, LayoutDashboard, Rocket, CheckCircle, Factory, BrainCircuit } from 'lucide-react';

const gridItems = [
  {
    id: 'training',
    title: '3 Months of Expert-Led Training',
    icon: <BrainCircuit className="w-10 h-10 text-indigo-400" />,
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
    icon: <Factory className="w-10 h-10 text-pink-400" />,
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
  { icon: <FileText className="mx-auto w-10 h-10 mb-3 text-indigo-300" />, label: 'Resume Analyzers' },
  { icon: <Mail className="mx-auto w-10 h-10 mb-3 text-indigo-300" />, label: 'AI Email Assistants' },
  { icon: <FileQuestion className="mx-auto w-10 h-10 mb-3 text-indigo-300" />, label: 'PDF Q&A Bots' },
  { icon: <Bot className="mx-auto w-10 h-10 mb-3 text-indigo-300" />, label: 'Personal ChatGPTs' },
  { icon: <LayoutDashboard className="mx-auto w-10 h-10 mb-3 text-indigo-300" />, label: 'LLM Dashboards' },
];

const otherBenefits = [
  {
    icon: <MapPin className="w-10 h-10 mb-4 text-pink-400" />,
    title: 'Choose Your Learning Mode',
    description: 'Learn your way. Both modes offer the same curriculum and outcomes. Available Online (live sessions) or Offline at select centers (Mohali, Delhi).',
  },
  {
    icon: <GraduationCap className="w-10 h-10 mb-4 text-pink-400" />,
    title: 'Scholarships for Top Performers',
    description: 'We support bright minds. Ace our entry exam and get up to 100% scholarship to fund your learning journey.',
  },
  {
    icon: <Trophy className="w-10 h-10 mb-4 text-pink-400" />,
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
      <section className="mb-20 md:mb-32">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">A Program Designed for Mastery</h3>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {gridItems.map((item) => (
            <div key={item.id} className="glass-card p-8 rounded-2xl flex flex-col h-full shadow-lg">
              <div className="flex items-center mb-4">
                {item.icon}
                <h4 className="text-2xl font-bold ml-4 text-black">{item.title}</h4>
              </div>
              <p className="mb-6 text-black">{item.description}</p>
              <ul className="space-y-3 flex-1">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-400 shrink-0" />
                    <span className="text-black">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hands-On Projects */}
      <section className="mb-20 md:mb-32">
        <div className="border-l-4 border-pink-500 pl-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-black">Build a Powerful Project Portfolio</h3>
          <p className="mt-2 text-black">You won't just learn, you'll build. Here are some of the projects you'll create.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-center place-items-center">
          {projectPortfolio.map((p, i) => (
            <div key={i} className="glass-card p-6 rounded-xl hover:bg-white/10 transition flex flex-col items-center w-full h-full min-w-[140px]">
              {p.icon}
              <span className="font-semibold text-black mt-2">{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Funding Opportunity */}
      <section className="mb-20 md:mb-32 flex justify-center">
        <div className="relative bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 border-4 border-blue-400 p-10 md:p-14 rounded-3xl text-center shadow-2xl max-w-3xl w-full flex flex-col items-center overflow-hidden animate-pulse-slow">
          {/* Glowing animated border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-blue-400 animate-glow z-0" style={{boxShadow: '0 0 40px 10px #60a5fa, 0 0 80px 20px #2563eb'}}></div>
          <div className="relative z-10 flex flex-col items-center">
            <Rocket className="mx-auto w-20 h-20 mb-6 text-blue-500 drop-shadow-lg" />
            <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-black drop-shadow">Got an AI Idea? <span className="text-blue-600">We'll Fund It!</span></h3>
            <p className="max-w-2xl mx-auto mb-10 text-black text-lg font-medium">
              This is more than a course; it's an Mentorship Program. Submit your unique AI project proposal. If it's shortlisted, DamnArt will provide full funding, mentorship, and resources to help you build your own AI tool or startup.
            </p>
            <button
              type="button"
              onClick={() => setShowEnrollModal(true)}
              className="bg-white text-blue-600 font-extrabold py-4 px-12 rounded-full text-xl border-2 border-blue-500 shadow-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 focus:ring-4 focus:ring-blue-300 outline-none"
            >
              Submit Your Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Other Benefits */}
      <section className="mb-20 md:mb-32">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">More Than Just a Class</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherBenefits.map((b, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center h-full shadow-md">
              {b.icon}
              <h4 className="text-xl font-bold mb-2 text-black mt-2">{b.title}</h4>
              <p className="text-black text-base">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get Summary */}
      <section className="mb-20 md:mb-32">
        <div className="border-l-4 border-pink-500 pl-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-black">Everything Included</h3>
          <p className="mt-2 text-black">A complete package to launch your AI career.</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {summaryItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-400 text-blue-800 font-semibold shadow-sm text-base">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              {item}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
};

export default MasterclassGrid; 