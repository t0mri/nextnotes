import { NextRequest, NextResponse } from "next/server";

let message = "hi mom";

export function GET() {
    return new Response(JSON.stringify(message));
}

export async function POST(request: any) {
    message = await request.text();
    return new Response(JSON.stringify(message));
}

export async function PATCH(request: NextRequest) {
    let body = await request.text();
    return NextResponse.json(`patching... ${body}`);
}
