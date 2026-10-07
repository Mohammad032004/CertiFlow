"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  Download,
  FileText,
  Mail,
  MoreHorizontal,
  Pencil,
  Plus,
  QrCode,
  Send,
  Settings,
  Sparkles,
  Ticket,
  Upload,
  Users,
  Verified,
} from "lucide-react";

const event = {
  name: "CodeBlitz 2.0",
  type: "Hackathon",
  date: "12 October 2026",
  venue: "Lucknow Public Post Graduate College",
  organizer: "AI Club",
  description:
    "A high-energy hackathon where students build innovative solutions using modern technologies.",
  participants: 320,
  certificates: 320,
  sent: 286,
  verified: 142,
  status: "Completed",
};

const stats = [
  {
    label: "Participants",
    value: "320",
    icon: Users,
    description: "Registered participants",
  },
  {
    label: "Certificates",
    value: "320",
    icon: FileText,
    description: "Generated certificates",
  },
  {
    label: "Sent",
    value: "286",
    icon: Send,
    description: "Delivered by email",
  },
  {
    label: "Verified",
    value: "142",
    icon: Verified,
    description: "Certificates verified",
  },
];

const activities = [
  {
    title: "320 certificates generated",
    description: "All participant certificates were generated successfully.",
    time: "Today, 4:32 PM",
    icon: FileText,
  },
  {
    title: "286 certificates delivered",
    description: "Certificates were sent to participant emails.",
    time: "Today, 4:35 PM",
    icon: Mail,
  },
  {
    title: "142 certificates verified",
    description: "Participants and recruiters verified certificates.",
    time: "Today, 5:10 PM",
    icon: QrCode,
  },
];

function StatCard({
  label,
  value,
  icon: Icon,
  description,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-white/45">{label}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{value}</h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
          <Icon size={19} />
        </div>
      </div>

      <p className="mt-3 text-xs text-white/35">{description}</p>
    </motion.div>
  );
}

function ActionCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <motion.div
      whileHover={{ y: -3 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-violet-500/30 hover:bg-white/[0.05]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 transition group-hover:bg-violet-500/15">
        <Icon size={20} />
      </div>

      <h3 className="mt-4 font-medium text-white">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-white/40">{description}</p>

      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-violet-400">
        Open
        <ChevronRight
          size={14}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

export default function EventDetailsPage() {
  return (
    <main className="min-h-screen bg-[#08080c] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-6 lg:px-8">
        {/* Top navigation */}
        <div className="flex items-center justify-between">
          <Link
            href="/dashboard"
            className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition group-hover:-translate-x-1"
            />
            Back to dashboard
          </Link>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white sm:flex sm:items-center sm:gap-2">
              <Download size={16} />
              Export
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition hover:bg-white/[0.06] hover:text-white">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Event header */}
        <section className="mt-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                  {event.type}
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  {event.status}
                </span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {event.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
                {event.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/45">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-white/35" />
                  {event.date}
                </div>

                <div className="flex items-center gap-2">
                  <Ticket size={16} className="text-white/35" />
                  {event.venue}
                </div>

                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-white/35" />
                  {event.organizer}
                </div>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">
              <Pencil size={16} />
              Edit Event
            </button>
          </div>
        </section>

        {/* Tabs */}
        <div className="mt-9 overflow-x-auto border-b border-white/10">
          <div className="flex min-w-max gap-7">
            {[
              { label: "Overview", active: true },
              { label: "Participants", href: `/events/demo/participants` },
              { label: "Certificate" },
              { label: "Delivery" },
              { label: "Verification" },
              { label: "Settings" },
            ].map((tab) => {
              const content = (
                <div
                  className={`relative py-4 text-sm ${
                    tab.active
                      ? "font-medium text-white"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab.label}

                  {tab.active && (
                    <motion.div
                      layoutId="event-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-violet-500"
                    />
                  )}
                </div>
              );

              return tab.href ? (
                <Link key={tab.label} href={tab.href}>
                  {content}
                </Link>
              ) : (
                <button key={tab.label}>{content}</button>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        {/* Main content */}
        <section className="mt-7 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          {/* Left */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-medium text-white">
                    Certificate Progress
                  </h2>
                  <p className="mt-1 text-sm text-white/40">
                    Track certificate generation and delivery.
                  </p>
                </div>

                <span className="text-sm font-medium text-violet-400">
                  100%
                </span>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-lg font-semibold">320</p>
                  <p className="text-xs text-white/35">Generated</p>
                </div>

                <div>
                  <p className="text-lg font-semibold">286</p>
                  <p className="text-xs text-white/35">Delivered</p>
                </div>

                <div>
                  <p className="text-lg font-semibold">142</p>
                  <p className="text-xs text-white/35">Verified</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div>
              <div className="mb-4">
                <h2 className="font-medium text-white">Quick Actions</h2>
                <p className="mt-1 text-sm text-white/40">
                  Manage your event certificate workflow.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <ActionCard
                  icon={Users}
                  title="Import Participants"
                  description="Upload an Excel or CSV file containing participant data."
                  href="/events/demo/participants"
                />

                <ActionCard
                  icon={Sparkles}
                  title="Design Certificate"
                  description="Create your certificate using a template and dynamic fields."
                />

                <ActionCard
                  icon={Send}
                  title="Send Certificates"
                  description="Deliver generated certificates directly to participant emails."
                />

                <ActionCard
                  icon={QrCode}
                  title="Verification"
                  description="View QR verification activity and certificate authenticity."
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Certificate preview */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <h2 className="font-medium">Certificate</h2>
                  <p className="mt-1 text-xs text-white/35">
                    Current certificate design
                  </p>
                </div>

                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 hover:bg-white/[0.05] hover:text-white">
                  <MoreHorizontal size={17} />
                </button>
              </div>

              <div className="p-5">
                <div className="relative aspect-[1.414/1] overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-br from-[#17121f] via-[#0f0e14] to-[#191020] p-6">
                  <div className="absolute left-0 top-0 h-24 w-24 rounded-full bg-violet-500/15 blur-2xl" />
                  <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl" />

                  <div className="relative flex h-full flex-col items-center justify-between text-center">
                    <div>
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                        <Sparkles size={17} />
                      </div>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/35">
                        Certificate of Participation
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] text-white/35">
                        This certificate is proudly presented to
                      </p>

                      <p className="mt-2 text-lg font-semibold text-white">
                        Participant Name
                      </p>

                      <div className="mx-auto mt-2 h-px w-32 bg-violet-400/30" />

                      <p className="mt-2 text-[8px] text-white/35">
                        for participating in
                      </p>

                      <p className="mt-1 text-xs font-medium text-violet-300">
                        {event.name}
                      </p>
                    </div>

                    <div className="flex w-full items-end justify-between">
                      <div className="text-left">
                        <div className="h-px w-16 bg-white/20" />
                        <p className="mt-1 text-[7px] text-white/30">
                          Organizer
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5">
                        <QrCode size={23} className="text-white/60" />
                      </div>

                      <div className="text-right">
                        <div className="ml-auto h-px w-16 bg-white/20" />
                        <p className="mt-1 text-[7px] text-white/30">
                          Date
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-sm text-white/65 transition hover:bg-white/[0.06] hover:text-white">
                  <FileText size={16} />
                  Open Certificate Designer
                </button>
              </div>
            </div>

            {/* Activity */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.035]">
              <div className="border-b border-white/10 px-5 py-4">
                <h2 className="font-medium">Recent Activity</h2>
              </div>

              <div className="divide-y divide-white/5">
                {activities.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={activity.title}
                      className="flex gap-3 px-5 py-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                        <Icon size={16} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-white/80">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-white/35">
                          {activity.description}
                        </p>

                        <p className="mt-1 text-[11px] text-white/25">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-8 overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-r from-violet-500/[0.08] to-fuchsia-500/[0.05] p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-violet-400" />
                <h2 className="font-medium">Ready for the next step?</h2>
              </div>

              <p className="mt-2 text-sm text-white/40">
                Import participants and generate personalized certificates in
                bulk.
              </p>
            </div>

            <Link
              href="/events/demo/participants"
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Plus size={16} />
              Add Participants
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}