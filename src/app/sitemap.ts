// File: app/sitemap.ts

export const dynamic = 'force-static';

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.voxelhausconsultancy.com';
  const lastModified = '2025-11-13';

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/services/`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/gallery/`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/real-estate/`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/object-removal/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/color-cast-removal/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/sky-replacement/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/floor-plans/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/virtual-staging/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
  ];
}
