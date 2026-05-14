import { Code2, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 flex flex-col relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors">
                    <Code2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {'category' in project && project.category ? (
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-semibold">
                          {project.category}
                        </span>
                      ) : null}
                      {'status' in project && project.status ? (
                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-semibold">
                          {project.status}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 flex-grow">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              {'link' in project && project.link && !project.link.startsWith('#') ? (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
