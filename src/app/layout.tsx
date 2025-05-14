import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Corrected import
import { GeistMono } from 'geist/font/mono'; // Corrected import
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = GeistSans; // Use the imported variable directly
const geistMono = GeistMono; // Use the imported variable directly

export const metadata: Metadata = {
  title: "Sankalpa's Space - Developer Portfolio",
  description: 'Portfolio of Sankalpa Dutta, a full-stack developer and tech enthusiast.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
