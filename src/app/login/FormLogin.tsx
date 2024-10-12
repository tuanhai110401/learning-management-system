"use client";
import React from "react";
import { useForm } from "react-hook-form";
export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="w-full">
      <div className="w-full">
        <label
          className="text-[#0F172A] text-[18px] font-[600] leading-[160%] block"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="p-4 rounded-lg border-[1px] border-[#E2E8F0] w-full mt-1.5 mb-6"
          type="text"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
        />
      </div>
      <div>
        <label
          className="text-[#0F172A] text-[18px] font-[600] leading-[160%] block"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="p-4 rounded-lg border-[1px] border-[#E2E8F0] w-full mt-1.5 mb-6"
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: "Password is required" })}
        />
      </div>
    </form>
  );
}
