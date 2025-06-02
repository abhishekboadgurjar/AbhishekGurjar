"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { navLinks } from '@/lib/constants';
import { MotionNav, MotionDiv } from "@/components/ui/motion";
import { fadeIn } from "@/lib/animations";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { path: string; sectionId?: string }
  ) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setMobileMenuOpen(false);

    if (!link.sectionId) {
      // If no section ID, just navigate to the path
      router.push(link.path);
      return;
    }

    if (pathname === '/') {
      // If we're on the home page, scroll to the section
      scrollToSection(link.sectionId);
    } else if (link.path === '/') {
      // If it's a link to home with a section ID, navigate to home with hash
      router.push(`/#${link.sectionId}`);
      
      // The home page will handle the scrolling when it loads
    } else {
      // Navigate to the page
      router.push(link.path);
    }
  };

  // Handle hash-based scrolling when the component mounts or pathname changes
  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== 'undefined' && pathname === '/') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Small delay to ensure the page is fully rendered
        const timer = setTimeout(() => {
          scrollToSection(hash);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <MotionNav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border`}
      initial="hidden"
      animate="show"
      variants={fadeIn("down", 0.2)}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/icons/AG.png" 
            alt="AG Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold">
            <span className="text-primary">Portfolio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className={`text-muted-foreground hover:text-primary transition-colors ${
                    pathname === link.path ? 'text-primary font-medium' : ''
                  }`}
                  onClick={(e) => handleNavLinkClick(e, link)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://abhishek-blog.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Blogs
              </a>
            </li>
          </ul>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MotionDiv
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link
                    href={link.path}
                    onClick={(e) => handleNavLinkClick(e, link)}
                    className={`w-full text-left ${pathname === link.path ? 'text-primary' : 'text-foreground/60 hover:text-foreground/90'}`}
                  >
                    {link.title}
                  </Link>
                </Button>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-2">
                <Link
                  href="/contact"
                  onClick={(e) => handleNavLinkClick(e, { path: '/contact' })}
                >
                  Contact Me
                </Link>
              </Button>
            </li>
          </ul>
        </MotionDiv>
      )}
    </MotionNav>
  );
}