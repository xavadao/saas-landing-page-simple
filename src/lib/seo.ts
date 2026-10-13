import type { Metadata } from 'next';

export const SITE_URL = "https://vibed-saas-simple.xavainf.com";
export const SITE_NAME = "Nexus Intelligence Platform";

export function pageMetadata(title: string, description: string, pathname = '/'): Metadata {
  const url = new URL(pathname, SITE_URL).href;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type: 'website', locale: 'en_US' },
    twitter: { card: 'summary', title, description },
  };
}

export const DEMO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: SITE_NAME,
  description: "Explore a black-and-gold SaaS marketing demo with product, industry, company, resource, and demo enquiry pages. Built with XavaInf.",
  url: SITE_URL,
  inLanguage: 'en',
  genre: 'Interactive website demonstration',
  creator: { '@type': 'Organization', name: 'XavaInf', url: 'https://xavainf.com' },
};
