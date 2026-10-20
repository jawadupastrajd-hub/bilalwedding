import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

/**
 * RSVP jawab validate kar ke server par `.data/rsvps.ndjson` me save karta hai.
 * NOTE: Vercel ke serverless functions par ye file permanent nahi rehti.
 * Permanent RSVPs ke liye database (Vercel KV / Postgres) ya Google Sheet
 * connect karein.
 */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: unknown;
      attendance?: unknown;
      dietary?: unknown;
    };

    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!name) {
      return NextResponse.json(
        { ok: false, error: "Name is required" },
        { status: 400 }
      );
    }

    const record = {
      ts: new Date().toISOString(),
      name: name.slice(0, 150),
      attendance:
        typeof body.attendance === "string"
          ? body.attendance.slice(0, 10)
          : "",
      message:
        typeof body.dietary === "string"
          ? body.dietary.slice(0, 1000)
          : "",
    };

    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "rsvps.ndjson"),
      JSON.stringify(record) + "\n",
      "utf8"
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not save RSVP" },
      { status: 500 }
    );
  }
}
