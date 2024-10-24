import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Project Gutenberg Explorer",
  description: "Explore Project Gutenberg books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <div className="min-h-[calc(100vh-64px)] bg-background">
          <main className="container mx-auto px-4 py-8 flex flex-col items-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
