import Services from "@/Components/pages/Services";

export const metadata = {
  title: 'Architectural & Visualization Services | Voxelhaus Consultancy', 
  description: 'Explore Voxelhaus services including 3D visualization, floor plans, photo editing, and virtual staging designed to enhance real estate marketing.', 
  keywords: [
    'Digital Marketing for Real Estate Agents',
    'Real Estate Social Media Marketing',
    'Luxury Kitchens',
    'Modern Office Interior Design',
    'Interior Design Companies Near Me',
    'Interior Design Near Me',
    'Office Interior',
    'Architecture Consulting',
    'House blueprints free',
  ],
  openGraph: {
    title: 'Voxelhaus Consultancy | Complete Architectural & Visualization Services', 
    description: 'Voxelhaus Consultancy offers a complete range of architectural visualization services: 2D and 3D floor plan redraws, virtual staging, real estate photo enhancement, and realistic 3D renders that make your properties market-ready and visually outstanding.', 
    url: 'https://www.voxelhausconsultancy.com/services',
    siteName: 'Voxelhaus consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Voxelhaus Consultancy | Complete Architectural & Visualization Services', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxelhaus Consultancy | Complete Architectural & Visualization Services', 
    description: 'Voxelhaus Consultancy offers a complete range of architectural visualization services: 2D and 3D floor plan redraws, virtual staging, real estate photo enhancement, and realistic 3D renders that make your properties market-ready and visually outstanding.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/services', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/services',
    },
  },
};


export default function Page() {
  return <Services />;
}

