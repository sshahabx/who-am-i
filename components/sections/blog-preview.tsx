"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export function BlogPreview() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Recent Thoughts <span className="text-accent">_</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Technical writing on DevOps, infrastructure, and systems
              </p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="hidden md:flex">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-xs text-foreground/50 mb-2">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime} min read</span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/70">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-muted text-foreground/70 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog">
              <Button variant="outline">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}









