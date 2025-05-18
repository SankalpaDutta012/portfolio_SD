
"use client"; 

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import CustomCursor from '@/components/ui/custom-cursor';
import React from 'react';
import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarInset,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Home, User, Briefcase, Layers, Award, Send, PanelLeft, Settings } from 'lucide-react';


const geistSans = GeistSans;
const geistMono = GeistMono;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navLinks = [
    { href: "#home", label: "Home", icon: <Home /> },
    { href: "#about-skills", label: "About & Skills", icon: <User /> },
    { href: "#projects", label: "Projects", icon: <Layers /> },
    { href: "#field-of-interest", label: "Field of Interest", icon: <Briefcase /> },
    { href: "#journey", label: "My Journey", icon: <Settings /> }, // Using Settings as a placeholder for Journey
    { href: "#achievements", label: "Achievements", icon: <Award /> },
    { href: "#contact", label: "Contact", icon: <Send /> },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <SidebarProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CustomCursor />
            <Sidebar variant="sidebar" collapsible="icon" className="border-r">
              <SidebarHeader>
                <Link href="/" className="flex items-center gap-2 px-2 py-1 hover:bg-sidebar-accent rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-primary">
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM100,100a28,28,0,1,1,28,28A28.1,28.1,0,0,1,100,100Z"></path>
                  </svg>
                  <span className="font-semibold text-sidebar-foreground group-data-[collapsible=icon]:hidden">Sankalpa's Space</span>
                </Link>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  {navLinks.map((link) => (
                    <SidebarMenuButton key={link.href} asChild tooltip={link.label}>
                      <Link href={link.href}>
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
            <SidebarRail />
            <SidebarInset>
              <div className="relative flex min-h-screen flex-col bg-background">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </SidebarInset>
            <Toaster />
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
