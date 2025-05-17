
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDownCircle } from "lucide-react"; // Added ArrowDownCircle
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "Full-Stack Developer.",
  "IoT Innovator.",
  "Tech Enthusiast.",
  "Crafting intelligent, real-time solutions.",
  "Merging AI, sensors, and code into smart systems.",
  "Passionate about research & traffic optimization.",
  "Building digital experiences that simplify life."
];

const TYPING_SPEED = 100; // milliseconds per character
const DELETING_SPEED = 50; // milliseconds per character
const PAUSE_DURATION_END_OF_PHRASE = 1500; // milliseconds
const PAUSE_DURATION_AFTER_DELETING = 500; // milliseconds
const INITIAL_ANIMATION_DELAY = 1100; // milliseconds, to start after paragraph container animates in

export function HomeSection() {
  const [mounted, setMounted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingLoopActive, setTypingLoopActive] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setTypingLoopActive(true);
    }, INITIAL_ANIMATION_DELAY);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!typingLoopActive) return;

    let timerId: NodeJS.Timeout;

    const handleTyping = () => {
      setCurrentText((prev) => phrases[phraseIndex].substring(0, prev.length + 1));
    };

    const handleDeleting = () => {
      setCurrentText((prev) => prev.substring(0, prev.length - 1));
    };

    if (isDeleting) {
      if (currentText === '') {
        // Finished deleting
        timerId = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, PAUSE_DURATION_AFTER_DELETING);
      } else {
        // Continue deleting
        timerId = setTimeout(handleDeleting, DELETING_SPEED);
      }
    } else {
      if (currentText === phrases[phraseIndex]) {
        // Finished typing current phrase, pause then start deleting
        timerId = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION_END_OF_PHRASE);
      } else {
        // Continue typing
        timerId = setTimeout(handleTyping, TYPING_SPEED);
      }
    }

    return () => clearTimeout(timerId);
  }, [currentText, isDeleting, phraseIndex, typingLoopActive]);


  if (!mounted) {
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
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl animated-neon-text"
        >
          Sankalpa Dutta
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl min-h-[100px] sm:min-h-[120px] md:min-h-[80px]" // Adjusted min-height for varying phrase lengths
        >
          {currentText}
          {typingLoopActive && <span className="typing-cursor" />}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }} // Simplified fixed delay for buttons
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <Button size="lg" variant="accent" asChild>
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
      <motion.a
        href="#about-skills"
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary hover:text-accent transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5, ease: "easeInOut" }} // Delay after other elements
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }} // Bounce animation
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDownCircle size={40} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
