"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "@/svg";
import ButtonCustom from "@/components/Button";
import { login, signup } from "./actions";
// import { getCookie } from "@/utils/cookies";

interface LoginFormInputs {
  email: string;
  password: string;
}

const loginSchema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters "),
  confirmPassword: z.string(),
});
export default function FormLogin({ type }: { type: string }) {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: zodResolver(loginSchema) });

  const handleSubmitFormLogin = () => {
    const value = getValues();
    const formData = new FormData();
    formData.append("email", value.email);
    formData.append("password", value.password);
    if (isLogin) {
      login(formData);
    } else {
      signup(formData);
    }
  };
  // const valueCookie: any = getCookie("access_token");
  // console.log(valueCookie);

  return (
    <>
      <h2 className="text-[#0F172A] text-[32px] font-[600] leading-[130%] mb-6">
        {isLogin ? "Sign in to your account" : "Create Your Account"}{" "}
        {/* {valueCookie} */}
      </h2>
      <form className="w-full select-none">
        <div className="w-full mb-6">
          <label
            className="text-[#0F172A] text-[18px] font-[600] leading-[160%] block"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="p-4 rounded-lg border-[1px] border-[#E2E8F0] w-full mt-1.5"
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 pt-2">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="text-[#0F172A] text-[18px] font-[600] leading-[160%] block"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="p-4 rounded-lg border-[1px] border-[#E2E8F0] w-full mt-1.5 "
            type="password"
            required
            placeholder="Enter Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 pt-2">{errors.password?.message}</p>
          )}
        </div>
        {!isLogin && (
          <div>
            <label
              className="text-[#0F172A] text-[18px] font-[600] leading-[160%] block"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="p-4 rounded-lg border-[1px] border-[#E2E8F0] w-full mt-1.5 mb-6"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>
        )}
        <ButtonCustom
          className="rounded-lg w-full"
          color="#020617"
          title={isLogin ? "Sign In" : "Sign Up"}
          p="10px 24px"
          rightSection={<ArrowRight />}
          click={handleSubmitFormLogin}
        />
      </form>
      <h3 className="text-gray-500 py-2">
        {isLogin
          ? "Don’t have an account? Click to"
          : "Already have an account? Click to"}
        <button
          className="text-blue-600 underline ml-1"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? " Sign up" : " Sign In"}
        </button>
        .
      </h3>
    </>
  );
}
