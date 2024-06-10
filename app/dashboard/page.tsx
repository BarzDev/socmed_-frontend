import Dashboard from "@/components/dashboard/dasboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Barz-Socmed",
};

export default function Home() {
  return <Dashboard />;
}
