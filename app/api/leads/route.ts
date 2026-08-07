import { NextRequest } from "next/server";

type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: string;
  interest: string;
  message?: string;
  createdAt: string;
};

const leads: Lead[] = [];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const teamSize = typeof body.teamSize === "string" ? body.teamSize.trim() : "";
    const interest = typeof body.interest === "string" ? body.interest.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !company || !teamSize || !interest) {
      return Response.json(
        { error: "Name, email, company, team size, and program interest are required." },
        { status: 400 }
      );
    }

    if (name.length > 120 || email.length > 254 || company.length > 120) {
      return Response.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    if (!emailPattern.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const lead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name,
      email,
      company,
      teamSize,
      interest,
      message: message || undefined,
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    return Response.json(
      { id: lead.id, message: "Lead captured successfully." },
      { status: 201 }
    );
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }
}

export async function GET() {
  return Response.json({ count: leads.length, leads });
}
