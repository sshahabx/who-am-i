"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { reviews } from "@/lib/data"

export function ReviewsPreview() {
  const recentReviews = reviews.slice(0, 6)

  return (
    <section className="py-24 px-6 bg-muted/30">
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
                Books & Movies <span className="text-accent">_</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                What I've been reading and watching lately
              </p>
            </div>
            <Link href="/reviews">
              <Button variant="outline" className="hidden md:flex">
                View All Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentReviews.map((review, index) => (
              <motion.div
                key={review.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Link href={`/reviews/${review.slug}`}>
                  <Card className="group hover:border-accent transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-4 flex flex-col items-center justify-center h-full space-y-3">
                      <div className="text-5xl">{review.emoji}</div>
                      <h3 className="text-sm font-semibold text-center line-clamp-2 group-hover:text-accent transition-colors">
                        {review.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? "text-secondary text-xs"
                                : "text-foreground/20 text-xs"
                            }
                          >
                            ★
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
            <Link href="/reviews">
              <Button variant="outline">
                View All Reviews
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



