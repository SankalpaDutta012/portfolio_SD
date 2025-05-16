
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullTagline = "Full-Stack Developer, IoT Innovator & Tech Enthusiast – Crafting intelligent, real-time solutions that merge AI, sensors, and code into smart systems for a connected future. Passionate about research, traffic optimization, and building digital experiences that simplify life.";

export function HomeSection() {
  const [mounted, setMounted] = useState(false);
  const [typedTagline, setTypedTagline] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingDelayPassed, setTypingDelayPassed] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Delay to start typing after initial paragraph animation
    // The paragraph motion.p has delay: 0.6s, duration: 0.5s. So it fully appears at 1.1s.
    const timer = setTimeout(() => {
      setTypingDelayPassed(true);
      setIsTyping(true); // Start typing and show cursor
    }, 1100); // Start typing after 1.1s
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!typingDelayPassed || typedTagline.length === fullTagline.length) {
      if (typedTagline.length === fullTagline.length) {
        setIsTyping(false); // Typing finished, hide cursor
      }
      return;
    }

    const typingSpeed = 40; // milliseconds per character
    const intervalId = setInterval(() => {
      setTypedTagline((prev) => {
        const nextCharIndex = prev.length;
        if (nextCharIndex < fullTagline.length) {
          return fullTagline.substring(0, nextCharIndex + 1);
        } else {
          clearInterval(intervalId);
          setIsTyping(false); // Typing finished
          return prev;
        }
      });
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [typingDelayPassed, typedTagline, fullTagline]);


  if (!mounted) {
    // Prevent FOUC or layout shift by rendering nothing or a placeholder on the server
    return null;
  }

  return (
    <section id="home" className="relative flex h-[calc(100vh-3.5rem)] min-h-[600px] w-full items-center justify-center overflow-hidden animated-gradient-background">
      <div className="container z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          whileHover={{ scale: 1.05 }}
          className="mb-8"
        >
          <Image
            src="/SD11.jpg"
            alt="Sankalpa Dutta"
            width={200}
            height={200}
            className="rounded-full border-4 border-background shadow-lg object-cover"
            data-ai-hint="profile photo"
            priority
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Sankalpa Dutta
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl min-h-[100px] sm:min-h-[80px]" // Added min-height to prevent layout shift
        >
          {typedTagline}
          {isTyping && <span className="typing-cursor" />}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: typedTagline.length === fullTagline.length ? 0.2 : (fullTagline.length * 40 / 1000) + 1.1 + 0.2, duration: 0.5 }} // Delay buttons until typing is done or nearly done
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
