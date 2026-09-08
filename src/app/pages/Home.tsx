import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

// Figma Assets
import heroCampusImg from "../../assets/figma/hero-campus.png";
import educationAcademicImg from "../../assets/figma/education-academic.png";
import communityLifeImg from "../../assets/figma/community-life.png";
import newsScienceFairImg from "../../assets/figma/news-science-fair.png";
import newsInternationalDayImg from "../../assets/figma/news-international-day.png";
import newsVarsityTeamImg from "../../assets/figma/news-varsity-team.png";

interface NewsItem {
  id: number;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
  image: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    tag: "Campus Life",
    date: "06-February-2026",
    title: "Annual Science Fair Showcases Student Innovation",
    subtitle:
      "Our students continue to excel in various fields, demonstrating the core values and leadership skills fostere…",
    image: newsScienceFairImg,
  },
  {
    id: 2,
    tag: "Community",
    date: "15-March-2026",
    title: "International Day Celebrated with Enthusiasm",
    subtitle:
      "The campus came alive with vibrant displays of culture, as students showcased diverse traditions and cuisines.",
    image: newsInternationalDayImg,
  },
  {
    id: 3,
    tag: "Sports",
    date: "22-April-2026",
    title: "Varsity Team Wins Regional Championship",
    subtitle:
      "The school's varsity team triumphed in a thrilling match, highlighting the dedication and teamwork of our student athletes.",
    image: newsVarsityTeamImg,
  },
];

