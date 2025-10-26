import { notFound } from "next/navigation"

export const metadata = {
  title: "Reviews — Shahab Alam",
  description: "Books and movies I've been consuming lately",
}

export default function ReviewsPage() {
  // Page is temporarily inaccessible
  notFound()
}

