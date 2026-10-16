# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

Push to `main` to build and deploy the static app to GitHub Pages. The workflow is in
`.github/workflows/deploy-pages.yml`; in the repository settings, set **Pages → Build and
deployment → Source** to **GitHub Actions**.

The Pages build uses the `/MemberDash2027/` base path and publishes a `404.html` fallback so
React Router client-side routes work when opened directly or refreshed. For local testing with
the same base path, run `GITHUB_PAGES=true npm run build` and serve `build/client`.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
