import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe finder App",
  description: "Look for recipes of world cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-4 mx-auto`}>
        <main className="min-h-screen p-6">{children}</main>
      </body>
    </html>
  );
}
