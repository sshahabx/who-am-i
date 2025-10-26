"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Terminal, Command, Search, Home, User, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform scroll position to scale value (subtle scale effect)
  const scale = useTransform(scrollY, [0, 100], [1, 0.98])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Home", icon: Home, disabled: false },
    { href: "/#whoami", label: "About", icon: User, disabled: false },
    { href: "/#current-work", label: "Work", icon: Briefcase, disabled: false },
  ]

  const scrollToSection = (href: string, disabled: boolean) => {
    if (disabled) return
    
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2)
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ scale }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out",
          scrolled ? "mt-2" : "mt-4"
        )}
      >
        <motion.div
          animate={{
            width: scrolled ? "auto" : "auto",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "transition-all duration-500 ease-in-out border border-neutral-200/60 shadow-lg w-full mx-3 md:mx-4",
            // Desktop styles
            scrolled
              ? "md:max-w-7xl md:px-4 md:py-2"
              : "md:max-w-[1600px] md:px-8 md:py-5",
            // Mobile styles - consistently small
            "max-w-full px-3 py-2 rounded-xl",
            // Shared styles
            scrolled
              ? "backdrop-blur-md bg-white/95 shadow-black/10 md:rounded-xl"
              : "backdrop-blur-sm bg-white/70 shadow-black/5 md:rounded-2xl"
          )}
        >
          <div className="flex items-center justify-between w-full gap-3 md:gap-12">
            {/* Brand/Logo */}
            <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
              <Terminal 
                className={cn(
                  "text-neutral-800 group-hover:text-accent transition-all duration-300",
                  "h-4 w-4 md:h-5 md:w-5",
                  !scrolled && "md:h-6 md:w-6"
                )} 
              />
              <span 
                className={cn(
                  "font-display font-semibold text-neutral-800 group-hover:text-accent transition-all duration-300 hidden sm:inline",
                  "text-sm md:text-base",
                  !scrolled && "md:text-xl"
                )}
              >
                Shahab Alam
              </span>
              <span 
                className={cn(
                  "font-display font-semibold text-neutral-800 group-hover:text-accent transition-all duration-300 sm:hidden",
                  "text-sm"
                )}
              >
                SA
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 flex-grow justify-end">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href, link.disabled)}
                  disabled={link.disabled}
                  className={cn(
                    "relative text-sm font-medium transition-all duration-200 rounded-lg group",
                    scrolled ? "px-3 py-1.5" : "px-4 py-2",
                    link.disabled
                      ? "text-neutral-400 cursor-not-allowed"
                      : pathname === link.href || (link.href === "/" && pathname === "/")
                      ? "text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60"
                  )}
                >
                  {link.label}
                  {pathname === link.href && !link.disabled && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!link.disabled && (
                    <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              ))}
              
              {/* Desktop: Command Button */}
              <button 
                onClick={() => document.dispatchEvent(new Event("open-command-palette"))}
                className={cn(
                  "flex items-center space-x-1.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60 rounded-lg transition-all duration-200 ml-2 border border-neutral-200/60",
                  scrolled ? "px-2.5 py-1.5" : "px-3 py-2"
                )}
              >
                <Command className="h-3.5 w-3.5" />
                <span className="font-mono text-xs">⌘K</span>
              </button>
            </div>

            {/* Mobile: Icon Navigation */}
            <div className="flex md:hidden items-center gap-1">
              {links.map((link) => {
                const IconComponent = link.icon
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href, link.disabled)}
                    disabled={link.disabled}
                    className={cn(
                      "p-2 transition-all duration-200 rounded-lg",
                      link.disabled
                        ? "text-neutral-400 cursor-not-allowed"
                        : pathname === link.href || (link.href === "/" && pathname === "/")
                        ? "text-accent bg-accent/10"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60"
                    )}
                    aria-label={link.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </button>
                )
              })}
              
              <button 
                onClick={() => document.dispatchEvent(new Event("open-command-palette"))}
                className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60 rounded-lg transition-all duration-200 ml-1"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}