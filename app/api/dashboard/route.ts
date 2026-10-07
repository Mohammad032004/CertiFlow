import { NextResponse } from "next/server";

const dashboardData = {
  workspace: {
    id: "workspace-ai-club",
    name: "AI Club",
    type: "Organization workspace",
  },

  organizer: {
    name: "Irfan Ansari",
    role: "Organizer",
    initials: "IA",
  },

  stats: {
    totalEvents: 12,
    certificatesGenerated: 842,
    certificatesDelivered: 790,
    certificatesVerified: 286,
  },

  statsChange: {
    totalEvents: "+3 this month",
    certificatesGenerated: "+128 this month",
    certificatesDelivered: "93.8% delivery rate",
    certificatesVerified: "+42 this month",
  },

  events: [
    {
      id: "evt-codeblitz-2",
      name: "CodeBlitz 2.0",
      type: "Hackathon",
      date: "12 Oct 2026",
      participants: 320,
      certificates: 320,
      status: "Completed",
    },
    {
      id: "evt-ai-ml-workshop",
      name: "AI & ML Workshop",
      type: "Workshop",
      date: "18 Oct 2026",
      participants: 85,
      certificates: 0,
      status: "Upcoming",
    },
    {
      id: "evt-techx-26",
      name: "TechX '26",
      type: "Technology Event",
      date: "24 Oct 2026",
      participants: 210,
      certificates: 0,
      status: "Upcoming",
    },
    {
      id: "evt-cybersecurity",
      name: "Cybersecurity Bootcamp",
      type: "Bootcamp",
      date: "02 Nov 2026",
      participants: 150,
      certificates: 0,
      status: "Draft",
    },
  ],

  activities: [
    {
      id: "activity-1",
      type: "certificate_generated",
      title: "Certificates generated",
      description: "CodeBlitz 2.0",
      time: "12 minutes ago",
    },
    {
      id: "activity-2",
      type: "certificates_delivered",
      title: "Certificates delivered",
      description: "318 emails sent successfully",
      time: "28 minutes ago",
    },
    {
      id: "activity-3",
      type: "participants_imported",
      title: "Participants imported",
      description: "320 participants added",
      time: "1 hour ago",
    },
    {
      id: "activity-4",
      type: "event_completed",
      title: "Event completed",
      description: "CodeBlitz 2.0",
      time: "Yesterday",
    },
  ],
};

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: dashboardData,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Dashboard API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load dashboard data",
      },
      {
        status: 500,
      }
    );
  }
}