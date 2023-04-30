import { NextResponse } from "next/server";
import data from "../../../../lib/data";

export async function GET(request) {
  return NextResponse.json({ data });
}
