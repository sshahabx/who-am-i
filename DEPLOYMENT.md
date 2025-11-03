# Deployment Guide

## Quick Deploy to Vercel

The easiest way to deploy this portfolio is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Manual Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production:
```bash
vercel --prod
```

## Environment Variables

Before deploying, set up your environment variables in the Vercel dashboard or create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_EMAIL=your@email.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourusername
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://x.com/yourusername
```

## Other Deployment Options

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Set environment variables in Netlify dashboard

### Docker

Build and run with Docker:

```bash
# Build
docker build -t portfolio .

# Run
docker run -p 3000:3000 portfolio
```

### Self-Hosted

1. Build the project:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

3. Use a process manager like PM2:
```bash
pm2 start npm --name "portfolio" -- start
```

## Custom Domain

### Vercel
1. Go to your project settings
2. Navigate to Domains
3. Add your custom domain
4. Update DNS records as instructed

### DNS Configuration

For apex domain (example.com):
```
Type: A
Name: @
Value: 76.76.21.21
```

For www subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Performance Optimization

- Enable Vercel Analytics for insights
- Configure image optimization in `next.config.js`
- Set up CDN for static assets
- Enable compression and caching

## Monitoring

Consider setting up:
- Vercel Analytics
- Google Analytics
- Plausible Analytics (privacy-friendly)
- Sentry for error tracking

## Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify command palette (⌘K) works
- [ ] Test terminal Easter egg (~)
- [ ] Check mobile responsiveness
- [ ] Verify meta tags and SEO
- [ ] Test contact form/links
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test performance with Lighthouse

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear cache:
```bash
rm -rf .next node_modules
npm install
```

2. Check Node version (requires 18+):
```bash
node --version
```

3. Verify all dependencies are installed:
```bash
npm install
```

### Runtime Errors

Check browser console for errors and verify:
- Environment variables are set correctly
- All API endpoints are accessible
- External links are valid

## Updates

To update your deployed site:

1. Push changes to your repository
2. Vercel will automatically rebuild and redeploy
3. Or manually trigger deployment:
```bash
vercel --prod
```

---

For more help, refer to:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)







