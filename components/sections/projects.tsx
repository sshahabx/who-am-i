"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-surface">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-display font-bold mb-4">
            DevOps Projects <span className="text-accent font-mono">_</span>
          </h2>
          <p className="text-body-lg text-text-secondary font-light max-w-2xl">
            Infrastructure and automation work I'm proud of
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-6"
          />

          <div className="space-y-5 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group hover:border-accent/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 hover:bg-hover-tint rounded-xl transition-all duration-300 group/icon"
                          >
                            <Github className="h-5 w-5 text-text-tertiary group-hover/icon:text-accent transition-colors" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 hover:bg-hover-tint rounded-xl transition-all duration-300 group/icon"
                          >
                            <ExternalLink className="h-5 w-5 text-text-tertiary group-hover/icon:text-accent transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-accent/8 text-accent rounded-lg text-xs font-mono font-medium border border-accent/10 hover:border-accent/30 hover:bg-accent/12 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-text-tertiary text-sm font-mono">
                      {formatDate(project.date)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}






