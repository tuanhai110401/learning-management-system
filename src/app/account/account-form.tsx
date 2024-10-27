"use client";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/createSupabase";
import { type User } from "@supabase/supabase-js";
import { useAuthStore } from "@/lib/store";

export default function AccountForm({ user }: { user: User | null }) {
  const { clearAuth } = useAuthStore();
  const handleSignOut = async () => {
    const response = await fetch("/auth/signout", {
      method: "POST",
    });
    console.log(response);
    clearAuth();
  };
  return (
    <div className="form-widget">
      <div>
        <form action="/auth/signout" method="post">
          {/* action="/auth/signout" method="post" */}
          <button className="bg-yellow-300 p-2 rounded-[8px]" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
