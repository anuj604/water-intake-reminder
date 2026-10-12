# Water Intake Reminder

A simple water-intake tracker built with React and Vite.

## Run locally

Requirements: Node.js 22 or later.

```sh
npm ci
npm run dev
```

Create a production build with:

```sh
npm run build
```

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main`.

For the first deployment:

1. Create a public GitHub repository named `water-intake-reminder`.
2. Push this project folder to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
4. Check the **Actions** tab; the deployed site will be available at `https://<your-github-username>.github.io/water-intake-reminder/` after the workflow succeeds.
