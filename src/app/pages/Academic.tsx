import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight, Download } from "lucide-react";

// Academic Assets (Figma Node 802-529)
import teaching1Img from "../../assets/academic/teaching-1.png";
import teaching2Img from "../../assets/academic/teaching-2.png";
import facilityLearningImg from "../../assets/academic/facility-learning-spaces.png";
import facilityLabImg from "../../assets/academic/facility-laboratories.png";
import careerEngImg from "../../assets/academic/career-engineering.png";
import careerTechImg from "../../assets/academic/career-tech-5dc579.png";
import careerBizImg from "../../assets/academic/career-business-5cebc5.png";
import careerHealthImg from "../../assets/academic/career-healthcare-5822dd.png";

// Academic SVG Icons
import iconNational from "../../assets/academic/icon-national-curriculum.svg";
import iconInternational from "../../assets/academic/icon-international-curriculum.svg";
import iconEnglish from "../../assets/academic/icon-english.svg";
import iconComputer from "../../assets/academic/icon-computer.svg";
import iconEngineering from "../../assets/academic/icon-engineering.svg";
import iconTech from "../../assets/academic/icon-technology.svg";
import iconBusiness from "../../assets/academic/icon-business.svg";
import iconHealth from "../../assets/academic/icon-healthcare.svg";

