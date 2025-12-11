import Home from "@/Components/pages/Home";

export const metadata = {
  title: '', 
  description: '', 
  keywords: [
    'Americas Best House Plans',
    'Carriage House Plans',
    '1200 Square Foot House Plans',
    '3D Blueprint Maker Online Free',
    'Interior Design Floor Plan',
    'Floorplan Drawing',
    'Home Layouts',
    'Blueprint Creator Free',
    'Low Budget Modern 3 Bedroom House Design',
  ],
  openGraph: {
    title: 'Voxelhaus Consultancy | Modern 3D Design & Visual Solutions', 
    description: 'Voxelhaus Consultancy creates modern 3D designs, floorplan layouts, and blueprint visuals, from 1200 sq ft homes to low-budget 3-bedroom and carriage house designs', 
    url: 'https://www.voxelhausconsultancy.com/',
    siteName: 'Voxelhaus Consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Voxelhaus Consultancy | Modern 3D Design & Visual Solutions', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxelhaus Consultancy – Modern Visual Design for Architecture & Real Estate', 
    description: 'Voxelhaus Consultancy delivers modern 3D designs, detailed floorplan drawings, and clear blueprint visuals. From 1200 sq ft and low-budget 3-bedroom homes to carriage house plans, we create compelling, accurate visuals for architecture and real estate.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/',
    },
  },
};


export default function Page() {
  return <Home />;
}

