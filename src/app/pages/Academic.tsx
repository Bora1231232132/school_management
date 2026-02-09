import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Book, Microscope, Library, Trophy, GraduationCap, ChevronRight, Binary, Globe } from 'lucide-react';

export function Academic() {
  return (
    <div className="pt-24 flex flex-col">
      {/* Header */}
      <section className="bg-[#182B70] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Academic Excellence
          </motion.h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            A rigorous and balanced curriculum designed to challenge the intellect and prepare students for global success.
          </p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group p-10 bg-gray-50 rounded-3xl border border-transparent hover:border-[#182B70]/20 transition-all">
            <div className="w-14 h-14 bg-[#182B70] rounded-xl flex items-center justify-center mb-8">
              <Globe className="text-white" size={28} />
            </div>
            <h3 className="text-[#182B70] text-2xl font-bold mb-4">National Curriculum</h3>
            <p className="text-gray-600 mb-6">
              Full compliance with the Ministry of Education, Youth and Sport (MoEYS) standards, enhanced with advanced depth and critical analysis.
            </p>
            <ul className="space-y-3">
              {['Advanced Khmer Literature', 'Intensive Mathematics', 'Physics & Chemistry', 'Civic Education'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#182B70]">
                  <ChevronRight size={16} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="group p-10 bg-gray-50 rounded-3xl border border-transparent hover:border-[#182B70]/20 transition-all">
            <div className="w-14 h-14 bg-[#182B70] rounded-xl flex items-center justify-center mb-8">
              <Binary className="text-white" size={28} />
            </div>
            <h3 className="text-[#182B70] text-2xl font-bold mb-4">International Curriculum</h3>
            <p className="text-gray-600 mb-6">
              Our IGCSE and A-Level pathways provide students with globally recognized qualifications for university entry worldwide.
            </p>
            <ul className="space-y-3">
              {['Cambridge International IGCSE', 'AS & A Level Programs', 'Advanced English Program', 'STEM Innovation Track'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#182B70]">
                  <ChevronRight size={16} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career Readiness Pathway */}
      <section className="py-24 px-6 bg-[#182B70] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">College & Career Readiness</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From your first day to your future career, we provide the pathway to success.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-4">
          {/* Pathway Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { year: 'Year 1-2', title: 'Foundations', desc: 'Developing core academic skills and discovering passions.', icon: Book },
              { year: 'Year 3-4', title: 'Specialization', desc: 'Deep diving into STEM or Humanities tracks with IGCSE.', icon: Microscope },
              { year: 'Year 5-6', title: 'Pre-University', desc: 'A-Level excellence and university application preparation.', icon: Library },
              { year: 'Future', title: 'Global Leader', desc: 'Thriving in top universities and STEM careers worldwide.', icon: GraduationCap },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center group hover:bg-white hover:text-[#182B70] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white text-[#182B70] rounded-full flex items-center justify-center mb-6 font-bold group-hover:bg-[#182B70] group-hover:text-white transition-colors">
                  <step.icon size={24} />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">{step.year}</div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#182B70] text-4xl font-bold mb-4">Modern Facilities</h2>
              <p className="text-gray-500 text-lg">World-class spaces designed for inspired learning.</p>
            </div>
            <button className="bg-[#182B70] text-white px-8 py-3 rounded-full font-bold">Virtual Campus Tour</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHNjaG9vbHxlbnwxfHx8fDE3NzAzNjUwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Science Lab"
                className="rounded-2xl aspect-[4/3] object-cover w-full shadow-lg"
              />
              <h4 className="text-[#182B70] font-bold text-xl">Advanced STEM Labs</h4>
              <p className="text-gray-500 text-sm">Fully equipped physics, chemistry, and biology laboratories for hands-on experimentation.</p>
            </div>
            <div className="space-y-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGluJTIwbW9kZXJuJTIwbGlicmFyeXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Library"
                className="rounded-2xl aspect-[4/3] object-cover w-full shadow-lg"
              />
              <h4 className="text-[#182B70] font-bold text-xl">Digital Knowledge Hub</h4>
              <p className="text-gray-500 text-sm">A modern library with vast digital resources and quiet study zones.</p>
            </div>
            <div className="space-y-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563299967-5208dc3f5d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBiYXNrZXRiYWxsJTIwY291cnQlMjBjYW1wdXN8ZW58MXx8fHwxNzcwMzY1MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sports"
                className="rounded-2xl aspect-[4/3] object-cover w-full shadow-lg"
              />
              <h4 className="text-[#182B70] font-bold text-xl">Elite Sports Facilities</h4>
              <p className="text-gray-500 text-sm">Indoor courts, football fields, and fitness centers to promote physical well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
           <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <h2 className="text-[#182B70] text-3xl font-bold">Academic Calendar 2026</h2>
              <button className="bg-[#182B70] text-white px-8 py-3 rounded-xl font-bold text-sm">Download PDF (2.4MB)</button>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="border-b-2 border-gray-100">
                   <th className="pb-6 font-bold text-[#182B70]">Term</th>
                   <th className="pb-6 font-bold text-[#182B70]">Start Date</th>
                   <th className="pb-6 font-bold text-[#182B70]">End Date</th>
                   <th className="pb-6 font-bold text-[#182B70]">Events</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 {[
                   { term: 'Term 1', start: 'Sept 1, 2025', end: 'Dec 15, 2025', event: 'New Student Orientation' },
                   { term: 'Term 2', start: 'Jan 5, 2026', end: 'Mar 25, 2026', event: 'Annual STEM Week' },
                   { term: 'Term 3', start: 'Apr 10, 2026', end: 'Jun 30, 2026', event: 'Graduation Ceremony' },
                 ].map((row, i) => (
                   <tr key={i} className="group">
                     <td className="py-6 font-bold text-[#182B70]">{row.term}</td>
                     <td className="py-6 text-gray-600">{row.start}</td>
                     <td className="py-6 text-gray-600">{row.end}</td>
                     <td className="py-6 font-medium text-gray-600">{row.event}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </section>
    </div>
  );
}
