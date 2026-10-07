"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Download,
  FileArchive,
  FileText,
  Loader2,
  Mail,
  MoreHorizontal,
  QrCode,
  Send,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";

type Participant = {
  id: number;
  name: string;
  email: string;
  type: string;
  certificateId: string;
  status: "Waiting" | "Generating" | "Generated";
};

const initialParticipants: Participant[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul.kumar@gmail.com",
    type: "Participant",
    certificateId: "CF-2026-CB2-0001",
    status: "Waiting",
  },
  {
    id: 2,
    name: "Aman Singh",
    email: "aman.singh@gmail.com",
    type: "Winner",
    certificateId: "CF-2026-CB2-0002",
    status: "Waiting",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    type: "Participant",
    certificateId: "CF-2026-CB2-0003",
    status: "Waiting",
  },
  {
    id: 4,
    name: "Anjali Verma",
    email: "anjali.verma@gmail.com",
    type: "Volunteer",
    certificateId: "CF-2026-CB2-0004",
    status: "Waiting",
  },
  {
    id: 5,
    name: "Arjun Yadav",
    email: "arjun.yadav@gmail.com",
    type: "Winner",
    certificateId: "CF-2026-CB2-0005",
    status: "Waiting",
  },
  {
    id: 6,
    name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    type: "Participant",
    certificateId: "CF-2026-CB2-0006",
    status: "Waiting",
  },
  {
    id: 7,
    name: "Vivek Mishra",
    email: "vivek.mishra@gmail.com",
    type: "Participant",
    certificateId: "CF-2026-CB2-0007",
    status: "Waiting",
  },
  {
    id: 8,
    name: "Sakshi Singh",
    email: "sakshi.singh@gmail.com",
    type: "Participant",
    certificateId: "CF-2026-CB2-0008",
    status: "Waiting",
  },
];

function StatusBadge({
  status,
}: {
  status: Participant["status"];
}) {
  if (status === "Generated") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
        <CheckCircle2 size={12} />
        Generated
      </span>
    );
  }

  if (status === "Generating") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/15 bg-violet-400/10 px-2.5 py-1 text-xs text-violet-300">
        <Loader2 size={12} className="animate-spin" />
        Generating
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/35">
      Waiting
    </span>
  );
}

