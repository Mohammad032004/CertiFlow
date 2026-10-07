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
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute left-[10%] top-[35%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-[-100px] top-[55%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black shadow-lg shadow-violet-500/20">
                <Award size={19} strokeWidth={2.5} />
              </div>

              <div>
                <div className="text-[15px] font-bold tracking-tight">
                  Certi<span className="text-violet-400">Flow</span>
                </div>
                <div className="hidden text-[9px] font-medium uppercase tracking-[0.2em] text-white/35 sm:block">
                  Digital Certificates
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm text-white/55 transition hover:text-white"
              >
                How it works
              </a>
              <a
                href="#templates"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Templates
              </a>
              <a
                href="#pricing"
                className="text-sm text-white/55 transition hover:text-white"
              >
                Pricing
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 md:flex">
              <button className="rounded-xl px-4 py-2 text-sm font-medium text-white/65 transition hover:text-white">
                Sign in
              </button>

              <button className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
                Get started
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg p-2 text-white/70 md:hidden"
              aria-label="Toggle menu"
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
              <div className="flex flex-col gap-1">
                {["Features", "How it works", "Templates", "Pricing"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                      onClick={() => setMobileMenu(false)}
                      className="rounded-xl px-4 py-3 text-sm text-white/65 hover:bg-white/5 hover:text-white"
                    >
                      {item}
                    </a>
                  )
                )}

                <button className="mt-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">
                  Get started
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-4 pb-24 pt-40 sm:px-6 sm:pt-48 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            {/* Hero Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-xs font-medium text-violet-300"
              >
                <Sparkles size={13} />
                Certificate automation, simplified
                <ChevronRight size={13} className="text-violet-400/60" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
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
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg"
              >
                Design beautiful certificates, generate hundreds in seconds,
                and send them directly to your participants. No repetitive
                editing. No manual emails.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <button className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black shadow-xl shadow-white/5 transition hover:bg-white/90">
                  Create your first event
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-white/75 transition hover:bg-white/[0.07] hover:text-white">
                  <Award size={16} />
                  Explore templates
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/35"
              >
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
              </motion.div>
            </div>

            {/* Certificate Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[560px]"
            >
              {/* Glow */}
              <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[90px]" />

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute -right-3 -top-5 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#111116]/90 px-3 py-2 shadow-2xl backdrop-blur-xl sm:-right-8">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10">
                    <FileCheck2 size={14} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-white">
                      Certificate generated
                    </div>
                    <div className="text-[9px] text-white/35">
                      Just now
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#111116]/90 px-3 py-2 shadow-2xl backdrop-blur-xl sm:-left-8">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10">
                    <Mail size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-white">
                      Delivered successfully
                    </div>
                    <div className="text-[9px] text-white/35">
                      participant@email.com
                    </div>
                  </div>
                </div>

                {/* Certificate */}
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#f7f5ef] p-2 shadow-2xl shadow-violet-950/30 sm:p-3">
                  <div className="relative aspect-[1.414/1] overflow-hidden border border-[#b59a65]/30 bg-[#f9f7f1]">
                    {/* Certificate decorative corners */}
                    <div className="absolute left-3 top-3 h-12 w-12 border-l border-t border-[#b59a65]/50" />
                    <div className="absolute right-3 top-3 h-12 w-12 border-r border-t border-[#b59a65]/50" />
                    <div className="absolute bottom-3 left-3 h-12 w-12 border-b border-l border-[#b59a65]/50" />
                    <div className="absolute bottom-3 right-3 h-12 w-12 border-b border-r border-[#b59a65]/50" />

                    <div className="flex h-full flex-col items-center justify-center px-8 text-center text-[#24211d] sm:px-14">
                      <div className="mb-2 text-[7px] font-semibold uppercase tracking-[0.35em] text-[#9b8250] sm:text-[9px]">
                        CertiFlow presents
                      </div>

                      <div className="mb-2 font-serif text-2xl tracking-wide sm:text-4xl">
                        Certificate
                      </div>

                      <div className="mb-4 text-[8px] uppercase tracking-[0.25em] text-[#8b7a5b] sm:text-[10px]">
                        of participation
                      </div>

                      <div className="h-px w-24 bg-[#b59a65]/40" />

                      <div className="my-4 font-serif text-xl italic sm:text-3xl">
                        Rahul Sharma
                      </div>

                      <p className="max-w-[340px] text-[7px] leading-4 text-[#777066] sm:text-[10px] sm:leading-5">
                        This certificate is proudly presented in recognition
                        of participation in
                      </p>

                      <div className="mt-2 text-xs font-bold sm:text-sm">
                        CodeBlitz 2.0
                      </div>

                      <div className="mt-5 flex w-full items-end justify-between">
                        <div className="text-left">
                          <div className="mb-1 h-px w-16 bg-[#8e7c5b]/50 sm:w-24" />
                          <div className="text-[6px] text-[#777066] sm:text-[8px]">
                            AI Club
                          </div>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center border border-[#b59a65]/40 bg-white sm:h-14 sm:w-14">
                          <QrCode
                            size={26}
                            strokeWidth={1.2}
                            className="text-[#3e382f] sm:h-9 sm:w-9"
                          />
                        </div>

                        <div className="text-right">
                          <div className="mb-1 h-px w-16 bg-[#8e7c5b]/50 sm:w-24" />
                          <div className="text-[6px] text-[#777066] sm:text-[8px]">
                            Organizer
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Number */}
              <div className="mt-10 text-center">
                <span className="text-xs text-white/30">
                  Powered by intelligent certificate automation
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 py-7 text-xs text-white/35 sm:gap-x-14">
          <span className="font-medium uppercase tracking-[0.18em]">
            Built for
          </span>
          <span>🎓 Colleges</span>
          <span>💻 Hackathons</span>
          <span>🤖 AI Clubs</span>
          <span>🎤 Workshops</span>
          <span>🏆 Competitions</span>
          <span>🏢 Organizations</span>
        </div>
      </section>

      {/* Feature Preview */}
      <section id="features" className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Everything automated
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              From participant list to
              <span className="text-white/35"> delivered certificate.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-white/45">
              CertiFlow removes the repetitive work from certificate
              management, so you can focus on running great events.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Upload,
                title: "Import participants",
                description:
                  "Upload your Excel or CSV file and map participant details automatically.",
              },
              {
                icon: Zap,
                title: "Generate in seconds",
                description:
                  "Create hundreds of personalized certificates from a single template.",
              },
              {
                icon: Mail,
                title: "Send automatically",
                description:
                  "Deliver certificates directly to participant inboxes with one click.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      size={20}
                      className="text-violet-300 transition group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-lg font-semibold">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.03] to-blue-500/10 px-6 py-20 text-center sm:px-10">
          <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <Award size={22} className="text-violet-300" />
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Your next event deserves
              <br />
              <span className="text-white/40">better certificates.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/40">
              Create your first event for free and experience automated
              certificate generation.
            </p>

            <button className="group mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90">
              Get started for free
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}