export function Academic() {
  const programmes = [
    {
      icon: iconNational,
      title: "CAMBODIAN NATIONAL CURRICULUM",
      desc: "CCC follows the curriculum developed by Cambodia’s Ministry of Education, Youth and Sport. Students build strong foundations in Khmer language, mathematics, physics, chemistry, biology, earth science, history, geography, morality, and ethics. The programme strengthens core academic competencies and prepares students for national examinations.",
    },
    {
      icon: iconInternational,
      title: "INTERNATIONAL CURRICULUM",
      desc: "CCC offers International and AP subjects. These internationally recognised programmes deepen subject knowledge and place strong emphasis on critical thinking, problem-solving, and independent learning. Students may study subjects such as Mathematics, Physics, Chemistry, Biology, and English, allowing them to develop specialisation in line with their interests and future plans. Students who successfully complete their examinations receive subject-based certificates recognised by universities around the world.",
    },
    {
      icon: iconEnglish,
      title: "ENGLISH LANGUAGE DEVELOPMENT",
      desc: "English is integrated throughout student learning and strengthened through a dedicated programme informed by the ACE curriculum. Students develop listening, speaking, reading, and writing skills for both academic study and everyday communication. The goal is not only proficiency, but the confidence to participate in classrooms, universities, workplaces, and international settings.",
    },
    {
      icon: iconComputer,
      title: "COMPUTER AND DIGITAL LITERACY",
      desc: "Students learn how to use technology confidently, responsibly, and effectively. The programme develops practical skills in digital reading, academic writing, online research, productivity tools, information evaluation, and digital citizenship, supporting both current learning and future study.",
    },
  ];

  const careerCards = [
    {
      img: careerEngImg,
      icon: iconEngineering,
      title: "Engineering",
      desc: "Civil, mechanical, electrical, software, and environmental engineering.",
    },
    {
      img: careerTechImg,
      icon: iconTech,
      title: "Technology & Innovation",
      desc: "Data science, artificial intelligence, machine learning, cybersecurity, and financial technology.",
    },
    {
      img: careerBizImg,
      icon: iconBusiness,
      title: "Business & Finance",
      desc: "Economics, banking, entrepreneurship, management, and international trade.",
    },
    {
      img: careerHealthImg,
      icon: iconHealth,
      title: "Healthcare & Life Sciences",
      desc: "Medicine, public health, food chemistry, laboratory science, and medical technology.",
    },
  ];

  return (
    <div className="flex flex-col font-sora bg-white text-[#25252A] overflow-hidden pt-20 md:pt-24">
      {/* 1. Breadcrumbs (#802:573) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-4 pb-2">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-[#66666E]"
        >
          <Link
            to="/home"
            className="hover:text-[#182B70] transition-colors font-normal"
          >
            Home
          </Link>
          <ChevronRight size={14} className="text-[#66666E]" />
          <span className="text-[#182B70] font-bold">Academics</span>
        </nav>
      </section>

      {/* 2. Our Study Programmes (#802:530) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-10 md:mb-14"
        >
          <h1 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight tracking-tight">
            Our Study Programmes
          </h1>
          <p className="text-[#25252A] text-sm sm:text-[15px] font-normal leading-relaxed">
            CCC offers a dual academic programme that combines the Cambodian
            National Curriculum with International qualifications. This approach
            gives students a strong grounding in Cambodia’s national education
            system while developing the analytical skills, independence, and
            global perspective required for future study and work.
          </p>
        </motion.div>

        {/* 4 Columns with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#D8D8DA]">
          {programmes.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-4 lg:px-6 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="flex items-start gap-3">
                <img
                  src={prog.icon}
                  alt=""
                  className="w-8 h-8 shrink-0 mt-0.5"
                />
                <h2 className="text-[#25252A] text-lg lg:text-[18px] xl:text-[20px] font-bold leading-snug uppercase">
                  {prog.title}
                </h2>
              </div>
              <p className="text-[#66666E] text-sm sm:text-[15px] leading-relaxed">
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Teaching & Learning (#802:560) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-4"
          >
            <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">
              Teaching & Learning
            </h2>
            <p className="text-[#25252A] text-sm sm:text-[15px] font-normal leading-relaxed">
              Learning at CCC is active, purposeful, and centred on student
              growth. Teachers use discussion, collaborative work, projects,
              experiments, and real-world problem-solving to help students
              understand ideas deeply rather than simply memorise information.
              Regular feedback and growth-focused assessment help students
              recognise their progress, respond to challenges, and take greater
              responsibility for their learning.
            </p>
          </motion.div>

          {/* Right: Overlapping Photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-[500px] lg:max-w-[560px] h-[340px] sm:h-[420px] lg:h-[451px] shrink-0 mx-auto lg:mx-0"
          >
            {/* Image 1 (Lower Left) */}
            <img
              src={teaching1Img}
              alt="Teaching & Learning"
              className="absolute left-0 bottom-0 lg:bottom-auto lg:top-[131px] w-[58%] lg:w-[320px] aspect-square lg:h-[320px] rounded-[20px] sm:rounded-[24px] object-cover shadow-sm border border-gray-100"
            />
            {/* Image 2 (Upper Right) */}
            <img
              src={teaching2Img}
              alt="Collaborative Learning"
              className="absolute right-0 lg:right-auto lg:left-[240px] top-0 lg:top-[32px] w-[58%] lg:w-[320px] aspect-square lg:h-[320px] rounded-[14px] sm:rounded-[16px] object-cover shadow-sm border border-gray-100"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Peer Mentorship and Orientation Programme (#807:778) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-12 md:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-12">
          {/* Left: Overlapping Photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-full max-w-[500px] lg:max-w-[560px] h-[340px] sm:h-[420px] lg:h-[451px] shrink-0 mx-auto lg:mx-0"
          >
            {/* Image 1 (Upper Left) */}
            <img
              src={teaching1Img}
              alt="Peer Mentorship"
              className="absolute left-0 top-0 lg:top-[32px] w-[58%] lg:w-[320px] aspect-square lg:h-[320px] rounded-[20px] sm:rounded-[24px] object-cover shadow-sm border border-gray-100"
            />
            {/* Image 2 (Lower Right) */}
            <img
              src={teaching2Img}
              alt="Student Mentors"
              className="absolute right-0 lg:right-auto lg:left-[240px] bottom-0 lg:bottom-auto lg:top-[131px] w-[58%] lg:w-[320px] aspect-square lg:h-[320px] rounded-[14px] sm:rounded-[16px] object-cover shadow-sm border border-gray-100"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-4"
          >
            <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">
              Peer Mentorship and Orientation Programme
            </h2>
            <p className="text-[#25252A] text-sm sm:text-[15px] font-normal leading-relaxed">
              Learning continues through CCC’s Peer Mentorship and Orientation
              Programme. Trained senior and junior mentors provide academic
              guidance, tutoring, and personal support through one-to-one
              check-ins and small-group activities. The programme helps students
              settle into school life, build confidence, strengthen leadership,
              and feel connected to the wider CCC community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Academic Facilities (#808:827) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight mb-10"
        >
          Academic Facilities
        </motion.h2>

        <div className="space-y-10 md:space-y-12">
          {/* Facility 1: Modern Learning Spaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
          >
            <div className="flex-1 space-y-3 pt-0 md:pt-4">
              <h3 className="text-[#25252A] text-lg sm:text-xl font-bold leading-snug">
                Modern Learning Spaces
              </h3>
              <p className="text-[#25252A] text-sm sm:text-[15px] leading-relaxed">
                Technology-enabled classrooms designed for focused study, active
                participation, and collaboration.
              </p>
            </div>
            <div className="w-full md:w-[500px] h-[260px] sm:h-[320px] shrink-0">
              <img
                src={facilityLearningImg}
                alt="Modern Learning Spaces"
                className="w-full h-full object-cover rounded-[24px] shadow-sm border border-gray-100"
              />
            </div>
          </motion.div>

          {/* Facility 2: Science & Technology Laboratories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
          >
            <div className="w-full md:w-[500px] h-[260px] sm:h-[320px] shrink-0">
              <img
                src={facilityLabImg}
                alt="Science & Technology Laboratories"
                className="w-full h-full object-cover rounded-[24px] shadow-sm border border-gray-100"
              />
            </div>
            <div className="flex-1 space-y-3 pt-0 md:pt-4">
              <h3 className="text-[#25252A] text-lg sm:text-xl font-bold leading-snug">
                Science & Technology Laboratories
              </h3>
              <p className="text-[#25252A] text-sm sm:text-[15px] leading-relaxed">
                Dedicated laboratories for physics, chemistry, biology, and
                computing, giving students space to experiment, test ideas, and
                learn by doing.
              </p>
            </div>
          </motion.div>

          {/* Facility 3: Library & Learning Resource Centre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
          >
            <div className="flex-1 space-y-3 pt-0 md:pt-4">
              <h3 className="text-[#25252A] text-lg sm:text-xl font-bold leading-snug">
                Library & Learning Resource Centre
              </h3>
              <p className="text-[#25252A] text-sm sm:text-[15px] leading-relaxed">
                A welcoming space for reading, research, independent study, and
                group work, supported by print and digital resources.
              </p>
            </div>
            <div className="w-full md:w-[500px] h-[260px] sm:h-[320px] shrink-0">
              <img
                src={facilityLearningImg}
                alt="Library & Learning Resource Centre"
                className="w-full h-full object-cover rounded-[24px] shadow-sm border border-gray-100"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. College & Career Readiness (#812:882) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-12"
        >
          <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">
            College & Career Readiness
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-[#25252A] text-lg sm:text-xl font-bold leading-snug">
                Preparing Students for Life Beyond CCC
              </h3>
              <p className="text-[#25252A] text-sm sm:text-[15px] font-normal leading-relaxed">
                CCC helps each student make informed decisions about what comes
                next. Through academic advising, mentoring, skills development,
                career exposure, and partnerships, students explore pathways
                that fit their interests, strengths, and circumstances. These
                may include university study in Cambodia or abroad, vocational
                and technical training, or entry into the workforce.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[#25252A] text-lg sm:text-xl font-bold leading-snug">
                University Pathways
              </h3>
              <p className="text-[#25252A] text-sm sm:text-[15px] font-normal leading-relaxed">
                CCC seeks to build strong pathways to universities and
                scholarship opportunities in Cambodia and internationally,
                including destinations such as the United States, the United
                Kingdom, Canada, France, Germany, Australia, Singapore, South
                Korea, China, Japan, and Hungary.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[#25252A] text-lg sm:text-xl font-bold leading-snug">
                Career Pathways Introduction
              </h3>
              <p className="text-[#25252A] text-sm sm:text-[15px] font-normal leading-relaxed">
                A strong foundation in STEM, English, leadership, and digital
                literacy allows students to explore a wide range of fields that
                matter to Cambodia and the wider world.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 Career Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-full h-[280px] sm:h-[320px] overflow-hidden rounded-[24px]">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-[24px] hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-6 space-y-2">
                <div className="flex items-center gap-3">
                  <img src={card.icon} alt="" className="w-8 h-8 shrink-0" />
                  <h3 className="text-[#25252A] text-lg sm:text-xl font-bold leading-snug">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[#66666E] text-sm sm:text-[15px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Academic Calendar (#815:1055) */}
      <section className="w-full max-w-[1512px] mx-auto px-6 md:px-12 lg:px-[152px] pt-12 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-4xl"
        >
          <h2 className="text-[#182B70] text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight">
            Academic Calendar
          </h2>
          <p className="text-[#25252A] text-sm sm:text-[15px] font-normal leading-relaxed">
            The CCC academic year runs from August to May, except for the
            academic year 2026-2027 where it runs from September to early July.
            Important dates, school holidays, examinations, and major events are
            published in the academic calendar below.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() =>
                alert("Academic Calendar download will be available soon.")
              }
              className="inline-flex items-center justify-center gap-2 bg-[#182B70] hover:bg-[#122055] text-white px-6 py-3 rounded-full text-base font-normal transition-colors shadow-sm cursor-pointer"
            >
              <span>Download Academic Calendar</span>
              <Download size={20} className="text-white" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
