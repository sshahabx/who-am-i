import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { reviews } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Reviews — Shahab Alam",
  description: "Books and movies I've been consuming lately",
}

export default function ReviewsPage() {
  const books = reviews.filter((r) => r.type === "book")
  const movies = reviews.filter((r) => r.type === "movie")

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Reviews <span className="text-accent">_</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Books and movies that have shaped my thinking (or just entertained me).
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            📚 Books
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((review) => (
              <Link key={review.slug} href={`/reviews/${review.slug}`}>
                <Card className="group hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl">{review.emoji}</div>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? "text-secondary text-lg"
                                : "text-foreground/20 text-lg"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {review.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/70">
                      {review.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-xs text-foreground/50">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            🎬 Movies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((review) => (
              <Link key={review.slug} href={`/reviews/${review.slug}`}>
                <Card className="group hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 cursor-pointer h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl">{review.emoji}</div>
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < review.rating
                                ? "text-secondary text-lg"
                                : "text-foreground/20 text-lg"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                      {review.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/70">
                      {review.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-xs text-foreground/50">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(review.date)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

