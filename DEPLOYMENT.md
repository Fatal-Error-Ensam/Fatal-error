# 🚀 Deployment Guide - Fatal Error Website

This guide will help you deploy the Fatal Error website to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to the GitHub repository
2. **GitHub Pages**: Repository must have GitHub Pages enabled
3. **Permissions**: You need admin access to the repository

## ⚙️ Setup GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/AnasAmchaar/Fatal-error-website`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### Step 2: Repository Settings

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

### Step 3: Environment Setup (if needed)

1. Go to **Settings** → **Environments**
2. If `github-pages` environment doesn't exist, it will be created automatically
3. Ensure deployment protection rules are appropriate for your needs

## 🔧 Workflow Files

The repository includes two GitHub Actions workflows:

### 1. `github-pages.yml` (Recommended)
- **Purpose**: Simple, reliable deployment to GitHub Pages
- **Triggers**: Push to main/master branch, manual dispatch
- **Output**: Deploys to `https://anasamchaar.github.io/Fatal-error-website/`

### 2. `deploy.yml` (Advanced)
- **Purpose**: Comprehensive CI/CD with security scanning
- **Features**: Linting, type checking, security audit, multiple deployment options

## 🚀 Deployment Process

### Automatic Deployment

1. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "your commit message"
   git push origin main
   ```

2. **Monitor Deployment**:
   - Go to **Actions** tab in your GitHub repository
   - Watch the workflow run
   - Check for any errors in the logs

3. **Access Your Site**:
   - Once deployed, visit: `https://anasamchaar.github.io/Fatal-error-website/`
   - It may take a few minutes for changes to appear

### Manual Deployment

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch (usually `main`)
5. Click **Run workflow**

## 🛠️ Troubleshooting

### Common Issues

1. **403 Permission Error**:
   - Check repository permissions in Settings → Actions → General
   - Ensure "Read and write permissions" is selected

2. **Workflow Not Running**:
   - Check if GitHub Actions are enabled for your repository
   - Verify the workflow file syntax

3. **Build Failures**:
   - Check the Actions logs for specific error messages
   - Ensure all dependencies are properly listed in `package.json`

4. **404 Page Not Found**:
   - Verify GitHub Pages is enabled and source is set to "GitHub Actions"
   - Check if the `out/` directory is being generated correctly

### Debug Steps

1. **Check Build Output**:
   ```bash
   npm run build
   ls -la out/  # Verify files are generated
   ```

2. **Test Locally**:
   ```bash
   npm run build
   npx serve out/  # Test the built site locally
   ```

3. **Verify Configuration**:
   - Check `next.config.ts` for correct `basePath` and `assetPrefix`
   - Ensure `.nojekyll` file exists in `public/` directory

## 🔄 Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file**:
   ```bash
   echo "your-domain.com" > public/CNAME
   ```

2. **Update DNS Settings**:
   - Point your domain to GitHub Pages
   - Add CNAME record: `your-domain.com` → `anasamchaar.github.io`

3. **Configure in Repository**:
   - Go to Settings → Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## 📊 Monitoring

### Check Deployment Status

1. **GitHub Actions**: Monitor workflow runs in the Actions tab
2. **GitHub Pages**: Check deployment status in Settings → Pages
3. **Live Site**: Verify the website is accessible and functioning

### Performance

- The site uses Next.js static export for optimal performance
- All assets are optimized and cached
- Images are served directly from GitHub Pages

## 🎯 Next Steps

After successful deployment:

1. **Share the URL**: `https://anasamchaar.github.io/Fatal-error-website/`
2. **Test all features**: Navigation, Academy page, WhatsApp links
3. **Monitor**: Set up alerts for deployment failures
4. **Optimize**: Use GitHub Insights to monitor traffic and performance

---

**Need Help?** Check the GitHub Actions logs or create an issue in the repository!
