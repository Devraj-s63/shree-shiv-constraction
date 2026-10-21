import { MetadataRoute } from 'next';

const siteUrl = 'https://shree-shiv-constraction.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
