import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronDown, CheckCircle2, FileText, Calendar, Users, GraduationCap, ArrowRight } from 'lucide-react';

const faqData = [
  { q: "What are the criteria for the 100% scholarship?", a: "The 100% scholarship is awarded based on academic merit (top 5% in entrance exam), socioeconomic background, and leadership potential. We prioritize talented students from underprivileged backgrounds." },
  { q: "How do I apply for admission?", a: "Applications can be submitted online through our portal or in person at our campus. You'll need to provide academic transcripts, a personal statement, and letters of recommendation." },
  { q: "Is there an entrance exam?", a: "Yes, all prospective students must take our comprehensive entrance exam which tests Mathematics, English, and Logic/Aptitude." },
  { q: "Can parents visit the campus before applying?", a: "Absolutely! We hold Open House events every month. You can also schedule a private tour with our admissions team." },
];

export function Admission() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            Admissions
          </motion.h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Join a community of excellence. Discover your potential at Chea Chanto College.
          </p>
        </div>
      </section>

      {/* Why Chea Chanto? */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-[#182B70] text-4xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We provide more than just an education; we provide a platform for life. Our graduates are equipped with the skills, confidence, and values to thrive in a rapidly changing world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Global Standards', desc: 'Cambridge International & MoEYS curricula.' },
                { title: 'Full Scholarships', desc: '100% coverage for talented students.' },
                { title: 'STEM Focused', desc: 'Cutting-edge labs and technology.' },
                { title: 'Holistic Growth', desc: 'Arts, sports, and leadership programs.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0">
                    <CheckCircle2 className="text-[#182B70]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#182B70] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1747947901869-8a09ca01f4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBsYXVnaGluZyUyMGluJTIwaGFsbHdheXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#182B70] text-4xl font-bold mb-4">Application Journey</h2>
            <p className="text-gray-500 text-lg">Four simple steps to joining our college.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#182B70]/10 -translate-y-1/2 hidden md:block" />
            {[
              { step: 1, title: 'Inquiry', desc: 'Connect with us via our website or campus visit.', icon: Users },
              { step: 2, title: 'Application', desc: 'Submit your online form and required documents.', icon: FileText },
              { step: 3, title: 'Assessment', desc: 'Attend the entrance exam and personal interview.', icon: Calendar },
              { step: 4, title: 'Enrollment', desc: 'Accept your offer and join the orientation.', icon: GraduationCap },
            ].map((item, idx) => (
              <div key={item.title} className="relative z-10 bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#182B70] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                  <item.icon size={24} />
                </div>
                <div className="text-[#182B70]/50 font-bold mb-2 uppercase tracking-widest text-xs">Step {item.step}</div>
                <h4 className="text-xl font-bold text-[#182B70] mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGluJTIwbW9kZXJuJTIwbGlicmFyeXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Scholarship student"
                className="rounded-3xl shadow-2xl w-full aspect-video object-cover"
              />
              <div className="absolute top-10 -left-10 bg-[#182B70] text-white p-10 rounded-3xl shadow-2xl">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="font-medium uppercase tracking-widest text-sm opacity-80">Full Scholarships Available</div>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2 space-y-8">
            <h2 className="text-[#182B70] text-4xl font-bold leading-tight">We Believe in Talent, Regardless of Background</h2>
            <p className="text-gray-600 text-lg">
              Chea Chanto College provides 100% scholarships to underprivileged students who show exceptional academic talent and leadership potential. This covers tuition, books, and uniforms.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#182B70]" />
                <span className="font-bold text-[#182B70]">Academic Excellence Criteria</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#182B70]" />
                <span className="font-bold text-[#182B70]">Socioeconomic Support Documentation</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-[#182B70]" />
                <span className="font-bold text-[#182B70]">Community Leadership Proof</span>
              </div>
            </div>
            <button className="bg-[#182B70] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-900 transition-all flex items-center gap-2">
              Apply for Scholarship <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#182B70] text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#182B70] text-lg">{item.q}</span>
                  <ChevronDown className={cn("transition-transform duration-300 text-[#182B70]", openFaq === i && "rotate-180")} size={24} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#182B70] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold italic">"Your Journey to Excellence Starts Here"</h2>
          <p className="text-white/70 text-xl">Download our prospectus or apply online today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
             <button className="bg-white text-[#182B70] px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all">Apply Now</button>
             <button className="bg-transparent border-2 border-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#182B70] transition-all">Download Prospectus</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
