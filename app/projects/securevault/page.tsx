"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  FileLock2,
  KeyRound,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const objectives = [
  "Provide secure file upload and storage.",
  "Protect files through encryption.",
  "Allow controlled file sharing between users.",
  "Implement role-based access control.",
  "Monitor user activities through activity logs.",
  "Prevent unauthorized file access.",
];

const features = [
  {
    icon: Users,
    title: "User Registration & Login",
    description:
      "Secure user registration, login authentication and OTP-based verification.",
  },
  {
    icon: FileLock2,
    title: "File Upload & Management",
    description:
      "Users can upload, manage and securely access their files through the system.",
  },
  {
    icon: ArrowUpRight,
    title: "Secure File Sharing",
    description:
      "Files can be shared with selected users using controlled permissions.",
  },
  {
    icon: ShieldCheck,
    title: "Access Control",
    description:
      "Permission checks ensure that only authorized users can view or download files.",
  },
  {
    icon: Workflow,
    title: "Activity Monitoring",
    description:
      "Important file activities are recorded with user, action, file and timestamp details.",
  },
  {
    icon: Lock,
    title: "Protected Downloads",
    description:
      "Download access is protected using authentication and permission validation.",
  },
];

const technologies = [
  "Java",
  "Spring Boot",
  "MySQL",
  "HTML5",
  "CSS3",
  "JavaScript",
];

const workflow = [
  "User Registration",
  "Login & Authentication",
  "OTP Verification",
  "Dashboard Access",
  "File Upload",
  "Encryption & Storage",
  "File Sharing",
  "Permission Validation",
  "Secure Download",
  "Activity Logging",
];

const testingTypes = [
  "Unit Testing",
  "Integration Testing",
  "System Testing",
  "Security Testing",
  "Performance Testing",
  "Usability Testing",
];

const futureScope = [
  "Stronger encryption techniques",
  "Multi-factor authentication",
  "Cloud storage integration",
  "Notification system",
  "File version control",
  "Detailed activity reports",
];

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-4 flex items-center gap-3"
    >
      <span className="h-px w-8 bg-cyan-500" />
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-400">
        {children}
      </span>
    </motion.div>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl"
    >
      {children}
    </motion.h2>
  );
}

function AnimatedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        scale: 1.015,
        transition: {
          duration: 0.35,
        },
      }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SecureVaultPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 -z-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />
          <div className="absolute right-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur transition-all hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>

              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:border-cyan-900 dark:bg-cyan-950/50 dark:text-cyan-300">
                Security Project
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400"
            >
              SecureVault
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-6xl"
            >
              Secure File Sharing System
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg"
            >
              A secure web-based file sharing system designed to provide
              authenticated access, encrypted file handling, controlled
              sharing permissions and activity monitoring.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Project Overview</SectionLabel>

          <SectionTitle>
            A security-focused platform for controlled file sharing.
          </SectionTitle>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-6"
            >
              <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                SecureVault is a web-based secure file sharing system that
                allows authenticated users to upload, manage and share files
                while maintaining access control and monitoring activities.
              </p>

              <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                The system provides user authentication, OTP verification,
                encrypted file handling, permission-based access and activity
                monitoring for improved security and controlled file access.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <AnimatedCard className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <ShieldCheck className="mb-4 text-cyan-500" size={26} />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Security First
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Authentication, encryption and access control.
                  </p>
                </AnimatedCard>

                <AnimatedCard className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <Users className="mb-4 text-cyan-500" size={26} />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Controlled Access
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    User and admin permissions for protected resources.
                  </p>
                </AnimatedCard>
              </div>
            </motion.div>

            <ProjectImage
              src="/projects/securevault-dashboard.png"
              alt="SecureVault Dashboard"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM STATEMENT
      ===================================================== */}

      <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Problem Statement</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SectionTitle>
                Secure file exchange requires more than simple upload and
                download.
              </SectionTitle>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
                File sharing systems need mechanisms to verify users, protect
                stored files, control who can access shared files and record
                important activities. SecureVault addresses these requirements
                through authentication, encryption, permission management and
                activity monitoring.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          OBJECTIVES
      ===================================================== */}

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Objectives</SectionLabel>

          <SectionTitle>
            Designed around security, control and reliability.
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-4 md:grid-cols-2"
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={objective}
                variants={fadeUp}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
                  {index + 1}
                </span>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {objective}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          KEY FEATURES
      ===================================================== */}

      <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Key Features</SectionLabel>

          <SectionTitle>
            Core modules implemented in SecureVault.
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.25 },
                  }}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:shadow-black/20"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-transform duration-300 group-hover:scale-110 dark:bg-cyan-950/60 dark:text-cyan-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Technology Stack</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SectionTitle>
                Technologies used to build the application.
              </SectionTitle>

              <p className="mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
                The project combines a Java-based backend, database layer and
                responsive web technologies to implement the secure file
                sharing workflow.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {technologies.map((technology) => (
                <motion.div
                  key={technology}
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  className="flex min-h-[110px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                >
                  {technology}
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>System Workflow</SectionLabel>

          <SectionTitle>
            From authentication to secure file access.
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {workflow.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                }}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200">
                  {step}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PROJECT SCREENS
      ===================================================== */}

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Project Screens</SectionLabel>

          <SectionTitle>
            Key application interfaces.
          </SectionTitle>

          <div className="mt-12 space-y-16">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Dashboard Overview
                </h3>

                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                  The dashboard provides users with a centralized interface
                  for managing files and accessing the major SecureVault
                  functionalities.
                </p>
              </motion.div>

              <ProjectImage
                src="/projects/securevault-dashboard.png"
                alt="SecureVault Dashboard Overview"
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <ProjectImage
                src="/projects/securevault-encrypt.png"
                alt="SecureVault Encrypt and Share"
              />

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Encrypt & Share File
                </h3>

                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                  Users can select files, apply the secure sharing workflow
                  and define access permissions for recipients.
                </p>
              </motion.div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Received Files
                </h3>

                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                  Shared files received by users are presented according to
                  the permissions assigned by the sender.
                </p>
              </motion.div>

              <ProjectImage
                src="/projects/securevault-shared.png"
                alt="SecureVault Received Files"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          AUTHENTICATION
      ===================================================== */}

      <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Authentication</SectionLabel>

          <SectionTitle>
            Multiple stages of identity verification.
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            <AnimatedAuthCard
              title="Registration"
              description="User registration interface for creating a SecureVault account."
              image="/projects/securevault-registration.png"
            />

            <AnimatedAuthCard
              title="Login"
              description="Authentication interface for accessing the protected system."
              image="/projects/securevault-login.png"
            />

            <AnimatedAuthCard
              title="OTP Verification"
              description="OTP verification provides an additional authentication step."
              image="/projects/securevault-otp.png"
            />
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          USER MANAGEMENT
      ===================================================== */}

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>User Management</SectionLabel>

          <SectionTitle>
            User profile and account management.
          </SectionTitle>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">

            <ProjectImage
              src="/projects/securevault-profile.png"
              alt="SecureVault Profile Page"
            />

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-6"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <Users className="mb-4 text-cyan-500" size={25} />

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Profile Management
                </h3>

                <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
                  Users can access and manage their profile information within
                  the application.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <KeyRound className="mb-4 text-cyan-500" size={25} />

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Controlled Access
                </h3>

                <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
                  Authentication and permission checks protect user resources
                  and shared files.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          ADMIN
      ===================================================== */}

      <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Admin Management</SectionLabel>

          <SectionTitle>
            Administrative controls and activity monitoring.
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            <AdminScreen
              title="Admin Dashboard"
              description="Centralized administrative interface for managing system operations."
              image="/projects/securevault-admin-dashboard.png"
            />

            <AdminScreen
              title="File Logs"
              description="Activity monitoring records user actions, files and timestamps."
              image="/projects/securevault-file-logs.png"
            />

            <AdminScreen
              title="Admin Settings"
              description="Administrative settings and controls for the application."
              image="/projects/securevault-admin-settings.png"
            />

            <AdminScreen
              title="Registered Users"
              description="Administrative view of registered users in the system."
              image="/projects/securevault-users.png"
            />
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          TESTING
      ===================================================== */}

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Testing & Validation</SectionLabel>

          <SectionTitle>
            Testing the system for security, functionality and reliability.
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testingTypes.map((type) => (
              <motion.div
                key={type}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
              >
                <CheckCircle2
                  size={22}
                  className="shrink-0 text-cyan-500"
                />

                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {type}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-7 dark:border-amber-900/60 dark:bg-amber-950/20"
          >
            <h3 className="font-semibold text-amber-900 dark:text-amber-300">
              Testing observations
            </h3>

            <p className="mt-3 leading-7 text-amber-800/80 dark:text-amber-200/70">
              The project report records specific defects found during
              testing, including invalid-password login handling, password
              mismatch during registration and network-loss handling during
              encryption/sharing. These are documented as defects rather than
              being presented as successfully resolved functionality.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FUTURE SCOPE
      ===================================================== */}

      <section className="bg-white py-20 dark:bg-slate-950 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <SectionLabel>Future Scope</SectionLabel>

          <SectionTitle>
            Possible improvements and future extensions.
          </SectionTitle>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {futureScope.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <Wrench className="mb-5 text-cyan-500" size={24} />

                <p className="font-medium leading-7 text-slate-800 dark:text-slate-200">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CONCLUSION
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-slate-200 bg-slate-950 py-24 text-white dark:border-slate-800">
        <div className="absolute left-1/2 top-0 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <FileLock2 className="text-cyan-400" size={30} />
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Conclusion
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            A secure foundation for controlled file sharing.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            SecureVault demonstrates a secure file sharing approach using
            authentication, encryption, access control, permission management
            and activity monitoring. The system supports both user and
            administrative operations while providing controlled access to
            shared files.
          </p>

          <motion.div
            whileHover={{
              y: -3,
            }}
            className="mt-9 inline-flex"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
            >
              <ArrowLeft size={17} />
              Back to Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}

/* =========================================================
   AUTH CARD
========================================================= */

function AnimatedAuthCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-950">
        <Image
          src={image}
          alt={title}
          width={900}
          height={650}
          className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ADMIN SCREEN
========================================================= */

function AdminScreen({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -7,
        transition: {
          duration: 0.25,
        },
      }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="overflow-hidden bg-slate-100 dark:bg-slate-950">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
        />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3">
          <LayoutDashboard
            size={20}
            className="text-cyan-500"
          />

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
        </div>

        <p className="text-sm leading-7 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}