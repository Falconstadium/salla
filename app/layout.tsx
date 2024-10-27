import type { Metadata } from "next";
import "./globals.css";
import Providers from "./components/Provider";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Salla",
    default: "Salla",
  },
  description: "ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body suppressHydrationWarning={true} className="font-Montserrat">
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
