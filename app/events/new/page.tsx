"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  FileText,
  MapPin,
  Sparkles,
  Users,
  Loader2,
  AlertCircle,
} from "lucide-react";

const eventTypes = [
  {
    id: "Hackathon",
    label: "Hackathon",
    description: "Coding competitions and innovation challenges",
    icon: "⚡",
  },
  {
    id: "Workshop",
    label: "Workshop",
    description: "Hands-on learning and technical sessions",
    icon: "🧠",
  },
  {
    id: "Conference",
    label: "Conference",
    description: "Talks, sessions and professional events",
    icon: "🎤",
  },
  {
    id: "Bootcamp",
    label: "Bootcamp",
    description: "Intensive multi-session training",
    icon: "🚀",
  },
  {
    id: "Competition",
    label: "Competition",
    description: "Technical or academic competitions",
    icon: "🏆",
  },
  {
    id: "Other",
    label: "Other",
    description: "Any other type of event",
    icon: "✨",
  },
];

const certificateTypes = [
  {
    id: "Participation Certificate",
    title: "Participation Certificate",
    description: "For participants who attend the event",
  },
  {
    id: "Achievement Certificate",
    title: "Achievement Certificate",
    description: "For winners and special achievements",
  },
  {
    id: "Completion Certificate",
    title: "Completion Certificate",
    description: "For successfully completing a program",
  },
];

