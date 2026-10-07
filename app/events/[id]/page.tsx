"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  FileText,
  Mail,
  QrCode,
  MoreHorizontal,
  Pencil,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Download,
} from "lucide-react";

type Event = {
  id: string;
  name: string;
  description: string;
  type: string;
  date: string;
  startTime: string;
  endTime: string;
  venue: string;
  organizer: string;
  organization: string;
  participants: number;
  certificates: number;
  status: "Draft" | "Upcoming" | "Completed";
  certificateType: string;
  createdAt: string;
  updatedAt: string;
};

const tabs = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "participants",
    label: "Participants",
  },
  {
    id: "certificate",
    label: "Certificate",
  },
  {
    id: "generate",
    label: "Generate",
  },
  {
    id: "delivery",
    label: "Delivery",
  },
];

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const eventId = params.id as string;

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function loadEvent() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `/api/events/${eventId}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to load event."
        );
      }

      setEvent(result.data);
    } catch (error) {
      console.error("Load event error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to load event."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (eventId) {
      loadEvent();
    }
  }, [eventId]);

  async function handleDelete() {
    if (!event) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${event.name}"?`
    );

    if (!confirmed) return;

    try {
      setDeleting(true);

      const response = await fetch(
        `/api/events/${event.id}`,
        {
          method: "DELETE",
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to delete event."
        );
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Delete event error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Failed to delete event."
      );
    } finally {
      setDeleting(false);
    }
  }

  function formatDate(date: string) {
    if (!date) return "Date not set";

    const parsed = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsed.getTime())) {
      return date;
    }

    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  function formatDateShort(date: string) {
    if (!date) return "--";

    const parsed = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsed.getTime())) {
      return date;
    }

    return parsed.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function getStatusClasses(status: Event["status"]) {
    switch (status) {
      case "Completed":
        return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";

      case "Upcoming":
        return "border-blue-400/20 bg-blue-400/10 text-blue-300";

      default:
        return "border-amber-400/20 bg-amber-400/10 text-amber-300";
    }
  }

  function goToTab(tabId: string) {
    if (tabId === "overview") return;

    router.push(`/events/${eventId}/${tabId}`);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#08080c] text-white">
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
              <Loader2
                size={22}
                className="animate-spin text-violet-300"
              />
            </div>

            <p className="text-sm text-white/40">
              Loading event...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !event) {
    return (
      <main className="min-h-screen bg-[#08080c] text-white">
        <div className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6">
          <div className="w-full rounded-3xl border border-red-400/20 bg-red-400/5 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
              <AlertCircle
                size={25}
                className="text-red-300"
              />
            </div>

            <h1 className="mt-5 text-xl font-semibold">
              Event not found
            </h1>

            <p className="mt-2 text-sm leading-6 text-white/40">
              {error ||
                "The event you are looking for does not exist."}
            </p>

            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </button>
          </div>
        </div>
      </main>
    );
  }

  const certificateProgress =
    event.participants > 0
      ? Math.min(
          100,
          Math.round(
            (event.certificates / event.participants) * 100
          )
        )
      : 0;

  return (
    <main className="min-h-screen bg-[#08080c] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[550px] w-[550px] rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Top navigation */}
        <div className="mb-7 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/60 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <ArrowLeft size={16} />
            Dashboard
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowMenu((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition hover:bg-white/[0.06] hover:text-white"
            >
              <MoreHorizontal size={18} />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-12 z-30 w-48 overflow-hidden rounded-2xl border border-white/10 bg-[#111117] p-1.5 shadow-2xl shadow-black/50">
                <button
                  type="button"
                  onClick={() => {
                    setShowMenu(false);
                    alert("Edit event will be connected next.");
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <Pencil size={15} />
                  Edit Event
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowMenu(false);
                    handleDelete();
                  }}
                  disabled={deleting}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-red-300 transition hover:bg-red-500/10 disabled:opacity-50"
                >
                  <Trash2 size={15} />
                  {deleting ? "Deleting..." : "Delete Event"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-violet-500/[0.12] via-white/[0.025] to-fuchsia-500/[0.07] p-6 sm:p-8 lg:p-10">
          <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-medium text-violet-300">
                    {event.type}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium ${getStatusClasses(
                      event.status
                    )}`}
                  >
                    {event.status}
                  </span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {event.name}
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                  {event.description ||
                    "No event description has been added yet."}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={16}
                      className="text-violet-300"
                    />
                    {formatDate(event.date)}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3
                      size={16}
                      className="text-violet-300"
                    />
                    {event.startTime || "--:--"}
                    {event.endTime
                      ? ` – ${event.endTime}`
                      : ""}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="text-violet-300"
                    />
                    {event.venue || "Venue not set"}
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    router.push(
                      `/events/${event.id}/participants`
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  <Users size={16} />
                  Manage Participants
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="mt-6 overflow-x-auto border-b border-white/10">
          <div className="flex min-w-max gap-1">
            {tabs.map((tab) => {
              const active = tab.id === "overview";

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => goToTab(tab.id)}
                  className={`relative px-4 py-3.5 text-sm font-medium transition ${
                    active
                      ? "text-white"
                      : "text-white/35 hover:text-white/70"
                  }`}
                >
                  {tab.label}

                  {active && (
                    <span className="absolute inset-x-3 bottom-[-1px] h-0.5 rounded-full bg-violet-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Users}
            label="Participants"
            value={event.participants}
            description="Registered participants"
          />

          <StatCard
            icon={FileText}
            label="Certificates"
            value={event.certificates}
            description={`${certificateProgress}% generated`}
          />

          <StatCard
            icon={Mail}
            label="Delivery"
            value={
              event.certificates > 0
                ? `${certificateProgress}%`
                : "0%"
            }
            description="Certificate delivery"
          />

          <StatCard
            icon={QrCode}
            label="Verification"
            value="Ready"
            description="QR verification available"
          />
        </section>

        {/* Main content */}
        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    Certificate progress
                  </h2>

                  <p className="mt-1 text-sm text-white/35">
                    Track your certificate generation progress.
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-semibold">
                    {certificateProgress}%
                  </p>

                  <p className="text-xs text-white/30">
                    completed
                  </p>
                </div>
              </div>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all"
                  style={{
                    width: `${certificateProgress}%`,
                  }}
                />
              </div>

              <div className="mt-4 flex justify-between text-xs text-white/30">
                <span>
                  {event.certificates} generated
                </span>

                <span>
                  {event.participants} participants
                </span>
              </div>
            </div>

            {/* Quick actions */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  Event workflow
                </h2>

                <p className="mt-1 text-sm text-white/35">
                  Complete each step to deliver your certificates.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <WorkflowCard
                  icon={Users}
                  title="Participants"
                  description="Import and manage attendees"
                  onClick={() =>
                    router.push(
                      `/events/${event.id}/participants`
                    )
                  }
                  status={
                    event.participants > 0
                      ? `${event.participants} added`
                      : "Not added"
                  }
                />

                <WorkflowCard
                  icon={FileText}
                  title="Certificate Designer"
                  description="Design your certificate"
                  onClick={() =>
                    router.push(
                      `/events/${event.id}/certificate`
                    )
                  }
                  status="Customize"
                />

                <WorkflowCard
                  icon={Sparkles}
                  title="Generate"
                  description="Create personalized certificates"
                  onClick={() =>
                    router.push(
                      `/events/${event.id}/generate`
                    )
                  }
                  status={
                    event.certificates > 0
                      ? "Generated"
                      : "Ready"
                  }
                />

                <WorkflowCard
                  icon={Mail}
                  title="Delivery"
                  description="Send certificates by email"
                  onClick={() =>
                    router.push(
                      `/events/${event.id}/delivery`
                    )
                  }
                  status="Configure"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <aside className="space-y-6">
            {/* Event information */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
              <h2 className="text-lg font-semibold">
                Event information
              </h2>

              <div className="mt-6 space-y-5">
                <InfoRow
                  icon={CalendarDays}
                  label="Date"
                  value={formatDateShort(event.date)}
                />

                <InfoRow
                  icon={Clock3}
                  label="Time"
                  value={`${event.startTime || "--:--"}${
                    event.endTime
                      ? ` – ${event.endTime}`
                      : ""
                  }`}
                />

                <InfoRow
                  icon={MapPin}
                  label="Venue"
                  value={event.venue || "Not set"}
                />

                <InfoRow
                  icon={Users}
                  label="Organizer"
                  value={event.organizer || "Not set"}
                />

                <InfoRow
                  icon={Sparkles}
                  label="Organization"
                  value={
                    event.organization || "Not set"
                  }
                />

                <InfoRow
                  icon={FileText}
                  label="Certificate"
                  value={event.certificateType}
                />
              </div>
            </div>

            {/* QR verification */}
            <div className="overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10">
                <QrCode
                  size={20}
                  className="text-violet-300"
                />
              </div>

              <h3 className="mt-5 font-semibold">
                QR verification
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/40">
                Every generated certificate can include a unique
                QR code that anyone can scan to verify its
                authenticity.
              </p>

              <button
                type="button"
                onClick={() =>
                  router.push(
                    `/events/${event.id}/certificate`
                  )
                }
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
              >
                Configure verification
                <ChevronRight size={15} />
              </button>
            </div>

            {/* Export */}
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-3xl border border-white/10 bg-white/[0.025] p-5 text-left transition hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
                  <Download
                    size={17}
                    className="text-white/60"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Export event data
                  </p>
                  <p className="mt-1 text-xs text-white/30">
                    Download event information
                  </p>
                </div>
              </div>

              <ChevronRight
                size={16}
                className="text-white/25"
              />
            </button>
          </aside>
        </section>
      </div>
    </main>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  description,
}: {
  icon: typeof Users;
  label: string;
  value: string | number;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
          <Icon
            size={18}
            className="text-violet-300"
          />
        </div>

        <CheckCircle2
          size={16}
          className="text-white/15"
        />
      </div>

      <p className="mt-5 text-2xl font-semibold">
        {value}
      </p>

      <p className="mt-1 text-sm font-medium text-white/70">
        {label}
      </p>

      <p className="mt-1 text-xs text-white/30">
        {description}
      </p>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
        <Icon
          size={15}
          className="text-white/45"
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs text-white/25">
          {label}
        </p>

        <p className="mt-1 break-words text-sm text-white/70">
          {value}
        </p>
      </div>
    </div>
  );
}

function WorkflowCard({
  icon: Icon,
  title,
  description,
  status,
  onClick,
}: {
  icon: typeof Users;
  title: string;
  description: string;
  status: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/10 p-4 text-left transition hover:border-violet-400/20 hover:bg-violet-500/[0.04]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] transition group-hover:bg-violet-500/10">
        <Icon
          size={18}
          className="text-white/55 transition group-hover:text-violet-300"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white">
          {title}
        </p>

        <p className="mt-1 truncate text-xs text-white/30">
          {description}
        </p>
      </div>

      <div className="text-right">
        <p className="text-[11px] text-violet-300/70">
          {status}
        </p>

        <ChevronRight
          size={15}
          className="ml-auto mt-1 text-white/20 transition group-hover:translate-x-0.5 group-hover:text-white/50"
        />
      </div>
    </button>
  );
}