"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Home, FileText, Star, Mail } from "lucide-react"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const navigate = (path: string) => {
    setOpen(false)
    router.push(path)
  }

  const scrollToSection = (id: string) => {
    setOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 shadow-2xl max-w-2xl">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-foreground/50 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <Command.Input
            placeholder="Type a command or search..."
            className="flex h-12 w-full rounded-md bg-transparent px-4 py-3 text-sm outline-none placeholder:text-foreground/50 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-foreground/50">
              No results found.
            </Command.Empty>
            
            <Command.Group heading="Pages" className="mb-2">
              <Command.Item
                onSelect={() => navigate("/")}
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted transition-colors"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("/blog")}
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>Blog</span>
              </Command.Item>
              <Command.Item
                onSelect={() => navigate("/reviews")}
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted transition-colors"
              >
                <Star className="h-4 w-4" />
                <span>Reviews</span>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Sections" className="mb-2">
              <Command.Item
                onSelect={() => scrollToSection("about")}
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted transition-colors"
              >
                <span>About</span>
              </Command.Item>
              <Command.Item
                onSelect={() => scrollToSection("projects")}
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted transition-colors"
              >
                <span>Projects</span>
              </Command.Item>
              <Command.Item
                onSelect={() => scrollToSection("contact")}
                className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-muted transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  )
}



