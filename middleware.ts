import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { visitorLog } from "lib/visitorLog";

export async function middleware(request: NextRequest) {
  visitorLog({
    userAgent: request.headers.get("user-agent"),
    time: new Date().toISOString(),
  });

  return NextResponse.next();
}
