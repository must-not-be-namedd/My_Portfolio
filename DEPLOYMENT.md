# Deployment Guide - Khushi Nataraj Portfolio

This guide provides step-by-step instructions for deploying your portfolio website to various platforms.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git repository set up
- All dependencies installed (`npm install`)

### Local Testing
```bash
# Build the project
npm run build

# Serve the built files locally
npm run serve

# Access at http://localhost:3000
```

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

#### Step 1: Prepare Your Repository
1. Ensure your code is committed to GitHub
2. Make sure `netlify.toml` is in your root directory
3. Verify `package.json` has the correct build script

#### Step 2: Deploy to Netlify
1. Go to [Netlify](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your portfolio repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
6. Click "Deploy site"

#### Step 3: Custom Domain (Optional)
1. In your Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Configure DNS settings as instructed

### Option 2: Vercel

#### Step 1: Prepare Your Repository
1. Ensure your code is committed to GitHub
2. Make sure `vercel.json` is in your root directory

#### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the Vite configuration
5. Click "Deploy"

### Option 3: GitHub Pages

#### Step 1: Build and Deploy
```bash
# Build the project
npm run build

# The built files will be in dist/public/
```

#### Step 2: Configure GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: `main` or create a `gh-pages` branch
5. Folder: `/ (root)` or `/docs`

#### Step 3: Upload Built Files
- Upload the contents of `dist/public/` to your repository
- Or use GitHub Actions for automatic deployment

## 🔧 Configuration Files

### netlify.toml
```toml
[build]
  publish = "dist/public"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🐛 Troubleshooting

### Common Issues

#### Build Fails
- Check Node.js version (requires 18+)
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors: `npm run check`

#### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9
```

#### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables
If you need environment variables for deployment:
- **Netlify**: Add in Site settings > Environment variables
- **Vercel**: Add in Project settings > Environment variables

## 📝 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All sections are visible
- [ ] Images and assets load properly
- [ ] Contact links work
- [ ] Mobile responsiveness
- [ ] Performance is acceptable
- [ ] SEO meta tags are present
- [ ] Custom domain is configured (if applicable)

## 🔄 Continuous Deployment

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Netlify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './dist/public'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the platform-specific documentation
3. Check the browser console for errors
4. Verify all dependencies are correctly installed

---

**Happy Deploying! 🎉** 