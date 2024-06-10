import type { Metadata } from "next";
import { Sidebar } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: {
    template: "%s | Barz-Socmed",
    default: "Barz-Socmed",
  },
  description: "Barz-Socmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="grid grid-cols-3 gap-4 max-h-screen"
      style={{ gridTemplateColumns: "15% 70% 15%" }}
    >
      <Sidebar />
      {children}
    </main>
  );
}
