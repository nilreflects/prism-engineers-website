# Prism Engineers and Construction

A stunning, production-ready portfolio website for Prism Engineers and Construction featuring 3D effects, video backgrounds, and smooth scrollytelling animations.

## 🌟 Features

- **Video Background Hero** - Cinematic construction site video
- **3D Floating Gallery** - Three.js powered floating images
- **Smooth Scrollytelling** - Lenis smooth scroll with GSAP animations
- **Responsive Design** - Works perfectly on all devices
- **SEO Optimized** - Complete meta tags and sitemap
- **Performance Optimized** - Fast loading with lazy loading
- **Accessibility** - ARIA labels and semantic HTML

## 🚀 Live Demo

Visit: [Your Vercel URL will be here]

## 📦 Tech Stack

- HTML5
- CSS3 (with modern features)
- JavaScript (ES6+)
- Three.js (3D graphics)
- GSAP (animations)
- Lenis (smooth scroll)

## 🛠️ Local Development

1. Clone the repository
2. Open `index.html` in a browser, or
3. Run a local server:
   ```bash
   python -m http.server 8000
   ```
4. Visit `http://localhost:8000`

## 📤 Deployment

This site is deployed on Vercel. To deploy your own:

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

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript and Three.js
├── manifest.json       # PWA manifest
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
├── .htaccess           # Apache configuration
├── vercel.json         # Vercel configuration
└── README.md           # Documentation
```

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #c8a882;
    --gold: #d4af37;
    --secondary-color: #1a1f2e;
}
```

### Content
- Update company info in `index.html`
- Replace images with your own
- Modify text content in HTML sections

### Video Background
Replace the video URL in `index.html`:
```html
<source src="YOUR_VIDEO_URL.mp4" type="video/mp4">
```

## 📊 Performance

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Lighthouse Score: 90+

## 📝 License

MIT License - feel free to use for your projects

## 📧 Contact

For questions or support, contact: info@prismengineers.com

---

Built with ❤️ by Prism Engineers and Construction
