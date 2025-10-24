"use client"

import { motion } from "framer-motion"
import { Mail, Twitter, Linkedin, BookOpen } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/ssshahab_",
      icon: Twitter,
      delay: 0.1
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/sshahabx/",
      icon: Linkedin,
      delay: 0.2
    },
    {
      name: "Medium",
      href: "https://medium.com/@ssshahab_",
      icon: BookOpen,
      delay: 0.3
    }
  ]

  return (
    <footer className="border-t border-neutral-200/60 pt-32 pb-16 mt-24 bg-[#E8E8E8] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-2 text-text-secondary"
          >
            <Mail className="h-4 w-4" />
            <a
              href="mailto:idevshahab@gmail.com"
              className="hover:text-accent transition-colors"
            >
              idevshahab@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: link.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors group"
              >
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-text-secondary text-sm"
          >
            © 2025 Shahab Alam. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

