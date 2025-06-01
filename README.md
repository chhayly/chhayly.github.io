# Personal Portfolio – Next.js Static Export

This is a personal portfolio website built with Next.js, statically exported for fast, serverless deployment. It features a modern design, responsive layout, and dynamic content management via JSON.

## Features

- Built with Next.js App Router
- Static export for fast, serverless hosting
- Responsive design for desktop and mobile
- Customizable content via `app/data/content.json`
- Modern UI with CSS variables and theming
- Sidebar navigation and mobile-friendly navbar
- Project, skills, experience, and publication sections
- Dark mode support

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view your site.

3. **Build and export static site:**

   ```bash
   npm run build && npm run export
   # or
   yarn build && yarn export
   ```

   The static site will be output to the `out/` directory.

## Deployment

You can deploy the `out/` directory to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## Customization

- Update your content in `app/data/content.json`.
- Modify styles in `public/css/style.css`.
- Add or update images in `public/images/`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Static Exports in Next.js](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

© 2025 Your Name. All rights reserved.
