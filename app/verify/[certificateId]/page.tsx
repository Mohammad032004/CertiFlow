"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle2,
  Download,
  ExternalLink,
  FileCheck2,
  Hash,
  MapPin,
  QrCode,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

const certificate = {
  id: "CF-2026-CB2-0001",
  name: "Rahul Kumar",
  event: "CodeBlitz 2.0",
  type: "Certificate of Participation",
  position: "Participant",
  date: "12 October 2026",
  venue: "Lucknow Public Post Graduate College",
  organizer: "AI Club",
  issuedDate: "12 October 2026",
};

export default function CertificateVerificationPage() {
  return (
    <main className="min-h-screen bg-[#07070b] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-600/6 blur-[140px]" />

        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 py-6 lg:px-8">
        {/* Navbar */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500 text-white shadow-lg shadow-violet-500/20">
              <Sparkles size={16} />
            </div>

            CertiFlow
          </Link>

          <Link
            href="/"
            className="hidden items-center gap-2 text-sm text-white/35 transition hover:text-white sm:flex"
          >
            Create certificates
            <ExternalLink size={14} />
          </Link>
        </header>

        {/* Verification header */}
        <section className="mx-auto mt-14 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 shadow-[0_0_70px_rgba(16,185,129,0.12)]"
          >
            <CheckCircle2 size={40} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <ShieldCheck size={13} />
              Verified Certificate
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Certificate is valid
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/40">
              This certificate has been successfully verified against the
              CertiFlow verification record.
            </p>
          </motion.div>
        </section>

        {/* Main certificate card */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-2xl">
            {/* Top status */}
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FileCheck2 size={19} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/80">
                    Authentic certificate
                  </p>

                  <p className="mt-1 text-xs text-white/30">
                    Issued and verified through CertiFlow
                  </p>
                </div>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                <Check size={13} />
                Valid
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
              {/* Certificate preview */}
              <div className="border-b border-white/10 p-5 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="relative aspect-[1.414/1] overflow-hidden rounded-2xl border border-violet-300/15 bg-gradient-to-br from-[#24152f] via-[#111117] to-[#09090d] shadow-xl">
                  {/* Glow */}
                  <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

                  <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-fuchsia-500/15 blur-3xl" />

                  {/* Borders */}
                  <div className="absolute inset-4 rounded-xl border border-violet-300/20" />

                  <div className="absolute inset-7 rounded-lg border border-white/5" />

                  <div className="relative flex h-full flex-col items-center justify-between px-8 py-[9%] text-center">
                    {/* Logo */}
                    <div>
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                        <Sparkles size={20} />
                      </div>

                      <p className="mt-3 text-[7px] uppercase tracking-[0.35em] text-white/30">
                        AI CLUB
                      </p>
                    </div>

                    {/* Center */}
                    <div>
                      <p className="text-[clamp(8px,1vw,12px)] uppercase tracking-[0.15em] text-white/35">
                        {certificate.type}
                      </p>

                      <p className="mt-4 text-[clamp(18px,3vw,34px)] font-semibold text-white">
                        {certificate.name}
                      </p>

                      <div className="mx-auto mt-3 h-px w-28 bg-violet-400/30" />

                      <p className="mt-3 text-[clamp(7px,1vw,11px)] text-white/35">
                        for successfully participating in
                      </p>

                      <p className="mt-2 text-[clamp(10px,1.5vw,16px)] font-medium text-violet-300">
                        {certificate.event}
                      </p>

                      <p className="mt-2 text-[clamp(7px,0.9vw,10px)] text-white/30">
                        {certificate.position}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="flex w-full items-end justify-between">
                      <div className="text-left">
                        <div className="h-px w-16 bg-white/20" />

                        <p className="mt-1 text-[6px] text-white/25">
                          {certificate.organizer}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded bg-white">
                        <QrCode
                          size={29}
                          className="text-black"
                        />
                      </div>

                      <div className="text-right">
                        <div className="ml-auto h-px w-16 bg-white/20" />

                        <p className="mt-1 text-[6px] text-white/25">
                          {certificate.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white">
                  <Download size={16} />
                  Download Certificate
                </button>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-white/25">
                  Certificate details
                </p>

                <div className="mt-6 space-y-5">
                  <Detail
                    icon={User}
                    label="Recipient"
                    value={certificate.name}
                  />

                  <Detail
                    icon={FileCheck2}
                    label="Certificate Type"
                    value={certificate.type}
                  />

                  <Detail
                    icon={Sparkles}
                    label="Event"
                    value={certificate.event}
                  />

                  <Detail
                    icon={CalendarDays}
                    label="Event Date"
                    value={certificate.date}
                  />

                  <Detail
                    icon={MapPin}
                    label="Venue"
                    value={certificate.venue}
                  />

                  <Detail
                    icon={Hash}
                    label="Certificate ID"
                    value={certificate.id}
                    mono
                  />
                </div>

                <div className="my-7 h-px bg-white/10" />

                {/* Issuer */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/25">
                    Issued by
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white/75">
                        {certificate.organizer}
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Issued on {certificate.issuedDate}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verification */}
                <div className="mt-7 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />

                    <div>
                      <p className="text-xs font-medium text-emerald-300">
                        Authenticity confirmed
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-white/30">
                        The certificate ID exists in CertiFlow's verification
                        system and matches the issued certificate record.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 px-6 py-4 sm:px-8">
              <div className="flex flex-col justify-between gap-3 text-xs sm:flex-row sm:items-center">
                <p className="text-white/25">
                  Verification powered by CertiFlow
                </p>

                <div className="flex items-center gap-2 text-emerald-400/70">
                  <CheckCircle2 size={13} />
                  Verification record found
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Verification information */}
        <section className="mx-auto mt-7 grid max-w-4xl gap-4 sm:grid-cols-3">
          <InfoCard
            icon={ShieldCheck}
            title="Secure verification"
            description="Every certificate has a unique verification record."
          />

          <InfoCard
            icon={QrCode}
            title="QR powered"
            description="Scan the QR code to instantly verify authenticity."
          />

          <InfoCard
            icon={Hash}
            title="Unique ID"
            description="Each certificate receives a permanent unique ID."
          />
        </section>

        {/* CTA */}
        <section className="mx-auto mb-10 mt-10 max-w-4xl rounded-2xl border border-violet-400/10 bg-violet-500/[0.04] p-6 text-center">
          <p className="text-sm text-white/50">
            Need certificates for your own event?
          </p>

          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Create certificates with CertiFlow
            <ArrowRight size={15} />
          </Link>
        </section>
      </div>
    </main>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
  mono = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-white/35">
        <Icon size={16} />
      </div>

      <div className="min-w-0">
        <p className="text-[11px] text-white/25">
          {label}
        </p>

        <p
          className={`mt-1 text-sm text-white/70 ${
            mono ? "font-mono text-xs" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
        <Icon size={18} />
      </div>

      <h3 className="mt-4 text-sm font-medium text-white/75">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-white/30">
        {description}
      </p>
    </div>
  );
}