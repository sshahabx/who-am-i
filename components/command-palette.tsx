"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Home, User, Briefcase, Search } from "lucide-react"

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

    const handleOpenCommand = () => {
      setOpen((open) => !open)
    }

    document.addEventListener("keydown", down)
    document.addEventListener("open-command-palette", handleOpenCommand)
    return () => {
      document.removeEventListener("keydown", down)
      document.removeEventListener("open-command-palette", handleOpenCommand)
    }
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
      <DialogContent className="overflow-hidden p-0 shadow-2xl max-w-2xl bg-newspaper-bg border-2 border-newspaper-border/40 [&>button]:top-5 [&>button]:right-5 [&>button]:bg-white/80 [&>button]:border [&>button]:border-newspaper-border/30 [&>button]:rounded [&>button]:p-1.5 [&>button]:hover:bg-newspaper-accent [&>button]:hover:text-white [&>button]:transition-colors [&>button]:z-10">
        {/* Newspaper Header */}
        <div className="border-b-2 border-newspaper-border/30 px-6 py-4 pr-16 bg-white/50">
          <div className="flex items-start justify-between mb-2 mr-8">
            <h3 className="font-playfair text-xl font-bold text-newspaper-accent">Search Archives</h3>
            <span className="newspaper-meta text-newspaper-text/50 text-xs whitespace-nowrap">The Tech Tatler</span>
          </div>
          <p className="text-xs font-merriweather italic text-newspaper-text/60">
            Navigate articles, sections, and features
          </p>
        </div>

        <Command className="bg-newspaper-bg [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-playfair [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-newspaper-accent [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:border-b [&_[cmdk-group-heading]]:border-newspaper-border/20 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-4 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4">
          <div className="flex items-center border-b border-newspaper-border/30 px-4 bg-white/30">
            <Search className="mr-3 h-4 w-4 text-newspaper-text/50" />
            <Command.Input
              placeholder="Type to search sections..."
              className="flex h-12 w-full bg-transparent py-3 text-sm font-merriweather outline-none placeholder:text-newspaper-text/50 placeholder:italic disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          
          <Command.List className="max-h-[350px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-8 text-center">
              <p className="font-merriweather text-sm text-newspaper-text/60 italic">
                No results found in archives.
              </p>
            </Command.Empty>
            
            <Command.Group heading="Pages" className="mb-2">
              <Command.Item
                onSelect={() => navigate("/")}
                className="flex items-center gap-3 rounded px-3 py-3 cursor-pointer hover:bg-white/60 transition-colors border-l-2 border-transparent hover:border-newspaper-accent data-[selected=true]:bg-white/60 data-[selected=true]:border-newspaper-accent"
              >
                <Home className="h-4 w-4 text-newspaper-accent" />
                <div className="flex flex-col">
                  <span className="font-merriweather text-sm text-newspaper-text font-medium">Front Page</span>
                  <span className="text-xs text-newspaper-text/60 font-merriweather italic">Return to homepage</span>
                </div>
              </Command.Item>
            </Command.Group>

            <Command.Group heading="Sections" className="mb-2">
              <Command.Item
                onSelect={() => scrollToSection("whoami")}
                className="flex items-center gap-3 rounded px-3 py-3 cursor-pointer hover:bg-white/60 transition-colors border-l-2 border-transparent hover:border-newspaper-accent data-[selected=true]:bg-white/60 data-[selected=true]:border-newspaper-accent"
              >
                <User className="h-4 w-4 text-newspaper-accent" />
                <div className="flex flex-col">
                  <span className="font-merriweather text-sm text-newspaper-text font-medium">About</span>
                  <span className="text-xs text-newspaper-text/60 font-merriweather italic">Profile & background</span>
                </div>
              </Command.Item>
              
              <Command.Item
                onSelect={() => scrollToSection("projects")}
                className="flex items-center gap-3 rounded px-3 py-3 cursor-pointer hover:bg-white/60 transition-colors border-l-2 border-transparent hover:border-newspaper-accent data-[selected=true]:bg-white/60 data-[selected=true]:border-newspaper-accent"
              >
                <Briefcase className="h-4 w-4 text-newspaper-accent" />
                <div className="flex flex-col">
                  <span className="font-merriweather text-sm text-newspaper-text font-medium">Projects</span>
                  <span className="text-xs text-newspaper-text/60 font-merriweather italic">Personal builds</span>
                </div>
              </Command.Item>
              
              <Command.Item
                onSelect={() => scrollToSection("current-work")}
                className="flex items-center gap-3 rounded px-3 py-3 cursor-pointer hover:bg-white/60 transition-colors border-l-2 border-transparent hover:border-newspaper-accent data-[selected=true]:bg-white/60 data-[selected=true]:border-newspaper-accent"
              >
                <Briefcase className="h-4 w-4 text-newspaper-accent" />
                <div className="flex flex-col">
                  <span className="font-merriweather text-sm text-newspaper-text font-medium">Current Work</span>
                  <span className="text-xs text-newspaper-text/60 font-merriweather italic">Employment & focus</span>
                </div>
              </Command.Item>
            </Command.Group>
          </Command.List>

          {/* Footer */}
          <div className="border-t border-newspaper-border/30 px-4 py-3 bg-white/30">
            <p className="text-xs newspaper-meta text-newspaper-text/50 text-center">
              Press ESC to close · ⌘K to search
            </p>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
