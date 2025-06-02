"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Download, X } from "lucide-react";

// Extend the Window interface to include the beforeinstallprompt event
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
  interface Navigator {
    standalone?: boolean;
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  const checkIfMobile = () => {
    if (typeof window === "undefined") return false;
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth <= 768
    );
  };

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(checkIfMobile());

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      // Only proceed if on mobile device
      if (!isMobile) {
        console.log("PWA install prompt suppressed on desktop");
        return;
      }

      // Prevent the default browser install prompt
      e.preventDefault();

      // Check if the app is already installed
      const isAppInstalled =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone;

      if (!isAppInstalled) {
        // Save the event for later use
        setDeferredPrompt(e);
        // Show the custom install prompt
        setIsOpen(true);
      }
    };

    // Handle window resize to check if the viewport changes to mobile
    const handleResize = () => {
      const mobileCheck = checkIfMobile();
      setIsMobile(mobileCheck);
      if (!mobileCheck && isOpen) {
        setIsOpen(false);
      }
    };

    // Listen for the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if the app is already installed
    const handleAppInstalled = () => {
      console.log("App was installed");
      setIsOpen(false);
    };
    window.addEventListener("appinstalled", handleAppInstalled);

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up event listeners
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, isOpen]);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      setIsInstalling(true);

      // Show the browser's install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;

      console.log(`User response to the install prompt: ${outcome}`);

      // Clear the deferred prompt
      setDeferredPrompt(null);
      setIsOpen(false);
    } catch (error) {
      console.error("Error installing the app:", error);
    } finally {
      setIsInstalling(false);
    }
  };

  // Don't render anything if the prompt isn't open
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>Install App</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <DialogDescription>
            Add this app to your home screen for quick access and an app-like
            experience.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Not Now
          </Button>
          <Button onClick={handleInstall} disabled={isInstalling}>
            {isInstalling ? "Installing..." : "Install"}
            {!isInstalling && <Download className="ml-2 h-4 w-4" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
