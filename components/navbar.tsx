"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Command } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-border/20 shadow-soft h-16 py-3"
          : "bg-transparent h-20 py-5"
      )}
    >
      <div className="container-padding">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Terminal className="h-6 w-6 text-accent group-hover:text-accent/70 transition-colors duration-300" />
            <span className="font-display font-semibold text-xl text-text-primary group-hover:text-accent transition-colors duration-300">
              Shahab Alam
            </span>
          </Link>

          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-accent relative",
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    layoutId="navbar-indicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <button className="text-text-secondary hover:text-accent transition-colors text-sm flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:bg-hover-tint">
              <Command className="h-4 w-4" />
              <span className="font-mono">⌘K</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}