"use client";

import { useRouter } from "next/navigation";
import { Formik, Form, Field } from "formik";
import Notifier from "@/utils/notify";
import { setTokenCookie } from "../../utils/setTokenCookie";

export default function VerifyOtp() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

        <Formik
          initialValues={{ otp: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const loginData = sessionStorage.getItem("loginData");

              if (!loginData) {
                Notifier.error("Session expired. Please login again.");
                router.push("/signin");
                return;
              }

              const { email, password } = JSON.parse(loginData);

              const res = await fetch("/api/auth/verify-otp", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include", // 
                body: JSON.stringify({
                  email,
                  password,
                  otp: values.otp,
                }),
              });

              const data = await res.json();

              if (data.success) {
                Notifier.success("OTP verified successfully!");

                // Redirect properly
                setTokenCookie(data.accessToken);
                router.push("/dashboard");
                
                // Cleanup after redirect
                setTimeout(() => {
                  sessionStorage.removeItem("loginData");
                }, 500);
              } else {
                Notifier.error(data.message || "OTP verification failed");
              }
            } catch (err: any) {
              Notifier.error(err.message || "Something went wrong!");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <Field
                name="otp"
                type="text"
                placeholder="Enter 6-digit OTP"
                className="w-full border px-3 py-2 rounded text-center tracking-widest"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white py-2 rounded"
              >
                {isSubmitting ? "Verifying..." : "Verify OTP"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
