'use client';

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../common/Loader";
import Notifier from "@/utils/notify";
import { lLoginSchema } from "../../utils/schema";
import PhoneInputComponent from "./PhoneInputComponent"; 

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl mx-auto mt-20">
      {/* Left Side */}
      <div className="text-center bg-black text-white w-full md:w-1/2 p-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Login To Learn</h1>
        <p className="text-lg md:text-xl">
          Learn, Develop & Scale <br />
          Modern Apps with <span className="text-orange-500 font-semibold">JSChamps</span>
        </p>
      </div>

      {/* Right Side */}
      <div className="text-center bg-white text-black w-full md:w-1/2 p-20">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Sign In to Continue</h1>

        <Formik
          initialValues={{ mobile: "" }}
          validationSchema={lLoginSchema}
          onSubmit={async (values) => {
            try {
              setLoading(true);

              // Simulate successful login without API
              Notifier.success("Login successful!");
              localStorage.setItem("token", "dummy-token");
              router.push("/dashboard");

            } catch (err: any) {
              Notifier.error(err?.message || "Login failed! Please try again.");
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Mobile Input */}
              <PhoneInputComponent
              />
              <div className="text-red-500 text-sm mt-1">
                <ErrorMessage name="mobile" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`mt-4 px-6 py-2 rounded-lg font-bold text-white ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500"
                }`}
                disabled={loading}
              >
                {loading ? <Loader /> : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
