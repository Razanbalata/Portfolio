# Portfolio Project

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases professional skills, projects, services, and contact information with smooth animations and a clean design.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme Toggle**: Seamless theme switching with persistent user preference
- **Smooth Animations**: Custom animations including fade-in, scroll reveal, and typing effects
- **Interactive Sections**: Hero, About, Skills, Projects, Services, and Contact sections
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **TypeScript Support**: Fully typed for better development experience
- **Modern UI Components**: Clean, accessible components with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: Custom React hooks and CSS animations
- **Icons**: Lucide React icons
- **Linting**: ESLint with custom configuration
- **Build Tool**: Next.js built-in build system

## 📁 Project Structure

```
portfolio-project/
├── public/
│   └── assets/          # Static assets (images, icons, etc.)
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/      # Reusable React components
│   │   ├── animations/  # Animation components
│   │   ├── backgrounds/ # Background components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   └── ui/          # UI components (Card, Toggle, etc.)
│   ├── data/            # Static data files
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility functions and providers
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-project.git
cd portfolio-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 📝 Customization

### Personal Information
Update the following files to customize the portfolio with your information:

- `src/data/project.ts` - Add your projects
- `src/data/services.ts` - Add your services
- `src/components/sections/Hero.tsx` - Update hero section content
- `src/components/sections/About.tsx` - Update about section
- `src/components/sections/Skills.tsx` - Update skills
- `src/components/sections/Contact.tsx` - Update contact information

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize theme colors in `src/utils/ThemeProvider.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

Build the project:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

---

Built with ❤️ using Next.js and TypeScript
