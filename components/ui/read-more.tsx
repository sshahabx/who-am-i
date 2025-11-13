"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ReadMoreProps {
  children: React.ReactNode
  maxLines?: number
  className?: string
}

export function ReadMore({ children, maxLines = 3, className = "" }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={className}>
      <motion.div
        initial={false}
        animate={{
          maxHeight: isExpanded ? "2000px" : `${maxLines * 1.75}rem`,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden relative"
      >
        <div className={!isExpanded ? "line-clamp-3 md:line-clamp-none" : ""}>
          {children}
        </div>
        
        {/* Gradient fade for collapsed state */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-newspaper-bg to-transparent pointer-events-none md:hidden" />
        )}
      </motion.div>
      
      {/* Show More/Less Button - only on mobile */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden mt-3 flex items-center gap-1 text-sm text-newspaper-accent hover:text-newspaper-text transition-colors duration-200 font-merriweather italic group"
      >
        <span>{isExpanded ? "Show Less" : "Show More"}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
    </div>
  )
}

