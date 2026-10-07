"use client";

import { ChangeEvent, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Download,
  FileSpreadsheet,
  FileText,
  Filter,
  Mail,
  MoreHorizontal,
  Plus,
  Search,
  Trash2,
  Upload,
  UserPlus,
  Users,
  X,
} from "lucide-react";

type Participant = {
  id: number;
  name: string;
  email: string;
  type: "Participant" | "Winner" | "Volunteer" | "Organizer";
  status: "Ready" | "Missing Email";
};

const initialParticipants: Participant[] = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul.kumar@gmail.com",
    type: "Participant",
    status: "Ready",
  },
  {
    id: 2,
    name: "Aman Singh",
    email: "aman.singh@gmail.com",
    type: "Winner",
    status: "Ready",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    type: "Participant",
    status: "Ready",
  },
  {
    id: 4,
    name: "Anjali Verma",
    email: "anjali.verma@gmail.com",
    type: "Volunteer",
    status: "Ready",
  },
  {
    id: 5,
    name: "Arjun Yadav",
    email: "arjun.yadav@gmail.com",
    type: "Winner",
    status: "Ready",
  },
  {
    id: 6,
    name: "Neha Gupta",
    email: "neha.gupta@gmail.com",
    type: "Participant",
    status: "Ready",
  },
  {
    id: 7,
    name: "Vivek Mishra",
    email: "vivek.mishra@gmail.com",
    type: "Participant",
    status: "Ready",
  },
  {
    id: 8,
    name: "Sakshi Singh",
    email: "sakshi.singh@gmail.com",
    type: "Participant",
    status: "Ready",
  },
];

function StatusBadge({
  status,
}: {
  status: Participant["status"];
}) {
  if (status === "Ready") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">
        <CheckCircle2 size={12} />
        Ready
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/15 bg-amber-400/10 px-2.5 py-1 text-xs text-amber-300">
      <X size={12} />
      Missing Email
    </span>
  );
}

