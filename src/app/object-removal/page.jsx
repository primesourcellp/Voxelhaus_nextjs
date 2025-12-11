import ObjectRemovalPage from "@/Components/pages/ObjectRemovalPage";

export const metadata = {
  title: 'Object Removal Services for Real Estate Photos | Voxelhaus Consultancy', 
  description: 'Remove unwanted objects from property photos with Voxelhaus. Clean, distraction-free images enhance every real estate listing.', 
  keywords: [
    'Real Estate Image Retouching',
    'House Planner Online Free',
    '2D Plan to 3D Converter',
    '2D to 3D Floor Plan Converter',
    '3D Floor Plan Designer',
    '3D Floor Plan Maker',
    '3D Design Home Plan',
    '3D Layout Design',
    'Small cottage house plans',
  ],
  openGraph: {
    title: 'Voxelhaus Object Removal | Perfect Every Property Image', 
    description: 'Voxelhaus specializes in precise object removal services for real estate visuals. We help property marketers achieve clean, professional images by eliminating clutter, unwanted elements, and background distractions to create visually appealing listings.', 
    url: 'https://www.voxelhausconsultancy.com/object-removal',
    siteName: 'Voxelhaus consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Voxelhaus Object Removal | Perfect Every Property Image', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxelhaus Object Removal | Perfect Every Property Image', 
    description: 'Remove unwanted objects from property photos with Voxelhaus Consultancy. Achieve spotless, distraction-free, and visually appealing real estate images that captivate buyers instantly.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/object-removal', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/object-removal',
    },
  },
};


export default function Page() {
  return <ObjectRemovalPage />;
}

