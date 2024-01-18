import { env } from "@/env.mjs";
import packageJson from "../package.json";

export type PackageJson = typeof packageJson;
export type SiteConfig = typeof siteConfig;

const { version } = packageJson;

export const siteConfig = {
  title: "Mito Ya Baraka Church Management System",
  name: " Mito Ya Baraka",
  canonical: "https://nextjs-starter-shadcn.vercel.app/",
  domain: "https://nextjs-starter-shadcn.vercel.app/",
  nextUrl: env.NEXT_PUBLIC_APP_URL,
  image:
    "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg",
  type: "website",
  twitterHandle: "@fredygerman_",
  description:
    "Amazing starter with Supabase Next.js, TypeScript, ESLint, Prettier, chadcn-ui",
  mainNav: [
    {
      title: "Register",
      href: "/register",
      icon: "register",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
  ],
  dashboardNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Members",
      href: "/dashboard/members",
      icon: "members",
    },
    {
      title: "Attendance",
      href: "/dashboard/attendance",
      icon: "attendance",
    },
    {
      title: "Events",
      href: "/dashboard/events",
      icon: "events",
    },
    {
      title: "Finances",
      href: "/dashboard/finances",
      icon: "finances",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
  footerNav: [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      icon: "privacy-policy",
    },
    {
      title: "Terms of Service",
      href: "/terms-and-conditions",
      icon: "terms-and-conditions",
    },
    {
      title: "Contact",
      href: "/contact",
      icon: "contact",
    },
  ],
  // please don't remove this array, it's used for the auth middleware
  // please don't add "/" to this array, it's already added in the middleware
  additionalPublicPages: [
    "/about",
    "/blog",
    "/blogs",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    logo: "/logo.svg",
  },
  socials: [
    {
      name: "Twitter",
      url: "https://twitter.com/fredygerman_",
      asset: "/twitter.svg",
    },
    {
      name: "Github",
      url: "https://github.com/fredygerman",
      asset: "/github.svg",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/fredygerman/",
      asset: "/linkedin.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fredygerman_/",
      asset: "/instagram.svg",
    },
  ],
  contacts: [
    {
      name: "Email",
      url: "mailto:example@gmail.com",
      asset: "/email.svg",
    },
    {
      name: "Phone",
      url: "tel:+1-202-555-0104",
      asset: "/phone.svg",
    },
  ],
  showGitHubBtn: false,
  githubUrl: "https://github.com/fredygerman",
  version: version,
  author: "fredygerman",
  authorUrl: "https://github.com/fredygerman",
  gitHubApiRepoName: "fredygerman/next-js-supabase-starter",
};
