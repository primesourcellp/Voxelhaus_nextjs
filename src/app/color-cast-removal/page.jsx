import ColorCastRemovalPage from "@/Components/pages/ColorCastRemovalPage";

export const metadata = {
  title: 'Color Cast Removal Services | Real Estate Photo Editing – Voxelhaus', 
  description: 'Correct lighting and enhance colors in your property photos with expert color cast removal services from Voxelhaus Consultancy.',
  keywords: [
    '3D Drawing Plan',
    '3D View of Building Plan',
    'House Plan Design Online Free',
    'Room Decorations',
    'New Home Decor',
    'Bedroom Decoration',
    'Living Room Interior Design',
    'Small Room Décor',
    'Floor layout',
  ],
  openGraph: {
    title: 'Real Estate Photo Color Correction Experts – Voxelhaus', 
    description: 'Our color correction specialists remove unwanted tones and lighting imbalances from real estate photos. Voxelhaus ensures natural brightness and accurate colors that make your property images look professional, consistent, and ready for marketing.', 
    url: 'https://www.voxelhausconsultancy.com/color-cast-removal',
    siteName: 'Voxelhaus Consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Real Estate Photo Color Correction Experts – Voxelhaus', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Photo Color Correction Experts – Voxelhaus', 
    description: 'Our color correction specialists remove unwanted tones and lighting imbalances from real estate photos. Voxelhaus ensures natural brightness and accurate colors that make your property images look professional, consistent, and ready for marketing.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/color-cast-removal', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/color-cast-removal',
    },
  },
};

export default function Page() {
  return <ColorCastRemovalPage />;
}

