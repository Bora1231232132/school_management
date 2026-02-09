import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Coffee, Music, Palette, Trophy, Users, Heart, Camera, Clock } from 'lucide-react';

export function CampusLife() {
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
            Campus Life
          </motion.h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Experience a vibrant, supportive, and active community where students create lasting memories and friendships.
          </p>
        </div>
      </section>

      {/* Daily Life Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-[#182B70] text-4xl font-bold">A Day in the Life</h2>
              <p className="text-gray-600 text-lg">
                Life at Chea Chanto College is balanced between academic rigor and personal growth. Our daily schedule is designed to optimize learning while providing ample time for reflection, sports, and social interaction.
              </p>
              
              <div className="space-y-6">
                {[
                  { time: '08:00 AM', event: 'Morning Assembly & Reflections', icon: Clock },
                  { time: '08:30 AM', event: 'Core Academic Sessions', icon: Coffee },
                  { time: '12:30 PM', event: 'Communal Lunch & Socializing', icon: Users },
                  { time: '02:30 PM', event: 'Electives & Extracurricular Activities', icon: Music },
                  { time: '04:30 PM', event: 'Campus Clubs & Sports', icon: Trophy },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#182B70]/20 transition-all">
                    <div className="w-12 h-12 bg-[#182B70] text-white rounded-full flex items-center justify-center shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#182B70] uppercase tracking-widest">{item.time}</div>
                      <div className="font-bold text-gray-800">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                 <ImageWithFallback
                  src="https://images.unsplash.com/photo-1747947901869-8a09ca01f4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBsYXVnaGluZyUyMGluJTIwaGFsbHdheXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students 1"
                  className="rounded-3xl aspect-[3/4] object-cover shadow-lg"
                />
                 <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGluJTIwbW9kZXJuJTIwbGlicmFyeXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students 2"
                  className="rounded-3xl aspect-square object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                 <ImageWithFallback
                  src="https://images.unsplash.com/photo-1563299967-5208dc3f5d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBiYXNrZXRiYWxsJTIwY291cnQlMjBjYW1wdXN8ZW58MXx8fHwxNzcwMzY1MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students 3"
                  className="rounded-3xl aspect-square object-cover shadow-lg"
                />
                 <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHNjaG9vbHxlbnwxfHx8fDE3NzAzNjUwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students 4"
                  className="rounded-3xl aspect-[3/4] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Activities */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#182B70] text-4xl font-bold mb-4">Student Activities & Clubs</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">Explore your passions beyond the classroom.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'STEM Innovators', desc: 'Robotics, coding, and scientific research competitions.', icon: Palette },
              { name: 'Arts & Culture', desc: 'Traditional Khmer dance, painting, and music ensemble.', icon: Music },
              { name: 'Eco Warriors', desc: 'Leading sustainability and environmental campus projects.', icon: Heart },
              { name: 'Sports Academy', desc: 'Basketball, football, and track & field excellence.', icon: Trophy },
            ].map((club, idx) => (
              <motion.div
                key={club.name}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#182B70]/10 transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#182B70]/5 text-[#182B70] rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <club.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#182B70] mb-4">{club.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{club.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-24 px-6 bg-[#182B70] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1724949286531-aad1be889342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcml2YXRlJTIwc2Nob29sJTIwY2FtcHVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDM2NTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Community 1"
                  className="rounded-2xl aspect-square object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGVkdWNhdG9yJTIwaW4lMjBvZmZpY2UlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAzNjUwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Community 2"
                  className="rounded-2xl aspect-square object-cover mt-8"
                />
             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-bold">Community & Parent Engagement</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We believe education is a partnership between the school, parents, and the local community. Through regular meetings, volunteer opportunities, and social initiatives, we foster a strong support network for our students.
            </p>
            <div className="space-y-4">
               <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Parent-Teacher Association</h4>
                    <p className="text-white/60 text-sm">Active collaboration on student welfare and school improvements.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Heart className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Social Responsibility</h4>
                    <p className="text-white/60 text-sm">Students participate in local community service and environmental projects.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight Slider Placeholder */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[#182B70] text-4xl font-bold mb-4">Campus Highlights</h2>
              <p className="text-gray-500 text-lg">Moments that define our college experience.</p>
            </div>
            <div className="flex gap-4">
               <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#182B70] hover:text-white transition-all">←</button>
               <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#182B70] hover:text-white transition-all">→</button>
            </div>
          </div>
          <div className="flex gap-8">
             {[1, 2, 3].map(i => (
               <div key={i} className="min-w-[400px] aspect-[16/10] rounded-3xl overflow-hidden relative group">
                  <ImageWithFallback
                    src={i === 1 ? "https://images.unsplash.com/photo-1724949286531-aad1be889342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcml2YXRlJTIwc2Nob29sJTIwY2FtcHVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDM2NTAyN3ww" : 
                         i === 2 ? "https://images.unsplash.com/photo-1563299967-5208dc3f5d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBiYXNrZXRiYWxsJTIwY291cnQlMjBjYW1wdXN8ZW58MXx8fHwxNzcwMzY1MDI4fDA" :
                         "https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHNjaG9vbHxlbnwxfHx8fDE3NzAzNjUwMjh8MA"}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-end p-8">
                     <div className="text-white">
                        <Camera size={24} className="mb-4" />
                        <div className="font-bold text-xl">{i === 1 ? 'Campus Architecture' : i === 2 ? 'Sports Day 2026' : 'Innovation Fair'}</div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
