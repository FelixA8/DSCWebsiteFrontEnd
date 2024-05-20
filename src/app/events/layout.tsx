import type { Metadata } from "next";
import HeaderComponent from "@/components/header";

export const metadata: Metadata = {
  title: "Events",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        {children}
      </div>
  );
}
