"use client";

import { useState, useEffect } from "react";
import { DownloadIcon, ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion";
import { fadeIn, textVariant } from "@/lib/animations";
import ParticleBackground from "@/components/ParticleBackground";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden"
    >
      {mounted && <ParticleBackground />}

      <div className="container max-w-7xl mx-auto px-4 py-20 z-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <MotionP
              className="text-primary font-medium mb-3"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
            >
              Hi, my name is
            </MotionP>

            <MotionH1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={textVariant(0.4)}
              initial="hidden"
              animate="show"
            >
              <span className="text-foreground">Abhishek Gurjar</span>
            </MotionH1>

            <MotionDiv
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 h-16"
              variants={textVariant(0.6)}
              initial="hidden"
              animate="show"
            >
              {mounted && (
                <TypeAnimation
                  sequence={[
                    "React.js Developer",
                    2000,
                    "Next.js Specialist",
                    2000,
                    "React Native Developer",
                    2000,
                    "Node.js Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              )}
            </MotionDiv>

            <MotionP
              className="text-muted-foreground mb-8 max-w-xl"
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
            >
              I build exceptional digital experiences with modern technologies,
              focusing on creating responsive, user-friendly applications that
              deliver real value.
            </MotionP>

            <MotionDiv
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              animate="show"
            >
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <a
  href="https://drive.google.com/file/d/1pNI0-arg7_5J3qCWma_t-0Ub9VL9C5E7/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="lg">
    <DownloadIcon className="mr-2 h-4 w-4" />
    Download CV
  </Button>
</a>

            </MotionDiv>
          </div>

          <MotionDiv
            className="w-full h-full hidden md:flex justify-center items-center"
            variants={fadeIn("left", 1.0)}
            initial="hidden"
            animate="show"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src="https://i.ibb.co/JRLZQcvw/DSC-0629gg.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </MotionDiv>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link href="#about" className="text-primary">
          <ArrowDownIcon className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
}
