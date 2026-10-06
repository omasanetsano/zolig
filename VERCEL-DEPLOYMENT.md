# Vercel deployment

This folder is configured as a native Next.js project for Vercel.

## Deploy

1. Push this folder to a Git repository or import it with the Vercel CLI.
2. In Vercel, create a new project and select the repository.
3. Keep **Framework Preset** set to **Next.js**.
4. Keep the project root at the repository root.
5. Add the environment variables below, then deploy.

## Environment variables

- `RESEND_API_KEY`: Resend API key used by the enquiry form.
- `ENQUIRY_FROM`: sender on a domain verified in Resend, for example `ZOLIG Website <website@example.com>`.

Without those two values, the website still deploys and shows the company email and phone details, but the online enquiry form returns a clear temporary-unavailable message.

## Content manager

The exported content manager originally depended on ChatGPT Sites authentication, Cloudflare D1 and Cloudflare R2. Those bindings do not exist on Vercel. Public pages now safely use the bundled published content and all local assets. The `/admin` editing workflow and new CMS image uploads remain unavailable until Vercel-compatible authentication, database and Blob storage are connected.

## Commands

```bash
npm ci
npm run build
npm start
```
