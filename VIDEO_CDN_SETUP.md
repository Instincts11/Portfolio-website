# Video CDN Setup Guide

Your portfolio is now configured to load videos from external CDN instead of committing them to git. This keeps your repository small and deployments fast.

## Current Status
Videos are still stored locally in `/public` folder for development. To deploy to production:

## Step 1: Choose a CDN Service

### Option 1: **Cloudinary** (Recommended - Free Tier)
- **Sign up**: https://cloudinary.com (free tier supports portfolio use)
- **Upload method**: Dashboard or API
- **Setup**: Takes ~10 minutes

### Option 2: **AWS S3**
- **Sign up**: https://aws.amazon.com
- **Storage**: Free tier: 5 GB/month
- **Setup**: More complex

### Option 3: **GitHub Releases**
- **Advantage**: No signup needed, integrated with GitHub
- **Limitation**: Not designed for streaming (slower)
- **Setup**: ~5 minutes

## Step 2: Upload Videos to CDN

### For Cloudinary:
1. Go to https://cloudinary.com/console
2. Click **Media Library**
3. Upload all `.mp4` files from `public/` folder
4. Note the **Public ID** for each video

### For GitHub Releases:
1. Go to your repo → Releases
2. Create a new release (Tag: `v1.0-videos`)
3. Attach all `.mp4` files
4. Copy the download URLs

## Step 3: Update Video URLs

Edit `src/components/Projects/Projects.tsx` and replace the VIDEO_URLS with your CDN links:

```typescript
const VIDEO_URLS = {
  football: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/portfolio/football-demo.mp4",
  bakery: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/portfolio/bakery-demo.mp4",
  furniture: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/portfolio/furniture-demo.mp4",
  lostFound: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/portfolio/lost-and-found.mp4",
  space: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/portfolio/space-demo.mp4",
  travel: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1/portfolio/travel-demo.mp4"
};
```

## Step 4: Clean Local Videos (Optional)

If you want to remove videos from your local repo to save space:

```bash
rm public/*.mp4
git add .
git commit -m "Remove video files (now hosted on CDN)"
git push
```

## Step 5: Push to GitHub

```bash
git add .
git commit -m "Configure external CDN for videos"
git push -u origin main
```

**Result**: ~50 MB repo instead of 500+ MB ✅

## Testing Locally

While developing, videos will still load from `/public` folder. Once deployed to Netlify, update the URLs to use your CDN links.

## Netlify Environment Variables

To avoid hardcoding URLs, you can use environment variables:

1. In Netlify dashboard → Site settings → Build & deploy → Environment
2. Add variables like:
   ```
   VITE_VIDEO_FOOTBALL=https://your-cdn-url/football-demo.mp4
   ```
3. Update your code to use `import.meta.env.VITE_VIDEO_FOOTBALL`

## Questions?
- Cloudinary Docs: https://cloudinary.com/documentation/upload_widget
- AWS S3 Docs: https://docs.aws.amazon.com/s3/
