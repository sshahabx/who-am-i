# Customization Guide

This guide will help you customize the portfolio to make it your own.

## 📝 Content Updates

### Personal Information

1. **Homepage Hero Section**
   - Edit: `components/sections/hero.tsx`
   - Update name, title, and typing phrases

2. **About Section**
   - Edit: `components/sections/about.tsx`
   - Update bio text
   - Modify "Now" data in `lib/data.ts`

3. **Contact Information**
   - Edit: `components/sections/contact.tsx`
   - Update email, Calendly link, and social media URLs
   - Also update in `.env.local`

### Projects

Edit `lib/data.ts` and modify the `projects` array:

```typescript
{
  id: "1",
  title: "Your Project Name",
  description: "Project description...",
  techStack: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/...",
  date: "2025-10-15"
}
```

### Blog Posts

1. Add metadata to `lib/data.ts` in the `blogPosts` array
2. Create MDX files in `content/blog/`
3. Use the slug to link them together

Example blog post metadata:
```typescript
{
  slug: "my-blog-post",
  title: "My Blog Post",
  description: "A short description",
  date: "2025-10-15",
  tags: ["Tag1", "Tag2"],
  readingTime: 5
}
```

### Reviews

Similar to blog posts, add reviews in `lib/data.ts`:

```typescript
{
  slug: "review-slug",
  title: "Book or Movie Title",
  type: "book", // or "movie"
  rating: 5,
  emoji: "📘",
  description: "Your review...",
  date: "2025-10-15"
}
```

### Tech Stack

Update the ticker tape in `lib/data.ts`:

```typescript
export const techStack = [
  "Your Tech 1",
  "Your Tech 2",
  // ... add more
]
```

## 🎨 Styling & Theme

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#0a0a0a",      // Main background
  foreground: "#e5e5e5",      // Text color
  accent: "#00fff7",          // Primary accent (cyan)
  secondary: "#ffb300",       // Secondary accent (amber)
  muted: "#1a1a1a",           // Muted elements
}
```

### Fonts

Update in `app/layout.tsx`:

```typescript
import { YourFont, YourMonoFont } from "next/font/google"

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
})
```

And in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["Your Font", "system-ui"],
  mono: ["Your Mono Font", "monospace"],
}
```

### Component Styles

All component styles use Tailwind classes. Key files:
- `components/ui/button.tsx` - Button variants
- `components/ui/card.tsx` - Card styling
- `app/globals.css` - Global styles and utilities

## 🔧 Features

### Command Palette

Edit `components/command-palette.tsx` to add/remove commands:

```typescript
<Command.Item
  onSelect={() => navigate("/your-page")}
>
  Your Page
</Command.Item>
```

### Terminal Easter Egg

Customize the terminal output in `components/terminal-easter-egg.tsx`:

```typescript
<p className="text-foreground pl-4">
  Your custom terminal message
</p>
```

### Animations

Adjust Framer Motion animations in section components:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### Tech Ticker Speed

Modify in `components/sections/tech-ticker.tsx`:

```typescript
transition={{
  duration: 30, // Adjust speed (lower = faster)
  ease: "linear",
}}
```

## 📱 Layout Changes

### Navbar

Edit `components/navbar.tsx`:
- Add/remove navigation links
- Modify logo
- Change scroll behavior

### Footer

Edit `components/footer.tsx`:
- Update copyright text
- Modify footer links
- Change Easter egg behavior

### Homepage Sections

Reorder sections in `app/page.tsx`:

```typescript
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      // ... reorder or remove sections
    </>
  )
}
```

## 🎯 SEO & Metadata

### Global Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name — Your Title",
  description: "Your description...",
  keywords: ["keyword1", "keyword2"],
}
```

### Page-Specific Metadata

Each page can have its own metadata. Edit the `metadata` export in:
- `app/blog/page.tsx`
- `app/reviews/page.tsx`
- Individual post/review pages

### Open Graph Images

Add images to `public/og/`:
- `og-home.png` - Homepage
- `og-blog.png` - Blog pages
- Generate custom OG images for each post

## 🚀 Advanced Customization

### Add New Pages

1. Create file in `app/your-page/page.tsx`
2. Add to navbar in `components/navbar.tsx`
3. Add to command palette in `components/command-palette.tsx`

### Custom Components

Create in `components/` directory:

```typescript
export function YourComponent() {
  return (
    <div className="your-styles">
      {/* Your content */}
    </div>
  )
}
```

### API Routes

Create in `app/api/your-endpoint/route.ts`:

```typescript
export async function GET() {
  return NextResponse.json({ data: "your data" })
}
```

### Analytics Integration

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 💡 Tips

1. **Keep it simple** - Don't over-customize; maintain the clean aesthetic
2. **Test responsively** - Check changes on mobile, tablet, and desktop
3. **Use semantic HTML** - Maintain accessibility
4. **Optimize images** - Use WebP format and lazy loading
5. **Version control** - Commit changes frequently

## 🐛 Common Issues

**Fonts not loading?**
- Check Google Fonts URL in `app/layout.tsx`
- Verify font names in `tailwind.config.ts`

**Colors not updating?**
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`

**Animations not working?**
- Ensure Framer Motion is installed
- Check for "use client" directive in animated components

---

Need help? Check the [main README](./README.md) or open an issue on GitHub.



