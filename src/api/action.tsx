"use server";

import { _endpoint_createRegister, _endpoint_login } from "@/apiConfig";

// Create Register
export async function createRegister(data: {
  fullname: string;
  email: string;
  password: string;
  mobile: string;
  roleId: number;
  createdBy?: number;
}) {
  const headers = {
    "Content-Type": "application/json",
    "api-key": process.env.API_KEY!,
  };

  console.log("Sent Headers :::", headers);
  console.log("Request payload :::", data);

  try {
    const res = await fetch(_endpoint_createRegister, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    // console.log("Create Register response :::", responseData);
    if (!res.ok) {
      throw new Error(responseData?.message || "Create Register failed");
    }
    return { success: true, data: responseData };
  } catch (error: any) {
    console.error("Error in createRegister:", error);
    const message = error?.message || "Something went wrong on server";
    return { success: false, message };
  }
}

// Login
export async function login(values: { email: string; password: string }) {
  const payload = {
    email: values.email,
    password: values.password,
  };
  const headers = {
    "Content-Type": "application/json",
    "api-key": process.env.API_KEY!,
  };
  // console.log("Request headers ::::>", headers);
  try {
    const res = await fetch(_endpoint_login, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });
    console.log("Login response headers ::::>", headers);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Login failed");
    }
    // Return structured response like your original Axios version
    return { success: true, data };
  } catch (error: any) {
    console.error("Error in loginAction:", error);
    const message = error?.message || "Something went wrong on server";
    return { success: false, message };
  }
}

// Login with learner
// export async function learnerLogin(data: { number: string }) {
//   try {
//     const res = await HTTP.post(_endpoint_login, data);
//     return { success: true, data: res.data };
//   } catch (error: any) {
//     const message =
//       error?.response?.data?.message ||
//       error?.message ||
//       "Something went wrong on server";
//     return { success: false, message };
//   }
// }
