import Image from "next/image";
import FormLogin from "./FormLogin";
import { OAuthButton } from "./oauth-login";
export default function Login() {
  return (
    <div className="h-[calc(100vh-65px)] justify-center flex flex-row-reverse">
      <div className="w-2/5 hidden sm:block">
        <Image
          className="w-full h-[calc(100vh-65px)] object-cover"
          src="https://res.cloudinary.com/dxaqounpg/image/upload/v1728753599/Learing%20Management%20System/signin.jpg"
          width={868}
          height={1300}
          alt="banner login"
        />
      </div>
      <div className="md:w-[60%] w-full p-6 lg:p-20 flex flex-col items-center justify-center">
        <FormLogin />
        <div className="flex flex-nowrap justify-center items-center w-full my-6">
          <div className="flex-1 h-[1px] bg-[#94A3B8]"></div>
          <span className="text-[14px] mx-[14px] text-[#94A3B8] font-[400] leading-[150%]">
            Sign in with
          </span>
          <div className="flex-1 h-[1px] bg-[#94A3B8]"></div>
        </div>
        <OAuthButton />
      </div>
    </div>
  );
}

// export default function Login() {
//   return (
//     <form action="/auth/sign-in" method="post">
//       <label htmlFor="email">Email</label>
//       <input name="email" />
//       <label htmlFor="password">Password</label>
//       <input type="password" name="password" />
//       <button>Sign In</button>
//       <button formAction="/auth/sign-up">Sign Up</button>
//     </form>
//   );
// }
