import React, { useState } from 'react';
import { Database, Code, Brain, Award, ChevronDown, ChevronUp, CheckCircle2, Linkedin } from 'lucide-react';
import NeoButton from './NeoButton';

const CERTIFICATIONS = [
  { name: "Data Analyst", issuer: "DataCamp", date: "Nov 2024", id: "DA0026898841108", skills: "Data Analysis · Python · Data Visualization" },
  { name: "Machine Learning on Google Cloud", issuer: "Google Cloud Skills Boost", date: "Oct 2024", id: "BXNAJHFYYSFF", skills: "GCP · Machine Learning · TensorFlow" },
  { name: "SQL for Data Science", issuer: "University of California, Davis", date: "Oct 2024", id: "6OH123KZZ050", skills: "SQL · Data Cleaning · Relational Databases" },
  { name: "Tableau Business Intelligence Analyst", issuer: "Tableau", date: "Oct 2024", id: "TYNS4966YM0O", skills: "Tableau · Data Reporting · Business Intelligence" },
  { name: "Big Data Modeling and Management Systems", issuer: "UC San Diego", date: "Sep 2024", id: "BMG6YXMVL94Z", skills: "Data Pipelines · Big Data · NoSQL" },
  { name: "Data Modeling in Power BI", issuer: "Microsoft", date: "Sep 2024", id: "NAMIN81Q4SK2", skills: "Power BI · Data Modeling · DAX" },
  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", date: "Sep 2024", id: "ZN9LWI1R7W67", skills: "Deep Learning · Neural Networks · TensorFlow" },
  { name: "Fintech: Foundations & Applications", issuer: "Wharton Online", date: "Sep 2024", id: "SJXLIXYK19PU", skills: "FinTech · Algorithms · Risk Management" },
  { name: "Google Cybersecurity", issuer: "Google", date: "Sep 2024", id: "DA2A6OC2GH29", skills: "Cybersecurity · Python · GCP" },
  { name: "Google Data Analytics", issuer: "Google", date: "Sep 2024", id: "XZ14KMZY3DZF", skills: "Data Analytics · R · SQL · Visualization" },
  { name: "Google IT Automation with Python", issuer: "Google", date: "Sep 2024", id: "Y0YZATB4JRUX", skills: "Python · Automation · Git" },
  { name: "Google Project Management", issuer: "Google", date: "Sep 2024", id: "KDJI8RMWJZAK", skills: "Project Management · Agile · Scrum" },
  { name: "IBM AI Engineering", issuer: "IBM", date: "Sep 2024", id: "MWMJXL4HIGYH", skills: "AI · Deep Learning · Computer Vision" },
  { name: "IBM Data Engineering", issuer: "IBM", date: "Sep 2024", id: "2TYYOU006CPB", skills: "ETL · Data Warehousing · DB Administration" },
  { name: "IBM Data Science", issuer: "IBM", date: "Sep 2024", id: "SU2ARW62A9YS", skills: "Data Science · Machine Learning · Python" },
  { name: "Machine Learning Specialization", issuer: "Stanford Online", date: "Sep 2024", id: "CXP9V2FKVRO2", skills: "Supervised Learning · Unsupervised Learning · AI" },
  { name: "Meta Back-End Developer", issuer: "Meta", date: "Sep 2024", id: "6L1VFZZ48P85", skills: "Back-End Dev · Django · APIs" },
  { name: "Statistics with Python", issuer: "University of Michigan", date: "Sep 2024", id: "E5CPU1V98FDI", skills: "Statistics · Python · Modeling" },
  { name: "Anaconda Python For Data Science", issuer: "Anaconda, Inc.", date: "Aug 2024", id: "bded8ef7beef...", skills: "Python · Pandas · NumPy" },
  { name: "Data Analysis by Microsoft and LinkedIn", issuer: "Microsoft", date: "Aug 2024", id: "f06447a745...", skills: "Data Analysis · Excel · Power BI" },
];

