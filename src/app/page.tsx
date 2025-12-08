
import Home from "@/Components/pages/Home";

export const metadata = {
  title: "Voxelhaus Consultancy | Digital Architecture & 3D Visualization Studio",
  description:
    "Voxelhaus transforms ideas into immersive 3D designs. We craft architectural renders, virtual staging, and floor plans that elevate property marketing and design.",
  keywords: [
    'Build Design',
    'Real Estate Company',
    'Real Estate Agency',
    'Realtor Companies',
    'The Real Estate Company',
    'Sustainable Design Architect',
    'Architect Consulting',
    'Consultant Architect',
    'Home layout design',
  ],
  openGraph: {
    title: "Voxelhaus – 3D Visualization & Architecture Experts",
    description:
      "Voxelhaus Consultancy delivers high-quality 3D visualization, floor plan design, and virtual staging solutions. We help architects, realtors, and developers create visually captivating property presentations that attract attention and drive engagement.",
    url: "https://www.voxelhausconsultancy.com/",
    siteName: "Voxelhaus Consultancy",
    images: [
      {
        url: "OG logo.png",
        width: 1200,
        height: 630,
        alt: "Voxelhaus - Creative 3D Design & Visualization for Modern Architecture",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxelhaus – 3D Visualization & Architecture Experts",
    description:
      "Voxelhaus Consultancy delivers high-quality 3D visualization, floor plan design, and virtual staging solutions. We help architects, realtors, and developers create visually captivating property presentations that attract attention and drive engagement.",
    images: ["OG logo.png"],
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

