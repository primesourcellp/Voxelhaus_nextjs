import Gallery from "@/Components/pages/Gallery";

export const metadata = {
  title: "Voxelhaus Gallery | Real Estate Visualization Portfolio",
  description:
    "Explore the Voxelhaus gallery showcasing our best architectural renders, virtual staging, and visualization work for residential and commercial projects.",
  keywords: [
    "Farmhouse House Plans",
    "Ranch Style House Plans",
    "Custom Home Plans",
    "Cottage House Plans",
    "4 Bedroom House Plans",
    "Custom House Plans",
    "Floorplan Creator",
    "Building Layout Maker",
  ],
  openGraph: {
    title: "Voxelhaus Portfolio – Architectural & Real Estate Visuals",
    description:
      "Browse our gallery of 3D renders, floor plans, and virtual staging projects that showcase the quality and precision of Voxelhaus Consultancy design expertise. See how we transform architectural ideas into realistic visuals that inspire and sell properties",
    url: "https://www.voxelhausconsultancy.com/gallery",
    siteName: "Voxelhaus Consultancy",
    images: [
      {
        url: "OG logo.png",
        width: 1200,
        height: 630,
        alt: "Voxelhaus Portfolio – Architectural & Real Estate Visuals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxelhaus Portfolio – Architectural & Real Estate Visuals",
    description:
      "Browse our gallery of 3D renders, floor plans, and virtual staging projects that showcase the quality and precision of Voxelhaus Consultancy design expertise. See how we transform architectural ideas into realistic visuals that inspire and sell properties",
    images: ["OG logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.voxelhausconsultancy.com/gallery",
    languages: {
      'en-IN': "https://www.voxelhausconsultancy.com/gallery",
    },
  },
};

export default function Page() {
  return <Gallery />;
}

