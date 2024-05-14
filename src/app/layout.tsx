import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DensityLabs Pairing Session",
  description: "Test for DensityLabs interview for React position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="test-header">
            <h1>My DensityLabs test</h1>
          </div>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
