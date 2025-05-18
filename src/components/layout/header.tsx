
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Home, User, Briefcase, Layers, Award, Send, Settings, FileText } from 'lucide-react'; // Added FileText for CV

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", icon: <Home /> },
    { href: "#about-skills", label: "About & Skills", icon: <User /> },
    { href: "#projects", label: "Projects", icon: <Layers /> },
    { href: "#field-of-interest", label: "Field of Interest", icon: <Briefcase /> },
    { href: "#journey", label: "My Journey", icon: <Settings /> }, // Using Settings as a placeholder for Journey
    { href: "#achievements", label: "Achievements", icon: <Award /> },
    { href: "#contact", label: "Contact", icon: <Send /> },
    { href: "https://drive.google.com/file/d/1WBMGNiKuOhofJQsTQTLRseM1tixCBR4m/view?usp=drive_link", label: "View CV", icon: <FileText />, target: "_blank" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6 fill-primary">
            <rect width="256" height="256" fill="none"></rect>
            <path d="M128,24a104,104,0,1,0,104,104A104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM100,100a28,28,0,1,1,28,28A28.1,28.1,0,0,1,100,100Z"></path>
          </svg>
          <span className="font-bold">Sankalpa's Space</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-3 lg:space-x-4">
          {navLinks.map((link) => (
            <Button key={link.href} variant="link" asChild className="text-sm px-2 lg:px-3">
              <Link href={link.href} target={link.target}>
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center space-x-2 ml-auto">
          <ThemeToggle />
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link 
                      href={link.href} 
                      target={link.target}
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className="flex items-center"
                    >
                      {React.cloneElement(link.icon, { className: "mr-2 h-4 w-4" })}
                      <span>{link.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
