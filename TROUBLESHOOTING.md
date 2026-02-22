# 🔧 Troubleshooting Guide

## Issue: Website shows basic HTML without styles/animations

### ✅ Fixed! 

I've updated the file paths to use absolute paths:
- `/styles.css` instead of `styles.css`
- `/script.js` instead of `script.js`

### To Apply the Fix:

#### Option 1: Run the Fix Script
```bash
fix-and-deploy.bat
```

#### Option 2: Manual Steps
```bash
git add .
git commit -m "Fix: Update file paths for Vercel deployment"
git push
vercel --prod
```

---

## Common Issues & Solutions

### 1. CSS Not Loading

**Symptoms:**
- Plain HTML with no styling
- Black text on white background
- No colors or layout

**Solutions:**
✅ Clear browser cache (Ctrl + Shift + Delete)
✅ Wait 1-2 minutes for Vercel CDN to update
✅ Try incognito/private browsing mode
✅ Check browser console for errors (F12)

### 2. JavaScript Not Working

**Symptoms:**
- No animations
- No 3D effects
- No smooth scrolling
- Static page

**Solutions:**
✅ Check if CDN scripts are loading (F12 → Network tab)
✅ Verify script.js is loading
✅ Check browser console for errors
✅ Ensure browser supports WebGL (for 3D)

### 3. Video Not Playing

**Symptoms:**
- Black screen in hero section
- Video placeholder visible

**Solutions:**
✅ Check video URL is accessible
✅ Try different browser
✅ Check if autoplay is blocked
✅ Verify video format (MP4 recommended)

### 4. Images Not Loading

**Symptoms:**
- Broken image icons
- Missing project images

**Solutions:**
✅ Check Unsplash URLs are accessible
✅ Verify image URLs in HTML
✅ Check network connection
✅ Try different CDN or host images locally

---

## Vercel-Specific Issues

### Issue: Files Not Found (404)

**Solution:**
Check `vercel.json` configuration:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ]
}
```

### Issue: Wrong MIME Types

**Solution:**
Add headers in `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/styles.css",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/css"
        }
      ]
    }
  ]
}
```

### Issue: Caching Problems

**Solution:**
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → General
4. Scroll to "Build & Development Settings"
5. Clear build cache
6. Redeploy

---

## Browser Console Debugging

### Open Developer Tools:
- Chrome/Edge: F12 or Ctrl+Shift+I
- Firefox: F12 or Ctrl+Shift+K
- Safari: Cmd+Option+I

### Check for Errors:
1. Go to "Console" tab
2. Look for red error messages
3. Common errors:
   - `Failed to load resource` → File path issue
   - `CORS error` → Cross-origin issue
   - `Uncaught ReferenceError` → Script loading issue

### Check Network:
1. Go to "Network" tab
2. Reload page (Ctrl+R)
3. Check if all files load (green status)
4. Red files = not loading properly

---

## Testing Checklist

After deployment, verify:

- [ ] Homepage loads
- [ ] CSS styles applied
- [ ] Hero video plays
- [ ] 3D particles visible
- [ ] Smooth scrolling works
- [ ] Navigation menu works
- [ ] Project images load
- [ ] Contact form visible
- [ ] Mobile responsive
- [ ] All animations work

---

## Still Having Issues?

### 1. Check Vercel Logs
```bash
vercel logs
```

### 2. Redeploy
```bash
vercel --prod --force
```

### 3. Local Test
```bash
python -m http.server 8000
```
Visit: http://localhost:8000

If it works locally but not on Vercel:
- File path issue
- Vercel configuration issue
- CDN caching issue

### 4. Contact Support
- Vercel Support: https://vercel.com/support
- Check Vercel Status: https://www.vercel-status.com/

---

## Quick Fixes

### Force Redeploy:
```bash
vercel --prod --force
```

### Clear All Caches:
1. Browser cache (Ctrl+Shift+Delete)
2. Vercel cache (Dashboard → Settings)
3. CDN cache (wait 5 minutes)

### Test Different Browser:
- Chrome
- Firefox
- Safari
- Edge

### Check Mobile:
- Use Chrome DevTools mobile emulator
- Test on actual mobile device

---

## Prevention

### Before Deploying:
1. ✅ Test locally first
2. ✅ Check all file paths
3. ✅ Verify CDN links work
4. ✅ Test in multiple browsers
5. ✅ Check console for errors

### After Deploying:
1. ✅ Wait 1-2 minutes for CDN
2. ✅ Clear browser cache
3. ✅ Test in incognito mode
4. ✅ Check all pages/sections
5. ✅ Verify mobile responsiveness

---

**Your site should now work perfectly! 🎉**
