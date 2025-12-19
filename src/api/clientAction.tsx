"use client";
import { createRegister } from "./action";
export async function createRegisterClient(data: any) {
  return await createRegister(data);
}

export async function verifyOtp(data: any) {
  return await createRegister(data); 
}
