# portfolio-react

Personal portfolio built with vanilla React and Vite, ready for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages auto-deploy

This repo includes [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) which:

- runs on every push to `main`
- installs dependencies
- builds the app
- deploys the `dist` output to GitHub Pages

## One-time GitHub setup

1. Push this repo to GitHub.
2. Open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Make sure your default branch is `main`.

## Important repo-name note

The Vite config currently uses:

```ts
base: "/portifoilo-react/"
```

If you rename the GitHub repository to `portfolio-react`, also update [`vite.config.ts`](/home/skanda/Documents/GitHub/portifoilo-react/vite.config.ts:1) so the `base` matches `"/portfolio-react/"`.
