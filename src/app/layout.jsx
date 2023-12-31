import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "Google clone by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/google.svg" type="image/svg+xml" />
      </head>

      <body className={`relative min-h-screen ${inter.className}`}>
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
