import About from "@/Components/pages/About";

export const metadata = {
  title: 'About Voxelhaus Consultancy | Creative Architecture Experts', 
  description: 'Learn about Voxelhaus Consultancy, a trusted architectural visualization and design company focused on creativity, innovation, and quality results.', 
  keywords: [
    'Home Construction Plans',
    'Home Building Plans',
    'Architecture Design House Plans 3D',
    'Best Interior Design',
    'Interior Designers',
    'Real Estate Services',
    'Real Estate Marketing Agency',
    'Real Estate Marketing Strategies',
    'Barndominium home plans',
  ],
  openGraph: {
    title: 'About Voxelhaus – Innovative Architectural Design Team', 
    description: 'At Voxelhaus Consultancy, we blend architectural creativity with cutting-edge visualization. Our expert team specializes in sustainable design, 3D rendering, and visual storytelling that turn architectural ideas into powerful real estate marketing assets.', 
    url: 'https://www.voxelhausconsultancy.com/about',
    siteName: 'Voxelhaus Consultancy',
    images: [
      {
        url: 'OG logo.png', 
        width: 1200,
        height: 630,
        alt: 'Voxelhaus - Creative 3D Design & Visualization for Modern Architecture', 
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Voxelhaus – Innovative Architectural Design Team', 
    description: 'At Voxelhaus Consultancy, we blend architectural creativity with cutting-edge visualization. Our expert team specializes in sustainable design, 3D rendering, and visual storytelling that turn architectural ideas into powerful real estate marketing assets.', 
    images: ['OG logo.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.voxelhausconsultancy.com/about', 
    languages: {
      'en-IN': 'https://www.voxelhausconsultancy.com/about',
    },
  },
};

export default function Page() {
  return <About />;
}