const About: React.FC = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? CERTIFICATIONS : CERTIFICATIONS.slice(0, 6);

  const skills = [
    "Python", "SQL", "Tableau", "Power BI",
    "Data Wrangling", "EDA", "Machine Learning",
    "Scikit-Learn", "TensorFlow", "PyTorch"
  ];

  return (
    <section id="about" className="py-20 bg-brand-gray border-y-2 border-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-3">
              <span className="bg-brand-dark text-white px-2 rounded transform -rotate-2 inline-block">About</span>
              <span className="text-brand-dark">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-brand-dark leading-relaxed font-medium">
              <p>
                I'm a Data-Driven Professional with a multidisciplinary background in Data Analytics, Data Entry, and Data Science, currently expanding my expertise into Machine Learning and Deep Learning.
              </p>
              <p>
                With 3 years of Hands-on experience as a Data Analyst, I have developed strong skills in Data Wrangling, Exploratory Data Analysis, and Business Intelligence using tools like Python, SQL, Tableau, and Power BI. My analytical mindset and attention to detail allow me to uncover patterns, trends, and actionable insights that support smarter business decisions.
              </p>
              <p>
                I am also actively building Machine Learning models through personal and freelance projects, continuously improving my skills in model experimentation, evaluation, and deployment using tools like Scikit-Learn, TensorFlow, and PyTorch.
              </p>
              <p>
                Passionate about solving problems through data, I am committed to lifelong learning, staying up to date with the latest trends in Analytics, Machine Learning, and AI. I aim to contribute to forward-thinking teams and organizations by delivering high-impact solutions powered by data and innovation.
              </p>
              
              <div className="pt-2">
                 <a 
                    href="https://www.linkedin.com/in/ikhsankamal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-brand-blue hover:text-white transition-all border-2 border-brand-dark hover:shadow-neo"
                 >
                    <Linkedin size={20} />
                    Connect on LinkedIn
                 </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider border-b-2 border-brand-dark inline-block">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white border-2 border-brand-dark rounded-lg shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] font-bold text-sm hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative / Visual Side */}
          <div className="w-full lg:w-1/3 relative hidden lg:block">
            <div className="sticky top-32">
               <div className="bg-brand-blue border-2 border-brand-dark rounded-[2rem] p-8 shadow-neo rotate-2">
                  <div className="aspect-square bg-brand-dark rounded-xl flex items-center justify-center overflow-hidden relative group">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(96,165,250,0.4),transparent)]"></div>
                      <Brain className="text-blue-400 w-32 h-32 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="mt-6 text-center space-y-2 text-white">
                      <div className="font-bold text-2xl">Data Scientist</div>
                      <div className="text-sm font-medium opacity-80 flex items-center justify-center gap-2">
                        <Code size={16} />
                        <span>Analyst & Developer</span>
                      </div>
                  </div>
               </div>
               
               {/* Abstract floating elements */}
               <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full border-2 border-brand-dark rounded-[2rem] bg-white"></div>
            </div>
          </div>

        </div>

        {/* Licenses & Certifications Section */}
        <div className="pt-10 border-t-2 border-brand-dark border-dashed">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
             <h3 className="text-3xl font-bold flex items-center gap-3">
                <div className="bg-brand-blue p-2 rounded-lg border-2 border-brand-dark">
                   <Award className="w-6 h-6 text-white" />
                </div>
                <span>Licenses & Certifications</span>
             </h3>
             <span className="text-sm font-bold bg-brand-dark text-white px-3 py-1 rounded-full">
                {CERTIFICATIONS.length} Total
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCerts.map((cert, index) => (
              <div key={index} className="group bg-white border-2 border-brand-dark rounded-xl p-6 shadow-[4px_4px_0px_0px_rgba(25,26,35,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(25,26,35,1)] transition-all flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-brand-gray rounded-full flex items-center justify-center border-2 border-brand-dark shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-dark opacity-50" />
                  </div>
                  <span className="text-xs font-bold bg-blue-100 text-brand-blue px-2 py-1 rounded border border-brand-blue/20">
                    {cert.date}
                  </span>
                </div>
                
                <h4 className="font-bold text-lg mb-1 leading-tight group-hover:text-brand-blue transition-colors">{cert.name}</h4>
                <p className="text-sm font-medium text-gray-600 mb-4">{cert.issuer}</p>
                
                <div className="mt-auto pt-4 border-t border-dashed border-gray-300 space-y-2">
                   <div className="text-xs text-gray-500 font-mono truncate" title={cert.id}>
                      ID: {cert.id}
                   </div>
                   <div className="flex flex-wrap gap-1">
                      {cert.skills.split('·').slice(0, 3).map((s, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold text-brand-dark bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">
                          {s.trim()}
                        </span>
                      ))}
                      {cert.skills.split('·').length > 3 && (
                        <span className="text-[10px] text-gray-400 px-1.5 py-0.5">+more</span>
                      )}
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
             <button 
               onClick={() => setShowAllCerts(!showAllCerts)}
               className="group flex items-center gap-2 px-8 py-3 bg-white border-2 border-brand-dark rounded-full font-bold hover:bg-brand-dark hover:text-white transition-all shadow-neo"
             >
                {showAllCerts ? (
                  <>Show Less <ChevronUp size={20} /></>
                ) : (
                  <>Show All Certifications <ChevronDown size={20} /></>
                )}
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;