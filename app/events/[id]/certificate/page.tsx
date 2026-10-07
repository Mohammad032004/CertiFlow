"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  FileText,
  GripVertical,
  Image as ImageIcon,
  Layers3,
  Mail,
  Palette,
  Plus,
  QrCode,
  Save,
  Sparkles,
  Type,
  Undo2,
  Redo2,
  Users,
  X,
} from "lucide-react";

const dynamicFields = [
  {
    key: "{{name}}",
    label: "Participant Name",
    description: "Name of the participant",
  },
  {
    key: "{{event_name}}",
    label: "Event Name",
    description: "Name of your event",
  },
  {
    key: "{{event_date}}",
    label: "Event Date",
    description: "Date of the event",
  },
  {
    key: "{{position}}",
    label: "Position",
    description: "Winner / achievement",
  },
  {
    key: "{{organization}}",
    label: "Organization",
    description: "College or organization",
  },
  {
    key: "{{certificate_id}}",
    label: "Certificate ID",
    description: "Unique certificate number",
  },
];

const templates = [
  {
    id: 1,
    name: "Midnight",
    style: "dark",
  },
  {
    id: 2,
    name: "Elegant",
    style: "light",
  },
  {
    id: 3,
    name: "Modern",
    style: "purple",
  },
];

export default function CertificateDesignerPage() {
  const [activeTemplate, setActiveTemplate] = useState(1);

  const [title, setTitle] = useState("Certificate of Participation");

  const [selectedElement, setSelectedElement] = useState<
    "title" | "name" | "description" | "event" | "qr" | null
  >("name");

  const [showFields, setShowFields] = useState(false);

  const [saved, setSaved] = useState(false);

  const [zoom, setZoom] = useState(75);

  function saveDesign() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  function insertField(field: string) {
    setTitle((current) => `${current} ${field}`);
    setShowFields(false);
  }

  return (
    <main className="min-h-screen bg-[#07070b] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/8 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[130px]" />
      </div>

      <div className="relative flex min-h-screen flex-col">
        {/* Top navbar */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-[#09090d]/90 px-4 backdrop-blur-xl lg:px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/events/demo"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/45 transition hover:bg-white/5 hover:text-white"
            >
              <ArrowLeft size={18} />
            </Link>

            <div className="hidden h-6 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-sm font-medium text-white">
                Certificate Designer
              </p>
              <p className="hidden text-[11px] text-white/30 sm:block">
                CodeBlitz 2.0
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden h-9 items-center gap-2 rounded-lg px-3 text-xs text-white/40 transition hover:bg-white/5 hover:text-white sm:flex">
              <Undo2 size={15} />
              Undo
            </button>

            <button className="hidden h-9 items-center gap-2 rounded-lg px-3 text-xs text-white/40 transition hover:bg-white/5 hover:text-white sm:flex">
              <Redo2 size={15} />
              Redo
            </button>

            <div className="mx-1 hidden h-5 w-px bg-white/10 sm:block" />

            <button
              onClick={saveDesign}
              className="flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-xs font-medium text-white/70 transition hover:bg-white/[0.08] hover:text-white"
            >
              {saved ? <Check size={15} /> : <Save size={15} />}
              {saved ? "Saved" : "Save"}
            </button>

            <Link
              href="/events/demo/generate"
              className="flex h-9 items-center gap-2 rounded-lg bg-violet-500 px-3.5 text-xs font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
            >
              Continue
              <ArrowRight size={14} />
            </Link>
          </div>
        </header>

        {/* Main editor */}
        <div className="flex min-h-0 flex-1">
          {/* Left sidebar */}
          <aside className="hidden w-[270px] shrink-0 border-r border-white/10 bg-[#09090d] lg:block">
            <div className="flex h-full flex-col">
              {/* Sidebar tabs */}
              <div className="grid grid-cols-3 border-b border-white/10">
                {[
                  {
                    icon: Palette,
                    label: "Design",
                    active: true,
                  },
                  {
                    icon: Layers3,
                    label: "Layers",
                  },
                  {
                    icon: Type,
                    label: "Text",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      className={`relative flex flex-col items-center gap-1 py-3 text-[10px] ${
                        item.active
                          ? "text-violet-400"
                          : "text-white/30 hover:text-white/60"
                      }`}
                    >
                      <Icon size={16} />

                      {item.label}

                      {item.active && (
                        <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-violet-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {/* Templates */}
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/30">
                      Templates
                    </p>

                    <button className="text-white/25 hover:text-white">
                      <Plus size={15} />
                    </button>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setActiveTemplate(template.id)}
                        className={`group overflow-hidden rounded-xl border text-left transition ${
                          activeTemplate === template.id
                            ? "border-violet-400/50"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div
                          className={`aspect-[1.414/1] ${
                            template.style === "dark"
                              ? "bg-gradient-to-br from-[#241632] via-[#101016] to-[#09090d]"
                              : template.style === "light"
                                ? "bg-gradient-to-br from-[#f4f0e8] to-[#d9d2c5]"
                                : "bg-gradient-to-br from-violet-900 via-purple-700 to-fuchsia-800"
                          }`}
                        >
                          <div className="flex h-full flex-col items-center justify-center px-2 text-center">
                            <div className="h-px w-8 bg-white/30" />

                            <span
                              className={`mt-2 text-[6px] ${
                                template.style === "light"
                                  ? "text-black/50"
                                  : "text-white/60"
                              }`}
                            >
                              CERTIFICATE
                            </span>

                            <div className="mt-2 h-px w-10 bg-white/20" />
                          </div>
                        </div>

                        <div className="bg-white/[0.025] px-2 py-2">
                          <p className="text-[10px] text-white/50">
                            {template.name}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Elements */}
                <div className="mt-7">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-white/30">
                    Elements
                  </p>

                  <div className="mt-3 space-y-2">
                    {[
                      {
                        icon: Type,
                        label: "Text",
                      },
                      {
                        icon: ImageIcon,
                        label: "Logo / Image",
                      },
                      {
                        icon: QrCode,
                        label: "QR Code",
                      },
                      {
                        icon: FileText,
                        label: "Certificate ID",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.label}
                          className="flex w-full items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-3 py-3 text-left text-xs text-white/50 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                        >
                          <Icon size={16} className="text-violet-400" />
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dynamic fields */}
                <div className="mt-7">
                  <button
                    onClick={() => setShowFields(!showFields)}
                    className="flex w-full items-center justify-between text-[11px] font-medium uppercase tracking-wider text-white/30"
                  >
                    Dynamic Fields

                    <ChevronDown
                      size={14}
                      className={`transition ${
                        showFields ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showFields && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 space-y-1.5"
                    >
                      {dynamicFields.map((field) => (
                        <button
                          key={field.key}
                          onClick={() => insertField(field.key)}
                          className="w-full rounded-lg border border-white/5 bg-white/[0.02] p-2.5 text-left transition hover:border-violet-400/20 hover:bg-violet-500/5"
                        >
                          <p className="font-mono text-[10px] text-violet-300">
                            {field.key}
                          </p>

                          <p className="mt-1 text-[10px] text-white/35">
                            {field.label}
                          </p>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Canvas */}
          <section className="relative flex min-w-0 flex-1 flex-col bg-[#0b0b10]">
            {/* Canvas toolbar */}
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/10 px-4">
              <div className="flex items-center gap-2">
                <span className="hidden text-xs text-white/30 sm:block">
                  Preview
                </span>

                <div className="hidden h-4 w-px bg-white/10 sm:block" />

                <span className="text-xs text-white/25">
                  A4 Landscape
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-white/30">
                  {zoom}%
                </span>

                <input
                  type="range"
                  min="50"
                  max="110"
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-20 accent-violet-500"
                />
              </div>
            </div>

            {/* Certificate workspace */}
            <div className="flex flex-1 items-center justify-center overflow-auto p-5 sm:p-10">
              <motion.div
                animate={{
                  scale: zoom / 75,
                }}
                transition={{ duration: 0.2 }}
                className="relative aspect-[1.414/1] w-[min(850px,90vw)] shrink-0 overflow-hidden shadow-2xl"
              >
                {/* Certificate */}
                <div
                  className={`relative h-full w-full ${
                    activeTemplate === 1
                      ? "bg-gradient-to-br from-[#21152f] via-[#111117] to-[#0b0b0f]"
                      : activeTemplate === 2
                        ? "bg-[#f4f0e8]"
                        : "bg-gradient-to-br from-[#4c1d95] via-[#6d28d9] to-[#86198f]"
                  }`}
                >
                  {/* Decorative glow */}
                  <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

                  <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />

                  {/* Border */}
                  <div className="absolute inset-5 rounded-lg border border-violet-300/20" />

                  <div className="absolute inset-8 rounded-md border border-white/5" />

                  {/* Top logo */}
                  <div className="absolute left-1/2 top-[11%] -translate-x-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-violet-200">
                      <Sparkles size={22} />
                    </div>
                  </div>

                  {/* Title */}
                  <button
                    onClick={() => setSelectedElement("title")}
                    className={`absolute left-1/2 top-[25%] w-[70%] -translate-x-1/2 text-center ${
                      selectedElement === "title"
                        ? "rounded border border-dashed border-violet-400/60"
                        : ""
                    }`}
                  >
                    <p
                      className={`text-[clamp(12px,2vw,23px)] font-medium tracking-[0.12em] ${
                        activeTemplate === 2
                          ? "text-black/70"
                          : "text-white/75"
                      }`}
                    >
                      {title}
                    </p>
                  </button>

                  {/* Presented text */}
                  <div className="absolute left-1/2 top-[38%] -translate-x-1/2 text-center">
                    <p
                      className={`text-[clamp(7px,1vw,12px)] ${
                        activeTemplate === 2
                          ? "text-black/40"
                          : "text-white/35"
                      }`}
                    >
                      This certificate is proudly presented to
                    </p>
                  </div>

                  {/* Participant */}
                  <button
                    onClick={() => setSelectedElement("name")}
                    className={`absolute left-1/2 top-[44%] w-[75%] -translate-x-1/2 text-center ${
                      selectedElement === "name"
                        ? "rounded border border-dashed border-violet-400/60 px-3 py-1"
                        : ""
                    }`}
                  >
                    <p
                      className={`text-[clamp(18px,3.2vw,38px)] font-semibold ${
                        activeTemplate === 2
                          ? "text-black/80"
                          : "text-white"
                      }`}
                    >
                      {"{{name}}"}
                    </p>
                  </button>

                  {/* Description */}
                  <button
                    onClick={() => setSelectedElement("description")}
                    className={`absolute left-1/2 top-[57%] w-[65%] -translate-x-1/2 text-center ${
                      selectedElement === "description"
                        ? "rounded border border-dashed border-violet-400/60 p-1"
                        : ""
                    }`}
                  >
                    <p
                      className={`text-[clamp(7px,1vw,11px)] leading-relaxed ${
                        activeTemplate === 2
                          ? "text-black/45"
                          : "text-white/35"
                      }`}
                    >
                      for successfully participating in
                    </p>

                    <p
                      className={`mt-1 text-[clamp(10px,1.5vw,17px)] font-medium ${
                        activeTemplate === 2
                          ? "text-black/70"
                          : "text-violet-300"
                      }`}
                    >
                      {"{{event_name}}"}
                    </p>
                  </button>

                  {/* Event details */}
                  <button
                    onClick={() => setSelectedElement("event")}
                    className={`absolute bottom-[14%] left-[15%] text-left ${
                      selectedElement === "event"
                        ? "rounded border border-dashed border-violet-400/60 p-1"
                        : ""
                    }`}
                  >
                    <p
                      className={`text-[clamp(6px,0.8vw,9px)] ${
                        activeTemplate === 2
                          ? "text-black/35"
                          : "text-white/30"
                      }`}
                    >
                      Date
                    </p>

                    <p
                      className={`mt-1 text-[clamp(7px,1vw,11px)] ${
                        activeTemplate === 2
                          ? "text-black/65"
                          : "text-white/60"
                      }`}
                    >
                      {"{{event_date}}"}
                    </p>
                  </button>

                  {/* Signature */}
                  <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 text-center">
                    <div
                      className={`mx-auto h-px w-20 ${
                        activeTemplate === 2
                          ? "bg-black/20"
                          : "bg-white/20"
                      }`}
                    />

                    <p
                      className={`mt-1 text-[clamp(6px,0.8vw,9px)] ${
                        activeTemplate === 2
                          ? "text-black/35"
                          : "text-white/30"
                      }`}
                    >
                      Organizer
                    </p>
                  </div>

                  {/* QR */}
                  <button
                    onClick={() => setSelectedElement("qr")}
                    className={`absolute bottom-[12%] right-[14%] flex h-[clamp(35px,5vw,65px)] w-[clamp(35px,5vw,65px)] items-center justify-center rounded bg-white ${
                      selectedElement === "qr"
                        ? "ring-2 ring-violet-400 ring-offset-2 ring-offset-transparent"
                        : ""
                    }`}
                  >
                    <QrCode
                      size={42}
                      className="h-[70%] w-[70%] text-black"
                    />
                  </button>

                  {/* Certificate ID */}
                  <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 text-center">
                    <p
                      className={`font-mono text-[clamp(5px,0.7vw,8px)] ${
                        activeTemplate === 2
                          ? "text-black/30"
                          : "text-white/20"
                      }`}
                    >
                      ID: {"{{certificate_id}}"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom toolbar */}
            <div className="flex h-12 shrink-0 items-center justify-between border-t border-white/10 bg-[#09090d] px-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-white/30">
                  Selected:
                </span>

                <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/50">
                  {selectedElement || "None"}
                </span>
              </div>

              <button className="flex items-center gap-2 text-[11px] text-white/35 hover:text-white">
                <GripVertical size={13} />
                Snap to grid
              </button>
            </div>
          </section>

          {/* Right properties panel */}
          <aside className="hidden w-[285px] shrink-0 border-l border-white/10 bg-[#09090d] xl:block">
            <div className="border-b border-white/10 px-5 py-4">
              <p className="text-xs font-medium text-white/70">
                Properties
              </p>

              <p className="mt-1 text-[11px] text-white/30">
                {selectedElement
                  ? `Editing ${selectedElement}`
                  : "Select an element"}
              </p>
            </div>

            <div className="space-y-6 p-5">
              {/* Text */}
              {(selectedElement === "title" ||
                selectedElement === "name" ||
                selectedElement === "description") && (
                <>
                  <div>
                    <label className="mb-2 block text-[11px] text-white/35">
                      Text
                    </label>

                    <textarea
                      value={
                        selectedElement === "title"
                          ? title
                          : selectedElement === "name"
                            ? "{{name}}"
                            : "for successfully participating in {{event_name}}"
                      }
                      onChange={(e) => {
                        if (selectedElement === "title") {
                          setTitle(e.target.value);
                        }
                      }}
                      className="min-h-[80px] w-full resize-none rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-white/70 outline-none focus:border-violet-500/40"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] text-white/35">
                      Font
                    </label>

                    <select className="h-10 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-xs text-white/60 outline-none">
                      <option>Inter</option>
                      <option>Playfair Display</option>
                      <option>Montserrat</option>
                      <option>Georgia</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] text-white/35">
                      Font size
                    </label>

                    <input
                      type="range"
                      min="8"
                      max="64"
                      defaultValue={selectedElement === "name" ? 36 : 22}
                      className="w-full accent-violet-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] text-white/35">
                      Alignment
                    </label>

                    <div className="grid grid-cols-3 gap-2">
                      {["Left", "Center", "Right"].map((item) => (
                        <button
                          key={item}
                          className={`rounded-lg border py-2 text-[10px] ${
                            item === "Center"
                              ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                              : "border-white/10 text-white/35"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* QR */}
              {selectedElement === "qr" && (
                <>
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black">
                      <QrCode size={30} />
                    </div>

                    <h3 className="mt-4 text-sm font-medium">
                      Verification QR
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/35">
                      Each certificate will receive a unique QR code that
                      links to its verification page.
                    </p>
                  </div>

                  <div>
                    <label className="mb-2 block text-[11px] text-white/35">
                      QR size
                    </label>

                    <input
                      type="range"
                      min="30"
                      max="120"
                      defaultValue="70"
                      className="w-full accent-violet-500"
                    />
                  </div>
                </>
              )}

              {/* No selection */}
              {!selectedElement && (
                <div className="py-10 text-center">
                  <Layers3
                    size={28}
                    className="mx-auto text-white/15"
                  />

                  <p className="mt-4 text-xs text-white/35">
                    Select an element on the certificate to edit its
                    properties.
                  </p>
                </div>
              )}

              {/* Colors */}
              <div>
                <label className="mb-3 block text-[11px] text-white/35">
                  Accent Color
                </label>

                <div className="flex gap-2">
                  {[
                    "bg-violet-500",
                    "bg-blue-500",
                    "bg-cyan-500",
                    "bg-emerald-500",
                    "bg-amber-500",
                    "bg-rose-500",
                  ].map((color) => (
                    <button
                      key={color}
                      className={`h-7 w-7 rounded-full ${color} ring-2 ring-transparent transition hover:scale-110 hover:ring-white/20`}
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic fields */}
              <div className="rounded-xl border border-violet-400/10 bg-violet-500/[0.04] p-4">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-violet-400" />

                  <p className="text-xs font-medium text-violet-300">
                    Dynamic fields
                  </p>
                </div>

                <p className="mt-2 text-[11px] leading-5 text-white/30">
                  Use fields like{" "}
                  <span className="font-mono text-violet-300">
                    {"{{name}}"}
                  </span>{" "}
                  to automatically personalize every certificate.
                </p>

                <button
                  onClick={() => setShowFields(true)}
                  className="mt-3 flex items-center gap-1 text-[11px] text-violet-400 hover:text-violet-300"
                >
                  View available fields
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Mobile bottom action */}
        <div className="border-t border-white/10 bg-[#09090d] p-3 lg:hidden">
          <div className="flex gap-2">
            <button
              onClick={saveDesign}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-xs text-white/60"
            >
              <Save size={15} />
              Save
            </button>

            <Link
              href="/events/demo/generate"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-500 py-3 text-xs font-medium"
            >
              Continue
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Dynamic field modal */}
      {showFields && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111116] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Sparkles size={18} />
                </div>

                <h2 className="mt-4 text-lg font-semibold">
                  Dynamic fields
                </h2>

                <p className="mt-1 text-xs text-white/35">
                  Click a field to insert it into your certificate.
                </p>
              </div>

              <button
                onClick={() => setShowFields(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/35 hover:bg-white/5 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-5 space-y-2">
              {dynamicFields.map((field) => (
                <button
                  key={field.key}
                  onClick={() => insertField(field.key)}
                  className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] p-3 text-left transition hover:border-violet-400/20 hover:bg-violet-500/5"
                >
                  <div>
                    <p className="font-mono text-xs text-violet-300">
                      {field.key}
                    </p>

                    <p className="mt-1 text-[11px] text-white/35">
                      {field.description}
                    </p>
                  </div>

                  <Plus
                    size={15}
                    className="text-white/20 transition group-hover:text-violet-400"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}