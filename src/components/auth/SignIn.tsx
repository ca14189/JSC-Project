"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../api/action";
import Notifier from "@/utils/notify";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { setTokenCookie } from "../../utils/setTokenCookie";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-[#f3eada] p-8 rounded-lg shadow-lg max-w-sm w-full relative">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              // const res = await login(values);
              // const token = res.data.accessToken;
              // if (res.success) {
              //   if (res.data?.accessToken) {
              //    setTokenCookie(token);
              //   }
              //   router.push("/dashboard");
              // } else {
              //   Notifier.error(res.message || "Invalid credentials");
              // }
              const res = await login(values);

if (res.success && res.data?.accessToken) {
  setTokenCookie(res.data.accessToken);
  router.push("/dashboard");
} else {
  Notifier.error(res.message || "Invalid credentials");
}

            } catch (err: any) {
              Notifier.error(err?.message || "Login failed! Please try again.");
            } finally {
              setSubmitting(false);
            }
          }}

        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Password with show/hide */}
              <div className="relative">
                <label className="block text-sm font-medium mb-1">Password</label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {/* Toggle button */}
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-gray-500"
                >
                  {showPassword ? <IoMdEyeOff size={20} /> : <FaRegEye size={20} />}
                </button>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition disabled:opacity-50"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        {/* Footer */}
        {/* <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a
            href="/fullstack-developer-signup"
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default SignIn;
