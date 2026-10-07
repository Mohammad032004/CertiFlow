"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  FileSpreadsheet,
  Info,
  Mail,
  Upload,
  User,
  Users,
  X,
} from "lucide-react";

type MappingKey =
  | "name"
  | "email"
  | "type"
  | "position"
  | "organization";

const columns = [
  "Full Name",
  "Email Address",
  "Participant Type",
  "Position",
  "College / Organization",
];

const sampleRows = [
  {
    name: "Rahul Kumar",
    email: "rahul.kumar@gmail.com",
    type: "Participant",
    position: "Participant",
    organization: "LPCPS",
  },
  {
    name: "Aman Singh",
    email: "aman.singh@gmail.com",
    type: "Winner",
    position: "1st Prize",
    organization: "LPPGC",
  },
  {
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    type: "Participant",
    position: "Participant",
    organization: "Amity University",
  },
  {
    name: "Anjali Verma",
    email: "anjali.verma@gmail.com",
    type: "Volunteer",
    position: "Volunteer",
    organization: "LPCPS",
  },
  {
    name: "Arjun Yadav",
    email: "arjun.yadav@gmail.com",
    type: "Winner",
    position: "2nd Prize",
    organization: "BBD University",
  },
];

const mappingLabels: Record<MappingKey, string> = {
  name: "Participant Name",
  email: "Email Address",
  type: "Certificate Type",
  position: "Position / Achievement",
  organization: "Organization",
};

