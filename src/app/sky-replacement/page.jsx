import SkyReplacementPage from "@/Components/pages/SkyReplacementPage";

export const metadata = {
  title: 'Sky Replacement Services for Real Estate Photos | Voxelhaus Consultancy', 
  description: 'Replace dull skies with bright, realistic ones. Voxelhaus offers sky replacement to enhance outdoor real estate photos instantly.', 
  keywords: [
    'Wall Decor Ideas',
    'Main Door Decoration Ideas',
    'Home Plans',
    'House Plan Drawing Online',
    'Home Layout Design Free',
    'Free House Plans and Designs',
    'Home Floor Plan Designer',
    '3D View of House Plans',
    'Floorplan generator',
  ],
  openGraph: {
    title: 'Voxelhaus Sky Replacement | Make Every Property Picture Perfect', 
    description: 'Transform overcast property photos into stunning daylight shots with Voxelhaus sky replacement services. Our experts replace dull skies with natural, bright, and realistic tones that elevate your property visuals and boost real estate appeal.', 
    url: 'https://www.voxelhausconsultancy.com/sky-replacement/',
    siteName: 'Voxelhaus consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Voxelhaus Sky Replacement | Make Every Property Picture Perfect', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxelhaus Sky Replacement | Make Every Property Picture Perfect', 
    description: 'Transform overcast property photos into stunning daylight shots with Voxelhaus sky replacement services. Our experts replace dull skies with natural, bright, and realistic tones that elevate your property visuals and boost real estate appeal.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/sky-replacement/', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/sky-replacement/',
    },
  },
};


export default function Page() {
  return <SkyReplacementPage />;
}

