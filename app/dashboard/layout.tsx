import type { Metadata } from "next";
import { SidebarMobile, SidebarWindows } from "@/components/ui/sidebar";

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
      className="block md:grid grid-cols-3 gap-4 max-h-screen"
      style={{ gridTemplateColumns: "15% 70% 15%" }}
    >
      <div className="md:block hidden">
        <SidebarWindows />
      </div>
      <div className="md:hidden block">
        <SidebarMobile />
      </div>
      {children}
    </main>
  );
}
