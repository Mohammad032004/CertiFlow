export type EventStatus = "Draft" | "Upcoming" | "Completed";

export type Event = {
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
  status: EventStatus;
  certificateType: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventInput = {
  name: string;
  description?: string;
  type: string;
  date: string;
  startTime?: string;
  endTime?: string;
  venue?: string;
  organizer?: string;
  organization?: string;
  certificateType?: string;
};

export type UpdateEventInput = Partial<CreateEventInput> & {
  status?: EventStatus;
};

let events: Event[] = [
  {
    id: "evt-codeblitz-2",
    name: "CodeBlitz 2.0",
    description:
      "A national-level technology and coding competition organized by the AI Club.",
    type: "Hackathon",
    date: "2026-10-12",
    startTime: "09:00",
    endTime: "18:00",
    venue: "Lucknow Public Post Graduate College",
    organizer: "Irfan Ansari",
    organization: "AI Club",
    participants: 320,
    certificates: 320,
    status: "Completed",
    certificateType: "Participation Certificate",
    createdAt: "2026-09-20T10:00:00.000Z",
    updatedAt: "2026-10-12T18:30:00.000Z",
  },
  {
    id: "evt-ai-ml-workshop",
    name: "AI & ML Workshop",
    description:
      "Hands-on workshop covering artificial intelligence and machine learning fundamentals.",
    type: "Workshop",
    date: "2026-10-18",
    startTime: "10:00",
    endTime: "16:00",
    venue: "AI Club Lab",
    organizer: "Irfan Ansari",
    organization: "AI Club",
    participants: 85,
    certificates: 0,
    status: "Upcoming",
    certificateType: "Participation Certificate",
    createdAt: "2026-09-25T10:00:00.000Z",
    updatedAt: "2026-09-25T10:00:00.000Z",
  },
  {
    id: "evt-techx-26",
    name: "TechX '26",
    description:
      "Technology showcase and innovation event for students and developers.",
    type: "Technology Event",
    date: "2026-10-24",
    startTime: "10:00",
    endTime: "17:00",
    venue: "Main Auditorium",
    organizer: "Irfan Ansari",
    organization: "AI Club",
    participants: 210,
    certificates: 0,
    status: "Upcoming",
    certificateType: "Participation Certificate",
    createdAt: "2026-09-28T10:00:00.000Z",
    updatedAt: "2026-09-28T10:00:00.000Z",
  },
  {
    id: "evt-cybersecurity",
    name: "Cybersecurity Bootcamp",
    description:
      "Practical cybersecurity training including ethical hacking and security fundamentals.",
    type: "Bootcamp",
    date: "2026-11-02",
    startTime: "09:30",
    endTime: "17:00",
    venue: "Computer Lab",
    organizer: "Irfan Ansari",
    organization: "AI Club",
    participants: 150,
    certificates: 0,
    status: "Draft",
    certificateType: "Participation Certificate",
    createdAt: "2026-10-01T10:00:00.000Z",
    updatedAt: "2026-10-01T10:00:00.000Z",
  },
];

function generateEventId() {
  return `evt-${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 8)}`;
}

export async function getEvents(): Promise<Event[]> {
  return events;
}

export async function getEventById(id: string): Promise<Event | null> {
  return events.find((event) => event.id === id) ?? null;
}

export async function createEvent(
  input: CreateEventInput
): Promise<Event> {
  const now = new Date().toISOString();

  const event: Event = {
    id: generateEventId(),

    name: input.name,
    description: input.description ?? "",

    type: input.type,

    date: input.date,

    startTime: input.startTime ?? "",
    endTime: input.endTime ?? "",

    venue: input.venue ?? "",

    organizer: input.organizer ?? "Irfan Ansari",

    organization: input.organization ?? "AI Club",

    participants: 0,

    certificates: 0,

    status: "Draft",

    certificateType:
      input.certificateType ?? "Participation Certificate",

    createdAt: now,
    updatedAt: now,
  };

  events.unshift(event);

  return event;
}

export async function updateEvent(
  id: string,
  input: UpdateEventInput
): Promise<Event | null> {
  const index = events.findIndex((event) => event.id === id);

  if (index === -1) {
    return null;
  }

  const existingEvent = events[index];

  const updatedEvent: Event = {
    ...existingEvent,

    ...input,

    updatedAt: new Date().toISOString(),
  };

  events[index] = updatedEvent;

  return updatedEvent;
}

export async function deleteEvent(id: string): Promise<boolean> {
  const existingLength = events.length;

  events = events.filter((event) => event.id !== id);

  return events.length < existingLength;
}