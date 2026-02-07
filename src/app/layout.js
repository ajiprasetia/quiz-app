import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PointsProvider } from "@/context/PointsContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Quiz App",
  description: "Quiz App For Students - Test your knowledge and improve your skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <PointsProvider>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Analytics */}
          <SpeedInsights />
        </PointsProvider>
      </body>
    </html>
  );
}