"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form, Field } from "formik";
import Notifier from "@/utils/notify";
import { verifyOtp } from "../../api/clientAction";

export default function VerifyOtp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const signupData = JSON.parse(localStorage.getItem("signupData") || "{}");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
        <Formik
          initialValues={{ otp: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              if (!signupData.email) {
                Notifier.error("Signup data missing. Please register again.");
                router.push("/fullstack-developer-signup");
                return;
              }

              const payload = { ...signupData, otp: values.otp };
              const res = await verifyOtp(payload);
              console.log("OTP Response >>>>",res);

              if (res?.success) {
                Notifier.success(res.data?.message || "OTP verified successfully!");
                localStorage.removeItem("signupData");
                router.push("/fullstack-developer-login");
              } else {
                Notifier.error(res?.data?.message || "OTP verification failed");
              }
            } catch (err: any) {
              Notifier.error(err?.message || "Something went wrong!");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="otp"
                type="text"
                placeholder="Enter OTP"
                className="w-full border px-3 py-2 rounded"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full bg-amber-600 text-white py-2 rounded"
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
