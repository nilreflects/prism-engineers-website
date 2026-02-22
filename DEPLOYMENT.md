# 🚀 Deploy to Vercel - Step by Step Guide

## Method 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate.

### Step 3: Deploy
Navigate to your project directory and run:
```bash
vercel
```

This will:
- Create a new project on Vercel
- Deploy your site
- Give you a preview URL

### Step 4: Deploy to Production
```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Vercel Dashboard (Easiest)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Initialize Git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Prism Engineers website"
   ```

3. Add remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings
5. Click "Deploy"

Your site will be live in ~30 seconds!

---

## Method 3: Deploy via Vercel Git Integration

### Quick Deploy Button

You can also use Vercel's one-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

---

## 🔧 Configuration

The project includes:
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - Project metadata
- ✅ `.gitignore` - Git ignore rules

No additional configuration needed!

---

## 🌐 Custom Domain

### Add Your Domain:

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

Example:
- `prismengineers.com`
- `www.prismengineers.com`

---

## 📊 After Deployment

### Check Your Site:
- ✅ Test on mobile devices
- ✅ Check all links work
- ✅ Verify video loads
- ✅ Test contact form
- ✅ Check 3D animations

### Performance:
- Run Lighthouse audit
- Check Core Web Vitals
- Monitor analytics

---

## 🔄 Updates

To update your site:

### Via CLI:
```bash
vercel --prod
```

### Via Git:
```bash
git add .
git commit -m "Update content"
git push
```
Vercel will auto-deploy!

---

## 🆘 Troubleshooting

### Issue: Video not loading
- Check video URL is accessible
- Ensure CORS is enabled
- Try different video format

### Issue: 3D not rendering
- Check Three.js CDN is loading
- Verify browser supports WebGL
- Check console for errors

### Issue: Slow loading
- Optimize images
- Enable Vercel's image optimization
- Check video file size

---

## 📞 Support

Need help? Contact:
- Vercel Support: https://vercel.com/support
- Documentation: https://vercel.com/docs

---

## 🎉 Success!

Your Prism Engineers website is now live on Vercel!

Share your URL:
`https://your-project.vercel.app`
