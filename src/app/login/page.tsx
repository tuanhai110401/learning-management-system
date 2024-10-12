import Image from "next/image";
import FormLogin from "./FormLogin";
import { login, signup } from "./actions";
import { OAuthButton } from "./oauth-login";
export default function LoginPage() {
  return (
    <div className="h-[calc(100vh-65px)] md:bg-red-300 lg:bg-green-300 sm:bg-blue-300 flex flex-row-reverse">
      {/* <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button
          formAction={login}
          className="bg-green-400 p-2 rounded-[8px] ml-2"
        >
          Log in
        </button>
        <button
          formAction={signup}
          className="bg-red-400 p-2 rounded-[8px] ml-2"
        >
          Sign up
        </button>
      </form>
      <OAuthButton /> */}
      <div className="w-2/5">
        <Image
          className="w-full h-[calc(100vh-65px)] object-cover sm:hidden"
          src="https://res.cloudinary.com/dxaqounpg/image/upload/v1728753599/Learing%20Management%20System/signin.jpg"
          width={868}
          height={1300}
          alt="banner login"
        />
      </div>
      <div className="w-[60%] p-[80px] flex flex-col items-center justify-center">
        <h2 className="text-[#0F172A] text-[32px] font-[600] leading-[130%] mb-6">
          Sign in to your account
        </h2>
        <FormLogin />
        <div className="flex flex-nowrap justify-center items-center">
          <div className="flex-1 w-40 h-[1px] bg-[#94A3B8]"></div>
          <span className="text-[14px] mx-[14px] text-[#94A3B8] font-[400] leading-[150%]">
            Sign in with
          </span>
          <div className="flex-1 h-[1px] bg-[#94A3B8]"></div>
        </div>
      </div>
    </div>
  );
}
