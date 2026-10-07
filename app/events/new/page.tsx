"use client";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  FileText,
  MapPin,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const eventTypes = [
  "Hackathon",
  "Workshop",
  "Seminar",
  "Competition",
  "Bootcamp",
  "Conference",
  "Other",
];

const certificateTypes = [
  {
    id: "participation",
    title: "Participation",
    description: "For attendees and participants.",
  },
  {
    id: "achievement",
    title: "Achievement",
    description: "For winners and outstanding performers.",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "For volunteers and event organizers.",
  },
];

export default function CreateEventPage() {
  const [eventType, setEventType] = useState("Hackathon");
  const [certificateType, setCertificateType] =
    useState("participation");

  const [showEventTypes, setShowEventTypes] = useState(false);

  const [form, setForm] = useState({
    name: "",
    organizer: "AI Club",
    date: "",
    venue: "",
    description: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-[#070709] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[35%] top-[-250px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div className="absolute right-[-150px] top-[50%] h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#070709]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 transition hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft size={17} />
            </Link>

            <div>
              <div className="text-xs text-white/30">
                Events
              </div>

              <h1 className="mt-0.5 text-sm font-semibold">
                Create new event
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-[10px] text-white/30 sm:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
              1
            </span>

            Event details

            <div className="mx-1 h-px w-8 bg-white/10" />

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10">
              2
            </span>

            Certificate

            <div className="mx-1 h-px w-8 bg-white/10" />

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10">
              3
            </span>

            Participants
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Form */}
          <section>
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-3 py-1.5 text-[10px] font-medium text-violet-300">
                <Sparkles size={12} />
                New event
              </div>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Tell us about your event
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
                Add the basic information about your event. You can
                customize your certificate and participants later.
              </p>
            </div>

            <div className="space-y-5">
              {/* Event name */}
              <FormField
                label="Event name"
                required
                hint="The name participants will see on their certificate."
              >
                <div className="relative">
                  <FileText
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                  />

                  <input
                    value={form.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    placeholder="e.g. CodeBlitz 2.0"
                    className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />
                </div>
              </FormField>

              {/* Event type + organizer */}
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Event type"
                  required
                >
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setShowEventTypes(!showEventTypes)
                      }
                      className="flex h-12 w-full items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-left text-sm outline-none transition hover:bg-white/[0.04]"
                    >
                      <span>{eventType}</span>

                      <ChevronDown
                        size={16}
                        className={`text-white/30 transition ${
                          showEventTypes
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {showEventTypes && (
                      <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-20 overflow-hidden rounded-xl border border-white/10 bg-[#111116] p-1.5 shadow-2xl">
                        {eventTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setEventType(type);
                              setShowEventTypes(false);
                            }}
                            className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-xs transition ${
                              eventType === type
                                ? "bg-violet-500/10 text-violet-300"
                                : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                            }`}
                          >
                            {type}

                            {eventType === type && (
                              <Check
                                size={14}
                                className="ml-auto"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </FormField>

                <FormField
                  label="Organizer"
                  required
                >
                  <input
                    value={form.organizer}
                    onChange={(e) =>
                      updateField(
                        "organizer",
                        e.target.value
                      )
                    }
                    placeholder="Your organization"
                    className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                  />
                </FormField>
              </div>

              {/* Date + Venue */}
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Event date"
                  required
                >
                  <div className="relative">
                    <CalendarDays
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    />

                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        updateField(
                          "date",
                          e.target.value
                        )
                      }
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-4 text-sm text-white outline-none transition focus:border-violet-400/40 focus:bg-white/[0.04]"
                    />
                  </div>
                </FormField>

                <FormField label="Venue">
                  <div className="relative">
                    <MapPin
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    />

                    <input
                      value={form.venue}
                      onChange={(e) =>
                        updateField(
                          "venue",
                          e.target.value
                        )
                      }
                      placeholder="e.g. Main Auditorium"
                      className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                    />
                  </div>
                </FormField>
              </div>

              {/* Description */}
              <FormField
                label="Description"
                hint="Optional"
              >
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    updateField(
                      "description",
                      e.target.value
                    )
                  }
                  rows={5}
                  placeholder="Tell participants a little about your event..."
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/40 focus:bg-white/[0.04]"
                />
              </FormField>

              {/* Certificate type */}
              <div className="pt-5">
                <div className="mb-4">
                  <label className="text-sm font-semibold">
                    Certificate type
                  </label>

                  <p className="mt-1 text-[11px] text-white/30">
                    Choose the primary type of certificate for this
                    event.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {certificateTypes.map((type) => {
                    const selected =
                      certificateType === type.id;

                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() =>
                          setCertificateType(type.id)
                        }
                        className={`relative rounded-2xl border p-5 text-left transition ${
                          selected
                            ? "border-violet-400/40 bg-violet-500/[0.08]"
                            : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]"
                        }`}
                      >
                        {selected && (
                          <div className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-white">
                            <Check size={12} />
                          </div>
                        )}

                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            selected
                              ? "bg-violet-500/15 text-violet-300"
                              : "bg-white/[0.04] text-white/40"
                          }`}
                        >
                          <Award size={18} />
                        </div>

                        <div className="mt-5 text-sm font-semibold">
                          {type.title}
                        </div>

                        <div className="mt-2 text-[10px] leading-5 text-white/30">
                          {type.description}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col-reverse gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:justify-between">
                <Link
                  href="/dashboard"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 text-sm text-white/50 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <X size={16} />
                  Cancel
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    alert(
                      "Event creation will be connected to the database in the next step."
                    );
                  }}
                  className="group flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Create event
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Preview / Tips */}
          <aside className="lg:pt-[90px]">
            <div className="sticky top-28 space-y-4">
              {/* Event preview */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                      Event preview
                    </div>

                    <div className="mt-1 text-sm font-semibold">
                      {form.name || "Your event name"}
                    </div>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                    <Award
                      size={17}
                      className="text-violet-300"
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <PreviewRow
                    icon={CalendarDays}
                    label="Date"
                    value={
                      form.date
                        ? new Date(
                            form.date
                          ).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "Not selected"
                    }
                  />

                  <PreviewRow
                    icon={MapPin}
                    label="Venue"
                    value={
                      form.venue || "Not specified"
                    }
                  />

                  <PreviewRow
                    icon={Users}
                    label="Organizer"
                    value={
                      form.organizer ||
                      "Not specified"
                    }
                  />

                  <PreviewRow
                    icon={Award}
                    label="Certificate"
                    value={
                      certificateTypes.find(
                        (type) =>
                          type.id ===
                          certificateType
                      )?.title || "Participation"
                    }
                  />
                </div>
              </div>

              {/* Tip */}
              <div className="rounded-2xl border border-violet-400/10 bg-violet-500/[0.05] p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10">
                  <Sparkles
                    size={16}
                    className="text-violet-300"
                  />
                </div>

                <h3 className="mt-4 text-xs font-semibold">
                  What happens next?
                </h3>

                <p className="mt-2 text-[10px] leading-5 text-white/35">
                  After creating your event, you&apos;ll be able
                  to upload participants and design the certificate
                  template.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function FormField({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-xs font-medium text-white/70">
          {label}
          {required && (
            <span className="ml-1 text-violet-400">
              *
            </span>
          )}
        </label>

        {hint && (
          <span className="text-[9px] text-white/20">
            {hint}
          </span>
        )}
      </div>

      {children}
    </div>
  );
}

function PreviewRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-black/10 p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
        <Icon size={14} className="text-white/35" />
      </div>

      <div className="min-w-0">
        <div className="text-[9px] text-white/20">
          {label}
        </div>

        <div className="mt-0.5 truncate text-[11px] text-white/55">
          {value}
        </div>
      </div>
    </div>
  );
}