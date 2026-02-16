import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, otp } = body;

    if (!email || !password || !otp) {
      return NextResponse.json(
        { success: false, message: "Email, password, and OTP are required" },
        { status: 400 }
      );
    }

    // Call IAM service with OTP - use admin login for college portal
    const res = await fetch(`${process.env.NEXT_PUBLIC_IAM_API_URL}/login/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.API_KEY!,
      },
      body: JSON.stringify({ email, password, otp }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "OTP verification failed" },
        { status: res.status }
      );
    }

    // Successful OTP verification - set httpOnly cookies
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      name: data.name,
      email: data.email,
    });

    if (data.accessToken) {
      response.cookies.set("accessToken", data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 30 * 60, // 30 minutes
      });
    }

    if (data.refreshToken) {
      response.cookies.set("refreshToken", data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 3600, // 7 days
      });
    }

    return response;
  } catch (error: unknown) {
    console.error("Verify OTP API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Something went wrong on server",
      },
      { status: 500 }
    );
  }
}
