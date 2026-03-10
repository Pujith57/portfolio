import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              {personalInfo.summary}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-300">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <MapPin className="w-5 h-5" />
              <span>{personalInfo.location}</span>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105 border border-slate-700 hover:border-blue-500"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
