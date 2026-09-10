import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Lightbulb, Target, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

// Figma Node 797-2898 Assets
import founderImg from "../../assets/about/founder-chea-chanto.png";
import studentBento1 from "../../assets/about/student-bento-1.png";
import studentBento2 from "../../assets/about/student-bento-2.png";
import studentBento3 from "../../assets/about/student-bento-3.png";
import studentBento4 from "../../assets/about/student-bento-4.png";
import teamEducators from "../../assets/about/team-educators.png";
import communityPartner from "../../assets/about/community-partner.png";

export function About() {
  return (
    <div className="flex flex-col font-sora bg-white text-[#25252A] overflow-hidden pt-20 md:pt-24">
      {/* 1. Breadcrumbs (#797:2997) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-sm text-[#717182]"
        >
          <Link
            to="/home"
            className="hover:text-[#182B70] transition-colors font-medium"
          >
            Home
          </Link>
          <ChevronRight size={16} className="text-[#8A8A91]" />
          <span className="text-[#25252A] font-semibold">About Us</span>
        </nav>
      </section>

      {/* 2. Hero Headline Section (#797:2958) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-4 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h1 className="text-[#182B70] text-3xl sm:text-4xl lg:text-[32px] font-bold leading-tight tracking-tight">
            About H.E. Chea Chanto
          </h1>
          <p className="text-[#25252A] text-base sm:text-lg font-normal leading-relaxed">
            A life of public service, leadership, and lasting investment in
            education.
          </p>
        </motion.div>
      </section>

      {/* 3. Founder Biography Section (#797:3066) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12">
          {/* Portrait Image (#797:3069) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[570px] shrink-0"
          >
            <img
              src={founderImg}
              alt="H.E. Chea Chanto Portrait"
              className="w-full h-auto max-h-[450px] object-cover rounded-[14px] border-2 border-[#8A8A91] shadow-sm"
            />
          </motion.div>

          {/* Biography Content (#797:3071) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 space-y-6 lg:pt-4"
          >
            <p className="text-[#25252A] text-base leading-relaxed font-normal">
              Born in Tang Krasang Commune, Santuk District, Kampong Thom
              Province, in 1951, H.E. Chea Chanto rose from rural beginnings to
              become one of Cambodia’s most respected public leaders. He earned
              two doctoral degrees and served for more than two decades as
              Governor of the National Bank of Cambodia, helping modernize and
              strengthen the country’s banking system. In 2021, he was named
              Central Banker of the Year for Asia-Pacific.
            </p>
            <p className="text-[#25252A] text-base leading-relaxed font-normal">
              Throughout his career, H.E. Chea Chanto remained closely connected
              to the community that shaped him. His commitment to giving back,
              widening opportunity, and investing in education inspired the
              creation of Chea Chanto College in Santuk District. The school
              carries that legacy forward by helping talented young Cambodians
              develop their potential and become thoughtful leaders in their
              communities, their country, and the wider world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Our School — Vision, Mission & Values (#797:3072) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-16 lg:py-24 border-t border-[#E5E7EB]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
            Our School
          </h2>

          <div className="space-y-10 lg:space-y-12">
            {/* Vision Item (#846:854) */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#25252A]">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-[#25252A] text-lg sm:text-xl font-bold tracking-wide">
                  VISION
                </h3>
              </div>
              <p className="text-[#25252A] text-base leading-relaxed font-normal max-w-5xl pl-11">
                We envision a Cambodia where talent is met with opportunity, and
                where every promising student has the chance to learn, lead, and
                make a meaningful difference. CCC aims to be a vibrant community
                of students and educators who grow together and help shape a
                more thoughtful, innovative, and compassionate future.
              </p>
            </div>

            {/* Mission Item (#846:865) */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#25252A]">
                  <Target size={28} />
                </div>
                <h3 className="text-[#25252A] text-lg sm:text-xl font-bold tracking-wide">
                  MISSION
                </h3>
              </div>
              <p className="text-[#25252A] text-base leading-relaxed font-normal max-w-5xl pl-11">
                CCC opens doors for exceptional students from underserved
                communities and provides a rigorous education centred on STEM,
                English, leadership, and personal development. We help students
                strengthen their academic foundations, practical skills,
                confidence, and sense of responsibility so they are prepared for
                higher education, work, and service.
              </p>
            </div>

            {/* Core Values Item (#847:859) */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#25252A]">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-[#25252A] text-lg sm:text-xl font-bold tracking-wide">
                  CORE VALUES
                </h3>
              </div>
              <p className="text-[#25252A] text-base leading-relaxed font-normal max-w-5xl pl-11 font-medium">
                Respect • Integrity • Responsibility • Excellence • Service
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. Our Students Section & Bento Grid (#797:3182) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-16 lg:py-24 border-t border-[#E5E7EB]">
        <div className="space-y-10">
          {/* Header & Copy (#797:3184) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-5xl"
          >
            <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
              Our Students
            </h2>
            <div className="space-y-4 text-[#25252A] text-base leading-relaxed font-normal">
              <p>
                CCC welcomes selected Grade 9 students from public schools
                across Santuk District. Our students come from rural and
                underserved communities and bring with them curiosity,
                determination, and the ability to achieve far more when given
                the right opportunity.
              </p>
              <p>
                At CCC, they find both challenge and support. Dedicated
                teachers, mentors, and staff help students build strong academic
                foundations, confidence, character, and leadership skills. By
                the time they graduate, students are prepared to pursue further
                education and meaningful careers, while remaining connected to
                the communities that helped shape them.
              </p>
            </div>
          </motion.div>

          {/* Bento Grid (#797:3270) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
          >
            {/* Card 1.1 (1×2) (#797:3271) - Tall portrait */}
            <div className="md:col-span-1 lg:col-span-4 h-[380px] sm:h-[480px] lg:h-[640px] overflow-hidden rounded-[24px] shadow-sm group">
              <img
                src={studentBento1}
                alt="CCC Student in Uniform"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Right Group: 2x1 top card and two 1x1 bottom cards */}
            <div className="md:col-span-1 lg:col-span-8 flex flex-col gap-6">
              {/* Card 1.2 (2×1) (#797:3272) - Wide landscape */}
              <div className="w-full h-[220px] sm:h-[280px] lg:h-[308px] overflow-hidden rounded-[24px] shadow-sm group">
                <img
                  src={studentBento2}
                  alt="CCC Classroom and Academic Activities"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom 2 Cards Grid (1×1 each) (#797:3273 & #797:3274) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="h-[220px] sm:h-[280px] lg:h-[308px] overflow-hidden rounded-[24px] shadow-sm group">
                  <img
                    src={studentBento3}
                    alt="CCC Students Discussion"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="h-[220px] sm:h-[280px] lg:h-[308px] overflow-hidden rounded-[24px] shadow-sm group">
                  <img
                    src={studentBento4}
                    alt="CCC Student Life"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Our Team & Our Partners Section (#797:3276) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-16 lg:py-24 border-t border-[#E5E7EB]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
          {/* Left Text Block (#797:3278) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[600px] shrink-0 space-y-8"
          >
            {/* Our Team */}
            <div className="space-y-4">
              <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
                Our Team
              </h2>
              <p className="text-[#25252A] text-base leading-relaxed font-normal">
                CCC is led by educators and staff who share a deep commitment to
                student growth. Together, they oversee academics, student life,
                admissions, partnerships, and school operations while creating a
                safe, respectful, and encouraging environment in which every
                student can thrive. Our Partners CCC works with universities,
                educational institutions, organisations, and community partners
                to broaden learning opportunities, strengthen career exposure,
                and create pathways for students beyond secondary school.
              </p>
            </div>
          </motion.div>

          {/* Right Images Block (#800:416) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[560px] flex flex-col sm:flex-row lg:relative lg:h-[420px] items-center justify-center gap-6 sm:gap-8"
          >
            {/* Card 1: Team Educators */}
            <div className="w-[280px] sm:w-[300px] lg:w-[320px] h-[280px] sm:h-[300px] lg:h-[320px] lg:absolute lg:top-12 lg:left-0 rounded-[24px] overflow-hidden shadow-lg border-2 border-white group">
              <img
                src={teamEducators}
                alt="CCC Educators and Leadership Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 2: Community Partners */}
            <div className="w-[280px] sm:w-[300px] lg:w-[320px] h-[280px] sm:h-[300px] lg:h-[320px] lg:absolute lg:top-0 lg:right-0 rounded-[16px] overflow-hidden shadow-xl border-2 border-white group">
              <img
                src={communityPartner}
                alt="CCC Community and Educational Partners"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
