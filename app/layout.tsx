import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth App",
  description: "Basic authentication UI with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}