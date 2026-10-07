"use client";

import {
  Activity,
  ArrowUpRight,
  Award,
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  FileCheck2,
  LayoutDashboard,
  Mail,
  Menu,
  Plus,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const events = [
  {
    name: "CodeBlitz 2.0",
    type: "Hackathon",
    date: "12 Oct 2026",
    participants: 320,
    certificates: 320,
    status: "Completed",
  },
  {
    name: "AI & ML Workshop",
    type: "Workshop",
    date: "18 Oct 2026",
    participants: 85,
    certificates: 0,
    status: "Upcoming",
  },
  {
    name: "TechX '26",
    type: "Technology Event",
    date: "24 Oct 2026",
    participants: 210,
    certificates: 0,
    status: "Upcoming",
  },
  {
    name: "Cybersecurity Bootcamp",
    type: "Bootcamp",
    date: "02 Nov 2026",
    participants: 150,
    certificates: 0,
    status: "Draft",
  },
];

const activities = [
  {
    icon: FileCheck2,
    title: "Certificates generated",
    description: "CodeBlitz 2.0",
    time: "12 minutes ago",
    iconStyle: "text-violet-400 bg-violet-500/10",
  },
  {
    icon: Mail,
    title: "Certificates delivered",
    description: "318 emails sent successfully",
    time: "28 minutes ago",
    iconStyle: "text-blue-400 bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Participants imported",
    description: "320 participants added",
    time: "1 hour ago",
    iconStyle: "text-emerald-400 bg-emerald-500/10",
  },
  {
    icon: Award,
    title: "Event completed",
    description: "CodeBlitz 2.0",
    time: "Yesterday",
    iconStyle: "text-amber-400 bg-amber-500/10",
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070709] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[20%] top-[-200px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[140px]" />

        <div className="absolute right-[-100px] top-[40%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.05] blur-[130px]" />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 w-[260px] border-r border-white/[0.07] bg-[#09090c] transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-[76px] items-center justify-between border-b border-white/[0.07] px-5">
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                <Award size={18} strokeWidth={2.5} />
              </div>

              <div>
                <div className="text-[15px] font-bold">
                  Certi<span className="text-violet-400">Flow</span>
                </div>

                <div className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                  Organizer
                </div>
              </div>
            </a>

            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-white/40 hover:bg-white/5 hover:text-white lg:hidden"
            >
              <X size={18} />
            </button>
          </div>

          {/* Workspace */}
          <div className="border-b border-white/[0.07] p-4">
            <button className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-left transition hover:bg-white/[0.05]">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold">
                AI
              </div>

              <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-semibold">
                  AI Club
                </div>

                <div className="truncate text-[10px] text-white/30">
                  Organization workspace
                </div>
              </div>

              <ChevronDown size={14} className="text-white/30" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-3 py-5">
            <div className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
              Workspace
            </div>

            <nav className="space-y-1">
              <SidebarItem
                icon={LayoutDashboard}
                label="Overview"
                active
              />

              <SidebarItem
                icon={CalendarDays}
                label="Events"
                badge="4"
              />

              <SidebarItem
                icon={Award}
                label="Certificates"
              />

              <SidebarItem
                icon={Users}
                label="Participants"
              />

              <SidebarItem
                icon={BarChart3}
                label="Analytics"
              />
            </nav>

            <div className="mb-3 mt-8 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
              Manage
            </div>

            <nav className="space-y-1">
              <SidebarItem
                icon={Sparkles}
                label="Templates"
              />

              <SidebarItem
                icon={ShieldCheck}
                label="Verification"
              />

              <SidebarItem
                icon={Settings}
                label="Settings"
              />
            </nav>
          </div>

          {/* Help card */}
          <div className="border-t border-white/[0.07] p-4">
            <div className="rounded-xl border border-violet-400/10 bg-violet-500/[0.05] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">
                <Sparkles size={15} className="text-violet-300" />
              </div>

              <div className="mt-3 text-xs font-semibold">
                Need help?
              </div>

              <p className="mt-1 text-[10px] leading-4 text-white/30">
                Learn how to create and distribute certificates.
              </p>

              <button className="mt-3 text-[10px] font-medium text-violet-300 hover:text-violet-200">
                View guide →
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}

      <div className="lg:pl-[260px]">
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-white/[0.07] bg-[#070709]/80 backdrop-blur-xl">
          <div className="flex h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5 text-white/60 hover:text-white lg:hidden"
              >
                <Menu size={19} />
              </button>

              <div>
                <div className="text-xs text-white/30">
                  Workspace
                </div>

                <h1 className="mt-0.5 text-sm font-semibold">
                  Overview
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Notification */}
              <button className="relative rounded-xl border border-white/[0.08] bg-white/[0.025] p-2.5 text-white/50 transition hover:bg-white/[0.05] hover:text-white">
                <Bell size={17} />

                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
              </button>

              {/* Profile */}
              <button className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] p-1.5 pr-3 transition hover:bg-white/[0.05]">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-[10px] font-bold">
                  IA
                </div>

                <div className="hidden text-left sm:block">
                  <div className="text-[11px] font-semibold">
                    Irfan Ansari
                  </div>

                  <div className="text-[9px] text-white/30">
                    Organizer
                  </div>
                </div>

                <ChevronDown
                  size={13}
                  className="hidden text-white/30 sm:block"
                />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1500px]">
            {/* Greeting */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="text-sm text-white/30">
                  Wednesday, October 7, 2026
                </div>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Good evening, Irfan 👋
                </h2>

                <p className="mt-2 text-sm text-white/35">
                  Here&apos;s what&apos;s happening with your events.
                </p>
              </div>

              <button className="group flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90">
                <Plus size={17} />
                Create event
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                icon={CalendarDays}
                title="Total events"
                value="12"
                change="+3 this month"
                iconClass="bg-violet-500/10 text-violet-300"
              />

              <StatCard
                icon={Award}
                title="Certificates generated"
                value="842"
                change="+128 this month"
                iconClass="bg-blue-500/10 text-blue-300"
              />

              <StatCard
                icon={Mail}
                title="Certificates delivered"
                value="790"
                change="93.8% delivery rate"
                iconClass="bg-emerald-500/10 text-emerald-300"
              />

              <StatCard
                icon={ShieldCheck}
                title="Certificates verified"
                value="286"
                change="+42 this month"
                iconClass="bg-amber-500/10 text-amber-300"
              />
            </div>

            {/* Main grid */}
            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
              {/* Events */}
              <section className="rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5 sm:px-6">
                  <div>
                    <h3 className="text-sm font-semibold">
                      Recent events
                    </h3>

                    <p className="mt-1 text-[11px] text-white/30">
                      Manage your latest events and certificates.
                    </p>
                  </div>

                  <button className="flex items-center gap-1 text-xs text-white/40 transition hover:text-white">
                    View all
                    <ChevronRight size={13} />
                  </button>
                </div>

                {/* Desktop table */}
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/[0.05] text-left">
                        <th className="px-6 py-3 text-[9px] font-medium uppercase tracking-wider text-white/25">
                          Event
                        </th>

                        <th className="px-4 py-3 text-[9px] font-medium uppercase tracking-wider text-white/25">
                          Date
                        </th>

                        <th className="px-4 py-3 text-[9px] font-medium uppercase tracking-wider text-white/25">
                          Participants
                        </th>

                        <th className="px-4 py-3 text-[9px] font-medium uppercase tracking-wider text-white/25">
                          Certificates
                        </th>

                        <th className="px-4 py-3 text-[9px] font-medium uppercase tracking-wider text-white/25">
                          Status
                        </th>

                        <th className="px-6 py-3" />
                      </tr>
                    </thead>

                    <tbody>
                      {events.map((event) => (
                        <tr
                          key={event.name}
                          className="group border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02]"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                                <Award
                                  size={15}
                                  className="text-violet-300"
                                />
                              </div>

                              <div>
                                <div className="text-xs font-semibold">
                                  {event.name}
                                </div>

                                <div className="mt-0.5 text-[9px] text-white/25">
                                  {event.type}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-xs text-white/45">
                            {event.date}
                          </td>

                          <td className="px-4 py-4 text-xs text-white/45">
                            {event.participants}
                          </td>

                          <td className="px-4 py-4 text-xs text-white/45">
                            {event.certificates}
                          </td>

                          <td className="px-4 py-4">
                            <StatusBadge status={event.status} />
                          </td>

                          <td className="px-6 py-4 text-right">
                            <button className="rounded-lg p-2 text-white/25 opacity-0 transition hover:bg-white/5 hover:text-white group-hover:opacity-100">
                              <ChevronRight size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="divide-y divide-white/[0.05] md:hidden">
                  {events.map((event) => (
                    <div key={event.name} className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                            <Award
                              size={15}
                              className="text-violet-300"
                            />
                          </div>

                          <div>
                            <div className="text-xs font-semibold">
                              {event.name}
                            </div>

                            <div className="mt-1 text-[9px] text-white/25">
                              {event.type}
                            </div>
                          </div>
                        </div>

                        <StatusBadge status={event.status} />
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3">
                        <MiniStat
                          label="Date"
                          value={event.date}
                        />

                        <MiniStat
                          label="People"
                          value={String(event.participants)}
                        />

                        <MiniStat
                          label="Certificates"
                          value={String(event.certificates)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Activity */}
              <section className="rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5">
                  <div>
                    <h3 className="text-sm font-semibold">
                      Recent activity
                    </h3>

                    <p className="mt-1 text-[11px] text-white/30">
                      Latest workspace activity.
                    </p>
                  </div>

                  <Activity
                    size={16}
                    className="text-white/25"
                  />
                </div>

                <div className="divide-y divide-white/[0.05]">
                  {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (
                      <div
                        key={activity.title}
                        className="flex gap-3 px-5 py-4"
                      >
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activity.iconStyle}`}
                        >
                          <Icon size={14} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-medium">
                            {activity.title}
                          </div>

                          <div className="mt-1 truncate text-[10px] text-white/30">
                            {activity.description}
                          </div>

                          <div className="mt-1.5 text-[9px] text-white/20">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-white/[0.07] p-4">
                  <button className="flex w-full items-center justify-center gap-1 rounded-xl border border-white/[0.07] py-2.5 text-[11px] text-white/40 transition hover:bg-white/[0.03] hover:text-white">
                    View activity
                    <ChevronRight size={13} />
                  </button>
                </div>
              </section>
            </div>

            {/* Quick actions */}
            <section className="mt-6">
              <div className="mb-4">
                <h3 className="text-sm font-semibold">
                  Quick actions
                </h3>

                <p className="mt-1 text-[11px] text-white/30">
                  Common tasks for managing your certificates.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <QuickAction
                  icon={Plus}
                  title="Create event"
                  description="Start a new event"
                />

                <QuickAction
                  icon={Sparkles}
                  title="Design certificate"
                  description="Create a certificate template"
                />

                <QuickAction
                  icon={Users}
                  title="Import participants"
                  description="Upload CSV or Excel"
                />

                <QuickAction
                  icon={ShieldCheck}
                  title="Verify certificate"
                  description="Check certificate authenticity"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SidebarItem({
  icon: Icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition ${
        active
          ? "bg-white/[0.07] text-white"
          : "text-white/40 hover:bg-white/[0.04] hover:text-white"
      }`}
    >
      <Icon
        size={16}
        className={active ? "text-violet-300" : "text-white/35"}
      />

      <span className="flex-1">{label}</span>

      {badge && (
        <span className="rounded-md bg-white/[0.07] px-1.5 py-0.5 text-[9px] text-white/35">
          {badge}
        </span>
      )}
    </button>
  );
}

function StatCard({
  icon: Icon,
  title,
  value,
  change,
  iconClass,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  change: string;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:border-white/[0.12]">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={18} />
        </div>

        <ArrowUpRight
          size={15}
          className="text-white/15"
        />
      </div>

      <div className="mt-5 text-2xl font-semibold tracking-tight">
        {value}
      </div>

      <div className="mt-1 text-xs text-white/35">
        {title}
      </div>

      <div className="mt-3 text-[10px] text-emerald-400/70">
        {change}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Completed:
      "bg-emerald-500/10 text-emerald-400 border-emerald-400/10",
    Upcoming:
      "bg-blue-500/10 text-blue-400 border-blue-400/10",
    Draft:
      "bg-white/[0.05] text-white/40 border-white/10",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-[9px] uppercase tracking-wider text-white/20">
        {label}
      </div>

      <div className="mt-1 text-xs text-white/55">
        {value}
      </div>
    </div>
  );
}

function QuickAction({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <button className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 text-left transition hover:border-violet-400/20 hover:bg-white/[0.04]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
        <Icon
          size={17}
          className="text-violet-300 transition group-hover:scale-110"
        />
      </div>

      <div>
        <div className="text-xs font-semibold">
          {title}
        </div>

        <div className="mt-1 text-[10px] text-white/30">
          {description}
        </div>
      </div>

      <ChevronRight
        size={14}
        className="ml-auto text-white/15 transition group-hover:translate-x-0.5 group-hover:text-white/40"
      />
    </button>
  );
}