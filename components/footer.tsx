"use client"

import { motion } from "framer-motion"
import { Mail, Twitter, Linkedin, BookOpen, Github } from "lucide-react"
import { profile } from "@/lib/profile"

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.links.github,
      icon: Github,
      delay: 0.05
    },
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
    <footer className="border-t-2 border-newspaper-border/40 pt-16 md:pt-20 pb-8 md:pb-10 mt-12 md:mt-16 newspaper-bg paper-texture relative z-10">
      <div className="container-padding px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Masthead Style Header - Compact */}
          <div className="text-center mb-6 md:mb-8 pb-4 md:pb-5 border-b border-newspaper-border/30">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-old-standard text-2xl md:text-3xl lg:text-4xl font-bold text-newspaper-accent mb-1.5 md:mb-2 tracking-wider">
                SHAHAB ALAM
              </h2>
              <p className="newspaper-meta text-newspaper-text/50 text-[0.6rem] md:text-xs">
                DevOps / Platform Engineer · Cloud, Security, Reliability
              </p>
            </motion.div>
          </div>

          {/* Contact & Social Grid - Compact, Stacks on Mobile */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Contact Information - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-3 md:space-y-4"
            >
              <h3 className="font-playfair text-base md:text-lg font-bold text-newspaper-accent mb-2 md:mb-3 pb-1.5 border-b border-newspaper-border/20">
                Contact
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-newspaper-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="newspaper-meta text-newspaper-text/60 text-[0.6rem] mb-0.5">EMAIL</p>
                    <a
                      href="mailto:idevshahab@gmail.com"
                      className="font-merriweather text-newspaper-text hover:text-newspaper-accent transition-all duration-300 underline-slide text-xs break-all"
                    >
                      idevshahab@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3 md:space-y-4 border-t md:border-t-0 pt-5 md:pt-0 border-newspaper-border/30"
            >
              <h3 className="font-playfair text-base md:text-lg font-bold text-newspaper-accent mb-2 md:mb-3 pb-1.5 border-b border-newspaper-border/20">
                Connect
              </h3>
              <div className="space-y-2 md:space-y-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: link.delay }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5 text-newspaper-text/70 hover:text-newspaper-accent transition-all duration-300 group"
                  >
                    <link.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-merriweather text-xs underline-slide">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-4 md:pt-5 border-t border-newspaper-border/30"
          >
            {/* Publication Info - Compact */}
            <div className="text-center space-y-2 md:space-y-3">
              <div className="newspaper-divider mb-2 md:mb-3" />
              
              <div className="space-y-1">
                <p className="newspaper-meta text-newspaper-text/50 text-[0.6rem] md:text-xs">
                  THE TECH TATLER · EST. 2025
                </p>
                <p className="newspaper-meta text-newspaper-text/50 text-[0.6rem] md:text-xs">
                  Vol. 02 · Platform Edition · Published Continuously
                </p>
              </div>

              <div className="newspaper-divider mt-2 md:mt-3" />

              <p className="font-merriweather text-newspaper-text/60 text-[0.6rem] md:text-xs italic mt-3 md:mt-4">
                © {new Date().getFullYear()} Muhammad Shahab Alam. All rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Decorative end mark - Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-4 md:mt-5"
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-newspaper-accent rounded-full" />
              <div className="w-1.5 h-1.5 bg-newspaper-accent rounded-full" />
              <div className="w-1.5 h-1.5 bg-newspaper-accent rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
