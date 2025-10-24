import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { reviews } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export async function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const review = reviews.find((r) => r.slug === params.slug)
  
  if (!review) {
    return {
      title: "Review Not Found",
    }
  }

  return {
    title: `${review.title} — Reviews — Shahab Alam`,
    description: review.description,
  }
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const review = reviews.find((r) => r.slug === params.slug)

  if (!review) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/reviews">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Reviews
          </Button>
        </Link>

        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-7xl">{review.emoji}</div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{review.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < review.rating
                          ? "text-secondary text-2xl"
                          : "text-foreground/20 text-2xl"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-lg font-semibold text-accent">
                  {review.rating}/5
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-foreground/70 mb-6">
            <Calendar className="h-4 w-4" />
            <span>Reviewed on {formatDate(review.date)}</span>
            <span>•</span>
            <span className="capitalize">{review.type}</span>
          </div>

          <p className="text-xl text-foreground/80 leading-relaxed border-l-4 border-accent pl-6">
            {review.description}
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-6 text-foreground/80">
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">My Thoughts</h2>
            <p>
              This is a placeholder for the full review content. In a real implementation,
              you would use MDX to render detailed reviews with rich formatting, images,
              quotes, and more structured content.
            </p>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What I Liked</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Deep technical insights and practical examples</li>
              <li>Clear explanations of complex concepts</li>
              <li>Applicable to real-world scenarios</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What Could Be Better</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Some sections could be more concise</li>
              <li>Would benefit from more code examples</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Takeaways</h3>
            <blockquote className="border-l-4 border-accent pl-6 italic text-foreground/90 my-6">
              "The best infrastructure is the one you don't have to think about."
            </blockquote>

            <p>
              Overall, this {review.type} provided valuable insights and perspectives that
              have influenced how I approach problems in my work. Highly recommended for
              anyone interested in the subject matter.
            </p>

            <div className="mt-12 p-6 bg-muted rounded-xl">
              <h4 className="font-bold text-foreground mb-2">Would I recommend this?</h4>
              <p className="text-foreground/80">
                {review.rating >= 4 ? "Absolutely! " : "It depends. "}
                {review.rating >= 4
                  ? "This is a must-experience for anyone interested in the topic."
                  : "It has its merits, but may not be for everyone."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/reviews">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Reviews
            </Button>
          </Link>
        </div>
      </article>
    </div>
  )
}

