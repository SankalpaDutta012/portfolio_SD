"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export function HomeSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent FOUC or layout shift by rendering nothing or a placeholder on the server
    return null;
  }

  return (
    <section id="home" className="relative flex h-[calc(100vh-3.5rem)] min-h-[600px] w-full items-center justify-center overflow-hidden animated-gradient-background">
      <div className="container z-10 flex flex-col items-center text-center">
        <div className="mb-8 transition-transform duration-500 ease-out hover:scale-105">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/firebase-studio-users.appspot.com/o/imagereplacements%2Fclwdb0q610008m3wk6z99m3m0%2Foriginal?alt=media&token=3c6c39ff-f01a-4db6-b234-dfbb196d8295"
            alt="Sankalpa Dutta"
            width={200}
            height={200}
            className="rounded-full border-4 border-background shadow-lg object-cover"
            data-ai-hint="profile man"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Sankalpa Dutta
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
          Full-Stack Developer & Tech Enthusiast. Crafting digital experiences with code and creativity.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button size="lg" asChild>
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
