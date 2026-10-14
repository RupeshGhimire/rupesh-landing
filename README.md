# Rupesh Ghimire

Data engineering portfolio built with React, TypeScript, Vite, and Tailwind CSS.

Run `npm run dev` for the local preview, `npm run typecheck` for type checks, and `npm run build` for the Freehostia build in `dist`.

The page contains a short introduction, toolkit, employment highlights, contact links, and a downloadable resume. Content lives in `src/lib/data.ts` and `src/components/sections.tsx`. Theme and animations live in `src/index.css` and `src/components/motion.tsx`.

The repository headshot and resume PDF are bundled by Vite. `public/.htaccess` is copied into the build for Freehostia HTTPS redirects, with an exception for ACME certificate renewal requests.

GitHub Pages uses the deployment workflow's `/rupesh-landing/` base path. Freehostia serves the contents of `dist` from the domain root.
