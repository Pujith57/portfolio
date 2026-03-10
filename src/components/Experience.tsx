import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 pb-12 border-l-2 border-blue-200 last:pb-0 group"
            >
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-blue-600 rounded-full border-4 border-white group-hover:scale-125 transition-transform"></div>

              <div className="bg-slate-50 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-slate-600">
                    <span className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
