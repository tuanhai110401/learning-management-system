"use client";
import { Provider } from "@supabase/supabase-js";
import { loginGoogleAccount } from "./actions";
type OAuthProviderType = {
  name: Provider;
  title: string;
  icon?: JSX.Element;
  clientId?: string;
  scope?: string[];
};

export function OAuthButton() {
  return (
    <button
      className="bg-blue-300 p-2 border-[1px]"
      onClick={async () => {
        await loginGoogleAccount("google");
      }}
    >
      Login with Google
    </button>
  );
}
