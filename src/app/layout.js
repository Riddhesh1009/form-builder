import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Form Builder App",
  description: "Form builder app using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen w-full flex flex-col">
          <Navbar />
          <div className="flex-1 bg-gray-50">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}
