"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [currentDate, setCurrentDate] = useState("")
  const { scrollY } = useScroll()

  // Transform scroll position for subtle effects
  const scale = useTransform(scrollY, [0, 100], [1, 0.98])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    // Set current date
    const date = new Date()
    const formattedDate = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    })
    setCurrentDate(formattedDate)

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "HOME", disabled: false },
    { href: "/#whoami", label: "ABOUT", disabled: false },
    { href: "/#current-work", label: "WORK", disabled: false },
    { href: "/blog", label: "ARTICLES", disabled: false },
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
      {/* Newspaper Masthead Navbar */}
      <motion.nav
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        style={{ scale }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out newspaper-bg",
          scrolled ? "shadow-md border-b border-newspaper-border/30" : "shadow-sm"
        )}
      >
        <div className="container-padding">
          <motion.div
            animate={{
              paddingTop: scrolled ? "0.75rem" : "1.25rem",
              paddingBottom: scrolled ? "0.75rem" : "1.25rem",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "transition-all duration-500 ease-in-out",
              scrolled ? "border-b-0" : "border-b border-newspaper-border/20"
            )}
          >
            {/* Top Row: Date and Search */}
            <div className="flex items-center justify-between mb-3 text-xs newspaper-meta text-newspaper-text/50">
              <div className="flex items-center gap-4">
                <span>Vol. 01 · Issue 2025</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">{currentDate}</span>
              </div>
              <button 
                onClick={() => document.dispatchEvent(new Event("open-command-palette"))}
                className="flex items-center gap-2 text-newspaper-text/60 hover:text-newspaper-accent transition-colors duration-300 px-2 py-1"
                aria-label="Search"
              >
                <Search className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>

            {/* Main Masthead */}
            <div className="text-center space-y-3">
              <Link href="/" className="group">
                <motion.h1 
                  animate={{
                    fontSize: scrolled ? "1.75rem" : "2.25rem",
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-old-standard font-bold tracking-wider text-newspaper-accent transition-colors duration-300 group-hover:text-newspaper-text"
                >
                  The Tech Tatler
                </motion.h1>
              </Link>

              {/* Navigation Links */}
              <motion.div 
                animate={{
                  marginTop: scrolled ? "0.25rem" : "0.5rem",
                }}
                className="flex items-center justify-center gap-1"
              >
                {links.map((link, index) => (
                  <div key={link.href} className="flex items-center">
                    {index > 0 && (
                      <span className="text-newspaper-border/40 mx-2 select-none">|</span>
                    )}
                    {link.href.startsWith("/#") ? (
                      <button
                        onClick={() => scrollToSection(link.href, link.disabled)}
                        disabled={link.disabled}
                        className={cn(
                          "relative newspaper-meta text-xs transition-all duration-200 px-2 py-1",
                          link.disabled
                            ? "text-newspaper-text/30 cursor-not-allowed"
                            : "text-newspaper-text/60 hover:text-newspaper-accent underline-slide"
                        )}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "relative newspaper-meta text-xs transition-all duration-200 px-2 py-1",
                          pathname === link.href
                            ? "text-newspaper-accent font-semibold"
                            : "text-newspaper-text/60 hover:text-newspaper-accent underline-slide"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Subtle tagline (hidden when scrolled) */}
            {!scrolled && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-xs text-newspaper-text/40 mt-3 font-merriweather italic"
              >
                Engineering Excellence in Cloud & Infrastructure
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}
