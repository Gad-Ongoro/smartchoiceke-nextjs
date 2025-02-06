import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ClientProviders from "@/context/ClientProviders";
import MouseMoveEffect from "@/components/Animations/mouse-move-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Choice KE",
  description: "Smart Choice Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden-900`}
      >
        <MouseMoveEffect />
        <GoogleOAuthProvider clientId={process.env.GOOGLE_OAUTH2_CLIENT_ID as string}>
          <ClientProviders>
            {children}
          </ClientProviders>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
