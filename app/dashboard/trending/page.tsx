import Trending from "@/components/trending/trending";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending",
};

export default function Home() {
  return <Trending />;
}
