# 🚀 Quick Deployment Guide - Alam Bros Website

## Step-by-Step Instructions to Host on GitHub

### 1️⃣ Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `alam-bros-items`
4. Make it **Public**
5. **DO NOT** initialize with README (we already have one)
6. Click **"Create repository"**

### 2️⃣ Push Your Code to GitHub

Copy and paste these commands in your terminal (replace YOUR_USERNAME with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/alam-bros-items.git
git push -u origin main
```

### 3️⃣ Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **"Build and deployment"**:
   - Source: Select **"GitHub Actions"**
5. That's it! GitHub will automatically deploy your site

### 4️⃣ Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/alam-bros-items/`

---

## 🎉 You're Done!

Your Alam Bros website is now live on the internet!

### Making Updates

Whenever you want to update your website:

1. Make your changes to the code
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
3. GitHub will automatically rebuild and redeploy your site

---

## 🔧 Troubleshooting

**If the site doesn't load:**
- Make sure GitHub Pages is set to "GitHub Actions" source
- Check the Actions tab for any errors
- Verify the `base` path in `vite.config.js` matches your repository name

**If you get a 404 error:**
- The `base` path in `vite.config.js` must match your repository name exactly

---

## 📱 Sharing Your Website

Once deployed, share this link:
**`https://YOUR_USERNAME.github.io/alam-bros-items/`**

Replace `YOUR_USERNAME` with your actual GitHub username.
