import type { Metadata } from "next";
import { Prompt, Raleway } from "next/font/google";
import ProjectWrap from "./Components/ProjectWrap/ProjectWrap";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  // variable: '--font-raleway', // optional: use this if you want to apply with CSS variables
});
export const metadata: Metadata = {
  title: "Regal",
  description: "Fitted by Regal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-white`}>
        <Suspense fallback={<Loading />}>
          <ProjectWrap>{children}</ProjectWrap>
        </Suspense>
      </body>
    </html>
  );
}