export default function ImportParticipantsPage() {
  const [step, setStep] = useState(1);
  const [fileName, setFileName] = useState("codeblitz-participants.xlsx");

  const [mapping, setMapping] = useState<Record<MappingKey, string>>({
    name: "Full Name",
    email: "Email Address",
    type: "Participant Type",
    position: "Position",
    organization: "College / Organization",
  });

  const [imported, setImported] = useState(false);

  const mappingComplete = useMemo(() => {
    return Object.values(mapping).every(Boolean);
  }, [mapping]);

  function handleFileChange(file?: File) {
    if (!file) return;

    setFileName(file.name);
    setStep(2);
  }

  function handleImport() {
    setImported(true);
  }

  if (imported) {
    return (
      <main className="min-h-screen bg-[#08080c] text-white">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[130px]" />
        </div>

        <div className="relative flex min-h-screen items-center justify-center px-5">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-lg text-center"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
              <CheckCircle2 size={38} />
            </div>

            <h1 className="mt-7 text-3xl font-semibold">
              Participants imported
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/40">
              320 participant records have been successfully added to
              CodeBlitz 2.0.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/40">
                  Imported participants
                </span>
                <span className="font-semibold">320</span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/40">
                  Valid email addresses
                </span>
                <span className="font-semibold text-emerald-400">
                  320
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-white/40">
                  Certificate ready
                </span>
                <span className="font-semibold text-violet-400">
                  320
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/events/demo/participants"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/70 transition hover:bg-white/[0.07] hover:text-white"
              >
                <Users size={16} />
                View Participants
              </Link>

              <Link
                href="/events/demo/certificate"
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
              >
                Design Certificate
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#08080c] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-6 lg:px-8">
        {/* Top */}
        <div className="flex items-center justify-between">
          <Link
            href="/events/demo/participants"
            className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition group-hover:-translate-x-1"
            />
            Back to participants
          </Link>

          <div className="text-sm text-white/30">
            CodeBlitz 2.0
          </div>
        </div>

        {/* Header */}
        <div className="mt-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
            <FileSpreadsheet size={23} />
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Import participants
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/40">
            Upload your Excel or CSV file and map its columns to CertiFlow
            participant fields.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-9 flex max-w-2xl items-center">
          {[
            { number: 1, label: "Upload" },
            { number: 2, label: "Map columns" },
            { number: 3, label: "Preview" },
          ].map((item, index) => (
            <div
              key={item.number}
              className="flex flex-1 items-center"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                    step >= item.number
                      ? "bg-violet-500 text-white"
                      : "border border-white/10 bg-white/[0.03] text-white/30"
                  }`}
                >
                  {step > item.number ? (
                    <Check size={15} />
                  ) : (
                    item.number
                  )}
                </div>

                <span
                  className={`hidden text-xs sm:block ${
                    step >= item.number
                      ? "text-white/75"
                      : "text-white/30"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              {index < 2 && (
                <div
                  className={`mx-3 h-px flex-1 ${
                    step > item.number
                      ? "bg-violet-500/50"
                      : "bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-10 max-w-2xl"
          >
            <label className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 bg-white/[0.025] px-6 py-16 text-center transition hover:border-violet-400/30 hover:bg-violet-500/[0.03] sm:px-12"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition group-hover:scale-105">
                <Upload size={27} />
              </div>

              <h2 className="mt-5 text-lg font-medium">
                Drop your participant file here
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/35">
                Upload an Excel spreadsheet or CSV containing the
                participants who should receive certificates.
              </p>

              <span className="mt-6 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20">
                Choose File
              </span>

              <p className="mt-4 text-xs text-white/25">
                XLSX, XLS or CSV · Maximum 10MB
              </p>

              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files?.[0])}
              />
            </label>

            <div className="mt-5 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <Info
                size={18}
                className="mt-0.5 shrink-0 text-violet-400"
              />

              <div>
                <p className="text-sm font-medium text-white/70">
                  Recommended file structure
                </p>

                <p className="mt-1 text-xs leading-5 text-white/35">
                  Your file should contain a name and email column. Other
                  columns such as position, organization and participant
                  type are optional.
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10"
          >
            {/* File */}
            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <FileSpreadsheet size={20} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/80">
                    {fileName}
                  </p>
                  <p className="mt-1 text-xs text-white/30">
                    320 rows detected · Excel spreadsheet
                  </p>
                </div>
              </div>

              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 self-start rounded-lg px-3 py-2 text-xs text-white/40 hover:bg-white/5 hover:text-white sm:self-auto"
              >
                <X size={14} />
                Change file
              </button>
            </div>

            {/* Mapping */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035]">
                <div className="border-b border-white/10 px-5 py-5">
                  <h2 className="font-medium">
                    Map your columns
                  </h2>

                  <p className="mt-1 text-sm text-white/35">
                    Tell CertiFlow which spreadsheet column contains each
                    participant field.
                  </p>
                </div>

                <div className="divide-y divide-white/5">
                  {(Object.keys(mapping) as MappingKey[]).map((key) => (
                    <div
                      key={key}
                      className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                          {key === "email" ? (
                            <Mail size={16} />
                          ) : key === "name" ? (
                            <User size={16} />
                          ) : (
                            <FileText size={16} />
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white/75">
                            {mappingLabels[key]}
                          </p>

                          <p className="mt-0.5 text-xs text-white/30">
                            {key === "name"
                              ? "Required"
                              : key === "email"
                                ? "Required"
                                : "Optional"}
                          </p>
                        </div>
                      </div>

                      <div className="relative sm:w-64">
                        <select
                          value={mapping[key]}
                          onChange={(e) =>
                            setMapping({
                              ...mapping,
                              [key]: e.target.value,
                            })
                          }
                          className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 pr-9 text-sm text-white/70 outline-none focus:border-violet-500/40"
                        >
                          <option value="">Don't import</option>

                          {columns.map((column) => (
                            <option key={column} value={column}>
                              {column}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={15}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/30"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end border-t border-white/10 px-5 py-4">
                  <button
                    onClick={() => setStep(3)}
                    disabled={!mappingComplete}
                    className="flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Preview Import
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Info size={18} />
                </div>

                <h3 className="mt-4 text-sm font-medium">
                  Smart field mapping
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  CertiFlow will eventually detect common column names
                  automatically.
                </p>

                <div className="mt-5 space-y-2">
                  {[
                    "Name → Participant Name",
                    "Email → Email Address",
                    "Position → Achievement",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg bg-white/[0.03] px-3 py-2 text-xs text-white/40"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.035]">
              <div className="flex flex-col justify-between gap-3 border-b border-white/10 px-5 py-5 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-medium">
                    Preview participants
                  </h2>

                  <p className="mt-1 text-sm text-white/35">
                    Review the first few records before importing.
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  320 valid rows
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px]">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="px-5 py-4 text-xs uppercase tracking-wider text-white/30">
                        Name
                      </th>
                      <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/30">
                        Email
                      </th>
                      <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/30">
                        Type
                      </th>
                      <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/30">
                        Position
                      </th>
                      <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/30">
                        Organization
                      </th>
                      <th className="px-4 py-4 text-xs uppercase tracking-wider text-white/30">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {sampleRows.map((row) => (
                      <tr
                        key={row.email}
                        className="border-b border-white/5"
                      >
                        <td className="px-5 py-4 text-sm text-white/75">
                          {row.name}
                        </td>

                        <td className="px-4 py-4 text-sm text-white/40">
                          {row.email}
                        </td>

                        <td className="px-4 py-4 text-sm text-white/50">
                          {row.type}
                        </td>

                        <td className="px-4 py-4 text-sm text-white/50">
                          {row.position}
                        </td>

                        <td className="px-4 py-4 text-sm text-white/50">
                          {row.organization}
                        </td>

                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300">
                            <CheckCircle2 size={13} />
                            Valid
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="text-sm text-white/40 hover:text-white"
                >
                  ← Back to mapping
                </button>

                <button
                  onClick={handleImport}
                  className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
                >
                  <Check size={16} />
                  Import 320 Participants
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}