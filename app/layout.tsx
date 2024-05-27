import "./globals.css";
import type { Metadata } from "next";
import { ChildrenType } from "@/interface";

export const metadata: Metadata = {
  title: "Blog Magazine",
  description: "Hello This is a Blog Magazine Application!",
};

const RootLayout = ({ children }: Readonly<ChildrenType>) => {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={"/logo.svg"} />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
