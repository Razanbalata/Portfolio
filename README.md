# Razan Balata | Portfolio

A personal, interactive portfolio website showcasing **Razan Balata's** profile, experience, skills, and projects. Built with Next.js, React, and TypeScript, it supports both English and Arabic and offers a customizable browsing experience.

## ✨ Features

- **English and Arabic:** Switch between `/en` and `/ar`, with right-to-left layout support for Arabic.
- **Interactive introduction:** A welcome screen and animated transition before entering the portfolio.
- **Complete portfolio sections:** Home, About, Services, Skills, Experience, Projects, Education, and Contact.
- **Project showcase:** Browse projects, their technologies, and available live demos and source code.
- **Personalized browsing experience:** Light and dark themes, customizable colors, background effects, a custom cursor, focus mode, and a music player.
- **Motion and visual details:** Scroll reveal animations, a scroll progress bar, and animated text.
- **Contact and resume:** A contact form for sending messages by email and a link to download the resume.
- **Responsive design:** An interface that adapts to different screen sizes.

## 🧰 Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) |
| UI library | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Internationalization and routing | [next-intl](https://next-intl.dev/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/) |
| Email delivery | [Nodemailer](https://nodemailer.com/) |

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9 or later.
- npm.

### Installation and development

```bash
git clone https://github.com/Razanbalata/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Visit `/en` for English or `/ar` for Arabic.

### Available scripts

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Run the production build
```

## ✉️ Contact Form Configuration

The contact API uses Nodemailer with Gmail credentials. Create a `.env.local` file in the project root and add:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

Use a **Google App Password** instead of your regular account password. Keep these values private and never commit `.env.local` to Git. Restart the development server after adding the variables, and configure the same environment variables in your hosting provider before deploying.

## 🗂️ Project Structure

```text
src/
├── app/
│   ├── [locale]/        # Localized pages and layout
│   └── api/contact/     # Contact message API
├── components/
│   ├── animations/      # Animation components
│   ├── intro/           # Welcome and introduction screens
│   ├── sections/        # Portfolio page sections
│   └── ui/              # UI components and customization tools
├── data/                # Project, experience, skills, and services data
├── i18n/                # Internationalization and routing configuration
├── hooks/               # Custom React hooks
└── utils/               # Site configuration and shared information
messages/                # English and Arabic translations
public/assets/           # Project images and static assets
```

## 🎨 Customizing Content

- **Personal information, social links, and resume:** `src/utils/constants.ts`.
- **Projects:** `src/data/project.ts`.
- **Services, skills, experience, and education:** The corresponding files in `src/data/`.
- **Translations:** `messages/en.json` and `messages/ar.json`.
- **Global appearance:** `src/app/globals.css` and the customization tools in `src/components/ui/sidebar-tools/`.

When adding new interface text, update both translation files to keep the content available in both languages.

## 🌐 Deployment

The project can be deployed to [Vercel](https://vercel.com/) or any hosting platform that supports Next.js:

1. Connect the GitHub repository to your hosting provider.
2. Add `EMAIL_USER` and `EMAIL_PASS` to the project's environment variables.
3. Build the project with `npm run build`, then deploy it.

## 📄 License

No license has been specified for this project. Please contact the project owner before reusing its content or assets.

---

Made with care to bring projects and skills together in one place ✨