export function Home() {
  return (
    <div className="flex flex-col font-sora bg-white text-[#25252A] overflow-hidden">
      {/* 1. Hero Section (#763:1004) */}
      <section className="relative min-h-[750px] lg:h-[800px] w-full flex flex-col justify-end overflow-hidden">
        {/* Campus Background Image */}
        <img
          src={heroCampusImg}
          alt="Chea Chanto College Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Scrim Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

        {/* Hero Content Container (#763:1007) */}
        <div className="relative z-10 w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight">
              Where Talent Meets Opportunity
            </h1>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal">
              Chea Chanto College is a selective secondary school in Kampong
              Thom, created to give exceptional students from underserved
              communities access to an education that can change the course of
              their lives. Inspired by the legacy and vision of H.E. Chea
              Chanto, CCC helps young people build the knowledge, confidence,
              and character to shape their own futures and serve their
              communities.
            </p>

            {/* CTA Buttons (#765:958) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#182B70] text-white px-6 py-3.5 rounded-[24px] font-medium text-base hover:bg-[#1e358c] transition-colors shadow-sm"
              >
                Discover Chea Chanto College
                <ChevronRight size={18} />
              </Link>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 bg-white text-[#25252A] border border-[#D8D8DA] px-6 py-3.5 rounded-[24px] font-medium text-base hover:bg-gray-50 transition-colors shadow-sm"
              >
                Apply to CCC
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Transforming Education Section (#764:1062) */}
      <section className="bg-[#EEF0F7] py-20 lg:py-[80px]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="flex-1 space-y-4 max-w-2xl">
              <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
                Transforming Education in Cambodia
              </h2>
              <p className="text-[#25252A] text-base leading-relaxed font-normal">
                CCC provides fully funded scholarships to talented students who
                may not otherwise have access to a high-quality secondary
                education. Students learn in a supportive, student-centred
                environment that combines academic challenge with character,
                leadership, and practical preparation for life beyond school.
              </p>
            </div>
            <div className="w-full lg:w-[500px] shrink-0">
              <img
                src={educationAcademicImg}
                alt="Transforming Education"
                className="w-full h-[280px] sm:h-[320px] object-cover rounded-[24px] shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Future-Ready Education Section (#783:113) */}
      <section className="bg-white py-20 lg:py-[80px]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px]">
          <div className="space-y-8">
            {/* Banner Image */}
            <div className="w-full h-[260px] sm:h-[320px] rounded-[24px] overflow-hidden shadow-sm">
              <img
                src={educationAcademicImg}
                alt="A Future-Ready Education"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text & Button Content */}
            <div className="space-y-6 max-w-4xl">
              <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
                A Future-Ready Education
              </h2>
              <p className="text-[#25252A] text-base leading-relaxed font-normal">
                Our programme brings together the Cambodian National Curriculum
                and International qualifications, supported by strong
                English-language and digital-learning programmes. Through
                thoughtful teaching, hands-on learning, and close guidance,
                students develop the subject knowledge, independence, and
                critical thinking they need for university and future careers.
              </p>
              <div>
                <Link
                  to="/academic"
                  className="inline-flex items-center gap-2 bg-[#182B70] text-white px-6 py-3.5 rounded-[24px] font-medium text-base hover:bg-[#1e358c] transition-colors shadow-sm"
                >
                  Explore Our Academics
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Beyond the Classroom Section (#788:270) */}
      <section className="bg-[#182B70] py-20 lg:py-[80px] text-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image Collage (#788:1611) */}
            <div className="relative w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] shrink-0 mx-auto lg:mx-0">
              {/* Back Image (image 1) */}
              <img
                src={educationAcademicImg}
                alt="Classroom activity"
                className="absolute top-0 left-0 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] object-cover rounded-[24px] shadow-lg"
              />
              {/* Front Offset Image (Community 1) */}
              <img
                src={communityLifeImg}
                alt="Community life"
                className="absolute bottom-0 right-0 sm:left-40 sm:top-40 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] object-cover rounded-[16px] shadow-2xl border-4 border-[#182B70]"
              />
            </div>

            {/* Right Text Content (#788:273) */}
            <div className="flex-1 space-y-6">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
                Beyond the Classroom
              </h2>
              <p className="text-white/70 text-base leading-relaxed font-normal max-w-2xl">
                Life at CCC is shaped by more than lessons and examinations.
                Clubs, sports, creative activities, student leadership,
                mentoring, and community service give students room to discover
                new interests, work with others, and grow into confident,
                responsible young adults.
              </p>
              <div className="pt-2">
                <Link
                  to="/campus-life"
                  className="inline-flex items-center gap-2 bg-white text-[#25252A] border border-[#D8D8DA] px-6 py-3.5 rounded-[24px] font-medium text-base hover:bg-gray-100 transition-colors shadow-sm"
                >
                  Discover Campus Life
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Latest News & Event Section (#788:2391) */}
      <section className="bg-white py-20 lg:py-[80px]">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px]">
          {/* Section Header Row (#788:2393) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
                Latest News & Event
              </h2>
              <p className="text-[#25252A] text-base sm:text-lg font-normal">
                Follow the latest stories, announcements, achievements, and
                events from the CCC community.
              </p>
            </div>
            <div>
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-[#182B70] px-4 py-2 rounded-full font-medium text-base hover:bg-[#182B70]/5 transition-colors"
              >
                View All Posts
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>

          {/* 3-Column Card Grid (#788:2404) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-white border border-[#D8D8DA] rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Container with Tag */}
                <div className="relative w-full h-[230px] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Tag (#795:1098) */}
                  <span className="absolute top-4 left-4 bg-[#AFD2FA] text-[#66666E] text-[11px] font-medium px-4 py-1 rounded-[16px]">
                    {item.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 gap-2">
                  <span className="text-[#8A8A91] text-[11px] font-normal">
                    {item.date}
                  </span>
                  <h3 className="text-[#25252A] group-hover:text-[#182B70] text-lg sm:text-xl font-bold leading-snug transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[#66666E] text-xs leading-relaxed font-normal line-clamp-2 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Ready to Begin Your Journey? Section (#797:369) */}
      <section className="bg-[#182B70] py-20 lg:py-[80px] text-white">
        <div className="max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-[32px] font-bold leading-snug">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/70 text-base leading-relaxed font-normal">
                Applications are open to eligible Grade 9 students in Santuk
                District who are ready to challenge themselves, grow, and make
                the most of this opportunity.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 bg-white text-[#25252A] border border-[#D8D8DA] px-8 py-3.5 rounded-[24px] font-medium text-base hover:bg-gray-100 transition-colors shadow-sm"
              >
                Apply Now
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