export default function CreateEventPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "Hackathon",
    date: "",
    startTime: "",
    endTime: "",
    venue: "",
    organizer: "Irfan Ansari",
    organization: "AI Club",
    certificateType: "Participation Certificate",
  });

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function validateStepOne() {
    if (!form.name.trim()) {
      setError("Please enter an event name.");
      return false;
    }

    if (!form.type) {
      setError("Please select an event type.");
      return false;
    }

    if (!form.date) {
      setError("Please select an event date.");
      return false;
    }

    return true;
  }

  function validateStepTwo() {
    if (!form.startTime) {
      setError("Please select a start time.");
      return false;
    }

    if (!form.endTime) {
      setError("Please select an end time.");
      return false;
    }

    if (!form.venue.trim()) {
      setError("Please enter the event venue.");
      return false;
    }

    return true;
  }

  function nextStep() {
    setError("");

    if (step === 1 && !validateStepOne()) {
      return;
    }

    if (step === 2 && !validateStepTwo()) {
      return;
    }

    setStep((current) => Math.min(current + 1, 3));
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  }

  async function handleCreateEvent(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Event name is required.");
      setStep(1);
      return;
    }

    setIsCreating(true);
    setError("");

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to create event."
        );
      }

      const createdEvent = result.data;

      router.push(`/events/${createdEvent.id}`);
    } catch (error) {
      console.error("Create event error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while creating the event."
      );
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#08080c] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>

          <div className="hidden items-center gap-2 text-sm text-white/40 sm:flex">
            <Sparkles size={15} />
            CertiFlow
          </div>
        </div>

        {/* Page heading */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-xs font-medium text-violet-300">
            <Sparkles size={13} />
            Event Setup
          </div>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Create a new event
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45 sm:text-base">
            Set up your event, add participants and generate
            personalized certificates when you are ready.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-10">
          <div className="flex items-center">
            {[1, 2, 3].map((item, index) => {
              const active = step === item;
              const completed = step > item;

              return (
                <div
                  key={item}
                  className="flex flex-1 items-center"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
                        completed
                          ? "border-violet-400 bg-violet-500 text-white"
                          : active
                          ? "border-violet-400/60 bg-violet-500/15 text-violet-300"
                          : "border-white/10 bg-white/[0.03] text-white/35"
                      }`}
                    >
                      {completed ? (
                        <Check size={16} />
                      ) : (
                        item
                      )}
                    </div>

                    <div className="hidden sm:block">
                      <p
                        className={`text-sm font-medium ${
                          active || completed
                            ? "text-white"
                            : "text-white/35"
                        }`}
                      >
                        {item === 1
                          ? "Event details"
                          : item === 2
                          ? "Schedule"
                          : "Certificate"}
                      </p>

                      <p className="text-xs text-white/30">
                        {item === 1
                          ? "Basic information"
                          : item === 2
                          ? "Date & venue"
                          : "Certificate setup"}
                      </p>
                    </div>
                  </div>

                  {index < 2 && (
                    <div
                      className={`mx-4 h-px flex-1 ${
                        step > item
                          ? "bg-violet-500/50"
                          : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            <AlertCircle
              size={18}
              className="mt-0.5 shrink-0"
            />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleCreateEvent}>
          {/* STEP 1 */}
          {step === 1 && (
            <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold">
                    Event information
                  </h2>
                  <p className="mt-1 text-sm text-white/40">
                    Tell us about the event you are organizing.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                      Event name
                    </label>

                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="e.g. CodeBlitz 3.0"
                      className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/50 focus:bg-white/[0.04]"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                      Description
                    </label>

                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        updateField(
                          "description",
                          e.target.value
                        )
                      }
                      rows={5}
                      placeholder="Briefly describe your event..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-violet-400/50 focus:bg-white/[0.04]"
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <label className="mb-3 block text-sm font-medium text-white/80">
                      Event type
                    </label>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {eventTypes.map((type) => {
                        const selected =
                          form.type === type.id;

                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() =>
                              updateField("type", type.id)
                            }
                            className={`rounded-2xl border p-4 text-left transition ${
                              selected
                                ? "border-violet-400/50 bg-violet-500/10"
                                : "border-white/10 bg-black/10 hover:border-white/20 hover:bg-white/[0.03]"
                            }`}
                          >
                            <div className="mb-3 text-2xl">
                              {type.icon}
                            </div>

                            <p
                              className={`text-sm font-semibold ${
                                selected
                                  ? "text-violet-200"
                                  : "text-white"
                              }`}
                            >
                              {type.label}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-white/35">
                              {type.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Side preview */}
              <aside className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.025] to-fuchsia-500/5 p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
                  <Sparkles
                    size={21}
                    className="text-violet-300"
                  />
                </div>

                <h3 className="text-lg font-semibold">
                  Your event workspace
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  After creating the event, you will be able
                  to import participants, design certificates,
                  generate certificates and send them by email.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    ["Participants", Users],
                    ["Certificate Designer", FileText],
                    ["QR Verification", Sparkles],
                  ].map(([label, Icon]) => {
                    const IconComponent =
                      Icon as typeof Users;

                    return (
                      <div
                        key={label as string}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05]">
                          <IconComponent
                            size={16}
                            className="text-white/60"
                          />
                        </div>

                        <span className="text-sm text-white/60">
                          {label as string}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </aside>
            </section>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold">
                    Schedule & location
                  </h2>

                  <p className="mt-1 text-sm text-white/40">
                    Choose when and where your event will happen.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Date */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                      Event date
                    </label>

                    <div className="relative">
                      <CalendarDays
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
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
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none focus:border-violet-400/50"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">
                        Start time
                      </label>

                      <div className="relative">
                        <Clock3
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          type="time"
                          value={form.startTime}
                          onChange={(e) =>
                            updateField(
                              "startTime",
                              e.target.value
                            )
                          }
                          className="h-12 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none focus:border-violet-400/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">
                        End time
                      </label>

                      <div className="relative">
                        <Clock3
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          type="time"
                          value={form.endTime}
                          onChange={(e) =>
                            updateField(
                              "endTime",
                              e.target.value
                            )
                          }
                          className="h-12 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none focus:border-violet-400/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Venue */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                      Venue
                    </label>

                    <div className="relative">
                      <MapPin
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />

                      <input
                        type="text"
                        value={form.venue}
                        onChange={(e) =>
                          updateField(
                            "venue",
                            e.target.value
                          )
                        }
                        placeholder="e.g. Main Auditorium"
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-violet-400/50"
                      />
                    </div>
                  </div>

                  {/* Organizer */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">
                        Organizer
                      </label>

                      <input
                        type="text"
                        value={form.organizer}
                        onChange={(e) =>
                          updateField(
                            "organizer",
                            e.target.value
                          )
                        }
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-violet-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/80">
                        Organization
                      </label>

                      <input
                        type="text"
                        value={form.organization}
                        onChange={(e) =>
                          updateField(
                            "organization",
                            e.target.value
                          )
                        }
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-violet-400/50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-white/[0.025] p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10">
                    <CalendarDays
                      size={20}
                      className="text-violet-300"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Schedule preview
                    </p>
                    <p className="text-xs text-white/35">
                      Event details
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/25">
                      Event
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {form.name || "Your event"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/25">
                      Date
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {form.date || "Not selected"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/25">
                      Time
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {form.startTime || "--:--"}{" "}
                      {form.endTime
                        ? `– ${form.endTime}`
                        : ""}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/25">
                      Venue
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {form.venue || "Not selected"}
                    </p>
                  </div>
                </div>
              </aside>
            </section>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold">
                    Certificate setup
                  </h2>

                  <p className="mt-1 text-sm text-white/40">
                    Choose the certificate type you will issue.
                  </p>
                </div>

                <div className="space-y-4">
                  {certificateTypes.map((certificate) => {
                    const selected =
                      form.certificateType ===
                      certificate.id;

                    return (
                      <button
                        key={certificate.id}
                        type="button"
                        onClick={() =>
                          updateField(
                            "certificateType",
                            certificate.id
                          )
                        }
                        className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${
                          selected
                            ? "border-violet-400/50 bg-violet-500/10"
                            : "border-white/10 bg-black/10 hover:border-white/20"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            selected
                              ? "border-violet-400 bg-violet-500"
                              : "border-white/20"
                          }`}
                        >
                          {selected && (
                            <Check
                              size={12}
                              className="text-white"
                            />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            {certificate.title}
                          </p>

                          <p className="mt-1 text-sm text-white/40">
                            {certificate.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-2xl border border-violet-400/10 bg-violet-500/5 p-5">
                  <div className="flex gap-3">
                    <Sparkles
                      size={19}
                      className="mt-0.5 shrink-0 text-violet-300"
                    />

                    <div>
                      <p className="text-sm font-medium text-violet-200">
                        You can customize the certificate later
                      </p>

                      <p className="mt-1 text-sm leading-6 text-white/40">
                        After creating this event, CertiFlow
                        will take you to the certificate designer
                        where you can add your logo, participant
                        name, event information, QR code and
                        other dynamic fields.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final preview */}
              <aside className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
                <div className="border-b border-white/10 px-6 py-5">
                  <p className="text-sm font-semibold">
                    Event summary
                  </p>
                  <p className="mt-1 text-xs text-white/35">
                    Review before creating
                  </p>
                </div>

                <div className="p-6">
                  <div className="rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-black/20 to-fuchsia-500/10 p-5">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                        <Sparkles
                          size={17}
                          className="text-violet-200"
                        />
                      </div>

                      <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/50">
                        Draft
                      </span>
                    </div>

                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300/70">
                      Event
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      {form.name || "Untitled Event"}
                    </h3>

                    <div className="mt-5 space-y-3 text-sm">
                      <div className="flex items-center gap-2 text-white/45">
                        <CalendarDays size={14} />
                        {form.date || "Date not selected"}
                      </div>

                      <div className="flex items-center gap-2 text-white/45">
                        <Clock3 size={14} />
                        {form.startTime || "--:--"}{" "}
                        {form.endTime
                          ? `– ${form.endTime}`
                          : ""}
                      </div>

                      <div className="flex items-center gap-2 text-white/45">
                        <MapPin size={14} />
                        {form.venue || "Venue not selected"}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-white/30">
                      Certificate
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      {form.certificateType}
                    </p>
                  </div>
                </div>
              </aside>
            </section>
          )}

          {/* Footer actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="rounded-xl px-5 py-3 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
            >
              Cancel
            </button>

            <div className="flex gap-3">
              {step > 1 && (
                <button
                  type="button"
                  onClick={previousStep}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
                >
                  <ArrowLeft size={16} />
                  Previous
                </button>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isCreating}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-400 hover:to-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isCreating ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                      />
                      Creating...
                    </>
                  ) : (
                    <>
                      <Check size={17} />
                      Create Event
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}