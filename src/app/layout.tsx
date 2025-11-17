import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsAppButton from "@/Components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voxelhaus Consultancy",
  description:
    "Voxelhaus Consultancy delivers premium real estate visualization through virtual staging, floor plans, photo editing, and marketing design services.",
  icons: {
    icon: [
      { url: "/OG logo.png", sizes: "any" },
      { url: "/OG logo.png", type: "image/png" },
    ],
    apple: "/OG logo.png",
    shortcut: "/OG logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          {/* Google Search Console Verification */}
          <meta
            name="google-site-verification"
            content="EkBtyQz-ZJgshA3R5pe68uBxz729ls6cT-r77pgjHL4"
          />
          {/* Microsoft Bing Webmaster Verification */}
          <meta
            name="msvalidate.01"
            content="5306464E4DE57EA0791A5B0F381FAEF7"
          />
          {/* Google Analytics (gtag.js) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-30RNG4HJDB"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-30RNG4HJDB');`}</Script>
          {/* Microsoft Clarity Verification */}
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "u5cnulx5kt");`,
            }}
          />
        </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 text-white antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-20 md:pt-24">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
