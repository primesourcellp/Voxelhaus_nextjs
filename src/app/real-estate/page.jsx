import RealEstatePage from "@/Components/pages/RealEstatePage";

export const metadata = {
  title: 'Real Estate Visualization Services | Voxelhaus Consultancy', 
  description: 'Elevate your real estate listings with professional 3D visualization, photo editing, and virtual staging services from Voxelhaus Consultancy.', 
  keywords: [
    'realtor companies',
    'real estate company',
    'real estate services',
    'real estate marketing agency',
    'digital marketing for real estate agents',
    'real estate marketing strategies',
   
  ],
  openGraph: {
    title: 'Real Estate Visualization Experts – Voxelhaus Consultancy', 
    description: 'Voxelhaus Consultancy provides advanced visualization solutions for real estate businesses. From photorealistic 3D renders to virtual staging and image enhancement, we create property visuals that help realtors attract buyers and close sales faster.', 
    url: 'https://www.voxelhausconsultancy.com/real-estate',
    siteName: 'Voxelhaus consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: '', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate Visualization Experts – Voxelhaus Consultancy', 
    description: 'Voxelhaus Consultancy provides advanced visualization solutions for real estate businesses. From photorealistic 3D renders to virtual staging and image enhancement, we create property visuals that help realtors attract buyers and close sales faster.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/real-estate', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/real-estate',
    },
  },
};


export default function Page() {
  return <RealEstatePage />;
}

