# Alam Bros - Professional Aluminium Workshop

A modern, responsive React website for Alam Bros Aluminium Workshop showcasing their services, expertise, and contact information.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Service Showcase**: Detailed presentation of aluminium workshop services
- **Contact Form**: Easy-to-use contact form for customer inquiries
- **Smooth Navigation**: One-page design with smooth scrolling between sections

## 🛠️ Technologies Used

- React 19
- Vite
- CSS3 with modern animations
- GitHub Pages for hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/alam-bros-items.git
cd alam-bros-items
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🌐 Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup Instructions:

1. **Create a new repository on GitHub** named `alam-bros-items`

2. **Link your local repository to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/alam-bros-items.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. **The site will automatically deploy!**
   - The GitHub Actions workflow will build and deploy your site
   - Your site will be available at: `https://YOUR_USERNAME.github.io/alam-bros-items/`

### Manual Build

To build the project manually:
```bash
npm run build
```

The built files will be in the `dist` folder.

## 📁 Project Structure

```
alam-bros-items/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.css             # Main application styles
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

## 🎨 Customization

### Updating Content

- **Company Information**: Edit the content in `src/App.jsx`
- **Services**: Modify the `services` array in `src/App.jsx`
- **Contact Details**: Update contact information in the Contact section
- **Styling**: Customize colors and styles in `src/App.css`

### Updating Base URL

If you rename the repository, update the `base` path in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',
})
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For any inquiries about Alam Bros services, please use the contact form on the website.

---

Built with ❤️ using React and Vite
