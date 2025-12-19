// Middleware removed - Clerk authentication has been disabled
import { NextResponse } from "next/server";

export function middleware() {
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)"],
};
