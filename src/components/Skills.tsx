import { Terminal, Cloud, GitBranch, Database, Activity, Shield } from 'lucide-react';
import { skills } from '../data/portfolio';

const icons = {
  'Languages & Frameworks': Terminal,
  'Cloud & Infrastructure': Cloud,
  'CI/CD & DevOps': GitBranch,
  'Data & Messaging': Database,
  'Observability': Activity,
  'Security & Compliance': Shield,
};

export default function Skills() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Technical Expertise
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, techs], index) => {
            const Icon = icons[category as keyof typeof icons];
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white text-slate-700 text-sm rounded-lg font-medium border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
