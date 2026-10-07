"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Info,
  Mail,
  RefreshCw,
  Send,
  Settings2,
  Sparkles,
  Users,
  X,
  XCircle,
} from "lucide-react";

type DeliveryStatus = "Pending" | "Sent" | "Failed";

type Recipient = {
  id: number;
  name: string;
  email: string;
  certificateId: string;
  status: DeliveryStatus;
};

const initialRecipients: Recipient[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul.kumar@gmail.com",
    certificateId: "CF-2026-CB2-0001",
    status: "Pending",
  },
  {
    id: 2,
    name: "Aman Singh",
    email: "aman.singh@gmail.com",
    certificateId: "CF-2026-CB2-0002",
    status: "Pending",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    certificateId: "CF-2026-CB2-0003",
    status: "Pending",
  },
  {
    id: 4,
    name: "Anjali Verma",
    email: "anjali.verma@gmail.com",
    certificateId: "CF-2026-CB2-0004",
    status: "Pending",
  },
  {
    id: 5,
    name: "Arjun Yadav",
    email: "arjun.yadav@gmail.com",
    certificateId: "CF-2026-CB2-0005",
    status: "Pending",
  },
  {
    id: 6,
    name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    certificateId: "CF-2026-CB2-0006",
    status: "Pending",
  },
  {
    id: 7,
    name: "Vivek Mishra",
    email: "vivek.mishra@gmail.com",
    certificateId: "CF-2026-CB2-0007",
    status: "Pending",
  },
  {
    id: 8,
    name: "Sakshi Singh",
    email: "sakshi.singh@gmail.com",
    certificateId: "CF-2026-CB2-0008",
    status: "Pending",
  },
];

function DeliveryBadge({
  status,
}: {
  status: DeliveryStatus;
}) {
  if (status === "Sent") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
        <CheckCircle2 size={12} />
        Sent
      </span>
    );
  }

  if (status === "Failed") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/15 bg-red-400/10 px-2.5 py-1 text-xs text-red-300">
        <XCircle size={12} />
        Failed
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/35">
      <Clock3 size={12} />
      Pending
    </span>
  );
}

