"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  FileCheck2,
  Mail,
  Menu,
  QrCode,
  Send,
  Sparkles,
  Upload,
  Users,
  WandSparkles,
  Zap,
  ShieldCheck,
  Download,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Create your event",
    description:
      "Add your event details, date, organizer information and participant requirements.",
  },
  {
    number: "02",
    icon: WandSparkles,
    title: "Design your certificate",
    description:
      "Choose a template or create your own beautiful certificate with dynamic fields.",
  },
  {
    number: "03",
    icon: Users,
    title: "Import participants",
    description:
      "Upload your Excel or CSV file and automatically map names, emails and other data.",
  },
  {
    number: "04",
    icon: Send,
    title: "Generate & deliver",
    description:
      "Generate personalized certificates and send them directly to every participant.",
  },
];

const features = [
  {
    icon: WandSparkles,
    title: "Smart Certificate Designer",
    description:
      "Create professional certificates using templates and dynamic fields.",
  },
  {
    icon: Zap,
    title: "Bulk Generation",
    description:
      "Generate hundreds or thousands of personalized certificates in seconds.",
  },
  {
    icon: Mail,
    title: "Automatic Delivery",
    description:
      "Send certificates directly to participant email addresses automatically.",
  },
  {
    icon: QrCode,
    title: "QR Verification",
    description:
      "Every certificate gets a unique QR code for instant verification.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper Resistant",
    description:
      "Unique certificate IDs and verification pages help prevent fake certificates.",
  },
  {
    icon: BarChart3,
    title: "Event Analytics",
    description:
      "Track generated, delivered, opened, downloaded and verified certificates.",
  },
];

