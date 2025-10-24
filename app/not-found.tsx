import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Terminal } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="space-y-4">
          <Terminal className="h-20 w-20 text-accent mx-auto" />
          <h1 className="text-7xl font-bold font-mono">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-xl text-foreground/70">
            Looks like this endpoint doesn't exist in production... or anywhere else.
          </p>
        </div>

        <div className="pt-8">
          <pre className="bg-muted p-6 rounded-xl text-left font-mono text-sm text-accent inline-block">
            <code>{`$ curl https://shahab.dev/this-page
HTTP/1.1 404 Not Found
Content-Type: text/plain

Error: Route not found
Suggestion: Try going home?`}</code>
          </pre>
        </div>

        <div className="pt-8">
          <Link href="/">
            <Button size="lg">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

