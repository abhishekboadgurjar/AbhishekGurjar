"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// A custom wrapper for motion components to avoid hydration errors in Next.js
export const MotionDiv = motion.div;
export const MotionHeader = motion.header;
export const MotionNav = motion.nav;
export const MotionSpan = motion.span;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionImage = motion.img;
export const MotionA = motion.a;

// A higher-order component to safely handle animation components on client side
export function withClientSideAnimation<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return (props: P) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) {
      return null;
    }

    return <Component {...props} />;
  };
}