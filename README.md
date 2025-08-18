# 🚀 UmrahCheck Modern Frontend

Ein modernes, hochperformantes Frontend für UmrahCheck mit Next.js 14, TypeScript, Tailwind CSS und Shadcn/ui.

## ✨ Features

- **Next.js 14** mit App Router und React Server Components
- **TypeScript** für Type Safety
- **Tailwind CSS** für Premium Styling mit Emerald/Teal Farbschema
- **Shadcn/ui** Components für moderne UI
- **Framer Motion** für flüssige Animationen
- **Lucide React** für Premium Icons
- **Responsive Design** mit Mobile-First Ansatz
- **Performance Optimiert** mit automatischer Optimierung
- **SEO Ready** mit umfassenden Meta Tags

## 🛠️ Tech Stack

### Core
- Next.js 14.0.4
- React 18.2.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1

### UI & Animation
- Shadcn/ui Components
- Framer Motion 10.18.0
- Lucide React Icons
- Radix UI Primitives

## 🚀 Installation & Setup

### Voraussetzungen
- Node.js 18.17+ oder 20.5+
- npm, yarn oder pnpm

### 1. Abhängigkeiten installieren

**Falls npm Cache-Probleme bestehen:**
```bash
# NPM Cache reparieren
sudo chown -R $(whoami) ~/.npm
npm cache clean --force

# Oder alternative Package Manager
yarn install
# oder
pnpm install
```

**Standard Installation:**
```bash
npm install
```

### 2. Entwicklungsserver starten
```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## 📁 Projektstruktur

```
umrahcheck-frontend-v2/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Globale Styles mit CSS Variables
│   │   ├── layout.tsx         # Root Layout mit Navbar
│   │   └── page.tsx           # Homepage mit Hero Section
│   ├── components/
│   │   ├── layout/           # Layout Components
│   │   │   └── navbar.tsx    # Premium Navbar mit UmrahCheck Logo
│   │   ├── sections/         # Page Sections
│   │   │   └── hero-section.tsx # Hero Section mit CTA
│   │   ├── hotels/           # Hotel-spezifische Components
│   │   │   └── hotel-card.tsx # Premium Hotel Cards
│   │   └── ui/               # Shadcn/ui Base Components
│   └── lib/
│       └── utils.ts          # Utility Functions
├── tailwind.config.ts        # Tailwind CSS Konfiguration
└── package.json             # Dependencies & Scripts
```

## 🎨 Design System

### Farben
- **Primary**: Emerald (Grün) - #10b981
- **Secondary**: Teal (Türkis) - #14b8a6
- **Accent**: Cyan - #06b6d4

### Components
- **Glassmorphism**: Moderne Transparenz-Effekte
- **Gradient Buttons**: Emerald zu Teal Verläufe
- **Animationen**: Framer Motion für flüssige Übergänge
- **Responsive**: Mobile-First Design

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
# 1. GitHub Repository erstellen
git init
git add .
git commit -m "Initial commit: Modern UmrahCheck Frontend"

# 2. Mit GitHub verbinden
gh repo create umrahcheck-frontend-v2 --public
git remote add origin https://github.com/dercryptomuslim/umrahcheck-frontend-v2.git
git push -u origin main

# 3. Mit Vercel verbinden
vercel
```

## 🆘 Troubleshooting

### NPM Cache Probleme
```bash
sudo chown -R $(whoami) ~/.npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Entwickelt mit ❤️ für die Umrah-Community**
