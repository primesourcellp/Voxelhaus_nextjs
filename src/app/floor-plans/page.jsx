import FloorPlansPage from "@/Components/pages/FloorPlansPage";

export const metadata = {
  title: '2D & 3D Floor Plan Design Services | Voxelhaus Consultancy', 
  description: 'Get accurate 2D and 3D floor plans designed for real estate marketing. Voxelhaus delivers clear, buyer-friendly layouts.', 
  keywords: [
    '3D Architectural Rendering',
    'Architectural Rendering',
    'Architectural Visualisation',
    '3D Rendering of a House',
    'Floor Plan Designers',
    'House Plans',
    'Floor Planner',
    'House Layouts',
  ],
  openGraph: {
    title: 'Professional 2D & 3D Floor Plan Designers – Voxelhaus', 
    description: 'Voxelhaus creates precise and visually engaging 2D and 3D floor plans that help buyers understand property layouts effortlessly. From residential to commercial spaces, our designs improve marketing presentation and enhance buyer confidence.', 
    url: 'https://www.voxelhausconsultancy.com/floor-plans',
    siteName: 'Voxelhaus consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Professional 2D & 3D Floor Plan Designers – Voxelhaus', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional 2D & 3D Floor Plan Designers – Voxelhaus', 
    description: 'Voxelhaus creates precise and visually engaging 2D and 3D floor plans that help buyers understand property layouts effortlessly. From residential to commercial spaces, our designs improve marketing presentation and enhance buyer confidence.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/floor-plans', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/floor-plans',
    },
  },
};


export default function Page() {
  return <FloorPlansPage />;
}

