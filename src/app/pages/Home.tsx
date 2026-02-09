import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  GraduationCap,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import emblemWhite from "../../assets/193b60f3176e8dca08c8961d64527b5f9d7c02c2.png";

const stats = [
  { label: "Scholarships", value: "100%", icon: Trophy },
  { label: "Nationalities", value: "15+", icon: Users },
  { label: "Student Ratio", value: "1:12", icon: BookOpen },
  { label: "Alumni Success", value: "98%", icon: GraduationCap },
];

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724949286531-aad1be889342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcml2YXRlJTIwc2Nob29sJTIwY2FtcHVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDM2NTAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Chea Chanto College Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={emblemWhite}
              alt="Emblem"
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-5xl md:text-7xl font-bold mb-6"
          >
            Chea Chanto College
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-xl md:text-2xl font-medium italic mb-10 max-w-3xl"
          >
            "Where talent meets opportunity"
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-[#182B70] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1e358c] transition-all flex items-center gap-2">
              Discover Our Programs <ArrowRight size={20} />
            </button>
            <button className="bg-white text-[#182B70] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all">
              Apply for 2026
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-[#182B70]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#182B70] group-hover:text-white transition-all duration-300">
                <stat.icon
                  size={32}
                  className="text-[#182B70] group-hover:text-white"
                />
              </div>
              <div className="text-4xl font-bold text-[#182B70] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-[#182B70] text-4xl md:text-5xl font-bold leading-tight">
              Empowering Talented Students to Lead the Future
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Chea Chanto College provides a unique environment where
              underprivileged yet exceptionally talented students can thrive.
              Our mission is to grant opportunities that help every individual
              reach their full potential.
            </p>
            <ul className="space-y-4">
              {[
                "Excellence in National & International Curriculums",
                "State-of-the-art STEM Facilities",
                "Comprehensive Scholarship Programs",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#182B70] font-semibold"
                >
                  <div className="w-6 h-6 rounded-full bg-[#182B70] flex items-center justify-center">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-[#182B70] font-bold text-lg border-b-2 border-[#182B70] pb-1 hover:border-transparent transition-all">
              Learn More About Our Vision
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760062744828-64801c56a039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGluJTIwbW9kZXJuJTIwbGlicmFyeXxlbnwxfHx8fDE3NzAzNjUwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students studying"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#182B70]/10 rounded-full -z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#182B70]/5 rounded-full -z-0" />
          </div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-[#182B70] text-4xl font-bold mb-4">
                Latest News & Events
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Stay updated with the latest happenings at Chea Chanto College.
              </p>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-[#182B70] font-bold uppercase tracking-wider text-sm">
              View All Posts <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src={
                      i === 1
                        ? "https://images.unsplash.com/photo-1747947901869-8a09ca01f4a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwY2FtcHVzJTIwaW5mbyUzQSUyMHN0dWRlbnRzJTIwaGFsbHdheXxlbnwxfHx8fDE3NzAzNjUwMjd8MA"
                        : i === 2
                          ? "https://images.unsplash.com/photo-1759092912891-9f52486bb059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMHNjaG9vbHxlbnwxfHx8fDE3NzAzNjUwMjh8MA"
                          : "https://images.unsplash.com/photo-1563299967-5208dc3f5d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBiYXNrZXRiYWxsJTIwY291cnQlMjBjYW1wdXN8ZW58MXx8fHwxNzcwMzY1MDI4fDA"
                    }
                    alt={`News ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#182B70] text-white text-xs font-bold px-3 py-1 rounded uppercase">
                    {i === 1 ? "Campus Life" : i === 2 ? "Academic" : "Sports"}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                    February {5 + i}, 2026
                  </div>
                  <h3 className="text-[#182B70] text-xl font-bold group-hover:text-blue-700 transition-colors">
                    {i === 1
                      ? "Annual Science Fair Showcases Student Innovation"
                      : i === 2
                        ? "National Curriculum Excellence: Top Scores Achieved"
                        : "Varsity Basketball Team Secures Regional Championship"}
                  </h3>
                  <p className="text-gray-500 line-clamp-2">
                    Our students continue to excel in various fields,
                    demonstrating the core values and leadership skills fostered
                    at Chea Chanto College...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="sm:hidden w-full mt-10 border-2 border-[#182B70] text-[#182B70] py-4 rounded-xl font-bold uppercase tracking-widest text-sm">
            View All Posts
          </button>
        </div>
      </section>
    </div>
  );
}