const templates = [
  {
    title: "Participation",
    subtitle: "Clean & professional",
    className: "from-[#f8f4e9] to-[#e7dfca]",
  },
  {
    title: "Achievement",
    subtitle: "Bold & prestigious",
    className: "from-[#ece8f8] to-[#d9d0ef]",
  },
  {
    title: "Hackathon",
    subtitle: "Modern & technical",
    className: "from-[#e8f2f3] to-[#cce3e5]",
  },
];

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

        <div className="absolute left-[-150px] top-[45%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-[-150px] top-[65%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-4 shadow-2xl backdrop-blur-xl sm:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                <Award size={19} strokeWidth={2.5} />
              </div>

              <div>
                <div className="text-[15px] font-bold tracking-tight">
                  Certi<span className="text-violet-400">Flow</span>
                </div>

                <div className="hidden text-[9px] uppercase tracking-[0.2em] text-white/30 sm:block">
                  Digital Certificates
                </div>
              </div>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="text-sm text-white/50 transition hover:text-white"
              >
                How it works
              </a>

              <a
                href="#templates"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Templates
              </a>

              <a
                href="#pricing"
                className="text-sm text-white/50 transition hover:text-white"
              >
                Pricing
              </a>
            </div>

            {/* Desktop buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <button className="rounded-xl px-4 py-2 text-sm text-white/60 transition hover:text-white">
                Sign in
              </button>

              <button className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
                Get started
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg p-2 text-white/70 md:hidden"
            >
              <Menu size={22} />
            </button>
          </div>

          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 rounded-2xl border border-white/10 bg-[#0c0c10]/95 p-4 backdrop-blur-xl md:hidden"
            >
              {["Features", "How it works", "Templates", "Pricing"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                    onClick={() => setMobileMenu(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}

              <button className="mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">
                Get started
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="relative px-4 pb-28 pt-40 sm:px-6 sm:pt-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr]">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-xs text-violet-300"
              >
                <Sparkles size={13} />
                Certificate automation, simplified
                <ChevronRight size={13} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
              >
                Create certificates.
                <br />

                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
                  Deliver them automatically.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg"
              >
                Design beautiful certificates, generate hundreds in seconds,
                and send them directly to your participants. No repetitive
                editing. No manual emails.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <button className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90">
                  Create your first event
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm text-white/70 transition hover:bg-white/[0.07] hover:text-white">
                  <Award size={16} />
                  Explore templates
                </button>
              </motion.div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/35">
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  Free to start
                </span>

                <span className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  No credit card
                </span>

                <span className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  QR verification
                </span>
              </div>
            </div>

            {/* Certificate preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[90px]" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Generated notification */}
                <div className="absolute -right-3 -top-5 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#111116]/90 px-3 py-2 shadow-2xl backdrop-blur-xl sm:-right-8">
                  <FileCheck2 size={15} className="text-emerald-400" />

                  <div>
                    <div className="text-[10px] font-semibold">
                      Certificate generated
                    </div>

                    <div className="text-[9px] text-white/35">
                      Just now
                    </div>
                  </div>
                </div>

                {/* Certificate */}
                <div className="relative rounded-2xl border border-white/15 bg-[#f7f5ef] p-2 shadow-2xl sm:p-3">
                  <div className="relative aspect-[1.414/1] overflow-hidden border border-[#b59a65]/30 bg-[#f9f7f1]">
                    <div className="absolute left-3 top-3 h-12 w-12 border-l border-t border-[#b59a65]/50" />
                    <div className="absolute right-3 top-3 h-12 w-12 border-r border-t border-[#b59a65]/50" />
                    <div className="absolute bottom-3 left-3 h-12 w-12 border-b border-l border-[#b59a65]/50" />
                    <div className="absolute bottom-3 right-3 h-12 w-12 border-b border-r border-[#b59a65]/50" />

                    <div className="flex h-full flex-col items-center justify-center px-8 text-center text-[#24211d] sm:px-14">
                      <div className="text-[8px] uppercase tracking-[0.3em] text-[#9b8250]">
                        CertiFlow presents
                      </div>

                      <div className="mt-2 font-serif text-2xl sm:text-4xl">
                        Certificate
                      </div>

                      <div className="mt-2 text-[8px] uppercase tracking-[0.25em] text-[#8b7a5b]">
                        of participation
                      </div>

                      <div className="my-4 h-px w-24 bg-[#b59a65]/40" />

                      <div className="font-serif text-xl italic sm:text-3xl">
                        Rahul Sharma
                      </div>

                      <p className="mt-3 max-w-[340px] text-[8px] leading-4 text-[#777066] sm:text-[10px]">
                        This certificate is proudly presented in recognition
                        of participation in
                      </p>

                      <div className="mt-2 text-xs font-bold sm:text-sm">
                        CodeBlitz 2.0
                      </div>

                      <div className="mt-5 flex w-full items-end justify-between">
                        <div>
                          <div className="mb-1 h-px w-20 bg-[#8e7c5b]/50" />
                          <div className="text-[7px] text-[#777066]">
                            AI Club
                          </div>
                        </div>

                        <QrCode
                          size={42}
                          strokeWidth={1}
                          className="text-[#3e382f]"
                        />

                        <div>
                          <div className="mb-1 h-px w-20 bg-[#8e7c5b]/50" />
                          <div className="text-right text-[7px] text-[#777066]">
                            Organizer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email notification */}
                <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#111116]/90 px-3 py-2 shadow-2xl backdrop-blur-xl sm:-left-8">
                  <Mail size={15} className="text-blue-400" />

                  <div>
                    <div className="text-[10px] font-semibold">
                      Delivered successfully
                    </div>

                    <div className="text-[9px] text-white/35">
                      participant@email.com
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}

      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-5 px-6 py-7 text-xs text-white/35">
          <span className="uppercase tracking-[0.18em]">Built for</span>
          <span>🎓 Colleges</span>
          <span>💻 Hackathons</span>
          <span>🤖 AI Clubs</span>
          <span>🎤 Workshops</span>
          <span>🏆 Competitions</span>
          <span>🏢 Organizations</span>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Simple workflow
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              From event to certificate
              <span className="text-white/35"> in four steps.</span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/40 sm:text-base">
              Stop spending hours editing certificates one by one.
              CertiFlow handles the repetitive work for you.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon
                        size={20}
                        className="text-violet-300 transition group-hover:scale-110"
                      />
                    </div>

                    <span className="text-xs font-mono text-white/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {step.description}
                  </p>

                  {index !== steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                      <ArrowRight size={15} className="text-white/15" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= AUTOMATION ================= */}

      <section className="px-4 pb-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-violet-500/[0.08] via-white/[0.02] to-blue-500/[0.06]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10">
                  <Zap size={20} className="text-violet-300" />
                </div>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  One upload.
                  <br />
                  <span className="text-white/35">
                    Hundreds of certificates.
                  </span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/40">
                  Upload your participant list once. CertiFlow maps the
                  information to your certificate template and creates a
                  personalized certificate for every participant.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Upload Excel or CSV",
                    "Map participant information",
                    "Generate personalized certificates",
                    "Send automatically",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
                        <Check size={13} className="text-emerald-400" />
                      </div>

                      <span className="text-sm text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow visual */}
              <div className="relative flex items-center justify-center border-t border-white/[0.06] p-8 lg:border-l lg:border-t-0">
                <div className="w-full max-w-md space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                        <Upload size={18} className="text-blue-400" />
                      </div>

                      <div>
                        <div className="text-sm font-medium">
                          participants.xlsx
                        </div>

                        <div className="text-xs text-white/30">
                          320 participants
                        </div>
                      </div>

                      <Check
                        size={16}
                        className="ml-auto text-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="mx-auto h-6 w-px bg-white/10" />

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.06] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                        <WandSparkles
                          size={18}
                          className="text-violet-300"
                        />
                      </div>

                      <div>
                        <div className="text-sm font-medium">
                          Generating certificates
                        </div>

                        <div className="text-xs text-white/30">
                          320 / 320 completed
                        </div>
                      </div>

                      <div className="ml-auto h-2 w-2 animate-pulse rounded-full bg-violet-400" />
                    </div>
                  </div>

                  <div className="mx-auto h-6 w-px bg-white/10" />

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                        <Send size={18} className="text-emerald-400" />
                      </div>

                      <div>
                        <div className="text-sm font-medium">
                          Certificates delivered
                        </div>

                        <div className="text-xs text-white/30">
                          320 emails sent
                        </div>
                      </div>

                      <Check
                        size={16}
                        className="ml-auto text-emerald-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="border-t border-white/[0.06] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Powerful features
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Everything you need to
              <span className="text-white/35"> manage certificates.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon size={20} className="text-violet-300" />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= VERIFICATION ================= */}

      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Verification card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-10 rounded-full bg-blue-500/10 blur-[100px]" />

              <div className="relative rounded-3xl border border-white/10 bg-[#0c0c10] p-5 shadow-2xl sm:p-7">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                  <div>
                    <div className="text-xs text-white/30">
                      Certificate verification
                    </div>

                    <div className="mt-1 font-mono text-sm">
                      CF-2026-000184
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
                    <Check size={12} />
                    Valid
                  </div>
                </div>

                <div className="py-8 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white">
                    <QrCode size={65} strokeWidth={1.2} className="text-black" />
                  </div>

                  <div className="mt-6 text-xs text-white/30">
                    Scan QR code to verify
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="text-[10px] uppercase tracking-wider text-white/25">
                      Recipient
                    </div>

                    <div className="mt-2 text-sm font-medium">
                      Rahul Sharma
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="text-[10px] uppercase tracking-wider text-white/25">
                      Event
                    </div>

                    <div className="mt-2 text-sm font-medium">
                      CodeBlitz 2.0
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                Built-in verification
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Every certificate can be
                <span className="text-white/35"> verified instantly.</span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base">
                Give every certificate a unique ID and QR code. Anyone can
                verify its authenticity through a public verification page.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  {
                    icon: QrCode,
                    title: "Unique QR code",
                    text: "Every certificate receives its own verification QR.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Public verification",
                    text: "No login required to verify a certificate.",
                  },
                  {
                    icon: FileCheck2,
                    title: "Certificate identity",
                    text: "Verify recipient, event, date and issuer details.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                        <Icon size={18} className="text-violet-300" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-white/35">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEMPLATES ================= */}

      <section
        id="templates"
        className="border-t border-white/[0.06] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                Certificate templates
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Start with a design
                <span className="text-white/35"> you love.</span>
              </h2>
            </div>

            <button className="group flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
              View all templates
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {templates.map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`relative aspect-[1.414/1] overflow-hidden rounded-2xl bg-gradient-to-br ${template.className} p-3 shadow-xl transition duration-500 group-hover:-translate-y-2`}
                >
                  <div className="flex h-full flex-col items-center justify-center border border-black/10 text-center text-black/70">
                    <div className="text-[8px] uppercase tracking-[0.3em] opacity-50">
                      Certificate
                    </div>

                    <div className="mt-2 font-serif text-2xl sm:text-3xl">
                      {template.title}
                    </div>

                    <div className="mt-3 h-px w-20 bg-black/20" />

                    <div className="mt-3 font-serif text-sm italic opacity-60">
                      Participant Name
                    </div>

                    <div className="mt-6 text-[7px] uppercase tracking-widest opacity-40">
                      CertiFlow
                    </div>
                  </div>

                  <div className="absolute inset-3 border border-black/10" />
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold">
                    {template.title}
                  </h3>

                  <p className="mt-1 text-xs text-white/35">
                    {template.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}

      <section
        id="pricing"
        className="px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
            Simple pricing
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Start free.
            <span className="text-white/35"> Scale when you need.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40">
            Everything you need to create and manage certificates for your
            events, without complicated pricing.
          </p>

          <div className="mt-12 rounded-3xl border border-violet-400/20 bg-violet-500/[0.05] p-8 text-left sm:p-10">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm font-semibold text-violet-300">
                  Free
                </div>

                <div className="mt-2 text-4xl font-semibold">
                  ₹0
                  <span className="text-sm font-normal text-white/30">
                    {" "}
                    to get started
                  </span>
                </div>

                <p className="mt-3 max-w-md text-sm text-white/40">
                  Perfect for students, clubs, workshops and small events.
                </p>
              </div>

              <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90">
                Start for free
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
              {[
                "Event management",
                "Certificate templates",
                "Bulk generation",
                "QR verification",
                "CSV / Excel import",
                "Certificate downloads",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/55"
                >
                  <Check size={14} className="text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="px-4 pb-28 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-blue-500/10 px-6 py-20 text-center sm:px-10">
          <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <Award size={22} className="text-violet-300" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
              Stop creating certificates
              <br />
              <span className="text-white/35">one by one.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/40">
              Create your first event and experience a faster way to manage
              certificates.
            </p>

            <button className="group mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90">
              Create your first event
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/[0.06] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
              <Award size={16} />
            </div>

            <span className="text-sm font-semibold">
              Certi<span className="text-violet-400">Flow</span>
            </span>
          </div>

          <p className="text-xs text-white/25">
            © 2026 CertiFlow. Create. Certify. Circulate.
          </p>

          <div className="flex gap-5 text-xs text-white/35">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}