import { notFound } from "next/navigation"

export const metadata = {
  title: "Blog — Shahab Alam",
  description: "Technical writing on DevOps, infrastructure, and distributed systems",
}

export default function BlogPage() {
  // Page is temporarily inaccessible
  notFound()
}

