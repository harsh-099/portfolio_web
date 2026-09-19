"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-white pt-32 pb-24 transition-colors duration-300 dark:bg-slate-950 md:pt-40 md:pb-32"
      >
        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10"
        />

        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 dark:border-cyan-900/60 dark:bg-cyan-950/30"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  Open to Opportunities
                </span>
              </motion.div>

              {/* Intro */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-lg font-medium text-slate-500 dark:text-slate-400"
              >
                Hello, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-3 text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl md:text-7xl"
              >
                Harshnil
                <span className="block text-cyan-500 dark:text-cyan-400">
                  Patil.
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-6 flex items-center gap-4"
              >
                <div className="h-px w-10 bg-cyan-500" />

                <p className="text-xl font-semibold text-slate-700 dark:text-slate-200 md:text-2xl">
                  Software Developer
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
              >
                Computer Engineering student with a strong foundation in
                programming, web development, databases, and software development.
                I enjoy building practical and secure software solutions while
                continuously learning new technologies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="group rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-500/20 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  View My Work
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-10 flex items-center gap-5"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Find me
                </span>

                <div className="h-px w-8 bg-slate-200 dark:bg-slate-800" />

                <a
                  href="https://github.com/harsh-099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/harshnilpatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  LinkedIn ↗
                </a>
              </motion.div>
            </motion.div>

            {/* ================= RIGHT PROFILE IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative mx-auto flex w-full max-w-lg justify-center"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-10 rounded-[4rem] bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />

              {/* Decorative Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute right-10 top-10 h-28 w-28 rounded-full border border-cyan-400/20 bg-cyan-400/5 blur-sm"
              />

              {/* Profile Wrapper */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative z-10"
              >
                {/* ================= PROFILE PHOTO CARD ================= */}
                <div className="relative mx-auto h-[340px] w-[260px] overflow-hidden rounded-[2.25rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-300/30 transition-colors duration-500 dark:border-slate-700 dark:bg-slate-950 dark:shadow-black/30">

                  {/* Profile Image */}
                  <Image
                    src="/images/harshnil-profile-new.png"
                    alt="Harshnil Patil - Software Developer"
                    fill
                    priority
                    sizes="260px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />

                  {/* Bottom Fade */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-100/80 via-slate-100/20 to-transparent transition-colors duration-500 dark:from-slate-950/80 dark:via-slate-950/20" />

                  {/* Small Photo Label */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    Software Developer
                  </div>
                </div>

                
              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-slate-200 px-6 py-24 transition-colors duration-300 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {/* Highlight 01 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group text-center md:text-left"
            >
              <div className="mb-3 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                CE
              </div>

              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                Computer Engineering
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Academic Focus
              </p>
            </motion.div>

            {/* Highlight 02 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group text-center md:text-left"
            >
              <div className="mb-3 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                SD
              </div>

              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                Software Development
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Career Interest
              </p>
            </motion.div>

            {/* Highlight 03 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group text-center md:text-left"
            >
              <div className="mb-3 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                WEB
              </div>

              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                Web Development
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Practical Experience
              </p>
            </motion.div>

            {/* Highlight 04 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group text-center md:text-left"
            >
              <div className="mb-3 text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                ∞
              </div>

              <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                Continuous Learning
              </h3>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Growth Mindset
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* About Section */}
      <section
        id="about"
        className="border-t border-slate-200 px-6 py-24 transition-colors duration-300 dark:border-slate-800"
      >
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]"
          >
            {/* Left Side */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -35 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                About Me
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Building with curiosity.
                <br />
                Growing with every project.
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 h-px bg-cyan-500"
              />

              <p className="mt-8 text-sm leading-7 text-slate-600 dark:text-slate-400">
                I am a motivated and detail-oriented Computer Engineering student
                with a strong foundation in programming, web development, database
                management, and software development.
              </p>
            </motion.div>

            {/* Right Side */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 35 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6"
            >
              {/* Main Description */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950 md:p-9"
              >
                <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                  I have hands-on experience working with technologies such as C,
                  C++, Java, Python, JavaScript, Django, Spring Boot, HTML, CSS,
                  MySQL, PostgreSQL, and Oracle.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
                  My experience includes developing web applications, integrating
                  databases, testing and debugging software, and working with
                  secure and role-based application features.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-400">
                  I enjoy solving problems, learning emerging technologies, and
                  continuously improving my development skills while working toward
                  building secure and scalable software solutions.
                </p>
              </motion.div>

              {/* Focus Cards */}
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="grid gap-4 sm:grid-cols-3"
              >
                {/* Card 01 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-300 hover:border-cyan-400/50 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="mb-4 text-xl font-bold text-cyan-600 dark:text-cyan-400">
                    01
                  </div>

                  <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                    Problem Solving
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Analytical approach to development challenges.
                  </p>
                </motion.div>

                {/* Card 02 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-300 hover:border-cyan-400/50 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="mb-4 text-xl font-bold text-cyan-600 dark:text-cyan-400">
                    02
                  </div>

                  <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                    Teamwork
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Comfortable collaborating in development teams.
                  </p>
                </motion.div>

                {/* Card 03 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition-colors duration-300 hover:border-cyan-400/50 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="mb-4 text-xl font-bold text-cyan-600 dark:text-cyan-400">
                    03
                  </div>

                  <h3 className="text-sm font-semibold text-slate-950 dark:text-white">
                    Continuous Learning
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    Always exploring and learning emerging technologies.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Skills Section */}
      <section
        id="skills"
        className="border-t border-slate-200/70 bg-white py-24 transition-colors duration-300 dark:border-slate-800/60 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-14 max-w-2xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Skills
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Technologies I work with.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
              A practical foundation in programming, web development, frameworks,
              databases, and development tools.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >

            {/* Programming Languages */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Programming Languages
                </h3>

                <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  01
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["C", "C++", "Java", "Python", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Frameworks
                </h3>

                <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  02
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "Django", "Bootstrap"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Web Technologies */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Web Technologies
                </h3>

                <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  03
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Databases
                </h3>

                <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  04
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL", "Oracle"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950 md:col-span-2 lg:col-span-2"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  Tools
                </h3>

                <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">
                  05
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "IntelliJ IDEA"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="border-t border-slate-200/70 bg-slate-50 py-24 transition-colors duration-300 dark:border-slate-800/60 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-14 max-w-2xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Experience
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Learning through real-world experience.
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 h-1 rounded-full bg-cyan-500"
            />

            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
              Hands-on experience in web application development, database
              management, testing, and software development practices.
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950"
          >

            {/* Animated Accent Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-0 top-0 w-1 bg-cyan-500"
            />

            <div className="p-7 md:p-10">

              {/* Top */}
              <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 dark:border-slate-800 md:flex-row md:items-start md:justify-between">

                <div>
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-2 text-sm font-medium text-cyan-600 dark:text-cyan-400"
                  >
                    May 2025 — Aug 2025
                  </motion.p>

                  <motion.h3
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-2xl font-bold text-slate-950 dark:text-white"
                  >
                    Software Development Intern
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-2 text-base font-medium text-slate-600 dark:text-slate-400"
                  >
                    Siddesh Infotech Pvt. Ltd.
                  </motion.p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                    Dhule, Maharashtra
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-fit rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400"
                >
                  Internship
                </motion.div>
              </div>

              {/* Responsibilities */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="mt-8 grid gap-4 md:grid-cols-2"
              >

                {/* Card 1 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      01
                    </span>

                    <h4 className="text-sm font-semibold text-slate-950 dark:text-white">
                      Web Application Development
                    </h4>
                  </div>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Developed and maintained an Online Examination System using
                    HTML, CSS, JavaScript, Python, Django, and MySQL.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      02
                    </span>

                    <h4 className="text-sm font-semibold text-slate-950 dark:text-white">
                      Responsive UI & Database
                    </h4>
                  </div>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Designed responsive web pages and integrated database
                    functionality to improve application usability and experience.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      03
                    </span>

                    <h4 className="text-sm font-semibold text-slate-950 dark:text-white">
                      Testing & Debugging
                    </h4>
                  </div>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Performed testing, debugging, and bug fixing to improve software
                    performance and reliability.
                  </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-900/60"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-sm font-bold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                      04
                    </span>

                    <h4 className="text-sm font-semibold text-slate-950 dark:text-white">
                      Development Practices
                    </h4>
                  </div>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    Collaborated with the development team to understand software
                    development life cycle and development best practices.
                  </p>
                </motion.div>

              </motion.div>

              {/* Technologies */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Python",
                  "Django",
                  "MySQL",
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 transition-colors duration-200 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-cyan-400"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>


      {/* Education Section */}
      <section
        id="education"
        className="border-t border-slate-200/70 bg-slate-50 py-24 transition-colors duration-300 dark:border-slate-800/60 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-14 max-w-2xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Education
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              My academic journey.
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 h-1 rounded-full bg-cyan-500"
            />

            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
              Building a strong foundation in computer engineering through
              continuous academic learning and practical development experience.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">

            {/* Timeline Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "calc(100% - 24px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-[11px] top-3 hidden w-px bg-slate-200 dark:bg-slate-800 md:block"
            />

            <div className="space-y-8">

              {/* B.Tech */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative md:pl-12"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-cyan-500 shadow-lg shadow-cyan-500/20 dark:border-[#05091b] md:flex"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-3xl border border-cyan-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-cyan-400/20 dark:bg-slate-950 md:p-9"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                    <div>
                      <p className="mb-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        2026 — 2029
                      </p>

                      <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                        B.Tech in Computer Engineering
                      </h3>

                      <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-400">
                        SSVPS&apos;s Bapusaheb Shivajirao Deore College of Engineering
                      </p>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                        Dhule, Maharashtra
                      </p>
                    </div>

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="w-fit rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400"
                    >
                      Currently Pursuing
                    </motion.span>

                  </div>
                </motion.div>
              </motion.div>

              {/* Diploma */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative md:pl-12"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-slate-400 dark:border-[#05091b] dark:bg-slate-600 md:flex"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950 md:p-9"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                    <div>
                      <p className="mb-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        2023 — 2026
                      </p>

                      <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                        Diploma in Computer Engineering
                      </h3>

                      <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-400">
                        SSVPS BSD Polytechnic, Dhule
                      </p>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
                        MSBTE
                      </p>
                    </div>

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    >
                      82.65%
                    </motion.span>

                  </div>
                </motion.div>
              </motion.div>

              {/* SSC */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative md:pl-12"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-slate-400 dark:border-[#05091b] dark:bg-slate-600 md:flex"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950 md:p-9"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                    <div>
                      <p className="mb-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        2023
                      </p>

                      <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                        Secondary School Certificate (SSC)
                      </h3>

                      <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-400">
                        Late W. B. Patil Madhyamik Vidyalaya, Biladi
                      </p>
                    </div>

                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    >
                      87.80%
                    </motion.span>

                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-slate-50 py-24 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Projects that solve real problems.
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-cyan-500" />
          </motion.div>

          {/* Project Cards */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* SecureVault */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/projects/securevault-dashboard.png"
                  alt="SecureVault Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  Security
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  SecureVault
                </h3>

                <p className="mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  Secure File Sharing System
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  A secure web-based file sharing system with user authentication,
                  OTP verification, encrypted file handling, secure storage,
                  protected downloads, and role-based access control.
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "MySQL"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-7">
                  <a
                    href="/projects/securevault"
                    className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                  >
                    View Project Details
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Smart Inventory ERP */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src="/projects/inventory-dashboard.png"
                  alt="Smart Inventory ERP Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  ERP System
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Smart Inventory ERP System
                </h3>

                <p className="mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  Hardware Retail Store Management
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  A web-based ERP system designed for hardware retail stores with
                  inventory tracking, billing, customer and supplier management,
                  purchase and sales management, invoice generation, and role-based
                  access control.
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "Django", "PostgreSQL"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-7">
                  <a
                    href="/projects/inventory"
                    className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                  >
                    View Project Details
                  </a>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="border-t border-slate-200 bg-white px-6 py-24 transition-colors duration-300 dark:border-slate-800 dark:bg-[#030712]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                My Resume
              </p>

              <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Want to know more about my
                <span className="text-cyan-500 dark:text-cyan-400">
                  {" "}journey?
                </span>
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 70 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 h-1 rounded-full bg-cyan-500"
              />

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
                Explore my education, professional experience, technical skills,
                and projects in detail through my resume.
              </p>

              {/* Resume Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                {/* View Resume */}
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
                >
                  View Resume ↗
                </motion.a>

                {/* Download Resume */}
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="/resume.pdf"
                  download="Harshnil_Patil_Resume.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  Download Resume ↓
                </motion.a>
              </motion.div>

              {/* Small Note */}
              <p className="mt-5 text-xs text-slate-500 dark:text-slate-500">
                View the complete resume or download a PDF copy.
              </p>
            </motion.div>

            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >

              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute -inset-5 rounded-[2rem] bg-cyan-500/10 blur-3xl"
              />

              {/* Paper */}
              <motion.div
                whileHover={{
                  rotate: 0,
                  y: -6,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative mx-auto max-w-md rotate-1 overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl dark:border-slate-700"
              >

                {/* Resume Header */}
                <div className="border-b border-slate-200 pb-6">

                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <div className="text-xl font-bold tracking-tight text-slate-950">
                        Harshnil Patil
                      </div>

                      <div className="mt-2 text-sm font-medium text-cyan-600">
                        Software Developer
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white"
                    >
                      HP
                    </motion.div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-slate-500">
                    <span>Software Development</span>
                    <span>•</span>
                    <span>Web Development</span>
                    <span>•</span>
                    <span>Computer Engineering</span>
                  </div>
                </div>

                {/* Resume Content */}
                <div className="space-y-7 py-7">

                  {/* Profile */}
                  <div>
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      Profile
                    </div>

                    <div className="space-y-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="h-2 rounded-full bg-slate-200"
                      />

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "91.666667%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="h-2 rounded-full bg-slate-200"
                      />

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="h-2 rounded-full bg-slate-200"
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      Experience
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3"
                    >
                      <div className="text-[10px] font-semibold text-slate-800">
                        Software Development Intern
                      </div>

                      <div className="mt-1 text-[9px] text-slate-500">
                        Siddesh Infotech Pvt. Ltd. • May 2025 — Aug 2025
                      </div>
                    </motion.div>
                  </div>

                  {/* Education */}
                  <div>
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      Education
                    </div>

                    <div className="space-y-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "83.333333%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="h-2 rounded-full bg-slate-200"
                      />

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "66.666667%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="h-2 rounded-full bg-slate-200"
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      Skills
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["Java", "Python", "Django", "MySQL"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.08,
                          }}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-[9px] text-slate-600"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-1.5 rounded-full bg-cyan-400"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-slate-200 bg-white px-6 py-24 transition-colors duration-300 dark:border-slate-800 dark:bg-[#030712]"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-14 max-w-3xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Contact
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Let&apos;s build something
              <span className="text-cyan-500 dark:text-cyan-400">
                {" "}meaningful.
              </span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 70 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 h-1 rounded-full bg-cyan-500"
            />

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
              Have a project, opportunity, or simply want to connect? Feel free to
              reach out. I&apos;d be happy to hear from you.
            </p>
          </motion.div>

          {/* Contact Layout */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950 md:p-9"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-500">
                Get in touch
              </p>

              <div className="mt-8 space-y-7">

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Email
                  </p>

                  <a
                    href="mailto:harshnilpatil09@gmail.com"
                    className="mt-2 block break-all text-base font-medium text-slate-950 transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400"
                  >
                    harshnilpatil09@gmail.com
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Phone
                  </p>

                  <a
                    href="tel:+919890653485"
                    className="mt-2 block text-base font-medium text-slate-950 transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400"
                  >
                    +91 9890653485
                  </a>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Location
                  </p>

                  <p className="mt-2 text-base font-medium text-slate-950 dark:text-white">
                    Dhule, Maharashtra, India
                  </p>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-10 border-t border-slate-200 pt-7 dark:border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Connect
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  {/* LinkedIn */}
                  <motion.a
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://www.linkedin.com/in/harshnilpatil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                  >
                    LinkedIn ↗
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://github.com/harsh-099"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                  >
                    GitHub ↗
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-slate-800 dark:bg-slate-950 md:p-9"
            >
              <div className="mb-7">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-500">
                  Send a message
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Fill out the form below and I&apos;ll get back to you as soon as
                  possible.
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Premium Footer */}
      <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 px-6 py-20 transition-colors duration-300 dark:border-slate-800 dark:bg-[#020617]">
        {/* Subtle Glow */}
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Top CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start justify-between gap-10 border-b border-slate-200 pb-14 dark:border-slate-800 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
                Let&apos;s connect
              </p>

              <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-6xl">
                Let&apos;s create something
                <span className="block text-cyan-500 dark:text-cyan-400">
                  meaningful.
                </span>
              </h2>
            </div>

            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:bg-cyan-500 hover:shadow-cyan-500/20 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-400"
            >
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </motion.a>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr]">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <a
                href="#home"
                className="inline-flex items-center text-4xl font-black tracking-tighter text-slate-950 dark:text-white"
              >
                HP<span className="text-cyan-500 dark:text-cyan-400">.</span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-400">
                Software Developer passionate about building practical software
                solutions, learning new technologies, and solving problems through
                code.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Explore
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                {[
                  ["About", "#about"],
                  ["Skills", "#skills"],
                  ["Experience", "#experience"],
                  ["Education", "#education"],
                  ["Projects", "#projects"],
                  ["Resume", "#resume"],
                  ["Contact", "#contact"],
                ].map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    className="w-fit text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Connect
              </p>

              <div className="flex gap-3">
                {/* GitHub */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://github.com/harsh-099"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  GH
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://www.linkedin.com/in/harshnilpatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                >
                  in
                </motion.a>
              </div>

              <a
                href="mailto:harshnilpatil09@gmail.com"
                className="mt-5 inline-block text-sm font-medium text-slate-500 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                harshnilpatil09@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>
              © {new Date().getFullYear()} Harshnil Dilip Patil. All rights reserved.
            </p>

            <a
              href="#home"
              className="group inline-flex items-center gap-2 transition-colors hover:text-cyan-500 dark:hover:text-cyan-400"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}