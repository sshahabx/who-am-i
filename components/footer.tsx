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
    <footer className="border-t-4 border-newspaper-border/40 pt-32 pb-12 mt-24 newspaper-bg paper-texture relative z-10">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Masthead Style Header */}
          <div className="text-center mb-12 pb-8 border-b-2 border-newspaper-border/30">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-old-standard text-4xl md:text-5xl font-bold text-newspaper-accent mb-3 tracking-wider">
                SHAHAB ALAM
              </h2>
              <p className="newspaper-meta text-newspaper-text/50">
                DevOps Engineer · Infrastructure Specialist
              </p>
            </motion.div>
          </div>

          {/* Contact & Social Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-playfair text-xl font-bold text-newspaper-accent mb-4 pb-2 border-b border-newspaper-border/20">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-newspaper-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="newspaper-meta text-newspaper-text/60 text-xs mb-1">EMAIL</p>
                    <a
                      href="mailto:idevshahab@gmail.com"
                      className="font-merriweather text-newspaper-text hover:text-newspaper-accent transition-all duration-300 underline-slide text-sm"
                    >
                      idevshahab@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-playfair text-xl font-bold text-newspaper-accent mb-4 pb-2 border-b border-newspaper-border/20">
                Connect
              </h3>
              <div className="space-y-4">
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
                    className="flex items-center gap-3 text-newspaper-text/70 hover:text-newspaper-accent transition-all duration-300 group"
                  >
                    <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-merriweather text-sm underline-slide">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8 border-t-2 border-newspaper-border/30"
          >
            {/* Publication Info */}
            <div className="text-center space-y-4">
              <div className="newspaper-divider mb-4" />
              
              <div className="space-y-2">
                <p className="newspaper-meta text-newspaper-text/50 text-xs">
                  THE TECH TATLER · EST. 2025
                </p>
                <p className="newspaper-meta text-newspaper-text/50 text-xs">
                  Vol. 01 · Issue 2025 · Published Continuously
                </p>
              </div>

              <div className="newspaper-divider mt-4" />

              <p className="font-merriweather text-newspaper-text/60 text-xs italic mt-6">
                © 2025 Shahab Alam. All rights reserved. Published for engineering excellence.
              </p>
            </div>
          </motion.div>

          {/* Decorative end mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-newspaper-accent rounded-full" />
              <div className="w-2 h-2 bg-newspaper-accent rounded-full" />
              <div className="w-2 h-2 bg-newspaper-accent rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
