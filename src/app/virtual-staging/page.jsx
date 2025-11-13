import VirtualStagingPage from "@/Components/pages/VirtualStagingPage";

export const metadata = {
  title: 'Virtual Staging Services | Real Estate Visualization by Voxelhaus', 
  description: 'Digitally design and furnish spaces with professional virtual staging from Voxelhaus to make every property listing stand out.', 
  keywords: [
    'room decorations',
    'new home decor',
    'bedroom decoration',
    'living room interior design',
    'small room decor',
    'wall decor ideas',
    'main door decoration ideas',

   
  ],
  openGraph: {
    title: 'Realistic Virtual Staging for Real Estate Photos | Voxelhaus', 
    description: 'Voxelhaus provides lifelike virtual staging services that transform empty properties into beautifully designed interiors. Our digital furnishing and decor techniques create realistic spaces that help realtors attract buyers, increase engagement, and sell faster.', 
    url: 'https://www.voxelhausconsultancy.com/virtual-staging',
    siteName: 'Voxelhaus consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Realistic Virtual Staging for Real Estate Photos | Voxelhaus', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Realistic Virtual Staging for Real Estate Photos | Voxelhaus', 
    description: 'Voxelhaus provides lifelike virtual staging services that transform empty properties into beautifully designed interiors. Our digital furnishing and decor techniques create realistic spaces that help realtors attract buyers, increase engagement, and sell faster.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/virtual-staging', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/virtual-staging',
    },
  },
};


export default function Page() {
  return <VirtualStagingPage />;
}

