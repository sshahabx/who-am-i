import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog — Shahab Alam",
  description: "Technical writing on DevOps, infrastructure, and distributed systems",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Blog <span className="text-accent">_</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Technical writing on DevOps, infrastructure, cloud, and everything in between.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-4 text-xs text-foreground/50 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70 text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-xs font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