export default function GenerateCertificatesPage() {
  const [participants, setParticipants] = useState(initialParticipants);
  const [generating, setGenerating] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const generatedCount = participants.filter(
    (participant) => participant.status === "Generated"
  ).length;

  const total = participants.length;

  useEffect(() => {
    if (!generating) return;

    if (progress >= 100) {
      setGenerating(false);
      setCompleted(true);

      setParticipants((current) =>
        current.map((participant) => ({
          ...participant,
          status: "Generated",
        }))
      );

      return;
    }

    const timer = setTimeout(() => {
      const nextProgress = Math.min(progress + 12.5, 100);

      setProgress(nextProgress);

      const completedRows = Math.floor(
        (nextProgress / 100) * total
      );

      setParticipants((current) =>
        current.map((participant, index) => {
          if (index < completedRows) {
            return {
              ...participant,
              status: "Generated",
            };
          }

          if (index === completedRows) {
            return {
              ...participant,
              status: "Generating",
            };
          }

          return {
            ...participant,
            status: "Waiting",
          };
        })
      );
    }, 350);

    return () => clearTimeout(timer);
  }, [generating, progress, total]);

  function startGeneration() {
    setCompleted(false);
    setProgress(0);
    setGenerating(true);

    setParticipants((current) =>
      current.map((participant) => ({
        ...participant,
        status: "Waiting",
      }))
    );
  }

  return (
    <main className="min-h-screen bg-[#08080c] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-fuchsia-600/5 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 py-6 lg:px-8">
        {/* Top */}
        <div className="flex items-center justify-between">
          <Link
            href="/events/demo/certificate"
            className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition group-hover:-translate-x-1"
            />
            Back to certificate designer
          </Link>

          <span className="text-sm text-white/30">
            CodeBlitz 2.0
          </span>
        </div>

        {/* Header */}
        <section className="mt-9">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                <Sparkles size={13} />
                Certificate Generation
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Generate certificates
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
                Generate personalized certificates for all eligible
                participants using your selected design.
              </p>
            </div>

            {!generating && !completed && (
              <button
                onClick={startGeneration}
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
              >
                <Sparkles size={17} />
                Generate Certificates
              </button>
            )}

            {completed && (
              <Link
                href="/events/demo/delivery"
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
              >
                Continue to Delivery
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </section>

        {/* Progress */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  completed
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-violet-500/10 text-violet-400"
                }`}
              >
                {completed ? (
                  <CheckCircle2 size={23} />
                ) : generating ? (
                  <Loader2 size={23} className="animate-spin" />
                ) : (
                  <FileText size={23} />
                )}
              </div>

              <div>
                <p className="text-sm font-medium text-white/80">
                  {completed
                    ? "Generation completed"
                    : generating
                      ? "Generating certificates..."
                      : "Ready to generate"}
                </p>

                <p className="mt-1 text-xs text-white/30">
                  {completed
                    ? `${total} personalized certificates created successfully`
                    : generating
                      ? `${generatedCount} of ${total} certificates generated`
                      : `${total} participants are ready`}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-2xl font-semibold">
                {Math.round(progress)}%
              </p>

              <p className="mt-1 text-xs text-white/30">
                Complete
              </p>
            </div>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.25 }}
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
            />
          </div>

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 flex flex-col gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4 sm:flex-row sm:items-center"
            >
              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />

              <p className="text-sm text-emerald-300">
                All certificates have been generated and assigned unique
                verification IDs.
              </p>
            </motion.div>
          )}
        </section>

        {/* Stats */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Participants",
              value: total,
              icon: Users,
            },
            {
              label: "Generated",
              value: generatedCount,
              icon: CheckCircle2,
            },
            {
              label: "Unique IDs",
              value: generatedCount,
              icon: QrCode,
            },
            {
              label: "Ready to Send",
              value: generatedCount,
              icon: Mail,
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/40">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-2xl font-semibold">
                      {stat.value}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Main */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035]">
          {/* Table header */}
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-medium">
                Certificate Queue
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Each participant will receive a personalized certificate.
              </p>
            </div>

            {completed && (
              <div className="flex gap-2">
                <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-white/55 transition hover:bg-white/[0.06] hover:text-white">
                  <Download size={15} />
                  Download ZIP
                </button>

                <Link
                  href="/events/demo/delivery"
                  className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-medium text-black transition hover:bg-white/90"
                >
                  <Send size={15} />
                  Send Certificates
                </Link>
              </div>
            )}
          </div>

          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-5 py-4 text-xs uppercase tracking-wider text-white/25">
                    Participant
                  </th>

                  <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/25">
                    Type
                  </th>

                  <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/25">
                    Certificate ID
                  </th>

                  <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/25">
                    Status
                  </th>

                  <th className="w-12 px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {participants.map((participant) => (
                  <motion.tr
                    layout
                    key={participant.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/10 text-sm font-medium text-violet-300">
                          {participant.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white/80">
                            {participant.name}
                          </p>

                          <p className="mt-0.5 text-xs text-white/30">
                            {participant.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/45">
                        {participant.type}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <span className="font-mono text-xs text-white/35">
                        {participant.certificateId}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <StatusBadge status={participant.status} />
                    </td>

                    <td className="px-5 py-4">
                      {participant.status === "Generated" ? (
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 transition hover:bg-white/5 hover:text-white">
                          <Download size={15} />
                        </button>
                      ) : (
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/20">
                          <MoreHorizontal size={16} />
                        </button>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-white/5 md:hidden">
            {participants.map((participant) => (
              <div key={participant.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-sm font-medium text-violet-300">
                    {participant.name.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      {participant.name}
                    </p>

                    <p className="mt-1 truncate text-xs text-white/30">
                      {participant.email}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/40">
                        {participant.type}
                      </span>

                      <StatusBadge status={participant.status} />
                    </div>

                    <p className="mt-3 font-mono text-[10px] text-white/20">
                      {participant.certificateId}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom workflow */}
        {completed && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-r from-violet-500/[0.08] to-fuchsia-500/[0.04] p-6"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Mail size={20} />
                </div>

                <div>
                  <h2 className="font-medium">
                    Your certificates are ready
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Every certificate has a unique ID and QR verification
                    code. The next step is sending them to participants.
                  </p>
                </div>
              </div>

              <Link
                href="/events/demo/delivery"
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
              >
                Configure Delivery
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.section>
        )}

        {/* Error note */}
        <div className="mt-5 flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <XCircle
            size={16}
            className="mt-0.5 shrink-0 text-white/20"
          />

          <p className="text-xs leading-5 text-white/25">
            Generation is currently simulated for the frontend. Later,
            CertiFlow will generate real PDF certificates on the server and
            store them securely.
          </p>
        </div>
      </div>
    </main>
  );
}