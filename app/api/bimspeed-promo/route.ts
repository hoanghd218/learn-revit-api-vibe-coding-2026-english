import { NextRequest, NextResponse } from "next/server";

interface PromoFormPayload {
  fullName: string;
  email: string;
  phone: string;
  work: string;
  submittedAt: string;
}

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // 5 requests per hour
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  // Remove HTML tags and potential XSS vectors
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[<>'"]/g, "") // Remove special characters
    .trim();
}

function validateEmail(email: string): boolean {
  // More robust email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  // Allow various phone formats
  const phoneRegex = /^[\d\s\-+()]{7,20}$/;
  return phoneRegex.test(phone);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: PromoFormPayload = await request.json();

    // Sanitize inputs
    const sanitizedData = {
      fullName: sanitizeInput(body.fullName),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      work: sanitizeInput(body.work),
      submittedAt: body.submittedAt,
    };

    // Validate inputs
    if (!sanitizedData.fullName || sanitizedData.fullName.length < 2) {
      return NextResponse.json(
        { success: false, message: "Invalid full name" },
        { status: 400 }
      );
    }

    if (!validateEmail(sanitizedData.email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!validatePhone(sanitizedData.phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (!sanitizedData.work || sanitizedData.work.length < 2) {
      return NextResponse.json(
        { success: false, message: "Invalid work/company name" },
        { status: 400 }
      );
    }

    // Call webhook with sanitized data
    const webhookUrl = process.env.BIMSPEED_WEBHOOK_URL ||
      "https://n8n.bimspeed.net/webhook/caed31dc-98f7-4510-9576-ef977eaaa622";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sanitizedData),
    });

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form. Please try again."
      },
      { status: 500 }
    );
  }
}
