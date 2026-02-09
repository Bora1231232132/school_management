import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Users, Target, ShieldCheck, Heart, Handshake } from 'lucide-react';

export function About() {
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
            About Chea Chanto
          </motion.h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Founded with a vision to empower Cambodia's brightest young minds, Chea Chanto College is more than a school—it's a community of future leaders.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGVkdWNhdG9yJTIwaW4lMjBvZmZpY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAzNjUwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="H.E Chea Chanto"
                className="rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#182B70] p-8 rounded-2xl text-white shadow-xl max-w-xs">
                <p className="italic text-lg mb-4">"Education is the most powerful weapon which you can use to change the world."</p>
                <div className="font-bold">H.E Chea Chanto</div>
                <div className="text-white/70 text-sm">Founder & Visionary</div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-[#182B70] text-4xl font-bold">His Visionary Leadership</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                H.E Chea Chanto established this college with a singular purpose: to bridge the gap between talent and opportunity. He recognized that many of Cambodia's most brilliant students were held back by circumstance, not capability.
              </p>
              <p>
                Under his guidance, the college has grown into a beacon of excellence, combining traditional Khmer values with a global outlook on education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-[#182B70]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-[#182B70]/10">
            <div className="w-16 h-16 bg-[#182B70] rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-[#182B70] text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide a nurturing environment where high-potential students from all backgrounds can access world-class education, develop critical thinking skills, and prepare for leadership roles in their communities and the world.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-[#182B70]/10">
            <div className="w-16 h-16 bg-[#182B70] rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h3 className="text-[#182B70] text-3xl font-bold mb-6">Our Values</h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li className="flex gap-3"><span className="text-[#182B70] font-bold">•</span> Excellence in all endeavors</li>
              <li className="flex gap-3"><span className="text-[#182B70] font-bold">•</span> Integrity and ethical leadership</li>
              <li className="flex gap-3"><span className="text-[#182B70] font-bold">•</span> Inclusivity and community support</li>
              <li className="flex gap-3"><span className="text-[#182B70] font-bold">•</span> Innovation in learning and teaching</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Students */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#182B70] text-4xl font-bold mb-4">Our Students</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">Diverse backgrounds, united by talent and a drive for excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1747947901869-8a09ca01f4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBsYXVnaGluZyUyMGluJTIwaGFsbHdheXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-bold mb-2">Student Life</h4>
                <p className="text-white/80">Our students come from every province in Cambodia, bringing unique perspectives.</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGluJTIwbW9kZXJuJTIwbGlicmFyeXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Academic excellence"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-white text-2xl font-bold mb-2">Academic Success</h4>
                <p className="text-white/80">98% of our graduates progress to world-class universities and career paths.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#182B70] text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-500 text-xl">Collaborating with global organizations to create opportunities.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Partner Logos */}
             <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-[#182B70] rounded-full flex items-center justify-center text-white font-bold text-xl">W</div>
               <span className="font-bold text-[#182B70]">World Bank</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">U</div>
               <span className="font-bold text-[#182B70]">UNESCO</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">R</div>
               <span className="font-bold text-[#182B70]">Red Cross</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
               <span className="font-bold text-[#182B70]">Save Children</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
