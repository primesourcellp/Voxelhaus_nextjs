import Contact from "@/Components/pages/Contact";

export const metadata = {
  title: 'Contact Voxelhaus Consultancy | Start Your Project Today!', 
  description: 'Connect with Voxelhaus Consultancy for 3D rendering, architectural design, or real estate visualization services. Let’s bring your vision to life.', 
  keywords: [
    'interior design companies near me',
    'interior design near me',
    'office interior',
    'architecture consulting',
    'home interior ideas',
    'interior wall design ideas',
    'interior design ideas for small spaces',
    'interior design ideas for living room',
    

   
  ],
  openGraph: {
    title: 'Contact Voxelhaus – Architecture & Visualization Experts', 
    description: 'Reach out to Voxelhaus Consultancy for customized 3D visualization, floor plan design, and real estate photo enhancement services. Our team is ready to collaborate and deliver high-quality visuals that elevate your property marketing and design projects.', 
    url: 'https://www.voxelhausconsultancy.com/contact',
    siteName: 'Voxelhaus consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Contact Voxelhaus – Architecture & Visualization Experts', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Voxelhaus – Architecture & Visualization Experts', 
    description: 'Reach out to Voxelhaus Consultancy for customized 3D visualization, floor plan design, and real estate photo enhancement services. Our team is ready to collaborate and deliver high-quality visuals that elevate your property marketing and design projects.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/contact', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/contact',
    },
  },
};



export default function Page() {
  return <Contact />;
}

