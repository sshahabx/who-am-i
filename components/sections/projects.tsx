"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            DevOps Projects <span className="text-accent">_</span>
          </h2>
          <p className="text-foreground/70 text-lg mb-12">
            Infrastructure and automation work I'm proud of
          </p>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <Card className="group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-foreground/70">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                          >
                            <Github className="h-5 w-5 text-foreground/50 hover:text-accent transition-colors" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                          >
                            <ExternalLink className="h-5 w-5 text-foreground/50 hover:text-accent transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-foreground/50 text-sm font-mono">
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




