"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function TerminalEasterEgg() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl bg-black border-accent font-mono p-0 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-accent/30">
          <span className="text-accent text-sm">guest@shahab-portfolio:~$</span>
          <button
            onClick={() => setOpen(false)}
            className="text-foreground/50 hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="p-6 space-y-2 text-sm">
          <pre className="text-accent">
{`
    ____        __  _   _____            __             
   / __ )____  / /_(_) / ___/____ ______/ /______ ______
  / __  / __ \\/ __/ /  \\__ \\/ __ \`/ ___/ //_/ __ \`/ ___/
 / /_/ / /_/ / /_/ /  ___/ / /_/ / /  / ,< / /_/ / /    
/_____/\\____/\\__/_/  /____/\\__,_/_/  /_/|_|\\__,_/_/     
`}
          </pre>
          
          <div className="pt-4 space-y-1">
            <p className="text-foreground/70">
              <span className="text-secondary">$</span> whoami
            </p>
            <p className="text-foreground pl-4">DevOps Engineer | Infrastructure Wizard | Cloud Architect</p>
          </div>

          <div className="pt-2 space-y-1">
            <p className="text-foreground/70">
              <span className="text-secondary">$</span> cat /etc/motd
            </p>
            <p className="text-foreground pl-4">
              "Any sufficiently advanced technology is indistinguishable from magic."
            </p>
            <p className="text-foreground/50 pl-4 text-xs">- Arthur C. Clarke</p>
          </div>

          <div className="pt-2 space-y-1">
            <p className="text-foreground/70">
              <span className="text-secondary">$</span> uptime
            </p>
            <p className="text-foreground pl-4">System uptime: 99.9% | Currently: Building cool stuff ⚡</p>
          </div>

          <div className="pt-2 space-y-1">
            <p className="text-foreground/70">
              <span className="text-secondary">$</span> ls -la /skills
            </p>
            <p className="text-foreground pl-4 font-mono text-xs">
              drwxr-xr-x  kubernetes terraform docker aws cloud-native
            </p>
          </div>

          <div className="pt-4">
            <p className="text-accent/70 text-xs">
              Press ~ or ` again to close this terminal
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

