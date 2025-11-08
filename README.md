# Nagoya travel plan

This directory contains a single static page (`index.html`) that holds your Nagoya / Takayama / Okuhida itinerary including the ruby annotations you created with ChatGPT.

## Local preview

Open `index.html` directly in a browser or use any static file server (for example, `npx serve`).

## Deploying on Vercel

### Option 1 – Git-connected project
1. Push this folder to a Git repository (GitHub, GitLab, Bitbucket).
2. Visit <https://vercel.com/new>, choose the repository, and pick the root directory (`/`).
3. Build settings: framework = **Other**, output directory = **.** (the default). No build command is needed because `index.html` is pre-built.
4. Click **Deploy**. Vercel will serve `index.html` as `https://your-project.vercel.app`.

### Option 2 – Vercel CLI
1. Install the CLI once: `npm install -g vercel`.
2. From this folder run `vercel` to link the project; when prompted choose `Other` and leave the build/output blank.
3. Run `vercel deploy --prod` to push the static files live.

Any future edits to `index.html` can be redeployed through the same Git or CLI flow.