export default function DeliveryPage() {
  const [recipients, setRecipients] =
    useState<Recipient[]>(initialRecipients);

  const [sender, setSender] = useState("AI Club");
  const [senderEmail, setSenderEmail] =
    useState("certificates@aiclub.example");

  const [subject, setSubject] = useState(
    "Your Certificate for CodeBlitz 2.0 🎉"
  );

  const [message, setMessage] = useState(
    "Hi {{name}},\n\nCongratulations on participating in CodeBlitz 2.0!\n\nYour certificate is attached to this email. You can also verify your certificate using the QR code included on it.\n\nThank you for being part of the event.\n\nRegards,\nAI Club"
  );

  const [attachCertificate, setAttachCertificate] =
    useState(true);

  const [includeVerificationLink, setIncludeVerificationLink] =
    useState(true);

  const [sending, setSending] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const [showTestModal, setShowTestModal] = useState(false);
  const [testEmail, setTestEmail] = useState("");

  const sentCount = recipients.filter(
    (recipient) => recipient.status === "Sent"
  ).length;

  const failedCount = recipients.filter(
    (recipient) => recipient.status === "Failed"
  ).length;

  const pendingCount = recipients.filter(
    (recipient) => recipient.status === "Pending"
  ).length;

  const total = recipients.length;

  useEffect(() => {
    if (!sending) return;

    if (progress >= 100) {
      setSending(false);
      setCompleted(true);

      setRecipients((current) =>
        current.map((recipient) => ({
          ...recipient,
          status: "Sent",
        }))
      );

      return;
    }

    const timer = setTimeout(() => {
      const nextProgress = Math.min(progress + 12.5, 100);

      setProgress(nextProgress);

      const processed = Math.floor(
        (nextProgress / 100) * total
      );

      setRecipients((current) =>
        current.map((recipient, index) => {
          if (index < processed) {
            return {
              ...recipient,
              status: "Sent",
            };
          }

          if (index === processed && nextProgress < 100) {
            return {
              ...recipient,
              status: "Pending",
            };
          }

          return {
            ...recipient,
            status: "Pending",
          };
        })
      );
    }, 450);

    return () => clearTimeout(timer);
  }, [sending, progress, total]);

  function startSending() {
    setCompleted(false);
    setProgress(0);
    setSending(true);

    setRecipients((current) =>
      current.map((recipient) => ({
        ...recipient,
        status: "Pending",
      }))
    );
  }

  function resendFailed() {
    setRecipients((current) =>
      current.map((recipient) =>
        recipient.status === "Failed"
          ? {
              ...recipient,
              status: "Pending",
            }
          : recipient
      )
    );

    setCompleted(false);
    setProgress(0);
    setSending(true);
  }

  function sendTestEmail() {
    if (!testEmail.trim()) return;

    alert(`Test email scheduled for ${testEmail}`);

    setShowTestModal(false);
    setTestEmail("");
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
            href="/events/demo/generate"
            className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition group-hover:-translate-x-1"
            />
            Back to generation
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
                <Mail size={13} />
                Certificate Delivery
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Send certificates
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">
                Personalize your email and deliver certificates directly
                to every participant.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowTestModal(true)}
                disabled={sending}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.07] hover:text-white disabled:opacity-40"
              >
                <Mail size={16} />
                Send Test
              </button>

              {!sending && !completed && (
                <button
                  onClick={startSending}
                  className="flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
                >
                  <Send size={16} />
                  Send {total} Certificates
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Delivery progress */}
        {(sending || completed) && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-6"
          >
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
                  ) : (
                    <LoaderIcon />
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium">
                    {completed
                      ? "Delivery completed"
                      : "Sending certificates..."}
                  </p>

                  <p className="mt-1 text-xs text-white/30">
                    {completed
                      ? `${sentCount} certificates delivered successfully`
                      : `${sentCount} of ${total} emails sent`}
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
                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
              />
            </div>

            {completed && (
              <div className="mt-5 flex gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <p className="text-sm text-emerald-300">
                  All certificates have been delivered successfully.
                </p>
              </div>
            )}
          </motion.section>
        )}

        {/* Stats */}
        <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Recipients",
              value: total,
              icon: Users,
            },
            {
              label: "Sent",
              value: sentCount,
              icon: CheckCircle2,
            },
            {
              label: "Pending",
              value: pendingCount,
              icon: Clock3,
            },
            {
              label: "Failed",
              value: failedCount,
              icon: XCircle,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/40">
                      {item.label}
                    </p>

                    <p className="mt-2 text-2xl font-semibold">
                      {item.value}
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
        <section className="mt-7 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          {/* Email composer */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.035]">
            <div className="border-b border-white/10 px-5 py-5">
              <h2 className="font-medium">
                Email configuration
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Customize the email your participants will receive.
              </p>
            </div>

            <div className="space-y-5 p-5">
              {/* Sender */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    Sender name
                  </label>

                  <input
                    value={sender}
                    onChange={(e) => setSender(e.target.value)}
                    className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white/75 outline-none focus:border-violet-500/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/40">
                    Sender email
                  </label>

                  <input
                    value={senderEmail}
                    onChange={(e) =>
                      setSenderEmail(e.target.value)
                    }
                    className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white/75 outline-none focus:border-violet-500/40"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-xs text-white/40">
                  Subject
                </label>

                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white/75 outline-none focus:border-violet-500/40"
                />
              </div>

              {/* Message */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-xs text-white/40">
                    Message
                  </label>

                  <span className="font-mono text-[10px] text-violet-400">
                    {"{{name}}"}
                  </span>
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[240px] w-full resize-y rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/65 outline-none focus:border-violet-500/40"
                />
              </div>

              {/* Options */}
              <div className="space-y-3">
                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      <FileText size={16} />
                    </div>

                    <div>
                      <p className="text-sm text-white/70">
                        Attach certificate PDF
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Attach each participant's personalized certificate.
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={attachCertificate}
                    onChange={(e) =>
                      setAttachCertificate(e.target.checked)
                    }
                    className="h-4 w-4 accent-violet-500"
                  />
                </label>

                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                      <Sparkles size={16} />
                    </div>

                    <div>
                      <p className="text-sm text-white/70">
                        Include verification link
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Add a unique certificate verification URL.
                      </p>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={includeVerificationLink}
                    onChange={(e) =>
                      setIncludeVerificationLink(
                        e.target.checked
                      )
                    }
                    className="h-4 w-4 accent-violet-500"
                  />
                </label>
              </div>

              {/* Variables */}
              <div className="rounded-xl border border-violet-400/10 bg-violet-500/[0.04] p-4">
                <div className="flex items-center gap-2">
                  <Info size={15} className="text-violet-400" />

                  <p className="text-xs font-medium text-violet-300">
                    Dynamic variables
                  </p>
                </div>

                <p className="mt-2 text-xs leading-5 text-white/30">
                  Use variables like{" "}
                  <span className="font-mono text-violet-300">
                    {"{{name}}"}
                  </span>{" "}
                  to personalize each email automatically.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "{{name}}",
                    "{{event_name}}",
                    "{{certificate_id}}",
                    "{{event_date}}",
                  ].map((variable) => (
                    <span
                      key={variable}
                      className="rounded-lg bg-black/20 px-2.5 py-1.5 font-mono text-[10px] text-white/40"
                    >
                      {variable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <h2 className="font-medium">
                    Email preview
                  </h2>

                  <p className="mt-1 text-xs text-white/30">
                    Example participant
                  </p>
                </div>

                <Mail size={17} className="text-white/25" />
              </div>

              <div className="p-5">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111116]">
                  {/* Fake email header */}
                  <div className="border-b border-white/10 p-4">
                    <p className="text-xs text-white/30">
                      From
                    </p>

                    <p className="mt-1 text-sm text-white/70">
                      {sender}{" "}
                      <span className="text-white/30">
                        &lt;{senderEmail}&gt;
                      </span>
                    </p>

                    <p className="mt-3 text-xs text-white/30">
                      Subject
                    </p>

                    <p className="mt-1 text-sm text-white/75">
                      {subject}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    {message
                      .replaceAll("{{name}}", "Rahul Kumar")
                      .split("\n")
                      .map((line, index) => (
                        <p
                          key={index}
                          className={`text-xs leading-6 ${
                            line === ""
                              ? "h-2"
                              : "text-white/45"
                          }`}
                        >
                          {line}
                        </p>
                      ))}

                    {includeVerificationLink && (
                      <div className="mt-5 rounded-lg border border-violet-400/10 bg-violet-500/[0.04] p-3">
                        <p className="text-[10px] text-white/30">
                          Verify certificate
                        </p>

                        <p className="mt-1 truncate text-[10px] text-violet-400">
                          certiflow.app/verify/CF-2026-CB2-0001
                        </p>
                      </div>
                    )}

                    {attachCertificate && (
                      <div className="mt-4 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-300">
                          <FileText size={16} />
                        </div>

                        <div>
                          <p className="text-xs text-white/60">
                            CodeBlitz-2.0-Certificate.pdf
                          </p>

                          <p className="mt-0.5 text-[10px] text-white/25">
                            PDF · 428 KB
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sender settings */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Settings2 size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-medium">
                    Email provider
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-white/30">
                    Email provider configuration will be connected when
                    backend delivery is implemented.
                  </p>
                </div>
              </div>

              <button className="mt-4 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-left transition hover:bg-white/[0.05]">
                <div>
                  <p className="text-xs text-white/50">
                    Provider
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    CertiFlow Mail
                  </p>
                </div>

                <ChevronDown
                  size={15}
                  className="text-white/30"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Delivery table */}
        <section className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035]">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-medium">
                Delivery status
              </h2>

              <p className="mt-1 text-sm text-white/35">
                Track certificate emails sent to participants.
              </p>
            </div>

            {failedCount > 0 && !sending && (
              <button
                onClick={resendFailed}
                className="flex items-center gap-2 rounded-xl border border-red-400/15 bg-red-400/5 px-4 py-2.5 text-xs text-red-300 transition hover:bg-red-400/10"
              >
                <RefreshCw size={14} />
                Resend failed
              </button>
            )}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="px-5 py-4 text-xs uppercase tracking-wider text-white/25">
                    Recipient
                  </th>

                  <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/25">
                    Certificate ID
                  </th>

                  <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/25">
                    Status
                  </th>

                  <th className="px-5 py-4 text-xs uppercase tracking-wider text-white/25">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {recipients.map((recipient) => (
                  <tr
                    key={recipient.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/10 text-sm text-violet-300">
                          {recipient.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm text-white/75">
                            {recipient.name}
                          </p>

                          <p className="mt-0.5 text-xs text-white/30">
                            {recipient.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span className="font-mono text-xs text-white/30">
                        {recipient.certificateId}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <DeliveryBadge status={recipient.status} />
                    </td>

                    <td className="px-5 py-4">
                      {recipient.status === "Failed" && (
                        <button
                          onClick={() => {
                            setRecipients((current) =>
                              current.map((item) =>
                                item.id === recipient.id
                                  ? {
                                      ...item,
                                      status: "Pending",
                                    }
                                  : item
                              )
                            );
                          }}
                          className="text-xs text-violet-400 hover:text-violet-300"
                        >
                          Retry
                        </button>
                      )}

                      {recipient.status === "Sent" && (
                        <span className="text-xs text-white/20">
                          Delivered
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="divide-y divide-white/5 md:hidden">
            {recipients.map((recipient) => (
              <div key={recipient.id} className="p-4">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-sm text-violet-300">
                    {recipient.name.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-white/75">
                      {recipient.name}
                    </p>

                    <p className="mt-1 truncate text-xs text-white/30">
                      {recipient.email}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <DeliveryBadge
                        status={recipient.status}
                      />
                    </div>

                    <p className="mt-2 font-mono text-[10px] text-white/20">
                      {recipient.certificateId}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Completion CTA */}
        {completed && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex flex-col justify-between gap-5 rounded-2xl border border-violet-400/15 bg-gradient-to-r from-violet-500/[0.08] to-fuchsia-500/[0.04] p-6 lg:flex-row lg:items-center"
          >
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Sparkles size={20} />
              </div>

              <div>
                <h2 className="font-medium">
                  Your event certificates are live
                </h2>

                <p className="mt-1 text-sm text-white/40">
                  Participants can now verify their certificates using
                  their unique QR codes.
                </p>
              </div>
            </div>

            <Link
              href="/verify/CF-2026-CB2-0001"
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Verification
              <ArrowRight size={16} />
            </Link>
          </motion.section>
        )}
      </div>

      {/* Test email modal */}
      {showTestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111116] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Mail size={20} />
                </div>

                <h2 className="mt-4 text-xl font-semibold">
                  Send test email
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  Preview exactly what a participant will receive.
                </p>
              </div>

              <button
                onClick={() => setShowTestModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/35 hover:bg-white/5 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-xs text-white/40">
                Test email address
              </label>

              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-violet-500/40"
              />
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowTestModal(false)}
                className="rounded-xl px-4 py-2.5 text-sm text-white/40 hover:text-white"
              >
                Cancel
              </button>

              <button
                onClick={sendTestEmail}
                className="flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-medium hover:bg-violet-400"
              >
                <Send size={15} />
                Send Test
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

function LoaderIcon() {
  return <RefreshCw size={21} className="animate-spin" />;
}