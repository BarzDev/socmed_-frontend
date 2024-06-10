"use client";
import { SessionProvider } from "next-auth/react";

export function Auth_Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
