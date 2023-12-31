import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/providers";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });
/* The code block `export const metadata: Metadata = { ... }` is defining an object named `metadata`
with the type `Metadata`. */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.e-ticket-web.com"),
  title: {
    default: "AR poribohon | Home Page",
    template: `%s | AR poribohon`,
  },
  description: "This is Home page of  AR poribohon",
  verification: {
    google: "google-site-verification=878787878",
  },
};
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
