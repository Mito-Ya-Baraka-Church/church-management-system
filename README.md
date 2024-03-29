<a href="">
  <img alt="Next.js 14" src="https:/vercel.ai/opengraph-image.png" />
  <h1 align="center">Church Management System </h1>
</a>

<p align="center">
  A Church Management System built with Next.js 14, React Server Components, and Supabase.
</p>

<br/>

## Features

- [Next.js 14](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Supabase](https://supabase.com) for authentication and data storage

### Configure your site url

In the Supabase Dashboard, navigate to [Auth > URL configuration](https://app.supabase.com/project/_/auth/url-configuration) and set your Vercel URL as the site URL.

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Church Management System . It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI and authentication provider accounts.

Copy the `.env.example` file and populate the required env vars:

```bash
cp .env.example .env
```

[Install the Supabase CLI](https://supabase.com/docs/guides/cli) and start the local Supabase stack:

```bash
npm install supabase --save-dev
npx supabase start
```

Install the local dependencies and start dev mode:

```bash
pnpm install
pnpm dev
```

<!-- you can add types from project by running pnpm run update-types -->

You can update the types from the project by running:

```bash
pnpm run update-types
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## Authors

This Project was built by Mito-Ya-Baraka-Church Developers and contributors:

- [Fredy German](https://twitter.com/fredygermanm)
- etc.

## Credits

Images from [Unsplash](https://unsplash.com/) and [Dall-E](https://labs.openai.com/).
