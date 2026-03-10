import { GraduationCap, Award, MapPin } from 'lucide-react';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Education & Certifications
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-blue-600" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all border border-slate-200"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        {edu.school}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                      <div className="flex items-center gap-1 text-slate-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {edu.coursework && (
                    <div>
                      <p className="text-sm font-semibold text-slate-700 mb-2">
                        Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
              <Award className="w-7 h-7 text-blue-600" />
              Certifications
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border border-slate-200 hover:border-blue-300 flex items-start gap-3"
                >
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
