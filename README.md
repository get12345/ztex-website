# ZTEX Official Website

This is the official website for **ZTEX Inc.** (株式会社ZTEX), built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Premium design with smooth animations (Framer Motion) and responsive layout.
- **Service Showcases**: Detailed pages for AI Automation, Training, Model Engineering, and Creative Intelligence.
- **Contact Form**: Integrated with Nodemailer for email delivery.
- **CMS-like Structure**: Centralized data management for News and Cases.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To enable the contact form, you need to set the following environment variables in `.env` (local) or Vercel Project Settings (production):

```env
GMAIL_USER=info@ztex-japan.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx  # Your 16-digit App Password
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Add the **Environment Variables** (`GMAIL_USER`, `GMAIL_APP_PASSWORD`) in the Vercel dashboard.
4. Deploy!

