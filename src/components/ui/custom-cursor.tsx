
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
        target.closest('a, button, [role="button"], .clickable-element') // Added .clickable-element
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
    // For elements that might not trigger mouseover on children, listen to mouseout on document
    document.addEventListener('mouseout', handleMouseOut);


    // Add specific listeners for links and buttons to ensure hover state is captured
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

  const springConfig = { damping: 28, stiffness: 400, mass: 0.3 };
  const innerSpringConfig = { damping: 30, stiffness: 600, mass: 0.2 };


  const smoothMouseOuter = {
    x: useSpring(mousePosition.x, springConfig),
    y: useSpring(mousePosition.y, springConfig),
  };

  const smoothMouseInner = {
    x: useSpring(mousePosition.x, innerSpringConfig),
    y: useSpring(mousePosition.y, innerSpringConfig),
  };
  
  useEffect(() => {
    if(isClient) {
        smoothMouseOuter.x.set(mousePosition.x);
        smoothMouseOuter.y.set(mousePosition.y);
        smoothMouseInner.x.set(mousePosition.x);
        smoothMouseInner.y.set(mousePosition.y);
    }
  }, [mousePosition, smoothMouseOuter.x, smoothMouseOuter.y, smoothMouseInner.x, smoothMouseInner.y, isClient]);


  if (!isClient) {
    return null; // Don't render on server
  }

  const variantsOuter = {
    default: {
      width: 32,
      height: 32,
      borderWidth: '2px',
      backgroundColor: 'hsla(var(--primary-foreground) / 0)',
      borderColor: 'hsl(var(--primary))',
      opacity: 0.7,
      x: '-50%', 
      y: '-50%',
    },
    link: {
      width: 48,
      height: 48,
      borderWidth: '2px',
      backgroundColor: 'hsla(var(--primary) / 0.15)',
      borderColor: 'hsl(var(--primary))',
      opacity: 1,
      x: '-50%',
      y: '-50%',
    },
    text: {
      width: 2, // ibeam width
      height: 24, // ibeam height
      borderRadius: '1px',
      borderWidth: '0px',
      backgroundColor: 'hsl(var(--primary))',
      borderColor: 'hsl(var(--primary))',
      opacity: 1,
      x: '-50%',
      y: '-50%',
    },
  };

  const variantsInner = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: 'hsl(var(--primary))',
      opacity: 1,
      x: '-50%',
      y: '-50%',
    },
    link: {
      width: 0, // Hide inner dot when hovering link, outer provides feedback
      height: 0,
      opacity: 0,
      backgroundColor: 'hsl(var(--primary-foreground))',
      x: '-50%',
      y: '-50%',
    },
    text: { // Hide inner dot for text variant too
      width: 0,
      height: 0,
      opacity: 0,
    },
  };

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          translateX: smoothMouseOuter.x,
          translateY: smoothMouseOuter.y,
        }}
        variants={variantsOuter}
        animate={cursorVariant}
        transition={springConfig}
      />
      {/* Inner Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          translateX: smoothMouseInner.x,
          translateY: smoothMouseInner.y,
        }}
        variants={variantsInner}
        animate={cursorVariant}
        transition={innerSpringConfig}
      />
    </>
  );
};

export default CustomCursor;
