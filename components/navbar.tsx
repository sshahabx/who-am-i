"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Home, User, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Transform scroll position for subtle effects
  const scale = useTransform(scrollY, [0, 100], [1, 0.98])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "HOME", icon: Home, disabled: false },
    { href: "/#whoami", label: "ABOUT", icon: User, disabled: false },
    { href: "/#projects", label: "PROJECTS", icon: Briefcase, disabled: false },
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
      {/* Desktop Navbar */}
      <motion.nav
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        style={{ scale }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center transition-all duration-500 ease-in-out",
          scrolled ? "mt-2" : "mt-4"
        )}
      >
        <motion.div
          animate={{
            paddingTop: scrolled ? "0.75rem" : "1rem",
            paddingBottom: scrolled ? "0.75rem" : "1rem",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "transition-all duration-500 ease-in-out border shadow-lg w-full mx-3 md:mx-4",
            scrolled
              ? "md:max-w-5xl md:px-6"
              : "md:max-w-6xl md:px-8",
            "max-w-full px-4 rounded-2xl",
            scrolled
              ? "backdrop-blur-md bg-[#fcfbf8]/95 border-newspaper-border/40 shadow-md"
              : "backdrop-blur-sm bg-[#fcfbf8]/80 border-newspaper-border/30 shadow-sm"
          )}
        >
          <div className="flex items-center justify-between w-full">
            {/* Left: Logo/Brand */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-old-standard text-base md:text-lg font-bold text-newspaper-accent hover:text-newspaper-text transition-colors duration-300">
                Shahab Alam
              </span>
            </Link>

            {/* Center: Navigation Links */}
            <div className="flex items-center gap-1">
              {links.map((link, index) => (
                <div key={link.href} className="flex items-center">
                  {index > 0 && (
                    <span className="text-newspaper-border/40 mx-1 md:mx-2 select-none text-xs">·</span>
                  )}
                  {link.href.startsWith("/#") ? (
                    <button
                      onClick={() => scrollToSection(link.href, link.disabled)}
                      disabled={link.disabled}
                      className={cn(
                        "relative newspaper-meta transition-all duration-200 px-2 py-1",
                        scrolled ? "text-[0.65rem]" : "text-xs",
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
                        "relative newspaper-meta transition-all duration-200 px-2 py-1",
                        scrolled ? "text-[0.65rem]" : "text-xs",
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
            </div>

            {/* Right: Search Icon */}
            <button 
              onClick={() => document.dispatchEvent(new Event("open-command-palette"))}
              className="flex-shrink-0 p-2 text-newspaper-text/60 hover:text-newspaper-accent transition-colors duration-300 rounded-lg hover:bg-newspaper-accent/5"
              aria-label="Search"
            >
              <Search className={cn(
                "transition-all duration-200",
                scrolled ? "h-3.5 w-3.5" : "h-4 w-4"
              )} />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Bottom Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
      >
        <div className="bg-[#fcfbf8]/95 backdrop-blur-md border-2 border-newspaper-border/40 rounded-2xl shadow-xl px-2 py-3">
          <div className="flex items-center justify-around">
            {links.map((link) => {
              const IconComponent = link.icon
              const isActive = link.href === "/" 
                ? pathname === "/" 
                : pathname.includes(link.href.replace("/#", ""))
              
              return (
                <button
                  key={link.href}
                  onClick={() => link.href === "/" ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollToSection(link.href, link.disabled)}
                  disabled={link.disabled}
                  className={cn(
                    "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-[70px]",
                    isActive
                      ? "bg-newspaper-accent/10 text-newspaper-accent"
                      : "text-newspaper-text/60 hover:text-newspaper-accent hover:bg-newspaper-accent/5",
                    link.disabled && "opacity-40 cursor-not-allowed"
                  )}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-[0.65rem] font-medium newspaper-meta">
                    {link.label}
                  </span>
                </button>
              )
            })}
            
            <button 
              onClick={() => document.dispatchEvent(new Event("open-command-palette"))}
              className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-newspaper-text/60 hover:text-newspaper-accent hover:bg-newspaper-accent/5 transition-all duration-200 min-w-[70px]"
            >
              <Search className="h-5 w-5" />
              <span className="text-[0.65rem] font-medium newspaper-meta">SEARCH</span>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
