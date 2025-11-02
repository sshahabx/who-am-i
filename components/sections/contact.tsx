"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Calendar, Github, Linkedin, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect <span className="text-accent">_</span>
          </h2>

          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I like good infrastructure, bad jokes, and interesting problems —
            let's talk.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <a href="mailto:boti@example.com">
              <Button size="lg" variant="default" className="w-full md:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </a>
            <a
              href="https://calendly.com/boti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="w-full md:w-auto">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </a>
          </div>

          <div className="pt-12">
            <p className="text-foreground/50 text-sm mb-4">
              Find me elsewhere on the internet
            </p>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://github.com/botisarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg bg-muted hover:bg-accent/10 transition-colors">
                  <Github className="h-6 w-6 text-foreground/70 group-hover:text-accent transition-colors" />
                </div>
              </a>
              <a
                href="https://linkedin.com/in/botisarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg bg-muted hover:bg-accent/10 transition-colors">
                  <Linkedin className="h-6 w-6 text-foreground/70 group-hover:text-accent transition-colors" />
                </div>
              </a>
              <a
                href="https://x.com/botisarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-3 rounded-lg bg-muted hover:bg-accent/10 transition-colors">
                  <Twitter className="h-6 w-6 text-foreground/70 group-hover:text-accent transition-colors" />
                </div>
              </a>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-foreground/50 text-sm font-mono">
              Response time: Usually within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}






