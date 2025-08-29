# 🚀 Fatal Error - Tech Club Website

Welcome to the **Fatal Error** tech club website! A modern, responsive platform built with Next.js showcasing our community focused on IT, Programming, and Gaming.

## 🌟 Features

### 🏠 **Home Page**
- **Hero Section** with animated Fatal Error logo
- **Learning Tracks** overview (Learn, Enjoy, Compete)
- **Direct WhatsApp Integration** for community access
- **Responsive Design** for all devices

### 🎓 **Academy Section**
- **4 Comprehensive Learning Tracks:**
  - 🤖 **Artificial Intelligence** (LLMs, Neural Networks, NLP, Computer Vision)
  - ⚙️ **Machine Learning** (Algorithms, Advanced Techniques, Deployment)
  - 📊 **Data Science** (Python, EDA, Statistics, Big Data)
  - 🔒 **Cybersecurity** (Fundamentals, Ethical Hacking, Incident Response)
- **Interactive Course Cards** with difficulty levels
- **Google Colab Integration** for hands-on learning

### 🎨 **Design & UX**
- **Modern Green/Black Theme** reflecting tech aesthetics
- **Fatal Error Branding** with custom logo integration
- **Smooth Animations** and hover effects
- **Mobile-First** responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Actions + GitHub Pages
- **Icons:** Custom Fatal Error logo + Emojis

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/AnasAmchaar/Fatal-error-website.git
cd Fatal-error-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Local Build
```bash
npm run build        # Build the application
npm run export       # Export static files
npm run deploy       # Build + Export in one command
```

### Automatic Deployment
The project uses **GitHub Actions** for automatic deployment:

- **Triggers:** Push to `main` or `master` branch
- **Process:** Build → Test → Deploy to GitHub Pages
- **Live URL:** `https://anasamchaar.github.io/Fatal-error-website/`

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### GitHub Pages Setup
1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / `/ (root)`
4. The site will be available at: `https://yourusername.github.io/Fatal-error-website/`

## 📁 Project Structure

```
club-website/
├── src/
│   ├── app/
│   │   ├── academy/          # Academy page with learning tracks
│   │   │   └── page.tsx
│   │   ├── globals.css       # Global styles and color scheme
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Home page
├── public/
│   └── images/
│       └── fatal error logo.png  # Club logo
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── next.config.ts            # Next.js configuration
└── package.json
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 🎯 Roadmap

- [ ] Add blog/articles section
- [ ] Implement user authentication
- [ ] Add project showcase gallery
- [ ] Create member profiles
- [ ] Add event calendar
- [ ] Implement dark/light theme toggle

## 👥 Community

- **WhatsApp Group:** [Join Fatal Error Members](https://chat.whatsapp.com/Hu2Ic0x09qAE88ZWvrsDke?mode=ems_copy_c)
- **GitHub:** [Fatal Error Organization](https://github.com/AnasAmchaar)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **Vercel** for hosting and deployment solutions
- **Google Colab** for notebook integration

---

<div align="center">

**Built with ❤️ by the Fatal Error team**

*From the ashes, we rise* 🔥

</div>