function TypeBadge({
  type,
}: {
  type: Participant["type"];
}) {
  const styles = {
    Participant: "bg-white/5 text-white/50 border-white/10",
    Winner: "bg-violet-500/10 text-violet-300 border-violet-400/15",
    Volunteer: "bg-cyan-500/10 text-cyan-300 border-cyan-400/15",
    Organizer: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-400/15",
  };

  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-xs ${styles[type]}`}
    >
      {type}
    </span>
  );
}

export default function ParticipantsPage() {
  const [participants, setParticipants] =
    useState<Participant[]>(initialParticipants);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<number[]>([]);
  const [showImport, setShowImport] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState<"All" | Participant["type"]>("All");

  const [newParticipant, setNewParticipant] = useState({
    name: "",
    email: "",
    type: "Participant" as Participant["type"],
  });

  const filteredParticipants = useMemo(() => {
    return participants.filter((participant) => {
      const matchesSearch =
        participant.name.toLowerCase().includes(search.toLowerCase()) ||
        participant.email.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || participant.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [participants, search, filter]);

  const allSelected =
    filteredParticipants.length > 0 &&
    filteredParticipants.every((participant) =>
      selected.includes(participant.id)
    );

  function toggleSelect(id: number) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function toggleSelectAll() {
    if (allSelected) {
      setSelected((current) =>
        current.filter(
          (id) =>
            !filteredParticipants.some(
              (participant) => participant.id === id
            )
        )
      );
    } else {
      setSelected((current) => [
        ...new Set([
          ...current,
          ...filteredParticipants.map((participant) => participant.id),
        ]),
      ]);
    }
  }

  function removeSelected() {
    setParticipants((current) =>
      current.filter((participant) => !selected.includes(participant.id))
    );

    setSelected([]);
  }

  function addParticipant() {
    if (!newParticipant.name.trim() || !newParticipant.email.trim()) {
      return;
    }

    const participant: Participant = {
      id: Date.now(),
      name: newParticipant.name.trim(),
      email: newParticipant.email.trim(),
      type: newParticipant.type,
      status: "Ready",
    };

    setParticipants((current) => [...current, participant]);

    setNewParticipant({
      name: "",
      email: "",
      type: "Participant",
    });

    setShowAdd(false);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    /*
      Later:
      1. Read CSV/XLSX
      2. Detect columns
      3. Show column mapping
      4. Preview rows
      5. Save participants

      For now we only show the imported filename.
    */

    alert(
      `${file.name} selected. Excel/CSV mapping will be connected in the next step.`
    );

    event.target.value = "";
  }

  return (
    <main className="min-h-screen bg-[#08080c] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/8 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-600/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-6 lg:px-8">
        {/* Top */}
        <div className="flex items-center justify-between">
          <Link
            href="/events/demo"
            className="group flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft
              size={17}
              className="transition group-hover:-translate-x-1"
            />
            Back to event
          </Link>

          <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/55 transition hover:bg-white/[0.06] hover:text-white">
            <Download size={16} />
            Export
          </button>
        </div>

        {/* Header */}
        <section className="mt-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                <Users size={13} />
                CodeBlitz 2.0
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Participants
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                Import and manage everyone who should receive a certificate
                for this event.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowImport(true)}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/[0.07] hover:text-white"
              >
                <Upload size={16} />
                Import Excel / CSV
              </button>

              <button
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
              >
                <UserPlus size={16} />
                Add Participant
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total",
              value: participants.length,
              icon: Users,
            },
            {
              label: "Ready",
              value: participants.filter((p) => p.status === "Ready").length,
              icon: CheckCircle2,
            },
            {
              label: "Winners",
              value: participants.filter((p) => p.type === "Winner").length,
              icon: FileText,
            },
            {
              label: "Selected",
              value: selected.length,
              icon: UserPlus,
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
                    <p className="text-sm text-white/40">{item.label}</p>
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

        {/* Toolbar */}
        <section className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035]">
          <div className="flex flex-col gap-4 border-b border-white/10 p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search participants..."
                className="h-11 w-full rounded-xl border border-white/10 bg-black/20 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-violet-500/40"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) =>
                    setFilter(
                      e.target.value as "All" | Participant["type"]
                    )
                  }
                  className="h-11 appearance-none rounded-xl border border-white/10 bg-black/20 pl-10 pr-9 text-sm text-white/60 outline-none focus:border-violet-500/40"
                >
                  <option value="All">All types</option>
                  <option value="Participant">Participants</option>
                  <option value="Winner">Winners</option>
                  <option value="Volunteer">Volunteers</option>
                  <option value="Organizer">Organizers</option>
                </select>

                <Filter
                  size={15}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                />

                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/30"
                />
              </div>

              {selected.length > 0 && (
                <button
                  onClick={removeSelected}
                  className="flex h-11 items-center gap-2 rounded-xl border border-red-400/15 bg-red-400/5 px-4 text-sm text-red-300 transition hover:bg-red-400/10"
                >
                  <Trash2 size={15} />
                  Delete ({selected.length})
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="w-12 px-5 py-4">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleSelectAll}
                      className="h-4 w-4 accent-violet-500"
                    />
                  </th>

                  <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-white/30">
                    Participant
                  </th>

                  <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-white/30">
                    Type
                  </th>

                  <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-white/30">
                    Status
                  </th>

                  <th className="px-4 py-4 text-xs font-medium uppercase tracking-wider text-white/30">
                    Certificate
                  </th>

                  <th className="w-12 px-5 py-4" />
                </tr>
              </thead>

              <tbody>
                {filteredParticipants.map((participant) => (
                  <motion.tr
                    layout
                    key={participant.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.025]"
                  >
                    <td className="px-5 py-4">
                      <input
                        type="checkbox"
                        checked={selected.includes(participant.id)}
                        onChange={() => toggleSelect(participant.id)}
                        className="h-4 w-4 accent-violet-500"
                      />
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 text-sm font-medium text-violet-300">
                          {participant.name.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-medium text-white/85">
                            {participant.name}
                          </p>

                          <p className="mt-0.5 text-xs text-white/30">
                            {participant.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <TypeBadge type={participant.type} />
                    </td>

                    <td className="px-4 py-4">
                      <StatusBadge status={participant.status} />
                    </td>

                    <td className="px-4 py-4">
                      <span className="text-sm text-white/35">
                        Not generated
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/30 transition hover:bg-white/5 hover:text-white">
                        <MoreHorizontal size={17} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y divide-white/5 md:hidden">
            {filteredParticipants.map((participant) => (
              <div key={participant.id} className="p-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(participant.id)}
                    onChange={() => toggleSelect(participant.id)}
                    className="mt-2 h-4 w-4 accent-violet-500"
                  />

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-sm font-medium text-violet-300">
                    {participant.name.charAt(0)}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">
                      {participant.name}
                    </p>

                    <p className="mt-1 truncate text-xs text-white/35">
                      {participant.email}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <TypeBadge type={participant.type} />
                      <StatusBadge status={participant.status} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredParticipants.length === 0 && (
            <div className="px-6 py-16 text-center">
              <Users
                size={32}
                className="mx-auto text-white/15"
              />

              <h3 className="mt-4 text-sm font-medium text-white/70">
                No participants found
              </h3>

              <p className="mt-1 text-xs text-white/30">
                Try changing your search or filter.
              </p>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/30">
              Showing {filteredParticipants.length} of {participants.length}{" "}
              participants
            </p>

            <p className="text-xs text-white/30">
              {selected.length} selected
            </p>
          </div>
        </section>

        {/* Generate CTA */}
        <section className="mt-6 overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-r from-violet-500/[0.08] to-fuchsia-500/[0.05] p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <FileSpreadsheet size={20} />
              </div>

              <div>
                <h2 className="font-medium">
                  Participants are ready for certificates
                </h2>

                <p className="mt-1 text-sm text-white/40">
                  Once your certificate design is ready, you can generate
                  certificates for all eligible participants.
                </p>
              </div>
            </div>

            <Link
              href="/events/demo/certificate"
              className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <FileText size={16} />
              Design Certificate
            </Link>
          </div>
        </section>
      </div>

      {/* Import Modal */}
      {showImport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#101016] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Upload size={20} />
                </div>

                <h2 className="mt-4 text-xl font-semibold">
                  Import Participants
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  Upload an Excel or CSV file containing participant details.
                </p>
              </div>

              <button
                onClick={() => setShowImport(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 hover:bg-white/5 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center transition hover:border-violet-400/30 hover:bg-violet-500/[0.03]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                <FileSpreadsheet size={25} />
              </div>

              <p className="mt-4 text-sm font-medium text-white/80">
                Click to upload your file
              </p>

              <p className="mt-1 text-xs text-white/30">
                XLSX, XLS or CSV up to 10MB
              </p>

              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs font-medium text-white/60">
                Recommended columns
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {["name", "email", "type", "position"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white/5 px-2.5 py-1.5 font-mono text-[11px] text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setShowImport(false)}
                className="rounded-xl px-4 py-2.5 text-sm text-white/45 hover:text-white"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add participant modal */}
      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#101016] p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Add Participant
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  Add a participant manually to this event.
                </p>
              </div>

              <button
                onClick={() => setShowAdd(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 hover:bg-white/5 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-xs text-white/45">
                  Full name
                </label>

                <input
                  value={newParticipant.name}
                  onChange={(e) =>
                    setNewParticipant({
                      ...newParticipant,
                      name: e.target.value,
                    })
                  }
                  placeholder="Rahul Kumar"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-violet-500/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-white/45">
                  Email address
                </label>

                <input
                  type="email"
                  value={newParticipant.email}
                  onChange={(e) =>
                    setNewParticipant({
                      ...newParticipant,
                      email: e.target.value,
                    })
                  }
                  placeholder="rahul@example.com"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-violet-500/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-white/45">
                  Certificate type
                </label>

                <select
                  value={newParticipant.type}
                  onChange={(e) =>
                    setNewParticipant({
                      ...newParticipant,
                      type: e.target.value as Participant["type"],
                    })
                  }
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white/70 outline-none focus:border-violet-500/40"
                >
                  <option value="Participant">Participant</option>
                  <option value="Winner">Winner</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Organizer">Organizer</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setShowAdd(false)}
                className="rounded-xl px-4 py-2.5 text-sm text-white/45 hover:text-white"
              >
                Cancel
              </button>

              <button
                onClick={addParticipant}
                className="flex items-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-400"
              >
                <Plus size={16} />
                Add Participant
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}