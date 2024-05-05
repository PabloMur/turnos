import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/firebaseConn";

export function GET() {
  return NextResponse.json({ test: "ok", base: firestore });
}
