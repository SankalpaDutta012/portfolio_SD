
"use client";

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'link' | 'text'>('default');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on client side
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a, button, [role="button"], .clickable-element')
      ) {
        setCursorVariant('link');
      } else if (
        target.tagName.toLowerCase() === 'input' &&
        (target.getAttribute('type') === 'text' ||
         target.getAttribute('type') === 'email' ||
         target.getAttribute('type') === 'password' ||
         target.getAttribute('type') === 'search' ||
         target.getAttribute('type') === 'tel' ||
         target.getAttribute('type') === 'url') ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.isContentEditable
      ) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      setCursorVariant('default');
    }

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"], .clickable-element');

    const onLinkHover = () => setCursorVariant('link');
    const onDefault = () => setCursorVariant('default');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onLinkHover);
      el.addEventListener('mouseleave', onDefault);
    });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onLinkHover);
        el.removeEventListener('mouseleave', onDefault);
      });
    };
  }, [isClient]);

  const innerSpringConfig = { damping: 30, stiffness: 600, mass: 0.2 };

  const smoothMouseInner = {
    x: useSpring(mousePosition.x, innerSpringConfig),
    y: useSpring(mousePosition.y, innerSpringConfig),
  };

  useEffect(() => {
    if(isClient) {
        smoothMouseInner.x.set(mousePosition.x);
        smoothMouseInner.y.set(mousePosition.y);
    }
  }, [mousePosition, smoothMouseInner.x, smoothMouseInner.y, isClient]);

  if (!isClient) {
    return null; // Don't render on server
  }

  const variantsInner = { // The "laser" dot
    default: {
      width: 6,
      height: 6,
      backgroundColor: 'hsl(var(--accent))',
      borderRadius: '50%',
      opacity: 1,
      x: '-50%',
      y: '-50%',
      boxShadow: '0 0 6px hsl(var(--accent)), 0 0 10px hsl(var(--accent))', // Glow effect
    },
    link: {
      width: 8, // Slightly larger dot for links
      height: 8,
      opacity: 1,
      backgroundColor: 'hsl(var(--accent))',
      borderRadius: '50%',
      x: '-50%',
      y: '-50%',
      boxShadow: '0 0 8px hsl(var(--accent)), 0 0 12px hsl(var(--accent))', // More intense glow
    },
    text: { // Hide laser dot when I-beam is shown, allowing default browser I-beam
      width: 0,
      height: 0,
      opacity: 0,
    },
  };

  return (
    <>
      {/* Inner Laser Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          translateX: smoothMouseInner.x,
          translateY: smoothMouseInner.y,
        }}
        variants={variantsInner}
        animate={cursorVariant}
        transition={{ ...innerSpringConfig, x: { ...innerSpringConfig }, y: { ...innerSpringConfig } }}
      />
    </>
  );
};

export default CustomCursor;
