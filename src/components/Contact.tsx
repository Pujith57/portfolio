import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Let's Connect
        </h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just connecting with fellow developers.
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email</h3>
                <p className="text-slate-400 text-sm">Drop me a message</p>
              </div>
            </div>
            <p className="text-blue-400 font-medium">{personalInfo.email}</p>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Phone</h3>
                <p className="text-slate-400 text-sm">Give me a call</p>
              </div>
            </div>
            <p className="text-blue-400 font-medium">{personalInfo.phone}</p>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">GitHub</h3>
                <p className="text-slate-400 text-sm">Check out my code</p>
              </div>
            </div>
            <p className="text-blue-400 font-medium">github.com/Pujith57</p>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                <p className="text-slate-400 text-sm">Let's connect</p>
              </div>
            </div>
            <p className="text-blue-400 font-medium">www.linkedin.com/in/kotha-pujith-a109471b6</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            <Send className="w-5 h-5" />
            <span>Send a Message</span>
          </a>
        </div>
      </div>
    </section>
  );
}
