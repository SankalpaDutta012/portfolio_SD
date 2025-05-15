
"use client"; // Required for useEffect and browser APIs

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import CustomCursor from '@/components/ui/custom-cursor';
import React, { useEffect } from 'react'; // Import useEffect

const geistSans = GeistSans;
const geistMono = GeistMono;

// Metadata has been moved to src/app/page.tsx as RootLayout is a Client Component.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    
    // Initialize audio only on the client side
    if (typeof window !== "undefined") {
      try {
        audio = new Audio('/sound.wav'); // Path to your sound file in the public directory
        audio.preload = "auto"; // Suggest to the browser to preload the audio
      } catch (error) {
        console.error("Failed to initialize click sound:", error);
      }
    }

    const handleClick = (event: MouseEvent) => {
      if (!audio) {
        console.log('Audio object is null. Sound cannot be played.');
        return;
      }

      const target = event.target as HTMLElement;
      // console.log('Clicked target:', target); // For debugging: logs the clicked element
      
      const isInteractive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], input[type="checkbox"], input[type="radio"], select, summary, details, [tabindex]:not([tabindex="-1"])'
      );
      // console.log('Is interactive:', isInteractive ? 'Yes' : 'No'); // For debugging: logs if the element is considered interactive

      if (isInteractive) {
        // console.log('Attempting to play click sound for:', target); // For debugging
        audio.currentTime = 0; // Rewind to start if already playing or played
        audio.play().catch(error => {
          // Browsers might block audio play if there wasn't prior user interaction on the page,
          // or if the play() call isn't directly triggered by a user event.
          console.warn("Could not play click sound:", error.message, error);
        });
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleClick, true); // Use capture phase

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and unmount

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
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
