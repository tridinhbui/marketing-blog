# Marketing Strategy & Insights Blog

A modern marketing blog built with React, TypeScript, and Vite featuring case studies, insights, and an AI-powered chatbot assistant.

## 🚀 Features

- **Case Studies**: In-depth analysis of marketing strategies from brands like Adidas, Romano, and Starbucks
- **Blog Posts**: Marketing insights, growth strategies, and consumer psychology
- **AI Assistant (TriBot)**: Powered by Google's Gemini AI to help analyze marketing strategies and creative assets
- **Dark/Light Mode**: Full theme support
- **Responsive Design**: Mobile-first approach with beautiful UI

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for navigation
- **Lucide React** for icons
- **Google Generative AI** for AI features
- **CSS** with dark mode support

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/tridinhbui/marketing-blog.git
cd marketing-blog
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your free API key from: https://makersuite.google.com/app/apikey

4. Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deploy to Vercel

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variable:
   - `VITE_GEMINI_API_KEY` = your Gemini API key
4. Deploy!

Vercel will automatically detect Vite and configure the build settings.

## 📁 Project Structure

```
├── components/          # React components
│   ├── CaseStudyCard.tsx
│   ├── Layout.tsx
│   ├── PostCard.tsx
│   └── TriBot.tsx
├── context/            # React context providers
│   └── ThemeContext.tsx
├── data/               # Mock data and content
│   └── mockData.ts
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Blog.tsx
│   ├── CaseStudies.tsx
│   ├── About.tsx
│   ├── Resources.tsx
│   ├── Contact.tsx
│   └── PostDetail.tsx
├── public/             # Static assets
│   └── images/
├── types.ts            # TypeScript type definitions
└── App.tsx             # Main app component
```

## 🎨 Features Overview

### Case Studies
Analysis of real marketing campaigns with:
- Problem statement
- Strategic approach
- Key insights and takeaways

### AI Assistant (TriBot)
- Chat with AI about marketing strategies
- Upload and analyze creative assets
- Get insights based on blog content
- Powered by Google's Gemini AI

### Blog Categories
- **Case Study**: Deep dives into brand strategies
- **Growth**: Growth hacking and scaling insights
- **Strategy**: Marketing strategy frameworks
- **Consumer**: Consumer behavior and psychology

## 📝 License

MIT License - feel free to use this project for your own portfolio or learning.

## 👤 Author

**Tri Bui**

Marketing strategist and analyst focused on consumer behavior, branding, and growth strategies.
