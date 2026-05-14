import { Images } from 'lucide-react';
import { projectGlance } from '../data/portfolio';

export default function ProjectGlance() {
  return (
    <section id="project-glance" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-semibold text-sm mb-4">
            <Images className="w-4 h-4" />
            Project Glance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Screenshots from live builds and analysis work
          </h2>
          <p className="text-slate-600 leading-relaxed">
            A quick visual pass through the AI agent, automation workflows, and machine learning analysis outputs behind the project cards.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projectGlance.map((project) => (
            <div key={project.title}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
                <div>
                  <span className="inline-flex px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                </div>
                <p className="text-slate-600 max-w-2xl leading-relaxed">{project.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-72 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
