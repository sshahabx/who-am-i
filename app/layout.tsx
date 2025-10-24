import type { Metadata } from "next"
import { Outfit, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CommandPalette } from "@/components/command-palette"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shahab Alam — Cloud & DevOps Engineer",
  description: "I build cloud, DevOps, and secure infrastructure systems. Specializing in scalable, secure, and efficient cloud solutions.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "Terraform", "Infrastructure", "Security"],
  authors: [{ name: "Shahab Alam" }],
  openGraph: {
    title: "Shahab Alam — Cloud & DevOps Engineer",
    description: "I build cloud, DevOps, and secure infrastructure systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahab Alam — Cloud & DevOps Engineer",
    description: "I build cloud, DevOps, and secure infrastructure systems.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ibmPlexMono.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  )
}

