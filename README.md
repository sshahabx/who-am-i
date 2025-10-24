# Shahab Alam — Portfolio Website

A modern, minimal, dark-themed personal portfolio website for a DevOps Engineer. Built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark-only theme** with cyan and amber accent colors
- **Smooth animations** powered by Framer Motion
- **MDX support** for blog posts and reviews
- **Command palette** (⌘K) for quick navigation
- **Terminal Easter egg** (press ~ or `)
- **Responsive design** optimized for all devices
- **Tech stack ticker** with infinite scroll animation
- **SEO optimized** with Next.js metadata

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio-site/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── reviews/           # Review pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI components (shadcn-style)
│   ├── sections/         # Homepage sections
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   ├── command-palette.tsx
│   └── terminal-easter-egg.tsx
├── lib/                   # Utilities and data
│   ├── utils.ts          # Helper functions
│   └── data.ts           # Mock data
└── public/               # Static assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  background: "#0a0a0a",
  foreground: "#e5e5e5",
  accent: "#00fff7",      // Cyan
  secondary: "#ffb300",   // Amber
  muted: "#1a1a1a",
}
```

### Content

- **Projects**: Edit `lib/data.ts` → `projects` array
- **Blog Posts**: Edit `lib/data.ts` → `blogPosts` array
- **Reviews**: Edit `lib/data.ts` → `reviews` array
- **Tech Stack**: Edit `lib/data.ts` → `techStack` array
- **Now Section**: Edit `lib/data.ts` → `nowData` object

### Contact Info

Update contact information in:
- `components/sections/contact.tsx`
- `components/navbar.tsx`

## 🔮 Features to Add

- [ ] RSS feed for blog posts
- [ ] MDX blog posts with frontmatter
- [ ] Reading progress indicator
- [ ] Dark/light mode toggle (currently dark-only)
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Project case studies
- [ ] Testimonials section

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## 📦 Deployment

Deploy to Vercel (recommended):

```bash
npm run build
```

Or use the Vercel CLI:

```bash
vercel
```

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspired by modern developer portfolios
- UI components based on shadcn/ui
- Terminal aesthetic from cyberpunk and hacker culture

---

Built with ❤️ and ☕ by Shahab Alam

