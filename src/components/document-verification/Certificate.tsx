"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object({
  documentId: Yup.string().required("Student Id is required"),
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),
  dob: Yup.string().required("Date of Birth is required"),
});

const Certificate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //================= Dummy API call ================//
  const onSubmit = async (formData: any) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Dummy API Response:", data);

      alert("Dummy API Working! Data Submitted.");

      
      reset(
        {
          documentId: "",
          fullName: "",
          dob: "",
        },
        { keepErrors: false }
      );
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Document Verification
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/*============================ Document Id ====================================*/}
          <div className="mb-4">
            <label className="font-medium text-base sm:text-lg">
              Document Id
            </label>
            <input
              type="text"
              placeholder="Enter your student ID"
              className="w-full p-2 sm:p-3 mt-1 border rounded-lg"
              {...register("documentId")}
            />
            {errors.documentId && (
              <p className="text-red-500 text-sm">
                {errors.documentId.message}
              </p>
            )}
          </div>

          {/*==================== Full Name ==========================*/}
          <div className="mb-4">
            <label className="font-medium text-base sm:text-lg">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 sm:p-3 mt-1 border rounded-lg"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/*================ Date of Birth ===============*/}
          <div className="mb-6">
            <label className="font-medium text-base sm:text-lg">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full p-2 sm:p-3 mt-1 border rounded-lg"
              {...register("dob")}
            />
            {errors.dob && (
              <p className="text-red-500 text-sm">{errors.dob.message}</p>
            )}
          </div>

          <button className="w-full bg-amber-500 text-white py-2 sm:py-3 rounded-lg text-base sm:text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Certificate;
